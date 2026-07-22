# NovaTech Upgrade Plan — Học hỏi từ CellphoneS.com.vn

> **Mục tiêu**: Nâng cấp NovaTech từ demo storefront thành ecommerce production-ready, học hỏi các điểm mạnh từ CellphoneS.com.vn nhưng giữ nguyên bản sắc Nexora (tuyển chọn có lý do, giải thích rõ ràng).

---

## Phân tích CellphoneS.com.vn — Điểm đáng học

### 1. Navigation & Information Architecture
- **Mega menu theo danh mục** (Điện thoại, Tablet, Laptop, Âm thanh, Đồng hồ, Camera, Gia dụng, Phụ kiện, PC, Tivi, Điện máy)
- **Sub-menu theo thương hiệu** trong từng danh mục (Apple, Samsung, Xiaomi, OPPO...)
- **Quick links** ở top bar: Cửa hàng gần bạn, Tra cứu đơn hàng, Hotline 1800 2097
- **Banner khuyến mãi** luân phiên ở header

### 2. Trang chủ (Homepage)
- **Hero carousel** nhiều banner quảng cáo (Deal sốc, Ưu đãi giáo dục, Thu cũ đổi mới, Khách hàng doanh nghiệp)
- **Section sản phẩm theo danh mục** — mỗi section có grid sản phẩm + filter theo thương hiệu
- **Giá giảm rõ ràng**: giá gốc gạch ngang, giá hiện tại, % giảm
- **Label "Trả góp 0%"** trên mỗi product card
- **Section "Hàng cũ"** — sản phẩm refurbished có giá tốt
- **Newsletter signup** với voucher 10% cho khách mới

### 3. Trang danh sách sản phẩm (PLP)
- **Filter sidebar**: theo thương hiệu, mức giá, tính năng
- **Sort**: giá tăng/giảm, mới nhất, bán chạy
- **Product card**: ảnh, tên, giá gốc + giá giảm, % giảm, label trả góp, badge "Hàng cũ"
- **Pagination** hoặc infinite scroll
- **SEO content** ở cuối trang (bài viết hướng dẫn chọn mua)

### 4. Trang chi tiết sản phẩm (PDP)
- **Gallery ảnh** đa góc nhìn + video
- **Thông số kỹ thuật** chi tiết (bảng spec đầy đủ)
- **Variant selector**: màu sắc, dung lượng — mỗi variant có giá riêng
- **So sánh sản phẩm** với phiên bản khác
- **Đặc điểm nổi bật** + bài viết review chi tiết
- **FAQ** về sản phẩm
- **Sản phẩm liên quan** / phụ kiện đi kèm
- **Đánh giá & review** từ người dùng
- **Thông tin bảo hành**, chính sách đổi trả
- **CTA**: Thêm vào giỏ + Mua trả góp + Thu cũ đổi mới

### 5. Checkout & Payment
- **Trả góp 0%** — tính toán kỳ hạn, số tiền trả trước
- **Thu cũ đổi mới** — định giá thiết bị cũ
- **Multiple payment methods**: thẻ tín dụng, QR code, MoMo, ZaloPay, VNPay, COD
- **Store pickup** — chọn cửa hàng gần nhất
- **Guest checkout** + đăng ký/đăng nhập nhanh

### 6. Tài khoản người dùng
- **Smember** — hệ thống tích điểm, hạng thành viên
- **Lịch sử đơn hàng** chi tiết với tracking
- **Sổ địa chỉ** lưu nhiều địa chỉ
- **Tra cứu bảo hành**
- **Ưu đãi riêng** theo hạng thành viên

### 7. Footer & Trust Signals
- **Chính sách** đầy đủ: giao hàng, đổi trả, bảo hành, trả góp
- **Tổng đài hỗ trợ** miễn phí
- **Newsletter** đăng ký nhận tin
- **Social links**
- **Phương thức thanh toán** được hiển thị

---

## Trạng thái NovaTech hiện tại

### Đã có
- Next.js 16 App Router + TypeScript strict + Tailwind CSS
- Catalog: 6 sản phẩm demo, filter theo category/brand, sort, pagination
- Product detail: variants, media, specs, reviews, highlights/considerations
- Cart: cookie-based, add/update/remove
- Checkout: form validation, coupon, order creation, mock payment
- Auth: register/login, session cookie, protected routes
- Order: in-memory store, tracking by code+token/phone
- Prisma schema đầy đủ (User, Product, Order, Payment, Coupon, Review, Address...)
- CI workflow (lint, typecheck, test, build)

