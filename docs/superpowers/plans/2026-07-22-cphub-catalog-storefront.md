# CP Hub Catalogue Storefront Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder catalogue with a repeatable CP Hub snapshot and present it in a NovaTech storefront with truthful price states and a data-driven carousel.

**Architecture:** A bounded importer reads public CP Hub sitemaps and product JSON into a single compact generated catalogue plus small metadata/navigation modules. The repository derives product details from the catalogue, keeps contact-only products out of price operations and carts, and server-rendered pages select carousel and rail content without transferring the full catalogue to client components.

**Tech Stack:** Next.js 16, React 19, TypeScript, Vitest, Tailwind CSS, built-in `fetch`, `tsx`.

## Global Constraints

- Keep NovaTech branding; do not copy CP Hub identity.
- Use only public CP Hub source data and `cdn.hstatic.net` product images.
- Import a curated maximum of 200 newest products so the storefront stays fast for a student project; do not duplicate full product details in a second generated file.
- `CONTACT` products have no numeric price and cannot enter price filters, sort order, or cart flows.
- Use no new runtime dependency.
- Carousel must support controls, keyboard use, pause on hover/focus, and reduced motion.

---

### Task 1: Make catalogue data and price states truthful

**Files:**
- Modify: `src/features/catalog/catalog.types.ts`
- Modify: `src/features/catalog/catalog.repository.ts`
- Modify: `src/features/catalog/catalog.service.ts`
- Modify: `src/features/catalog/catalog.test.ts`

**Interfaces:**
- Produces `PriceStatus = "AVAILABLE" | "CONTACT"`.
- Produces `CatalogProduct.price: number | null`, `priceStatus`, `sourceUrl`, `sourceUpdatedAt`, `media`, and `variants`.
- Produces `formatPrice(product: Pick<CatalogProduct, "price" | "priceStatus">): string`.

- [ ] **Step 1: Write failing catalogue tests**

```ts
it("keeps contact products out of price sorting and returns contact copy", async () => {
  const repository = new InMemoryCatalogRepository([
    availableProduct({ slug: "priced", price: 2_000_000 }),
    contactProduct({ slug: "contact" }),
  ]);

  expect(formatPrice(contactProduct({ slug: "contact" }))).toBe("Liên hệ");
  expect((await repository.listProducts({ sort: "price-asc" })).items.map((p) => p.slug)).toEqual(["priced", "contact"]);
});
```

- [ ] **Step 2: Run the focused test and confirm it fails**

Run: `npx vitest run src/features/catalog/catalog.test.ts`

Expected: FAIL because `priceStatus` and `formatPrice` do not exist.

- [ ] **Step 3: Implement nullable price handling and derived details**

```ts
export type PriceStatus = "AVAILABLE" | "CONTACT";

export type CatalogProduct = Readonly<{
  // existing identity fields
  price: number | null;
  priceStatus: PriceStatus;
  sourceUrl: string;
  sourceUpdatedAt: string;
  media: readonly CatalogMedia[];
  variants: readonly CatalogVariant[];
}>;

export function formatPrice(product: Pick<CatalogProduct, "price" | "priceStatus">): string {
  return product.priceStatus === "CONTACT" || product.price == null ? "Liên hệ" : formatVnd(product.price);
}
```

Sort available products by numeric price and append `CONTACT` products in their existing editorial order. Build `CatalogProductDetail` from the matched product record, with an empty review list, rather than importing duplicated detail records.

- [ ] **Step 4: Run catalogue tests**

Run: `npx vitest run src/features/catalog/catalog.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/features/catalog/catalog.types.ts src/features/catalog/catalog.repository.ts src/features/catalog/catalog.service.ts src/features/catalog/catalog.test.ts
git commit -m "feat: model catalogue contact pricing"
```

### Task 2: Create an atomic CP Hub importer and compact generated metadata

**Files:**
- Create: `scripts/sync-cphub-catalog.ts`
- Create: `scripts/sync-cphub-catalog.test.ts`
- Create: `src/features/catalog/catalog-meta.data.ts`
- Modify: `src/features/catalog/catalog.data.ts`
- Modify: `package.json`
- Modify: `next.config.ts`

