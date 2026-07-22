import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Box, DollarSign, Package, ShoppingCart } from "lucide-react";

import { listAllOrders } from "@/features/order/order.service";
import { formatVnd } from "@/features/catalog/catalog.service";
import { catalogProducts } from "@/features/catalog/catalog.data";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Bảng điều khiển quản trị Nexora.",
};

export const dynamic = "force-dynamic";

export default function AdminDashboardPage() {
  const orders = listAllOrders();
  const totalRevenue = orders
    .filter((o) => o.status === "PAID")
    .reduce((sum, o) => sum + o.grandTotal, 0);
  const pendingOrders = orders.filter((o) => o.status === "PENDING").length;
  const productCount = catalogProducts.length;

  const stats = [
    { label: "Tổng doanh thu", value: formatVnd(totalRevenue), icon: DollarSign, color: "text-teal-tech" },
    { label: "Đơn hàng", value: orders.length.toString(), icon: ShoppingCart, color: "text-electric" },
    { label: "Chờ xử lý", value: pendingOrders.toString(), icon: Package, color: "text-amber-500" },
    { label: "Sản phẩm", value: productCount.toString(), icon: Box, color: "text-midnight" },
  ];

  const recentOrders = orders.slice(0, 5);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-midnight">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-500">Tổng quan hoạt động cửa hàng</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <span className={`grid size-10 place-items-center rounded-lg bg-slate-50 ${stat.color}`}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-3 font-display text-2xl font-bold text-midnight">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold text-slate-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h2 className="font-display text-lg font-bold text-midnight">Đơn hàng gần đây</h2>
          <Link href="/admin/don-hang" className="inline-flex items-center gap-1 text-sm font-bold text-electric hover:underline">
            Xem tất cả <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
        {recentOrders.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-sm text-slate-400">Chưa có đơn hàng nào.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Mã đơn</th>
                  <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Khách hàng</th>
                  <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400">Trạng thái</th>
                  <th className="p-3 text-right text-xs font-bold uppercase tracking-wide text-slate-400">Tổng</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.code} className="border-b border-slate-50">
                    <td className="p-3 font-mono text-xs font-semibold text-midnight">{order.code}</td>
                    <td className="p-3 text-slate-600">{order.address.name}</td>
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
    </div>
  );
}
