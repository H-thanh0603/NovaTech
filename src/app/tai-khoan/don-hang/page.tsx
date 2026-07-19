import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { Package } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { formatVnd } from "@/features/catalog/catalog.service";
import { getUserFromSession, SESSION_COOKIE_NAME } from "@/features/auth/auth.service";

export const metadata: Metadata = {
  title: "Lịch sử đơn hàng",
  description: "Xem lịch sử đơn hàng của bạn.",
};

type OrderSnapshot = {
  code: string;
  trackingToken: string;
  grandTotal: number;
  items: Array<{ productName: string; variantName: string; quantity: number; lineTotal: number }>;
};

export default async function OrderHistoryPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const user = getUserFromSession(token);

  if (!user) return null;

  let recentOrder: OrderSnapshot | null = null;
  const snapshotRaw = cookieStore.get("nexora_order_snapshot")?.value;
  if (snapshotRaw) {
    try {
      recentOrder = JSON.parse(snapshotRaw) as OrderSnapshot;
    } catch {
      recentOrder = null;
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/tai-khoan" className="hover:text-electric">Tài khoản</Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-slate-700">Lịch sử đơn hàng</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">Lịch sử đơn hàng</h1>

          {recentOrder ? (
            <div className="mt-8 overflow-hidden rounded-panel border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <div>
                  <p className="font-display text-sm font-bold text-midnight">{recentOrder.code}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{recentOrder.items.length} sản phẩm</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                    Chờ xác nhận
                  </span>
                  <span className="font-display text-lg font-bold text-electric">{formatVnd(recentOrder.grandTotal)}</span>
                </div>
              </div>
              <div className="px-6 py-4">
                <ul className="flex flex-col gap-2">
                  {recentOrder.items.map((item, index) => (
                    <li key={index} className="flex items-center justify-between gap-2 text-sm">
                      <span className="text-slate-600">{item.productName} ({item.variantName}) × {item.quantity}</span>
                      <span className="font-semibold text-midnight">{formatVnd(item.lineTotal)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-100 px-6 py-4">
                <Link
                  href={`/don-hang/${recentOrder.code}?token=${recentOrder.trackingToken}&total=${recentOrder.grandTotal}`}
                  className="inline-flex min-h-10 items-center rounded-full bg-electric px-4 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-panel border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto grid size-12 place-items-center rounded-full bg-slate-100">
                <Package className="size-6 text-slate-400" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold text-midnight">Chưa có đơn hàng nào</h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                Đơn hàng của bạn sẽ hiển thị ở đây sau khi thanh toán.
              </p>
              <Link href="/san-pham" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
                Khám phá sản phẩm
              </Link>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