### Đang thiếu (so với CellphoneS)
- Navigation quá đơn giản (5 link tĩnh, không có mega menu)
- Không có search functionality
- Homepage chỉ có 1 hero tĩnh + 3 section tĩnh
- Không có carousel/banner khuyến mãi
- Product card thiếu: giá gốc gạch ngang, % giảm, label trả góp
- Không có filter theo giá, tính năng trên PLP
- PDP thiếu: gallery tương tác, so sánh sản phẩm, FAQ, sản phẩm liên quan
- Không có trả góp 0%, thu cũ đổi mới
- Checkout thiếu: chọn phương thức thanh toán, store pickup
- Tài khoản thiếu: sổ địa chỉ CRUD, bảo hành, tích điểm
- Footer thiếu: chính sách chi tiết, hotline, newsletter
- Không có trang khuyến mãi/deal riêng
- Không có trang tin công nghệ/blog
- Không có admin panel
- Dữ liệu demo quá ít (6 sản phẩm vs hàng ngàn)
- Không có SEO content trên PLP
- Không có real-time stock indicator
- Không có wishlist
- Không có "sản phẩm đã xem gần đây"

---

## Plan Nâng Cấp — 6 Sprint

### Sprint 1: Foundation Upgrade — Navigation, Search & Homepage
**Thời gian dự kiến: 3-5 ngày**

#### 1.1 Mega Menu Navigation
- **File**: `src/components/layout/site-header.tsx`
- Thay navigation 5 link tĩnh bằng mega menu theo danh mục
- Mỗi danh mục có sub-menu: danh sách thương hiệu + link "Xem tất cả"
- Thêm top bar: hotline, tra cứu đơn hàng, link "Cửa hàng"
- Mobile: hamburger menu với accordion theo danh mục
- **Data**: đọc từ `catalogCategories` + `catalogBrands` hiện có

#### 1.2 Search Functionality
- **Files mới**:
  - `src/components/layout/search-bar.tsx` — search overlay với autocomplete
  - `src/features/search/search.service.ts` — search logic (simple text match trên in-memory data)
  - `src/app/api/search/route.ts` — search API endpoint
- Search theo tên sản phẩm, thương hiệu, danh mục
- Hiển thị kết quả real-time khi gõ (debounce 300ms)
- Quick links: sản phẩm nổi bật, danh mục phổ biến khi chưa gõ

#### 1.3 Homepage Upgrade
- **File**: `src/components/storefront/hero.tsx` + `home-sections.tsx`
- Hero carousel: 3-4 banner luân phiên (auto-play + dots indicator)
- Section sản phẩm theo danh mục: "Điện thoại hot", "Laptop đáng mua", "Phụ kiện chọn nhiều"
- Mỗi section: grid 5-6 sản phẩm + nút "Xem tất cả"
- Banner khuyến mãi giữa các section
- Section "Deal sốc" — sản phẩm giảm giá nhiều nhất
- Newsletter signup section (giả lập, lưu email vào in-memory)
- Thêm "Sản phẩm đã xem gần đây" (lưu trong cookie/localStorage)

#### 1.4 Product Card Upgrade
- **File**: `src/components/storefront/product-card.tsx`
- Hiển thị: giá gốc gạch ngang, giá hiện tại, % giảm (badge đỏ)
- Label "Trả góp 0%" dưới giá
- Badge: "Hàng mới", "Deal sốc", "Best seller" (dựa trên field `badge` đã có)
- Hover: hiển thị nút "Thêm vào giỏ" nhanh
- Quick view: modal xem nhanh sản phẩm

---

### Sprint 2: Product Listing Page (PLP) Enhancement
**Thời gian dự kiến: 2-3 ngày**

#### 2.1 Advanced Filter System
- **File**: `src/components/catalog/filter-bar.tsx` + `src/app/san-pham/page.tsx`
- Filter sidebar (desktop) / drawer (mobile):
  - Theo thương hiệu (checkbox list)
  - Theo mức giá (slider hoặc range buttons: <5tr, 5-10tr, 10-20tr, >20tr)
  - Theo tính năng (tags: 5G, AI, Gaming, Pin trâu, Camera đẹp)
  - Theo đánh giá (4+ sao, 3+ sao)
