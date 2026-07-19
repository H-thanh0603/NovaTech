# Nexora Tech

Nền tảng thương mại điện tử sản phẩm công nghệ tuyển chọn, tập trung vào nội dung tư vấn rõ ràng và trải nghiệm mua sắm đáng tin cậy.

## Phạm vi hiện tại

Các sprint đã triển khai:

- **Sprint 1 — Foundation:** Homepage responsive, catalog demo, Prisma schema, seed, CI.
- **Sprint 2 — Catalog listing & product detail:** `/san-pham` với filter/sort/pagination, `/san-pham/[slug]` với gallery, variant selector, reviews.
- **Sprint 3 — Cart & checkout:** `/gio-hang` với quantity steppers, `/thanh-toan` với address form, coupon input, server-side price resolution.
- **Sprint 4 — Auth & user account:** `/dang-nhap`, `/dang-ky`, `/tai-khoan` với profile, address book, order history. JWT session cookie, middleware bảo vệ routes.
- **Sprint 5 — Payment & promotions:** Mock VNPay-style payment flow, coupon validation, `/don-hang` tracking by code + phone, `/don-hang/[code]` confirmation với items và address detail.

Các luồng đăng nhập, giỏ hàng, checkout, thanh toán đã **được triển khai** ở mức demo (in-memory repository). Admin screens, deployment, email, analytics và real payment **chưa triển khai**.

## Yêu cầu

- Node.js 22 trở lên.
- npm 10 trở lên.
- PostgreSQL khi chạy migration hoặc seed.

## Chạy local

```bash
npm install
copy .env.example .env
npm run dev
```

Mở `http://localhost:3000`.

Homepage dùng repository demo nên có thể chạy và build khi chưa có PostgreSQL. Các lệnh Prisma cần `DATABASE_URL` hợp lệ.

## Database

Tạo database PostgreSQL, cập nhật `DATABASE_URL` trong `.env`, sau đó chạy:

```bash
npm run db:generate
npx prisma migrate dev --name init
npm run db:seed
```

Không commit `.env` hoặc thông tin xác thực thật.

## Quality gate

```bash
npm run verify
```

Lệnh này lần lượt chạy Prisma generate/validate, ESLint, TypeScript, Vitest và production build.

Các lệnh riêng:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Kiến trúc

- `src/app`: route, layout và global styles (16 routes).
- `src/components`: brand, layout, storefront, catalog, cart, checkout, auth, payment compositions.
- `src/features/catalog`: contract, demo data, repository (InMemory + Prisma) và service catalog.
- `src/features/cart`: cart types, service, cookie persistence.
- `src/features/checkout`: checkout service, server actions, types.
- `src/features/auth`: JWT auth service, actions, edge compat, middleware.
- `src/features/payment`: payment service, coupon service, types.
- `src/features/coupon`: coupon types, service, data (re-export từ payment).
- `src/lib`: cookie utilities, session utilities.
- `prisma`: full commerce schema và seed.
- `docs/superpowers`: design spec và implementation plan đã duyệt.

React components không truy cập Prisma trực tiếp. Storefront đọc dữ liệu qua `CatalogRepository`. App tự chọn `InMemoryCatalogRepository` khi không có `DATABASE_URL`, hoặc `PrismaCatalogRepository` khi có.

## Tài liệu sản phẩm

Blueprint tiếng Việt nằm trong `De_xuat_du_an_web_ban_san_pham_cong_nghe.md`. Thiết kế foundation đã duyệt nằm trong `docs/superpowers/specs/2026-07-19-foundation-storefront-design.md`.