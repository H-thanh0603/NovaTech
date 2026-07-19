import Link from "next/link";

import { formatVnd } from "@/features/catalog/catalog.service";
import type { Cart } from "@/features/cart/cart.types";

type CartSummaryProps = Readonly<{
  cart: Cart;
}>;

export function CartSummary({ cart }: CartSummaryProps) {
  return (
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
  );
}
