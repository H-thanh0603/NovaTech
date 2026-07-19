"use client";

import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";

import { formatVnd } from "@/features/catalog/catalog.service";
import { validateCoupon } from "@/features/payment/coupon.service";

type CouponPreviewProps = Readonly<{
  subtotal: number;
}>;

export function CouponPreview({ subtotal }: CouponPreviewProps) {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<{ valid: boolean; error?: string; discountTotal: number; freeShipping: boolean } | null>(null);

  function handleCheck() {
    if (!code.trim()) {
      setResult(null);
      return;
    }
    const validation = validateCoupon(code, subtotal, 0);
    setResult(validation);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onBlur={handleCheck}
          placeholder="Nhập mã giảm giá"
          className="min-h-11 flex-1 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none"
        />
        <button
          type="button"
          onClick={handleCheck}
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-100 px-4 text-sm font-semibold text-slate-600 hover:bg-slate-200"
        >
          Kiểm tra
        </button>
      </div>
      {result?.valid ? (
        <div className="flex items-center gap-2 rounded-xl bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-tech">
          <Check className="size-4" aria-hidden="true" />
          {result.freeShipping ? "Miễn phí giao hàng!" : `Giảm ${formatVnd(result.discountTotal)}`}
        </div>
      ) : result && !result.valid ? (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-500">
          <AlertCircle className="size-4" aria-hidden="true" />
          {result.error}
        </div>
      ) : null}
      <p className="text-xs text-slate-400">Thử: NEXORA5 (giảm 5%) hoặc FREESHIP (miễn phí ship, đơn từ 500K)</p>
    </div>
  );
}
