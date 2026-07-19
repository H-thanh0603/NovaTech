import type { Coupon, CouponValidationResult } from "./payment.types";

export const demoCoupons: readonly Coupon[] = [
  {
    id: "coupon-nexora5",
    code: "NEXORA5",
    type: "PERCENTAGE",
    value: 5,
    minSubtotal: 0,
    usageLimit: 1000,
    usedCount: 0,
    active: true,
    startsAt: "2026-01-01T00:00:00Z",
    endsAt: "2026-12-31T23:59:59Z",
  },
  {
    id: "coupon-freeship",
    code: "FREESHIP",
    type: "FREE_SHIPPING",
    value: 0,
    minSubtotal: 500_000,
    usageLimit: 500,
    usedCount: 0,
    active: true,
    startsAt: "2026-01-01T00:00:00Z",
    endsAt: "2026-12-31T23:59:59Z",
  },
];

export function findCoupon(code: string): Coupon | null {
  const normalized = code.trim().toUpperCase();
  return demoCoupons.find((c) => c.code === normalized && c.active) ?? null;
}

export function validateCoupon(
  code: string,
  subtotal: number,
  shippingTotal: number = 0,
): CouponValidationResult {
  const coupon = findCoupon(code);

  if (!coupon) {
    return { valid: false, error: "Mã giảm giá không hợp lệ.", discountTotal: 0, freeShipping: false };
  }

  const now = new Date();
  const startsAt = new Date(coupon.startsAt);
  const endsAt = new Date(coupon.endsAt);

  if (now < startsAt || now > endsAt) {
    return { valid: false, error: "Mã giảm giá đã hết hạn hoặc chưa có hiệu lực.", discountTotal: 0, freeShipping: false };
  }

  if (coupon.usedCount >= coupon.usageLimit) {
    return { valid: false, error: "Mã giảm giá đã hết lượt sử dụng.", discountTotal: 0, freeShipping: false };
  }

  if (subtotal < coupon.minSubtotal) {
    return {
      valid: false,
      error: `Đơn hàng tối thiểu ${coupon.minSubtotal.toLocaleString("vi-VN")}₫ để dùng mã này.`,
      discountTotal: 0,
      freeShipping: false,
    };
  }

  switch (coupon.type) {
    case "PERCENTAGE": {
      let discount = Math.floor((subtotal * coupon.value) / 100);
      if (coupon.maxDiscount && discount > coupon.maxDiscount) {
        discount = coupon.maxDiscount;
      }
      return { valid: true, discountTotal: discount, freeShipping: false };
    }
    case "FIXED": {
      const discount = Math.min(coupon.value, subtotal);
      return { valid: true, discountTotal: discount, freeShipping: false };
    }
    case "FREE_SHIPPING": {
      return { valid: true, discountTotal: shippingTotal, freeShipping: true };
    }
    default:
      return { valid: false, error: "Loại mã giảm giá không hỗ trợ.", discountTotal: 0, freeShipping: false };
  }
}
