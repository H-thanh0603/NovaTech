import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";

const footerGroups = [
  {
    title: "Khám phá",
    links: [
      { label: "Laptop", href: "/san-pham?category=laptop" },
      { label: "Điện thoại", href: "/san-pham?category=dien-thoai" },
      { label: "Đồng hồ thông minh", href: "/san-pham?category=dong-ho-thong-minh" },
      { label: "Âm thanh", href: "/san-pham?category=am-thanh" },
      { label: "Tất cả sản phẩm", href: "/san-pham" },
      { label: "Khuyến mãi", href: "/khuyen-mai" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Theo dõi đơn hàng", href: "/don-hang" },
      { label: "Bảo hành & Sửa chữa", href: null },
      { label: "Chính sách đổi trả", href: null },
      { label: "Hướng dẫn trả góp", href: null },
      { label: "Câu hỏi thường gặp", href: null },
    ],
  },
  {
    title: "Về Nexora",
    links: [
      { label: "Cách chúng tôi chọn", href: null },
      { label: "Cẩm nang công nghệ", href: "/cam-nang" },
      { label: "Điều khoản sử dụng", href: null },
      { label: "Chính sách riêng tư", href: null },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-midnight text-slate-300">
      <div className="mx-auto max-w-page px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <BrandMark inverse />
            <p className="mt-5 text-sm leading-7 text-slate-400">Công nghệ được tuyển chọn, giải thích rõ ràng và đặt trong đúng bối cảnh sử dụng của bạn.</p>
            <div className="mt-5 flex flex-col gap-3">
              <a href="mailto:hello@nexora.vn" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white hover:text-mint">
                <Mail className="size-4" aria-hidden="true" /> hello@nexora.vn
              </a>
              <a href="tel:18002097" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white hover:text-mint">
                <Phone className="size-4" aria-hidden="true" /> Hotline: 1800 2097
              </a>
              <p className="inline-flex min-h-11 items-center gap-2 text-sm text-slate-400">
                <MapPin className="size-4" aria-hidden="true" /> 209 Lê Duẩn, Hai Bà Trưng, Hà Nội
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <section key={group.title} aria-labelledby={`footer-${group.title}`}>
                <h2 id={`footer-${group.title}`} className="text-sm font-bold text-white">{group.title}</h2>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <Link href={link.href} className="flex min-h-8 items-center gap-2 text-slate-400 hover:text-mint">
                          {link.label}
                        </Link>
                      ) : (
                        <span className="flex min-h-8 items-center justify-between gap-2" aria-disabled="true">
                          <span>{link.label}</span>
                          <span className="text-[9px] font-bold uppercase tracking-wide text-slate-600">Sắp ra mắt</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nexora Tech. Mua công nghệ thông minh hơn.</p>
          <div className="flex gap-2" aria-label="Mạng xã hội">
            {[Instagram, Facebook, Youtube].map((Icon, index) => (
              <span key={index} className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-500" aria-hidden="true"><Icon className="size-4" /></span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
