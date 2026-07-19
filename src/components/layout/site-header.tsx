"use client";

import { Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/brand/brand-mark";

const navigation = [
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Sản phẩm nổi bật", href: "/#featured" },
  { label: "Dựng setup", href: "/#setup" },
  { label: "Nexora Picks", href: "/#picks" },
  { label: "Cẩm nang", href: "/#guides" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-surface/90 backdrop-blur-xl">
      <div className="bg-midnight px-4 py-2 text-center text-xs font-semibold tracking-wide text-slate-200">
        Miễn phí giao hàng cho đơn từ 2 triệu · Đổi mới trong 30 ngày
      </div>
      <div className="mx-auto flex min-h-18 max-w-page items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandMark />
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="py-3 text-sm font-semibold text-slate-600 transition-colors hover:text-electric">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Link href="/san-pham" aria-label="Tìm sản phẩm" className="grid size-11 place-items-center rounded-full text-slate-600 transition-colors hover:bg-white hover:text-electric">
            <Search className="size-5" aria-hidden="true" />
          </Link>
          <button type="button" disabled aria-label="Tài khoản — sắp ra mắt" className="hidden size-11 place-items-center rounded-full text-slate-400 disabled:cursor-not-allowed sm:grid">
            <UserRound className="size-5" aria-hidden="true" />
          </button>
          <button type="button" disabled aria-label="Danh sách yêu thích — sắp ra mắt" className="hidden size-11 place-items-center rounded-full text-slate-400 disabled:cursor-not-allowed sm:grid">
            <Heart className="size-5" aria-hidden="true" />
          </button>
          <Link href="/gio-hang" aria-label="Giỏ hàng" className="grid size-11 place-items-center rounded-full text-slate-600 transition-colors hover:bg-white hover:text-electric">
            <ShoppingBag className="size-5" aria-hidden="true" />
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-11 place-items-center rounded-full text-midnight transition-colors hover:bg-white lg:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Điều hướng di động" className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-page gap-1">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center rounded-xl px-3 font-semibold text-slate-700 hover:bg-slate-50 hover:text-electric">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
