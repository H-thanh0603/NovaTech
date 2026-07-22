export type BlogArticle = Readonly<{
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  coverImage: string;
}>;

export const blogArticles: readonly BlogArticle[] = [
  {
    slug: "chon-laptop-sinh-vien-2026",
    title: "Chọn laptop sinh viên 2026: 5 tiêu chí thực tế",
    excerpt: "Không cần cấu hình mạnh nhất — cần cấu hình đúng. Hướng dẫn chọn laptop cho sinh viên với ngân sách 15-25 triệu.",
    content: "Khi chọn laptop cho sinh viên, nhiều người rơi vào bẫy 'cấu hình cao nhất trong tầm giá'. Nhưng thực tế, sinh viên cần máy nhẹ, pin lâu, màn hình tốt hơn là CPU mạnh.\n\n1. Trọng lượng dưới 1.5kg — bạn sẽ mang đi mỗi ngày\n2. Pin trên 8 giờ — không luôn luôn cần ổ cắm\n3. RAM 16GB — đủ cho đa nhiệm mượt mà\n4. SSD 512GB — cân bằng giữa giá và dung lượng\n5. Màn hình IPS — bảo vệ mắt khi đọc nhiều\n\nVới 15-20 triệu, các dòng máy như Lenovo IdeaPad Slim 5, ASUS Zenbook 14 đều đáp ứng tốt. Nếu ngân sách 20-25 triệu, MacBook Air M3 là lựa chọn xuất sắc về pin và độ bền.",
    category: "Hướng dẫn chọn mua",
    author: "Nexora Editorial",
    publishedAt: "2026-07-15",
    readingTime: 5,
    coverImage: "https://images.unsplash.com/photo-1525547719571-a2d4ac89f5bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "airpods-pro-2-vs-sony-wh-1000xm5",
    title: "AirPods Pro 2 vs Sony WH-1000XM5: Tai nghe nào cho bạn?",
    excerpt: "So sánh chi tiết giữa in-ear và over-ear: chống ồn, chất âm, pin, và giá trị lâu dài.",
    content: "AirPods Pro 2 và Sony WH-1000XM5 phục vụ hai nhu cầu khác nhau.\n\nAirPods Pro 2 phù hợp nếu: bạn dùng iPhone/Mac, cần tai nghe nhỏ gọn mang theo, muốn tiện năng chuyển đổi thiết bị. Chống ồn tốt, chất âm cân bằng, nhưng pin chỉ 6 giờ.\n\nSony WH-1000XM5 phù hợp nếu: bạn muốn chất âm chi tiết, pin 30 giờ, chống ồn mạnh hơn. Tuy nhiên lớn hơn và không tiện mang theo như AirPods.\n\nKết luận: AirPods cho hệ sinh thái Apple, Sony cho người muốn chất âm và pin.",
    category: "So sánh",
    author: "Nexora Editorial",
    publishedAt: "2026-07-10",
    readingTime: 7,
    coverImage: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "tra-gop-0-percent-huong-dan",
    title: "Trả góp 0% tại Nexora: Hướng dẫn chi tiết",
    excerpt: "Điều kiện, quy trình, và những điều cần biết khi trả góp 0% qua thẻ tín dụng.",
    content: "Trả góp 0% là hình thức thanh toán giúp bạn chia nhỏ số tiền phải trả mà không chịu lãi suất.\n\nĐiều kiện:\n- Đơn hàng từ 5 triệu đồng\n- Thẻ tín dụng hỗ trợ: Visa, Mastercard, JCB\n- Thời gian: 3, 6, 9, 12 tháng\n\nQuy trình:\n1. Chọn sản phẩm và thêm vào giỏ\n2. Tại bước thanh toán, chọn 'Thẻ tín dụng'\n3. Chọn kỳ hạn trả góp\n4. Ngân hàng xác nhận và chia nhỏ khoản thanh toán\n\nLưu ý: Phí chuyển đổi có thể áp dụng tùy ngân hàng. Nexora hỗ trợ miễn phí chuyển đổi cho kỳ hạn 3-6 tháng.",
    category: "Hướng dẫn",
    author: "Nexora Editorial",
    publishedAt: "2026-07-05",
    readingTime: 4,
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "iphone-16-pro-max-danh-gian",
    title: "iPhone 16 Pro Max sau 2 tuần: Đáng nâng cấp?",
    excerpt: "Camera mới, chip A18 Pro, và pin — những thay đổi thực sự đáng tiền hay chỉ là nâng cấp nhỏ?",
    content: "Sau 2 tuần sử dụng iPhone 16 Pro Max, đây là những đánh giá thực tế.\n\nCamera: Camera 48MP mới cho ảnh chi tiết hơn điều kiện sáng tốt. Zoom 5x optical hữu ích cho chụp xa. Nhưng trong điều kiện thiếu sáng, khác biệt không đáng kể so với 15 Pro Max.\n\nChip A18 Pro: Hiệu năng tăng nhưng khó cảm nhận trong sử dụng hàng ngày. Game nặng mới thấy khác biệt.\n\nPin: Cải thiện rõ rệt — thêm khoảng 1.5 giờ so với thế hệ trước.\n\nKết luận: Nếu đang dùng 14 Pro Max hoặc cũ hơn, đáng nâng cấp. Nếu đang dùng 15 Pro Max, có thể chờ thêm.",
    category: "Đánh giá",
    author: "Nexora Editorial",
    publishedAt: "2026-06-28",
    readingTime: 8,
    coverImage: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "bao-mat-thiet-bi-2026",
    title: "Bảo mật thiết bị 2026: 5 thói quen nên có",
    excerpt: "Face ID, vân tay, 2FA — những thói quen đơn giản nhưng bảo vệ dữ liệu hiệu quả.",
    content: "Bảo mật thiết bị không cần phức tạp. 5 thói quen sau đủ để bảo vệ 90% rủi ro.\n\n1. Bật Face ID / vân tay — nhanh hơn mật khẩu và an toàn hơn\n2. Bật 2FA cho tài khoản quan trọng — email, ngân hàng, mạng xã hội\n3. Cập nhật hệ điều hành ngay khi có — bản vá thường chứa sửa lỗ hổng\n4. Không dùng chung mật khẩu — dùng trình quản lý mật khẩu\n5. Kiểm tra quyền ứng dụng định kỳ — gỡ quyền không cần thiết",
    category: "Mẹo vặt",
    author: "Nexora Editorial",
    publishedAt: "2026-06-20",
    readingTime: 3,
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
  },
];

export const blogCategories = [
  "Tất cả",
  "Hướng dẫn chọn mua",
  "So sánh",
  "Đánh giá",
  "Hướng dẫn",
  "Mẹo vặt",
] as const;
