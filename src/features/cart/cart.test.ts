import { describe, expect, it } from "vitest";

import { InMemoryCatalogRepository } from "@/features/catalog/catalog.repository";
import {
  addItem,
  computeTotals,
  createCartItem,
  createEmptyCart,
  removeItem,
  updateItemQuantity,
  validateQuantity,
} from "@/features/cart/cart.service";
import type { CartItem } from "@/features/cart/cart.types";

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

describe("cart service", () => {
  it("creates an empty cart", () => {
    const cart = createEmptyCart();
    expect(cart.items).toEqual([]);
    expect(cart.subtotal).toBe(0);
    expect(cart.itemCount).toBe(0);
  });

  it("computes totals correctly", () => {
    const items = [makeItem({ quantity: 2, lineTotal: 2_000_000 }), makeItem({ variantId: "v2", quantity: 3, lineTotal: 3_000_000 })];
    const totals = computeTotals(items);
    expect(totals.subtotal).toBe(5_000_000);
    expect(totals.itemCount).toBe(5);
  });

  it("adds a new item to the cart", () => {
    const cart = createEmptyCart();
    const updated = addItem(cart, makeItem());
    expect(updated.items.length).toBe(1);
    expect(updated.subtotal).toBe(1_000_000);
    expect(updated.itemCount).toBe(1);
  });

  it("merges duplicate variant items", () => {
    const cart = addItem(createEmptyCart(), makeItem({ quantity: 1 }));
    const updated = addItem(cart, makeItem({ quantity: 2 }));
    expect(updated.items.length).toBe(1);
    expect(updated.items[0].quantity).toBe(3);
    expect(updated.items[0].lineTotal).toBe(3_000_000);
  });

  it("updates item quantity", () => {
    const cart = addItem(createEmptyCart(), makeItem({ quantity: 1 }));
    const updated = updateItemQuantity(cart, "v1", 5);
    expect(updated.items[0].quantity).toBe(5);
    expect(updated.items[0].lineTotal).toBe(5_000_000);
    expect(updated.subtotal).toBe(5_000_000);
  });

  it("removes item when quantity is zero or less", () => {
    const cart = addItem(createEmptyCart(), makeItem({ quantity: 2 }));
    const updated = updateItemQuantity(cart, "v1", 0);
    expect(updated.items.length).toBe(0);
  });

  it("removes an item by variantId", () => {
    const cart = addItem(createEmptyCart(), makeItem({ quantity: 1 }));
    const updated = removeItem(cart, "v1");
    expect(updated.items.length).toBe(0);
    expect(updated.subtotal).toBe(0);
  });

  it("validates quantity", () => {
    expect(validateQuantity(1)).toBe(1);
    expect(validateQuantity(99)).toBe(99);
    expect(() => validateQuantity(0)).toThrow(RangeError);
    expect(() => validateQuantity(-1)).toThrow(RangeError);
    expect(() => validateQuantity(100)).toThrow(RangeError);
    expect(() => validateQuantity(1.5)).toThrow(RangeError);
  });

  it("creates a cart item from repository", async () => {
    const repository = new InMemoryCatalogRepository();
    const detail = await repository.getProductBySlug("macbook-air-m4-13");
    const firstSku = detail!.variants[0].sku;
    const item = await createCartItem(repository, "macbook-air-m4-13", firstSku, 2);
    expect(item.productName).toBe("MacBook Air M4 13\"");
    expect(item.sku).toBe(firstSku);
    expect(item.quantity).toBe(2);
    expect(item.lineTotal).toBe(item.unitPrice * 2);
  });

  it("rejects unknown product slug", async () => {
    const repository = new InMemoryCatalogRepository();
    await expect(createCartItem(repository, "nonexistent", "SKU", 1)).rejects.toThrow();
  });

  it("rejects unknown variant sku", async () => {
    const repository = new InMemoryCatalogRepository();
    await expect(createCartItem(repository, "macbook-air-m4-13", "BAD-SKU", 1)).rejects.toThrow();
  });
});
