import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { CheckoutForm } from "@/components/checkout/checkout-form";
import type { Cart } from "@/features/cart/cart.types";

const mockCart: Cart = Object.freeze({
  items: Object.freeze([
    {
      variantId: "v1",
      productId: "p1",
      productName: "Test Laptop",
      productSlug: "test-laptop",
      variantName: "16GB",
      sku: "TEST-16GB",
      quantity: 1,
      unitPrice: 25_000_000,
      lineTotal: 25_000_000,
      imageUrl: "",
      imageAlt: "Test Laptop",
    },
  ]),
  subtotal: 25_000_000,
  itemCount: 1,
});

describe("checkout form component", () => {
  it("renders address fields", () => {
    const markup = renderToStaticMarkup(<CheckoutForm cart={mockCart} />);
    expect(markup).toContain('name="name"');
    expect(markup).toContain('name="phone"');
    expect(markup).toContain('name="province"');
    expect(markup).toContain('name="district"');
    expect(markup).toContain('name="ward"');
    expect(markup).toContain('name="line1"');
  });

  it("renders email field", () => {
    const markup = renderToStaticMarkup(<CheckoutForm cart={mockCart} />);
    expect(markup).toContain('name="email"');
    expect(markup).toContain('type="email"');
  });

  it("renders hidden coupon field for form submission", () => {
    const markup = renderToStaticMarkup(<CheckoutForm cart={mockCart} />);
    expect(markup).toContain('name="couponCode"');
  });

  it("renders order summary with product name", () => {
    const markup = renderToStaticMarkup(<CheckoutForm cart={mockCart} />);
    expect(markup).toContain("Test Laptop");
  });

  it("renders checkout step indicator and continue button", () => {
    const markup = renderToStaticMarkup(<CheckoutForm cart={mockCart} />);
    expect(markup).toContain("Giao hàng");
    expect(markup).toContain("Tiếp tục");
  });

  it("renders empty state when cart is empty", () => {
    const emptyCart: Cart = Object.freeze({ items: Object.freeze([]), subtotal: 0, itemCount: 0 });
    const markup = renderToStaticMarkup(<CheckoutForm cart={emptyCart} />);
    expect(markup).toContain("Giỏ hàng trống");
  });
});
