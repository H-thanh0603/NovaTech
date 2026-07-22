"use client";

import { Check, ShoppingBag } from "lucide-react";
import { useActionState, useEffect, useState } from "react";

import { addToCartAction } from "@/features/checkout/checkout.actions";
import { formatVnd } from "@/features/catalog/catalog.service";

type StickyAddToCartProps = Readonly<{
  slug: string;
  sku: string;
  productName: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
}>;

export function StickyAddToCart({ slug, sku, productName, price, imageUrl, imageAlt }: StickyAddToCartProps) {
  const [visible, setVisible] = useState(false);
  const [cartState, cartFormAction] = useActionState(addToCartAction, null);
  const added = cartState?.success === true;

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-lg shadow-lg">
      <div className="mx-auto flex max-w-page items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="relative hidden size-12 shrink-0 overflow-hidden rounded-lg border border-slate-200 sm:block">
            <img src={imageUrl} alt={imageAlt} className="size-full object-cover" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-midnight">{productName}</p>
            <p className="font-display text-lg font-bold text-electric">{formatVnd(price)}</p>
          </div>
        </div>
        <form action={cartFormAction} className="shrink-0">
          <input type="hidden" name="slug" value={slug} />
          <input type="hidden" name="sku" value={sku} />
          <input type="hidden" name="quantity" value="1" />
          <button
            type="submit"
            disabled={added}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-electric px-5 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:bg-teal-tech"
          >
            {added ? (
              <><Check className="size-4" aria-hidden="true" /> Đã thêm</>
            ) : (
              <><ShoppingBag className="size-4" aria-hidden="true" /> Thêm vào giỏ</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
