**NEXORA TECH  /  PRODUCT BLUEPRINT**

`  `**BẢN ĐẶC TẢ DỰ ÁN • V1.0**  

**NEXORA TECH**

*Nền tảng thương mại điện tử sản phẩm công nghệ\
thiết kế cho một người sáng lập + AI Coding*

*“Mua công nghệ thông minh hơn — đẹp, rõ, đáng tin.”*

|**12–16 tuần**<br>Từ MVP đến bản chạy thật|**01 người + AI**<br>Quy mô đội phát triển|**Vừa đủ chuẩn**<br>Hiệu năng, bảo mật, vận hành|
| :-: | :-: | :-: |

**Tài liệu gồm**

↳  Ý tưởng & định vị

↳  Phạm vi MVP

↳  UX/UI wow

↳  Kiến trúc & dữ liệu

↳  Lộ trình & checklist

Dành cho: Chủ dự án / AI Coding Agent  •  Cập nhật: 19/07/2026


# **1. Tóm tắt điều hành**

|<p>**Đề xuất cốt lõi**</p><p>Xây dựng một cửa hàng công nghệ theo hướng “curated commerce”: không cố bán mọi thứ, mà chọn sản phẩm đáng mua, trình bày cực rõ, so sánh thông minh và tạo cảm giác cao cấp. Trọng tâm khác biệt là trải nghiệm khám phá sản phẩm, nội dung tư vấn và độ tin cậy — không phải số lượng SKU.</p>|
| :- |

Nexora Tech là website bán laptop, smartphone, phụ kiện và thiết bị smart home. Phiên bản đầu nhắm đến thị trường Việt Nam, ưu tiên người dùng 18–40 tuổi yêu công nghệ nhưng không muốn mất thời gian đọc hàng chục bài đánh giá. Website hỗ trợ hành trình từ khám phá → so sánh → chọn cấu hình → đặt hàng → theo dõi đơn, với giao diện hiện đại và đủ “wow” để tạo dấu ấn thương hiệu.

|**Hạng mục**|**Định hướng**|
| :-: | :-: |
|Mô hình|B2C e-commerce, tập trung danh mục tuyển chọn và nội dung tư vấn|
|Khách hàng|Sinh viên, nhân viên văn phòng, creator, game thủ phổ thông, người mua quà công nghệ|
|Lợi thế cạnh tranh|Trình bày đẹp, so sánh dễ hiểu, recommendation theo nhu cầu, minh bạch chính sách|
|Phạm vi kỹ thuật|Một ứng dụng web full-stack, một cơ sở dữ liệu, một dashboard quản trị|
|Mục tiêu 6 tháng|Có thể bán hàng thật, vận hành thủ công có hỗ trợ tự động, đo lường được chuyển đổi|
|Không ưu tiên ban đầu|Marketplace đa nhà bán, microservices, native app, realtime phức tạp, scale 10.000 CCU|

## **Tiêu chí thành công**
- Trải nghiệm đầu tiên tạo cảm giác chuyên nghiệp, có thương hiệu và đáng tin trong 5–10 giây.
- Khách tìm được sản phẩm phù hợp trong tối đa 3–5 phút nhờ bộ lọc, so sánh và gợi ý.
- Luồng mua hàng hoàn chỉnh, không có ngõ cụt: sản phẩm → giỏ → checkout → xác nhận → theo dõi.
- Chủ shop có thể tự quản lý sản phẩm, tồn kho, đơn hàng, banner, mã giảm giá và nội dung.
- Có logging, backup, giám sát lỗi và quy trình deploy đủ để vận hành thực tế ở quy mô nhỏ–vừa.
# **2. Ý tưởng thương hiệu và định vị**
## **2.1 Big idea — “Technology, decoded.”**
Nhiều website công nghệ hiện nay dày đặc thông số, banner và khuyến mãi. Nexora chọn hướng ngược lại: biến thông tin phức tạp thành lựa chọn dễ hiểu. Mỗi sản phẩm được kể bằng ba lớp: “phù hợp với ai”, “điểm đáng tiền”, và “điều cần cân nhắc”.

|**Thành phần**|**Đề xuất**|
| :-: | :-: |
|Tên thương hiệu|Nexora Tech — gợi cảm giác “next” + “aurora”, hiện đại và có ánh sáng|
|Tagline|Mua công nghệ thông minh hơn.|
|Tính cách|Tinh gọn, thông minh, tự tin, không phô trương, hữu ích|
|Màu chủ đạo|Midnight navy, teal điện tử, electric blue; nền sáng trung tính|
|Phong cách hình ảnh|Macro product, vật liệu kính/kim loại, gradient ánh sáng, 3D nhẹ|
|Giọng văn|Rõ ràng, có quan điểm, giải thích đơn giản; hạn chế “sale sốc”, “rẻ vô địch”|

