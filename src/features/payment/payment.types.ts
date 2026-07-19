export type CouponType = "PERCENTAGE" | "FIXED" | "FREE_SHIPPING";

export type Coupon = Readonly<{
  id: string;
  code: string;
  type: CouponType;
  value: number;
  minSubtotal: number;
  maxDiscount?: number;
  usageLimit: number;
  usedCount: number;
  active: boolean;
  startsAt: string;
  endsAt: string;
}>;

export type CouponValidationResult = Readonly<{
  valid: boolean;
  error?: string;
  discountTotal: number;
  freeShipping: boolean;
}>;

export type PaymentStatus = "PENDING" | "SUCCESS" | "FAILED" | "CANCELLED";

export type PaymentResult = Readonly<{
  success: boolean;
  paymentStatus: PaymentStatus;
  redirectUrl?: string;
  error?: string;
}>;
