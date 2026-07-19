import type { CatalogProduct } from "./catalog.types";

export interface CatalogRepository {
  listFeatured(): Promise<readonly CatalogProduct[]>;
}

function freezeProduct(product: CatalogProduct): CatalogProduct {
  return Object.freeze({
    ...product,
    specs: Object.freeze([...product.specs]),
  });
}

export class InMemoryCatalogRepository implements CatalogRepository {
  private readonly products: readonly CatalogProduct[];

  constructor(products: readonly CatalogProduct[]) {
    this.products = Object.freeze(products.map(freezeProduct));
  }

  async listFeatured(): Promise<readonly CatalogProduct[]> {
    return Object.freeze(this.products.filter((product) => product.featured));
  }
}