- URL params sync (shareable filter URLs)
- Active filter chips hiển thị + nút "Xóa tất cả"
- Result count hiển thị ("Hiển thị 12/48 sản phẩm")

#### 2.2 Sort & View Options
- Sort dropdown: Nổi bật, Giá thấp → cao, Giá cao → thấp, Tên A-Z, Mới nhất, Bán chạy
- View toggle: grid 3 cột / grid 4 cột / list view
- Pagination cải tiến: số trang + prev/next + jump to page

#### 2.3 SEO Content Block
- **File mới**: `src/components/catalog/seo-content.tsx`
- Bài viết hướng dẫn chọn mua ở cuối PLP
- Content theo từng danh mục (laptop, điện thoại, phụ kiện...)
- FAQ section
- Internal links đến bài viết chi tiết (sprint 5)

#### 2.4 Mở rộng dữ liệu demo
- **File**: `src/features/catalog/catalog.data.ts` + `catalog-detail.data.ts`
- Tăng từ 6 → 30+ sản phẩm
- Thêm danh mục: Điện thoại, Tablet, Đồng hồ, Âm thanh, Camera
- Thêm thương hiệu: Apple, Samsung, Xiaomi, OPPO, ASUS, Lenovo, MSI
- Mỗi sản phẩm có 3-5 variants (màu/dung lượng)
- Thêm field mới: `tags: string[]`, `soldCount: number`, `releaseDate: string`

---

### Sprint 3: Product Detail Page (PDP) Overhaul
**Thời gian dự kiến: 3-4 ngày**

#### 3.1 Interactive Gallery
- **File mới**: `src/components/catalog/product-gallery.tsx`
- Main image + thumbnail strip (click to switch)
- Zoom on hover (desktop) / pinch zoom (mobile)
- Video support (nếu có media type VIDEO)
- Fullscreen lightbox

#### 3.2 Variant Selector Enhancement
- **File**: `src/components/catalog/product-detail.tsx`
- Color swatches (hình tròn màu) thay vì dropdown
- Storage/容量 buttons thay vì dropdown
- Hiển thị giá từng variant khi chọn
- Stock indicator: "Còn X sản phẩm" / "Hết hàng" / "Sắp về hàng"
- Disable variant không có stock

#### 3.3 Spec Comparison Table
- **File mới**: `src/components/catalog/spec-comparison.tsx`
- So sánh sản phẩm hiện tại với 2-3 sản phẩm liên quan
- Bảng so sánh: thông số kỹ thuật song song
- Highlight khác biệt giữa các phiên bản (vd: S25 vs S25+ vs S25 Ultra)

#### 3.4 FAQ Section
- **File mới**: `src/components/catalog/product-faq.tsx`
- FAQ accordion cho từng sản phẩm
- Data từ `CatalogProductDetail` (thêm field `faqs`)
- Câu hỏi phổ biến: bảo hành, đổi trả, trả góp, tương thích

#### 3.5 Related Products & Accessories
- **File mới**: `src/components/catalog/related-products.tsx`
- "Sản phẩm tương tự" — cùng danh mục, cùng tầm giá
- "Phụ kiện đi kèm" — cross-sell (case, sạc, tai nghe...)
- "Có thể bạn quan tâm" — dựa trên category + brand

#### 3.6 Sticky Add-to-cart Bar
- **File**: `src/components/catalog/sticky-buy-bar.tsx`
- Thanh cố định ở bottom khi scroll past PDP
- Hiển thị: tên sản phẩm, giá hiện tại, nút "Thêm vào giỏ"
- Ẩn khi ở đầu trang, hiện khi scroll down

---

### Sprint 4: Checkout, Payment & Order Flow
**Thời gian dự kiến: 3-4 ngày**

#### 4.1 Multiple Payment Methods
- **Files**:
  - `src/features/payment/payment.types.ts` — thêm `PaymentMethod` type
  - `src/components/checkout/payment-method-selector.tsx`
- Methods: VNPay (mock), MoMo (mock), QR Code, COD, Thẻ tín dụng (mock)
- Mỗi method có icon + mô tả
- Trả góp 0%: form tính toán kỳ hạn (3/6/9/12 tháng), số tiền trả trước

