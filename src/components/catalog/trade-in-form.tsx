"use client";

import { useState } from "react";
import { ArrowRight, Smartphone, TrendingUp } from "lucide-react";

import { formatVnd } from "@/features/catalog/catalog.service";

type DeviceCategory = "phone" | "laptop" | "tablet" | "watch" | "audio";

const categories: { id: DeviceCategory; label: string }[] = [
  { id: "phone", label: "Điện thoại" },
  { id: "laptop", label: "Laptop" },
  { id: "tablet", label: "Máy tính bảng" },
  { id: "watch", label: "Đồng hồ" },
  { id: "audio", label: "Tai nghe" },
];

const conditions = [
  { id: "new", label: "Mới 100%", multiplier: 0.8 },
  { id: "good", label: "Còn tốt", multiplier: 0.6 },
  { id: "fair", label: "Khá xước", multiplier: 0.4 },
  { id: "broken", label: "Hỏng nặng", multiplier: 0.15 },
] as const;

const baseValues: Record<DeviceCategory, number> = {
  phone: 3_000_000,
  laptop: 5_000_000,
  tablet: 2_500_000,
  watch: 1_500_000,
  audio: 800_000,
};

export function TradeInForm() {
  const [category, setCategory] = useState<DeviceCategory>("phone");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState<string>("good");
  const [estimated, setEstimated] = useState<number | null>(null);

  function calculate() {
    const cond = conditions.find((c) => c.id === condition);
    if (!cond) return;
    const value = Math.round(baseValues[category] * cond.multiplier);
    setEstimated(value);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-panel border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-electric/10 text-electric">
            <Smartphone className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-xl font-bold text-midnight">Định giá thiết bị cũ</h2>
            <p className="text-sm text-slate-500">Nhập thông tin thiết bị để nhận giá thu mua ước tính</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-5">
          <div>
            <label className="text-sm font-semibold text-slate-600">Loại thiết bị</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => { setCategory(cat.id); setEstimated(null); }}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                    category === cat.id ? "border-electric bg-electric text-white" : "border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="tradein-brand" className="text-sm font-semibold text-slate-600">Thương hiệu</label>
              <input id="tradein-brand" type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Apple, Samsung,..." />
            </div>
            <div>
              <label htmlFor="tradein-model" className="text-sm font-semibold text-slate-600">Model</label>
              <input id="tradein-model" type="text" value={model} onChange={(e) => setModel(e.target.value)} className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="iPhone 13, Galaxy S22,..." />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600">Tình trạng</label>
            <div className="mt-2 grid gap-2 sm:grid-cols-4">
              {conditions.map((cond) => (
                <button
                  key={cond.id}
                  type="button"
                  onClick={() => { setCondition(cond.id); setEstimated(null); }}
                  className={`rounded-xl border p-3 text-center text-sm font-bold transition-colors ${
                    condition === cond.id ? "border-electric bg-electric/5 text-electric" : "border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {cond.label}
                </button>
              ))}
            </div>
          </div>

          <button type="button" onClick={calculate} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
            <TrendingUp className="size-4" aria-hidden="true" /> Định giá thiết bị
          </button>

          {estimated !== null ? (
            <div className="rounded-xl border border-electric bg-electric/5 p-5">
              <p className="text-sm font-semibold text-slate-600">Giá thu mua ước tính</p>
              <p className="mt-1 font-display text-3xl font-bold text-electric">{formatVnd(estimated)}</p>
              <p className="mt-2 text-xs text-slate-500">
                Giá thực tế có thể thay đổi sau khi kiểm tra thiết bị tại cửa hàng.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-midnight">
                Dùng giá trị này giảm vào đơn hàng mới
                <ArrowRight className="size-4 text-electric" aria-hidden="true" />
                <a href="/san-pham" className="text-electric hover:underline">Mua sắm ngay</a>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { title: "Định giá minh bạch", desc: "Giá ước tính ngay trên web" },
          { title: "Trợ giá vào đơn mới", desc: "Giảm trực tiếp vào đơn hàng" },
          { title: "Thu mua tại cửa hàng", desc: "Kiểm tra & thanh toán trong 15 phút" },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-midnight">{item.title}</p>
            <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
