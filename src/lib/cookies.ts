import type { CartCookieData } from "@/features/cart/cart.types";

export const CART_COOKIE_NAME = "nexora_cart";
export const CART_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function serializeCartCookie(data: CartCookieData): string {
  return JSON.stringify(data);
}

export function parseCartCookie(raw: string | undefined): CartCookieData {
  if (!raw) return { items: [] };
  try {
    const parsed = JSON.parse(raw) as CartCookieData;
    if (!parsed.items || !Array.isArray(parsed.items)) return { items: [] };
    return { items: parsed.items };
  } catch {
    return { items: [] };
  }
}

export function cartToCookieData(cart: Readonly<{ items: ReadonlyArray<{ productSlug: string; sku: string; quantity: number }> }>): CartCookieData {
  return {
    items: cart.items.map((item) => ({
      slug: item.productSlug,
      sku: item.sku,
      quantity: item.quantity,
    })),
  };
}
