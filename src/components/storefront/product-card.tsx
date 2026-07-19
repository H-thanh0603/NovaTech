import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { formatVnd } from "@/features/catalog/catalog.service";
import type { CatalogProduct } from "@/features/catalog/catalog.types";

type ProductCardProps = Readonly<{
  product: CatalogProduct;
}>;

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-slate-200 bg-white transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-midnight px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-electric">{product.category}</p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-midnight">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.verdict}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Thông số nổi bật">
          {product.specs.map((spec) => (
            <li key={spec} className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-600">{spec}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <p className="font-display text-xl font-bold tracking-[-0.03em] text-midnight">{formatVnd(product.price)}</p>
            {product.compareAtPrice ? <p className="mt-1 text-xs text-slate-400 line-through">{formatVnd(product.compareAtPrice)}</p> : null}
          </div>
          <span className="grid size-11 place-items-center rounded-full border border-slate-200 text-slate-500 transition-colors group-hover:border-electric group-hover:bg-electric group-hover:text-white" aria-hidden="true">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
