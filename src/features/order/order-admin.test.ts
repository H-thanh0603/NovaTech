import { describe, expect, it } from "vitest";

import { listAllOrders, createOrder, __resetOrdersForTests } from "@/features/order/order.service";
import type { CreateOrderInput } from "@/features/order/order.types";

function makeTestOrder(overrides: Partial<CreateOrderInput> = {}): CreateOrderInput {
  return {
    code: "TEST-001",
    trackingToken: "tok-123",
    paymentId: "pay-123",
    email: "test@example.com",
    phone: "0901234567",
    items: Object.freeze([
      { productName: "Test Product", variantName: "128GB", quantity: 1, lineTotal: 10_000_000 },
    ]),
    address: Object.freeze({
      name: "Test User",
      phone: "0901234567",
      province: "TP. HCM",
      district: "Quận 1",
      ward: "Bến Nghé",
      line1: "123 Lê Lợi",
    }),
    subtotal: 10_000_000,
    shippingTotal: 0,
    discountTotal: 0,
    grandTotal: 10_000_000,
    ...overrides,
  };
}

describe("listAllOrders", () => {
  it("returns empty array when no orders exist", () => {
    __resetOrdersForTests();
    expect(listAllOrders()).toEqual([]);
  });

  it("returns all orders sorted by newest first", () => {
    __resetOrdersForTests();
    createOrder(makeTestOrder({ code: "ORD-1" }));
    createOrder(makeTestOrder({ code: "ORD-2" }));
    const all = listAllOrders();
    expect(all).toHaveLength(2);
    expect(all[0].code).toBe("ORD-2");
    expect(all[1].code).toBe("ORD-1");
  });

  it("returns orders with all fields intact", () => {
    __resetOrdersForTests();
    createOrder(makeTestOrder({ code: "ORD-X" }));
    const [order] = listAllOrders();
    expect(order.code).toBe("ORD-X");
    expect(order.email).toBe("test@example.com");
    expect(order.grandTotal).toBe(10_000_000);
    expect(order.items).toHaveLength(1);
  });
});
