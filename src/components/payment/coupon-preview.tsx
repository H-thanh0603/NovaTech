"use client";

import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";

import { formatVnd } from "@/features/catalog/catalog.service";
import { validateCoupon } from "@/features/payment/coupon.service";

type CouponPreviewProps = Readonly<{
  subtotal: number;
  code: string;
}>;

export function CouponPreview({ subtotal, code }: CouponPreviewProps) {
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    setChecked(true);
  }

  const result = checked && code.trim() ? validateCoupon(code, subtotal, 0) : null;

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleCheck}
        className="inline-flex min-h-9 w-fit items-center justify-center rounded-xl bg-slate-100 px-4 text-sm font-semibold text-slate-600 hover:bg-slate-200"
      >
        Kiểm tra mã
      </button>
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