**Interfaces:**
- Produces `syncCatalog(): Promise<{ productCount: number; unavailableCount: number }>`.
- Produces `normalizeProduct(source: CphubProduct): CatalogProduct | null`.
- Produces `catalogCategories`, `catalogBrands`, and `catalogNavigation` in the small metadata module.
- Adds `npm run catalog:sync`.

- [ ] **Step 1: Write importer tests with inline source fixtures**

```ts
it("normalizes a priced source product without copying full HTML", () => {
  const product = normalizeProduct(sourceProduct({ price: "799000", body_html: "<p>".repeat(1_000) }));
  expect(product?.priceStatus).toBe("AVAILABLE");
  expect(product?.price).toBe(799000);
  expect(product?.description.length).toBeLessThanOrEqual(500);
  expect(product?.media).toHaveLength(3);
});

it("marks missing prices as contact-only and rejects non-Hstatic images", () => {
  expect(normalizeProduct(sourceProduct({ price: "", image: "https://example.com/x.jpg" }))).toBeNull();
});
```

- [ ] **Step 2: Run importer tests and confirm they fail**

Run: `npx vitest run scripts/sync-cphub-catalog.test.ts`

Expected: FAIL because the importer module does not exist.

- [ ] **Step 3: Implement importer with staged output**

```ts
const SITEMAP_URL = "https://cphub.vn/sitemap.xml";
const CONCURRENCY = 4;

export async function syncCatalog() {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "novatech-catalog-"));
  try {
    const sourceProducts = await fetchAllProducts(SITEMAP_URL, CONCURRENCY);
    const products = sourceProducts.map(normalizeProduct).filter(isCatalogProduct);
    validateCatalog(products);
    await writeGeneratedFiles(tempDir, products);
    await replaceGeneratedFilesAtomically(tempDir);
    return { productCount: products.length, unavailableCount: sourceProducts.length - products.length };
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}
```

Parse only product URLs from the product sitemaps, fetch `<product-url>.json`, use at most three `cdn.hstatic.net` images, strip and truncate HTML to 500 characters, extract the first eight list items as specifications, and map source types to the stable top-level taxonomy. Fail before replacement for duplicate handles, invalid image hosts, zero generated products, or any fetch failure. Emit source URL and update date on every product. Generate only compact metadata/navigation alongside the single product dataset. Add `cdn.hstatic.net` to Next image remote patterns and add `"catalog:sync": "tsx scripts/sync-cphub-catalog.ts"`.

- [ ] **Step 4: Run importer tests**

Run: `npx vitest run scripts/sync-cphub-catalog.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add scripts/sync-cphub-catalog.ts scripts/sync-cphub-catalog.test.ts src/features/catalog/catalog.data.ts src/features/catalog/catalog-meta.data.ts package.json next.config.ts
git commit -m "feat: add atomic CP Hub catalogue sync"
```

### Task 3: Replace hard-coded navigation and catalogue presentation

**Files:**
- Modify: `src/components/layout/site-header.tsx`
- Modify: `src/components/storefront/product-card.tsx`
- Modify: `src/components/catalog/product-detail.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/san-pham/page.tsx`
- Modify: `src/components/storefront/storefront.test.tsx`

**Interfaces:**
- Consumes `catalogNavigation` from `catalog-meta.data.ts`.
- Consumes `formatPrice` and `CatalogProduct.priceStatus`.
- Produces no client import of `catalogProducts`.

- [ ] **Step 1: Write failing UI tests**

```tsx
it("renders a contact product without a numeric price or instalment claim", () => {
  const markup = renderToStaticMarkup(<WishlistProvider><ProductCard product={contactProduct()} /></WishlistProvider>);
  expect(markup).toContain("Liên hệ");
  expect(markup).not.toContain("Trả góp 0%");
});
```

- [ ] **Step 2: Run storefront tests and confirm they fail**

Run: `npx vitest run src/components/storefront/storefront.test.tsx`

Expected: FAIL because cards always render a numeric price and instalment copy.

- [ ] **Step 3: Implement the minimal UI changes**

