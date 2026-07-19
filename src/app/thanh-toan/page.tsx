import type { Metadata } from "next";
import { cookies } from "next/headers";

import { CheckoutForm } from "@/components/checkout/checkout-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { InMemoryCatalogRepository } from "@/features/catalog/catalog.repository";
import { hydrateCart } from "@/features/cart/cart.service";
import { CART_COOKIE_NAME, parseCartCookie } from "@/lib/cookies";

export const metadata: Metadata = {
  title: "Thanh toán",
  description: "Hoàn tất đơn hàng của bạn.",
};

export default async function CheckoutPage() {
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
          <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">Thanh toán</h1>
          <div className="mt-8">
            <CheckoutForm cart={cart} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
