# CP Hub catalogue and storefront refresh

## Goal

Replace the existing mistaken placeholder product images and old catalogue with a reproducible snapshot of all public CP Hub products, while retaining the NovaTech identity and improving the storefront.

## Data import

- `scripts/sync-cphub-catalog.ts` discovers product URLs from CP Hub's product sitemaps and fetches each public product JSON document with bounded concurrency.
- The generated catalogue contains the product handle, title, available price and compare-at price, image CDN URLs, vendor, product type, variants, source description, product images and update date.
- Product types create the catalogue categories, so new CP Hub product groups appear without hard-coded category lists.
- Unpriced products use a zero value in source data and render as `Liên hệ`; no card will show `0₫`.
- Generated data replaces both existing catalogue data files. The app permits `cdn.hstatic.net` images. CP Hub is the data source only; all branding remains NovaTech.
- The importer is manually run on demand and validates unique handles, valid CDN image URLs and absence of placeholder image hosts before writing files.

## Storefront

- The header and mobile navigation derive their top category links from the generated catalogue instead of a fixed five-category menu.
- The home page shows a NovaTech carousel above its product sections. It has three data-driven slides, automatic advance, direct controls, pause-on-hover/focus, keyboard controls and reduced-motion support.
- The home page uses featured, newest and major-category product rails based on imported data.
- Product cards use a neutral image stage with `object-contain`, clear price/contact states and accessible focus styling. This preserves each source image without accidental cropping.

## Resilience and verification

- A failed request or malformed source entry is reported and does not overwrite the previous generated files.
- Import verification checks that products, categories and detail records align.
- Existing unit tests are updated for generated categories and pricing states. Typecheck, lint, tests and production build are run after the import and UI work.

## Deliberate scope

- The dataset is a local snapshot, not a live CP Hub integration.
- No new UI dependency is required; the carousel uses the existing React and CSS stack.
