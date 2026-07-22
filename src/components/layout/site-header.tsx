"use client";

import { Heart, Menu, Package, Phone, Search, ShoppingBag, UserRound, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/brand/brand-mark";
import { catalogNavigation } from "@/features/catalog/catalog-navigation.data";

const megaMenu = [
  {
    label: "Laptop",
    href: "/san-pham?category=laptop",
    subCategories: [
      { name: "Laptop Gaming", href: "/san-pham?category=laptop&tag=gaming" },
      { name: "Laptop Văn phòng", href: "/san-pham?category=laptop&tag=office" },
      { name: "Laptop Sinh viên", href: "/san-pham?category=laptop&tag=student" },
    ],
    brands: [
      { name: "Acer", slug: "acer" },
      { name: "MSI", slug: "msi" },
      { name: "ASUS", slug: "asus" },
    ],
  },
  {
    label: "Màn hình",
    href: "/san-pham?category=man-hinh",
    subCategories: [
      { name: "Màn hình Gaming", href: "/san-pham?category=man-hinh&tag=gaming" },
      { name: "Màn hình Văn phòng", href: "/san-pham?category=man-hinh&tag=office" },
      { name: "Màn hình Đồ họa", href: "/san-pham?category=man-hinh&tag=creative" },
    ],
    brands: [
      { name: "ASUS", slug: "asus" },
      { name: "MSI", slug: "msi" },
      { name: "Philips", slug: "philips" },
      { name: "AOC", slug: "aoc" },
      { name: "LG", slug: "lg" },
      { name: "Samsung", slug: "samsung" },
    ],
  },
  {
    label: "Âm thanh",
    href: "/san-pham?category=am-thanh",
    subCategories: [
      { name: "Tai nghe Bluetooth", href: "/san-pham?category=am-thanh&tag=wireless" },
      { name: "Loa thông minh", href: "/san-pham?category=am-thanh&tag=smart-speaker" },
    ],
    brands: [
      { name: "Sony", slug: "sony" },
      { name: "JBL", slug: "jbl" },
      { name: "Bose", slug: "bose" },
      { name: "Sennheiser", slug: "sennheiser" },
      { name: "Marshall", slug: "marshall" },
    ],
  },
  {
    label: "Gaming",
    href: "/san-pham?category=gaming",
    subCategories: [
      { name: "Bàn phím cơ", href: "/san-pham?category=gaming&tag=keyboard" },
      { name: "Chuột gaming", href: "/san-pham?category=gaming&tag=mouse" },
      { name: "Tai nghe gaming", href: "/san-pham?category=gaming&tag=headset" },
      { name: "Card đồ họa", href: "/san-pham?category=gaming&tag=gpu" },
    ],
    brands: [
      { name: "DAREU", slug: "dareu" },
      { name: "Zidli", slug: "zidli" },
      { name: "OCPC", slug: "ocpc" },
      { name: "Redragon", slug: "redragon" },
    ],
  },
  {
    label: "Linh kiện PC",
    href: "/san-pham?category=phu-kien",
    subCategories: [
      { name: "CPU", href: "/san-pham?category=phu-kien&tag=cpu" },
      { name: "Bo mạch chủ", href: "/san-pham?category=phu-kien&tag=mainboard" },
      { name: "Nguồn", href: "/san-pham?category=phu-kien&tag=psu" },
      { name: "SSD", href: "/san-pham?category=phu-kien&tag=ssd" },
      { name: "Vỏ case", href: "/san-pham?category=phu-kien&tag=case" },
      { name: "Tản nhiệt", href: "/san-pham?category=phu-kien&tag=cooler" },
      { name: "Camera & Network", href: "/san-pham?category=phu-kien&tag=network" },
    ],
    brands: [
      { name: "Intel", slug: "intel" },
      { name: "AMD", slug: "amd" },
      { name: "ASUS", slug: "asus" },
      { name: "MSI", slug: "msi" },
      { name: "ASRock", slug: "asrock" },
      { name: "Gigabyte", slug: "gigabyte" },
      { name: "Thermalright", slug: "thermalright" },
      { name: "Dahua", slug: "dahua" },
      { name: "Hikvision", slug: "hikvision" },
    ],
  },
] as const;

const navigationMenu = catalogNavigation.length > 0
  ? catalogNavigation.map((item) => ({
    label: item.name,
    href: `/san-pham?category=${item.slug}`,
    subCategories: [] as { name: string; href: string }[],
    brands: [] as { name: string; slug: string }[],
  }))
  : megaMenu;

const quickLinks = [
  { label: "Khuyến mãi", href: "/#featured" },
  { label: "Dựng setup", href: "/#setup" },
  { label: "Nexora Picks", href: "/#picks" },
  { label: "Cẩm nang", href: "/#guides" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
        setActiveMega(null);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-surface/90 backdrop-blur-xl">
      <div className="bg-midnight px-4 py-2 text-center text-xs font-semibold tracking-wide text-slate-200">
        <div className="mx-auto flex max-w-page items-center justify-between">
          <span className="hidden sm:inline">Miễn phí giao hàng cho đơn từ 2 triệu · Đổi mới trong 30 ngày</span>
          <span className="sm:hidden">Freeship đơn từ 2 triệu</span>
          <div className="hidden items-center gap-4 sm:flex">
            <a href="tel:18002097" className="inline-flex items-center gap-1.5 text-mint hover:text-white">
              <Phone className="size-3.5" aria-hidden="true" /> Hotline: 1800 2097
            </a>
            <Link href="/thu-cu-doi-moi" className="text-slate-300 hover:text-white">Thu cũ đổi mới</Link>
            <Link href="/khuyen-mai" className="text-slate-300 hover:text-white">Khuyến mãi</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex min-h-18 max-w-page items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandMark />

        <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setActiveMega(null)}>
          {navigationMenu.map((item) => (
            <div key={item.label} onMouseEnter={() => setActiveMega(item.label)}>
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-3 text-sm font-semibold text-slate-600 transition-colors hover:text-electric"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Tìm sản phẩm"
            onClick={() => setSearchOpen(true)}
            className="grid size-11 place-items-center rounded-full text-slate-600 transition-colors hover:bg-white hover:text-electric"
          >
            <Search className="size-5" aria-hidden="true" />
          </button>
          <Link href="/tai-khoan" aria-label="Tài khoản" className="hidden size-11 place-items-center rounded-full text-slate-600 transition-colors hover:bg-white hover:text-electric sm:grid">
            <UserRound className="size-5" aria-hidden="true" />
          </Link>
          <Link href="/san-pham" aria-label="Sản phẩm yêu thích" className="hidden size-11 place-items-center rounded-full text-slate-600 transition-colors hover:bg-white hover:text-electric sm:grid">
            <Heart className="size-5" aria-hidden="true" />
          </Link>
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

      {activeMega && (
        <div
          className="absolute inset-x-0 top-full z-40 hidden border-t border-slate-200 bg-white shadow-xl lg:block"
          onMouseEnter={() => setActiveMega(activeMega)}
          onMouseLeave={() => setActiveMega(null)}
        >
          <div className="mx-auto max-w-page px-4 py-6 sm:px-6 lg:px-8">
            {navigationMenu.filter((m) => m.label === activeMega).map((item) => (
              <div key={item.label} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Danh mục</p>
                  <Link
                    href={item.href}
                    className="mt-3 inline-flex min-h-10 items-center rounded-full bg-electric px-4 text-sm font-bold text-white hover:bg-blue-700"
                  >
                    Xem tất cả {item.label}
                  </Link>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Phân loại</p>
                  <ul className="mt-3 space-y-2">
                    {item.subCategories.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.href}
                          className="text-sm font-semibold text-slate-600 transition-colors hover:text-electric"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:col-span-1 lg:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Thương hiệu</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.brands.map((brand) => (
                      <Link
                        key={brand.slug}
                        href={`/san-pham?category=${item.href.split("=")[1]}&brand=${brand.slug}`}
                        className="inline-flex min-h-9 items-center rounded-full border border-slate-200 px-3 text-xs font-semibold text-slate-600 transition-colors hover:border-electric hover:text-electric"
                      >
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-midnight/40 backdrop-blur-sm" onClick={() => setSearchOpen(false)}>
          <div className="mx-auto mt-20 max-w-2xl rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <Search className="size-5 text-slate-400" aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm sản phẩm, thương hiệu, danh mục..."
                className="flex-1 bg-transparent text-base font-medium text-midnight outline-none placeholder:text-slate-400"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchQuery.trim()) {
                    window.location.href = `/san-pham?search=${encodeURIComponent(searchQuery.trim())}`;
                  }
                }}
              />
              <button
                type="button"
                aria-label="Đóng tìm kiếm"
                onClick={() => setSearchOpen(false)}
                className="grid size-9 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-midnight"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            {!searchQuery && (
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Danh mục phổ biến</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {navigationMenu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setSearchOpen(false)}
                      className="inline-flex min-h-9 items-center rounded-full border border-slate-200 px-3 text-xs font-semibold text-slate-600 transition-colors hover:border-electric hover:text-electric"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {searchQuery && (
              <div className="mt-5 border-t border-slate-100 pt-5">
                <Link
                  href={`/san-pham?search=${encodeURIComponent(searchQuery.trim())}`}
                  onClick={() => setSearchOpen(false)}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full bg-electric px-4 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Xem kết quả cho &ldquo;{searchQuery.trim()}&rdquo;
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Điều hướng di động" className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-page gap-1">
            {navigationMenu.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center rounded-xl px-3 font-semibold text-slate-700 hover:bg-slate-50 hover:text-electric">
                {item.label}
              </Link>
            ))}
            <div className="my-2 border-t border-slate-100" />
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center rounded-xl px-3 font-semibold text-slate-700 hover:bg-slate-50 hover:text-electric">
                {item.label}
              </Link>
            ))}
            <div className="my-2 border-t border-slate-100" />
            <Link href="/don-hang" onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center gap-2 rounded-xl px-3 font-semibold text-slate-700 hover:bg-slate-50 hover:text-electric">
              <Package className="size-4" aria-hidden="true" /> Tra cứu đơn hàng
            </Link>
            <a href="tel:18002097" className="flex min-h-11 items-center gap-2 rounded-xl px-3 font-semibold text-slate-700 hover:bg-slate-50 hover:text-electric">
              <Phone className="size-4" aria-hidden="true" /> Hotline: 1800 2097
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
