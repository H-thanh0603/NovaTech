import { InMemoryCatalogRepository } from "./catalog.repository";
import type {
  CatalogBrand,
  CatalogCategory,
  CatalogProduct,
  CatalogProductDetail,
  CatalogMedia,
  CatalogReview,
  CatalogVariant,
  ProductListFilters,
  ProductListResult,
  ProductSortOption,
} from "./catalog.types";
import type { CatalogRepository } from "./catalog.repository";

type PrismaClient = {
  product: {
    findMany: (args: Record<string, unknown>) => Promise<unknown[]>;
    findUnique: (args: Record<string, unknown>) => Promise<unknown | null>;
    count: (args: Record<string, unknown>) => Promise<number>;
  };
  category: {
    findMany: (args?: Record<string, unknown>) => Promise<unknown[]>;
  };
  brand: {
    findMany: (args?: Record<string, unknown>) => Promise<unknown[]>;
  };
};

type PrismaProduct = {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  status: string;
  verdict: string | null;
  highlights: unknown;
  considerations: unknown;
  brandId: string;
  brand: { id: string; name: string; slug: string };
  categoryId: string;
  category: { id: string; name: string; slug: string };
  variants: Array<{
    id: string;
    sku: string;
    name: string;
    attributes: unknown;
    price: number;
    compareAtPrice: number | null;
    stock: number;
    lowStockAt: number;
  }>;
  media: Array<{
    id: string;
    url: string;
    alt: string;
    type: string;
    sortOrder: number;
  }>;
  reviews: Array<{
    id: string;
    authorName: string;
    rating: number;
    title: string | null;
    content: string;
    verified: boolean;
    createdAt: Date;
  }>;
};

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  return [];
}

function toMediaArray(value: unknown): CatalogMedia[] {
  if (!Array.isArray(value)) return [];
  return value.map((m) => ({
    id: String(m.id),
    url: String(m.url),
    alt: String(m.alt),
    type: m.type === "VIDEO" ? "VIDEO" : "IMAGE",
    sortOrder: Number(m.sortOrder) || 0,
  }));
}

function toVariantArray(value: unknown): CatalogVariant[] {
  if (!Array.isArray(value)) return [];
  return value.map((v) => ({
    id: String(v.id),
    sku: String(v.sku),
    name: String(v.name),
    attributes: (v.attributes as Record<string, string>) ?? {},
    price: Number(v.price) || 0,
    compareAtPrice: v.compareAtPrice != null ? Number(v.compareAtPrice) : undefined,
    stock: Number(v.stock) || 0,
    lowStockAt: Number(v.lowStockAt) || 5,
  }));
}

function toReviewArray(value: unknown): CatalogReview[] {
  if (!Array.isArray(value)) return [];
  return value.map((r) => ({
    id: String(r.id),
    authorName: String(r.authorName),
    rating: Number(r.rating) || 0,
    title: r.title != null ? String(r.title) : undefined,
    content: String(r.content),
    verified: Boolean(r.verified),
    createdAt: r.createdAt instanceof Date ? r.createdAt.toISOString() : String(r.createdAt),
  }));
}

function productToSummary(p: PrismaProduct): CatalogProduct {
  const media = p.media?.[0];
  return Object.freeze({
    id: p.id,
    slug: p.slug,
    name: p.name,
    category: p.category?.name ?? "",
    price: p.variants?.[0]?.price ?? 0,
    compareAtPrice: p.variants?.[0]?.compareAtPrice ?? undefined,
    imageUrl: media?.url ?? "",
    imageAlt: media?.alt ?? p.name,
    badge: undefined,
    verdict: p.verdict ?? "",
    specs: toStringArray(p.highlights),
    featured: false,
  });
}

