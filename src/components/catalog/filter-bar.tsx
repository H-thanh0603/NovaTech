"use client";

import Link from "next/link";

import type {
  CatalogBrand,
  CatalogCategory,
  ProductSortOption,
} from "@/features/catalog/catalog.types";

type FilterBarProps = Readonly<{
  categories: readonly CatalogCategory[];
  brands: readonly CatalogBrand[];
  activeCategory?: string;
  activeBrand?: string;
  activeSort: ProductSortOption;
}>;

const sortOptions: ReadonlyArray<{ value: ProductSortOption; label: string }> = [
  { value: "featured", label: "Nổi bật" },
  { value: "price-asc", label: "Giá thấp đến cao" },
  { value: "price-desc", label: "Giá cao đến thấp" },
  { value: "name-asc", label: "Tên A-Z" },
];

export function FilterBar({
  categories,
  brands,
  activeCategory,
  activeBrand,
  activeSort,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/san-pham?sort=${activeSort}`}
          className={`inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-semibold transition-colors ${
            !activeCategory
              ? "border-electric bg-electric text-white"
              : "border-slate-200 bg-white text-slate-700 hover:border-electric hover:text-electric"
          }`}
        >
          Tất cả
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/san-pham?category=${cat.slug}&sort=${activeSort}`}
            className={`inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-semibold transition-colors ${
              activeCategory === cat.slug
                ? "border-electric bg-electric text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-electric hover:text-electric"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Thương hiệu:</span>
        <Link
          href={`/san-pham?${activeCategory ? `category=${activeCategory}&` : ""}sort=${activeSort}`}
          className={`inline-flex min-h-9 items-center rounded-full border px-3 text-xs font-semibold transition-colors ${
            !activeBrand
              ? "border-teal-tech bg-teal-tech text-white"
              : "border-slate-200 bg-white text-slate-600 hover:border-teal-tech hover:text-teal-tech"
          }`}
        >
          Tất cả
        </Link>
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/san-pham?${activeCategory ? `category=${activeCategory}&` : ""}brand=${brand.slug}&sort=${activeSort}`}
            className={`inline-flex min-h-9 items-center rounded-full border px-3 text-xs font-semibold transition-colors ${
              activeBrand === brand.slug
                ? "border-teal-tech bg-teal-tech text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-teal-tech hover:text-teal-tech"
            }`}
          >
            {brand.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="sort-select" className="text-sm font-semibold text-slate-600">
          Sắp xếp:
        </label>
        <select
          id="sort-select"
          defaultValue={activeSort}
          className="min-h-10 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 focus:border-electric focus:outline-none"
          onChange={(e) => {
            const params = new URLSearchParams(window.location.search);
            params.set("sort", e.target.value);
            window.location.search = params.toString();
          }}
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
