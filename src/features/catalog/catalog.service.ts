import type { CatalogRepository } from "./catalog.repository";
import type { CatalogProduct } from "./catalog.types";

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