## **2.2 Điểm khác biệt có thể triển khai bởi đội nhỏ**
1. Bộ chọn sản phẩm theo nhu cầu: người dùng trả lời 4–6 câu hỏi và nhận 3 gợi ý phù hợp.
1. Thẻ “Nexora Verdict”: tóm tắt nhanh lý do nên mua, không nên mua và lựa chọn thay thế.
1. So sánh trực quan: chỉ làm nổi bật khác biệt quan trọng thay vì đổ toàn bộ bảng thông số.
1. Build Your Setup: gợi ý combo laptop + màn hình + hub + chuột theo ngân sách.
1. Editorial commerce: landing page dạng “Best for…” và guide mua hàng để kéo SEO và tăng tin cậy.
1. Giá trị sau bán: theo dõi đơn rõ ràng, hướng dẫn khởi động thiết bị, nhắc bảo hành.
## **2.3 Persona chính**

|**Persona**|**Nhu cầu**|**Nỗi đau**|**Tính năng thuyết phục**|
| :-: | :-: | :-: | :-: |
|Minh — sinh viên|Laptop học tập, ngân sách rõ|Sợ mua quá cấu hình hoặc thiếu cấu hình|Quiz, lọc theo ngành học, trả góp|
|Linh — nhân viên văn phòng|Thiết bị đẹp, bền, dùng lâu|Không hiểu thông số, ít thời gian|Verdict, so sánh, combo setup|
|Huy — creator|Hiệu năng và màn hình tốt|Khó cân bằng giá/hiệu năng|Benchmark dễ hiểu, cấu hình theo workflow|
|An — người mua quà|Món quà an toàn, giao đúng ngày|Không biết người nhận thích gì|Gift finder, gói quà, lịch giao dự kiến|

# **3. Phạm vi sản phẩm và chiến lược MVP**

|<p>**Nguyên tắc phạm vi**</p><p>MVP phải “hẹp nhưng hoàn chỉnh”: ít danh mục hơn, ít tích hợp hơn, nhưng mọi luồng cốt lõi chạy trơn tru và giao diện có chất lượng cao. Không xây tính năng chỉ để có trong danh sách.</p>|
| :- |

## **3.1 Danh mục khởi đầu**

|**Ưu tiên**|**Danh mục**|**Số SKU gợi ý**|**Lý do**|
| :-: | :-: | :-: | :-: |
|P0|Laptop|30–50|Giá trị đơn hàng cao, nội dung tư vấn tạo khác biệt|
|P0|Smartphone|20–30|Nhu cầu lớn, dễ tạo landing theo tầm giá|
|P0|Phụ kiện|60–100|Tăng AOV, phù hợp combo và cross-sell|
|P1|Màn hình|15–25|Hợp với Build Your Setup|
|P1|Smart home|15–25|Tạo cảm giác tương lai, hình ảnh đẹp|
|P2|Gaming gear|20–30|Chỉ mở rộng khi có nội dung và nguồn hàng tốt|

## **3.2 MoSCoW — phạm vi phiên bản đầu**

|**Mức**|**Bao gồm**|
| :-: | :-: |
|Must|Trang chủ, danh mục, tìm kiếm, bộ lọc, chi tiết sản phẩm, biến thể, giỏ hàng, checkout, tài khoản, theo dõi đơn, admin sản phẩm/đơn/tồn kho, mã giảm giá, email giao dịch, analytics cơ bản.|
|Should|So sánh sản phẩm, wishlist, đánh giá có duyệt, recommendation thủ công/theo rule, blog/guide, combo sản phẩm, trả góp hiển thị.|
|Could|Quiz chọn sản phẩm, loyalty point, back-in-stock alert, live chat, gift card, PWA, dark mode theo hệ thống.|
|Won’t now|Marketplace, đa kho realtime, đấu giá, livestream, social network, microservices, app iOS/Android native, AI chatbot tự do có quyền đặt hàng.|

## **3.3 Luồng người dùng trọng yếu**
1. Khám phá từ hero, campaign, danh mục hoặc guide.
1. Thu hẹp lựa chọn bằng nhu cầu, ngân sách, thương hiệu và thông số quan trọng.
1. Xem PDP với ảnh, biến thể, lợi ích, verdict, giao hàng, bảo hành và sản phẩm thay thế.
1. Thêm giỏ; hệ thống gợi ý phụ kiện nhưng không gây cản trở.
1. Checkout ngắn: thông tin nhận hàng → phương thức giao → thanh toán → xác nhận.
1. Khách nhận email/SMS trạng thái; có trang theo dõi đơn không bắt buộc đăng nhập.
1. Sau giao hàng: hướng dẫn bắt đầu, yêu cầu đánh giá, hỗ trợ bảo hành.
# **4. Kiến trúc thông tin và màn hình**

|**Khu vực**|**Màn hình chính**|**Mục tiêu**|
| :-: | :-: | :-: |
|Storefront|Home, Category, Search, PDP, Compare, Wishlist|Khám phá và ra quyết định|
|Commerce|Cart, Checkout, Payment result, Order tracking|Hoàn tất mua hàng|
|Account|Profile, Addresses, Orders, Reviews, Wishlist|Tự phục vụ sau mua|
|Content|Guides, Best-of, Brand pages, Campaign landing|SEO và tư vấn|
|Admin|Dashboard, Products, Inventory, Orders, Promotions, Content, Customers|Vận hành hằng ngày|
|System|Login, 404, Maintenance, Legal, Contact|Tin cậy và xử lý ngoại lệ|

