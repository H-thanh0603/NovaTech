export type CatalogProduct = Readonly<{
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  verdict: string;
  specs: readonly string[];
  featured: boolean;
}>;
