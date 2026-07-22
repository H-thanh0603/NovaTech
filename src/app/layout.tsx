import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { WishlistProvider } from "@/features/wishlist/wishlist-context";
import { FloatingContact } from "@/components/layout/floating-contact";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexora.vn"),
  title: {
    default: "Nexora Tech — Mua công nghệ thông minh hơn",
    template: "%s | Nexora Tech",
  },
  description:
    "Cửa hàng công nghệ tuyển chọn với tư vấn rõ ràng, so sánh dễ hiểu và trải nghiệm mua sắm đáng tin cậy.",
  openGraph: {
    title: "Nexora Tech — Technology, decoded.",
    description: "Công nghệ tốt không cần khó chọn.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>
        <WishlistProvider>
          {children}
          <FloatingContact />
        </WishlistProvider>
      </body>
    </html>
  );
}