## **4.1 Cấu trúc trang chủ**
1. Announcement bar tối giản: giao nhanh, đổi trả hoặc ưu đãi thật sự có giá trị.
1. Header sticky: logo, mega menu, search nổi bật, tài khoản, wishlist, giỏ.
1. Hero editorial: một thông điệp, một hình ảnh mạnh, tối đa hai CTA.
1. Quick finder: các chip “Laptop cho sinh viên”, “Điện thoại dưới 10 triệu”, “Setup WFH”.
1. Featured drop: 4–8 sản phẩm mới với motion nhẹ và card giàu thông tin.
1. Build Your Setup: module tương tác theo ngân sách.
1. Nexora Picks: nhóm sản phẩm được tuyển chọn có lý do rõ ràng.
1. Buying guides và comparison stories.
1. Khối social proof, chính sách, đối tác thanh toán và footer đầy đủ.
## **4.2 Trang chi tiết sản phẩm (PDP)**

|**Khối**|**Nội dung bắt buộc**|
| :-: | :-: |
|Above the fold|Gallery, tên, giá, giá cũ, biến thể, tồn kho, CTA, giao dự kiến, bảo hành|
|Decision layer|3 điểm đáng mua, 2 điều cân nhắc, phù hợp với ai, điểm Nexora|
|Specs|Nhóm thông số theo ngữ cảnh; hỗ trợ thu gọn và tìm nhanh|
|Proof|Ảnh thực tế, video ngắn, đánh giá đã mua, Q&A có kiểm duyệt|
|Commerce|Combo phụ kiện, trade-in/ trả góp hiển thị, sản phẩm tương tự|
|Trust|Đổi trả, bảo hành, xuất hóa đơn, chính sách dữ liệu, liên hệ hỗ trợ|

# **5. Danh sách chức năng chi tiết**

|**Module**|**Chi tiết**|
| :-: | :-: |
|Catalog & merchandising|CRUD sản phẩm; category/brand/tag; biến thể SKU; ảnh/video; giá niêm yết/giá sale; badge; lịch publish; sản phẩm liên quan; SEO metadata.|
|Search & discovery|Search gợi ý; typo tolerance cơ bản; lịch sử gần đây; lọc theo giá/brand/spec; sort; URL filter có thể chia sẻ.|
|Cart|Guest cart; cập nhật số lượng; kiểm tra tồn; coupon; shipping estimate; lưu cart ngắn hạn; merge cart khi đăng nhập.|
|Checkout|Guest checkout; địa chỉ; phí vận chuyển; COD/chuyển khoản/cổng thanh toán; consent; tạo order idempotent; trang kết quả.|
|Order management|Trạng thái đơn; timeline; ghi chú nội bộ; hủy/hoàn thủ công; in packing slip; export CSV; email trạng thái.|
|Account|Đăng ký/đăng nhập; quên mật khẩu; profile; địa chỉ; đơn hàng; wishlist; review; logout all sessions tùy chọn.|
|Promotion|Coupon theo thời gian, số lượt, giá trị tối thiểu, danh mục; banner; campaign landing; flash window không cần realtime phức tạp.|
|Content|Blog/guide; block editor đơn giản; FAQ; landing page; internal link; schema metadata cơ bản.|
|Review|Chỉ khách đã mua được gắn verified; rating; ảnh; moderation; report spam; seller response.|
|Admin & ops|Dashboard đơn/doanh thu; low-stock; quản lý role admin; audit log thao tác quan trọng; cấu hình cửa hàng.|
|Analytics|Page view, search, filter, product view, add-to-cart, checkout start, purchase, coupon use, errors; dashboard funnel.|
|Support|Contact form; FAQ; link chat; ticket qua email; order lookup; template phản hồi.|

## **5.1 Quy tắc nghiệp vụ quan trọng**
- Giá hiển thị và giá chốt đơn phải được tính ở server; không tin dữ liệu giá từ client.
- Tồn kho được giữ đơn giản: trừ tồn khi thanh toán thành công hoặc khi xác nhận COD; có thao tác hoàn tồn.
- Mỗi yêu cầu tạo đơn có idempotency key để tránh double order khi người dùng bấm lại.
- Coupon được validate lại ở checkout và khi tạo order.
- Không cho sửa sản phẩm đã nằm trong order; lưu snapshot tên, SKU, giá, thuế, ảnh tại thời điểm mua.
- Mọi thay đổi trạng thái đơn và hoàn tiền phải ghi log người thực hiện và thời gian.
- Đơn guest có token theo dõi riêng, hết hạn hợp lý và không lộ thông tin nhạy cảm.
# **6. Yêu cầu UX/UI — “wow nhưng bán được hàng”**

|<p>**Nguyên tắc thiết kế**</p><p>Wow đến từ art direction, typography, khoảng trắng, motion có chủ đích và cách trình bày thông tin — không đến từ nhồi hiệu ứng. Mọi hiệu ứng phải phục vụ việc hiểu sản phẩm hoặc tăng cảm giác cao cấp.</p>|
| :- |

## **6.1 Design system đề xuất**

