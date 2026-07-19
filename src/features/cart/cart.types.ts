export type CartItem = Readonly<{
  variantId: string;
  productId: string;
  productName: string;
  productSlug: string;
  variantName: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  imageUrl: string;
  imageAlt: string;
}>;

export type Cart = Readonly<{
  items: readonly CartItem[];
  subtotal: number;
  itemCount: number;
}>;

export type CheckoutAddress = Readonly<{
  name: string;
  phone: string;
  province: string;
  district: string;
  ward: string;
  line1: string;
}>;

export type CheckoutFormState = Readonly<{
  email: string;
  phone: string;
  address: CheckoutAddress;
  note?: string;
  couponCode?: string;
}>;

export type OrderResult = Readonly<{
  code: string;
  trackingToken: string;
  grandTotal: number;
}>;

export type CartCookieData = Readonly<{
  items: ReadonlyArray<{
    slug: string;
    sku: string;
    quantity: number;
  }>;
}>;
