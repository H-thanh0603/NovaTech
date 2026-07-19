import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

import { AccountNav } from "@/components/auth/account-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getUserFromSession, SESSION_COOKIE_NAME } from "@/features/auth/auth.service";

export const metadata: Metadata = {
  title: "Tài khoản",
  description: "Quản lý tài khoản Nexora của bạn.",
};

const accountLinks = [
  { label: "Thông tin tài khoản", href: "/tai-khoan", active: true },
  { label: "Sổ địa chỉ", href: "/tai-khoan/dia-chi", active: false },
  { label: "Lịch sử đơn hàng", href: "/tai-khoan/don-hang", active: false },
] as const;

export default async function AccountPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const user = getUserFromSession(token);

  if (!user) return null;

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">Tài khoản</h1>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
            <aside className="w-full shrink-0 lg:w-64">
              <nav aria-label="Tài khoản" className="flex flex-col gap-1">
                {accountLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold transition-colors ${
                      link.active
                        ? "bg-electric text-white"
                        : "text-slate-600 hover:bg-white hover:text-electric"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </aside>

            <div className="flex-1 flex flex-col gap-6">
              <AccountNav user={user} />
              <div className="rounded-panel border border-slate-200 bg-white p-5 sm:p-6">
                <h2 className="font-display text-lg font-bold text-midnight">Thông tin cá nhân</h2>
                <dl className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <dt className="text-sm text-slate-500">Họ tên</dt>
                    <dd className="text-sm font-semibold text-midnight">{user.name}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <dt className="text-sm text-slate-500">Email</dt>
                    <dd className="text-sm font-semibold text-midnight">{user.email}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-slate-500">Vai trò</dt>
                    <dd className="text-sm font-semibold text-midnight">{user.role === "ADMIN" ? "Quản trị viên" : "Khách hàng"}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
