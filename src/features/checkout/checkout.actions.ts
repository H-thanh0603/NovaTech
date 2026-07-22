"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { InMemoryCatalogRepository } from "@/features/catalog/catalog.repository";
import {
  addItem,
  createCartItem,
  hydrateCart,
  removeItem,
  updateItemQuantity,
  validateQuantity,
} from "@/features/cart/cart.service";
import type { Cart, CartItem } from "@/features/cart/cart.types";
import {
  CART_COOKIE_MAX_AGE,
  CART_COOKIE_NAME,
  cartToCookieData,
  parseCartCookie,
  serializeCartCookie,
} from "@/lib/cookies";
import {
  computeOrderTotals,
  createAddressSnapshot,
  generateOrderCode,
  generateTrackingToken,
  validateCartForCheckout,
  validateCheckoutForm,
} from "@/features/checkout/checkout.service";
import { redeemCoupon, validateCoupon } from "@/features/payment/coupon.service";
import { createPaymentSession } from "@/features/payment/payment.service";
import { createOrder } from "@/features/order/order.service";
import type { CheckoutFormState } from "@/features/cart/cart.types";

async function getCartFromCookie(): Promise<Cart> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(CART_COOKIE_NAME)?.value;
  const data = parseCartCookie(raw);
  const repository = new InMemoryCatalogRepository();
  return hydrateCart(repository, data.items);
}

async function saveCartCookie(cart: Cart): Promise<void> {
  const cookieStore = await cookies();
  const data = cartToCookieData(cart);
  cookieStore.set(CART_COOKIE_NAME, serializeCartCookie(data), {
    httpOnly: true,
    sameSite: "lax",
    maxAge: CART_COOKIE_MAX_AGE,
    path: "/",
  });
}

export async function addToCartAction(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const slug = String(formData.get("slug") ?? "");
    const sku = String(formData.get("sku") ?? "");
    const quantity = parseInt(String(formData.get("quantity") ?? "1"), 10);
    const validQty = validateQuantity(quantity);
    const repository = new InMemoryCatalogRepository();
    const item = await createCartItem(repository, slug, sku, validQty);
    const cart = await getCartFromCookie();
    const updated = addItem(cart, item);
    await saveCartCookie(updated);
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Không thể thêm vào giỏ hàng." };
  }
}

export async function updateCartAction(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const variantId = String(formData.get("variantId") ?? "");
    const quantity = parseInt(String(formData.get("quantity") ?? "1"), 10);
    const validQty = validateQuantity(quantity);
    const cart = await getCartFromCookie();
    const updated = updateItemQuantity(cart, variantId, validQty);
    await saveCartCookie(updated);
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Không thể cập nhật giỏ hàng." };
  }
}

export async function removeFromCartAction(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const variantId = String(formData.get("variantId") ?? "");
    const cart = await getCartFromCookie();
    const updated = removeItem(cart, variantId);
    await saveCartCookie(updated);
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Không thể xóa sản phẩm." };
  }
}

export async function placeOrderAction(
  _prevState: { success: boolean; error?: string; orderCode?: string } | null,
  formData: FormData,
): Promise<{ success: boolean; error?: string; orderCode?: string }> {
  const form: CheckoutFormState = {
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    address: {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      province: String(formData.get("province") ?? ""),
      district: String(formData.get("district") ?? ""),
      ward: String(formData.get("ward") ?? ""),
      line1: String(formData.get("line1") ?? ""),
    },
    note: String(formData.get("note") ?? "") || undefined,
    couponCode: String(formData.get("couponCode") ?? "") || undefined,
    paymentMethod: String(formData.get("paymentMethod") ?? "") || undefined,
  };

  const formErrors = validateCheckoutForm(form);
  if (formErrors.length > 0) {
    return { success: false, error: formErrors[0] };
  }

  const cart = await getCartFromCookie();
  const cartErrors = validateCartForCheckout(cart);
  if (cartErrors.length > 0) {
    return { success: false, error: cartErrors[0] };
  }

  const repository = new InMemoryCatalogRepository();
  const verifiedItems: CartItem[] = [];
  for (const item of cart.items) {
    try {
      const verified = await createCartItem(repository, item.productSlug, item.sku, item.quantity);
      verifiedItems.push(verified);
    } catch {
      return { success: false, error: `Sản phẩm ${item.productName} không còn khả dụng.` };
    }
  }

  const verifiedSubtotal = verifiedItems.reduce((sum, item) => sum + item.lineTotal, 0);

  let discountTotal = 0;
  const shippingTotal = 0;
  if (form.couponCode) {
    const couponResult = validateCoupon(form.couponCode, verifiedSubtotal, shippingTotal, form.phone);
    if (!couponResult.valid) {
      return { success: false, error: couponResult.error };
    }
    discountTotal = couponResult.discountTotal;
  }

  const totals = computeOrderTotals(
    { ...cart, subtotal: verifiedSubtotal, items: Object.freeze(verifiedItems) },
    shippingTotal,
    discountTotal,
  );
  const orderCode = generateOrderCode();
  const trackingToken = generateTrackingToken();
  const addressSnapshot = createAddressSnapshot(form.address);
  const { paymentId } = createPaymentSession(orderCode, totals.grandTotal);

  createOrder({
    code: orderCode,
    trackingToken,
    paymentId,
    email: form.email,
    phone: form.phone,
    items: verifiedItems.map((item) => ({
      productName: item.productName,
      variantName: item.variantName,
      quantity: item.quantity,
      lineTotal: item.lineTotal,
    })),
    couponCode: form.couponCode || undefined,
    paymentMethod: form.paymentMethod || undefined,
    address: addressSnapshot,
    subtotal: totals.subtotal,
    shippingTotal: totals.shippingTotal,
    discountTotal: totals.discountTotal,
    grandTotal: totals.grandTotal,
  });

  if (form.couponCode && discountTotal > 0) {
    redeemCoupon(form.couponCode, form.phone);
  }

  const cookieStore = await cookies();
  cookieStore.delete(CART_COOKIE_NAME);

  redirect(`/don-hang/${orderCode}?token=${trackingToken}`);
}
