import { beforeEach, describe, expect, it } from "vitest";

import {
  __resetOrdersForTests,
  createOrder,
  getOrderByCode,
  getOrderByCodeAndPhone,
  getOrderByCodeAndToken,
  listOrdersByEmail,
  updateOrderStatus,
  updateOrderStatusByPaymentId,
} from "./order.service";
import type { CreateOrderInput } from "./order.types";

function makeOrderInput(overrides: Partial<CreateOrderInput> = {}): CreateOrderInput {
  return {
    code: "NX-20260101-0001",
    trackingToken: "tok-abc123",
    paymentId: "pay-abc123",
    email: "buyer@example.com",
    phone: "0901234567",
    items: [{ productName: "Test Product", variantName: "Default", quantity: 1, lineTotal: 1_000_000 }],
    address: {
      name: "Nguyễn Văn A",
      phone: "0901234567",
      province: "TP. HCM",
      district: "Quận 1",
      ward: "Bến Nghé",
      line1: "123 Lê Lợi",
    },
    subtotal: 1_000_000,
    shippingTotal: 0,
    discountTotal: 0,
    grandTotal: 1_000_000,
    ...overrides,
  };
}

describe("order service", () => {
  beforeEach(() => {
    __resetOrdersForTests();
  });

  it("creates an order in PENDING status", () => {
    const order = createOrder(makeOrderInput());
    expect(order.status).toBe("PENDING");
    expect(order.code).toBe("NX-20260101-0001");
  });

  it("retrieves an order by code", () => {
    createOrder(makeOrderInput());
    const order = getOrderByCode("NX-20260101-0001");
    expect(order).not.toBeNull();
    expect(order!.grandTotal).toBe(1_000_000);
  });

  it("returns null for unknown code", () => {
    expect(getOrderByCode("NX-UNKNOWN")).toBeNull();
  });

  it("retrieves an order by code and matching tracking token", () => {
    createOrder(makeOrderInput());
    expect(getOrderByCodeAndToken("NX-20260101-0001", "tok-abc123")).not.toBeNull();
    expect(getOrderByCodeAndToken("NX-20260101-0001", "wrong-token")).toBeNull();
  });

  it("retrieves an order by code and matching phone", () => {
    createOrder(makeOrderInput());
    expect(getOrderByCodeAndPhone("NX-20260101-0001", "0901234567")).not.toBeNull();
    expect(getOrderByCodeAndPhone("NX-20260101-0001", "0000000000")).toBeNull();
  });

  it("updates order status by code", () => {
    createOrder(makeOrderInput());
    const updated = updateOrderStatus("NX-20260101-0001", "PAID");
    expect(updated?.status).toBe("PAID");
    expect(getOrderByCode("NX-20260101-0001")?.status).toBe("PAID");
  });

  it("updates order status by payment id", () => {
    createOrder(makeOrderInput());
    const updated = updateOrderStatusByPaymentId("pay-abc123", "FAILED");
    expect(updated?.status).toBe("FAILED");
  });

  it("returns null when updating an unknown payment id", () => {
    expect(updateOrderStatusByPaymentId("pay-unknown", "PAID")).toBeNull();
  });

  it("lists orders by email sorted newest first", () => {
    createOrder(makeOrderInput({ code: "NX-1", paymentId: "pay-1" }));
    createOrder(makeOrderInput({ code: "NX-2", paymentId: "pay-2" }));
    createOrder(makeOrderInput({ code: "NX-3", paymentId: "pay-3", email: "other@example.com" }));

    const orders = listOrdersByEmail("buyer@example.com");
    expect(orders.length).toBe(2);
    expect(orders.map((o) => o.code)).toEqual(["NX-2", "NX-1"]);
  });
});
