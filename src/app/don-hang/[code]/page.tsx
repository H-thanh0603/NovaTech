import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, Package } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { formatVnd } from "@/features/catalog/catalog.service";

export const metadata: Metadata = {
  title: "Đơn hàng",
  description: "Trạng thái đơn hàng Nexora.",
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

  const isSuccess = status === "success" || (!status && code);
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

            {isFailed ? (
              <div className="text-center">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-red-50">
                  <XCircle className="size-8 text-red-500" aria-hidden="true" />
                </div>
                <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">
                  Thanh toán thất bại
                </h1>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Thanht toán cho đơn hàng <span className="font-bold text-midnight">{code}</span> chưa thành công. Vui lòng thử lại.
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
