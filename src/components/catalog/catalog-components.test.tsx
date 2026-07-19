import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { ProductDetail } from "@/components/catalog/product-detail";
import { FilterBar } from "@/components/catalog/filter-bar";
import { ProductList } from "@/components/catalog/product-list";
import { ReviewList } from "@/components/catalog/review-list";
import type { CatalogProductDetail, CatalogReview } from "@/features/catalog/catalog.types";

const mockProduct: CatalogProductDetail = {
  id: "test-1",
  slug: "test-laptop",
  name: "Test Laptop Pro",
  category: "Laptop",
  categorySlug: "laptop",
  brand: "TestBrand",
  brandSlug: "testbrand",
  description: "Mô tả chi tiết về laptop.",
  shortDescription: "Laptop mạnh mẽ",
  price: 25_000_000,
  compareAtPrice: 30_000_000,
  verdict: "Laptop tốt nhất cho công việc.",
  highlights: Object.freeze(["Pin 20 giờ", "Màn hình 2K"]),
  considerations: Object.freeze(["Nặng 1.8kg"]),
  specs: Object.freeze(["CPU: Intel i7", "RAM: 16GB"]),
  media: Object.freeze([
    { id: "m1", url: "https://example.com/m1.jpg", alt: "Front", type: "IMAGE" as const, sortOrder: 0 },
    { id: "m2", url: "https://example.com/m2.jpg", alt: "Side", type: "IMAGE" as const, sortOrder: 1 },
  ]),
  variants: Object.freeze([
    { id: "v1", sku: "TEST-16GB", name: "16GB RAM", attributes: {}, price: 25_000_000, stock: 10, lowStockAt: 3 },
    { id: "v2", sku: "TEST-32GB", name: "32GB RAM", attributes: {}, price: 28_000_000, stock: 5, lowStockAt: 3 },
  ]),
  reviews: Object.freeze([
    { id: "r1", authorName: "Nguyễn A", rating: 5, title: "Tuyệt vời", content: "Rất hài lòng", verified: true, createdAt: "2026-01-01T00:00:00Z" },
  ]),
  badge: "Bán chạy",
  featured: true,
};

describe("product detail component", () => {
  it("renders verdict and considerations", () => {
    const markup = renderToStaticMarkup(<ProductDetail product={mockProduct} />);
    expect(markup).toContain("Laptop tốt nhất cho công việc.");
    expect(markup).toContain("Nặng 1.8kg");
  });

  it("renders highlights", () => {
    const markup = renderToStaticMarkup(<ProductDetail product={mockProduct} />);
    expect(markup).toContain("Pin 20 giờ");
    expect(markup).toContain("Màn hình 2K");
  });

  it("renders variant names", () => {
    const markup = renderToStaticMarkup(<ProductDetail product={mockProduct} />);
    expect(markup).toContain("16GB RAM");
    expect(markup).toContain("32GB RAM");
  });

  it("renders product name in breadcrumb", () => {
    const markup = renderToStaticMarkup(<ProductDetail product={mockProduct} />);
    expect(markup).toContain("Test Laptop Pro");
  });
});

describe("filter bar component", () => {
  it("renders category and brand labels", () => {
    const markup = renderToStaticMarkup(
      <FilterBar
        categories={Object.freeze([{ id: "c1", name: "Laptop", slug: "laptop" }])}
        brands={Object.freeze([{ id: "b1", name: "TestBrand", slug: "testbrand" }])}
        activeCategory={undefined}
        activeBrand={undefined}
        activeSort="featured"
      />,
    );
    expect(markup).toContain("Laptop");
    expect(markup).toContain("TestBrand");
  });
});

describe("product list component", () => {
  it("renders product names", () => {
    const markup = renderToStaticMarkup(
      <ProductList
        result={{
          items: Object.freeze([
            { id: "p1", slug: "p1", name: "Product 1", category: "Laptop", price: 10_000_000, imageUrl: "", imageAlt: "P1", verdict: "Tốt", specs: Object.freeze([]), featured: true },
          ]),
          total: 1,
          page: 1,
          pageSize: 12,
          totalPages: 1,
        }}
        basePath="/san-pham"
      />,
    );
    expect(markup).toContain("Product 1");
  });

  it("renders empty state when no products", () => {
    const markup = renderToStaticMarkup(
      <ProductList
        result={{ items: Object.freeze([]), total: 0, page: 1, pageSize: 12, totalPages: 1 }}
        basePath="/san-pham"
      />,
    );
    expect(markup).toContain("Không tìm thấy sản phẩm");
  });
});

describe("review list component", () => {
  const mockReviews: readonly CatalogReview[] = Object.freeze([
    { id: "r1", authorName: "User A", rating: 5, title: "Great", content: "Good product", verified: true, createdAt: "2026-01-01T00:00:00Z" },
    { id: "r2", authorName: "User B", rating: 3, title: "OK", content: "Average", verified: false, createdAt: "2026-01-02T00:00:00Z" },
  ]);

  it("renders review authors and titles", () => {
    const markup = renderToStaticMarkup(<ReviewList reviews={mockReviews} />);
    expect(markup).toContain("User A");
    expect(markup).toContain("Great");
    expect(markup).toContain("User B");
  });
});
