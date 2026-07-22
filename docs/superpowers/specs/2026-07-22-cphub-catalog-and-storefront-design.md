# CP Hub catalogue and storefront refresh

## Goal

Replace the existing mistaken placeholder product images and old catalogue with a reproducible snapshot of all public CP Hub products, while retaining the NovaTech identity and improving the storefront.

## Data import

- `scripts/sync-cphub-catalog.ts` discovers product URLs from CP Hub's product sitemaps and fetches each public product JSON document with bounded concurrency. It is designed for up to 10,000 products.
- The generated catalogue has one compact product record per handle: title, price state, primary image, up to three gallery images, vendor, product type, short description, up to eight extracted specifications, variants, source URL and source update date. Full HTML descriptions are not copied, and detail records are derived from this single dataset instead of duplicating the catalogue in a second file.
- A stable NovaTech taxonomy maps source product types into the CP Hub-inspired top-level groups (server and components, computers, peripherals, gaming, VR and streaming, office, networking, utilities, and software). Product type remains a secondary filter; unmatched types go to `Khác` and are reported by the importer.
- `priceStatus` is `AVAILABLE` or `CONTACT`. Only `AVAILABLE` products have a numeric price, may appear in price filters or sort order, and may be added to the cart. `CONTACT` products render `Liên hệ` and link to the contact action.
- Generated data replaces the existing catalogue data files. The app permits `cdn.hstatic.net` images. CP Hub is the data source only; all branding remains NovaTech.
- The importer downloads and validates data in a temporary directory. It replaces generated files only after every sitemap is read, every product is either valid or explicitly reported as unavailable, handles are unique, CDN image URLs are valid, and no placeholder image hosts remain. Any failure leaves the previous generated dataset untouched.

## Storefront

- The importer generates a small navigation dataset containing the top category groups and product counts. The header and mobile navigation receive this dataset; they never load the full catalogue in the browser.
- The home page shows a NovaTech carousel above its product sections. It has three data-driven slides, automatic advance, direct controls, pause-on-hover/focus, keyboard controls and reduced-motion support.
- The home page uses editorially selected featured products, products most recently updated by the source, and major-category product rails. It does not claim or sort by `Bán chạy` because the source provides no sales count.
- Product cards use a neutral image stage with `object-contain`, clear price/contact states and accessible focus styling. This preserves each source image without accidental cropping.

## Resilience and verification

- A failed request or malformed source entry is reported and does not overwrite the previous generated files.
- Import verification checks that products, categories and detail records align.
- Existing unit tests are updated for generated categories and pricing states. Typecheck, lint, tests and production build are run after the import and UI work.

## Deliberate scope

- The dataset is a local snapshot, not a live CP Hub integration.
- No new UI dependency is required; the carousel uses the existing React and CSS stack.
