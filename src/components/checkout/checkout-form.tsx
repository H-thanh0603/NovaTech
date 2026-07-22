"use client";

import { useActionState, useState } from "react";
import { Banknote, CreditCard, MapPin, QrCode, Store, Truck, Wallet } from "lucide-react";

import { formatVnd } from "@/features/catalog/catalog.service";
import type { Cart } from "@/features/cart/cart.types";
import { CouponPreview } from "@/components/payment/coupon-preview";
import { placeOrderAction } from "@/features/checkout/checkout.actions";
import { storeLocations } from "@/features/checkout/store-data";

type CheckoutFormProps = Readonly<{
  cart: Cart;
}>;

const paymentMethods = [
  { id: "vnpay", label: "VNPay QR", icon: QrCode, desc: "Quét mã QR để thanh toán" },
  { id: "momo", label: "MoMo", icon: Wallet, desc: "Ví điện tử MoMo" },
  { id: "card", label: "Thẻ tín dụng", icon: CreditCard, desc: "Visa / Mastercard / JCB" },
  { id: "cod", label: "COD", icon: Banknote, desc: "Thanh toán khi nhận hàng" },
] as const;

export function CheckoutForm({ cart }: CheckoutFormProps) {
  const [state, formAction] = useActionState(placeOrderAction, null);
  const [couponCode, setCouponCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string>("vnpay");
  const [deliveryMethod, setDeliveryMethod] = useState<"home" | "pickup">("home");
  const [selectedStore, setSelectedStore] = useState<string>("");

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

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setDeliveryMethod("home")}
            className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
              deliveryMethod === "home" ? "border-electric bg-electric/5" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <span className={`grid size-10 shrink-0 place-items-center rounded-lg ${deliveryMethod === "home" ? "bg-electric text-white" : "bg-slate-100 text-slate-500"}`}>
              <Truck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-midnight">Giao tận nơi</p>
              <p className="text-xs text-slate-500">Giao hàng trong 2-4 giờ nội thành</p>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setDeliveryMethod("pickup")}
            className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
              deliveryMethod === "pickup" ? "border-electric bg-electric/5" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <span className={`grid size-10 shrink-0 place-items-center rounded-lg ${deliveryMethod === "pickup" ? "bg-electric text-white" : "bg-slate-100 text-slate-500"}`}>
              <Store className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-midnight">Nhận tại cửa hàng</p>
              <p className="text-xs text-slate-500">Freeship · Nhận trong 30 phút</p>
            </div>
          </button>
        </div>
        <input type="hidden" name="deliveryMethod" value={deliveryMethod} />

        {deliveryMethod === "pickup" ? (
          <div className="mt-4">
            <h3 className="text-sm font-bold text-midnight">Chọn cửa hàng nhận hàng</h3>
            <div className="mt-3 flex flex-col gap-3">
              {storeLocations.map((store) => (
                <button
                  key={store.id}
                  type="button"
                  onClick={() => setSelectedStore(store.id)}
                  disabled={!store.inStock}
                  className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                    selectedStore === store.id ? "border-electric bg-electric/5" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg ${selectedStore === store.id ? "bg-electric text-white" : "bg-slate-100 text-slate-500"}`}>
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-midnight">{store.name}</p>
                      {store.inStock ? (
                        <span className="rounded bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-tech">Còn hàng</span>
                      ) : (
                        <span className="rounded bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-500">Hết hàng</span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{store.address}, {store.city}</p>
                    <p className="mt-0.5 text-xs text-slate-400">Giờ mở cửa: {store.hours} · {store.phone}</p>
                  </div>
                </button>
              ))}
            </div>
            <input type="hidden" name="storeId" value={selectedStore} />
          </div>
        ) : null}

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
            <input id="couponCode" name="couponCode" type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="NEXORA5" />
            <div className="mt-2">
              <CouponPreview subtotal={cart.subtotal} code={couponCode} />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-bold text-midnight">Phương thức thanh toán</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              const isActive = paymentMethod === method.id;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                    isActive
                      ? "border-electric bg-electric/5"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <span className={`grid size-10 shrink-0 place-items-center rounded-lg ${isActive ? "bg-electric text-white" : "bg-slate-100 text-slate-500"}`}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-midnight">{method.label}</p>
                    <p className="text-xs text-slate-500">{method.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
          <input type="hidden" name="paymentMethod" value={paymentMethod} />
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
          {cart.subtotal >= 5000000 ? (
            <p className="mt-3 rounded-lg bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-tech">
              Hỗ trợ trả góp 0% · {formatVnd(Math.round(cart.subtotal / 12))}/tháng × 12 tháng
            </p>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
