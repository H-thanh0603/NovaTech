import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { CartView } from "@/components/cart/cart-view";
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
      quantity: 2,
      unitPrice: 25_000_000,
      lineTotal: 50_000_000,
      imageUrl: "https://example.com/laptop.jpg",
      imageAlt: "Test Laptop",
    },
  ]),
  subtotal: 50_000_000,
  itemCount: 2,
});

describe("cart view component", () => {
  it("renders cart line items with product name", () => {
    const markup = renderToStaticMarkup(<CartView cart={mockCart} />);
    expect(markup).toContain("Test Laptop");
  });

  it("renders subtotal", () => {
    const markup = renderToStaticMarkup(<CartView cart={mockCart} />);
    expect(markup).toContain("50.000.000");
  });

  it("renders checkout link", () => {
    const markup = renderToStaticMarkup(<CartView cart={mockCart} />);
    expect(markup).toContain('href="/thanh-toan"');
  });

  it("renders empty state when cart is empty", () => {
    const emptyCart: Cart = Object.freeze({ items: Object.freeze([]), subtotal: 0, itemCount: 0 });
    const markup = renderToStaticMarkup(<CartView cart={emptyCart} />);
    expect(markup).toContain("Giỏ hàng trống");
  });
});
