import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { CheckCircle, XCircle, Package } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { formatVnd } from "@/features/catalog/catalog.service";

export const metadata: Metadata = {
  title: "Đơn hàng",
  description: "Trạng thái đơn hàng Nexora.",
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
  token?: string;
  total?: string;
  status?: string;
}>;

export default async function OrderConfirmationPage({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ code: string }>;
  searchParams: SearchParams;
}>) {
  const { code } = await params;
  const { token, total, status } = await searchParams;
  const totalAmount = total ? parseInt(total, 10) : 0;

  const cookieStore = await cookies();
  const snapshotRaw = cookieStore.get("nexora_order_snapshot")?.value;
  let snapshot: OrderSnapshot | null = null;
  if (snapshotRaw) {
    try {
      const parsed = JSON.parse(snapshotRaw) as OrderSnapshot;
      if (parsed.code === code) snapshot = parsed;
    } catch {
      snapshot = null;
    }
  }

  const isSuccess = status === "success";
  const isPending = !status && code;
  const isFailed = status === "failed";
  const isCancelled = status === "cancelled";

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            {isSuccess && !isFailed && !isCancelled ? (
              <div className="text-center">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-teal-50">
                  <CheckCircle className="size-8 text-teal-tech" aria-hidden="true" />
                </div>
                <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">
                  Đặt hàng thành công!
                </h1>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Cảm ơn bạn đã đặt hàng tại Nexora. Chúng tôi sẽ liên hệ để xác nhận đơn hàng sớm nhất.
                </p>

                <div className="mt-8 rounded-panel border border-slate-200 bg-white p-6 text-left">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="text-sm text-slate-500">Mã đơn hàng</span>
                    <span className="font-display text-lg font-bold text-midnight">{code}</span>
                  </div>
                  {totalAmount > 0 ? (
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-500">Tổng thanh toán</span>
                      <span className="font-display text-lg font-bold text-electric">{formatVnd(totalAmount)}</span>
                    </div>
                  ) : null}
                  {token ? (
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-500">Mã theo dõi</span>
                      <span className="font-mono text-sm font-semibold text-slate-600">{token}</span>
                    </div>
                  ) : null}
                </div>

                {snapshot ? (
                  <div className="mt-6 rounded-panel border border-slate-200 bg-white p-6 text-left">
                    <h2 className="font-display text-lg font-bold text-midnight">Chi tiết đơn hàng</h2>
                    <ul className="mt-4 flex flex-col gap-3">
                      {snapshot.items.map((item, index) => (
                        <li key={index} className="flex items-center justify-between gap-2 text-sm">
                          <span className="text-slate-600">{item.productName} ({item.variantName}) × {item.quantity}</span>
                          <span className="font-semibold text-midnight">{formatVnd(item.lineTotal)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 border-t border-slate-200 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">Tạm tính</span>
                        <span className="text-sm font-semibold text-midnight">{formatVnd(snapshot.subtotal)}</span>
                      </div>
                      {snapshot.shippingTotal > 0 ? (
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm text-slate-500">Phí giao hàng</span>
                          <span className="text-sm font-semibold text-midnight">{formatVnd(snapshot.shippingTotal)}</span>
                        </div>
                      ) : null}
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
                  </div>
                ) : null}

                {snapshot ? (
                  <div className="mt-6 rounded-panel border border-slate-200 bg-white p-6 text-left">
                    <h2 className="font-display text-lg font-bold text-midnight">Thông tin giao hàng</h2>
                    <dl className="mt-4 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <dt className="text-sm text-slate-500">Người nhận</dt>
                        <dd className="text-sm font-semibold text-midnight">{snapshot.address.name}</dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-sm text-slate-500">Số điện thoại</dt>
                        <dd className="text-sm font-semibold text-midnight">{snapshot.phone}</dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-sm text-slate-500">Email</dt>
                        <dd className="text-sm font-semibold text-midnight">{snapshot.email}</dd>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <dt className="text-sm text-slate-500">Địa chỉ</dt>
                        <dd className="text-right text-sm font-semibold text-midnight">
                          {snapshot.address.line1}, {snapshot.address.ward}, {snapshot.address.district}, {snapshot.address.province}
                        </dd>
                      </div>
                    </dl>
                  </div>
                ) : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link href="/san-pham" className="inline-flex min-h-12 items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
                    Tiếp tục mua sắm
                  </Link>
                  <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-6 text-sm font-bold text-slate-600 hover:border-electric hover:text-electric">
                    Về trang chủ
                  </Link>
                </div>
              </div>
            ) : null}

            {isPending ? (
              <div className="text-center">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-amber-50">
                  <Package className="size-8 text-amber-500" aria-hidden="true" />
                </div>
                <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">
                  Đơn hàng đã tiếp nhận
                </h1>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Đơn hàng <span className="font-bold text-midnight">{code}</span> đang chờ thanh toán.
                </p>

                <div className="mt-8 rounded-panel border border-slate-200 bg-white p-6 text-left">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="text-sm text-slate-500">Mã đơn hàng</span>
                    <span className="font-display text-lg font-bold text-midnight">{code}</span>
                  </div>
                  {totalAmount > 0 ? (
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-500">Tổng thanh toán</span>
                      <span className="font-display text-lg font-bold text-electric">{formatVnd(totalAmount)}</span>
                    </div>
                  ) : null}
                </div>

                {snapshot ? (
                  <div className="mt-6 rounded-panel border border-slate-200 bg-white p-6 text-left">
                    <h2 className="font-display text-lg font-bold text-midnight">Chi tiết đơn hàng</h2>
                    <ul className="mt-4 flex flex-col gap-3">
                      {snapshot.items.map((item, index) => (
                        <li key={index} className="flex items-center justify-between gap-2 text-sm">
                          <span className="text-slate-600">{item.productName} ({item.variantName}) × {item.quantity}</span>
                          <span className="font-semibold text-midnight">{formatVnd(item.lineTotal)}</span>
                        </li>
                      ))}
                    </ul>
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
                  </div>
                ) : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link href={`/thanh-toan-gateway?paymentId=pending&orderCode=${code}&amount=${totalAmount}`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
                    Thanh toán ngay
                  </Link>
                  <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-6 text-sm font-bold text-slate-600 hover:border-electric hover:text-electric">
                    Về trang chủ
                  </Link>
                </div>
              </div>
            ) : null}

            {isFailed ? (
              <div className="text-center">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-red-50">
                  <XCircle className="size-8 text-red-500" aria-hidden="true" />
                </div>
                <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">
                  Thanh toán thất bại
                </h1>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Thanh toán cho đơn hàng <span className="font-bold text-midnight">{code}</span> chưa thành công. Vui lòng thử lại.
                </p>
                <Link href="/thanh-toan" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
                  Thử lại
                </Link>
              </div>
            ) : null}

            {isCancelled ? (
              <div className="text-center">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-amber-50">
                  <Package className="size-8 text-amber-500" aria-hidden="true" />
                </div>
                <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">
                  Đơn hàng đã hủy
                </h1>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Đơn hàng <span className="font-bold text-midnight">{code}</span> đã bị hủy. Bạn có thể đặt hàng lại bất cứ lúc nào.
                </p>
                <Link href="/san-pham" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
                  Khám phá sản phẩm
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
