import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getUserFromSession, SESSION_COOKIE_NAME } from "@/features/auth/auth.service";

export const metadata: Metadata = {
  title: "Lịch sử đơn hàng",
  description: "Xem lịch sử đơn hàng của bạn.",
};

export default async function OrderHistoryPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const user = getUserFromSession(token);

  if (!user) return null;

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

          <div className="mt-8 rounded-panel border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h2 className="font-display text-xl font-semibold text-midnight">Chưa có đơn hàng nào</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              Đơn hàng của bạn sẽ hiển thị ở đây sau khi thanh toán.
            </p>
            <Link href="/san-pham" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
              Khám phá sản phẩm
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
