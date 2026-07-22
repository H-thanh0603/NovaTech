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
  activeSearch?: string;
  activeMinPrice?: string;
  activeMaxPrice?: string;
  activeTags?: string;
}>;

const sortOptions: ReadonlyArray<{ value: ProductSortOption; label: string }> = [
  { value: "featured", label: "Nổi bật" },
  { value: "price-asc", label: "Giá thấp đến cao" },
  { value: "price-desc", label: "Giá cao đến thấp" },
  { value: "name-asc", label: "Tên A-Z" },
  { value: "newest", label: "Mới nhất" },
  { value: "best-selling", label: "Bán chạy nhất" },
];

const priceRanges: ReadonlyArray<{ label: string; min: string; max: string }> = [
  { label: "Dưới 5 triệu", min: "0", max: "5000000" },
  { label: "5 - 10 triệu", min: "5000000", max: "10000000" },
  { label: "10 - 20 triệu", min: "10000000", max: "20000000" },
  { label: "20 - 30 triệu", min: "20000000", max: "30000000" },
  { label: "Trên 30 triệu", min: "30000000", max: "" },
];

const tagOptions: ReadonlyArray<{ label: string; value: string }> = [
  { label: "5G", value: "5g" },
  { label: "Gaming", value: "gaming" },
  { label: "AI", value: "ai" },
  { label: "Pin trâu", value: "pin-trâu" },
  { label: "Camera đẹp", value: "camera" },
  { label: "Mỏng nhẹ", value: "mỏng-nhẹ" },
];

function buildQuery(params: Record<string, string | undefined>): string {
  const usp = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) usp.set(key, value);
  }
  return usp.toString();
}

export function FilterBar({
  categories,
  brands,
  activeCategory,
  activeBrand,
  activeSort,
  activeSearch,
  activeMinPrice,
  activeMaxPrice,
  activeTags,
}: FilterBarProps) {
  const baseParams: Record<string, string | undefined> = {
    category: activeCategory,
    brand: activeBrand,
    sort: activeSort,
    search: activeSearch,
    minPrice: activeMinPrice,
    maxPrice: activeMaxPrice,
    tags: activeTags,
  };

  const activePriceKey = priceRanges.find(
    (r) => r.min === (activeMinPrice ?? "") && r.max === (activeMaxPrice ?? ""),
  );

  const activeTagSet = new Set(activeTags ? activeTags.split(",") : []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/san-pham?${buildQuery({ ...baseParams, category: undefined })}`}
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
            href={`/san-pham?${buildQuery({ ...baseParams, category: cat.slug })}`}
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
          href={`/san-pham?${buildQuery({ ...baseParams, brand: undefined })}`}
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
            href={`/san-pham?${buildQuery({ ...baseParams, brand: brand.slug })}`}
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

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Mức giá:</span>
        <Link
          href={`/san-pham?${buildQuery({ ...baseParams, minPrice: undefined, maxPrice: undefined })}`}
          className={`inline-flex min-h-9 items-center rounded-full border px-3 text-xs font-semibold transition-colors ${
            !activePriceKey
              ? "border-amber-500 bg-amber-500 text-white"
              : "border-slate-200 bg-white text-slate-600 hover:border-amber-500 hover:text-amber-600"
          }`}
        >
          Tất cả
        </Link>
        {priceRanges.map((range) => {
          const isActive = activePriceKey?.label === range.label;
          return (
            <Link
              key={range.label}
              href={`/san-pham?${buildQuery({ ...baseParams, minPrice: range.min || undefined, maxPrice: range.max || undefined })}`}
              className={`inline-flex min-h-9 items-center rounded-full border px-3 text-xs font-semibold transition-colors ${
                isActive
                  ? "border-amber-500 bg-amber-500 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-amber-500 hover:text-amber-600"
              }`}
            >
              {range.label}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Tính năng:</span>
        {tagOptions.map((tag) => {
          const isActive = activeTagSet.has(tag.value);
          const newTags = isActive
            ? [...activeTagSet].filter((t) => t !== tag.value)
            : [...activeTagSet, tag.value];
          return (
            <Link
              key={tag.value}
              href={`/san-pham?${buildQuery({ ...baseParams, tags: newTags.length > 0 ? newTags.join(",") : undefined })}`}
              className={`inline-flex min-h-9 items-center rounded-full border px-3 text-xs font-semibold transition-colors ${
                isActive
                  ? "border-purple-500 bg-purple-500 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-purple-500 hover:text-purple-600"
              }`}
            >
              {tag.label}
            </Link>
          );
        })}
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
