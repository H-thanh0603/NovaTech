# Nexora Tech Foundation and Storefront Design

## Scope

This slice delivers the Sprint 1 foundation for Nexora Tech: a production-oriented Next.js application, a responsive Vietnamese homepage, a complete core commerce data schema, catalog seed data, and continuous integration. It does not claim that authentication, cart, checkout, payment, or administration flows are operational.

## Goals

- Establish a modular monolith that can grow by commerce domain.
- Deliver a polished, mobile-first homepage aligned with the product blueprint.
- Define the complete core commerce model before feature implementation.
- Keep displayed catalog data behind a repository boundary.
- Make linting, type checking, tests, Prisma validation, and production builds repeatable locally and in CI.

## Non-goals

- Operational authentication or authorization.
- Persistent cart and checkout flows.
- Payment, email, object storage, or analytics integrations.
- Product administration screens.
- Deployment or production database provisioning.

## Architecture

The application uses Next.js App Router, TypeScript in strict mode, Tailwind CSS, and Lucide icons. Route entry points and layouts remain in `src/app`. Shared visual primitives and page compositions live in `src/components`. Catalog models, repository contracts, demo data, and query services live in `src/features/catalog`. Cross-cutting utilities live in `src/lib`.

React components do not import Prisma directly. The homepage consumes catalog information through a repository contract. The first slice provides a typed demo repository so builds and previews do not require a database. Prisma provides the persistent implementation boundary for later slices, without coupling the page to database availability.

## Data model

PostgreSQL and Prisma define the complete core commerce model from the blueprint:

- Identity: User and Address.
- Catalog: Brand, Category, Product, ProductVariant, and ProductMedia.
- Cart: Cart and CartItem.
- Orders: Order and OrderItem with immutable product, variant, price, and address snapshots.
- Payments and promotions: Payment and Coupon, including coupon redemption relationships.
- Trust and content: Review and ContentPage.
- Operations: AuditLog.

Money is stored as integer Vietnamese đồng. Public identifiers such as product slugs, SKUs, order codes, coupon codes, and provider transaction IDs are unique. Statuses use explicit enums. Important query paths have indexes. Commerce records use restrictive deletion rules where history must remain intact. Timestamps are stored in UTC and formatted for Vietnamese users at presentation boundaries.

The seed is idempotent and populates curated brands, categories, products, variants, and media. Secrets are never committed; `.env.example` documents required configuration.

## Storefront experience

The visual system uses midnight navy, electric blue, teal accents, neutral light surfaces, restrained borders, and generous spacing. Typography supports Vietnamese and combines an expressive display face with a highly legible body face.

The homepage contains:

1. A concise announcement bar.
2. A sticky header with brand, navigation, search, account, wishlist, and cart affordances.
3. An editorial hero with one primary message and no more than two calls to action.
4. Quick-finder chips for common Vietnamese shopping intents.
5. A featured-product area with informative product cards.
6. A Build Your Setup editorial module.
7. Curated Nexora Picks with explicit reasons for selection.
8. Buying-guide cards.
9. Trust and policy signals.
10. A complete footer.

Interactions include a usable mobile menu, visible focus states, product-card details, and restrained motion. Motion respects `prefers-reduced-motion`. The page has semantic heading order, descriptive image alternatives, keyboard access, and touch targets near or above 44 pixels. It does not use autoplay carousels, fake urgency, fake inventory, or fake reviews.

## Data and error flow

The homepage requests typed catalog summaries from a service backed by a repository. Empty catalog results render an intentional empty state rather than failing the route. Invalid seed input fails with a descriptive error. Database-dependent commands fail clearly when `DATABASE_URL` is absent, while linting, tests, and the production build remain available through the demo repository.

No client-submitted price is trusted. Later cart and checkout slices will resolve price and stock through server-side services against persistent variants.

## Verification

The quality gate consists of:

- ESLint.
- TypeScript checking.
- Unit tests for catalog presentation and core domain helpers.
- Prisma format and schema validation.
- A production Next.js build.
- Manual responsive checks at mobile and desktop widths.
- Manual keyboard, focus, semantic heading, alternative text, and reduced-motion checks.

GitHub Actions runs dependency installation, Prisma generation and validation, linting, type checking, tests, and the production build for pushes and pull requests.

## Delivery

The work is delivered in two reviewable commits:

1. The approved design specification.
2. The application foundation, homepage, full commerce schema, seed data, tests, and CI.

The implementation commit is pushed only after its local quality gate passes. The next vertical slice can then implement catalog listing and product detail pages against the repository boundary.
