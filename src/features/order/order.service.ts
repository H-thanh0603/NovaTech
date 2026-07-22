import type { CreateOrderInput, OrderRecord, OrderStatus } from "./order.types";

const ordersByCode = new Map<string, OrderRecord>();
const codeByPaymentId = new Map<string, string>();
const insertionOrder: string[] = [];

export function createOrder(input: CreateOrderInput): OrderRecord {
  const record: OrderRecord = Object.freeze({
    ...input,
    items: Object.freeze([...input.items]),
    address: Object.freeze({ ...input.address }),
    status: "PENDING" as OrderStatus,
    createdAt: Date.now(),
  });

  ordersByCode.set(record.code, record);
  codeByPaymentId.set(record.paymentId, record.code);
  insertionOrder.push(record.code);

  return record;
}

export function getOrderByCode(code: string): OrderRecord | null {
  return ordersByCode.get(code) ?? null;
}

export function getOrderByCodeAndToken(code: string, token: string): OrderRecord | null {
  const order = ordersByCode.get(code);
  if (!order || !token || order.trackingToken !== token) return null;
  return order;
}

export function getOrderByCodeAndPhone(code: string, phone: string): OrderRecord | null {
  const order = ordersByCode.get(code);
  if (!order || !phone || order.phone !== phone) return null;
  return order;
}

export function listOrdersByEmail(email: string): OrderRecord[] {
  const normalized = email.trim().toLowerCase();
  return [...insertionOrder]
    .reverse()
    .map((code) => ordersByCode.get(code))
    .filter((order): order is OrderRecord => order != null && order.email.toLowerCase() === normalized);
}

export function listAllOrders(): OrderRecord[] {
  return [...insertionOrder]
    .reverse()
    .map((code) => ordersByCode.get(code))
    .filter((order): order is OrderRecord => order != null);
}

export function updateOrderStatus(code: string, status: OrderStatus): OrderRecord | null {
  const order = ordersByCode.get(code);
  if (!order) return null;
  const updated = Object.freeze({ ...order, status });
  ordersByCode.set(code, updated);
  return updated;
}

export function updateOrderStatusByPaymentId(paymentId: string, status: OrderStatus): OrderRecord | null {
  const code = codeByPaymentId.get(paymentId);
  if (!code) return null;
  return updateOrderStatus(code, status);
}

export function __resetOrdersForTests(): void {
  ordersByCode.clear();
  codeByPaymentId.clear();
  insertionOrder.length = 0;
}
