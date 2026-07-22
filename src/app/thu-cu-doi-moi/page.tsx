import type { Metadata } from "next";

import { TradeInForm } from "@/components/catalog/trade-in-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Thu cũ đổi mới",
  description: "Định giá thiết bị cũ và nhận trợ giá vào đơn hàng mới tại Nexora.",
};

export default function TradeInPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-electric">Nexora Trade-in</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-5xl">Thu cũ đổi mới</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Đổi thiết bị cũ lấy thiết bị mới với giá trị định giá minh bạch. Nhận trợ giá trực tiếp vào đơn hàng mới.
          </p>
          <div className="mt-10">
            <TradeInForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
