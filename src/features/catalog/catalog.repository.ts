import type {
  CatalogBrand,
  CatalogCategory,
  CatalogProduct,
  CatalogProductDetail,
  ProductListFilters,
  ProductListResult,
  ProductSortOption,
} from "./catalog.types";
import {
  catalogBrands,
  catalogCategories,
  catalogProductDetails,
} from "./catalog-detail.data";
import { catalogProducts } from "./catalog.data";

export interface CatalogRepository {
  listFeatured(): Promise<readonly CatalogProduct[]>;
  listProducts(filters?: ProductListFilters): Promise<ProductListResult>;
  getProductBySlug(slug: string): Promise<CatalogProductDetail | null>;
  listCategories(): Promise<readonly CatalogCategory[]>;
  listBrands(): Promise<readonly CatalogBrand[]>;
}

function freezeProduct(product: CatalogProduct): CatalogProduct {
  return Object.freeze({
    ...product,
    specs: Object.freeze([...product.specs]),
  });
}

function sortProducts(
  products: readonly CatalogProduct[],
  sort: ProductSortOption,
): readonly CatalogProduct[] {
  const sorted = [...products];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name, "vi"));
    case "newest":
      return sorted.sort((a, b) => {
        const aDate = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
        const bDate = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
        return bDate - aDate;
      });
    case "best-selling":
      return sorted.sort((a, b) => (b.soldCount ?? 0) - (a.soldCount ?? 0));
    case "featured":
    default:
      return sorted.sort((a, b) => {
        if (a.featured === b.featured) return 0;
        return a.featured ? -1 : 1;
      });
  }
}

export class InMemoryCatalogRepository implements CatalogRepository {
  private readonly products: readonly CatalogProduct[];
  private readonly details: readonly CatalogProductDetail[];
  private readonly categories: readonly CatalogCategory[];
  private readonly brands: readonly CatalogBrand[];

  constructor(
    products: readonly CatalogProduct[] = catalogProducts,
    details: readonly CatalogProductDetail[] = catalogProductDetails,
    categories: readonly CatalogCategory[] = catalogCategories,
    brands: readonly CatalogBrand[] = catalogBrands,
  ) {
    this.products = Object.freeze(products.map(freezeProduct));
    this.details = Object.freeze(details.map((d) => Object.freeze({ ...d })));
    this.categories = Object.freeze(categories.map((c) => Object.freeze({ ...c })));
    this.brands = Object.freeze(brands.map((b) => Object.freeze({ ...b })));
  }

  async listFeatured(): Promise<readonly CatalogProduct[]> {
    return Object.freeze(this.products.filter((product) => product.featured));
  }

  async listProducts(filters?: ProductListFilters): Promise<ProductListResult> {
    const page = Math.max(1, filters?.page ?? 1);
    const pageSize = Math.max(1, Math.min(48, filters?.pageSize ?? 12));
    const sort: ProductSortOption = filters?.sort ?? "featured";

    let filtered = [...this.products];

    if (filters?.categorySlug) {
      const category = this.categories.find((c) => c.slug === filters.categorySlug);
      if (category) {
        filtered = filtered.filter((p) => p.category === category.name);
      }
    }

    if (filters?.brandSlug) {
      const detailSlugs = new Set(
        this.details
          .filter((d) => d.brandSlug === filters.brandSlug)
          .map((d) => d.slug),
      );
      filtered = filtered.filter((p) => detailSlugs.has(p.slug));
    }

    if (filters?.search) {
      const query = filters.search.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.specs.some((s) => s.toLowerCase().includes(query)),
      );
    }

    if (filters?.minPrice != null) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice!);
    }

    if (filters?.maxPrice != null) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice!);
    }

    if (filters?.tags && filters.tags.length > 0) {
      const tagSet = new Set(filters.tags);
      filtered = filtered.filter((p) => p.tags?.some((t) => tagSet.has(t)));
    }

    const sorted = sortProducts(filtered, sort);
    const total = sorted.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const start = (page - 1) * pageSize;
    const items = Object.freeze(sorted.slice(start, start + pageSize));

    return Object.freeze({ items, total, page, pageSize, totalPages });
  }

  async getProductBySlug(slug: string): Promise<CatalogProductDetail | null> {
    const detail = this.details.find((d) => d.slug === slug);
    if (!detail) return null;
    return Object.freeze({
      ...detail,
      highlights: Object.freeze([...detail.highlights]),
      considerations: Object.freeze([...detail.considerations]),
      specs: Object.freeze([...detail.specs]),
      media: Object.freeze([...detail.media]),
      variants: Object.freeze([...detail.variants]),
      reviews: Object.freeze([...detail.reviews]),
    });
  }

  async listCategories(): Promise<readonly CatalogCategory[]> {
    return this.categories;
  }

  async listBrands(): Promise<readonly CatalogBrand[]> {
    return this.brands;
  }
}
