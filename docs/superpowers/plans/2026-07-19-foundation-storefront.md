# Nexora Foundation and Storefront Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-oriented Next.js foundation with a polished Vietnamese homepage, a repository-backed demo catalog, a full Prisma commerce schema, seed data, tests, and CI.

**Architecture:** Next.js App Router renders server components that receive catalog summaries through a repository contract rather than importing Prisma. A typed in-memory repository keeps preview and build independent of PostgreSQL; Prisma 7 defines persistence for later vertical slices. Tailwind CSS 4 theme variables provide the visual system, while a small client-only header component owns mobile navigation state.

**Tech Stack:** Next.js 16.2.9, React 19, TypeScript, Tailwind CSS 4, Lucide React, Prisma 7.6.0, PostgreSQL, Vitest, Testing Library, GitHub Actions.

---

## File map

- `package.json`: scripts and pinned runtime/development dependencies.
- `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`: framework and quality configuration.
- `.env.example`, `.gitignore`: safe local configuration contract.
- `src/app/layout.tsx`: Vietnamese root document, fonts, metadata.
- `src/app/page.tsx`: homepage composition and catalog query.
- `src/app/globals.css`: Tailwind import, design tokens, global accessibility and motion rules.
- `src/features/catalog/catalog.types.ts`: catalog presentation contracts.
- `src/features/catalog/catalog.data.ts`: curated typed demo records.
- `src/features/catalog/catalog.repository.ts`: repository interface and in-memory implementation.
- `src/features/catalog/catalog.service.ts`: homepage catalog query and empty-state behavior.
- `src/features/catalog/catalog.test.ts`: formatting, repository, and service tests.
- `src/components/brand/brand-mark.tsx`: reusable Nexora wordmark.
- `src/components/layout/site-header.tsx`: responsive client navigation.
- `src/components/layout/site-footer.tsx`: footer and policy navigation.
- `src/components/storefront/hero.tsx`: editorial hero.
- `src/components/storefront/product-card.tsx`: accessible product summary.
- `src/components/storefront/home-sections.tsx`: quick finder, setup, picks, guides, and trust compositions.
- `prisma/schema.prisma`: full core commerce schema.
- `prisma.config.ts`: Prisma 7 schema, migration, seed, and datasource configuration.
- `prisma/seed.ts`: idempotent catalog seed.
- `.github/workflows/ci.yml`: pull request and push quality gate.
- `README.md`: local setup, scripts, architecture, and current scope.

### Task 1: Scaffold the verified application foundation

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next-env.d.ts`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `.gitignore`
- Create: `.env.example`

- [ ] **Step 1: Create the package contract**

Create scripts with these behaviors:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "db:generate": "prisma generate",
    "db:validate": "prisma validate",
    "db:seed": "prisma db seed",
    "verify": "npm run db:generate && npm run db:validate && npm run lint && npm run typecheck && npm run test && npm run build"
  }
}
```

Pin Next.js to `16.2.9` and Prisma packages to `7.6.0`; use compatible current React 19, Tailwind 4, ESLint 9, TypeScript 5, Vitest, Testing Library, `tsx`, `dotenv`, and Lucide packages.

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: exit code 0 and a new `package-lock.json`.

- [ ] **Step 3: Add strict framework configuration**

Use `strict: true`, `noEmit: true`, `moduleResolution: "bundler"`, the `@/*` alias, Next.js TypeScript plugin, Tailwind PostCSS plugin, and flat ESLint configuration extending Next core-web-vitals and TypeScript rules.

- [ ] **Step 4: Add safe environment boundaries**

`.env.example` contains only:

```dotenv
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/nexora?schema=public"
```

Ignore `.env*` while explicitly retaining `.env.example`; also ignore `.next`, `node_modules`, coverage, generated Prisma client output, and debug logs.

- [ ] **Step 5: Verify configuration parses**

Run: `npm run typecheck`

Expected: failure only because application source files do not exist yet; no invalid compiler-option errors.

### Task 2: Build catalog contracts with TDD

**Files:**
- Create: `src/features/catalog/catalog.types.ts`
- Create: `src/features/catalog/catalog.data.ts`
- Create: `src/features/catalog/catalog.repository.ts`
- Create: `src/features/catalog/catalog.service.ts`
- Create: `src/features/catalog/catalog.test.ts`
- Create: `vitest.config.ts`

