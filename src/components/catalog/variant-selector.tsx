"use client";

import type { CatalogVariant } from "@/features/catalog/catalog.types";
import { formatVnd } from "@/features/catalog/catalog.service";

type VariantSelectorProps = Readonly<{
  variants: readonly CatalogVariant[];
  selectedSku: string;
  onSelect: (sku: string) => void;
}>;

export function VariantSelector({ variants, selectedSku, onSelect }: VariantSelectorProps) {
  const selected = variants.find((v) => v.sku === selectedSku) ?? variants[0];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm font-bold text-midnight">Phiên bản</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {variants.map((variant) => (
            <button
              key={variant.sku}
              type="button"
              onClick={() => onSelect(variant.sku)}
              className={`min-h-11 rounded-xl border px-4 text-sm font-semibold transition-colors ${
                variant.sku === selectedSku
                  ? "border-electric bg-electric text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-electric hover:text-electric"
              }`}
            >
              {variant.name}
            </button>
          ))}
        </div>
      </div>

      {selected ? (
        <div className="flex items-center gap-4 rounded-xl bg-slate-50 px-5 py-4">
          <div>
            <p className="font-display text-2xl font-bold text-midnight">{formatVnd(selected.price)}</p>
            {selected.compareAtPrice ? (
              <p className="mt-1 text-sm text-slate-400 line-through">{formatVnd(selected.compareAtPrice)}</p>
            ) : null}
          </div>
          <div className="ml-auto text-right">
            {selected.stock > 0 ? (
              <p className={`text-sm font-semibold ${selected.stock <= selected.lowStockAt ? "text-amber-600" : "text-teal-tech"}`}>
                {selected.stock <= selected.lowStockAt ? `Chỉ còn ${selected.stock}` : "Còn hàng"}
              </p>
            ) : (
              <p className="text-sm font-semibold text-red-500">Hết hàng</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
