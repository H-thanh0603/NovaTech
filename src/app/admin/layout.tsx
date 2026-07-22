import { cookies } from "next/headers";
import Link from "next/link";
import { BarChart3, Box, LayoutDashboard, LogOut, Tag } from "lucide-react";

import { getUserFromSession, SESSION_COOKIE_NAME } from "@/features/auth/auth.service";

const adminNav = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Sản phẩm", href: "/admin/san-pham", icon: Box },
  { label: "Đơn hàng", href: "/admin/don-hang", icon: Tag },
] as const;

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const user = getUserFromSession(token);

  if (!user || user.role !== "ADMIN") {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50">
        <div className="text-center">
          <p className="font-display text-xl font-bold text-midnight">Không có quyền truy cập</p>
          <p className="mt-2 text-sm text-slate-500">Vui lòng đăng nhập với tài khoản quản trị viên.</p>
          <Link href="/dang-nhap?redirect=/admin" className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
            Đăng nhập
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <aside className="sticky top-0 hidden h-screen w-60 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
          <div className="border-b border-slate-200 p-5">
            <Link href="/admin" className="font-display text-lg font-bold text-midnight">Nexora Admin</Link>
            <p className="mt-1 text-xs text-slate-400">Xin chào, {user.name}</p>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-3">
            {adminNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-11 items-center gap-2.5 rounded-xl px-4 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-midnight"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-slate-200 p-3">
            <Link href="/" className="flex min-h-11 items-center gap-2.5 rounded-xl px-4 text-sm font-semibold text-slate-400 transition-colors hover:bg-slate-100 hover:text-midnight">
              <LogOut className="size-4" aria-hidden="true" />
              Về storefront
            </Link>
          </div>
        </aside>

        <div className="flex-1">
          <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-sm lg:hidden">
            <div className="flex items-center justify-between px-4 py-3">
              <Link href="/admin" className="font-display text-base font-bold text-midnight">Nexora Admin</Link>
              <nav className="flex gap-1">
                {adminNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.href} href={item.href} className="grid size-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-midnight" aria-label={item.label}>
                      <Icon className="size-4" aria-hidden="true" />
                    </Link>
                  );
                })}
              </nav>
            </div>
          </header>
          <main className="p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
