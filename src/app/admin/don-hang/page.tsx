import type { Metadata } from "next";
import { listAllOrders } from "@/features/order/order.service";
import { formatVnd } from "@/features/catalog/catalog.service";

export const metadata: Metadata = {
  title: "Quản lý đơn hàng",
  description: "Quản lý đơn hàng Nexora.",
};

export const dynamic = "force-dynamic";

export default function AdminOrdersPage() {
  const orders = listAllOrders();

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-midnight">Đơn hàng</h1>
      <p className="mt-1 text-sm text-slate-500">{orders.length} đơn hàng</p>

      {orders.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <p className="text-sm text-slate-400">Chưa có đơn hàng nào.</p>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Mã đơn</th>
                <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Khách hàng</th>
                <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Email</th>
                <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Thanh toán</th>
                <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Trạng thái</th>
                <th className="p-3 text-right text-xs font-bold uppercase tracking-wide text-slate-400">Tổng</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.code} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="p-3 font-mono text-xs font-semibold text-midnight">{order.code}</td>
                  <td className="p-3 text-slate-600">{order.address.name}</td>
                  <td className="p-3 text-slate-500">{order.email}</td>
                  <td className="p-3 text-slate-600">{order.paymentMethod ?? "—"}</td>
                  <td className="p-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                      order.status === "PAID" ? "bg-teal-50 text-teal-tech" :
                      order.status === "PENDING" ? "bg-amber-50 text-amber-600" :
                      order.status === "CANCELLED" ? "bg-red-50 text-red-500" :
                      "bg-slate-100 text-slate-500"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3 text-right font-semibold text-midnight">{formatVnd(order.grandTotal)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
