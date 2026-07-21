import { NextResponse } from "next/server";

import { processMockPayment, updatePaymentStatus } from "@/features/payment/payment.service";
import { updateOrderStatusByPaymentId } from "@/features/order/order.service";

type SearchParams = Promise<{
  paymentId?: string;
  orderCode?: string;
  amount?: string;
  action?: string;
}>;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const params: SearchParams = Promise.resolve({
    paymentId: url.searchParams.get("paymentId") ?? undefined,
    orderCode: url.searchParams.get("orderCode") ?? undefined,
    amount: url.searchParams.get("amount") ?? undefined,
    action: url.searchParams.get("action") ?? undefined,
  });

  const { paymentId, orderCode, amount, action } = await params;

  if (!paymentId || !orderCode || !amount) {
    return NextResponse.json({ error: "Thiếu tham số thanh toán." }, { status: 400 });
  }

  if (action === "cancel") {
    updatePaymentStatus(paymentId, "CANCELLED");
    updateOrderStatusByPaymentId(paymentId, "CANCELLED");
    return NextResponse.redirect(new URL(`/don-hang/${orderCode}?status=cancelled`, request.url));
  }

  if (action === "fail") {
    updatePaymentStatus(paymentId, "FAILED");
    updateOrderStatusByPaymentId(paymentId, "FAILED");
    return NextResponse.redirect(new URL(`/don-hang/${orderCode}?status=failed`, request.url));
  }

  const numericAmount = parseInt(amount, 10);
  if (Number.isNaN(numericAmount)) {
    return NextResponse.json({ error: "Số tiền không hợp lệ." }, { status: 400 });
  }

  const result = processMockPayment(paymentId, numericAmount);

  if (result.success) {
    updateOrderStatusByPaymentId(paymentId, "PAID");
    return NextResponse.redirect(new URL(`/don-hang/${orderCode}?status=success`, request.url));
  }

  updateOrderStatusByPaymentId(paymentId, "FAILED");
  return NextResponse.redirect(new URL(`/don-hang/${orderCode}?status=failed`, request.url));
}