- [ ] **Step 1: Write failing behavior tests**

Test that `formatVnd(28990000)` returns `28.990.000 ₫`, featured products preserve repository order, and an empty repository returns an empty array without throwing.

```ts
import { describe, expect, it } from "vitest";
import { formatVnd, getFeaturedProducts } from "./catalog.service";
import { InMemoryCatalogRepository } from "./catalog.repository";

it("formats integer VND without decimals", () => {
  expect(formatVnd(28_990_000)).toContain("28.990.000");
});

it("returns featured products in curated order", async () => {
  const repository = new InMemoryCatalogRepository([
    { id: "one", slug: "one", name: "One", category: "Laptop", price: 1, imageUrl: "/one.jpg", imageAlt: "One", badge: "Mới", verdict: "One", specs: ["A"], featured: true },
    { id: "two", slug: "two", name: "Two", category: "Phone", price: 2, imageUrl: "/two.jpg", imageAlt: "Two", verdict: "Two", specs: ["B"], featured: true }
  ]);

  expect((await getFeaturedProducts(repository)).map((item) => item.id)).toEqual(["one", "two"]);
});

it("handles an empty catalog", async () => {
  expect(await getFeaturedProducts(new InMemoryCatalogRepository([]))).toEqual([]);
});
```

- [ ] **Step 2: Run tests and confirm red state**

Run: `npm test`

Expected: FAIL because catalog modules do not exist.

- [ ] **Step 3: Implement the minimal catalog boundary**

Define `CatalogProduct` with integer `price`, optional integer `compareAtPrice`, explicit `imageAlt`, `specs`, `verdict`, and `featured`. Define `CatalogRepository.listFeatured(): Promise<readonly CatalogProduct[]>`; implement an immutable in-memory repository; implement `getFeaturedProducts` and `formatVnd` using locale `vi-VN` and currency `VND`.

- [ ] **Step 4: Add curated demo records**

Create six realistic records spanning laptop, smartphone, and accessories. Every record must have meaningful Vietnamese copy, an explicit alt description, two or three decision-oriented specs, and a stable Unsplash image URL.

- [ ] **Step 5: Run tests and confirm green state**

Run: `npm test`

Expected: all catalog tests PASS.

### Task 3: Define and validate the full commerce schema

**Files:**
- Create: `prisma/schema.prisma`
- Create: `prisma.config.ts`
- Create: `prisma/seed.ts`

- [ ] **Step 1: Configure Prisma 7**

Use `prisma.config.ts` with `dotenv/config`, schema path `prisma/schema.prisma`, migrations path `prisma/migrations`, seed command `tsx prisma/seed.ts`, and `env("DATABASE_URL")` as the datasource URL.

- [ ] **Step 2: Define enums and models**

Define explicit enums for user role/status, product/media/content status, cart/order/payment/fulfillment/review/coupon states, discount type, and audit action. Implement all entities approved in the design: `User`, `Address`, `Brand`, `Category`, `Product`, `ProductVariant`, `ProductMedia`, `Cart`, `CartItem`, `Order`, `OrderItem`, `Payment`, `Coupon`, coupon redemption join records, `Review`, `ContentPage`, and `AuditLog`.

Use `Int` for VND money, `Json` for immutable address and variant snapshots, `DateTime @default(now())`, restrictive relations for order history, and cascade only for dependent draft/session data. Add unique constraints for email, slug, SKU, order code, coupon code, and provider transaction identity. Add indexes for product status/category/brand, order date/status/email/phone, variant product, and review product/status.

- [ ] **Step 3: Format and validate the schema**

Run: `npm run db:generate && npm run db:validate`

Expected: both commands exit 0 with a valid PostgreSQL schema.

- [ ] **Step 4: Implement idempotent catalog seed**

Use Prisma upserts keyed by category slug, brand slug, product slug, and variant SKU. Seed at least three categories, four brands, six products, one or more variants per product, and media records. Do not seed users, reviews, orders, or fake social proof.

- [ ] **Step 5: Type-check seed code**

Run: `npm run typecheck`

Expected: schema-generated imports and seed code compile without TypeScript errors once app source exists.

### Task 4: Build the visual system and homepage shell

