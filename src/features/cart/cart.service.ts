import type { CatalogRepository } from "@/features/catalog/catalog.repository";
import type { CatalogProductDetail, CatalogVariant } from "@/features/catalog/catalog.types";

import type { Cart, CartItem } from "./cart.types";

export function createEmptyCart(): Cart {
  return Object.freeze({ items: Object.freeze([]), subtotal: 0, itemCount: 0 });
}

export function computeTotals(items: readonly CartItem[]): Pick<Cart, "subtotal" | "itemCount"> {
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { subtotal, itemCount };
}

export function addItem(cart: Cart, newItem: CartItem): Cart {
  const existingIndex = cart.items.findIndex((item) => item.variantId === newItem.variantId);

  let items: CartItem[];
  if (existingIndex >= 0) {
    items = cart.items.map((item, index) =>
      index === existingIndex
        ? { ...item, quantity: item.quantity + newItem.quantity, lineTotal: (item.quantity + newItem.quantity) * item.unitPrice }
        : item,
    );
  } else {
    items = [...cart.items, newItem];
  }

  return Object.freeze({ items: Object.freeze(items), ...computeTotals(items) });
}

export function updateItemQuantity(cart: Cart, variantId: string, quantity: number): Cart {
  if (quantity <= 0) {
    return removeItem(cart, variantId);
  }

  const items = cart.items.map((item) =>
    item.variantId === variantId
      ? { ...item, quantity, lineTotal: quantity * item.unitPrice }
      : item,
  );

  return Object.freeze({ items: Object.freeze(items), ...computeTotals(items) });
}

export function removeItem(cart: Cart, variantId: string): Cart {
  const items = cart.items.filter((item) => item.variantId !== variantId);
  return Object.freeze({ items: Object.freeze(items), ...computeTotals(items) });
}

export function validateQuantity(quantity: number): number {
  if (!Number.isSafeInteger(quantity) || quantity < 1) {
    throw new RangeError("Số lượng phải là số nguyên dương.");
  }
  if (quantity > 99) {
    throw new RangeError("Số lượng tối đa cho mỗi sản phẩm là 99.");
  }
  return quantity;
}

async function resolveVariant(
  repository: CatalogRepository,
  slug: string,
  sku: string,
): Promise<{ product: CatalogProductDetail; variant: CatalogVariant } | null> {
  const product = await repository.getProductBySlug(slug);
  if (!product) return null;

  const variant = product.variants.find((v) => v.sku === sku);
  if (!variant) return null;

  return { product, variant };
}

export async function createCartItem(
  repository: CatalogRepository,
  slug: string,
  sku: string,
  quantity: number,
): Promise<CartItem> {
  const resolved = await resolveVariant(repository, slug, sku);
  if (!resolved) {
    throw new Error("Không tìm thấy sản phẩm hoặc phiên bản.");
  }

  const { product, variant } = resolved;
  if (product.priceStatus === "CONTACT") {
    throw new Error("Sản phẩm này cần liên hệ để nhận báo giá.");
  }
  const validQty = validateQuantity(quantity);

  if (variant.stock < validQty) {
    throw new Error(`Sản phẩm chỉ còn ${variant.stock} trong kho.`);
  }

  const media = product.media[0];
  return Object.freeze({
    variantId: variant.id,
    productId: product.id,
    productName: product.name,
    productSlug: product.slug,
    variantName: variant.name,
    sku: variant.sku,
    quantity: validQty,
    unitPrice: variant.price,
    lineTotal: variant.price * validQty,
    imageUrl: media?.url ?? "",
    imageAlt: media?.alt ?? product.name,
  });
}

export async function hydrateCart(
  repository: CatalogRepository,
  cookieItems: ReadonlyArray<{ slug: string; sku: string; quantity: number }>,
): Promise<Cart> {
  let cart = createEmptyCart();

  for (const entry of cookieItems) {
    try {
      const item = await createCartItem(repository, entry.slug, entry.sku, entry.quantity);
      cart = addItem(cart, item);
    } catch {
      continue;
    }
  }

  return cart;
}
