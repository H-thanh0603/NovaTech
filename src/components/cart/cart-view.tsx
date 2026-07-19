"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

import { formatVnd } from "@/features/catalog/catalog.service";
import type { Cart, CartItem } from "@/features/cart/cart.types";
import { removeFromCartAction, updateCartAction } from "@/features/checkout/checkout.actions";

type CartLineProps = Readonly<{
  item: CartItem;
}>;

function CartLine({ item }: CartLineProps) {
  const [removeState, removeFormAction] = useActionState(removeFromCartAction, null);
  const [updateState, updateFormAction] = useActionState(updateCartAction, null);

  return (
    <div className="flex gap-4 border-b border-slate-200 py-5">
      <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-slate-100">
        <Image src={item.imageUrl} alt={item.imageAlt} fill sizes="96px" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <Link href={`/san-pham/${item.productSlug}`} className="font-display text-base font-bold text-midnight hover:text-electric">
          {item.productName}
        </Link>
        <p className="text-sm text-slate-500">{item.variantName}</p>
        <p className="text-sm font-bold text-midnight">{formatVnd(item.unitPrice)}</p>
        <div className="flex items-center gap-3">
          <form action={updateFormAction}>
            <input type="hidden" name="variantId" value={item.variantId} />
            <input type="hidden" name="quantity" value={Math.max(1, item.quantity - 1)} />
            <button type="submit" className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 hover:border-electric hover:text-electric" aria-label="Giảm số lượng">
              <Minus className="size-4" aria-hidden="true" />
            </button>
          </form>
          <span className="min-w-8 text-center text-sm font-bold text-midnight">{item.quantity}</span>
          <form action={updateFormAction}>
            <input type="hidden" name="variantId" value={item.variantId} />
            <input type="hidden" name="quantity" value={item.quantity + 1} />
            <button type="submit" className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 hover:border-electric hover:text-electric" aria-label="Tăng số lượng">
              <Plus className="size-4" aria-hidden="true" />
            </button>
          </form>
          <form action={removeFormAction}>
            <input type="hidden" name="variantId" value={item.variantId} />
            <button type="submit" className="ml-auto inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-red-500 hover:text-red-700" aria-label={`Xóa ${item.productName}`}>
              <Trash2 className="size-4" aria-hidden="true" /> Xóa
            </button>
          </form>
        </div>
        {removeState?.error ? <p className="text-xs text-red-500">{removeState.error}</p> : null}
        {updateState?.error ? <p className="text-xs text-red-500">{updateState.error}</p> : null}
      </div>
      <div className="text-right">
        <p className="font-display text-lg font-bold text-midnight">{formatVnd(item.lineTotal)}</p>
      </div>
    </div>
  );
}

type CartViewProps = Readonly<{
  cart: Cart;
}>;

export function CartView({ cart }: CartViewProps) {
  if (cart.items.length === 0) {
    return (
      <div className="rounded-panel border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
        <h2 className="font-display text-xl font-semibold text-midnight">Giỏ hàng trống</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
          Khám phá sản phẩm và thêm vào giỏ để bắt đầu mua sắm.
        </p>
        <Link href="/san-pham" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
          Xem sản phẩm
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <div className="flex-1 rounded-panel border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="font-display text-lg font-bold text-midnight">Sản phẩm trong giỏ</h2>
        {cart.items.map((item) => <CartLine key={item.variantId} item={item} />)}
      </div>
      <aside className="w-full shrink-0 rounded-panel border border-slate-200 bg-white p-5 sm:p-6 lg:w-80">
        <h2 className="font-display text-lg font-bold text-midnight">Tổng cộng</h2>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-slate-600">Tạm tính</span>
          <span className="text-sm font-semibold text-midnight">{formatVnd(cart.subtotal)}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-slate-600">Phí giao hàng</span>
          <span className="text-sm font-semibold text-slate-400">Tính ở bước thanh toán</span>
        </div>
        <div className="mt-4 border-t border-slate-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="font-display text-base font-bold text-midnight">Tổng</span>
            <span className="font-display text-xl font-bold text-electric">{formatVnd(cart.subtotal)}</span>
          </div>
        </div>
        <Link href="/thanh-toan" className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700">
          Tiến hành thanh toán
        </Link>
        <p className="mt-3 text-center text-xs text-slate-400">{cart.itemCount} sản phẩm</p>
      </aside>
    </div>
  );
}