#### 4.2 Store Pickup Option
- **File mới**: `src/features/checkout/store-locator.ts`
- Danh sách cửa hàng (in-memory data: 5-10 cửa hàng)
- Chọn cửa hàng + hiển thị địa chỉ trên bản đồ (embed Google Maps)
- Kiểm tra stock tại cửa hàng chọn
- Hiển thị: "Còn hàng tại cửa hàng X" / "Hết hàng"

#### 4.3 Checkout Flow Upgrade
- **File**: `src/app/thanh-toan/page.tsx` + `src/components/checkout/checkout-form.tsx`
- Multi-step checkout: Thông tin → Vận chuyển → Thanh toán → Xác nhận
- Hoặc one-page checkout với sections (tùy preference)
- Guest checkout + "Đăng ký để tích điểm" option
- Auto-fill từ session user (nếu đã đăng nhập)
- Sổ địa chỉ: chọn địa chỉ đã lưu (nếu đã đăng nhập)
- Order summary sticky sidebar
- Progress indicator (step 1/4, 2/4...)

#### 4.4 Order Tracking Enhancement
- **File**: `src/app/don-hang/[code]/page.tsx`
- Timeline trạng thái đơn hàng (PENDING → CONFIRMED → PROCESSING → SHIPPED → DELIVERED)
- Mỗi bước có timestamp
- Estimated delivery date
- Nút "Hủy đơn hàng" (chỉ khi PENDING/CONFIRMED)
- Link tải hóa đơn PDF (generate đơn giản)

#### 4.5 Thu cũ đổi mới (Trade-in)
- **File mới**: `src/features/trade-in/trade-in.service.ts`
- Form định giá thiết bị cũ: chọn brand + model + tình trạng
- Bảng giá tham khảo (in-memory data)
- Giá trị trade-in được trừ vào đơn hàng mới
- Hiển thị: "Trợ giá X triệu khi thu cũ"

---

### Sprint 5: User Account & Content System
**Thời gian dự kiến: 3-4 ngày**

#### 5.1 Account Dashboard Upgrade
- **File**: `src/app/tai-khoan/page.tsx`
- Dashboard: tổng quan đơn hàng, điểm tích lũy, hạng thành viên
- Sidebar nav: Thông tin tài khoản, Sổ địa chỉ, Lịch sử đơn hàng, Điểm tích lũy, Ưu đãi của tôi
- Profile edit: tên, email, phone, avatar (initials-based)
- Đổi mật khẩu

#### 5.2 Address Book CRUD
- **Files**:
  - `src/app/tai-khoan/dia-chi/page.tsx` — upgrade existing
  - `src/features/address/address.service.ts` — in-memory CRUD
  - `src/components/account/address-form.tsx`
- List addresses với default badge
- Add/Edit/Delete address
- Set default address
- Province/District/Ward selector (data từ GHN API hoặc static JSON)

#### 5.3 Loyalty Points System
- **File mới**: `src/features/loyalty/loyalty.service.ts`
- Tích điểm: 1% giá trị đơn hàng
- Hạng thành viên: Silver (0đ), Gold (10M+), Platinum (50M+)
- Điểm dùng để giảm giá đơn hàng tiếp theo
- Hiển thị: điểm hiện tại, hạng, ưu đãi theo hạng
- Lưu in-memory (sau đó migrate lên Prisma)

#### 5.4 Blog/Tin công nghệ
- **Files mới**:
  - `src/features/content/content.service.ts`
  - `src/app/tin-cong-nghe/page.tsx` — list page
  - `src/app/tin-cong-nghe/[slug]/page.tsx` — article page
  - `src/components/content/article-card.tsx`
  - `src/components/content/article-renderer.tsx`
- 5-10 bài viết demo (markdown content stored in data files)
- Categories: Review, Hướng dẫn, So sánh, Tin tức
- Related articles trên mỗi bài
- SEO: meta tags, Open Graph, structured data

#### 5.5 Promotion/Deal Page
- **File mới**: `src/app/khuyen-mai/page.tsx`
- List all active promotions/coupons
- Deal categories: Deal sốc, Flash sale, Clearance, Hàng cũ
- Countdown timer cho flash sale
- "Lấy mã giảm giá" button — copy coupon code
- Filter: theo danh mục, theo loại giảm (% hoặc fixed)

---

### Sprint 6: Admin Panel & Production Readiness
**Thời gian dự kiến: 4-5 ngày**

