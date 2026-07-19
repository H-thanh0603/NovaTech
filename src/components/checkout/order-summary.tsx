import { formatVnd } from "@/features/catalog/catalog.service";
import type { Cart } from "@/features/cart/cart.types";

type OrderSummaryProps = Readonly<{
  cart: Cart;
}>;

export function OrderSummary({ cart }: OrderSummaryProps) {
  return (
    <aside className="w-full shrink-0 rounded-panel border border-slate-200 bg-white p-5 sm:p-6 lg:w-80">
      <h2 className="font-display text-lg font-bold text-midnight">Đơn hàng</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {cart.items.map((item) => (
          <li key={item.variantId} className="flex items-center justify-between gap-2 text-sm">
            <span className="text-slate-600">{item.productName} × {item.quantity}</span>
            <span className="font-semibold text-midnight">{formatVnd(item.lineTotal)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t border-slate-200 pt-4">
        <div className="flex items-center justify-between">
          <span className="font-display text-base font-bold text-midnight">Tổng</span>
          <span className="font-display text-xl font-bold text-electric">{formatVnd(cart.subtotal)}</span>
        </div>
      </div>
    </aside>
  );
}