|**Token**|**Đề xuất**|
| :-: | :-: |
|Typography|Display: Space Grotesk/Sora; Body: Inter/Manrope; hỗ trợ tiếng Việt đầy đủ|
|Palette|Navy #0B1220; Teal #0F766E; Electric blue #2563EB; Surface #F8FAFC; Ink #0F172A|
|Grid|12 cột desktop, 8 tablet, 4 mobile; max width 1280–1440 px|
|Radius|12 px cho card, 16–24 px cho hero/module; tránh bo tròn mọi thứ|
|Shadow|Rất nhẹ; ưu tiên border mờ và lớp nền thay vì drop shadow nặng|
|Motion|150–250 ms UI; 400–700 ms hero; easing tự nhiên; hỗ trợ prefers-reduced-motion|
|Icon|Một bộ icon outline thống nhất; không trộn nhiều phong cách|
|Imagery|Ảnh nền sạch, crop nhất quán, WebP/AVIF, có zoom và fallback|

## **6.2 “Wow moments” khả thi**
1. Hero product orbit: sản phẩm nổi trên nền gradient/mesh, phản ứng nhẹ theo con trỏ nhưng tắt trên mobile.
1. Product card reveal: hover mở nhanh màu sắc, thông số cốt lõi và nút compare mà không làm layout nhảy.
1. Sticky story PDP: khi cuộn, hình sản phẩm thay đổi theo các điểm mạnh (màn hình, camera, hiệu năng).
1. Compare spotlight: hàng khác biệt được highlight, hàng giống nhau có thể ẩn.
1. Cart drawer cinematic: mở nhanh, hiển thị tiến độ freeship và combo đề xuất hợp lý.
1. Microcopy thông minh: giải thích “RAM 16 GB phù hợp với…” thay vì chỉ ghi thông số.
1. Order success scene: animation ngắn có mã đơn và bước tiếp theo rõ ràng.
## **6.3 Chuẩn UX bắt buộc**
- Mobile-first; vùng chạm tối thiểu khoảng 44 px; checkout dùng một cột trên mobile.
- Không dùng carousel tự chạy cho nội dung quan trọng; không che CTA bằng popup.
- Trạng thái loading, empty, error, out-of-stock và disabled phải được thiết kế đầy đủ.
- Form có label rõ, validation tại chỗ, giữ dữ liệu khi lỗi, không yêu cầu tạo tài khoản để mua.
- Độ tương phản và điều hướng bàn phím ở mức tốt; ảnh có alt; semantic heading đúng.
- Không dùng dark pattern: countdown giả, tồn kho giả, review giả, phí ẩn cuối checkout.
# **7. Kiến trúc kỹ thuật đề xuất**
Ưu tiên monolith modular để giảm chi phí nhận thức và vận hành. Một codebase có thể chứa storefront, API/server actions và admin. Tách worker nhỏ chỉ khi có tác vụ nền như gửi email, xử lý ảnh hoặc đồng bộ trạng thái thanh toán.

|**Lớp**|**Khuyến nghị**|**Ghi chú**|
| :-: | :-: | :-: |
|Frontend|Next.js + TypeScript + Tailwind CSS + component primitives|SSR/SEO tốt, dễ triển khai, hệ sinh thái mạnh|
|Backend|Next.js server/API hoặc NestJS nếu muốn tách rõ|Chọn một; không cần hai backend|
|Database|PostgreSQL + Prisma/Drizzle|Quan hệ phù hợp commerce, migration rõ|
|Auth|Auth.js/Clerk/Supabase Auth|Ưu tiên giải pháp giảm tự triển khai bảo mật|
|Storage|S3-compatible / Cloudinary|Ảnh sản phẩm, transform và CDN|
|Search|Postgres full-text ban đầu; Meilisearch sau|Không cần Elasticsearch ở MVP|
|Payments|Cổng nội địa phù hợp + COD + chuyển khoản|Webhook phải verify signature|
|Email|Resend/Postmark/SES|Template transactional, retry và log|
|Hosting|Vercel/Render/Fly/Cloud Run + managed Postgres|Môi trường dev/staging/prod|
|Monitoring|Sentry + uptime monitor + structured logs|Cảnh báo lỗi checkout và webhook|

## **7.1 Sơ đồ logic**

|**Browser / Mobile Web**|**CDN + Edge**|**Admin Browser**|
| :-: | :-: | :-: |
|**Storefront UI**|**Next.js App / API**|**Admin UI**|
|**Payment Gateway**|**PostgreSQL**|**Object Storage**|
|**Email Provider**|**Background Jobs**|**Analytics / Sentry**|
|**External services**|||
Luồng chính: Client → Next.js/API → PostgreSQL. Ảnh đi qua CDN. Thanh toán và email là dịch vụ ngoài; webhook quay về API. Tác vụ nền xử lý retry, email và các công việc không cần phản hồi ngay.
## **7.2 Nguyên tắc codebase**
- Tổ chức theo feature/domain: catalog, cart, checkout, orders, promotions, users, content.
- Tách UI components, domain services, repositories/data access và integrations.
- Không để business rule nằm rải rác trong component React.
- Validation dùng schema dùng chung giữa client/server; server luôn là nguồn sự thật.
- Migration có version; seed dữ liệu demo; feature flag cho tính năng chưa hoàn chỉnh.
- API có error shape thống nhất, request id và log có cấu trúc.
# **8. Mô hình dữ liệu cốt lõi**

