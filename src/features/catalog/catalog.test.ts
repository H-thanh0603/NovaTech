import { describe, expect, it } from "vitest";

import { InMemoryCatalogRepository } from "./catalog.repository";
import { formatVnd, formatReviewDate, getFeaturedProducts, getProductBySlug, listBrands, listCategories, listProducts } from "./catalog.service";
import type { CatalogProduct } from "./catalog.types";

const products: readonly CatalogProduct[] = [
  {
    id: "one",
    slug: "one",
    name: "One",
    category: "Laptop",
    price: 1,
    imageUrl: "/one.jpg",
    imageAlt: "Laptop One trên mặt bàn",
    badge: "Mới",
    verdict: "Lựa chọn thứ nhất",
    specs: ["Thông số A"],
    featured: true,
  },
  {
    id: "two",
    slug: "two",
    name: "Two",
    category: "Điện thoại",
    price: 2,
    imageUrl: "/two.jpg",
    imageAlt: "Điện thoại Two nhìn từ mặt lưng",
    verdict: "Lựa chọn thứ hai",
    specs: ["Thông số B"],
    featured: true,
  },
];

describe("catalog service", () => {
  it("formats integer VND without decimals", () => {
    const formatted = formatVnd(28_990_000);
    expect(formatted).toContain("28.990.000");
    expect(formatted).toContain("₫");
    expect(formatted.replace(/[^\d]/g, "")).toBe("28990000");
  });

  it("returns featured products in curated order", async () => {
    const repository = new InMemoryCatalogRepository(products);

    expect((await getFeaturedProducts(repository)).map((item) => item.id)).toEqual([
      "one",
      "two",
    ]);
  });

  it("handles an empty catalog", async () => {
    const repository = new InMemoryCatalogRepository([]);

    await expect(getFeaturedProducts(repository)).resolves.toEqual([]);
  });

  it("does not expose mutable repository state", async () => {
    const repository = new InMemoryCatalogRepository(products);
    const firstRead = await repository.listFeatured();

    expect(Object.isFrozen(firstRead)).toBe(true);
    expect(Object.isFrozen(firstRead[0])).toBe(true);
  });
});

describe("catalog listing", () => {
  it("lists all products with default pagination", async () => {
    const repository = new InMemoryCatalogRepository();
    const result = await listProducts(repository);

    expect(result.total).toBe(6);
    expect(result.page).toBe(1);
    expect(result.pageSize).toBe(12);
    expect(result.totalPages).toBe(1);
    expect(result.items.length).toBe(6);
  });

  it("filters by category slug", async () => {
    const repository = new InMemoryCatalogRepository();
    const result = await listProducts(repository, { categorySlug: "laptop" });

    expect(result.total).toBe(2);
    expect(result.items.every((p) => p.category === "Laptop")).toBe(true);
  });

  it("sorts by price ascending", async () => {
    const repository = new InMemoryCatalogRepository();
    const result = await listProducts(repository, { sort: "price-asc" });

    const prices = result.items.map((p) => p.price);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  it("sorts by price descending", async () => {
    const repository = new InMemoryCatalogRepository();
    const result = await listProducts(repository, { sort: "price-desc" });

    const prices = result.items.map((p) => p.price);
    expect(prices).toEqual([...prices].sort((a, b) => b - a));
  });

  it("paginates results", async () => {
    const repository = new InMemoryCatalogRepository();
    const page1 = await listProducts(repository, { pageSize: 2, page: 1 });
    const page2 = await listProducts(repository, { pageSize: 2, page: 2 });

    expect(page1.items.length).toBe(2);
    expect(page1.totalPages).toBe(3);
    expect(page2.items.length).toBe(2);
    expect(page2.page).toBe(2);
  });

  it("returns empty items for out-of-range page", async () => {
    const repository = new InMemoryCatalogRepository();
    const result = await listProducts(repository, { pageSize: 2, page: 99 });

    expect(result.items.length).toBe(0);
    expect(result.total).toBe(6);
  });
});

describe("product detail", () => {
  it("returns product detail by slug", async () => {
    const repository = new InMemoryCatalogRepository();
    const detail = await getProductBySlug(repository, "macbook-air-m4-13");

    expect(detail).not.toBeNull();
    expect(detail!.name).toBe("MacBook Air M4 13\"");
    expect(detail!.variants.length).toBe(3);
    expect(detail!.highlights.length).toBeGreaterThan(0);
    expect(detail!.considerations.length).toBeGreaterThan(0);
    expect(detail!.reviews.length).toBeGreaterThan(0);
  });

  it("returns null for unknown slug", async () => {
    const repository = new InMemoryCatalogRepository();
    const detail = await getProductBySlug(repository, "nonexistent-product");

    expect(detail).toBeNull();
  });

  it("returns frozen detail object", async () => {
    const repository = new InMemoryCatalogRepository();
    const detail = await getProductBySlug(repository, "iphone-16-pro");

    expect(Object.isFrozen(detail)).toBe(true);
    expect(Object.isFrozen(detail!.variants)).toBe(true);
    expect(Object.isFrozen(detail!.reviews)).toBe(true);
  });
});

describe("categories and brands", () => {
  it("lists all categories", async () => {
    const repository = new InMemoryCatalogRepository();
    const categories = await listCategories(repository);

    expect(categories.length).toBe(4);
    expect(categories.some((c) => c.slug === "laptop")).toBe(true);
  });

  it("lists all brands", async () => {
    const repository = new InMemoryCatalogRepository();
    const brands = await listBrands(repository);

    expect(brands.length).toBe(5);
    expect(brands.some((b) => b.slug === "apple")).toBe(true);
  });
});

describe("review date formatting", () => {
  it("formats ISO date to Vietnamese date string", () => {
    const formatted = formatReviewDate("2026-06-15T08:00:00Z");
    expect(formatted).toMatch(/15/);
    expect(formatted).toMatch(/2026/);
  });
});
