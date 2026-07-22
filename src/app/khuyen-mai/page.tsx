import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Copy, Tag, Timer } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Khuyến mãi",
  description: "Mã giảm giá, flash sale, và ưu đãi từ Nexora.",
};

const promotions = [
  {
    id: "promo-1",
    title: "Giảm 5% đơn hàng đầu tiên",
    code: "NEXORA5",
    desc: "Áp dụng cho đơn hàng từ 1 triệu. Tối đa 500.000đ.",
    type: "percentage",
    value: "5%",
    minSpend: "1.000.000đ",
    expiry: "31/12/2026",
    color: "bg-electric",
  },
  {
    id: "promo-2",
    title: "Giảm 200.000đ laptop",
    code: "LAPTOP200",
    desc: "Áp dụng cho tất cả laptop từ 15 triệu.",
    type: "fixed",
    value: "200.000đ",
    minSpend: "15.000.000đ",
    expiry: "31/08/2026",
    color: "bg-midnight",
  },
  {
    id: "promo-3",
    title: "Freeship toàn quốc",
    code: "FREESHIP",
    desc: "Miễn phí vận chuyển cho đơn hàng từ 500.000đ.",
    type: "shipping",
    value: "Freeship",
    minSpend: "500.000đ",
    expiry: "Không giới hạn",
    color: "bg-teal-tech",
  },
];

const flashSale = [
  { name: "AirPods Pro 2", originalPrice: "6.190.000đ", salePrice: "5.490.000đ", discount: "11%", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=400&q=80" },
  { name: "Apple Watch S10", originalPrice: "11.990.000đ", salePrice: "10.490.000đ", discount: "13%", image: "https://images.unsplash.com/photo-1551845728-6826e0a3a27d?auto=format&fit=crop&w=400&q=80" },
  { name: "Sony WH-1000XM5", originalPrice: "7.990.000đ", salePrice: "6.490.000đ", discount: "19%", image: "https://images.unsplash.com/photo-1583394838336-acd977675607?auto=format&fit=crop&w=400&q=80" },
  { name: "iPad Air M2", originalPrice: "16.990.000đ", salePrice: "14.990.000đ", discount: "12%", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80" },
];

export default function PromotionPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-electric">Ưu đãi Nexora</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-5xl">Khuyến mãi & mã giảm giá</h1>

          <div className="mt-8 relative isolate overflow-hidden rounded-[2rem] bg-midnight px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-12">
            <div className="absolute -right-16 -top-16 -z-10 size-72 rounded-full bg-electric/30 blur-3xl" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <Timer className="size-6 text-mint" aria-hidden="true" />
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Flash Sale</h2>
            </div>
            <p className="mt-2 text-sm text-slate-300">Giảm giá sâu — chỉ trong 24 giờ</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {flashSale.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 42vw, 200px" className="object-cover" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-white">{item.name}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="font-display text-lg font-bold text-mint">{item.salePrice}</span>
                    <span className="text-xs text-slate-400 line-through">{item.originalPrice}</span>
                  </div>
                  <span className="mt-2 inline-flex rounded bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">-{item.discount}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold text-midnight">Mã giảm giá</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {promotions.map((promo) => (
              <div key={promo.id} className="overflow-hidden rounded-panel border border-slate-200 bg-white">
                <div className={`${promo.color} px-5 py-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold">{promo.value}</span>
                    <Tag className="size-5 opacity-70" aria-hidden="true" />
                  </div>
                  <p className="mt-1 text-sm font-semibold opacity-90">{promo.title}</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600">{promo.desc}</p>
                  <div className="mt-4 flex items-center justify-between rounded-lg border border-dashed border-slate-300 px-3 py-2.5">
                    <span className="font-mono text-sm font-bold text-midnight">{promo.code}</span>
                    <button type="button" className="inline-flex items-center gap-1 text-xs font-bold text-electric hover:underline">
                      <Copy className="size-3" aria-hidden="true" /> Sao chép
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span>Đơn tối thiểu: {promo.minSpend}</span>
                    <span>Hết hạn: {promo.expiry}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-panel border border-slate-200 bg-white p-6 text-center">
            <h2 className="font-display text-xl font-bold text-midnight">Nhận ưu đãi sớm</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">Đăng ký email để nhận thông báo khuyến mãi trước ai hết.</p>
            <div className="mx-auto mt-4 flex max-w-sm gap-2">
              <input type="email" placeholder="email@example.com" className="min-h-11 flex-1 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" />
              <button type="button" className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-electric px-5 text-sm font-bold text-white hover:bg-blue-700">Đăng ký</button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
