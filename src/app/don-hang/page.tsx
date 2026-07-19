import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Theo dõi đơn hàng",
  description: "Tra cứu đơn hàng Nexora của bạn.",
};

export default async function OrderTrackingPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
          <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-midnight">Theo dõi đơn hàng</h1>
          <p className="mt-2 text-sm text-slate-600">Nhập mã đơn hàng để xem trạng thái.</p>

          <form className="mt-8 flex flex-col gap-4" action="/don-hang" method="get">
            <div>
              <label htmlFor="code" className="text-sm font-semibold text-slate-600">Mã đơn hàng</label>
              <input
                id="code"
                name="code"
                type="text"
                required
                className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none"
                placeholder="NX-XXXXXXXX-XXXX"
              />
            </div>
            <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
              Tra cứu
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
