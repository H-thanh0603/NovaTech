"use client";

import { Check, X, CreditCard, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { formatVnd } from "@/features/catalog/catalog.service";

type MockProviderProps = Readonly<{
  paymentId: string;
  orderCode: string;
  amount: number;
  baseUrl: string;
}>;

export function MockProvider({ paymentId, orderCode, amount, baseUrl }: MockProviderProps) {
  const [status, setStatus] = useState<"idle" | "processing" | "done">("idle");

  function handleResponse(action: "success" | "fail" | "cancel") {
    setStatus("processing");
    const url = `${baseUrl}/api/payment/mock?paymentId=${paymentId}&orderCode=${orderCode}&amount=${amount}&action=${action === "success" ? "" : action}`;
    window.location.href = url;
  }

  if (status === "processing") {
    return (
      <div className="text-center">
        <Loader2 className="mx-auto size-12 animate-spin text-electric" aria-hidden="true" />
        <p className="mt-4 text-sm text-slate-600">Đang xử lý thanh toán...</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="mx-auto grid size-16 place-items-center rounded-full bg-electric/10">
        <CreditCard className="size-8 text-electric" aria-hidden="true" />
      </div>
      <h1 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-midnight sm:text-3xl">
        Nexora Mock Payment
      </h1>
      <p className="mt-2 text-sm text-slate-600">Simulated VNPay-style payment gateway</p>

      <div className="mt-8 rounded-panel border border-slate-200 bg-white p-6 text-left">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <span className="text-sm text-slate-500">Mã đơn hàng</span>
          <span className="font-display text-lg font-bold text-midnight">{orderCode}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-slate-500">Số tiền</span>
          <span className="font-display text-2xl font-bold text-electric">{formatVnd(amount)}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-slate-500">Mã giao dịch</span>
          <span className="font-mono text-sm font-semibold text-slate-600">{paymentId}</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={() => handleResponse("success")}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-tech px-6 text-sm font-bold text-white hover:opacity-90"
        >
          <Check className="size-4" aria-hidden="true" /> Thanh toán thành công
        </button>
        <button
          type="button"
          onClick={() => handleResponse("fail")}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-500 px-6 text-sm font-bold text-white hover:bg-red-700"
        >
          <X className="size-4" aria-hidden="true" /> Thanh toán thất bại
        </button>
        <button
          type="button"
          onClick={() => handleResponse("cancel")}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-6 text-sm font-bold text-slate-600 hover:border-slate-400"
        >
          Hủy giao dịch
        </button>
      </div>

      <p className="mt-6 text-xs text-slate-400">
        Đây là cổng thanh toán giả lập. Không có giao dịch thực nào được thực hiện.
      </p>
      <Link href={`/don-hang/${orderCode}`} className="mt-2 inline-block text-xs font-semibold text-electric hover:underline">
        Về trang đơn hàng
      </Link>
    </div>
  );
}
