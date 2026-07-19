"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

import { formatVnd } from "@/features/catalog/catalog.service";
import type { CartItem } from "@/features/cart/cart.types";
import { removeFromCartAction, updateCartAction } from "@/features/checkout/checkout.actions";

type CartLineProps = Readonly<{
  item: CartItem;
}>;

export function CartLine({ item }: CartLineProps) {
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
