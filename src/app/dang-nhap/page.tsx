import type { Metadata } from "next";

import { LoginForm } from "@/components/auth/login-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập vào tài khoản Nexora.",
};

type SearchParams = Promise<{ redirect?: string }>;

export default async function LoginPage({ searchParams }: Readonly<{ searchParams: SearchParams }>) {
  const params = await searchParams;

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
          <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-midnight">Đăng nhập</h1>
          <p className="mt-2 text-sm text-slate-600">Đăng nhập để theo dõi đơn hàng và quản lý địa chỉ.</p>
          <div className="mt-8 rounded-panel border border-slate-200 bg-white p-6">
            <LoginForm />
          </div>
          {params.redirect ? <p className="mt-4 text-center text-xs text-slate-400">Vui lòng đăng nhập để tiếp tục.</p> : null}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
