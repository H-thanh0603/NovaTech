export type OrderStatus = "PENDING" | "PAID" | "FAILED" | "CANCELLED";

export type OrderItemSnapshot = Readonly<{
  productName: string;
  variantName: string;
  quantity: number;
  lineTotal: number;
}>;

export type OrderAddressSnapshot = Readonly<{
  name: string;
  phone: string;
  province: string;
  district: string;
  ward: string;
  line1: string;
}>;

export type OrderRecord = Readonly<{
  code: string;
  trackingToken: string;
  paymentId: string;
  status: OrderStatus;
  email: string;
  phone: string;
  items: readonly OrderItemSnapshot[];
  address: OrderAddressSnapshot;
  couponCode?: string;
  subtotal: number;
  shippingTotal: number;
  discountTotal: number;
  grandTotal: number;
  createdAt: number;
}>;

export type CreateOrderInput = Readonly<{
  code: string;
  trackingToken: string;
  paymentId: string;
  email: string;
  phone: string;
  items: readonly OrderItemSnapshot[];
  address: OrderAddressSnapshot;
  couponCode?: string;
  subtotal: number;
  shippingTotal: number;
  discountTotal: number;
  grandTotal: number;
}>;