|**Entity**|**Trường chính / quan hệ**|
| :-: | :-: |
|User|id, email, password/authProvider, role, status, createdAt|
|Address|userId, name, phone, province, district, ward, line1, default|
|Product|name, slug, brandId, categoryId, description, status, SEO, publishAt|
|ProductVariant|productId, sku, attributes JSON, price, compareAtPrice, cost, stock, weight|
|ProductMedia|productId/variantId, type, url, alt, sortOrder|
|Category / Brand|name, slug, status, metadata|
|Cart / CartItem|session/user, variantId, qty, priceSnapshot, expiresAt|
|Order|code, user/guest, totals, addressSnapshot, payment, fulfillment, status|
|OrderItem|orderId, variant snapshot, qty, unitPrice, discount, total|
|Payment|orderId, provider, transactionId, amount, status, rawRef|
|Coupon|code, type, value, limits, scope, startAt, endAt, usage|
|Review|userId, productId, orderItemId, rating, content, media, status|
|ContentPage|type, slug, title, blocks JSON, SEO, status|
|AuditLog|actorId, action, entityType, entityId, metadata, createdAt|

## **8.1 Chỉ mục và ràng buộc đáng có**
- Unique: product.slug, variant.sku, order.code, coupon.code, payment.transactionId.
- Index: product status/category/brand, variant productId, order createdAt/status/email/phone, review productId/status.
- Foreign key và delete policy rõ: không cascade xóa order; soft delete cho product/content khi cần.
- Tiền lưu dạng integer theo đơn vị nhỏ nhất hoặc decimal nhất quán; không dùng float.
- Timestamp lưu UTC; hiển thị theo Asia/Ho\_Chi\_Minh.
# **9. Yêu cầu phi chức năng và bảo mật “vừa đủ chuẩn”**

|**Nhóm**|**Mức mục tiêu**|
| :-: | :-: |
|Hiệu năng|LCP trang chính/PDP mục tiêu dưới ~2.5–3 giây trên mạng 4G tốt; ảnh tối ưu; JS budget có kiểm soát.|
|Khả dụng|Thiết kế cho vài trăm người dùng đồng thời; managed DB; health check; uptime monitor.|
|Bảo mật|HTTPS, secure cookie, CSRF phù hợp, rate limit login/checkout, RBAC admin, input validation, dependency updates.|
|Dữ liệu|Không lưu thông tin thẻ; backup DB hằng ngày; retention log; quyền truy cập tối thiểu.|
|Tin cậy|Webhook idempotent; retry có giới hạn; order/payment reconciliation; audit log.|
|SEO|SSR metadata, canonical, sitemap, robots, schema Product/Breadcrumb/Article, URL sạch.|
|Accessibility|Keyboard navigation, focus visible, contrast, labels, reduced motion; mục tiêu gần WCAG AA cho luồng chính.|
|Tương thích|Chrome/Edge/Safari/Firefox bản hiện đại; responsive 360 px trở lên.|
|Observability|Error tracking, structured logs, request id, alert lỗi thanh toán và tỷ lệ 5xx.|
|Pháp lý cơ bản|Điều khoản, quyền riêng tư, đổi trả, bảo hành, chính sách thanh toán/giao hàng; consent marketing tách biệt.|

## **9.1 Checklist bảo mật tối thiểu**
- Mật khẩu hash bằng thư viện chuẩn; session/token có expiry; reset token dùng một lần.
- Admin bắt buộc 2FA nếu giải pháp auth hỗ trợ; route admin kiểm tra quyền ở server.
- Secret chỉ nằm ở environment manager; không commit .env; rotate khi nghi ngờ lộ.
- Webhook verify chữ ký và chống replay; callback không dựa vào query client để đánh dấu đã thanh toán.
- Rate limit các endpoint login, reset password, coupon, checkout, contact.
- Sanitize hoặc render an toàn nội dung rich text; hạn chế upload MIME/size; quét metadata ảnh nếu cần.
- Ẩn stack trace ở production; log không chứa mật khẩu, token, đầy đủ số điện thoại hoặc địa chỉ.
- Cập nhật dependency định kỳ; bật cảnh báo lỗ hổng; có quy trình rollback.
# **10. API và tích hợp**

|**Nhóm**|**Endpoint/Action tiêu biểu**|
| :-: | :-: |
|Catalog|GET /products, GET /products/:slug, GET /categories, GET /search|
|Cart|GET /cart, POST /cart/items, PATCH /cart/items/:id, DELETE /cart/items/:id|
|Checkout|POST /checkout/quote, POST /orders, POST /payments/create|
|Orders|GET /orders/:code?token=…, GET /me/orders, POST /orders/:id/cancel|
|Auth|POST /auth/register, login, forgot-password, reset-password|
|Reviews|GET /products/:id/reviews, POST /reviews, POST /reviews/:id/report|
|Admin|CRUD product/variant/media; order status; coupon; content; dashboard|
|Webhooks|POST /webhooks/payment/:provider, /webhooks/email|

