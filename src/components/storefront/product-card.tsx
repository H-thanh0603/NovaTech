"use client";

import { ArrowUpRight, Gift } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { formatVnd } from "@/features/catalog/catalog.service";
import type { CatalogProduct } from "@/features/catalog/catalog.types";
import { WishlistButton } from "@/components/catalog/wishlist-button";

type ProductCardProps = Readonly<{
  product: CatalogProduct;
}>;

function extractVariantPills(specs: readonly string[]): string[] {
  const pills: string[] = [];
  for (const spec of specs) {
    const lower = spec.toLowerCase();
    if (lower.includes("ram") || lower.includes("ssd") || lower.includes("lưu trữ") || lower.includes("storage")) {
      const match = spec.match(/(\d+)\s*(GB|TB)/i);
      if (match) pills.push(match[0]);
    }
  }
  return pills.slice(0, 4);
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.compareAtPrice!) * 100)
    : 0;
  const variantPills = extractVariantPills(product.specs);

  return (
    <Link href={`/san-pham/${product.slug}`} className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/70">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {hasDiscount ? (
          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
            -{discountPercent}%
          </span>
        ) : null}
        {product.badge && !hasDiscount ? (
          <span className="absolute left-0 top-0 rounded-br-lg bg-midnight px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        ) : null}
        <div className="absolute right-2 top-2">
          <WishlistButton slug={product.slug} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{product.category}</p>
        <h3 className="mt-1.5 line-clamp-2 text-sm font-bold leading-5 text-midnight">{product.name}</h3>

        {variantPills.length > 0 ? (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {variantPills.map((pill) => (
              <span key={pill} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-600">{pill}</span>
            ))}
          </div>
        ) : null}

        <div className="mt-auto pt-4">
          {hasDiscount ? (
            <div className="flex items-baseline gap-2">
              <p className="text-lg font-bold text-red-500">{formatVnd(product.price)}</p>
              <p className="text-xs text-slate-400 line-through">{formatVnd(product.compareAtPrice!)}</p>
            </div>
          ) : (
            <p className="text-lg font-bold text-midnight">{formatVnd(product.price)}</p>
          )}
          <p className="mt-1 text-[11px] font-semibold text-teal-tech">Trả góp 0%</p>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-400">
            <Gift className="size-3.5 text-amber-500" aria-hidden="true" />
            <span>Tặng kèm phụ kiện</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
