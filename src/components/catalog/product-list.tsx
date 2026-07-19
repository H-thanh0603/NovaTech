import Link from "next/link";

import { ProductCard } from "@/components/storefront/product-card";
import type { CatalogProduct, ProductListResult } from "@/features/catalog/catalog.types";

type ProductListProps = Readonly<{
  result: ProductListResult;
  basePath: string;
}>;

export function ProductList({ result, basePath }: ProductListProps) {
  const { items, page, totalPages } = result;

  if (items.length === 0) {
    return (
      <div className="rounded-panel border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
        <h3 className="font-display text-xl font-semibold text-midnight">Không tìm thấy sản phẩm</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
          Thử bỏ bộ lọc hoặc chọn danh mục khác để xem thêm sản phẩm.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((product: CatalogProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 ? (
        <nav aria-label="Phân trang" className="flex items-center justify-center gap-2">
          {page > 1 ? (
            <Link
              href={`${basePath}&page=${page - 1}`}
              className="inline-flex min-h-10 items-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:border-electric hover:text-electric"
            >
              Trước
            </Link>
          ) : null}
          <span className="text-sm font-semibold text-slate-500">
            Trang {page} / {totalPages}
          </span>
          {page < totalPages ? (
            <Link
              href={`${basePath}&page=${page + 1}`}
              className="inline-flex min-h-10 items-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:border-electric hover:text-electric"
            >
              Sau
            </Link>
          ) : null}
        </nav>
      ) : null}
    </div>
  );
}