Mỗi endpoint ghi rõ: authentication, authorization, request schema, response schema, error codes, idempotency, side effects và event analytics. Với dự án nhỏ, OpenAPI tự sinh từ schema hoặc tài liệu Markdown trong repo là đủ; quan trọng là thống nhất và cập nhật.
# **11. Kiểm thử và tiêu chuẩn hoàn thành**

|**Tầng**|**Phạm vi**|
| :-: | :-: |
|Unit|Pricing, coupon, shipping fee, order state transition, stock rules, validators.|
|Integration|Database repositories, auth guards, payment webhook, email queue, image upload.|
|E2E|Browse → PDP → add cart → checkout COD; payment success/fail; guest tracking; admin fulfill order.|
|Visual|Homepage, category, PDP, cart, checkout ở desktop/mobile; snapshot các component quan trọng.|
|Manual release|Cross-browser, keyboard, slow network, empty/error/out-of-stock, email template, SEO tags.|
|Security smoke|Unauthorized admin, tampered price, duplicate webhook/order, brute login, unsafe upload.|

## **Definition of Done cho một tính năng**
- Có acceptance criteria và trạng thái UI đầy đủ.
- Validation client + server; authorization server-side.
- Có test phù hợp mức rủi ro; không nhất thiết ép coverage cao đồng đều.
- Có analytics event nếu liên quan funnel.
- Có log/error handling; không lộ dữ liệu nhạy cảm.
- Responsive, keyboard usable, copy tiếng Việt hoàn chỉnh.
- Được chạy trên staging với dữ liệu gần thực tế và có rollback plan.
# **12. Kế hoạch triển khai 12–16 tuần**

|**Giai đoạn**|**Thời lượng**|**Đầu ra**|
| :-: | :-: | :-: |
|0\. Discovery & foundation|1 tuần|Brand direction, sitemap, backlog, repo, CI, environments, DB skeleton.|
|1\. Design system & storefront shell|2 tuần|Tokens, components, header/footer, home skeleton, responsive foundations.|
|2\. Catalog & PDP|2–3 tuần|Product model, admin CRUD, category/search/filter, PDP, media pipeline.|
|3\. Cart & checkout|2–3 tuần|Cart, coupon, address, shipping, order creation, COD, payment sandbox.|
|4\. Orders & admin ops|2 tuần|Order dashboard, status flow, inventory, emails, tracking page.|
|5\. Trust & growth|2 tuần|Reviews, guides, compare, SEO, analytics funnel, legal pages.|
|6\. Hardening & launch|1–2 tuần|E2E, performance, security smoke, backup, monitoring, content QA, launch.|
|Buffer|1–2 tuần|Sửa lỗi tích hợp, polish giao diện, dữ liệu và quy trình vận hành.|

## **12.1 Backlog theo sprint**

|**Sprint**|**Ưu tiên chính**|**Demo cuối sprint**|
| :-: | :-: | :-: |
|S1|Foundation + design system + data seed|Home shell và UI kit chạy trên staging|
|S2|Catalog + admin product|Có thể tạo sản phẩm và xem category/PDP|
|S3|Search/filter + cart|Tìm, lọc, thêm giỏ, giữ session|
|S4|Checkout + order + COD|Đặt đơn end-to-end|
|S5|Payment + emails + tracking|Thanh toán sandbox và thông báo đầy đủ|
|S6|Admin order + inventory + coupon|Vận hành đơn và khuyến mãi|
|S7|Compare/review/content/SEO|Trải nghiệm tư vấn và organic foundation|
|S8|Polish + performance + launch|Release candidate và runbook|

# **13. Quy trình làm việc với AI Coding**

|<p>**Cách dùng AI hiệu quả**</p><p>Đừng giao “xây cả website”. Hãy giao từng vertical slice có đầu vào, acceptance criteria, file liên quan, test cần chạy và điều kiện không được phá. AI viết nhanh; bạn chịu trách nhiệm kiến trúc, kiểm tra và quyết định sản phẩm.</p>|
| :- |

1. Giữ một PROJECT\_CONTEXT.md: mục tiêu, stack, conventions, data model, business rules, non-goals.
1. Mỗi task có format: Context → User story → Acceptance criteria → Constraints → Test command → Files likely changed.
1. Yêu cầu AI đề xuất plan ngắn trước khi sửa nhiều file; review diff theo domain.
1. Mỗi PR nhỏ, chạy lint/typecheck/test/build; không merge code “có vẻ đúng”.
1. Khi sinh UI, cung cấp screenshot/moodboard, token và trạng thái responsive thay vì prompt chung chung.
1. Khi sửa bug, yêu cầu tái hiện bằng test trước nếu hợp lý.
1. Dùng seed dữ liệu thật đẹp để đánh giá UI; tránh lorem ipsum và ảnh ngẫu nhiên.
1. Ghi ADR cho quyết định lớn: auth, payment, inventory, storage, deployment.
## **Prompt mẫu cho một feature**

