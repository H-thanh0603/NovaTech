import type { Metadata } from "next";

import { FilterBar } from "@/components/catalog/filter-bar";
import { ProductList } from "@/components/catalog/product-list";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { InMemoryCatalogRepository } from "@/features/catalog/catalog.repository";
import { listBrands, listCategories, listProducts } from "@/features/catalog/catalog.service";
import type { ProductSortOption } from "@/features/catalog/catalog.types";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Khám phá sản phẩm công nghệ tuyển chọn tại Nexora.",
};

type SearchParams = Promise<{
  category?: string;
  brand?: string;
  sort?: string;
  page?: string;
}>;

const validSorts: ProductSortOption[] = ["featured", "price-asc", "price-desc", "name-asc"];

function parseSort(value?: string): ProductSortOption {
  return validSorts.includes(value as ProductSortOption) ? (value as ProductSortOption) : "featured";
}

export default async function ProductListingPage({ searchParams }: Readonly<{ searchParams: SearchParams }>) {
  const params = await searchParams;
  const sort = parseSort(params.sort);
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);

  const repository = new InMemoryCatalogRepository();
  const [result, categories, brands] = await Promise.all([
    listProducts(repository, {
      categorySlug: params.category,
      brandSlug: params.brand,
      sort,
      page,
      pageSize: 12,
    }),
    listCategories(repository),
    listBrands(repository),
  ]);

  const basePath = `/san-pham?${[
    params.category ? `category=${params.category}` : "",
    params.brand ? `brand=${params.brand}` : "",
    `sort=${sort}`,
  ].filter(Boolean).join("&")}`;

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">
            Sản phẩm
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            {result.total} sản phẩm — tuyển chọn có lý do, không chạy theo số lượng.
          </p>

          <div className="mt-8">
            <FilterBar
              categories={categories}
              brands={brands}
              activeCategory={params.category}
              activeBrand={params.brand}
              activeSort={sort}
            />
          </div>

          <div className="mt-8">
            <ProductList result={result} basePath={basePath} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
