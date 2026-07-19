import { describe, expect, it } from "vitest";

import { createEmptyCart, addItem } from "@/features/cart/cart.service";
import type { CartItem, CheckoutFormState } from "@/features/cart/cart.types";
import {
  computeOrderTotals,
  generateOrderCode,
  generateTrackingToken,
  validateCartForCheckout,
  validateCheckoutForm,
} from "@/features/checkout/checkout.service";

function makeItem(overrides: Partial<CartItem> = {}): CartItem {
  return Object.freeze({
    variantId: "v1",
    productId: "p1",
    productName: "Test Product",
    productSlug: "test-product",
    variantName: "Default",
    sku: "TEST-001",
    quantity: 1,
    unitPrice: 1_000_000,
    lineTotal: 1_000_000,
    imageUrl: "/test.jpg",
    imageAlt: "Test image",
    ...overrides,
  });
}

const validForm: CheckoutFormState = {
  email: "test@example.com",
  phone: "0901234567",
  address: {
    name: "Nguyễn Văn A",
    phone: "0901234567",
    province: "TP. HCM",
    district: "Quận 1",
    ward: "Bến Nghé",
    line1: "123 Lê Lợi",
  },
};

describe("checkout validation", () => {
  it("validates a correct form", () => {
    const errors = validateCheckoutForm(validForm);
    expect(errors).toEqual([]);
  });

  it("rejects invalid email", () => {
    const errors = validateCheckoutForm({ ...validForm, email: "not-an-email" });
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toContain("Email");
  });

  it("rejects missing phone", () => {
    const errors = validateCheckoutForm({ ...validForm, phone: "" });
    expect(errors.length).toBeGreaterThan(0);
  });

  it("rejects missing address fields", () => {
    const errors = validateCheckoutForm({
      ...validForm,
      address: { ...validForm.address, line1: "" },
    });
    expect(errors.some((e) => e.includes("địa chỉ"))).toBe(true);
  });
});

describe("cart checkout validation", () => {
  it("rejects empty cart", () => {
    const cart = createEmptyCart();
    const errors = validateCartForCheckout(cart);
    expect(errors).toContain("Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
  });

  it("passes for cart with items", () => {
    const cart = addItem(createEmptyCart(), makeItem());
    const errors = validateCartForCheckout(cart);
    expect(errors).toEqual([]);
  });
});

describe("order code generation", () => {
  it("generates a code with NX prefix", () => {
    const code = generateOrderCode();
    expect(code).toMatch(/^NX-\d{8}-\d{4}$/);
  });

  it("generates unique tracking tokens", () => {
    const tokens = new Set<string>();
    for (let i = 0; i < 100; i++) {
      tokens.add(generateTrackingToken());
    }
    expect(tokens.size).toBe(100);
  });
});

describe("order totals", () => {
  it("computes totals with shipping and discount", () => {
    const cart = addItem(createEmptyCart(), makeItem({ quantity: 2, lineTotal: 2_000_000 }));
    const totals = computeOrderTotals(cart, 30_000, 100_000);
    expect(totals.subtotal).toBe(2_000_000);
    expect(totals.shippingTotal).toBe(30_000);
    expect(totals.discountTotal).toBe(100_000);
    expect(totals.grandTotal).toBe(1_930_000);
  });

  it("clamps grand total to zero", () => {
    const cart = addItem(createEmptyCart(), makeItem({ quantity: 1, lineTotal: 100_000 }));
    const totals = computeOrderTotals(cart, 0, 500_000);
    expect(totals.grandTotal).toBe(0);
  });
});
