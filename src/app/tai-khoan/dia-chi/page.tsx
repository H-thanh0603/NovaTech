import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

import { AddressBook } from "@/components/account/address-book";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getUserFromSession, SESSION_COOKIE_NAME } from "@/features/auth/auth.service";

export const metadata: Metadata = {
  title: "Sổ địa chỉ",
  description: "Quản lý địa chỉ giao hàng.",
};

export default async function AddressPage() {
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
            <span className="font-semibold text-slate-700">Sổ địa chỉ</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">Sổ địa chỉ</h1>
          <div className="mt-8">
            <AddressBook />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
