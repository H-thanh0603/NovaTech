# Nexora Tech

Nền tảng thương mại điện tử sản phẩm công nghệ tuyển chọn, tập trung vào nội dung tư vấn rõ ràng và trải nghiệm mua sắm đáng tin cậy.

## Phạm vi hiện tại

Sprint foundation hiện có:

- Homepage responsive bằng Next.js App Router và Tailwind CSS 4.
- Catalog demo có type và repository boundary độc lập với UI.
- Prisma schema cho identity, catalog, cart, order, payment, coupon, review, content và audit log.
- Seed catalog idempotent cho PostgreSQL.
- Unit/component tests và GitHub Actions CI.

Schema commerce đã được định nghĩa nhưng các luồng đăng nhập, giỏ hàng, checkout, thanh toán và admin **chưa được triển khai**.

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

- `src/app`: route, layout và global styles.
- `src/components`: brand, layout và storefront compositions.
- `src/features/catalog`: contract, demo data, repository và service catalog.
- `prisma`: full commerce schema và seed.
- `docs/superpowers`: design spec và implementation plan đã duyệt.

React components không truy cập Prisma trực tiếp. Storefront đọc dữ liệu qua `CatalogRepository`, giúp thay demo repository bằng PostgreSQL trong vertical slice tiếp theo mà không đổi UI.

## Tài liệu sản phẩm

Blueprint tiếng Việt nằm trong `De_xuat_du_an_web_ban_san_pham_cong_nghe.md`. Thiết kế foundation đã duyệt nằm trong `docs/superpowers/specs/2026-07-19-foundation-storefront-design.md`.