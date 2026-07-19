import type { PaymentResult, PaymentStatus } from "./payment.types";

const payments = new Map<string, { status: PaymentStatus; orderCode: string; amount: number }>();

export function createPaymentSession(orderCode: string, amount: number): { paymentId: string; redirectUrl: string } {
  const paymentId = `pay-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  payments.set(paymentId, { status: "PENDING", orderCode, amount });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  const redirectUrl = `${baseUrl}/api/payment/mock?paymentId=${paymentId}&orderCode=${orderCode}&amount=${amount}`;

  return { paymentId, redirectUrl };
}

export function getPaymentStatus(paymentId: string): PaymentStatus | null {
  return payments.get(paymentId)?.status ?? null;
}

export function updatePaymentStatus(paymentId: string, status: PaymentStatus): boolean {
  const payment = payments.get(paymentId);
  if (!payment) return false;
  payments.set(paymentId, { ...payment, status });
  return true;
}

export function processMockPayment(paymentId: string, amount: number): PaymentResult {
  const payment = payments.get(paymentId);
  if (!payment) {
    return { success: false, paymentStatus: "FAILED", error: "Không tìm thấy phiên thanh toán." };
  }

  if (payment.amount !== amount) {
    return { success: false, paymentStatus: "FAILED", error: "Số tiền không khớp." };
  }

  const success = Math.random() > 0.05; // 95% success rate for demo
  const status: PaymentStatus = success ? "SUCCESS" : "FAILED";

  updatePaymentStatus(paymentId, status);

  if (!success) {
    return { success: false, paymentStatus: "FAILED", error: "Thanh toán thất bại. Vui lòng thử lại." };
  }

  return { success: true, paymentStatus: "SUCCESS" };
}
