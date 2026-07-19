"use client";

import { useActionState } from "react";

import { formatVnd } from "@/features/catalog/catalog.service";
import type { Cart } from "@/features/cart/cart.types";
import { placeOrderAction } from "@/features/checkout/checkout.actions";

type CheckoutFormProps = Readonly<{
  cart: Cart;
}>;

export function CheckoutForm({ cart }: CheckoutFormProps) {
  const [state, formAction] = useActionState(placeOrderAction, null);

  if (cart.items.length === 0) {
    return (
      <div className="rounded-panel border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
        <h2 className="font-display text-xl font-semibold text-midnight">Giỏ hàng trống</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
          Vui lòng thêm sản phẩm vào giỏ trước khi thanh toán.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <form action={formAction} className="flex-1 rounded-panel border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="font-display text-lg font-bold text-midnight">Thông tin giao hàng</h2>

        {state?.error ? (
          <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">{state.error}</p>
        ) : null}

        <div className="mt-5 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-slate-600">Email</label>
            <input id="email" name="email" type="email" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="email@example.com" />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-semibold text-slate-600">Số điện thoại</label>
            <input id="phone" name="phone" type="tel" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="09xx xxx xxx" />
          </div>
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-slate-600">Họ tên người nhận</label>
            <input id="name" name="name" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Nguyễn Văn A" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="province" className="text-sm font-semibold text-slate-600">Tỉnh/Thành</label>
              <input id="province" name="province" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="TP. HCM" />
            </div>
            <div>
              <label htmlFor="district" className="text-sm font-semibold text-slate-600">Quận/Huyện</label>
              <input id="district" name="district" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Quận 1" />
            </div>
            <div>
              <label htmlFor="ward" className="text-sm font-semibold text-slate-600">Phường/Xã</label>
              <input id="ward" name="ward" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Bến Nghé" />
            </div>
          </div>
          <div>
            <label htmlFor="line1" className="text-sm font-semibold text-slate-600">Địa chỉ chi tiết</label>
            <input id="line1" name="line1" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Số nhà, tên đường" />
          </div>
          <div>
            <label htmlFor="note" className="text-sm font-semibold text-slate-600">Ghi chú (tùy chọn)</label>
            <textarea id="note" name="note" rows={3} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Ghi chú cho đơn hàng" />
          </div>
          <div>
            <label htmlFor="couponCode" className="text-sm font-semibold text-slate-600">Mã giảm giá (tùy chọn)</label>
            <input id="couponCode" name="couponCode" type="text" className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="NEXORA5" />
          </div>
        </div>

        <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700 sm:w-auto">
          Đặt hàng
        </button>
      </form>

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
    </div>
  );
}
