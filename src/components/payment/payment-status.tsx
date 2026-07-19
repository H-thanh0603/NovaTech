import { CheckCircle, XCircle, Package } from "lucide-react";

type PaymentStatusProps = Readonly<{
  status: "success" | "failed" | "cancelled" | "pending";
}>;

export function PaymentStatus({ status }: PaymentStatusProps) {
  switch (status) {
    case "success":
      return (
        <div className="text-center">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-teal-50">
            <CheckCircle className="size-8 text-teal-tech" aria-hidden="true" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">
            Đặt hàng thành công!
          </h1>
        </div>
      );
    case "failed":
      return (
        <div className="text-center">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-red-50">
            <XCircle className="size-8 text-red-500" aria-hidden="true" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">
            Thanh toán thất bại
          </h1>
        </div>
      );
    case "cancelled":
      return (
        <div className="text-center">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-amber-50">
            <Package className="size-8 text-amber-500" aria-hidden="true" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">
            Đơn hàng đã hủy
          </h1>
        </div>
      );
    default:
      return null;
  }
}