|FEATURE: Guest cart<br>GOAL: Người chưa đăng nhập có thể thêm/cập nhật/xóa sản phẩm và cart tồn tại 7 ngày.<br>RULES: Giá được đọc lại từ server; không cho quantity vượt stock; merge cart khi login.<br>ACCEPTANCE: Có loading/error/empty; mobile usable; analytics add\_to\_cart; unit test stock rule; E2E add → reload → cart preserved.<br>CONSTRAINTS: Tuân theo module boundaries; không thêm dependency nếu chưa giải thích; migration reversible.<br>OUTPUT: Plan ngắn, code, test, và ghi chú rủi ro.|
| :- |

# **14. Vận hành và ra mắt**
## **14.1 Môi trường và CI/CD**
- Dev local, staging riêng, production riêng; database và secret không dùng chung.
- Pull request chạy lint, typecheck, unit/integration test và build.
- Migration production chạy có kiểm soát; backup trước migration lớn.
- Deploy có preview; production deploy từ main/tag; có rollback về bản ổn định.
- Seed staging có sản phẩm, coupon, user và order mẫu nhưng không dùng dữ liệu khách thật.
## **14.2 Runbook ngày launch**

|**Thời điểm**|**Việc cần làm**|
| :-: | :-: |
|T-7 ngày|Freeze scope; kiểm tra legal, payment, domain, email DNS, backup restore, analytics.|
|T-3 ngày|Test đơn thật giá nhỏ; kiểm tra mobile; nhập tồn; review content/ảnh; cấu hình support.|
|T-1 ngày|Full smoke test; export backup; xác nhận rollback; bật monitoring/alerts.|
|Launch|Mở traffic có kiểm soát; theo dõi 5xx, checkout, webhook, email, conversion.|
|T+1–3 ngày|Fix lỗi P0/P1; đối soát đơn/thanh toán; gọi thử khách; xem search no-result.|
|T+7 ngày|Retro; chốt backlog tăng chuyển đổi; dọn log/feature flag; báo cáo tuần đầu.|

## **14.3 KPI nên theo dõi**

|**KPI**|**Ý nghĩa**|**Mục tiêu ban đầu tham khảo**|
| :-: | :-: | :-: |
|Conversion rate|Đơn / phiên|Theo dõi baseline trước; tối ưu theo nguồn traffic|
|Add-to-cart rate|Mức hấp dẫn PDP|So sánh theo category và device|
|Checkout completion|Độ trơn tru checkout|Tìm bước rơi nhiều nhất|
|Average order value|Giá trị đơn|Tăng qua combo/cross-sell, không ép mua|
|Search no-result|Chất lượng catalog/search|Giảm dần bằng synonym và content|
|Return/cancel rate|Chất lượng tư vấn và vận hành|Phân loại nguyên nhân|
|Core Web Vitals|Tốc độ thực tế|Theo dõi field data, ưu tiên mobile|
|Support contacts/order|Độ rõ thông tin|Giảm câu hỏi lặp qua UX/FAQ|

# **15. Rủi ro và cách giảm thiểu**

|**Rủi ro**|**Tác động**|**Giảm thiểu**|
| :-: | :-: | :-: |
|Scope creep|Trễ launch, code dang dở|Khóa Must-have; feature flag; bỏ tính năng trước khi giảm chất lượng lõi.|
|AI sinh code không nhất quán|Khó bảo trì, bug âm thầm|Conventions, module boundaries, PR nhỏ, test và refactor định kỳ.|
|Dữ liệu sản phẩm kém|UI đẹp nhưng không bán được|Template nhập liệu, chuẩn ảnh, checklist copy/spec, review editorial.|
|Payment/webhook lỗi|Đơn sai trạng thái|Idempotency, verify signature, reconciliation, dashboard manual fix.|
|Tồn kho lệch|Oversell hoặc mất đơn|Quy tắc trừ/hoàn tồn rõ, log, kiểm kê, cảnh báo low-stock.|
|Hiệu ứng làm chậm|Bounce mobile cao|Performance budget, lazy load, reduced motion, test thiết bị thật.|
|Ít traffic|Không đủ dữ liệu bán hàng|SEO guides, social content, campaign nhỏ, email capture, referral.|
|Một người vận hành|Quá tải support và content|Template, automation vừa đủ, FAQ, batch operations, lịch vận hành cố định.|

# **16. Danh sách deliverable của dự án**

|**Nhóm**|**Deliverable**|
| :-: | :-: |
|Product|PRD/backlog, sitemap, user flows, acceptance criteria, KPI plan.|
|Design|Brand mini-guide, Figma/UI kit, responsive screens, state library, asset guide.|
|Engineering|Repo, README, architecture notes, migrations, seed, API docs, test suite.|
|Operations|Admin guide, order SOP, refund SOP, inventory SOP, launch runbook, incident checklist.|
|Content|Product template, category copy, policy pages, email templates, guide starter pack.|
|Launch|Domain/DNS, analytics, monitoring, backup, staging sign-off, production checklist.|

## **16.1 Checklist “đủ chuẩn đưa ra thực tế”**
☐  Luồng mua COD và thanh toán online đã test end-to-end.

