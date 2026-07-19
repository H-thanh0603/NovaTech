import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { Search } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { formatVnd } from "@/features/catalog/catalog.service";

export const metadata: Metadata = {
  title: "Theo dõi đơn hàng",
  description: "Tra cứu đơn hàng Nexora của bạn.",
};

type OrderSnapshot = {
  code: string;
  trackingToken: string;
  items: Array<{ productName: string; variantName: string; quantity: number; lineTotal: number }>;
  address: { name: string; phone: string; province: string; district: string; ward: string; line1: string };
  email: string;
  phone: string;
  couponCode?: string;
  subtotal: number;
  shippingTotal: number;
  discountTotal: number;
  grandTotal: number;
};

type SearchParams = Promise<{
  code?: string;
  phone?: string;
}>;

export default async function OrderTrackingPage({ searchParams }: Readonly<{ searchParams: SearchParams }>) {
  const params = await searchParams;
  const queryCode = params.code?.trim() ?? "";
  const queryPhone = params.phone?.trim() ?? "";

  let snapshot: OrderSnapshot | null = null;
  let phoneMismatch = false;

  if (queryCode) {
    const cookieStore = await cookies();
    const snapshotRaw = cookieStore.get("nexora_order_snapshot")?.value;
    if (snapshotRaw) {
      try {
        const parsed = JSON.parse(snapshotRaw) as OrderSnapshot;
        if (parsed.code === queryCode) {
          if (queryPhone && parsed.phone !== queryPhone) {
            phoneMismatch = true;
          } else {
            snapshot = parsed;
          }
        }
      } catch {
        snapshot = null;
      }
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
          <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-midnight">Theo dõi đơn hàng</h1>
          <p className="mt-2 text-sm text-slate-600">Nhập mã đơn hàng và số điện thoại để tra cứu.</p>

          <form className="mt-8 flex flex-col gap-4" action="/don-hang" method="get">
            <div>
              <label htmlFor="code" className="text-sm font-semibold text-slate-600">Mã đơn hàng</label>
              <input
                id="code"
                name="code"
                type="text"
                required
                defaultValue={queryCode}
                className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none"
                placeholder="NX-XXXXXXXX-XXXX"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold text-slate-600">Số điện thoại</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                defaultValue={queryPhone}
                className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none"
                placeholder="0xxx xxx xxxx"
              />
            </div>
            <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
              <Search className="size-4" aria-hidden="true" /> Tra cứu
            </button>
          </form>

          {phoneMismatch ? (
            <div className="mt-8 rounded-panel border border-red-200 bg-red-50 p-4 text-sm text-red-600">
              Số điện thoại không khớp với đơn hàng. Vui lòng kiểm tra lại.
            </div>
          ) : null}

          {!phoneMismatch && queryCode && !snapshot ? (
            <div className="mt-8 rounded-panel border border-slate-200 bg-white p-4 text-sm text-slate-600">
              Không tìm thấy đơn hàng <span className="font-bold text-midnight">{queryCode}</span>. Đơn hàng có thể đã quá hạn phiên lưu tạm.
            </div>
          ) : null}

          {snapshot ? (
            <div className="mt-8 rounded-panel border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-sm text-slate-500">Mã đơn hàng</span>
                <span className="font-display text-lg font-bold text-midnight">{snapshot.code}</span>
              </div>
              <div className="mt-4">
                <h2 className="font-display text-sm font-bold text-midnight">Sản phẩm</h2>
                <ul className="mt-2 flex flex-col gap-2">
                  {snapshot.items.map((item, index) => (
                    <li key={index} className="flex items-center justify-between gap-2 text-sm">
                      <span className="text-slate-600">{item.productName} ({item.variantName}) × {item.quantity}</span>
                      <span className="font-semibold text-midnight">{formatVnd(item.lineTotal)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 border-t border-slate-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Tạm tính</span>
                  <span className="text-sm font-semibold text-midnight">{formatVnd(snapshot.subtotal)}</span>
                </div>
                {snapshot.discountTotal > 0 ? (
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-slate-500">Giảm giá{snapshot.couponCode ? ` (${snapshot.couponCode})` : ""}</span>
                    <span className="text-sm font-semibold text-teal-tech">-{formatVnd(snapshot.discountTotal)}</span>
                  </div>
                ) : null}
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="font-display text-base font-bold text-midnight">Tổng cộng</span>
                  <span className="font-display text-xl font-bold text-electric">{formatVnd(snapshot.grandTotal)}</span>
                </div>
              </div>
              <div className="mt-4 border-t border-slate-200 pt-4">
                <h2 className="font-display text-sm font-bold text-midnight">Thông tin giao hàng</h2>
                <dl className="mt-2 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-slate-500">Người nhận</dt>
                    <dd className="text-sm font-semibold text-midnight">{snapshot.address.name}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-slate-500">Số điện thoại</dt>
                    <dd className="text-sm font-semibold text-midnight">{snapshot.phone}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-sm text-slate-500">Địa chỉ</dt>
                    <dd className="text-right text-sm font-semibold text-midnight">
                      {snapshot.address.line1}, {snapshot.address.ward}, {snapshot.address.district}, {snapshot.address.province}
                    </dd>
                  </div>
                </dl>
              </div>
              <Link href={`/don-hang/${snapshot.code}?token=${snapshot.trackingToken}&total=${snapshot.grandTotal}`} className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
                Xem chi tiết đơn hàng
              </Link>
            </div>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