```tsx
{product.priceStatus === "CONTACT" ? (
  <p className="text-lg font-bold text-electric">Liên hệ</p>
) : (
  <p className="text-lg font-bold text-midnight">{formatPrice(product)}</p>
)}
```

Replace the static mega-menu with `catalogNavigation`, retaining only the first eight top-level groups. Remove `best-selling` from filter choices and use `newest` for source update order. In product detail, replace Add to cart with a contact call-to-action for `CONTACT` records. Keep the header's client bundle limited to the metadata module.

- [ ] **Step 4: Run storefront and catalogue tests**

Run: `npx vitest run src/components/storefront/storefront.test.tsx src/features/catalog/catalog.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/site-header.tsx src/components/storefront/product-card.tsx src/components/catalog/product-detail.tsx src/app/page.tsx src/app/san-pham/page.tsx src/components/storefront/storefront.test.tsx
git commit -m "feat: render catalogue-driven storefront navigation"
```

### Task 4: Add an accessible NovaTech product carousel

**Files:**
- Create: `src/components/storefront/promo-carousel.tsx`
- Create: `src/components/storefront/promo-carousel.test.tsx`
- Modify: `src/components/storefront/hero.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Produces `PromoCarousel({ slides }: { slides: readonly PromoSlide[] })`.
- `PromoSlide` is `{ id: string; title: string; description: string; href: string; imageUrl: string; imageAlt: string }`.

- [ ] **Step 1: Write failing carousel tests**

```tsx
it("renders labelled controls and respects supplied product image alt text", () => {
  const markup = renderToStaticMarkup(<PromoCarousel slides={[slide("one"), slide("two"), slide("three")]} />);
  expect(markup).toContain('aria-label="Banner 1"');
  expect(markup).toContain('alt="Ảnh sản phẩm One"');
});
```

- [ ] **Step 2: Run the carousel test and confirm it fails**

Run: `npx vitest run src/components/storefront/promo-carousel.test.tsx`

Expected: FAIL because `PromoCarousel` does not exist.

- [ ] **Step 3: Implement the carousel without a dependency**

```tsx
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const timer = paused || reduceMotion ? undefined : window.setInterval(next, 6000);
return () => timer && window.clearInterval(timer);
```

Use three server-selected slides: the first available product from three distinct top-level groups. Provide previous/next buttons, labelled dot buttons, `onMouseEnter`, `onFocusCapture`, `onMouseLeave`, `onBlurCapture` pause behavior, and a static first slide when reduced motion is requested. Replace the fixed Unsplash hero image with this component while retaining NovaTech copy.

- [ ] **Step 4: Run carousel and storefront tests**

Run: `npx vitest run src/components/storefront/promo-carousel.test.tsx src/components/storefront/storefront.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/storefront/promo-carousel.tsx src/components/storefront/promo-carousel.test.tsx src/components/storefront/hero.tsx src/app/page.tsx
git commit -m "feat: add accessible storefront promotions"
```

### Task 5: Generate the real catalogue and verify the app

**Files:**
- Modify: generated `src/features/catalog/catalog.data.ts`
- Modify: generated `src/features/catalog/catalog-meta.data.ts`
- Modify: `README.md`

- [ ] **Step 1: Run importer against the public source**

Run: `npm run catalog:sync`

Expected: reports a positive product count and leaves no `picsum.photos` URL in generated catalogue files.

- [ ] **Step 2: Run generated-data smoke checks**

Run: `npx tsx -e "import { catalogProducts } from './src/features/catalog/catalog.data.ts'; if (!catalogProducts.length || catalogProducts.some(p => p.imageUrl.includes('picsum.photos'))) process.exit(1); console.log(catalogProducts.length)"`

Expected: a positive count and exit code 0.

- [ ] **Step 3: Document refresh and source provenance**

Add the `npm run catalog:sync` command, snapshot behavior, CP Hub source URL, and image-CDN caveat to `README.md`.

- [ ] **Step 4: Run full verification**

Run: `npm run lint && npm run typecheck && npm run test && npm run build`

Expected: all commands exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/features/catalog/catalog.data.ts src/features/catalog/catalog-meta.data.ts README.md
git commit -m "feat: sync CP Hub catalogue snapshot"
```
