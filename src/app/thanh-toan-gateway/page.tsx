import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MockProvider } from "@/components/payment/mock-provider";

export const metadata: Metadata = {
  title: "Mock Payment Gateway",
  description: "Simulated payment provider for Nexora demo.",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{
  paymentId?: string;
  orderCode?: string;
  amount?: string;
  action?: string;
}>;

export default async function MockPaymentPage({ searchParams }: Readonly<{ searchParams: SearchParams }>) {
  const params = await searchParams;
  const paymentId = params.paymentId ?? "";
  const orderCode = params.orderCode ?? "";
  const amount = params.amount ? parseInt(params.amount, 10) : 0;
  const action = params.action;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  if (action === "cancel") {
    return (
      <>
        <SiteHeader />
        <main className="bg-surface">
          <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-2xl font-semibold text-midnight">Giao dịch đã hủy</h1>
              <p className="mt-3 text-sm text-slate-600">Đơn hàng {orderCode} đã bị hủy.</p>
              <a href={`/don-hang/${orderCode}?status=cancelled`} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
                Về trang đơn hàng
              </a>
            </div>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  if (!paymentId || !orderCode || !amount) {
    return (
      <>
        <SiteHeader />
        <main className="bg-surface">
          <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-2xl font-semibold text-midnight">Thiếu thông tin thanh toán</h1>
              <p className="mt-3 text-sm text-slate-600">Vui lòng quay lại từ trang thanh toán.</p>
            </div>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <MockProvider paymentId={paymentId} orderCode={orderCode} amount={amount} baseUrl={baseUrl} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
