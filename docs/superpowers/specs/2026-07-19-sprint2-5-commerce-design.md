# Nexora Commerce Sprints 2–5 Design

## Scope

Four vertical slices delivered incrementally: catalog listing & product detail, cart & checkout, authentication & user account, and payment & promotions. Each slice is independently reviewable and keeps the production build green without a running database.

## Architecture decisions

- **Repository boundary preserved.** Pages and server actions consume typed contracts, never Prisma directly. A `PrismaCatalogRepository` is introduced alongside the existing `InMemoryCatalogRepository`; the app selects the implementation at runtime based on `DATABASE_URL` availability.
- **Server Actions for mutations.** Cart add/update/remove, checkout, login/register, and coupon application use Next.js Server Actions with `useFormState` / `useActionState` for progressive enhancement.
- **Cookie-based sessions.** Guest carts use a signed cookie `nexora_cart` containing a session token. Auth uses JWT in `nexora_session` cookie. No external session store required.
- **No real payment processing.** Sprint 5 implements a mock VNPay-style flow with a redirect-and-callback pattern. The architecture is real; the provider is simulated.
- **All prices are integer VND.** No client-submitted price is trusted. Server actions resolve price and stock from the repository.

## Sprint 2 — Catalog listing & product detail

### Expanded types

```
CatalogProductSummary  — id, slug, name, category, brand, price, compareAtPrice, imageUrl, imageAlt, badge, verdict, specs, featured
CatalogProductDetail   — extends summary + description, shortDescription, highlights[], considerations[], variants[], media[], reviews[]
CatalogVariant         — id, sku, name, attributes, price, compareAtPrice, stock, lowStockAt
CatalogReview          — id, authorName, rating, title, content, verified, createdAt
```

### Repository contract

```
listProducts(filters?): Promise<{ items, total, page, pageSize }>
getProductBySlug(slug): Promise<CatalogProductDetail | null>
listCategories(): Promise<Category[]>
listBrands(): Promise<Brand[]>
```

### Routes

- `/san-pham` — listing page with category/brand filter chips, sort dropdown, server-side pagination via searchParams
- `/san-pham/[slug]` — product detail with gallery, variant selector, specs table, verdict, considerations, reviews, add-to-cart action

### Demo data

Expand `catalog.data.ts` with full detail records (description, highlights, considerations, variants, media, reviews) for all 6 existing products.

### Tests

- Repository: `listProducts` with filters, `getProductBySlug` hit/miss, pagination
- Service: price formatting for variants, review sorting
- Component: product detail renders verdict + considerations, listing renders filter state

## Sprint 3 — Cart & checkout

### Types

```
CartItem — variantId, productId, productName, productSlug, variantName, sku, quantity, unitPrice, lineTotal, imageUrl
Cart     — items, subtotal, itemCount
CheckoutAddress — name, phone, province, district, ward, line1
CheckoutForm    — email, phone, address, note, couponCode?
```

### Repository & service

```
CartService.addItem(cart, variantId, quantity): Cart
CartService.updateItem(cart, variantId, quantity): Cart
CartService.removeItem(cart, variantId): Cart
CartService.computeTotals(cart): { subtotal, itemCount }
```

Cart state is persisted in a signed cookie. Server actions read/write the cookie.

### Routes

- `/gio-hang` — cart page with line items, quantity steppers, remove buttons, subtotal, checkout CTA
- `/thanh-toan` — checkout form (guest or authenticated), address inputs, order summary, coupon input, place-order action

### Order creation

Server action `placeOrder`:
1. Resolve each cart line's price from repository (never trust client)
2. Create order with immutable snapshots (productSnapshot, variantSnapshot, addressSnapshot)
3. Generate order code (`NX-YYYYMMDD-XXXX`) and tracking token
4. Clear cart cookie
5. Redirect to `/don-hang/[code]`

### Tests

- CartService: add/update/remove, quantity validation, total computation
- Server action: rejects empty cart, rejects negative quantity, resolves server-side price
- Component: cart renders line items, checkout renders address fields

## Sprint 4 — Auth & user account

### Approach

JWT-based auth with `bcrypt` for password hashing. No external auth provider.

- `AuthService.register(email, password, name?)` → creates User, returns session token
- `AuthService.login(email, password)` → verifies, returns session token
- `AuthService.verifyToken(token)` → returns userId or null
- JWT secret from `AUTH_SECRET` env var

### Middleware

