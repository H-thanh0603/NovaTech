import type { Metadata } from "next";
import { cookies } from "next/headers";

import { CartView } from "@/components/cart/cart-view";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { InMemoryCatalogRepository } from "@/features/catalog/catalog.repository";
import { hydrateCart } from "@/features/cart/cart.service";
import { CART_COOKIE_NAME, parseCartCookie } from "@/lib/cookies";

export const metadata: Metadata = {
  title: "Giỏ hàng",
  description: "Xem và quản lý sản phẩm trong giỏ hàng.",
};

export default async function CartPage() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(CART_COOKIE_NAME)?.value;
  const data = parseCartCookie(raw);
  const repository = new InMemoryCatalogRepository();
  const cart = await hydrateCart(repository, data.items);

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">Giỏ hàng</h1>
          <div className="mt-8">
            <CartView cart={cart} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
