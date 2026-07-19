import type { CatalogRepository } from "./catalog.repository";
import type {
  CatalogProduct,
  CatalogProductDetail,
  ProductListFilters,
  ProductListResult,
} from "./catalog.types";

const vndFormatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});

export function formatVnd(amount: number): string {
  if (!Number.isSafeInteger(amount) || amount < 0) {
    throw new RangeError("Giá sản phẩm phải là số nguyên VND không âm.");
  }

  return vndFormatter.format(amount);
}

export async function getFeaturedProducts(
  repository: CatalogRepository,
): Promise<readonly CatalogProduct[]> {
  return repository.listFeatured();
}

export async function listProducts(
  repository: CatalogRepository,
  filters?: ProductListFilters,
): Promise<ProductListResult> {
  return repository.listProducts(filters);
}

export async function getProductBySlug(
  repository: CatalogRepository,
  slug: string,
): Promise<CatalogProductDetail | null> {
  return repository.getProductBySlug(slug);
}

export async function listCategories(repository: CatalogRepository) {
  return repository.listCategories();
}

export async function listBrands(repository: CatalogRepository) {
  return repository.listBrands();
}

export function formatReviewDate(isoString: string): string {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
