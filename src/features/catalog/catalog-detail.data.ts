import type {
  CatalogBrand,
  CatalogCategory,
  CatalogProductDetail,
} from "./catalog.types";

export const catalogCategories: readonly CatalogCategory[] = [
  { id: "cat-laptop", name: "Laptop", slug: "laptop", description: "Laptop tuyển chọn cho học tập, làm việc và sáng tạo." },
  { id: "cat-dien-thoai", name: "Điện thoại", slug: "dien-thoai", description: "Smartphone cân bằng trải nghiệm, camera và thời gian hỗ trợ." },
  { id: "cat-phu-kien", name: "Phụ kiện", slug: "phu-kien", description: "Phụ kiện nâng cấp góc làm việc và trải nghiệm hằng ngày." },
  { id: "cat-am-thanh", name: "Âm thanh", slug: "am-thanh", description: "Tai nghe và loa cho trải nghiệm âm thanh đáng tin cậy." },
];

export const catalogBrands: readonly CatalogBrand[] = [
  { id: "brand-apple", name: "Apple", slug: "apple" },
  { id: "brand-asus", name: "ASUS", slug: "asus" },
  { id: "brand-samsung", name: "Samsung", slug: "samsung" },
  { id: "brand-sony", name: "Sony", slug: "sony" },
  { id: "brand-logitech", name: "Logitech", slug: "logitech" },
];