**Files:**
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/components/brand/brand-mark.tsx`
- Create: `src/components/layout/site-header.tsx`
- Create: `src/components/layout/site-footer.tsx`
- Create: `src/components/storefront/hero.tsx`

- [ ] **Step 1: Define Tailwind 4 design tokens**

Import Tailwind and define theme variables for navy `#0b1220`, teal `#0f766e`, blue `#2563eb`, surface `#f8fafc`, ink `#0f172a`, display/body fonts, container width, radii, and motion easing. Add `:focus-visible`, text selection, smooth rendering, and reduced-motion overrides.

- [ ] **Step 2: Create the Vietnamese root layout**

Set `lang="vi"`; use self-hosted `next/font` output for two compatible Vietnamese Google variable fonts; export metadata title, description, and Open Graph basics; apply the global body colors and fonts.

- [ ] **Step 3: Build the reusable brand and responsive header**

The wordmark combines a geometric mark with “Nexora Tech”. The sticky header includes desktop navigation, search, account, wishlist, cart, and a client-owned mobile menu. Every icon-only control has an accessible label, focus state, and at least a 44-pixel target.

- [ ] **Step 4: Build the editorial hero**

Use one `h1`, one paragraph, primary and secondary links, three concise proof points, and a CSS-composed product scene. Avoid autoplay, canvas, pointer-tracking, and dependencies beyond Lucide.

- [ ] **Step 5: Run static checks**

Run: `npm run lint && npm run typecheck`

Expected: both commands PASS.

### Task 5: Complete the storefront sections

**Files:**
- Create: `src/components/storefront/product-card.tsx`
- Create: `src/components/storefront/home-sections.tsx`
- Create: `src/app/page.tsx`
- Modify: `next.config.ts`

- [ ] **Step 1: Build an accessible product card**

Render optimized product imagery, category, badge when present, name, verdict, specs, formatted price, optional compare-at price, and product link. Hover/focus reveals must not shift layout; image alt text comes from data, never repeats the product name mechanically.

- [ ] **Step 2: Compose all approved homepage modules**

Implement quick-finder links, featured products, Build Your Setup, Nexora Picks, buying guides, trust strip, and footer. Keep section heading hierarchy sequential and provide explicit empty-state copy if the repository returns no featured items.

- [ ] **Step 3: Connect the repository boundary**

In `src/app/page.tsx`, instantiate the demo repository with curated data, call `getFeaturedProducts`, and pass results into section components. Do not import Prisma into the route or UI.

- [ ] **Step 4: Permit only required remote images**

Configure `images.unsplash.com` through `remotePatterns` in `next.config.ts`; do not allow wildcard hosts.

- [ ] **Step 5: Verify the production route**

Run: `npm run lint && npm run typecheck && npm test && npm run build`

Expected: all commands PASS and Next.js emits `/` successfully.

### Task 6: Add CI and project documentation

**Files:**
- Create: `.github/workflows/ci.yml`
- Modify: `README.md`

- [ ] **Step 1: Add a deterministic GitHub Actions quality gate**

Use Ubuntu, Node 22, `npm ci`, a non-secret syntactically valid PostgreSQL `DATABASE_URL` environment value, then run Prisma generate/validate, lint, typecheck, tests, and build. Trigger on pushes to `main` and pull requests.

- [ ] **Step 2: Document local operation**

Document requirements, `npm install`, copying `.env.example`, `npm run dev`, optional PostgreSQL setup, Prisma commands, `npm run verify`, architecture boundaries, and the explicit current-scope limitation that commerce flows are modeled but not implemented.

- [ ] **Step 3: Run the complete local quality gate**

Run: `npm run verify`

Expected: Prisma generate/validate, ESLint, TypeScript, Vitest, and Next.js production build all PASS.

- [ ] **Step 4: Inspect repository changes**

Run: `git status --short && git diff --check`

Expected: only intended source, configuration, lockfile, documentation, workflow, and Prisma files; no secrets, build output, generated client, or whitespace errors.

- [ ] **Step 5: Commit the implementation**

```bash
git add .
git commit -m "feat: build Nexora storefront foundation"
```

- [ ] **Step 6: Push the verified commit**

Run: `git push origin main`

Expected: `main` advances and the GitHub Actions workflow starts for the pushed commit.