#### 6.1 Admin Dashboard
- **Files mới**:
  - `src/app/admin/page.tsx` — dashboard overview
  - `src/app/admin/san-pham/page.tsx` — product management
  - `src/app/admin/don-hang/page.tsx` — order management
  - `src/app/admin/khach-hang/page.tsx` — customer list
  - `src/app/admin/khuyen-mai/page.tsx` — coupon management
  - `src/components/admin/*` — admin-specific components
- Protected route: chỉ ADMIN role
- Dashboard stats: tổng doanh thu, đơn hàng, sản phẩm bán chạy
- Product CRUD: add/edit/archive products + variants
- Order management: update status, add internal note, refund
- Customer list: xem lịch sử mua, tổng chi tiêu
- Coupon CRUD: tạo/sửa/vô hiệu hóa coupon

#### 6.2 Prisma Migration — Real Database
- **Files**: `prisma/schema.prisma` (đã có) + seed script
- Seed database với dữ liệu demo (30+ sản phẩm, 5+ danh mục, 10+ thương hiệu)
- Migrate order store từ in-memory → Prisma
- Migrate coupon store từ in-memory → Prisma
- Migrate auth từ in-memory → Prisma
- Repository pattern đã có sẵn (`catalog-prisma.repository.ts`) — mở rộng cho order, coupon, user

#### 6.3 Performance & SEO
- **Files**: `next.config.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`
- Sitemap generation động
- Robots.txt
- Structured data (JSON-LD) cho product pages
- Open Graph images (dynamic OG image generation)
- Image optimization: `next/image` với proper sizing
- Lazy loading cho product images
- ISR (Incremental Static Regeneration) cho PLP và PDP
- Bundle analysis và code splitting

#### 6.4 Security Hardening
- Rate limiting cho API routes (upstash/redis hoặc in-memory)
- CSRF protection cho server actions
- Input sanitization (DOMPurify cho rich text)
- Secure headers (CSP, X-Frame-Options, etc.)
- Environment variable validation (zod schema)
- Admin route protection (middleware check role)
- Audit logging (đã có schema, cần implement)

#### 6.5 Testing & CI Enhancement
- **Files**: `.github/workflows/ci.yml` + test files
- E2E tests với Playwright: checkout flow, search, filter
- Visual regression tests
- Performance tests (Lighthouse CI)
- Coverage threshold: 80%+
- Deploy preview trên PR (Vercel/Netlify)
- Database migration trong CI

---

## Thứ tự ưu tiên

| Sprint | Mức ưu tiên | Lý do |
|--------|------------|-------|
| Sprint 1 | **Cao** | Navigation + search + homepage là ấn tượng đầu tiên |
| Sprint 2 | **Cao** | PLP là nơi user tìm sản phẩm, cần filter tốt |
| Sprint 4 | **Cao** | Checkout flow quyết định conversion rate |
| Sprint 3 | **Trung bình** | PDP chi tiết tăng trust nhưng không block mua hàng |
| Sprint 5 | **Trung bình** | Account + content tăng retention |
| Sprint 6 | **Thấp** | Admin + production readiness cho go-live |

---

## Tech Stack Additions

| Package | Mục đích | Sprint |
|---------|---------|--------|
| `embla-carousel-react` | Hero carousel | 1 |
| `cmdk` | Search command palette | 1 |
| `react-intersection-observer` | Lazy load, infinite scroll | 2 |
| `react-zoom-pan-pinch` | Product image zoom | 3 |
| `react-hot-toast` | Toast notifications | 4 |
| `@upstash/ratelimit` | API rate limiting | 6 |
| `@playwright/test` | E2E testing | 6 |
| `lighthouse-ci` | Performance audit | 6 |

---

## Giới hạn phạm vi

- **Không sao chép 100% CellphoneS** — Nexora giữ bản sắc "tuyển chọn có lý do, giải thích rõ ràng"
- **Không tích hợp payment thật** — vẫn dùng mock provider cho demo
- **Không tích hợp GHN API thật** — dùng static data cho province/district/ward
- **Không deploy production** — chỉ upgrade code, CI verify pass
- **Không thêm AI chatbot** — ngoài scope

---

## Definition of Done (per sprint)

- [ ] Code pass `npm run lint`
- [ ] Code pass `npm run typecheck`
- [ ] Code pass `npm test` (add tests cho new features)
- [ ] Code pass `npm run build`
- [ ] Commit + push lên GitHub
- [ ] Browser preview verify UI hoạt động
