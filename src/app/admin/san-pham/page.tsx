import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";

import { catalogProducts } from "@/features/catalog/catalog.data";
import { formatVnd } from "@/features/catalog/catalog.service";

export const metadata: Metadata = {
  title: "Quản lý sản phẩm",
  description: "Quản lý danh sách sản phẩm Nexora.",
};

export const dynamic = "force-dynamic";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-midnight">Sản phẩm</h1>
          <p className="mt-1 text-sm text-slate-500">{catalogProducts.length} sản phẩm</p>
        </div>
        <button type="button" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-electric px-5 text-sm font-bold text-white hover:bg-blue-700">
          <Plus className="size-4" aria-hidden="true" /> Thêm sản phẩm
        </button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Sản phẩm</th>
              <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Danh mục</th>
              <th className="p-3 text-right text-xs font-bold uppercase tracking-wide text-slate-400">Giá</th>
              <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Badge</th>
              <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Nổi bật</th>
            </tr>
          </thead>
          <tbody>
            {catalogProducts.map((product) => (
              <tr key={product.id} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="relative size-10 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                      <Image src={product.imageUrl} alt={product.imageAlt} fill sizes="40px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight">{product.name}</p>
                      <p className="font-mono text-xs text-slate-400">{product.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-slate-600">{product.category}</td>
                <td className="p-3 text-right font-semibold text-midnight">{formatVnd(product.price)}</td>
                <td className="p-3">
                  {product.badge ? (
                    <span className="rounded-full bg-midnight px-2.5 py-1 text-xs font-bold text-white">{product.badge}</span>
                  ) : (
                    <span className="text-xs text-slate-300">—</span>
                  )}
                </td>
                <td className="p-3">
                  {product.featured ? (
                    <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-tech">Nổi bật</span>
                  ) : (
                    <span className="text-xs text-slate-300">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
