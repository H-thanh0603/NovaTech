import type { Metadata } from "next";

import { RegisterForm } from "@/components/auth/register-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Tạo tài khoản Nexora mới.",
};

export const dynamic = "force-dynamic";

export default async function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
          <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-midnight">Đăng ký</h1>
          <p className="mt-2 text-sm text-slate-600">Tạo tài khoản để mua sắm nhanh hơn.</p>
          <div className="mt-8 rounded-panel border border-slate-200 bg-white p-6">
            <RegisterForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