`src/middleware.ts` protects `/tai-khoan/*` routes. Unauthenticated users redirect to `/dang-nhap?redirect=...`.

### Routes

- `/dang-nhap` — login form
- `/dang-ky` — register form
- `/tai-khoan` — profile overview (name, email, phone)
- `/tai-khoan/dia-chi` — address list + add/edit form
- `/tai-khoan/don-hang` — order history with status badges

### Demo mode

When `DATABASE_URL` is absent, auth uses an in-memory user store seeded with a demo account (`demo@nexora.vn` / `nexora123`). This keeps builds and previews working.

### Tests

- AuthService: register creates user, login rejects wrong password, token verification
- Middleware: protected routes redirect when unauthenticated
- Component: login form renders email/password fields, register form shows validation

## Sprint 5 — Payment & promotions

### Mock payment provider

`PaymentService.createPayment(orderId, amount)` returns a redirect URL to `/api/payment/mock?orderId=...&token=...`. The mock page simulates a provider with success/fail buttons.

`PaymentService.handleCallback(orderId, token, status)`:
- On success: mark Payment PAID, Order CONFIRMED, record transactionId
- On failure: mark Payment FAILED, Order stays PENDING

### Coupon service

```
CouponService.validate(code, subtotal): Promise<{ valid, discountAmount, reason? }>
CouponService.apply(orderId, code): Promise<CouponRedemption>
```

Validation checks: active, date range, minimum subtotal, usage limits, per-user limits.

### Routes

- `/api/payment/mock` — mock provider page (client component with success/fail buttons)
- `/api/payment/callback` — webhook-style endpoint for payment status
- `/don-hang/[code]` — order confirmation with payment status, order items, address, tracking
- `/don-hang` — order lookup by code + phone (guest tracking)

### Demo coupons

Seed 2 demo coupons in `catalog.data.ts`:
- `NEXORA5` — 5% off, min 5M VND
- `FREESHIP` — 50K VND off shipping, min 2M VND

### Tests

- PaymentService: createPayment generates token, handleCallback updates order on success/failure
- CouponService: validates active/inactive, min subtotal, expired, usage limit
- Component: order confirmation renders payment status, coupon input shows validation error

## CI updates

- Add PostgreSQL service container to `ci.yml`
- Add `AUTH_SECRET` env var
- Run `prisma migrate deploy` before tests (optional — tests use in-memory repos)
- Add `npm run test` with `AUTH_SECRET=test-secret-for-ci` env

## File structure (new)

```
src/
  features/
    catalog/
      catalog.types.ts          (expanded)
      catalog.data.ts           (expanded)
      catalog.repository.ts     (expanded)
      catalog.service.ts        (expanded)
      catalog.test.ts           (expanded)
    cart/
      cart.types.ts
      cart.service.ts
      cart.test.ts
    auth/
      auth.types.ts
      auth.service.ts
      auth.test.ts
    checkout/
      checkout.types.ts
      checkout.service.ts
      checkout.actions.ts
      checkout.test.ts
    payment/
      payment.types.ts
      payment.service.ts
      payment.test.ts
    coupon/
      coupon.types.ts
      coupon.service.ts
      coupon.data.ts
      coupon.test.ts
  app/
    san-pham/
      page.tsx
      [slug]/page.tsx
    gio-hang/page.tsx
    thanh-toan/page.tsx
    dang-nhap/page.tsx
    dang-ky/page.tsx
    tai-khoan/
      page.tsx
      dia-chi/page.tsx
      don-hang/page.tsx
    don-hang/
      page.tsx
      [code]/page.tsx
    api/
      payment/
        mock/route.ts
        callback/route.ts
  components/
    catalog/
      product-list.tsx
      product-detail.tsx
      variant-selector.tsx
      filter-bar.tsx
      review-list.tsx
    cart/
      cart-line.tsx
      cart-summary.tsx
    checkout/
      checkout-form.tsx
      address-form.tsx
      order-summary.tsx
    auth/
      login-form.tsx
      register-form.tsx
    payment/
      payment-status.tsx
      mock-provider.tsx
  lib/
    session.ts
    cookies.ts
  middleware.ts
```

## Delivery

Each sprint is one commit:
1. `feat: catalog listing and product detail pages`
2. `feat: cart and checkout with order creation`
3. `feat: authentication and user account`
4. `feat: mock payment and coupon promotions`

Each commit passes the full quality gate (`npm run verify`) and CI.