☐  Giá, coupon, phí ship và tồn kho được xác thực server-side.

☐  Email xác nhận/trạng thái có nội dung đúng và không vào spam nghiêm trọng.

☐  Admin thao tác được sản phẩm, tồn, đơn, coupon mà không sửa database trực tiếp.

☐  Có backup và đã thử restore ít nhất một lần ở staging.

☐  Có error tracking, uptime monitoring và người nhận alert.

☐  Các trang chính đạt chất lượng responsive, accessibility và performance chấp nhận được.

☐  Chính sách giao hàng, đổi trả, bảo hành, thanh toán và quyền riêng tư đã công khai.

☐  Không còn secret, dữ liệu demo, console log nhạy cảm hoặc tài khoản admin mặc định.

☐  Có rollback plan và danh sách lỗi biết trước không ảnh hưởng luồng mua chính.
# **17. Quyết định đề xuất để bắt đầu ngay**

|**Quyết định**|**Khuyến nghị**|
| :-: | :-: |
|Tên tạm|Nexora Tech|
|Mô hình|Curated tech store, không marketplace|
|Stack|Next.js + TypeScript + PostgreSQL + managed auth/storage/email|
|Phạm vi launch|Laptop + smartphone + phụ kiện; 100–180 SKU|
|Thanh toán|COD + một cổng online + chuyển khoản có hướng dẫn|
|Điểm wow|Editorial hero, verdict, smart compare, build-your-setup|
|Timeline|12–16 tuần, 8 sprint nhỏ|
|Nguyên tắc|Monolith modular, server source-of-truth, polish luồng cốt lõi trước mở rộng|

|<p>**Bước đầu tiên trong 48 giờ**</p><p>Chốt tên và moodboard; tạo repo + PROJECT\_CONTEXT.md; dựng design tokens và 3 màn hình chuẩn (Home, Category, PDP); đồng thời khóa data model Product/Variant/Order. Khi ba phần này ổn, AI Coding có thể tăng tốc mà ít phải làm lại.</p>|
| :- |

# **Phụ lục A — User stories ưu tiên**

|**ID**|**User story**|**Ưu tiên**|
| :-: | :-: | :-: |
|US-01|Là khách, tôi muốn lọc laptop theo ngân sách và nhu cầu để nhanh tìm lựa chọn phù hợp.|P0|
|US-02|Là khách, tôi muốn xem sản phẩm phù hợp với ai và điểm cần cân nhắc.|P0|
|US-03|Là khách, tôi muốn thêm biến thể đúng vào giỏ và thấy tồn kho/giá chính xác.|P0|
|US-04|Là khách, tôi muốn checkout không cần tài khoản.|P0|
|US-05|Là khách, tôi muốn theo dõi đơn bằng mã đơn và thông tin xác minh.|P0|
|US-06|Là admin, tôi muốn tạo/sửa sản phẩm và biến thể từ dashboard.|P0|
|US-07|Là admin, tôi muốn cập nhật trạng thái đơn và gửi thông báo tự động.|P0|
|US-08|Là khách, tôi muốn so sánh 2–4 sản phẩm và chỉ xem khác biệt.|P1|
|US-09|Là khách đã mua, tôi muốn đánh giá sản phẩm.|P1|
|US-10|Là marketer, tôi muốn tạo coupon/campaign có thời gian hiệu lực.|P1|
|US-11|Là khách, tôi muốn nhận gợi ý combo theo ngân sách.|P1|
|US-12|Là admin, tôi muốn xem cảnh báo tồn thấp và sản phẩm bán chạy.|P1|

# **Phụ lục B — Cấu trúc thư mục gợi ý**

|src/<br>`  `app/                 # routes, layouts, server entry points<br>`  `features/<br>`    `catalog/<br>`    `cart/<br>`    `checkout/<br>`    `orders/<br>`    `promotions/<br>`    `reviews/<br>`  `components/          # shared UI primitives and compositions<br>`  `domain/              # entities, rules, value objects<br>`  `data/                # repositories, queries, database client<br>`  `integrations/        # payment, email, storage, analytics<br>`  `lib/                  # validation, logging, errors, utilities<br>`  `styles/               # tokens and global styles<br>prisma/                 # schema, migrations, seed<br>tests/                  # integration and e2e<br>docs/                   # ADR, API, runbooks, product context|
| :- |
# **Phụ lục C — Gợi ý nội dung launch**

|**Loại**|**Chủ đề mẫu**|
| :-: | :-: |
|Buying guide|Laptop cho sinh viên theo ngành; điện thoại tốt dưới 10/15 triệu; chọn RAM/SSD thế nào.|
|Comparison|MacBook Air vs laptop Windows mỏng nhẹ; iPhone dòng thường vs Pro; OLED vs IPS.|
|Setup|Góc làm việc dưới 15/25/40 triệu; setup creator; setup học online.|
|Trust content|Cách Nexora chọn sản phẩm; quy trình kiểm tra hàng; bảo hành và đổi trả.|
|Campaign|Back to School; Work From Anywhere; Creator Month; Smart Home Starter.|

**— HẾT TÀI LIỆU —**
Trang 
