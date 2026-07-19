import { describe, expect, it } from "vitest";

import { findCoupon, validateCoupon, demoCoupons } from "@/features/payment/coupon.service";

describe("coupon service", () => {
  it("finds a valid coupon by code", () => {
    const coupon = findCoupon("NEXORA5");
    expect(coupon).not.toBeNull();
    expect(coupon?.code).toBe("NEXORA5");
    expect(coupon?.type).toBe("PERCENTAGE");
  });

  it("finds coupon case-insensitively", () => {
    const coupon = findCoupon("nexora5");
    expect(coupon).not.toBeNull();
  });

  it("returns null for unknown code", () => {
    expect(findCoupon("NONEXISTENT")).toBeNull();
  });

  it("validates percentage coupon", () => {
    const result = validateCoupon("NEXORA5", 1_000_000);
    expect(result.valid).toBe(true);
    expect(result.discountTotal).toBe(50_000);
    expect(result.freeShipping).toBe(false);
  });

  it("validates free shipping coupon", () => {
    const result = validateCoupon("FREESHIP", 600_000, 30_000);
    expect(result.valid).toBe(true);
    expect(result.freeShipping).toBe(true);
    expect(result.discountTotal).toBe(30_000);
  });

  it("rejects free shipping below minimum subtotal", () => {
    const result = validateCoupon("FREESHIP", 100_000, 30_000);
    expect(result.valid).toBe(false);
    expect(result.error).toContain("tối thiểu");
  });

  it("rejects unknown coupon", () => {
    const result = validateCoupon("BADCODE", 1_000_000);
    expect(result.valid).toBe(false);
    expect(result.error).toContain("không hợp lệ");
  });

  it("has 2 demo coupons", () => {
    expect(demoCoupons.length).toBe(2);
  });
});
