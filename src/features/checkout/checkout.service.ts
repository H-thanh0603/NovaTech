import type { Cart, CheckoutAddress, CheckoutFormState, OrderResult } from "@/features/cart/cart.types";

export function validateCheckoutForm(form: CheckoutFormState): string[] {
  const errors: string[] = [];

  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.push("Email không hợp lệ.");
  }

  if (!form.phone || !/^[0-9+\-\s()]{8,15}$/.test(form.phone)) {
    errors.push("Số điện thoại không hợp lệ.");
  }

  if (!form.address.name.trim()) {
    errors.push("Vui lòng nhập họ tên người nhận.");
  }

  if (!form.address.province.trim()) {
    errors.push("Vui lòng chọn tỉnh/thành.");
  }

  if (!form.address.district.trim()) {
    errors.push("Vui lòng chọn quận/huyện.");
  }

  if (!form.address.ward.trim()) {
    errors.push("Vui lòng chọn phường/xã.");
  }

  if (!form.address.line1.trim()) {
    errors.push("Vui lòng nhập địa chỉ chi tiết.");
  }

  return errors;
}

export function generateOrderCode(): string {
  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const randomPart = String(Math.floor(Math.random() * 10000)).padStart(4, "0");
  return `NX-${datePart}-${randomPart}`;
}

export function generateTrackingToken(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function validateCartForCheckout(cart: Cart): string[] {
  const errors: string[] = [];

  if (cart.items.length === 0) {
    errors.push("Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
  }

  for (const item of cart.items) {
    if (item.quantity < 1) {
      errors.push(`Số lượng không hợp lệ cho ${item.productName}.`);
    }
  }

  return errors;
}

export function computeOrderTotals(
  cart: Cart,
  shippingTotal: number = 0,
  discountTotal: number = 0,
): { subtotal: number; shippingTotal: number; discountTotal: number; grandTotal: number } {
  const subtotal = cart.subtotal;
  const grandTotal = Math.max(0, subtotal + shippingTotal - discountTotal);
  return { subtotal, shippingTotal, discountTotal, grandTotal };
}

export function createAddressSnapshot(address: CheckoutAddress) {
  return {
    name: address.name,
    phone: address.phone,
    province: address.province,
    district: address.district,
    ward: address.ward,
    line1: address.line1,
  };
}

export function createOrderResult(code: string, trackingToken: string, grandTotal: number): OrderResult {
  return Object.freeze({ code, trackingToken, grandTotal });
}