export const catalogProductDetails: readonly CatalogProductDetail[] = [
  {
    id: "macbook-air-m4",
    slug: "macbook-air-m4-13",
    name: "MacBook Air M4 13\"",
    category: "Laptop",
    categorySlug: "laptop",
    brand: "Apple",
    brandSlug: "apple",
    description:
      "Laptop mỏng nhẹ cho công việc hằng ngày, học tập và sáng tạo nội dung di động. Chip M4 mang lại hiệu năng đủ cho đa số tác vụ văn phòng, chỉnh sửa ảnh nhẹ và lập trình. Pin đến 18 giờ cho phép làm việc cả ngày không cần sạc.",
    shortDescription: "Mỏng nhẹ, pin dài và đủ mạnh cho phần lớn ngày làm việc.",
    price: 26_990_000,
    compareAtPrice: 28_990_000,
    verdict: "Mỏng nhẹ, pin dài và đủ mạnh cho phần lớn ngày làm việc.",
    highlights: [
      "Pin đến 18 giờ — làm việc cả ngày không sạc",
      "Mỏng 1,1 cm và nhẹ 1,24 kg — dễ mang theo",
      "Màn hình Liquid Retina 13,6 inch sáng và sắc nét",
      "Chip M4 đủ mạnh cho đa số tác vụ hằng ngày",
    ],
    considerations: [
      "Cổng duy nhất là USB-C — cần adapter cho thiết bị cũ",
      "RAM 16 GB là mức tối thiểu cho đa nhiệm nặng",
      "Không có tùy chọn màn hình OLED",
    ],
    specs: ["Apple M4", "RAM 16 GB", "SSD 256 GB", "Pin đến 18 giờ", "1,24 kg"],
    media: [
      { id: "mba-m4-1", url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=85", alt: "Laptop nhôm màu bạc mở trên bàn làm việc tối giản", type: "IMAGE", sortOrder: 0 },
      { id: "mba-m4-2", url: "https://images.unsplash.com/photo-1611180873613-9b5b11b19a62?auto=format&fit=crop&w=1200&q=85", alt: "Góc cạnh laptop bạc cho thấy độ mỏng", type: "IMAGE", sortOrder: 1 },
    ],
    variants: [
      { id: "v-mba-m4-16-256", sku: "MBA-M4-13-16-256-SLV", name: "16 GB / 256 GB / Bạc", attributes: { ram: "16 GB", storage: "256 GB", color: "Bạc" }, price: 26_990_000, compareAtPrice: 28_990_000, stock: 18, lowStockAt: 5 },
      { id: "v-mba-m4-16-512", sku: "MBA-M4-13-16-512-SLV", name: "16 GB / 512 GB / Bạc", attributes: { ram: "16 GB", storage: "512 GB", color: "Bạc" }, price: 29_990_000, compareAtPrice: 31_990_000, stock: 8, lowStockAt: 5 },
      { id: "v-mba-m4-24-512", sku: "MBA-M4-13-24-512-SLV", name: "24 GB / 512 GB / Bạc", attributes: { ram: "24 GB", storage: "512 GB", color: "Bạc" }, price: 33_990_000, stock: 3, lowStockAt: 5 },
    ],
    reviews: [
      { id: "r-mba-1", authorName: "Minh Anh", rating: 5, title: "Pin cực kỳ ấn tượng", content: "Mình làm việc cả ngày ở quán cà phê và không cần mang sạc. Mỏng nhẹ hơn mong đợi.", verified: true, createdAt: "2026-06-15T08:00:00Z" },
      { id: "r-mba-2", authorName: "Quốc Bảo", rating: 4, title: "Tốt nhưng cần adapter", content: "Máy rất nhanh nhưng chỉ có USB-C nên phải mua thêm adapter cho màn hình cũ.", verified: true, createdAt: "2026-06-20T10:30:00Z" },
    ],
    badge: "Nexora Pick",
    featured: true,
  },
  {
    id: "asus-zenbook-14-oled",
    slug: "asus-zenbook-14-oled-ux3405",
    name: "ASUS Zenbook 14 OLED",
    category: "Laptop",
    categorySlug: "laptop",
    brand: "ASUS",
    brandSlug: "asus",
    description:
      "Laptop Windows cao cấp với màn hình OLED 3K sắc nét và thiết kế di động. Intel Core Ultra 7 cân bằng hiệu năng và tiết kiệm pin. Màn hình OLED cho màu sắc sống động, lý tưởng cho người làm nội dung.",
    shortDescription: "Lựa chọn Windows cân bằng cho người cần màn hình xuất sắc.",
    price: 24_490_000,
    compareAtPrice: 26_990_000,
    verdict: "Lựa chọn Windows cân bằng cho người cần màn hình xuất sắc.",
    highlights: [
      "Màn hình OLED 3K 120 Hz — màu sắc sống động",
      "Intel Core Ultra 7 — cân bằng hiệu năng và pin",
      "Nhẹ 1,2 kg — dễ di chuyển",
      "Sạc nhanh USB-C",
    ],
    considerations: [
      "OLED có nguy cơ burn-in nếu hiển thị tĩnh lâu dài",
      "Pin ngắn hơn MacBook Air khoảng 2-3 giờ",
      "Loa tạm đủ, không ấn tượng cho giải trí",
    ],
    specs: ["OLED 3K 120 Hz", "Intel Core Ultra 7", "RAM 16 GB", "SSD 512 GB", "1,2 kg"],
    media: [
      { id: "zen-1", url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85", alt: "Laptop mỏng màu xám hiển thị màn hình sáng trên bàn gỗ", type: "IMAGE", sortOrder: 0 },
    ],
    variants: [
      { id: "v-zen-16-512", sku: "ASUS-UX3405-U7-16-512", name: "Core Ultra 7 / 16 GB / 512 GB", attributes: { processor: "Intel Core Ultra 7", ram: "16 GB", storage: "512 GB" }, price: 24_490_000, compareAtPrice: 26_990_000, stock: 12, lowStockAt: 5 },
      { id: "v-zen-32-512", sku: "ASUS-UX3405-U7-32-512", name: "Core Ultra 7 / 32 GB / 512 GB", attributes: { processor: "Intel Core Ultra 7", ram: "32 GB", storage: "512 GB" }, price: 27_990_000, stock: 4, lowStockAt: 5 },
    ],
    reviews: [
      { id: "r-zen-1", authorName: "Hoàng Nam", rating: 5, title: "Màn hình đẹp xuất sắc", content: "Màn hình OLED thật sự khác biệt khi chỉnh sửa ảnh. Màu sắc chính xác và độ sáng cao.", verified: true, createdAt: "2026-06-18T14:00:00Z" },
    ],
    badge: "Màn hình đẹp",
    featured: true,
  },
  {
    id: "iphone-16-pro",
    slug: "iphone-16-pro",
    name: "iPhone 16 Pro",
    category: "Điện thoại",
    categorySlug: "dien-thoai",
    brand: "Apple",
    brandSlug: "apple",
    description:
      "Điện thoại cao cấp với hệ camera linh hoạt và hiệu năng ổn định dài hạn. Camera tele 5x cho phép chụp xa rõ nét. A18 Pro đảm bảo mượt mà cho mọi tác vụ và trò chơi. Thời gian hỗ trợ lên đến 5 năm.",
    shortDescription: "Camera ổn định và hiệu năng bền cho người làm nội dung.",
    price: 28_490_000,
    compareAtPrice: 30_990_000,
    verdict: "Camera ổn định và hiệu năng bền cho người làm nội dung.",
    highlights: [
      "Camera tele 5x — chụp xa không mất chi tiết",
      "A18 Pro — mượt mà cho mọi trò chơi",
      "Màn hình 120 Hz ProMotion",
      "Hỗ trợ cập nhật 5+ năm",
    ],
    considerations: [
      "Giá cao hơn đáng kể so với iPhone 16 thường",
      "Pin không cải thiện nhiều so với thế hệ trước",
      "Sạc vẫn chậm (20W) so với Android",
    ],
    specs: ["A18 Pro", "Camera tele 5x", "Màn hình 120 Hz", "Titan", "USB-C"],
    media: [
      { id: "ip16p-1", url: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=85", alt: "Điện thoại màu tối đặt nghiêng trên bề mặt trung tính", type: "IMAGE", sortOrder: 0 },
    ],
    variants: [
      { id: "v-ip16p-128", sku: "IP16P-128-BLK", name: "128 GB / Titan đen", attributes: { storage: "128 GB", color: "Titan đen" }, price: 28_490_000, compareAtPrice: 30_990_000, stock: 24, lowStockAt: 5 },
      { id: "v-ip16p-256", sku: "IP16P-256-BLK", name: "256 GB / Titan đen", attributes: { storage: "256 GB", color: "Titan đen" }, price: 30_990_000, compareAtPrice: 32_990_000, stock: 15, lowStockAt: 5 },
      { id: "v-ip16p-512", sku: "IP16P-512-BLK", name: "512 GB / Titan đen", attributes: { storage: "512 GB", color: "Titan đen" }, price: 34_990_000, stock: 6, lowStockAt: 5 },
    ],
    reviews: [
      { id: "r-ip16p-1", authorName: "Linh Đan", rating: 5, title: "Camera tele 5x quá tuyệt", content: "Chụp concert ở hàng ghế xa mà vẫn rõ mặt. Camera đêm cũng cải thiện rõ rệt.", verified: true, createdAt: "2026-06-22T12:00:00Z" },
      { id: "r-ip16p-2", authorName: "Đức Huy", rating: 4, title: "Máy ngon nhưng sạc chậm", content: "Mọi thứ đều tốt trừ tốc độ sạc. 20W thời 2026 là hơi chậm.", verified: false, createdAt: "2026-06-25T09:15:00Z" },
    ],
    badge: "Creator choice",
    featured: true,
  },
  {
    id: "galaxy-s25",
    slug: "samsung-galaxy-s25",
    name: "Samsung Galaxy S25",
    category: "Điện thoại",
    categorySlug: "dien-thoai",
    brand: "Samsung",
    brandSlug: "samsung",
    description:
      "Smartphone Android nhỏ gọn với màn hình sáng và thời gian cập nhật dài. Snapdragon 8 Elite mang lại hiệu năng hàng đầu. Galaxy AI hỗ trợ nhiều tác vụ hằng ngày. Cam kết 7 năm cập nhật phần mềm.",
    shortDescription: "Nhỏ gọn, màn hình sáng và nhiều tính năng hỗ trợ hằng ngày.",
    price: 20_990_000,
    compareAtPrice: 22_990_000,
    verdict: "Nhỏ gọn, màn hình sáng và nhiều tính năng hỗ trợ hằng ngày.",
    highlights: [
      "Snapdragon 8 Elite — hiệu năng hàng đầu",
      "Galaxy AI — trợ lý thông minh cho tác vụ hằng ngày",
      "7 năm cập nhật phần mềm",
      "Màn hình sáng 2600 nits ngoài trời",
    ],
    considerations: [
      "Pin trung bình so với đối thủ cùng tầm",
      "Galaxy AI một số tính năng cần internet",
      "Không có tùy chọn RAM cao hơn",
    ],
    specs: ["Snapdragon 8 Elite", "Galaxy AI", "Màn hình 120 Hz", "7 năm cập nhật", "256 GB"],
    media: [
      { id: "gs25-1", url: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=85", alt: "Điện thoại Samsung màu tím nhạt nhìn từ mặt lưng", type: "IMAGE", sortOrder: 0 },
    ],
    variants: [
      { id: "v-gs25-256", sku: "SS-S25-256-NAVY", name: "256 GB / Navy", attributes: { storage: "256 GB", color: "Navy" }, price: 20_990_000, compareAtPrice: 22_990_000, stock: 31, lowStockAt: 5 },
      { id: "v-gs25-512", sku: "SS-S25-512-NAVY", name: "512 GB / Navy", attributes: { storage: "512 GB", color: "Navy" }, price: 23_490_000, stock: 10, lowStockAt: 5 },
    ],
    reviews: [
      { id: "r-gs25-1", authorName: "Phương Thảo", rating: 5, title: "Nhỏ gọn và mạnh", content: "Sau khi dùng Note rồi S25, thấy S25 nhẹ và gọn hơn nhiều mà vẫn đủ nhanh.", verified: true, createdAt: "2026-06-28T16:00:00Z" },
    ],
    badge: "AI tiện dụng",
    featured: true,
  },
  {
    id: "sony-wh1000xm5",
    slug: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    category: "Âm thanh",
    categorySlug: "am-thanh",
    brand: "Sony",
    brandSlug: "sony",
    description:
      "Tai nghe không dây chống ồn chủ động cho công việc tập trung và di chuyển. ANC thích ứng tự động theo môi trường. Pin 30 giờ đủ cho chuyến bay dài. Multipoint cho phép kết nối 2 thiết bị cùng lúc.",
    shortDescription: "Không gian tập trung đáng tin cậy cho văn phòng và chuyến bay.",
    price: 7_490_000,
    compareAtPrice: 8_490_000,
    verdict: "Không gian tập trung đáng tin cậy cho văn phòng và chuyến bay.",
    highlights: [
      "ANC thích ứng — chống ồn tốt nhất trong tầm giá",
      "Pin 30 giờ — đủ cho chuyến bay dài",
      "Multipoint — chuyển giữa laptop và điện thoại",
      "Nhẹ 250 g — đeo lâu không mỏi",
    ],
    considerations: [
      "Thiết kế không gập gọn như thế hệ XM4",
      "Giá vẫn cao so với đối thủ khác",
      "Âm thanh bass hơi mạnh cho người thích trung tính",
    ],
    specs: ["ANC thích ứng", "Pin 30 giờ", "Multipoint", "Bluetooth 5.2", "250 g"],
    media: [
      { id: "sony-1", url: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=85", alt: "Tai nghe chụp tai màu đen trên nền tối", type: "IMAGE", sortOrder: 0 },
    ],
    variants: [
      { id: "v-sony-blk", sku: "SONY-WH1000XM5-BLK", name: "Đen", attributes: { color: "Đen" }, price: 7_490_000, compareAtPrice: 8_490_000, stock: 20, lowStockAt: 5 },
      { id: "v-sony-slv", sku: "SONY-WH1000XM5-SLV", name: "Bạc", attributes: { color: "Bạc" }, price: 7_490_000, compareAtPrice: 8_490_000, stock: 7, lowStockAt: 5 },
    ],
    reviews: [
      { id: "r-sony-1", authorName: "Trí Tuấn", rating: 5, title: "ANC đỉnh cho open office", content: "Ngồi văn phòng ồn mà đeo vào là yên tĩnh ngay. Pin dùng 3 ngày không sạc.", verified: true, createdAt: "2026-07-01T11:00:00Z" },
    ],
    badge: "Chống ồn tốt",
    featured: true,
  },
  {
    id: "logitech-mx-master-3s",
    slug: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S",
    category: "Phụ kiện",
    categorySlug: "phu-kien",
    brand: "Logitech",
    brandSlug: "logitech",
    description:
      "Chuột không dây công thái học với cuộn điện từ và kết nối đa thiết bị. Cảm biến 8K DPI chính xác cho mọi bề mặt. Nút bấm yên tĩnh hơn 90% so với MX Master 3. Chuyển 3 thiết bị chỉ bằng một nút.",
    shortDescription: "Chuột làm việc yên tĩnh, chính xác và chuyển thiết bị rất nhanh.",
    price: 2_190_000,
    compareAtPrice: 2_490_000,
    verdict: "Chuột làm việc yên tĩnh, chính xác và chuyển thiết bị rất nhanh.",
    highlights: [
      "Cảm biến 8K DPI — chính xác trên mọi bề mặt",
      "Kết nối 3 thiết bị — chuyển nhanh bằng nút",
      "Cuộn MagSpeed — cuộn 1000 dòng trong 1 giây",
      "Pin 70 ngày — sạc nhanh 1 phút = 3 giờ dùng",
    ],
    considerations: [
      "Nặng 141 g — không phù hợp người thích chuột nhẹ",
      "Nút bấm yên tĩnh nhưng phản hồi hơi mờ",
      "Giá cao hơn chuột văn phòng thông thường",
    ],
    specs: ["Cảm biến 8K DPI", "Kết nối 3 thiết bị", "Cuộn MagSpeed", "Pin 70 ngày", "USB-C"],
    media: [
      { id: "logi-1", url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=85", alt: "Chuột công thái học màu đen cạnh bàn phím", type: "IMAGE", sortOrder: 0 },
    ],
    variants: [
      { id: "v-logi-graphite", sku: "LOGI-MX-MASTER-3S-GRAPHITE", name: "Graphite", attributes: { color: "Graphite" }, price: 2_190_000, compareAtPrice: 2_490_000, stock: 46, lowStockAt: 5 },
      { id: "v-logi-white", sku: "LOGI-MX-MASTER-3S-WHITE", name: "Trắng", attributes: { color: "Trắng" }, price: 2_290_000, stock: 12, lowStockAt: 5 },
    ],
    reviews: [
      { id: "r-logi-1", authorName: "Bảo Trân", rating: 5, title: "Chuột tốt nhất từng dùng", content: "Chuyển giữa laptop và desktop chỉ bằng 1 nút. Cuộn MagSpeed quá tiện khi đọc tài liệu dài.", verified: true, createdAt: "2026-07-05T13:30:00Z" },
    ],
    featured: true,
  },
];
