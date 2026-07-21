import { NextResponse } from "next/server";

import { getPaymentStatus, updatePaymentStatus } from "@/features/payment/payment.service";
import { updateOrderStatusByPaymentId } from "@/features/order/order.service";

type Body = {
  paymentId?: string;
  orderCode?: string;
  status?: string;
  transactionId?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { paymentId, orderCode, status, transactionId } = body;

  if (!paymentId || !orderCode || !status) {
    return NextResponse.json({ error: "Missing paymentId, orderCode, or status." }, { status: 400 });
  }

  const currentStatus = getPaymentStatus(paymentId);
  if (!currentStatus) {
    return NextResponse.json({ error: "Payment session not found." }, { status: 404 });
  }

  const validStatuses = ["SUCCESS", "FAILED", "CANCELLED"] as const;
  if (!validStatuses.includes(status as (typeof validStatuses)[number])) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  const updated = updatePaymentStatus(paymentId, status as "SUCCESS" | "FAILED" | "CANCELLED");
  if (!updated) {
    return NextResponse.json({ error: "Failed to update payment status." }, { status: 500 });
  }

  const orderStatus = status === "SUCCESS" ? "PAID" : status === "CANCELLED" ? "CANCELLED" : "FAILED";
  updateOrderStatusByPaymentId(paymentId, orderStatus);

  return NextResponse.json({
    success: true,
    paymentId,
    orderCode,
    status,
    transactionId: transactionId ?? null,
  });
}
