import { Facebook, Instagram, Mail, Youtube } from "lucide-react";

import { BrandMark } from "@/components/brand/brand-mark";

const footerGroups = [
  { title: "Khám phá", links: ["Laptop", "Điện thoại", "Phụ kiện", "Nexora Picks"] },
  { title: "Hỗ trợ", links: ["Liên hệ", "Theo dõi đơn", "Bảo hành", "Đổi trả"] },
  { title: "Về Nexora", links: ["Cách chúng tôi chọn", "Cẩm nang", "Điều khoản", "Quyền riêng tư"] },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-midnight text-slate-300">
      <div className="mx-auto max-w-page px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <BrandMark inverse />
            <p className="mt-5 text-sm leading-7 text-slate-400">Công nghệ được tuyển chọn, giải thích rõ ràng và đặt trong đúng bối cảnh sử dụng của bạn.</p>
            <a href="mailto:hello@nexora.vn" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white hover:text-mint">
              <Mail className="size-4" aria-hidden="true" /> hello@nexora.vn
            </a>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <section key={group.title} aria-labelledby={`footer-${group.title}`}>
                <h2 id={`footer-${group.title}`} className="text-sm font-bold text-white">{group.title}</h2>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                  {group.links.map((label) => (
                    <li key={label}>
                      <span className="flex min-h-8 items-center justify-between gap-2" aria-disabled="true">
                        <span>{label}</span>
                        <span className="text-[9px] font-bold uppercase tracking-wide text-slate-600">Sắp ra mắt</span>
                      </span>
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
