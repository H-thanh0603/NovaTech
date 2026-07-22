export type CatalogProduct = Readonly<{
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  verdict: string;
  specs: readonly string[];
  featured: boolean;
  tags?: readonly string[];
  soldCount?: number;
  releaseDate?: string;
}>;

export type CatalogCategory = Readonly<{
  id: string;
  name: string;
  slug: string;
  description?: string;
}>;

export type CatalogBrand = Readonly<{
  id: string;
  name: string;
  slug: string;
}>;

export type CatalogVariant = Readonly<{
  id: string;
  sku: string;
  name: string;
  attributes: Readonly<Record<string, string>>;
  price: number;
  compareAtPrice?: number;
  stock: number;
  lowStockAt: number;
}>;

export type CatalogMedia = Readonly<{
  id: string;
  url: string;
  alt: string;
  type: "IMAGE" | "VIDEO";
  sortOrder: number;
}>;

export type CatalogReview = Readonly<{
  id: string;
  authorName: string;
  rating: number;
  title?: string;
  content: string;
  verified: boolean;
  createdAt: string;
}>;

export type CatalogProductDetail = Readonly<{
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  brand: string;
  brandSlug: string;
  description: string;
  shortDescription: string;
  price: number;
  compareAtPrice?: number;
  verdict: string;
  highlights: readonly string[];
  considerations: readonly string[];
  specs: readonly string[];
  media: readonly CatalogMedia[];
  variants: readonly CatalogVariant[];
  reviews: readonly CatalogReview[];
  badge?: string;
  featured: boolean;
}>;

export type ProductSortOption = "featured" | "price-asc" | "price-desc" | "name-asc" | "newest" | "best-selling";

export type ProductListFilters = Readonly<{
  categorySlug?: string;
  brandSlug?: string;
  sort?: ProductSortOption;
  page?: number;
  pageSize?: number;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: readonly string[];
}>;

export type ProductListResult = Readonly<{
  items: readonly CatalogProduct[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}>;