function productToDetail(p: PrismaProduct): CatalogProductDetail {
  return Object.freeze({
    id: p.id,
    slug: p.slug,
    name: p.name,
    category: p.category?.name ?? "",
    categorySlug: p.category?.slug ?? "",
    brand: p.brand?.name ?? "",
    brandSlug: p.brand?.slug ?? "",
    description: p.description,
    shortDescription: p.shortDescription,
    price: p.variants?.[0]?.price ?? 0,
    compareAtPrice: p.variants?.[0]?.compareAtPrice ?? undefined,
    verdict: p.verdict ?? "",
    highlights: Object.freeze(toStringArray(p.highlights)),
    considerations: Object.freeze(toStringArray(p.considerations)),
    specs: Object.freeze(toStringArray(p.highlights)),
    media: Object.freeze(toMediaArray(p.media)),
    variants: Object.freeze(toVariantArray(p.variants)),
    reviews: Object.freeze(toReviewArray(p.reviews)),
    featured: false,
  });
}

export class PrismaCatalogRepository implements CatalogRepository {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async listFeatured(): Promise<readonly CatalogProduct[]> {
    const products = await this.prisma.product.findMany({
      where: { status: "ACTIVE" },
      include: {
        brand: true,
        category: true,
        variants: { where: { status: "ACTIVE" } },
        media: { orderBy: { sortOrder: "asc" } },
      },
      take: 8,
    }) as PrismaProduct[];

    return Object.freeze(products.map(productToSummary));
  }

  async listProducts(filters?: ProductListFilters): Promise<ProductListResult> {
    const page = Math.max(1, filters?.page ?? 1);
    const pageSize = Math.max(1, Math.min(48, filters?.pageSize ?? 12));

    const where: Record<string, unknown> = { status: "ACTIVE" };
    if (filters?.categorySlug) {
      where.category = { slug: filters.categorySlug };
    }
    if (filters?.brandSlug) {
      where.brand = { slug: filters.brandSlug };
    }

    const orderBy: Record<string, string> = {};
    const sort: ProductSortOption = filters?.sort ?? "featured";
    switch (sort) {
      case "price-asc":
        orderBy.variants = { _min: { price: "asc" } } as unknown as string;
        break;
      case "price-desc":
        orderBy.variants = { _max: { price: "desc" } } as unknown as string;
        break;
      case "name-asc":
        orderBy.name = "asc";
        break;
      default:
        orderBy.createdAt = "desc";
    }

    const total = await this.prisma.product.count({ where });
    const products = await this.prisma.product.findMany({
      where,
      include: {
        brand: true,
        category: true,
        variants: { where: { status: "ACTIVE" } },
        media: { orderBy: { sortOrder: "asc" } },
      },
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize,
    }) as PrismaProduct[];

    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    return Object.freeze({
      items: Object.freeze(products.map(productToSummary)),
      total,
      page,
      pageSize,
      totalPages,
    });
  }

  async getProductBySlug(slug: string): Promise<CatalogProductDetail | null> {
    const product = await this.prisma.product.findUnique({
      where: { slug },
      include: {
        brand: true,
        category: true,
        variants: { where: { status: "ACTIVE" } },
        media: { orderBy: { sortOrder: "asc" } },
        reviews: { where: { status: "APPROVED" }, orderBy: { createdAt: "desc" } },
      },
    }) as PrismaProduct | null;

    if (!product) return null;
    return productToDetail(product);
  }

  async listCategories(): Promise<readonly CatalogCategory[]> {
    const categories = await this.prisma.category.findMany({
      where: { status: "ACTIVE" },
      orderBy: { name: "asc" },
    }) as Array<{ id: string; name: string; slug: string; description?: string }>;

    return Object.freeze(categories.map((c) => Object.freeze({ id: c.id, name: c.name, slug: c.slug, description: c.description })));
  }

  async listBrands(): Promise<readonly CatalogBrand[]> {
    const brands = await this.prisma.brand.findMany({
      where: { status: "ACTIVE" },
      orderBy: { name: "asc" },
    }) as Array<{ id: string; name: string; slug: string }>;

    return Object.freeze(brands.map((b) => Object.freeze({ id: b.id, name: b.name, slug: b.slug })));
  }
}

export function createCatalogRepository(): CatalogRepository {
  if (process.env.DATABASE_URL) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { PrismaClient } = require("@/generated/prisma") as { PrismaClient: new () => PrismaClient };
      const prisma = new PrismaClient();
      return new PrismaCatalogRepository(prisma);
    } catch {
      return new InMemoryCatalogRepository();
    }
  }
  return new InMemoryCatalogRepository();
}
