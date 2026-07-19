import { describe, expect, it } from "vitest";

import {
  createPaymentSession,
  getPaymentStatus,
  processMockPayment,
  updatePaymentStatus,
} from "@/features/payment/payment.service";

describe("payment service", () => {
  it("creates a payment session", () => {
    const { paymentId, redirectUrl } = createPaymentSession("NX-TEST-0001", 1_000_000);
    expect(paymentId).toBeTruthy();
    expect(redirectUrl).toContain("paymentId=");
    expect(redirectUrl).toContain("orderCode=NX-TEST-0001");
  });

  it("returns PENDING status for new payment", () => {
    const { paymentId } = createPaymentSession("NX-TEST-0002", 500_000);
    expect(getPaymentStatus(paymentId)).toBe("PENDING");
  });

  it("returns null for unknown payment ID", () => {
    expect(getPaymentStatus("nonexistent")).toBeNull();
  });

  it("updates payment status", () => {
    const { paymentId } = createPaymentSession("NX-TEST-0003", 200_000);
    const updated = updatePaymentStatus(paymentId, "SUCCESS");
    expect(updated).toBe(true);
    expect(getPaymentStatus(paymentId)).toBe("SUCCESS");
  });

  it("returns false for updating unknown payment", () => {
    expect(updatePaymentStatus("nonexistent", "SUCCESS")).toBe(false);
  });

  it("processes mock payment", () => {
    const { paymentId } = createPaymentSession("NX-TEST-0004", 300_000);
    const result = processMockPayment(paymentId, 300_000);

    if (result.success) {
      expect(result.paymentStatus).toBe("SUCCESS");
      expect(getPaymentStatus(paymentId)).toBe("SUCCESS");
    } else {
      expect(result.paymentStatus).toBe("FAILED");
      expect(result.error).toBeTruthy();
    }
  });

  it("rejects mismatched amount", () => {
    const { paymentId } = createPaymentSession("NX-TEST-0005", 400_000);
    const result = processMockPayment(paymentId, 999_000);
    expect(result.success).toBe(false);
    expect(result.paymentStatus).toBe("FAILED");
  });

  it("rejects unknown payment ID", () => {
    const result = processMockPayment("nonexistent", 100_000);
    expect(result.success).toBe(false);
    expect(result.error).toContain("Không tìm thấy");
  });
});
