"use client";

import { Check, Minus, X } from "lucide-react";

import { formatVnd } from "@/features/catalog/catalog.service";
import type { CatalogProduct, CatalogProductDetail } from "@/features/catalog/catalog.types";

type SpecComparisonProps = Readonly<{
  product: CatalogProductDetail;
  relatedProducts: readonly CatalogProduct[];
}>;

type SpecRow = Readonly<{
  label: string;
  values: string[];
}>;

function extractSpecs(product: CatalogProductDetail, related: readonly CatalogProduct[]): SpecRow[] {
  const all: readonly (CatalogProductDetail | CatalogProduct)[] = [product, ...related];
  const rows: SpecRow[] = [
    { label: "Giá", values: all.map((p) => formatVnd(p.price)) },
    { label: "Danh mục", values: all.map((p) => p.category) },
  ];

  const specKeys = ["CPU", "RAM", "Màn hình", "Pin", "Lưu trữ", "Camera"];
  for (const key of specKeys) {
    const values = all.map((p) => {
      const found = p.specs.find((s) => s.toLowerCase().includes(key.toLowerCase()));
      return found ?? "—";
    });
    if (values.some((v) => v !== "—")) {
      rows.push({ label: key, values });
    }
  }

  return rows;
}

export function SpecComparison({ product, relatedProducts }: SpecComparisonProps) {
  const compare = relatedProducts.slice(0, 3);
  if (compare.length === 0) return null;

  const all: readonly (CatalogProductDetail | CatalogProduct)[] = [product, ...compare];
  const rows = extractSpecs(product, compare);

  return (
    <section aria-labelledby="compare-title" className="mt-12 max-w-4xl">
      <h2 id="compare-title" className="font-display text-2xl font-bold text-midnight">So sánh sản phẩm</h2>
      <p className="mt-2 text-sm text-slate-500">So sánh {product.name} với các sản phẩm tương tự</p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-32 border-b border-slate-200 p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Thông số</th>
              {all.map((p, i) => (
                <th key={p.id} className={`border-b border-slate-200 p-3 text-left ${i === 0 ? "bg-electric/5" : ""}`}>
                  <p className={`font-display text-sm font-bold ${i === 0 ? "text-electric" : "text-midnight"}`}>{p.name}</p>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500">{formatVnd(p.price)}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-slate-100">
                <td className="p-3 text-xs font-bold uppercase tracking-wide text-slate-400">{row.label}</td>
                {row.values.map((val, i) => (
                  <td key={i} className={`p-3 text-sm ${i === 0 ? "bg-electric/5 font-semibold text-midnight" : "text-slate-600"}`}>
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
