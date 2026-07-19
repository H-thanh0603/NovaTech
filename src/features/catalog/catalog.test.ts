import { describe, expect, it } from "vitest";

import { InMemoryCatalogRepository } from "./catalog.repository";
import { formatVnd, getFeaturedProducts } from "./catalog.service";
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
    expect(formatVnd(28_990_000)).toBe("28.990.000 ₫");
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
