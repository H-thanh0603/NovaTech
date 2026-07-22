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
  search?: string;
  minPrice?: string;
  maxPrice?: string;
  tags?: string;
}>;

const validSorts: ProductSortOption[] = ["featured", "price-asc", "price-desc", "name-asc", "newest", "best-selling"];

function parseSort(value?: string): ProductSortOption {
  return validSorts.includes(value as ProductSortOption) ? (value as ProductSortOption) : "featured";
}

export default async function ProductListingPage({ searchParams }: Readonly<{ searchParams: SearchParams }>) {
  const params = await searchParams;
  const sort = parseSort(params.sort);
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);

  const repository = new InMemoryCatalogRepository();
  const tags = params.tags ? params.tags.split(",").filter(Boolean) : undefined;
  const minPrice = params.minPrice ? parseInt(params.minPrice, 10) || undefined : undefined;
  const maxPrice = params.maxPrice ? parseInt(params.maxPrice, 10) || undefined : undefined;
  const [result, categories, brands] = await Promise.all([
    listProducts(repository, {
      categorySlug: params.category,
      brandSlug: params.brand,
      sort,
      page,
      pageSize: 12,
      search: params.search,
      minPrice,
      maxPrice,
      tags,
    }),
    listCategories(repository),
    listBrands(repository),
  ]);

  const basePath = `/san-pham?${[
    params.category ? `category=${params.category}` : "",
    params.brand ? `brand=${params.brand}` : "",
    params.search ? `search=${encodeURIComponent(params.search)}` : "",
    params.minPrice ? `minPrice=${params.minPrice}` : "",
    params.maxPrice ? `maxPrice=${params.maxPrice}` : "",
    params.tags ? `tags=${params.tags}` : "",
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
              activeSearch={params.search}
              activeMinPrice={params.minPrice}
              activeMaxPrice={params.maxPrice}
              activeTags={params.tags}
            />
          </div>

          <div className="mt-8">
            <ProductList result={result} basePath={basePath} />
          </div>

          <section aria-labelledby="seo-title" className="mt-16 max-w-3xl">
            <h2 id="seo-title" className="font-display text-2xl font-bold text-midnight">Hướng dẫn chọn mua công nghệ tại Nexora</h2>
            <div className="mt-6 flex flex-col gap-4 text-sm leading-7 text-slate-600">
              <p>
                Nexora không bán mọi thứ — chúng tôi chỉ tuyển chọn những sản phẩm có lý do rõ ràng để xuất hiện trên kệ.
                Mỗi thiết bị đều trải qua đánh giá thực tế về hiệu năng, độ bền và giá trị lâu dài trước khi được giới thiệu.
              </p>
              <p>
                Khi chọn laptop, hãy xác định nhu cầu chính: văn phòng di động (dưới 20 triệu), sáng tạo nội dung (20-35 triệu),
                hoặc gaming chuyên sâu (trên 30 triệu). Với điện thoại, cân nhắc thời gian hỗ trợ cập nhật và chất lượng camera
                thay vì chỉ nhìn vào thông số trên giấy.
              </p>
              <p>
                Mọi sản phẩm tại Nexora đều được bảo hành chính hãng, hỗ trợ trả góp 0% cho đơn từ 5 triệu,
                và đổi mới trong 30 ngày nếu có lỗi từ nhà sản xuất.
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
