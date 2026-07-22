import type {
  CatalogBrand,
  CatalogCategory,
  CatalogProductDetail,
} from "./catalog.types";

export const catalogCategories: readonly CatalogCategory[] = [
  {
    "id": "cat-laptop",
    "slug": "laptop",
    "name": "Laptop",
    "description": "Laptop tuyển chọn cho học tập, làm việc và sáng tạo."
  },
  {
    "id": "cat-dien-thoai",
    "slug": "dien-thoai",
    "name": "Điện thoại",
    "description": "Smartphone cân bằng trải nghiệm, camera và thời gian hỗ trợ."
  },
  {
    "id": "cat-phu-kien",
    "slug": "phu-kien",
    "name": "Phụ kiện",
    "description": "Phụ kiện nâng cấp góc làm việc và trải nghiệm hằng ngày."
  },
  {
    "id": "cat-am-thanh",
    "slug": "am-thanh",
    "name": "Âm thanh",
    "description": "Tai nghe và loa cho trải nghiệm âm thanh đáng tin cậy."
  },
  {
    "id": "cat-may-tinh-bang",
    "slug": "may-tinh-bang",
    "name": "Máy tính bảng",
    "description": "Máy tính bảng cho giải trí, ghi chú và sáng tạo di động."
  },
  {
    "id": "cat-dong-ho-thong-minh",
    "slug": "dong-ho-thong-minh",
    "name": "Đồng hồ thông minh",
    "description": "Thiết bị đeo theo dõi sức khỏe và kết nối liền mạch."
  },
  {
    "id": "cat-gaming",
    "slug": "gaming",
    "name": "Gaming Gear",
    "description": "Thiết bị chơi game cho trải nghiệm phản hồi nhanh và bền bỉ."
  },
  {
    "id": "cat-man-hinh",
    "slug": "man-hinh",
    "name": "Màn hình",
    "description": "Màn hình làm việc và giải trí với màu sắc chính xác."
  }
];

export const catalogBrands: readonly CatalogBrand[] = [
  {
    "id": "brand-apple",
    "slug": "apple",
    "name": "Apple"
  },
  {
    "id": "brand-asus",
    "slug": "asus",
    "name": "ASUS"
  },
  {
    "id": "brand-samsung",
    "slug": "samsung",
    "name": "Samsung"
  },
  {
    "id": "brand-sony",
    "slug": "sony",
    "name": "Sony"
  },
  {
    "id": "brand-logitech",
    "slug": "logitech",
    "name": "Logitech"
  },
  {
    "id": "brand-dell",
    "slug": "dell",
    "name": "Dell"
  },
  {
    "id": "brand-hp",
    "slug": "hp",
    "name": "HP"
  },
  {
    "id": "brand-lenovo",
    "slug": "lenovo",
    "name": "Lenovo"
  },
  {
    "id": "brand-msi",
    "slug": "msi",
    "name": "MSI"
  },
  {
    "id": "brand-acer",
    "slug": "acer",
    "name": "Acer"
  },
  {
    "id": "brand-lg",
    "slug": "lg",
    "name": "LG"
  },
  {
    "id": "brand-xiaomi",
    "slug": "xiaomi",
    "name": "Xiaomi"
  },
  {
    "id": "brand-oppo",
    "slug": "oppo",
    "name": "OPPO"
  },
  {
    "id": "brand-google",
    "slug": "google",
    "name": "Google"
  },
  {
    "id": "brand-oneplus",
    "slug": "oneplus",
    "name": "OnePlus"
  },
  {
    "id": "brand-anker",
    "slug": "anker",
    "name": "Anker"
  },
  {
    "id": "brand-belkin",
    "slug": "belkin",
    "name": "Belkin"
  },
  {
    "id": "brand-baseus",
    "slug": "baseus",
    "name": "Baseus"
  },
  {
    "id": "brand-jbl",
    "slug": "jbl",
    "name": "JBL"
  },
  {
    "id": "brand-bose",
    "slug": "bose",
    "name": "Bose"
  },
  {
    "id": "brand-sennheiser",
    "slug": "sennheiser",
    "name": "Sennheiser"
  },
  {
    "id": "brand-marshall",
    "slug": "marshall",
    "name": "Marshall"
  },
  {
    "id": "brand-garmin",
    "slug": "garmin",
    "name": "Garmin"
  },
  {
    "id": "brand-razer",
    "slug": "razer",
    "name": "Razer"
  },
  {
    "id": "brand-corsair",
    "slug": "corsair",
    "name": "Corsair"
  },
  {
    "id": "brand-steelseries",
    "slug": "steelseries",
    "name": "SteelSeries"
  }
];

export const catalogProductDetails: readonly CatalogProductDetail[] = [
  {
    "id": "macbook-air-m4-13",
    "slug": "macbook-air-m4-13",
    "name": "MacBook Air M4 13\"",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Mỏng nhẹ, pin dài và đủ mạnh cho phần lớn ngày làm việc. Apple M4, RAM 16 GB, Pin đến 18 giờ.",
    "shortDescription": "Mỏng nhẹ, pin dài và đủ mạnh cho phần lớn ngày làm việc.",
    "price": 26990000,
    "compareAtPrice": 29150000,
    "verdict": "Mỏng nhẹ, pin dài và đủ mạnh cho phần lớn ngày làm việc.",
    "highlights": [
      "Apple M4 — điểm mạnh đáng chú ý của sản phẩm",
      "RAM 16 GB — điểm mạnh đáng chú ý của sản phẩm",
      "Pin đến 18 giờ — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Apple M4",
      "RAM 16 GB",
      "Pin đến 18 giờ"
    ],
    "media": [
      {
        "id": "macbook-air-m4-13-media-1",
        "url": "https://picsum.photos/seed/macbook-air-m4-13-a/1200/1200",
        "alt": "MacBook Air M4 13\"",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "macbook-air-m4-13-media-2",
        "url": "https://picsum.photos/seed/macbook-air-m4-13-b/1200/1200",
        "alt": "MacBook Air M4 13\" — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-macbook-air-m4-13-0",
        "sku": "MACBOOK-AIR-M4-13-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 26990000,
        "compareAtPrice": 29150000,
        "stock": 7,
        "lowStockAt": 5
      },
      {
        "id": "v-macbook-air-m4-13-1",
        "sku": "MACBOOK-AIR-M4-13-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 31040000,
        "stock": 15,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-macbook-air-m4-13-1",
        "authorName": "Phương Thảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-macbook-air-m4-13-2",
        "authorName": "Linh Đan",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Nexora Pick",
    "featured": true
  },
  {
    "id": "asus-zenbook-14-oled",
    "slug": "asus-zenbook-14-oled",
    "name": "ASUS Zenbook 14 OLED",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "ASUS",
    "brandSlug": "asus",
    "description": "Lựa chọn Windows cân bằng cho người cần màn hình xuất sắc. OLED 3K 120 Hz, Intel Core Ultra 7, 1,2 kg.",
    "shortDescription": "Lựa chọn Windows cân bằng cho người cần màn hình xuất sắc.",
    "price": 24490000,
    "compareAtPrice": 26450000,
    "verdict": "Lựa chọn Windows cân bằng cho người cần màn hình xuất sắc.",
    "highlights": [
      "OLED 3K 120 Hz — điểm mạnh đáng chú ý của sản phẩm",
      "Intel Core Ultra 7 — điểm mạnh đáng chú ý của sản phẩm",
      "1,2 kg — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "OLED 3K 120 Hz",
      "Intel Core Ultra 7",
      "1,2 kg"
    ],
    "media": [
      {
        "id": "asus-zenbook-14-oled-media-1",
        "url": "https://picsum.photos/seed/asus-zenbook-14-oled-a/1200/1200",
        "alt": "ASUS Zenbook 14 OLED",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "asus-zenbook-14-oled-media-2",
        "url": "https://picsum.photos/seed/asus-zenbook-14-oled-b/1200/1200",
        "alt": "ASUS Zenbook 14 OLED — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-asus-zenbook-14-oled-0",
        "sku": "ASUS-ZENBOOK-14-OLED-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 24490000,
        "compareAtPrice": 26450000,
        "stock": 45,
        "lowStockAt": 5
      },
      {
        "id": "v-asus-zenbook-14-oled-1",
        "sku": "ASUS-ZENBOOK-14-OLED-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 28160000,
        "stock": 26,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-asus-zenbook-14-oled-1",
        "authorName": "Hải Đăng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-asus-zenbook-14-oled-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Màn hình đẹp",
    "featured": true
  },
  {
    "id": "macbook-pro-14-m4-pro",
    "slug": "macbook-pro-14-m4-pro",
    "name": "MacBook Pro 14 M4 Pro",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Hiệu năng mạnh cho dựng phim và lập trình chuyên sâu. Apple M4 Pro, RAM 24 GB, Màn hình Liquid Retina XDR.",
    "shortDescription": "Hiệu năng mạnh cho dựng phim và lập trình chuyên sâu.",
    "price": 52990000,
    "compareAtPrice": 57230000,
    "verdict": "Hiệu năng mạnh cho dựng phim và lập trình chuyên sâu.",
    "highlights": [
      "Apple M4 Pro — điểm mạnh đáng chú ý của sản phẩm",
      "RAM 24 GB — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình Liquid Retina XDR — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Apple M4 Pro",
      "RAM 24 GB",
      "Màn hình Liquid Retina XDR"
    ],
    "media": [
      {
        "id": "macbook-pro-14-m4-pro-media-1",
        "url": "https://picsum.photos/seed/macbook-pro-14-m4-pro-a/1200/1200",
        "alt": "MacBook Pro 14 M4 Pro",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "macbook-pro-14-m4-pro-media-2",
        "url": "https://picsum.photos/seed/macbook-pro-14-m4-pro-b/1200/1200",
        "alt": "MacBook Pro 14 M4 Pro — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-macbook-pro-14-m4-pro-0",
        "sku": "MACBOOK-PRO-14-M4-PRO-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 52990000,
        "compareAtPrice": 57230000,
        "stock": 24,
        "lowStockAt": 5
      },
      {
        "id": "v-macbook-pro-14-m4-pro-1",
        "sku": "MACBOOK-PRO-14-M4-PRO-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 60940000,
        "stock": 39,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-macbook-pro-14-m4-pro-1",
        "authorName": "Linh Đan",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-macbook-pro-14-m4-pro-2",
        "authorName": "Anh Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Hiệu năng cao",
    "featured": false
  },
  {
    "id": "macbook-air-15-m3",
    "slug": "macbook-air-15-m3",
    "name": "MacBook Air 15 M3",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Màn hình lớn hơn cho ai cần không gian làm việc rộng. Apple M3, Màn hình 15 inch, Pin đến 18 giờ.",
    "shortDescription": "Màn hình lớn hơn cho ai cần không gian làm việc rộng.",
    "price": 32990000,
    "compareAtPrice": 35630000,
    "verdict": "Màn hình lớn hơn cho ai cần không gian làm việc rộng.",
    "highlights": [
      "Apple M3 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 15 inch — điểm mạnh đáng chú ý của sản phẩm",
      "Pin đến 18 giờ — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Apple M3",
      "Màn hình 15 inch",
      "Pin đến 18 giờ"
    ],
    "media": [
      {
        "id": "macbook-air-15-m3-media-1",
        "url": "https://picsum.photos/seed/macbook-air-15-m3-a/1200/1200",
        "alt": "MacBook Air 15 M3",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "macbook-air-15-m3-media-2",
        "url": "https://picsum.photos/seed/macbook-air-15-m3-b/1200/1200",
        "alt": "MacBook Air 15 M3 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-macbook-air-15-m3-0",
        "sku": "MACBOOK-AIR-15-M3-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 32990000,
        "compareAtPrice": 35630000,
        "stock": 40,
        "lowStockAt": 5
      },
      {
        "id": "v-macbook-air-15-m3-1",
        "sku": "MACBOOK-AIR-15-M3-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 37940000,
        "stock": 6,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-macbook-air-15-m3-1",
        "authorName": "Bích Ngọc",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-macbook-air-15-m3-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "asus-rog-zephyrus-g14",
    "slug": "asus-rog-zephyrus-g14",
    "name": "ASUS ROG Zephyrus G14",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "ASUS",
    "brandSlug": "asus",
    "description": "Laptop gaming mỏng nhẹ hiếm có, đủ mạnh để chiến game AAA. AMD Ryzen AI 9, RTX 4060, Màn hình 120 Hz.",
    "shortDescription": "Laptop gaming mỏng nhẹ hiếm có, đủ mạnh để chiến game AAA.",
    "price": 38990000,
    "compareAtPrice": 42110000,
    "verdict": "Laptop gaming mỏng nhẹ hiếm có, đủ mạnh để chiến game AAA.",
    "highlights": [
      "AMD Ryzen AI 9 — điểm mạnh đáng chú ý của sản phẩm",
      "RTX 4060 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 120 Hz — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "AMD Ryzen AI 9",
      "RTX 4060",
      "Màn hình 120 Hz"
    ],
    "media": [
      {
        "id": "asus-rog-zephyrus-g14-media-1",
        "url": "https://picsum.photos/seed/asus-rog-zephyrus-g14-a/1200/1200",
        "alt": "ASUS ROG Zephyrus G14",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "asus-rog-zephyrus-g14-media-2",
        "url": "https://picsum.photos/seed/asus-rog-zephyrus-g14-b/1200/1200",
        "alt": "ASUS ROG Zephyrus G14 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-asus-rog-zephyrus-g14-0",
        "sku": "ASUS-ROG-ZEPHYRUS-G14-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 38990000,
        "compareAtPrice": 42110000,
        "stock": 18,
        "lowStockAt": 5
      },
      {
        "id": "v-asus-rog-zephyrus-g14-1",
        "sku": "ASUS-ROG-ZEPHYRUS-G14-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 44840000,
        "stock": 16,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-asus-rog-zephyrus-g14-1",
        "authorName": "Đức Huy",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-asus-rog-zephyrus-g14-2",
        "authorName": "Bảo Trân",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "asus-vivobook-s14-oled",
    "slug": "asus-vivobook-s14-oled",
    "name": "ASUS Vivobook S14 OLED",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "ASUS",
    "brandSlug": "asus",
    "description": "Màn hình OLED giá tốt cho học tập và văn phòng. OLED 2.8K, Intel Core Ultra 5, 1,3 kg.",
    "shortDescription": "Màn hình OLED giá tốt cho học tập và văn phòng.",
    "price": 19990000,
    "compareAtPrice": 21590000,
    "verdict": "Màn hình OLED giá tốt cho học tập và văn phòng.",
    "highlights": [
      "OLED 2.8K — điểm mạnh đáng chú ý của sản phẩm",
      "Intel Core Ultra 5 — điểm mạnh đáng chú ý của sản phẩm",
      "1,3 kg — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "OLED 2.8K",
      "Intel Core Ultra 5",
      "1,3 kg"
    ],
    "media": [
      {
        "id": "asus-vivobook-s14-oled-media-1",
        "url": "https://picsum.photos/seed/asus-vivobook-s14-oled-a/1200/1200",
        "alt": "ASUS Vivobook S14 OLED",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "asus-vivobook-s14-oled-media-2",
        "url": "https://picsum.photos/seed/asus-vivobook-s14-oled-b/1200/1200",
        "alt": "ASUS Vivobook S14 OLED — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-asus-vivobook-s14-oled-0",
        "sku": "ASUS-VIVOBOOK-S14-OLED-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 19990000,
        "compareAtPrice": 21590000,
        "stock": 16,
        "lowStockAt": 5
      },
      {
        "id": "v-asus-vivobook-s14-oled-1",
        "sku": "ASUS-VIVOBOOK-S14-OLED-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 22990000,
        "stock": 10,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-asus-vivobook-s14-oled-1",
        "authorName": "Quốc Bảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-asus-vivobook-s14-oled-2",
        "authorName": "Hải Đăng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "dell-xps-13",
    "slug": "dell-xps-13",
    "name": "Dell XPS 13",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Dell",
    "brandSlug": "dell",
    "description": "Thiết kế cao cấp, viền màn hình siêu mỏng. Intel Core Ultra 7, Màn hình InfinityEdge, RAM 16 GB.",
    "shortDescription": "Thiết kế cao cấp, viền màn hình siêu mỏng.",
    "price": 29990000,
    "compareAtPrice": 32390000,
    "verdict": "Thiết kế cao cấp, viền màn hình siêu mỏng.",
    "highlights": [
      "Intel Core Ultra 7 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình InfinityEdge — điểm mạnh đáng chú ý của sản phẩm",
      "RAM 16 GB — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Intel Core Ultra 7",
      "Màn hình InfinityEdge",
      "RAM 16 GB"
    ],
    "media": [
      {
        "id": "dell-xps-13-media-1",
        "url": "https://picsum.photos/seed/dell-xps-13-a/1200/1200",
        "alt": "Dell XPS 13",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "dell-xps-13-media-2",
        "url": "https://picsum.photos/seed/dell-xps-13-b/1200/1200",
        "alt": "Dell XPS 13 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-dell-xps-13-0",
        "sku": "DELL-XPS-13-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 29990000,
        "compareAtPrice": 32390000,
        "stock": 35,
        "lowStockAt": 5
      },
      {
        "id": "v-dell-xps-13-1",
        "sku": "DELL-XPS-13-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 34490000,
        "stock": 25,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-dell-xps-13-1",
        "authorName": "Bích Ngọc",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-dell-xps-13-2",
        "authorName": "Hải Đăng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "dell-xps-14",
    "slug": "dell-xps-14",
    "name": "Dell XPS 14",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Dell",
    "brandSlug": "dell",
    "description": "Cân bằng giữa sáng tạo nội dung và di động. Intel Core Ultra 7, RTX 4050, Màn hình OLED 3.2K.",
    "shortDescription": "Cân bằng giữa sáng tạo nội dung và di động.",
    "price": 36990000,
    "compareAtPrice": 39950000,
    "verdict": "Cân bằng giữa sáng tạo nội dung và di động.",
    "highlights": [
      "Intel Core Ultra 7 — điểm mạnh đáng chú ý của sản phẩm",
      "RTX 4050 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình OLED 3.2K — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Intel Core Ultra 7",
      "RTX 4050",
      "Màn hình OLED 3.2K"
    ],
    "media": [
      {
        "id": "dell-xps-14-media-1",
        "url": "https://picsum.photos/seed/dell-xps-14-a/1200/1200",
        "alt": "Dell XPS 14",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "dell-xps-14-media-2",
        "url": "https://picsum.photos/seed/dell-xps-14-b/1200/1200",
        "alt": "Dell XPS 14 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-dell-xps-14-0",
        "sku": "DELL-XPS-14-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 36990000,
        "compareAtPrice": 39950000,
        "stock": 15,
        "lowStockAt": 5
      },
      {
        "id": "v-dell-xps-14-1",
        "sku": "DELL-XPS-14-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 42540000,
        "stock": 18,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-dell-xps-14-1",
        "authorName": "Hoàng Nam",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-dell-xps-14-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "dell-inspiron-14-plus",
    "slug": "dell-inspiron-14-plus",
    "name": "Dell Inspiron 14 Plus",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Dell",
    "brandSlug": "dell",
    "description": "Lựa chọn phổ thông ổn định cho công việc hằng ngày. Intel Core i5, RAM 16 GB, SSD 512 GB.",
    "shortDescription": "Lựa chọn phổ thông ổn định cho công việc hằng ngày.",
    "price": 17990000,
    "compareAtPrice": 19430000,
    "verdict": "Lựa chọn phổ thông ổn định cho công việc hằng ngày.",
    "highlights": [
      "Intel Core i5 — điểm mạnh đáng chú ý của sản phẩm",
      "RAM 16 GB — điểm mạnh đáng chú ý của sản phẩm",
      "SSD 512 GB — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Intel Core i5",
      "RAM 16 GB",
      "SSD 512 GB"
    ],
    "media": [
      {
        "id": "dell-inspiron-14-plus-media-1",
        "url": "https://picsum.photos/seed/dell-inspiron-14-plus-a/1200/1200",
        "alt": "Dell Inspiron 14 Plus",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "dell-inspiron-14-plus-media-2",
        "url": "https://picsum.photos/seed/dell-inspiron-14-plus-b/1200/1200",
        "alt": "Dell Inspiron 14 Plus — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-dell-inspiron-14-plus-0",
        "sku": "DELL-INSPIRON-14-PLUS-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 17990000,
        "compareAtPrice": 19430000,
        "stock": 26,
        "lowStockAt": 5
      },
      {
        "id": "v-dell-inspiron-14-plus-1",
        "sku": "DELL-INSPIRON-14-PLUS-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 20690000,
        "stock": 15,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-dell-inspiron-14-plus-1",
        "authorName": "Thanh Tùng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-dell-inspiron-14-plus-2",
        "authorName": "Gia Hân",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "hp-spectre-x360-14",
    "slug": "hp-spectre-x360-14",
    "name": "HP Spectre x360 14",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "HP",
    "brandSlug": "hp",
    "description": "Máy 2 trong 1 sang trọng, linh hoạt cho ghi chú và trình chiếu. Intel Core Ultra 7, Màn hình cảm ứng gập 360°, Bút cảm ứng đi kèm.",
    "shortDescription": "Máy 2 trong 1 sang trọng, linh hoạt cho ghi chú và trình chiếu.",
    "price": 33990000,
    "compareAtPrice": 36710000,
    "verdict": "Máy 2 trong 1 sang trọng, linh hoạt cho ghi chú và trình chiếu.",
    "highlights": [
      "Intel Core Ultra 7 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình cảm ứng gập 360° — điểm mạnh đáng chú ý của sản phẩm",
      "Bút cảm ứng đi kèm — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Intel Core Ultra 7",
      "Màn hình cảm ứng gập 360°",
      "Bút cảm ứng đi kèm"
    ],
    "media": [
      {
        "id": "hp-spectre-x360-14-media-1",
        "url": "https://picsum.photos/seed/hp-spectre-x360-14-a/1200/1200",
        "alt": "HP Spectre x360 14",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "hp-spectre-x360-14-media-2",
        "url": "https://picsum.photos/seed/hp-spectre-x360-14-b/1200/1200",
        "alt": "HP Spectre x360 14 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-hp-spectre-x360-14-0",
        "sku": "HP-SPECTRE-X360-14-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 33990000,
        "compareAtPrice": 36710000,
        "stock": 43,
        "lowStockAt": 5
      },
      {
        "id": "v-hp-spectre-x360-14-1",
        "sku": "HP-SPECTRE-X360-14-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 39090000,
        "stock": 36,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-hp-spectre-x360-14-1",
        "authorName": "Hoàng Nam",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-hp-spectre-x360-14-2",
        "authorName": "Hải Đăng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "hp-pavilion-plus-14",
    "slug": "hp-pavilion-plus-14",
    "name": "HP Pavilion Plus 14",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "HP",
    "brandSlug": "hp",
    "description": "OLED giá hợp lý cho sinh viên và người mới đi làm. Intel Core i5, Màn hình OLED, 1,4 kg.",
    "shortDescription": "OLED giá hợp lý cho sinh viên và người mới đi làm.",
    "price": 18990000,
    "compareAtPrice": 20510000,
    "verdict": "OLED giá hợp lý cho sinh viên và người mới đi làm.",
    "highlights": [
      "Intel Core i5 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình OLED — điểm mạnh đáng chú ý của sản phẩm",
      "1,4 kg — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Intel Core i5",
      "Màn hình OLED",
      "1,4 kg"
    ],
    "media": [
      {
        "id": "hp-pavilion-plus-14-media-1",
        "url": "https://picsum.photos/seed/hp-pavilion-plus-14-a/1200/1200",
        "alt": "HP Pavilion Plus 14",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "hp-pavilion-plus-14-media-2",
        "url": "https://picsum.photos/seed/hp-pavilion-plus-14-b/1200/1200",
        "alt": "HP Pavilion Plus 14 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-hp-pavilion-plus-14-0",
        "sku": "HP-PAVILION-PLUS-14-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 18990000,
        "compareAtPrice": 20510000,
        "stock": 42,
        "lowStockAt": 5
      },
      {
        "id": "v-hp-pavilion-plus-14-1",
        "sku": "HP-PAVILION-PLUS-14-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 21840000,
        "stock": 9,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-hp-pavilion-plus-14-1",
        "authorName": "Minh Anh",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-hp-pavilion-plus-14-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "hp-omen-16",
    "slug": "hp-omen-16",
    "name": "HP Omen 16",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "HP",
    "brandSlug": "hp",
    "description": "Laptop gaming hiệu năng cao với tản nhiệt cải tiến. AMD Ryzen 9, RTX 4070, Màn hình 165 Hz.",
    "shortDescription": "Laptop gaming hiệu năng cao với tản nhiệt cải tiến.",
    "price": 34990000,
    "compareAtPrice": 37790000,
    "verdict": "Laptop gaming hiệu năng cao với tản nhiệt cải tiến.",
    "highlights": [
      "AMD Ryzen 9 — điểm mạnh đáng chú ý của sản phẩm",
      "RTX 4070 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 165 Hz — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "AMD Ryzen 9",
      "RTX 4070",
      "Màn hình 165 Hz"
    ],
    "media": [
      {
        "id": "hp-omen-16-media-1",
        "url": "https://picsum.photos/seed/hp-omen-16-a/1200/1200",
        "alt": "HP Omen 16",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "hp-omen-16-media-2",
        "url": "https://picsum.photos/seed/hp-omen-16-b/1200/1200",
        "alt": "HP Omen 16 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-hp-omen-16-0",
        "sku": "HP-OMEN-16-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 34990000,
        "compareAtPrice": 37790000,
        "stock": 12,
        "lowStockAt": 5
      },
      {
        "id": "v-hp-omen-16-1",
        "sku": "HP-OMEN-16-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 40240000,
        "stock": 42,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-hp-omen-16-1",
        "authorName": "Thu Hương",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-hp-omen-16-2",
        "authorName": "Đức Huy",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "lenovo-thinkpad-x1-carbon-gen-12",
    "slug": "lenovo-thinkpad-x1-carbon-gen-12",
    "name": "Lenovo ThinkPad X1 Carbon Gen 12",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Lenovo",
    "brandSlug": "lenovo",
    "description": "Độ bền và bàn phím hàng đầu cho doanh nhân di chuyển nhiều. Intel Core Ultra 7, Bàn phím ThinkPad huyền thoại, 1,12 kg.",
    "shortDescription": "Độ bền và bàn phím hàng đầu cho doanh nhân di chuyển nhiều.",
    "price": 41990000,
    "compareAtPrice": 45350000,
    "verdict": "Độ bền và bàn phím hàng đầu cho doanh nhân di chuyển nhiều.",
    "highlights": [
      "Intel Core Ultra 7 — điểm mạnh đáng chú ý của sản phẩm",
      "Bàn phím ThinkPad huyền thoại — điểm mạnh đáng chú ý của sản phẩm",
      "1,12 kg — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Intel Core Ultra 7",
      "Bàn phím ThinkPad huyền thoại",
      "1,12 kg"
    ],
    "media": [
      {
        "id": "lenovo-thinkpad-x1-carbon-gen-12-media-1",
        "url": "https://picsum.photos/seed/lenovo-thinkpad-x1-carbon-gen-12-a/1200/1200",
        "alt": "Lenovo ThinkPad X1 Carbon Gen 12",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "lenovo-thinkpad-x1-carbon-gen-12-media-2",
        "url": "https://picsum.photos/seed/lenovo-thinkpad-x1-carbon-gen-12-b/1200/1200",
        "alt": "Lenovo ThinkPad X1 Carbon Gen 12 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-lenovo-thinkpad-x1-carbon-gen-12-0",
        "sku": "LENOVO-THINKPAD-X1-CARBON-GEN-12-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 41990000,
        "compareAtPrice": 45350000,
        "stock": 25,
        "lowStockAt": 5
      },
      {
        "id": "v-lenovo-thinkpad-x1-carbon-gen-12-1",
        "sku": "LENOVO-THINKPAD-X1-CARBON-GEN-12-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 48290000,
        "stock": 4,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-lenovo-thinkpad-x1-carbon-gen-12-1",
        "authorName": "Gia Hân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-lenovo-thinkpad-x1-carbon-gen-12-2",
        "authorName": "Hoàng Nam",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Bền bỉ",
    "featured": false
  },
  {
    "id": "lenovo-yoga-slim-7i",
    "slug": "lenovo-yoga-slim-7i",
    "name": "Lenovo Yoga Slim 7i",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Lenovo",
    "brandSlug": "lenovo",
    "description": "Thiết kế mỏng nhẹ, màn hình đẹp trong tầm giá tốt. Intel Core Ultra 7, Màn hình 2.8K OLED, 1,3 kg.",
    "shortDescription": "Thiết kế mỏng nhẹ, màn hình đẹp trong tầm giá tốt.",
    "price": 22990000,
    "compareAtPrice": 24830000,
    "verdict": "Thiết kế mỏng nhẹ, màn hình đẹp trong tầm giá tốt.",
    "highlights": [
      "Intel Core Ultra 7 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 2.8K OLED — điểm mạnh đáng chú ý của sản phẩm",
      "1,3 kg — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Intel Core Ultra 7",
      "Màn hình 2.8K OLED",
      "1,3 kg"
    ],
    "media": [
      {
        "id": "lenovo-yoga-slim-7i-media-1",
        "url": "https://picsum.photos/seed/lenovo-yoga-slim-7i-a/1200/1200",
        "alt": "Lenovo Yoga Slim 7i",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "lenovo-yoga-slim-7i-media-2",
        "url": "https://picsum.photos/seed/lenovo-yoga-slim-7i-b/1200/1200",
        "alt": "Lenovo Yoga Slim 7i — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-lenovo-yoga-slim-7i-0",
        "sku": "LENOVO-YOGA-SLIM-7I-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 22990000,
        "compareAtPrice": 24830000,
        "stock": 10,
        "lowStockAt": 5
      },
      {
        "id": "v-lenovo-yoga-slim-7i-1",
        "sku": "LENOVO-YOGA-SLIM-7I-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 26440000,
        "stock": 31,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-lenovo-yoga-slim-7i-1",
        "authorName": "Quốc Bảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-lenovo-yoga-slim-7i-2",
        "authorName": "Bích Ngọc",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "lenovo-legion-slim-5",
    "slug": "lenovo-legion-slim-5",
    "name": "Lenovo Legion Slim 5",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Lenovo",
    "brandSlug": "lenovo",
    "description": "Laptop gaming mỏng, hiệu năng ổn định cho eSports. AMD Ryzen 7, RTX 4060, Bàn phím RGB.",
    "shortDescription": "Laptop gaming mỏng, hiệu năng ổn định cho eSports.",
    "price": 29990000,
    "compareAtPrice": 32390000,
    "verdict": "Laptop gaming mỏng, hiệu năng ổn định cho eSports.",
    "highlights": [
      "AMD Ryzen 7 — điểm mạnh đáng chú ý của sản phẩm",
      "RTX 4060 — điểm mạnh đáng chú ý của sản phẩm",
      "Bàn phím RGB — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "AMD Ryzen 7",
      "RTX 4060",
      "Bàn phím RGB"
    ],
    "media": [
      {
        "id": "lenovo-legion-slim-5-media-1",
        "url": "https://picsum.photos/seed/lenovo-legion-slim-5-a/1200/1200",
        "alt": "Lenovo Legion Slim 5",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "lenovo-legion-slim-5-media-2",
        "url": "https://picsum.photos/seed/lenovo-legion-slim-5-b/1200/1200",
        "alt": "Lenovo Legion Slim 5 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-lenovo-legion-slim-5-0",
        "sku": "LENOVO-LEGION-SLIM-5-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 29990000,
        "compareAtPrice": 32390000,
        "stock": 12,
        "lowStockAt": 5
      },
      {
        "id": "v-lenovo-legion-slim-5-1",
        "sku": "LENOVO-LEGION-SLIM-5-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 34490000,
        "stock": 3,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-lenovo-legion-slim-5-1",
        "authorName": "Đức Huy",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-lenovo-legion-slim-5-2",
        "authorName": "Quốc Bảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "msi-prestige-16-ai-evo",
    "slug": "msi-prestige-16-ai-evo",
    "name": "MSI Prestige 16 AI Evo",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "MSI",
    "brandSlug": "msi",
    "description": "Cân bằng thiết kế mỏng nhẹ và hiệu năng AI onboard. Intel Core Ultra 7, Màn hình 3K 120 Hz, 1,9 kg.",
    "shortDescription": "Cân bằng thiết kế mỏng nhẹ và hiệu năng AI onboard.",
    "price": 27990000,
    "compareAtPrice": 30230000,
    "verdict": "Cân bằng thiết kế mỏng nhẹ và hiệu năng AI onboard.",
    "highlights": [
      "Intel Core Ultra 7 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 3K 120 Hz — điểm mạnh đáng chú ý của sản phẩm",
      "1,9 kg — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Intel Core Ultra 7",
      "Màn hình 3K 120 Hz",
      "1,9 kg"
    ],
    "media": [
      {
        "id": "msi-prestige-16-ai-evo-media-1",
        "url": "https://picsum.photos/seed/msi-prestige-16-ai-evo-a/1200/1200",
        "alt": "MSI Prestige 16 AI Evo",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "msi-prestige-16-ai-evo-media-2",
        "url": "https://picsum.photos/seed/msi-prestige-16-ai-evo-b/1200/1200",
        "alt": "MSI Prestige 16 AI Evo — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-msi-prestige-16-ai-evo-0",
        "sku": "MSI-PRESTIGE-16-AI-EVO-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 27990000,
        "compareAtPrice": 30230000,
        "stock": 12,
        "lowStockAt": 5
      },
      {
        "id": "v-msi-prestige-16-ai-evo-1",
        "sku": "MSI-PRESTIGE-16-AI-EVO-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 32190000,
        "stock": 9,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-msi-prestige-16-ai-evo-1",
        "authorName": "Linh Đan",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-msi-prestige-16-ai-evo-2",
        "authorName": "Đức Huy",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "msi-stealth-16",
    "slug": "msi-stealth-16",
    "name": "MSI Stealth 16",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "MSI",
    "brandSlug": "msi",
    "description": "Laptop gaming cao cấp, màn hình tần số quét cao. RTX 4070, Màn hình QHD+ 240 Hz, Bàn phím cơ mini.",
    "shortDescription": "Laptop gaming cao cấp, màn hình tần số quét cao.",
    "price": 42990000,
    "compareAtPrice": 46430000,
    "verdict": "Laptop gaming cao cấp, màn hình tần số quét cao.",
    "highlights": [
      "RTX 4070 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình QHD+ 240 Hz — điểm mạnh đáng chú ý của sản phẩm",
      "Bàn phím cơ mini — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "RTX 4070",
      "Màn hình QHD+ 240 Hz",
      "Bàn phím cơ mini"
    ],
    "media": [
      {
        "id": "msi-stealth-16-media-1",
        "url": "https://picsum.photos/seed/msi-stealth-16-a/1200/1200",
        "alt": "MSI Stealth 16",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "msi-stealth-16-media-2",
        "url": "https://picsum.photos/seed/msi-stealth-16-b/1200/1200",
        "alt": "MSI Stealth 16 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-msi-stealth-16-0",
        "sku": "MSI-STEALTH-16-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 42990000,
        "compareAtPrice": 46430000,
        "stock": 36,
        "lowStockAt": 5
      },
      {
        "id": "v-msi-stealth-16-1",
        "sku": "MSI-STEALTH-16-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 49440000,
        "stock": 9,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-msi-stealth-16-1",
        "authorName": "Đức Huy",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-msi-stealth-16-2",
        "authorName": "Phương Thảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "acer-swift-go-14",
    "slug": "acer-swift-go-14",
    "name": "Acer Swift Go 14",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Acer",
    "brandSlug": "acer",
    "description": "OLED giá tốt nhất phân khúc phổ thông. Intel Core i5, Màn hình OLED, 1,3 kg.",
    "shortDescription": "OLED giá tốt nhất phân khúc phổ thông.",
    "price": 16990000,
    "compareAtPrice": 18350000,
    "verdict": "OLED giá tốt nhất phân khúc phổ thông.",
    "highlights": [
      "Intel Core i5 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình OLED — điểm mạnh đáng chú ý của sản phẩm",
      "1,3 kg — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Intel Core i5",
      "Màn hình OLED",
      "1,3 kg"
    ],
    "media": [
      {
        "id": "acer-swift-go-14-media-1",
        "url": "https://picsum.photos/seed/acer-swift-go-14-a/1200/1200",
        "alt": "Acer Swift Go 14",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "acer-swift-go-14-media-2",
        "url": "https://picsum.photos/seed/acer-swift-go-14-b/1200/1200",
        "alt": "Acer Swift Go 14 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-acer-swift-go-14-0",
        "sku": "ACER-SWIFT-GO-14-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 16990000,
        "compareAtPrice": 18350000,
        "stock": 44,
        "lowStockAt": 5
      },
      {
        "id": "v-acer-swift-go-14-1",
        "sku": "ACER-SWIFT-GO-14-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 19540000,
        "stock": 22,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-acer-swift-go-14-1",
        "authorName": "Anh Tuấn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-acer-swift-go-14-2",
        "authorName": "Anh Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "acer-predator-helios-neo-16",
    "slug": "acer-predator-helios-neo-16",
    "name": "Acer Predator Helios Neo 16",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "Acer",
    "brandSlug": "acer",
    "description": "Hiệu năng gaming mạnh với mức giá dễ tiếp cận. RTX 4060, Màn hình 165 Hz, Tản nhiệt kim cương.",
    "shortDescription": "Hiệu năng gaming mạnh với mức giá dễ tiếp cận.",
    "price": 31990000,
    "compareAtPrice": 34550000,
    "verdict": "Hiệu năng gaming mạnh với mức giá dễ tiếp cận.",
    "highlights": [
      "RTX 4060 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 165 Hz — điểm mạnh đáng chú ý của sản phẩm",
      "Tản nhiệt kim cương — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "RTX 4060",
      "Màn hình 165 Hz",
      "Tản nhiệt kim cương"
    ],
    "media": [
      {
        "id": "acer-predator-helios-neo-16-media-1",
        "url": "https://picsum.photos/seed/acer-predator-helios-neo-16-a/1200/1200",
        "alt": "Acer Predator Helios Neo 16",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "acer-predator-helios-neo-16-media-2",
        "url": "https://picsum.photos/seed/acer-predator-helios-neo-16-b/1200/1200",
        "alt": "Acer Predator Helios Neo 16 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-acer-predator-helios-neo-16-0",
        "sku": "ACER-PREDATOR-HELIOS-NEO-16-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 31990000,
        "compareAtPrice": 34550000,
        "stock": 43,
        "lowStockAt": 5
      },
      {
        "id": "v-acer-predator-helios-neo-16-1",
        "sku": "ACER-PREDATOR-HELIOS-NEO-16-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 36790000,
        "stock": 31,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-acer-predator-helios-neo-16-1",
        "authorName": "Phương Thảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-acer-predator-helios-neo-16-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "lg-gram-16",
    "slug": "lg-gram-16",
    "name": "LG Gram 16",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "LG",
    "brandSlug": "lg",
    "description": "Nhẹ nhất phân khúc 16 inch, pin cực trâu. Nhẹ 1,19 kg, Pin đến 22 giờ, Màn hình 16 inch.",
    "shortDescription": "Nhẹ nhất phân khúc 16 inch, pin cực trâu.",
    "price": 28990000,
    "compareAtPrice": 31310000,
    "verdict": "Nhẹ nhất phân khúc 16 inch, pin cực trâu.",
    "highlights": [
      "Nhẹ 1,19 kg — điểm mạnh đáng chú ý của sản phẩm",
      "Pin đến 22 giờ — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 16 inch — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Nhẹ 1,19 kg",
      "Pin đến 22 giờ",
      "Màn hình 16 inch"
    ],
    "media": [
      {
        "id": "lg-gram-16-media-1",
        "url": "https://picsum.photos/seed/lg-gram-16-a/1200/1200",
        "alt": "LG Gram 16",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "lg-gram-16-media-2",
        "url": "https://picsum.photos/seed/lg-gram-16-b/1200/1200",
        "alt": "LG Gram 16 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-lg-gram-16-0",
        "sku": "LG-GRAM-16-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 28990000,
        "compareAtPrice": 31310000,
        "stock": 19,
        "lowStockAt": 5
      },
      {
        "id": "v-lg-gram-16-1",
        "sku": "LG-GRAM-16-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 33340000,
        "stock": 30,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-lg-gram-16-1",
        "authorName": "Anh Tuấn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-lg-gram-16-2",
        "authorName": "Xuân Sơn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "lg-gram-pro-17",
    "slug": "lg-gram-pro-17",
    "name": "LG Gram Pro 17",
    "category": "Laptop",
    "categorySlug": "laptop",
    "brand": "LG",
    "brandSlug": "lg",
    "description": "Màn hình lớn nhưng vẫn nhẹ hơn hầu hết đối thủ. Màn hình 17 inch WQXGA, Pin đến 21 giờ, Nhẹ 1,35 kg.",
    "shortDescription": "Màn hình lớn nhưng vẫn nhẹ hơn hầu hết đối thủ.",
    "price": 35990000,
    "compareAtPrice": 38870000,
    "verdict": "Màn hình lớn nhưng vẫn nhẹ hơn hầu hết đối thủ.",
    "highlights": [
      "Màn hình 17 inch WQXGA — điểm mạnh đáng chú ý của sản phẩm",
      "Pin đến 21 giờ — điểm mạnh đáng chú ý của sản phẩm",
      "Nhẹ 1,35 kg — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá vẫn ở phân khúc trung — cao cấp",
      "Cần thời gian làm quen với bàn phím và touchpad mới",
      "Phụ kiện đi kèm trong hộp khá tối giản"
    ],
    "specs": [
      "Màn hình 17 inch WQXGA",
      "Pin đến 21 giờ",
      "Nhẹ 1,35 kg"
    ],
    "media": [
      {
        "id": "lg-gram-pro-17-media-1",
        "url": "https://picsum.photos/seed/lg-gram-pro-17-a/1200/1200",
        "alt": "LG Gram Pro 17",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "lg-gram-pro-17-media-2",
        "url": "https://picsum.photos/seed/lg-gram-pro-17-b/1200/1200",
        "alt": "LG Gram Pro 17 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-lg-gram-pro-17-0",
        "sku": "LG-GRAM-PRO-17-16GB-512GB",
        "name": "16 GB / 512 GB / Bạc",
        "attributes": {
          "ram": "16 GB",
          "storage": "512 GB",
          "color": "Bạc"
        },
        "price": 35990000,
        "compareAtPrice": 38870000,
        "stock": 11,
        "lowStockAt": 5
      },
      {
        "id": "v-lg-gram-pro-17-1",
        "sku": "LG-GRAM-PRO-17-32GB-512GB",
        "name": "32 GB / 512 GB / Xám",
        "attributes": {
          "ram": "32 GB",
          "storage": "512 GB",
          "color": "Xám"
        },
        "price": 41390000,
        "stock": 10,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-lg-gram-pro-17-1",
        "authorName": "Hải Đăng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-lg-gram-pro-17-2",
        "authorName": "Hoàng Nam",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "iphone-16-pro",
    "slug": "iphone-16-pro",
    "name": "iPhone 16 Pro",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Camera ổn định và hiệu năng bền cho người làm nội dung. A18 Pro, Camera tele 5x, Màn hình 120 Hz.",
    "shortDescription": "Camera ổn định và hiệu năng bền cho người làm nội dung.",
    "price": 28490000,
    "compareAtPrice": 30770000,
    "verdict": "Camera ổn định và hiệu năng bền cho người làm nội dung.",
    "highlights": [
      "A18 Pro — điểm mạnh đáng chú ý của sản phẩm",
      "Camera tele 5x — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 120 Hz — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "A18 Pro",
      "Camera tele 5x",
      "Màn hình 120 Hz"
    ],
    "media": [
      {
        "id": "iphone-16-pro-media-1",
        "url": "https://picsum.photos/seed/iphone-16-pro-a/1200/1200",
        "alt": "iPhone 16 Pro",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "iphone-16-pro-media-2",
        "url": "https://picsum.photos/seed/iphone-16-pro-b/1200/1200",
        "alt": "iPhone 16 Pro — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-iphone-16-pro-0",
        "sku": "IPHONE-16-PRO-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 28490000,
        "compareAtPrice": 30770000,
        "stock": 18,
        "lowStockAt": 5
      },
      {
        "id": "v-iphone-16-pro-1",
        "sku": "IPHONE-16-PRO-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 30770000,
        "stock": 38,
        "lowStockAt": 5
      },
      {
        "id": "v-iphone-16-pro-2",
        "sku": "IPHONE-16-PRO-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 33050000,
        "stock": 32,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-iphone-16-pro-1",
        "authorName": "Ngọc Mai",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-iphone-16-pro-2",
        "authorName": "Anh Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Creator choice",
    "featured": true
  },
  {
    "id": "samsung-galaxy-s25",
    "slug": "samsung-galaxy-s25",
    "name": "Samsung Galaxy S25",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Nhỏ gọn, màn hình sáng và nhiều tính năng hỗ trợ hằng ngày. Snapdragon 8 Elite, Galaxy AI, 7 năm cập nhật.",
    "shortDescription": "Nhỏ gọn, màn hình sáng và nhiều tính năng hỗ trợ hằng ngày.",
    "price": 20990000,
    "compareAtPrice": 22670000,
    "verdict": "Nhỏ gọn, màn hình sáng và nhiều tính năng hỗ trợ hằng ngày.",
    "highlights": [
      "Snapdragon 8 Elite — điểm mạnh đáng chú ý của sản phẩm",
      "Galaxy AI — điểm mạnh đáng chú ý của sản phẩm",
      "7 năm cập nhật — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Snapdragon 8 Elite",
      "Galaxy AI",
      "7 năm cập nhật"
    ],
    "media": [
      {
        "id": "samsung-galaxy-s25-media-1",
        "url": "https://picsum.photos/seed/samsung-galaxy-s25-a/1200/1200",
        "alt": "Samsung Galaxy S25",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-galaxy-s25-media-2",
        "url": "https://picsum.photos/seed/samsung-galaxy-s25-b/1200/1200",
        "alt": "Samsung Galaxy S25 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-galaxy-s25-0",
        "sku": "SAMSUNG-GALAXY-S25-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 20990000,
        "compareAtPrice": 22670000,
        "stock": 8,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-s25-1",
        "sku": "SAMSUNG-GALAXY-S25-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 22670000,
        "stock": 19,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-s25-2",
        "sku": "SAMSUNG-GALAXY-S25-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 24350000,
        "stock": 34,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-galaxy-s25-1",
        "authorName": "Trí Tuấn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-galaxy-s25-2",
        "authorName": "Linh Đan",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "AI tiện dụng",
    "featured": true
  },
  {
    "id": "iphone-16",
    "slug": "iphone-16",
    "name": "iPhone 16",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Bản tiêu chuẩn đầy đủ tính năng với giá dễ tiếp cận hơn. A18, Camera Fusion 48MP, Màn hình 120 Hz.",
    "shortDescription": "Bản tiêu chuẩn đầy đủ tính năng với giá dễ tiếp cận hơn.",
    "price": 22990000,
    "compareAtPrice": 24830000,
    "verdict": "Bản tiêu chuẩn đầy đủ tính năng với giá dễ tiếp cận hơn.",
    "highlights": [
      "A18 — điểm mạnh đáng chú ý của sản phẩm",
      "Camera Fusion 48MP — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 120 Hz — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "A18",
      "Camera Fusion 48MP",
      "Màn hình 120 Hz"
    ],
    "media": [
      {
        "id": "iphone-16-media-1",
        "url": "https://picsum.photos/seed/iphone-16-a/1200/1200",
        "alt": "iPhone 16",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "iphone-16-media-2",
        "url": "https://picsum.photos/seed/iphone-16-b/1200/1200",
        "alt": "iPhone 16 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-iphone-16-0",
        "sku": "IPHONE-16-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 22990000,
        "compareAtPrice": 24830000,
        "stock": 21,
        "lowStockAt": 5
      },
      {
        "id": "v-iphone-16-1",
        "sku": "IPHONE-16-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 24830000,
        "stock": 17,
        "lowStockAt": 5
      },
      {
        "id": "v-iphone-16-2",
        "sku": "IPHONE-16-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 26670000,
        "stock": 3,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-iphone-16-1",
        "authorName": "Ngọc Mai",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-iphone-16-2",
        "authorName": "Hải Đăng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "iphone-16-pro-max",
    "slug": "iphone-16-pro-max",
    "name": "iPhone 16 Pro Max",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Màn hình lớn và pin bền nhất cho nhu cầu dùng cả ngày. A18 Pro, Camera tele 5x, Pin lớn nhất dòng iPhone.",
    "shortDescription": "Màn hình lớn và pin bền nhất cho nhu cầu dùng cả ngày.",
    "price": 34990000,
    "compareAtPrice": 37790000,
    "verdict": "Màn hình lớn và pin bền nhất cho nhu cầu dùng cả ngày.",
    "highlights": [
      "A18 Pro — điểm mạnh đáng chú ý của sản phẩm",
      "Camera tele 5x — điểm mạnh đáng chú ý của sản phẩm",
      "Pin lớn nhất dòng iPhone — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "A18 Pro",
      "Camera tele 5x",
      "Pin lớn nhất dòng iPhone"
    ],
    "media": [
      {
        "id": "iphone-16-pro-max-media-1",
        "url": "https://picsum.photos/seed/iphone-16-pro-max-a/1200/1200",
        "alt": "iPhone 16 Pro Max",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "iphone-16-pro-max-media-2",
        "url": "https://picsum.photos/seed/iphone-16-pro-max-b/1200/1200",
        "alt": "iPhone 16 Pro Max — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-iphone-16-pro-max-0",
        "sku": "IPHONE-16-PRO-MAX-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 34990000,
        "compareAtPrice": 37790000,
        "stock": 26,
        "lowStockAt": 5
      },
      {
        "id": "v-iphone-16-pro-max-1",
        "sku": "IPHONE-16-PRO-MAX-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 37790000,
        "stock": 34,
        "lowStockAt": 5
      },
      {
        "id": "v-iphone-16-pro-max-2",
        "sku": "IPHONE-16-PRO-MAX-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 40590000,
        "stock": 38,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-iphone-16-pro-max-1",
        "authorName": "Hải Đăng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-iphone-16-pro-max-2",
        "authorName": "Hoàng Nam",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "samsung-galaxy-s25-ultra",
    "slug": "samsung-galaxy-s25-ultra",
    "name": "Samsung Galaxy S25 Ultra",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Camera zoom xa và S Pen cho công việc kết hợp sáng tạo. Snapdragon 8 Elite, Camera 200MP, Bút S Pen.",
    "shortDescription": "Camera zoom xa và S Pen cho công việc kết hợp sáng tạo.",
    "price": 31990000,
    "compareAtPrice": 34550000,
    "verdict": "Camera zoom xa và S Pen cho công việc kết hợp sáng tạo.",
    "highlights": [
      "Snapdragon 8 Elite — điểm mạnh đáng chú ý của sản phẩm",
      "Camera 200MP — điểm mạnh đáng chú ý của sản phẩm",
      "Bút S Pen — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Snapdragon 8 Elite",
      "Camera 200MP",
      "Bút S Pen"
    ],
    "media": [
      {
        "id": "samsung-galaxy-s25-ultra-media-1",
        "url": "https://picsum.photos/seed/samsung-galaxy-s25-ultra-a/1200/1200",
        "alt": "Samsung Galaxy S25 Ultra",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-galaxy-s25-ultra-media-2",
        "url": "https://picsum.photos/seed/samsung-galaxy-s25-ultra-b/1200/1200",
        "alt": "Samsung Galaxy S25 Ultra — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-galaxy-s25-ultra-0",
        "sku": "SAMSUNG-GALAXY-S25-ULTRA-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 31990000,
        "compareAtPrice": 34550000,
        "stock": 15,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-s25-ultra-1",
        "sku": "SAMSUNG-GALAXY-S25-ULTRA-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 34550000,
        "stock": 6,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-s25-ultra-2",
        "sku": "SAMSUNG-GALAXY-S25-ULTRA-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 37110000,
        "stock": 33,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-galaxy-s25-ultra-1",
        "authorName": "Bích Ngọc",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-galaxy-s25-ultra-2",
        "authorName": "Hải Đăng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Flagship",
    "featured": false
  },
  {
    "id": "samsung-galaxy-s25-plus",
    "slug": "samsung-galaxy-s25-plus",
    "name": "Samsung Galaxy S25+",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Bản cân bằng giữa kích thước và thời lượng pin. Snapdragon 8 Elite, Màn hình 6.7 inch, Pin 4900 mAh.",
    "shortDescription": "Bản cân bằng giữa kích thước và thời lượng pin.",
    "price": 25990000,
    "compareAtPrice": 28070000,
    "verdict": "Bản cân bằng giữa kích thước và thời lượng pin.",
    "highlights": [
      "Snapdragon 8 Elite — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 6.7 inch — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 4900 mAh — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Snapdragon 8 Elite",
      "Màn hình 6.7 inch",
      "Pin 4900 mAh"
    ],
    "media": [
      {
        "id": "samsung-galaxy-s25-plus-media-1",
        "url": "https://picsum.photos/seed/samsung-galaxy-s25-plus-a/1200/1200",
        "alt": "Samsung Galaxy S25+",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-galaxy-s25-plus-media-2",
        "url": "https://picsum.photos/seed/samsung-galaxy-s25-plus-b/1200/1200",
        "alt": "Samsung Galaxy S25+ — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-galaxy-s25-plus-0",
        "sku": "SAMSUNG-GALAXY-S25-PLUS-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 25990000,
        "compareAtPrice": 28070000,
        "stock": 38,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-s25-plus-1",
        "sku": "SAMSUNG-GALAXY-S25-PLUS-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 28070000,
        "stock": 41,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-s25-plus-2",
        "sku": "SAMSUNG-GALAXY-S25-PLUS-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 30150000,
        "stock": 16,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-galaxy-s25-plus-1",
        "authorName": "Bảo Trân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-galaxy-s25-plus-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "samsung-galaxy-a55",
    "slug": "samsung-galaxy-a55",
    "name": "Samsung Galaxy A55",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Tầm trung bền bỉ với thiết kế khung kim loại. Exynos 1480, Chống nước IP67, Màn hình Super AMOLED.",
    "shortDescription": "Tầm trung bền bỉ với thiết kế khung kim loại.",
    "price": 10990000,
    "compareAtPrice": 11870000,
    "verdict": "Tầm trung bền bỉ với thiết kế khung kim loại.",
    "highlights": [
      "Exynos 1480 — điểm mạnh đáng chú ý của sản phẩm",
      "Chống nước IP67 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình Super AMOLED — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Exynos 1480",
      "Chống nước IP67",
      "Màn hình Super AMOLED"
    ],
    "media": [
      {
        "id": "samsung-galaxy-a55-media-1",
        "url": "https://picsum.photos/seed/samsung-galaxy-a55-a/1200/1200",
        "alt": "Samsung Galaxy A55",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-galaxy-a55-media-2",
        "url": "https://picsum.photos/seed/samsung-galaxy-a55-b/1200/1200",
        "alt": "Samsung Galaxy A55 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-galaxy-a55-0",
        "sku": "SAMSUNG-GALAXY-A55-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 10990000,
        "compareAtPrice": 11870000,
        "stock": 40,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-a55-1",
        "sku": "SAMSUNG-GALAXY-A55-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 11870000,
        "stock": 11,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-a55-2",
        "sku": "SAMSUNG-GALAXY-A55-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 12750000,
        "stock": 5,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-galaxy-a55-1",
        "authorName": "Thu Hương",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-galaxy-a55-2",
        "authorName": "Bảo Trân",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "samsung-galaxy-z-fold-6",
    "slug": "samsung-galaxy-z-fold-6",
    "name": "Samsung Galaxy Z Fold 6",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Màn hình gập lớn cho đa nhiệm như máy tính bảng. Màn hình gập 7.6 inch, Snapdragon 8 Elite, Bút S Pen tùy chọn.",
    "shortDescription": "Màn hình gập lớn cho đa nhiệm như máy tính bảng.",
    "price": 42990000,
    "compareAtPrice": 46430000,
    "verdict": "Màn hình gập lớn cho đa nhiệm như máy tính bảng.",
    "highlights": [
      "Màn hình gập 7.6 inch — điểm mạnh đáng chú ý của sản phẩm",
      "Snapdragon 8 Elite — điểm mạnh đáng chú ý của sản phẩm",
      "Bút S Pen tùy chọn — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Màn hình gập 7.6 inch",
      "Snapdragon 8 Elite",
      "Bút S Pen tùy chọn"
    ],
    "media": [
      {
        "id": "samsung-galaxy-z-fold-6-media-1",
        "url": "https://picsum.photos/seed/samsung-galaxy-z-fold-6-a/1200/1200",
        "alt": "Samsung Galaxy Z Fold 6",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-galaxy-z-fold-6-media-2",
        "url": "https://picsum.photos/seed/samsung-galaxy-z-fold-6-b/1200/1200",
        "alt": "Samsung Galaxy Z Fold 6 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-galaxy-z-fold-6-0",
        "sku": "SAMSUNG-GALAXY-Z-FOLD-6-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 42990000,
        "compareAtPrice": 46430000,
        "stock": 15,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-z-fold-6-1",
        "sku": "SAMSUNG-GALAXY-Z-FOLD-6-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 46430000,
        "stock": 42,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-z-fold-6-2",
        "sku": "SAMSUNG-GALAXY-Z-FOLD-6-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 49870000,
        "stock": 30,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-galaxy-z-fold-6-1",
        "authorName": "Đức Huy",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-galaxy-z-fold-6-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "samsung-galaxy-z-flip-6",
    "slug": "samsung-galaxy-z-flip-6",
    "name": "Samsung Galaxy Z Flip 6",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Gập dọc nhỏ gọn, phong cách và tiện lợi. Màn hình gập dọc, Camera Cover Screen, Thiết kế bỏ túi.",
    "shortDescription": "Gập dọc nhỏ gọn, phong cách và tiện lợi.",
    "price": 27990000,
    "compareAtPrice": 30230000,
    "verdict": "Gập dọc nhỏ gọn, phong cách và tiện lợi.",
    "highlights": [
      "Màn hình gập dọc — điểm mạnh đáng chú ý của sản phẩm",
      "Camera Cover Screen — điểm mạnh đáng chú ý của sản phẩm",
      "Thiết kế bỏ túi — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Màn hình gập dọc",
      "Camera Cover Screen",
      "Thiết kế bỏ túi"
    ],
    "media": [
      {
        "id": "samsung-galaxy-z-flip-6-media-1",
        "url": "https://picsum.photos/seed/samsung-galaxy-z-flip-6-a/1200/1200",
        "alt": "Samsung Galaxy Z Flip 6",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-galaxy-z-flip-6-media-2",
        "url": "https://picsum.photos/seed/samsung-galaxy-z-flip-6-b/1200/1200",
        "alt": "Samsung Galaxy Z Flip 6 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-galaxy-z-flip-6-0",
        "sku": "SAMSUNG-GALAXY-Z-FLIP-6-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 27990000,
        "compareAtPrice": 30230000,
        "stock": 15,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-z-flip-6-1",
        "sku": "SAMSUNG-GALAXY-Z-FLIP-6-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 30230000,
        "stock": 5,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-z-flip-6-2",
        "sku": "SAMSUNG-GALAXY-Z-FLIP-6-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 32470000,
        "stock": 16,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-galaxy-z-flip-6-1",
        "authorName": "Đức Huy",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-galaxy-z-flip-6-2",
        "authorName": "Bích Ngọc",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "xiaomi-14t-pro",
    "slug": "xiaomi-14t-pro",
    "name": "Xiaomi 14T Pro",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Xiaomi",
    "brandSlug": "xiaomi",
    "description": "Camera hợp tác Leica và sạc siêu nhanh trong tầm giá tốt. Dimensity 9300+, Camera Leica, Sạc 120W.",
    "shortDescription": "Camera hợp tác Leica và sạc siêu nhanh trong tầm giá tốt.",
    "price": 15990000,
    "compareAtPrice": 17270000,
    "verdict": "Camera hợp tác Leica và sạc siêu nhanh trong tầm giá tốt.",
    "highlights": [
      "Dimensity 9300+ — điểm mạnh đáng chú ý của sản phẩm",
      "Camera Leica — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc 120W — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Dimensity 9300+",
      "Camera Leica",
      "Sạc 120W"
    ],
    "media": [
      {
        "id": "xiaomi-14t-pro-media-1",
        "url": "https://picsum.photos/seed/xiaomi-14t-pro-a/1200/1200",
        "alt": "Xiaomi 14T Pro",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "xiaomi-14t-pro-media-2",
        "url": "https://picsum.photos/seed/xiaomi-14t-pro-b/1200/1200",
        "alt": "Xiaomi 14T Pro — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-xiaomi-14t-pro-0",
        "sku": "XIAOMI-14T-PRO-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 15990000,
        "compareAtPrice": 17270000,
        "stock": 7,
        "lowStockAt": 5
      },
      {
        "id": "v-xiaomi-14t-pro-1",
        "sku": "XIAOMI-14T-PRO-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 17270000,
        "stock": 26,
        "lowStockAt": 5
      },
      {
        "id": "v-xiaomi-14t-pro-2",
        "sku": "XIAOMI-14T-PRO-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 18550000,
        "stock": 8,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-xiaomi-14t-pro-1",
        "authorName": "Anh Tuấn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-xiaomi-14t-pro-2",
        "authorName": "Thanh Tùng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "xiaomi-14-ultra",
    "slug": "xiaomi-14-ultra",
    "name": "Xiaomi 14 Ultra",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Xiaomi",
    "brandSlug": "xiaomi",
    "description": "Hệ thống camera Leica đầy đủ cho người mê chụp ảnh. Snapdragon 8 Gen 3, Camera Leica 4 ống kính, Màn hình 2K.",
    "shortDescription": "Hệ thống camera Leica đầy đủ cho người mê chụp ảnh.",
    "price": 26990000,
    "compareAtPrice": 29150000,
    "verdict": "Hệ thống camera Leica đầy đủ cho người mê chụp ảnh.",
    "highlights": [
      "Snapdragon 8 Gen 3 — điểm mạnh đáng chú ý của sản phẩm",
      "Camera Leica 4 ống kính — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 2K — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Snapdragon 8 Gen 3",
      "Camera Leica 4 ống kính",
      "Màn hình 2K"
    ],
    "media": [
      {
        "id": "xiaomi-14-ultra-media-1",
        "url": "https://picsum.photos/seed/xiaomi-14-ultra-a/1200/1200",
        "alt": "Xiaomi 14 Ultra",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "xiaomi-14-ultra-media-2",
        "url": "https://picsum.photos/seed/xiaomi-14-ultra-b/1200/1200",
        "alt": "Xiaomi 14 Ultra — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-xiaomi-14-ultra-0",
        "sku": "XIAOMI-14-ULTRA-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 26990000,
        "compareAtPrice": 29150000,
        "stock": 13,
        "lowStockAt": 5
      },
      {
        "id": "v-xiaomi-14-ultra-1",
        "sku": "XIAOMI-14-ULTRA-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 29150000,
        "stock": 6,
        "lowStockAt": 5
      },
      {
        "id": "v-xiaomi-14-ultra-2",
        "sku": "XIAOMI-14-ULTRA-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 31310000,
        "stock": 15,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-xiaomi-14-ultra-1",
        "authorName": "Hoàng Nam",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-xiaomi-14-ultra-2",
        "authorName": "Xuân Sơn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "redmi-note-13-pro",
    "slug": "redmi-note-13-pro",
    "name": "Redmi Note 13 Pro",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Xiaomi",
    "brandSlug": "xiaomi",
    "description": "Camera độ phân giải cao ở phân khúc giá phổ thông. Snapdragon 7s Gen 2, Camera 200MP, Sạc 67W.",
    "shortDescription": "Camera độ phân giải cao ở phân khúc giá phổ thông.",
    "price": 7990000,
    "compareAtPrice": 8630000,
    "verdict": "Camera độ phân giải cao ở phân khúc giá phổ thông.",
    "highlights": [
      "Snapdragon 7s Gen 2 — điểm mạnh đáng chú ý của sản phẩm",
      "Camera 200MP — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc 67W — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Snapdragon 7s Gen 2",
      "Camera 200MP",
      "Sạc 67W"
    ],
    "media": [
      {
        "id": "redmi-note-13-pro-media-1",
        "url": "https://picsum.photos/seed/redmi-note-13-pro-a/1200/1200",
        "alt": "Redmi Note 13 Pro",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "redmi-note-13-pro-media-2",
        "url": "https://picsum.photos/seed/redmi-note-13-pro-b/1200/1200",
        "alt": "Redmi Note 13 Pro — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-redmi-note-13-pro-0",
        "sku": "REDMI-NOTE-13-PRO-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 7990000,
        "compareAtPrice": 8630000,
        "stock": 31,
        "lowStockAt": 5
      },
      {
        "id": "v-redmi-note-13-pro-1",
        "sku": "REDMI-NOTE-13-PRO-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 8630000,
        "stock": 8,
        "lowStockAt": 5
      },
      {
        "id": "v-redmi-note-13-pro-2",
        "sku": "REDMI-NOTE-13-PRO-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 9270000,
        "stock": 3,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-redmi-note-13-pro-1",
        "authorName": "Quốc Bảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-redmi-note-13-pro-2",
        "authorName": "Minh Anh",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "poco-f6",
    "slug": "poco-f6",
    "name": "POCO F6",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Xiaomi",
    "brandSlug": "xiaomi",
    "description": "Hiệu năng vượt tầm giá cho game thủ di động. Snapdragon 8s Gen 3, Màn hình AMOLED 120Hz, Sạc 90W.",
    "shortDescription": "Hiệu năng vượt tầm giá cho game thủ di động.",
    "price": 9990000,
    "compareAtPrice": 10790000,
    "verdict": "Hiệu năng vượt tầm giá cho game thủ di động.",
    "highlights": [
      "Snapdragon 8s Gen 3 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình AMOLED 120Hz — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc 90W — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Snapdragon 8s Gen 3",
      "Màn hình AMOLED 120Hz",
      "Sạc 90W"
    ],
    "media": [
      {
        "id": "poco-f6-media-1",
        "url": "https://picsum.photos/seed/poco-f6-a/1200/1200",
        "alt": "POCO F6",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "poco-f6-media-2",
        "url": "https://picsum.photos/seed/poco-f6-b/1200/1200",
        "alt": "POCO F6 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-poco-f6-0",
        "sku": "POCO-F6-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 9990000,
        "compareAtPrice": 10790000,
        "stock": 30,
        "lowStockAt": 5
      },
      {
        "id": "v-poco-f6-1",
        "sku": "POCO-F6-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 10790000,
        "stock": 39,
        "lowStockAt": 5
      },
      {
        "id": "v-poco-f6-2",
        "sku": "POCO-F6-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 11590000,
        "stock": 38,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-poco-f6-1",
        "authorName": "Hải Đăng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-poco-f6-2",
        "authorName": "Hải Đăng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "oppo-find-x7-ultra",
    "slug": "oppo-find-x7-ultra",
    "name": "OPPO Find X7 Ultra",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "OPPO",
    "brandSlug": "oppo",
    "description": "Camera kép tele độc đáo cho chụp xa linh hoạt. Snapdragon 8 Gen 3, Camera Hasselblad kép tele, Sạc 100W.",
    "shortDescription": "Camera kép tele độc đáo cho chụp xa linh hoạt.",
    "price": 27990000,
    "compareAtPrice": 30230000,
    "verdict": "Camera kép tele độc đáo cho chụp xa linh hoạt.",
    "highlights": [
      "Snapdragon 8 Gen 3 — điểm mạnh đáng chú ý của sản phẩm",
      "Camera Hasselblad kép tele — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc 100W — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Snapdragon 8 Gen 3",
      "Camera Hasselblad kép tele",
      "Sạc 100W"
    ],
    "media": [
      {
        "id": "oppo-find-x7-ultra-media-1",
        "url": "https://picsum.photos/seed/oppo-find-x7-ultra-a/1200/1200",
        "alt": "OPPO Find X7 Ultra",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "oppo-find-x7-ultra-media-2",
        "url": "https://picsum.photos/seed/oppo-find-x7-ultra-b/1200/1200",
        "alt": "OPPO Find X7 Ultra — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-oppo-find-x7-ultra-0",
        "sku": "OPPO-FIND-X7-ULTRA-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 27990000,
        "compareAtPrice": 30230000,
        "stock": 32,
        "lowStockAt": 5
      },
      {
        "id": "v-oppo-find-x7-ultra-1",
        "sku": "OPPO-FIND-X7-ULTRA-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 30230000,
        "stock": 27,
        "lowStockAt": 5
      },
      {
        "id": "v-oppo-find-x7-ultra-2",
        "sku": "OPPO-FIND-X7-ULTRA-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 32470000,
        "stock": 16,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-oppo-find-x7-ultra-1",
        "authorName": "Minh Anh",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-oppo-find-x7-ultra-2",
        "authorName": "Đức Huy",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "oppo-reno-12",
    "slug": "oppo-reno-12",
    "name": "OPPO Reno 12",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "OPPO",
    "brandSlug": "oppo",
    "description": "Tính năng AI chụp ảnh dễ dùng cho người mới. MediaTek Dimensity 7300, AI chỉnh ảnh, Thiết kế mỏng nhẹ.",
    "shortDescription": "Tính năng AI chụp ảnh dễ dùng cho người mới.",
    "price": 11990000,
    "compareAtPrice": 12950000,
    "verdict": "Tính năng AI chụp ảnh dễ dùng cho người mới.",
    "highlights": [
      "MediaTek Dimensity 7300 — điểm mạnh đáng chú ý của sản phẩm",
      "AI chỉnh ảnh — điểm mạnh đáng chú ý của sản phẩm",
      "Thiết kế mỏng nhẹ — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "MediaTek Dimensity 7300",
      "AI chỉnh ảnh",
      "Thiết kế mỏng nhẹ"
    ],
    "media": [
      {
        "id": "oppo-reno-12-media-1",
        "url": "https://picsum.photos/seed/oppo-reno-12-a/1200/1200",
        "alt": "OPPO Reno 12",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "oppo-reno-12-media-2",
        "url": "https://picsum.photos/seed/oppo-reno-12-b/1200/1200",
        "alt": "OPPO Reno 12 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-oppo-reno-12-0",
        "sku": "OPPO-RENO-12-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 11990000,
        "compareAtPrice": 12950000,
        "stock": 36,
        "lowStockAt": 5
      },
      {
        "id": "v-oppo-reno-12-1",
        "sku": "OPPO-RENO-12-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 12950000,
        "stock": 34,
        "lowStockAt": 5
      },
      {
        "id": "v-oppo-reno-12-2",
        "sku": "OPPO-RENO-12-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 13910000,
        "stock": 3,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-oppo-reno-12-1",
        "authorName": "Trí Tuấn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-oppo-reno-12-2",
        "authorName": "Minh Anh",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "oppo-a3-pro",
    "slug": "oppo-a3-pro",
    "name": "OPPO A3 Pro",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "OPPO",
    "brandSlug": "oppo",
    "description": "Độ bền cao, phù hợp môi trường làm việc khắc nghiệt. Chống rơi IP69, Pin 5800 mAh, Khung bền chuẩn quân đội.",
    "shortDescription": "Độ bền cao, phù hợp môi trường làm việc khắc nghiệt.",
    "price": 6490000,
    "compareAtPrice": 7010000,
    "verdict": "Độ bền cao, phù hợp môi trường làm việc khắc nghiệt.",
    "highlights": [
      "Chống rơi IP69 — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 5800 mAh — điểm mạnh đáng chú ý của sản phẩm",
      "Khung bền chuẩn quân đội — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Chống rơi IP69",
      "Pin 5800 mAh",
      "Khung bền chuẩn quân đội"
    ],
    "media": [
      {
        "id": "oppo-a3-pro-media-1",
        "url": "https://picsum.photos/seed/oppo-a3-pro-a/1200/1200",
        "alt": "OPPO A3 Pro",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "oppo-a3-pro-media-2",
        "url": "https://picsum.photos/seed/oppo-a3-pro-b/1200/1200",
        "alt": "OPPO A3 Pro — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-oppo-a3-pro-0",
        "sku": "OPPO-A3-PRO-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 6490000,
        "compareAtPrice": 7010000,
        "stock": 24,
        "lowStockAt": 5
      },
      {
        "id": "v-oppo-a3-pro-1",
        "sku": "OPPO-A3-PRO-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 7010000,
        "stock": 17,
        "lowStockAt": 5
      },
      {
        "id": "v-oppo-a3-pro-2",
        "sku": "OPPO-A3-PRO-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 7530000,
        "stock": 36,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-oppo-a3-pro-1",
        "authorName": "Thu Hương",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-oppo-a3-pro-2",
        "authorName": "Thu Hương",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "google-pixel-9-pro",
    "slug": "google-pixel-9-pro",
    "name": "Google Pixel 9 Pro",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Google",
    "brandSlug": "google",
    "description": "Camera xử lý AI tốt nhất hệ Android hiện tại. Google Tensor G4, Camera AI đỉnh cao, Gemini tích hợp sẵn.",
    "shortDescription": "Camera xử lý AI tốt nhất hệ Android hiện tại.",
    "price": 26990000,
    "compareAtPrice": 29150000,
    "verdict": "Camera xử lý AI tốt nhất hệ Android hiện tại.",
    "highlights": [
      "Google Tensor G4 — điểm mạnh đáng chú ý của sản phẩm",
      "Camera AI đỉnh cao — điểm mạnh đáng chú ý của sản phẩm",
      "Gemini tích hợp sẵn — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Google Tensor G4",
      "Camera AI đỉnh cao",
      "Gemini tích hợp sẵn"
    ],
    "media": [
      {
        "id": "google-pixel-9-pro-media-1",
        "url": "https://picsum.photos/seed/google-pixel-9-pro-a/1200/1200",
        "alt": "Google Pixel 9 Pro",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "google-pixel-9-pro-media-2",
        "url": "https://picsum.photos/seed/google-pixel-9-pro-b/1200/1200",
        "alt": "Google Pixel 9 Pro — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-google-pixel-9-pro-0",
        "sku": "GOOGLE-PIXEL-9-PRO-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 26990000,
        "compareAtPrice": 29150000,
        "stock": 10,
        "lowStockAt": 5
      },
      {
        "id": "v-google-pixel-9-pro-1",
        "sku": "GOOGLE-PIXEL-9-PRO-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 29150000,
        "stock": 24,
        "lowStockAt": 5
      },
      {
        "id": "v-google-pixel-9-pro-2",
        "sku": "GOOGLE-PIXEL-9-PRO-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 31310000,
        "stock": 34,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-google-pixel-9-pro-1",
        "authorName": "Hải Đăng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-google-pixel-9-pro-2",
        "authorName": "Hoàng Nam",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "AI Camera",
    "featured": false
  },
  {
    "id": "google-pixel-9",
    "slug": "google-pixel-9",
    "name": "Google Pixel 9",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Google",
    "brandSlug": "google",
    "description": "Trải nghiệm Android thuần và cập nhật dài hạn. Google Tensor G4, Màn hình Actua, 7 năm cập nhật.",
    "shortDescription": "Trải nghiệm Android thuần và cập nhật dài hạn.",
    "price": 19990000,
    "compareAtPrice": 21590000,
    "verdict": "Trải nghiệm Android thuần và cập nhật dài hạn.",
    "highlights": [
      "Google Tensor G4 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình Actua — điểm mạnh đáng chú ý của sản phẩm",
      "7 năm cập nhật — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Google Tensor G4",
      "Màn hình Actua",
      "7 năm cập nhật"
    ],
    "media": [
      {
        "id": "google-pixel-9-media-1",
        "url": "https://picsum.photos/seed/google-pixel-9-a/1200/1200",
        "alt": "Google Pixel 9",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "google-pixel-9-media-2",
        "url": "https://picsum.photos/seed/google-pixel-9-b/1200/1200",
        "alt": "Google Pixel 9 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-google-pixel-9-0",
        "sku": "GOOGLE-PIXEL-9-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 19990000,
        "compareAtPrice": 21590000,
        "stock": 33,
        "lowStockAt": 5
      },
      {
        "id": "v-google-pixel-9-1",
        "sku": "GOOGLE-PIXEL-9-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 21590000,
        "stock": 30,
        "lowStockAt": 5
      },
      {
        "id": "v-google-pixel-9-2",
        "sku": "GOOGLE-PIXEL-9-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 23190000,
        "stock": 21,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-google-pixel-9-1",
        "authorName": "Minh Anh",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-google-pixel-9-2",
        "authorName": "Đức Huy",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "google-pixel-8a",
    "slug": "google-pixel-8a",
    "name": "Google Pixel 8a",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "Google",
    "brandSlug": "google",
    "description": "Camera Pixel với giá dễ tiếp cận hơn dòng Pro. Google Tensor G3, Camera tốt trong tầm giá, Chống nước IP67.",
    "shortDescription": "Camera Pixel với giá dễ tiếp cận hơn dòng Pro.",
    "price": 13990000,
    "compareAtPrice": 15110000,
    "verdict": "Camera Pixel với giá dễ tiếp cận hơn dòng Pro.",
    "highlights": [
      "Google Tensor G3 — điểm mạnh đáng chú ý của sản phẩm",
      "Camera tốt trong tầm giá — điểm mạnh đáng chú ý của sản phẩm",
      "Chống nước IP67 — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Google Tensor G3",
      "Camera tốt trong tầm giá",
      "Chống nước IP67"
    ],
    "media": [
      {
        "id": "google-pixel-8a-media-1",
        "url": "https://picsum.photos/seed/google-pixel-8a-a/1200/1200",
        "alt": "Google Pixel 8a",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "google-pixel-8a-media-2",
        "url": "https://picsum.photos/seed/google-pixel-8a-b/1200/1200",
        "alt": "Google Pixel 8a — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-google-pixel-8a-0",
        "sku": "GOOGLE-PIXEL-8A-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 13990000,
        "compareAtPrice": 15110000,
        "stock": 36,
        "lowStockAt": 5
      },
      {
        "id": "v-google-pixel-8a-1",
        "sku": "GOOGLE-PIXEL-8A-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 15110000,
        "stock": 23,
        "lowStockAt": 5
      },
      {
        "id": "v-google-pixel-8a-2",
        "sku": "GOOGLE-PIXEL-8A-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 16230000,
        "stock": 19,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-google-pixel-8a-1",
        "authorName": "Ngọc Mai",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-google-pixel-8a-2",
        "authorName": "Bảo Trân",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "oneplus-12",
    "slug": "oneplus-12",
    "name": "OnePlus 12",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "OnePlus",
    "brandSlug": "oneplus",
    "description": "Sạc siêu nhanh và hiệu năng flagship giá cạnh tranh. Snapdragon 8 Gen 3, Sạc 100W, Camera Hasselblad.",
    "shortDescription": "Sạc siêu nhanh và hiệu năng flagship giá cạnh tranh.",
    "price": 19990000,
    "compareAtPrice": 21590000,
    "verdict": "Sạc siêu nhanh và hiệu năng flagship giá cạnh tranh.",
    "highlights": [
      "Snapdragon 8 Gen 3 — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc 100W — điểm mạnh đáng chú ý của sản phẩm",
      "Camera Hasselblad — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Snapdragon 8 Gen 3",
      "Sạc 100W",
      "Camera Hasselblad"
    ],
    "media": [
      {
        "id": "oneplus-12-media-1",
        "url": "https://picsum.photos/seed/oneplus-12-a/1200/1200",
        "alt": "OnePlus 12",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "oneplus-12-media-2",
        "url": "https://picsum.photos/seed/oneplus-12-b/1200/1200",
        "alt": "OnePlus 12 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-oneplus-12-0",
        "sku": "ONEPLUS-12-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 19990000,
        "compareAtPrice": 21590000,
        "stock": 28,
        "lowStockAt": 5
      },
      {
        "id": "v-oneplus-12-1",
        "sku": "ONEPLUS-12-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 21590000,
        "stock": 8,
        "lowStockAt": 5
      },
      {
        "id": "v-oneplus-12-2",
        "sku": "ONEPLUS-12-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 23190000,
        "stock": 9,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-oneplus-12-1",
        "authorName": "Phương Thảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-oneplus-12-2",
        "authorName": "Thu Hương",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "oneplus-nord-4",
    "slug": "oneplus-nord-4",
    "name": "OnePlus Nord 4",
    "category": "Điện thoại",
    "categorySlug": "dien-thoai",
    "brand": "OnePlus",
    "brandSlug": "oneplus",
    "description": "Thiết kế kim loại cao cấp ở phân khúc tầm trung. Snapdragon 7+ Gen 3, Khung nhôm nguyên khối, Sạc 100W.",
    "shortDescription": "Thiết kế kim loại cao cấp ở phân khúc tầm trung.",
    "price": 10490000,
    "compareAtPrice": 11330000,
    "verdict": "Thiết kế kim loại cao cấp ở phân khúc tầm trung.",
    "highlights": [
      "Snapdragon 7+ Gen 3 — điểm mạnh đáng chú ý của sản phẩm",
      "Khung nhôm nguyên khối — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc 100W — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Giá bán cao hơn một số đối thủ cùng tầm",
      "Củ sạc có thể không đi kèm trong hộp",
      "Một số tính năng AI cần kết nối internet"
    ],
    "specs": [
      "Snapdragon 7+ Gen 3",
      "Khung nhôm nguyên khối",
      "Sạc 100W"
    ],
    "media": [
      {
        "id": "oneplus-nord-4-media-1",
        "url": "https://picsum.photos/seed/oneplus-nord-4-a/1200/1200",
        "alt": "OnePlus Nord 4",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "oneplus-nord-4-media-2",
        "url": "https://picsum.photos/seed/oneplus-nord-4-b/1200/1200",
        "alt": "OnePlus Nord 4 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-oneplus-nord-4-0",
        "sku": "ONEPLUS-NORD-4-128GB-ĐEN",
        "name": "128 GB / Đen",
        "attributes": {
          "storage": "128 GB",
          "color": "Đen"
        },
        "price": 10490000,
        "compareAtPrice": 11330000,
        "stock": 17,
        "lowStockAt": 5
      },
      {
        "id": "v-oneplus-nord-4-1",
        "sku": "ONEPLUS-NORD-4-256GB-BẠC",
        "name": "256 GB / Bạc",
        "attributes": {
          "storage": "256 GB",
          "color": "Bạc"
        },
        "price": 11330000,
        "stock": 8,
        "lowStockAt": 5
      },
      {
        "id": "v-oneplus-nord-4-2",
        "sku": "ONEPLUS-NORD-4-512GB-XAN",
        "name": "512 GB / Xanh",
        "attributes": {
          "storage": "512 GB",
          "color": "Xanh"
        },
        "price": 12170000,
        "stock": 39,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-oneplus-nord-4-1",
        "authorName": "Minh Anh",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-oneplus-nord-4-2",
        "authorName": "Phương Thảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng cả ngày bình thường, sạc cũng khá nhanh.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "logitech-mx-master-3s",
    "slug": "logitech-mx-master-3s",
    "name": "Logitech MX Master 3S",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Logitech",
    "brandSlug": "logitech",
    "description": "Chuột làm việc yên tĩnh, chính xác và chuyển thiết bị rất nhanh. Cảm biến 8K DPI, Kết nối 3 thiết bị, Cuộn MagSpeed.",
    "shortDescription": "Chuột làm việc yên tĩnh, chính xác và chuyển thiết bị rất nhanh.",
    "price": 2190000,
    "compareAtPrice": 2370000,
    "verdict": "Chuột làm việc yên tĩnh, chính xác và chuyển thiết bị rất nhanh.",
    "highlights": [
      "Cảm biến 8K DPI — điểm mạnh đáng chú ý của sản phẩm",
      "Kết nối 3 thiết bị — điểm mạnh đáng chú ý của sản phẩm",
      "Cuộn MagSpeed — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "Cảm biến 8K DPI",
      "Kết nối 3 thiết bị",
      "Cuộn MagSpeed"
    ],
    "media": [
      {
        "id": "logitech-mx-master-3s-media-1",
        "url": "https://picsum.photos/seed/logitech-mx-master-3s-a/1200/1200",
        "alt": "Logitech MX Master 3S",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "logitech-mx-master-3s-media-2",
        "url": "https://picsum.photos/seed/logitech-mx-master-3s-b/1200/1200",
        "alt": "Logitech MX Master 3S — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-logitech-mx-master-3s-0",
        "sku": "LOGITECH-MX-MASTER-3S-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 2190000,
        "compareAtPrice": 2370000,
        "stock": 38,
        "lowStockAt": 5
      },
      {
        "id": "v-logitech-mx-master-3s-1",
        "sku": "LOGITECH-MX-MASTER-3S-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 2190000,
        "stock": 18,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-logitech-mx-master-3s-1",
        "authorName": "Đức Huy",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-logitech-mx-master-3s-2",
        "authorName": "Minh Anh",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": true
  },
  {
    "id": "logitech-mx-keys-s",
    "slug": "logitech-mx-keys-s",
    "name": "Logitech MX Keys S",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Logitech",
    "brandSlug": "logitech",
    "description": "Bàn phím văn phòng cao cấp gõ êm và bền. Đèn phím thông minh, Kết nối đa thiết bị, Phím yên tĩnh.",
    "shortDescription": "Bàn phím văn phòng cao cấp gõ êm và bền.",
    "price": 2490000,
    "compareAtPrice": 2690000,
    "verdict": "Bàn phím văn phòng cao cấp gõ êm và bền.",
    "highlights": [
      "Đèn phím thông minh — điểm mạnh đáng chú ý của sản phẩm",
      "Kết nối đa thiết bị — điểm mạnh đáng chú ý của sản phẩm",
      "Phím yên tĩnh — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "Đèn phím thông minh",
      "Kết nối đa thiết bị",
      "Phím yên tĩnh"
    ],
    "media": [
      {
        "id": "logitech-mx-keys-s-media-1",
        "url": "https://picsum.photos/seed/logitech-mx-keys-s-a/1200/1200",
        "alt": "Logitech MX Keys S",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "logitech-mx-keys-s-media-2",
        "url": "https://picsum.photos/seed/logitech-mx-keys-s-b/1200/1200",
        "alt": "Logitech MX Keys S — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-logitech-mx-keys-s-0",
        "sku": "LOGITECH-MX-KEYS-S-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 2490000,
        "compareAtPrice": 2690000,
        "stock": 20,
        "lowStockAt": 5
      },
      {
        "id": "v-logitech-mx-keys-s-1",
        "sku": "LOGITECH-MX-KEYS-S-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 2490000,
        "stock": 22,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-logitech-mx-keys-s-1",
        "authorName": "Quốc Bảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-logitech-mx-keys-s-2",
        "authorName": "Minh Anh",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "logitech-mx-anywhere-3s",
    "slug": "logitech-mx-anywhere-3s",
    "name": "Logitech MX Anywhere 3S",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Logitech",
    "brandSlug": "logitech",
    "description": "Chuột di động chính xác cho người làm việc từ xa. Nhỏ gọn di động, Cảm biến 8K DPI, Sạc USB-C.",
    "shortDescription": "Chuột di động chính xác cho người làm việc từ xa.",
    "price": 1890000,
    "compareAtPrice": 2040000,
    "verdict": "Chuột di động chính xác cho người làm việc từ xa.",
    "highlights": [
      "Nhỏ gọn di động — điểm mạnh đáng chú ý của sản phẩm",
      "Cảm biến 8K DPI — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc USB-C — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "Nhỏ gọn di động",
      "Cảm biến 8K DPI",
      "Sạc USB-C"
    ],
    "media": [
      {
        "id": "logitech-mx-anywhere-3s-media-1",
        "url": "https://picsum.photos/seed/logitech-mx-anywhere-3s-a/1200/1200",
        "alt": "Logitech MX Anywhere 3S",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "logitech-mx-anywhere-3s-media-2",
        "url": "https://picsum.photos/seed/logitech-mx-anywhere-3s-b/1200/1200",
        "alt": "Logitech MX Anywhere 3S — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-logitech-mx-anywhere-3s-0",
        "sku": "LOGITECH-MX-ANYWHERE-3S-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 1890000,
        "compareAtPrice": 2040000,
        "stock": 26,
        "lowStockAt": 5
      },
      {
        "id": "v-logitech-mx-anywhere-3s-1",
        "sku": "LOGITECH-MX-ANYWHERE-3S-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 1890000,
        "stock": 35,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-logitech-mx-anywhere-3s-1",
        "authorName": "Thanh Tùng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-logitech-mx-anywhere-3s-2",
        "authorName": "Hoàng Nam",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "logitech-k380",
    "slug": "logitech-k380",
    "name": "Logitech K380",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Logitech",
    "brandSlug": "logitech",
    "description": "Bàn phím Bluetooth giá tốt cho máy tính bảng và laptop. Kết nối 3 thiết bị Bluetooth, Nhỏ gọn, Pin 2 năm.",
    "shortDescription": "Bàn phím Bluetooth giá tốt cho máy tính bảng và laptop.",
    "price": 690000,
    "compareAtPrice": 750000,
    "verdict": "Bàn phím Bluetooth giá tốt cho máy tính bảng và laptop.",
    "highlights": [
      "Kết nối 3 thiết bị Bluetooth — điểm mạnh đáng chú ý của sản phẩm",
      "Nhỏ gọn — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 2 năm — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "Kết nối 3 thiết bị Bluetooth",
      "Nhỏ gọn",
      "Pin 2 năm"
    ],
    "media": [
      {
        "id": "logitech-k380-media-1",
        "url": "https://picsum.photos/seed/logitech-k380-a/1200/1200",
        "alt": "Logitech K380",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "logitech-k380-media-2",
        "url": "https://picsum.photos/seed/logitech-k380-b/1200/1200",
        "alt": "Logitech K380 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-logitech-k380-0",
        "sku": "LOGITECH-K380-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 690000,
        "compareAtPrice": 750000,
        "stock": 12,
        "lowStockAt": 5
      },
      {
        "id": "v-logitech-k380-1",
        "sku": "LOGITECH-K380-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 690000,
        "stock": 41,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-logitech-k380-1",
        "authorName": "Hải Đăng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-logitech-k380-2",
        "authorName": "Thu Hương",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "anker-737-power-bank",
    "slug": "anker-737-power-bank",
    "name": "Anker 737 Power Bank",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Anker",
    "brandSlug": "anker",
    "description": "Sạc dự phòng dung lượng lớn, đủ sạc đầy laptop 1 lần. 24000 mAh, Sạc nhanh 140W, Màn hình hiển thị.",
    "shortDescription": "Sạc dự phòng dung lượng lớn, đủ sạc đầy laptop 1 lần.",
    "price": 1690000,
    "compareAtPrice": 1830000,
    "verdict": "Sạc dự phòng dung lượng lớn, đủ sạc đầy laptop 1 lần.",
    "highlights": [
      "24000 mAh — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc nhanh 140W — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình hiển thị — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "24000 mAh",
      "Sạc nhanh 140W",
      "Màn hình hiển thị"
    ],
    "media": [
      {
        "id": "anker-737-power-bank-media-1",
        "url": "https://picsum.photos/seed/anker-737-power-bank-a/1200/1200",
        "alt": "Anker 737 Power Bank",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "anker-737-power-bank-media-2",
        "url": "https://picsum.photos/seed/anker-737-power-bank-b/1200/1200",
        "alt": "Anker 737 Power Bank — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-anker-737-power-bank-0",
        "sku": "ANKER-737-POWER-BANK-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 1690000,
        "compareAtPrice": 1830000,
        "stock": 38,
        "lowStockAt": 5
      },
      {
        "id": "v-anker-737-power-bank-1",
        "sku": "ANKER-737-POWER-BANK-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 1690000,
        "stock": 11,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-anker-737-power-bank-1",
        "authorName": "Bảo Trân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-anker-737-power-bank-2",
        "authorName": "Quốc Bảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "anker-nano-power-bank",
    "slug": "anker-nano-power-bank",
    "name": "Anker Nano Power Bank",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Anker",
    "brandSlug": "anker",
    "description": "Nhỏ gọn nhét túi, tiện mang theo hằng ngày. 10000 mAh, Chân cắm gập gọn, Sạc nhanh 22.5W.",
    "shortDescription": "Nhỏ gọn nhét túi, tiện mang theo hằng ngày.",
    "price": 590000,
    "compareAtPrice": 640000,
    "verdict": "Nhỏ gọn nhét túi, tiện mang theo hằng ngày.",
    "highlights": [
      "10000 mAh — điểm mạnh đáng chú ý của sản phẩm",
      "Chân cắm gập gọn — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc nhanh 22.5W — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "10000 mAh",
      "Chân cắm gập gọn",
      "Sạc nhanh 22.5W"
    ],
    "media": [
      {
        "id": "anker-nano-power-bank-media-1",
        "url": "https://picsum.photos/seed/anker-nano-power-bank-a/1200/1200",
        "alt": "Anker Nano Power Bank",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "anker-nano-power-bank-media-2",
        "url": "https://picsum.photos/seed/anker-nano-power-bank-b/1200/1200",
        "alt": "Anker Nano Power Bank — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-anker-nano-power-bank-0",
        "sku": "ANKER-NANO-POWER-BANK-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 590000,
        "compareAtPrice": 640000,
        "stock": 10,
        "lowStockAt": 5
      },
      {
        "id": "v-anker-nano-power-bank-1",
        "sku": "ANKER-NANO-POWER-BANK-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 590000,
        "stock": 5,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-anker-nano-power-bank-1",
        "authorName": "Minh Anh",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-anker-nano-power-bank-2",
        "authorName": "Quốc Bảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "anker-powerconf-s330",
    "slug": "anker-powerconf-s330",
    "name": "Anker PowerConf S330",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Anker",
    "brandSlug": "anker",
    "description": "Chất lượng âm thanh rõ ràng cho họp online. Loa họp trực tuyến, Khử ồn AI, Kết nối USB-C/Bluetooth.",
    "shortDescription": "Chất lượng âm thanh rõ ràng cho họp online.",
    "price": 1290000,
    "compareAtPrice": 1390000,
    "verdict": "Chất lượng âm thanh rõ ràng cho họp online.",
    "highlights": [
      "Loa họp trực tuyến — điểm mạnh đáng chú ý của sản phẩm",
      "Khử ồn AI — điểm mạnh đáng chú ý của sản phẩm",
      "Kết nối USB-C/Bluetooth — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "Loa họp trực tuyến",
      "Khử ồn AI",
      "Kết nối USB-C/Bluetooth"
    ],
    "media": [
      {
        "id": "anker-powerconf-s330-media-1",
        "url": "https://picsum.photos/seed/anker-powerconf-s330-a/1200/1200",
        "alt": "Anker PowerConf S330",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "anker-powerconf-s330-media-2",
        "url": "https://picsum.photos/seed/anker-powerconf-s330-b/1200/1200",
        "alt": "Anker PowerConf S330 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-anker-powerconf-s330-0",
        "sku": "ANKER-POWERCONF-S330-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 1290000,
        "compareAtPrice": 1390000,
        "stock": 16,
        "lowStockAt": 5
      },
      {
        "id": "v-anker-powerconf-s330-1",
        "sku": "ANKER-POWERCONF-S330-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 1290000,
        "stock": 36,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-anker-powerconf-s330-1",
        "authorName": "Gia Hân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-anker-powerconf-s330-2",
        "authorName": "Thu Hương",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "belkin-3-in-1-wireless-charger",
    "slug": "belkin-3-in-1-wireless-charger",
    "name": "Belkin 3-in-1 Wireless Charger",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Belkin",
    "brandSlug": "belkin",
    "description": "Một trạm sạc cho điện thoại, đồng hồ và tai nghe. Sạc không dây MagSafe, Sạc đồng thời 3 thiết bị, Thiết kế gập gọn.",
    "shortDescription": "Một trạm sạc cho điện thoại, đồng hồ và tai nghe.",
    "price": 2290000,
    "compareAtPrice": 2470000,
    "verdict": "Một trạm sạc cho điện thoại, đồng hồ và tai nghe.",
    "highlights": [
      "Sạc không dây MagSafe — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc đồng thời 3 thiết bị — điểm mạnh đáng chú ý của sản phẩm",
      "Thiết kế gập gọn — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "Sạc không dây MagSafe",
      "Sạc đồng thời 3 thiết bị",
      "Thiết kế gập gọn"
    ],
    "media": [
      {
        "id": "belkin-3-in-1-wireless-charger-media-1",
        "url": "https://picsum.photos/seed/belkin-3-in-1-wireless-charger-a/1200/1200",
        "alt": "Belkin 3-in-1 Wireless Charger",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "belkin-3-in-1-wireless-charger-media-2",
        "url": "https://picsum.photos/seed/belkin-3-in-1-wireless-charger-b/1200/1200",
        "alt": "Belkin 3-in-1 Wireless Charger — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-belkin-3-in-1-wireless-charger-0",
        "sku": "BELKIN-3-IN-1-WIRELESS-CHARGER-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 2290000,
        "compareAtPrice": 2470000,
        "stock": 19,
        "lowStockAt": 5
      },
      {
        "id": "v-belkin-3-in-1-wireless-charger-1",
        "sku": "BELKIN-3-IN-1-WIRELESS-CHARGER-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 2290000,
        "stock": 9,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-belkin-3-in-1-wireless-charger-1",
        "authorName": "Đức Huy",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-belkin-3-in-1-wireless-charger-2",
        "authorName": "Hoàng Nam",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "belkin-usb-c-hub-7-in-1",
    "slug": "belkin-usb-c-hub-7-in-1",
    "name": "Belkin USB-C Hub 7-in-1",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Belkin",
    "brandSlug": "belkin",
    "description": "Mở rộng cổng kết nối đầy đủ cho laptop mỏng. HDMI 4K, Đọc thẻ SD, Sạc PD 100W.",
    "shortDescription": "Mở rộng cổng kết nối đầy đủ cho laptop mỏng.",
    "price": 1490000,
    "compareAtPrice": 1610000,
    "verdict": "Mở rộng cổng kết nối đầy đủ cho laptop mỏng.",
    "highlights": [
      "HDMI 4K — điểm mạnh đáng chú ý của sản phẩm",
      "Đọc thẻ SD — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc PD 100W — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "HDMI 4K",
      "Đọc thẻ SD",
      "Sạc PD 100W"
    ],
    "media": [
      {
        "id": "belkin-usb-c-hub-7-in-1-media-1",
        "url": "https://picsum.photos/seed/belkin-usb-c-hub-7-in-1-a/1200/1200",
        "alt": "Belkin USB-C Hub 7-in-1",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "belkin-usb-c-hub-7-in-1-media-2",
        "url": "https://picsum.photos/seed/belkin-usb-c-hub-7-in-1-b/1200/1200",
        "alt": "Belkin USB-C Hub 7-in-1 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-belkin-usb-c-hub-7-in-1-0",
        "sku": "BELKIN-USB-C-HUB-7-IN-1-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 1490000,
        "compareAtPrice": 1610000,
        "stock": 29,
        "lowStockAt": 5
      },
      {
        "id": "v-belkin-usb-c-hub-7-in-1-1",
        "sku": "BELKIN-USB-C-HUB-7-IN-1-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 1490000,
        "stock": 5,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-belkin-usb-c-hub-7-in-1-1",
        "authorName": "Đức Huy",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-belkin-usb-c-hub-7-in-1-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "baseus-gan-100w-charger",
    "slug": "baseus-gan-100w-charger",
    "name": "Baseus GaN 100W Charger",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Baseus",
    "brandSlug": "baseus",
    "description": "Một cục sạc thay thế nhiều adapter cồng kềnh. Công nghệ GaN, 3 cổng sạc, Nhỏ gọn hơn sạc thường 40%.",
    "shortDescription": "Một cục sạc thay thế nhiều adapter cồng kềnh.",
    "price": 890000,
    "compareAtPrice": 960000,
    "verdict": "Một cục sạc thay thế nhiều adapter cồng kềnh.",
    "highlights": [
      "Công nghệ GaN — điểm mạnh đáng chú ý của sản phẩm",
      "3 cổng sạc — điểm mạnh đáng chú ý của sản phẩm",
      "Nhỏ gọn hơn sạc thường 40% — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "Công nghệ GaN",
      "3 cổng sạc",
      "Nhỏ gọn hơn sạc thường 40%"
    ],
    "media": [
      {
        "id": "baseus-gan-100w-charger-media-1",
        "url": "https://picsum.photos/seed/baseus-gan-100w-charger-a/1200/1200",
        "alt": "Baseus GaN 100W Charger",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "baseus-gan-100w-charger-media-2",
        "url": "https://picsum.photos/seed/baseus-gan-100w-charger-b/1200/1200",
        "alt": "Baseus GaN 100W Charger — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-baseus-gan-100w-charger-0",
        "sku": "BASEUS-GAN-100W-CHARGER-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 890000,
        "compareAtPrice": 960000,
        "stock": 36,
        "lowStockAt": 5
      },
      {
        "id": "v-baseus-gan-100w-charger-1",
        "sku": "BASEUS-GAN-100W-CHARGER-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 890000,
        "stock": 9,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-baseus-gan-100w-charger-1",
        "authorName": "Xuân Sơn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-baseus-gan-100w-charger-2",
        "authorName": "Hải Đăng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "baseus-magnetic-power-bank",
    "slug": "baseus-magnetic-power-bank",
    "name": "Baseus Magnetic Power Bank",
    "category": "Phụ kiện",
    "categorySlug": "phu-kien",
    "brand": "Baseus",
    "brandSlug": "baseus",
    "description": "Sạc dự phòng kiêm giá đỡ tiện lợi khi xem video. 10000 mAh, Sạc nam châm MagSafe, Có chân đế dựng điện thoại.",
    "shortDescription": "Sạc dự phòng kiêm giá đỡ tiện lợi khi xem video.",
    "price": 990000,
    "compareAtPrice": 1070000,
    "verdict": "Sạc dự phòng kiêm giá đỡ tiện lợi khi xem video.",
    "highlights": [
      "10000 mAh — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc nam châm MagSafe — điểm mạnh đáng chú ý của sản phẩm",
      "Có chân đế dựng điện thoại — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Không phải mẫu rẻ nhất trong phân khúc",
      "Một số tính năng nâng cao cần cài thêm phần mềm",
      "Túi/hộp đựng đi kèm khá đơn giản"
    ],
    "specs": [
      "10000 mAh",
      "Sạc nam châm MagSafe",
      "Có chân đế dựng điện thoại"
    ],
    "media": [
      {
        "id": "baseus-magnetic-power-bank-media-1",
        "url": "https://picsum.photos/seed/baseus-magnetic-power-bank-a/1200/1200",
        "alt": "Baseus Magnetic Power Bank",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "baseus-magnetic-power-bank-media-2",
        "url": "https://picsum.photos/seed/baseus-magnetic-power-bank-b/1200/1200",
        "alt": "Baseus Magnetic Power Bank — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-baseus-magnetic-power-bank-0",
        "sku": "BASEUS-MAGNETIC-POWER-BANK-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 990000,
        "compareAtPrice": 1070000,
        "stock": 41,
        "lowStockAt": 5
      },
      {
        "id": "v-baseus-magnetic-power-bank-1",
        "sku": "BASEUS-MAGNETIC-POWER-BANK-TRẮ",
        "name": "Trắng",
        "attributes": {
          "color": "Trắng"
        },
        "price": 990000,
        "stock": 28,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-baseus-magnetic-power-bank-1",
        "authorName": "Xuân Sơn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-baseus-magnetic-power-bank-2",
        "authorName": "Bảo Trân",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Kết nối ổn định, không bị giật hay rớt tín hiệu.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "sony-wh-1000xm5",
    "slug": "sony-wh-1000xm5",
    "name": "Sony WH-1000XM5",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "Sony",
    "brandSlug": "sony",
    "description": "Không gian tập trung đáng tin cậy cho văn phòng và chuyến bay. ANC thích ứng, Pin 30 giờ, Multipoint.",
    "shortDescription": "Không gian tập trung đáng tin cậy cho văn phòng và chuyến bay.",
    "price": 7490000,
    "compareAtPrice": 8090000,
    "verdict": "Không gian tập trung đáng tin cậy cho văn phòng và chuyến bay.",
    "highlights": [
      "ANC thích ứng — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 30 giờ — điểm mạnh đáng chú ý của sản phẩm",
      "Multipoint — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "ANC thích ứng",
      "Pin 30 giờ",
      "Multipoint"
    ],
    "media": [
      {
        "id": "sony-wh-1000xm5-media-1",
        "url": "https://picsum.photos/seed/sony-wh-1000xm5-a/1200/1200",
        "alt": "Sony WH-1000XM5",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "sony-wh-1000xm5-media-2",
        "url": "https://picsum.photos/seed/sony-wh-1000xm5-b/1200/1200",
        "alt": "Sony WH-1000XM5 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-sony-wh-1000xm5-0",
        "sku": "SONY-WH-1000XM5-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 7490000,
        "compareAtPrice": 8090000,
        "stock": 30,
        "lowStockAt": 5
      },
      {
        "id": "v-sony-wh-1000xm5-1",
        "sku": "SONY-WH-1000XM5-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 7490000,
        "stock": 11,
        "lowStockAt": 5
      },
      {
        "id": "v-sony-wh-1000xm5-2",
        "sku": "SONY-WH-1000XM5-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 7490000,
        "stock": 19,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-sony-wh-1000xm5-1",
        "authorName": "Thanh Tùng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-sony-wh-1000xm5-2",
        "authorName": "Phương Thảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Chống ồn tốt",
    "featured": true
  },
  {
    "id": "sony-wf-1000xm5",
    "slug": "sony-wf-1000xm5",
    "name": "Sony WF-1000XM5",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "Sony",
    "brandSlug": "sony",
    "description": "Tai nghe true wireless chống ồn tốt nhất của Sony. ANC nhỏ gọn, Pin 8 giờ + hộp sạc, Âm thanh Hi-Res.",
    "shortDescription": "Tai nghe true wireless chống ồn tốt nhất của Sony.",
    "price": 5990000,
    "compareAtPrice": 6470000,
    "verdict": "Tai nghe true wireless chống ồn tốt nhất của Sony.",
    "highlights": [
      "ANC nhỏ gọn — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 8 giờ + hộp sạc — điểm mạnh đáng chú ý của sản phẩm",
      "Âm thanh Hi-Res — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "ANC nhỏ gọn",
      "Pin 8 giờ + hộp sạc",
      "Âm thanh Hi-Res"
    ],
    "media": [
      {
        "id": "sony-wf-1000xm5-media-1",
        "url": "https://picsum.photos/seed/sony-wf-1000xm5-a/1200/1200",
        "alt": "Sony WF-1000XM5",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "sony-wf-1000xm5-media-2",
        "url": "https://picsum.photos/seed/sony-wf-1000xm5-b/1200/1200",
        "alt": "Sony WF-1000XM5 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-sony-wf-1000xm5-0",
        "sku": "SONY-WF-1000XM5-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 5990000,
        "compareAtPrice": 6470000,
        "stock": 40,
        "lowStockAt": 5
      },
      {
        "id": "v-sony-wf-1000xm5-1",
        "sku": "SONY-WF-1000XM5-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 5990000,
        "stock": 36,
        "lowStockAt": 5
      },
      {
        "id": "v-sony-wf-1000xm5-2",
        "sku": "SONY-WF-1000XM5-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 5990000,
        "stock": 3,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-sony-wf-1000xm5-1",
        "authorName": "Phương Thảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-sony-wf-1000xm5-2",
        "authorName": "Linh Đan",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "sony-srs-xb13",
    "slug": "sony-srs-xb13",
    "name": "Sony SRS-XB13",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "Sony",
    "brandSlug": "sony",
    "description": "Loa bluetooth bỏ túi cho các buổi đi chơi ngoài trời. Chống nước IP67, Pin 16 giờ, Nhỏ gọn.",
    "shortDescription": "Loa bluetooth bỏ túi cho các buổi đi chơi ngoài trời.",
    "price": 990000,
    "compareAtPrice": 1070000,
    "verdict": "Loa bluetooth bỏ túi cho các buổi đi chơi ngoài trời.",
    "highlights": [
      "Chống nước IP67 — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 16 giờ — điểm mạnh đáng chú ý của sản phẩm",
      "Nhỏ gọn — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "Chống nước IP67",
      "Pin 16 giờ",
      "Nhỏ gọn"
    ],
    "media": [
      {
        "id": "sony-srs-xb13-media-1",
        "url": "https://picsum.photos/seed/sony-srs-xb13-a/1200/1200",
        "alt": "Sony SRS-XB13",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "sony-srs-xb13-media-2",
        "url": "https://picsum.photos/seed/sony-srs-xb13-b/1200/1200",
        "alt": "Sony SRS-XB13 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-sony-srs-xb13-0",
        "sku": "SONY-SRS-XB13-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 990000,
        "compareAtPrice": 1070000,
        "stock": 22,
        "lowStockAt": 5
      },
      {
        "id": "v-sony-srs-xb13-1",
        "sku": "SONY-SRS-XB13-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 990000,
        "stock": 33,
        "lowStockAt": 5
      },
      {
        "id": "v-sony-srs-xb13-2",
        "sku": "SONY-SRS-XB13-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 990000,
        "stock": 29,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-sony-srs-xb13-1",
        "authorName": "Gia Hân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-sony-srs-xb13-2",
        "authorName": "Linh Đan",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "jbl-flip-6",
    "slug": "jbl-flip-6",
    "name": "JBL Flip 6",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "JBL",
    "brandSlug": "jbl",
    "description": "Loa di động bền, âm lượng lớn cho ngoài trời. Chống nước IP67, Âm thanh JBL Pro Sound, Pin 12 giờ.",
    "shortDescription": "Loa di động bền, âm lượng lớn cho ngoài trời.",
    "price": 2290000,
    "compareAtPrice": 2470000,
    "verdict": "Loa di động bền, âm lượng lớn cho ngoài trời.",
    "highlights": [
      "Chống nước IP67 — điểm mạnh đáng chú ý của sản phẩm",
      "Âm thanh JBL Pro Sound — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 12 giờ — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "Chống nước IP67",
      "Âm thanh JBL Pro Sound",
      "Pin 12 giờ"
    ],
    "media": [
      {
        "id": "jbl-flip-6-media-1",
        "url": "https://picsum.photos/seed/jbl-flip-6-a/1200/1200",
        "alt": "JBL Flip 6",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "jbl-flip-6-media-2",
        "url": "https://picsum.photos/seed/jbl-flip-6-b/1200/1200",
        "alt": "JBL Flip 6 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-jbl-flip-6-0",
        "sku": "JBL-FLIP-6-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 2290000,
        "compareAtPrice": 2470000,
        "stock": 31,
        "lowStockAt": 5
      },
      {
        "id": "v-jbl-flip-6-1",
        "sku": "JBL-FLIP-6-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 2290000,
        "stock": 35,
        "lowStockAt": 5
      },
      {
        "id": "v-jbl-flip-6-2",
        "sku": "JBL-FLIP-6-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 2290000,
        "stock": 7,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-jbl-flip-6-1",
        "authorName": "Minh Anh",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-jbl-flip-6-2",
        "authorName": "Linh Đan",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "jbl-charge-5",
    "slug": "jbl-charge-5",
    "name": "JBL Charge 5",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "JBL",
    "brandSlug": "jbl",
    "description": "Vừa nghe nhạc vừa sạc điện thoại khi đi cắm trại. Pin 20 giờ, Sạc dự phòng cho điện thoại, Chống nước IP67.",
    "shortDescription": "Vừa nghe nhạc vừa sạc điện thoại khi đi cắm trại.",
    "price": 3490000,
    "compareAtPrice": 3770000,
    "verdict": "Vừa nghe nhạc vừa sạc điện thoại khi đi cắm trại.",
    "highlights": [
      "Pin 20 giờ — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc dự phòng cho điện thoại — điểm mạnh đáng chú ý của sản phẩm",
      "Chống nước IP67 — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "Pin 20 giờ",
      "Sạc dự phòng cho điện thoại",
      "Chống nước IP67"
    ],
    "media": [
      {
        "id": "jbl-charge-5-media-1",
        "url": "https://picsum.photos/seed/jbl-charge-5-a/1200/1200",
        "alt": "JBL Charge 5",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "jbl-charge-5-media-2",
        "url": "https://picsum.photos/seed/jbl-charge-5-b/1200/1200",
        "alt": "JBL Charge 5 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-jbl-charge-5-0",
        "sku": "JBL-CHARGE-5-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 3490000,
        "compareAtPrice": 3770000,
        "stock": 25,
        "lowStockAt": 5
      },
      {
        "id": "v-jbl-charge-5-1",
        "sku": "JBL-CHARGE-5-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 3490000,
        "stock": 30,
        "lowStockAt": 5
      },
      {
        "id": "v-jbl-charge-5-2",
        "sku": "JBL-CHARGE-5-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 3490000,
        "stock": 21,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-jbl-charge-5-1",
        "authorName": "Bích Ngọc",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-jbl-charge-5-2",
        "authorName": "Quốc Bảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "jbl-tune-720bt",
    "slug": "jbl-tune-720bt",
    "name": "JBL Tune 720BT",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "JBL",
    "brandSlug": "jbl",
    "description": "Tai nghe over-ear pin trâu cho nhu cầu phổ thông. Pin 76 giờ, Bass sâu JBL, Gấp gọn.",
    "shortDescription": "Tai nghe over-ear pin trâu cho nhu cầu phổ thông.",
    "price": 1190000,
    "compareAtPrice": 1290000,
    "verdict": "Tai nghe over-ear pin trâu cho nhu cầu phổ thông.",
    "highlights": [
      "Pin 76 giờ — điểm mạnh đáng chú ý của sản phẩm",
      "Bass sâu JBL — điểm mạnh đáng chú ý của sản phẩm",
      "Gấp gọn — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "Pin 76 giờ",
      "Bass sâu JBL",
      "Gấp gọn"
    ],
    "media": [
      {
        "id": "jbl-tune-720bt-media-1",
        "url": "https://picsum.photos/seed/jbl-tune-720bt-a/1200/1200",
        "alt": "JBL Tune 720BT",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "jbl-tune-720bt-media-2",
        "url": "https://picsum.photos/seed/jbl-tune-720bt-b/1200/1200",
        "alt": "JBL Tune 720BT — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-jbl-tune-720bt-0",
        "sku": "JBL-TUNE-720BT-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 1190000,
        "compareAtPrice": 1290000,
        "stock": 7,
        "lowStockAt": 5
      },
      {
        "id": "v-jbl-tune-720bt-1",
        "sku": "JBL-TUNE-720BT-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 1190000,
        "stock": 15,
        "lowStockAt": 5
      },
      {
        "id": "v-jbl-tune-720bt-2",
        "sku": "JBL-TUNE-720BT-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 1190000,
        "stock": 34,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-jbl-tune-720bt-1",
        "authorName": "Ngọc Mai",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-jbl-tune-720bt-2",
        "authorName": "Xuân Sơn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "bose-quietcomfort-ultra",
    "slug": "bose-quietcomfort-ultra",
    "name": "Bose QuietComfort Ultra",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "Bose",
    "brandSlug": "bose",
    "description": "Chống ồn đỉnh cao và âm thanh không gian sống động. ANC hàng đầu, Âm trường không gian, Pin 24 giờ.",
    "shortDescription": "Chống ồn đỉnh cao và âm thanh không gian sống động.",
    "price": 8990000,
    "compareAtPrice": 9710000,
    "verdict": "Chống ồn đỉnh cao và âm thanh không gian sống động.",
    "highlights": [
      "ANC hàng đầu — điểm mạnh đáng chú ý của sản phẩm",
      "Âm trường không gian — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 24 giờ — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "ANC hàng đầu",
      "Âm trường không gian",
      "Pin 24 giờ"
    ],
    "media": [
      {
        "id": "bose-quietcomfort-ultra-media-1",
        "url": "https://picsum.photos/seed/bose-quietcomfort-ultra-a/1200/1200",
        "alt": "Bose QuietComfort Ultra",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "bose-quietcomfort-ultra-media-2",
        "url": "https://picsum.photos/seed/bose-quietcomfort-ultra-b/1200/1200",
        "alt": "Bose QuietComfort Ultra — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-bose-quietcomfort-ultra-0",
        "sku": "BOSE-QUIETCOMFORT-ULTRA-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 8990000,
        "compareAtPrice": 9710000,
        "stock": 29,
        "lowStockAt": 5
      },
      {
        "id": "v-bose-quietcomfort-ultra-1",
        "sku": "BOSE-QUIETCOMFORT-ULTRA-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 8990000,
        "stock": 31,
        "lowStockAt": 5
      },
      {
        "id": "v-bose-quietcomfort-ultra-2",
        "sku": "BOSE-QUIETCOMFORT-ULTRA-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 8990000,
        "stock": 35,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-bose-quietcomfort-ultra-1",
        "authorName": "Phương Thảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-bose-quietcomfort-ultra-2",
        "authorName": "Quốc Bảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Flagship ANC",
    "featured": false
  },
  {
    "id": "bose-soundlink-flex",
    "slug": "bose-soundlink-flex",
    "name": "Bose SoundLink Flex",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "Bose",
    "brandSlug": "bose",
    "description": "Loa di động bền, âm thanh cân bằng dù để nằm hay dựng. Chống nước IP67, PositionIQ tự cân bằng âm, Pin 12 giờ.",
    "shortDescription": "Loa di động bền, âm thanh cân bằng dù để nằm hay dựng.",
    "price": 3290000,
    "compareAtPrice": 3550000,
    "verdict": "Loa di động bền, âm thanh cân bằng dù để nằm hay dựng.",
    "highlights": [
      "Chống nước IP67 — điểm mạnh đáng chú ý của sản phẩm",
      "PositionIQ tự cân bằng âm — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 12 giờ — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "Chống nước IP67",
      "PositionIQ tự cân bằng âm",
      "Pin 12 giờ"
    ],
    "media": [
      {
        "id": "bose-soundlink-flex-media-1",
        "url": "https://picsum.photos/seed/bose-soundlink-flex-a/1200/1200",
        "alt": "Bose SoundLink Flex",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "bose-soundlink-flex-media-2",
        "url": "https://picsum.photos/seed/bose-soundlink-flex-b/1200/1200",
        "alt": "Bose SoundLink Flex — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-bose-soundlink-flex-0",
        "sku": "BOSE-SOUNDLINK-FLEX-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 3290000,
        "compareAtPrice": 3550000,
        "stock": 29,
        "lowStockAt": 5
      },
      {
        "id": "v-bose-soundlink-flex-1",
        "sku": "BOSE-SOUNDLINK-FLEX-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 3290000,
        "stock": 30,
        "lowStockAt": 5
      },
      {
        "id": "v-bose-soundlink-flex-2",
        "sku": "BOSE-SOUNDLINK-FLEX-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 3290000,
        "stock": 25,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-bose-soundlink-flex-1",
        "authorName": "Ngọc Mai",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-bose-soundlink-flex-2",
        "authorName": "Xuân Sơn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "sennheiser-momentum-4",
    "slug": "sennheiser-momentum-4",
    "name": "Sennheiser Momentum 4",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "Sennheiser",
    "brandSlug": "sennheiser",
    "description": "Pin cực trâu và chất âm tự nhiên đặc trưng Sennheiser. Pin 60 giờ, ANC thích ứng, Âm thanh Hi-Res.",
    "shortDescription": "Pin cực trâu và chất âm tự nhiên đặc trưng Sennheiser.",
    "price": 7990000,
    "compareAtPrice": 8630000,
    "verdict": "Pin cực trâu và chất âm tự nhiên đặc trưng Sennheiser.",
    "highlights": [
      "Pin 60 giờ — điểm mạnh đáng chú ý của sản phẩm",
      "ANC thích ứng — điểm mạnh đáng chú ý của sản phẩm",
      "Âm thanh Hi-Res — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "Pin 60 giờ",
      "ANC thích ứng",
      "Âm thanh Hi-Res"
    ],
    "media": [
      {
        "id": "sennheiser-momentum-4-media-1",
        "url": "https://picsum.photos/seed/sennheiser-momentum-4-a/1200/1200",
        "alt": "Sennheiser Momentum 4",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "sennheiser-momentum-4-media-2",
        "url": "https://picsum.photos/seed/sennheiser-momentum-4-b/1200/1200",
        "alt": "Sennheiser Momentum 4 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-sennheiser-momentum-4-0",
        "sku": "SENNHEISER-MOMENTUM-4-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 7990000,
        "compareAtPrice": 8630000,
        "stock": 13,
        "lowStockAt": 5
      },
      {
        "id": "v-sennheiser-momentum-4-1",
        "sku": "SENNHEISER-MOMENTUM-4-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 7990000,
        "stock": 34,
        "lowStockAt": 5
      },
      {
        "id": "v-sennheiser-momentum-4-2",
        "sku": "SENNHEISER-MOMENTUM-4-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 7990000,
        "stock": 34,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-sennheiser-momentum-4-1",
        "authorName": "Minh Anh",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-sennheiser-momentum-4-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "sennheiser-hd-660s2",
    "slug": "sennheiser-hd-660s2",
    "name": "Sennheiser HD 660S2",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "Sennheiser",
    "brandSlug": "sennheiser",
    "description": "Lựa chọn cho người nghe nhạc nghiêm túc tại nhà. Tai nghe có dây audiophile, Trở kháng thấp, Âm thanh chi tiết cao.",
    "shortDescription": "Lựa chọn cho người nghe nhạc nghiêm túc tại nhà.",
    "price": 9490000,
    "compareAtPrice": 10250000,
    "verdict": "Lựa chọn cho người nghe nhạc nghiêm túc tại nhà.",
    "highlights": [
      "Tai nghe có dây audiophile — điểm mạnh đáng chú ý của sản phẩm",
      "Trở kháng thấp — điểm mạnh đáng chú ý của sản phẩm",
      "Âm thanh chi tiết cao — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "Tai nghe có dây audiophile",
      "Trở kháng thấp",
      "Âm thanh chi tiết cao"
    ],
    "media": [
      {
        "id": "sennheiser-hd-660s2-media-1",
        "url": "https://picsum.photos/seed/sennheiser-hd-660s2-a/1200/1200",
        "alt": "Sennheiser HD 660S2",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "sennheiser-hd-660s2-media-2",
        "url": "https://picsum.photos/seed/sennheiser-hd-660s2-b/1200/1200",
        "alt": "Sennheiser HD 660S2 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-sennheiser-hd-660s2-0",
        "sku": "SENNHEISER-HD-660S2-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 9490000,
        "compareAtPrice": 10250000,
        "stock": 31,
        "lowStockAt": 5
      },
      {
        "id": "v-sennheiser-hd-660s2-1",
        "sku": "SENNHEISER-HD-660S2-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 9490000,
        "stock": 36,
        "lowStockAt": 5
      },
      {
        "id": "v-sennheiser-hd-660s2-2",
        "sku": "SENNHEISER-HD-660S2-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 9490000,
        "stock": 33,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-sennheiser-hd-660s2-1",
        "authorName": "Xuân Sơn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-sennheiser-hd-660s2-2",
        "authorName": "Ngọc Mai",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "marshall-emberton-ii",
    "slug": "marshall-emberton-ii",
    "name": "Marshall Emberton II",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "Marshall",
    "brandSlug": "marshall",
    "description": "Phong cách retro với âm thanh mạnh mẽ đặc trưng Marshall. Thiết kế cổ điển, Chống nước IP67, Pin 30 giờ.",
    "shortDescription": "Phong cách retro với âm thanh mạnh mẽ đặc trưng Marshall.",
    "price": 3190000,
    "compareAtPrice": 3450000,
    "verdict": "Phong cách retro với âm thanh mạnh mẽ đặc trưng Marshall.",
    "highlights": [
      "Thiết kế cổ điển — điểm mạnh đáng chú ý của sản phẩm",
      "Chống nước IP67 — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 30 giờ — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "Thiết kế cổ điển",
      "Chống nước IP67",
      "Pin 30 giờ"
    ],
    "media": [
      {
        "id": "marshall-emberton-ii-media-1",
        "url": "https://picsum.photos/seed/marshall-emberton-ii-a/1200/1200",
        "alt": "Marshall Emberton II",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "marshall-emberton-ii-media-2",
        "url": "https://picsum.photos/seed/marshall-emberton-ii-b/1200/1200",
        "alt": "Marshall Emberton II — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-marshall-emberton-ii-0",
        "sku": "MARSHALL-EMBERTON-II-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 3190000,
        "compareAtPrice": 3450000,
        "stock": 26,
        "lowStockAt": 5
      },
      {
        "id": "v-marshall-emberton-ii-1",
        "sku": "MARSHALL-EMBERTON-II-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 3190000,
        "stock": 13,
        "lowStockAt": 5
      },
      {
        "id": "v-marshall-emberton-ii-2",
        "sku": "MARSHALL-EMBERTON-II-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 3190000,
        "stock": 3,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-marshall-emberton-ii-1",
        "authorName": "Bảo Trân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-marshall-emberton-ii-2",
        "authorName": "Xuân Sơn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "marshall-motif-ii-anc",
    "slug": "marshall-motif-ii-anc",
    "name": "Marshall Motif II ANC",
    "category": "Âm thanh",
    "categorySlug": "am-thanh",
    "brand": "Marshall",
    "brandSlug": "marshall",
    "description": "Tai nghe true wireless phong cách Marshall có chống ồn. ANC chủ động, Thiết kế nhỏ gọn, Sạc nhanh.",
    "shortDescription": "Tai nghe true wireless phong cách Marshall có chống ồn.",
    "price": 4990000,
    "compareAtPrice": 5390000,
    "verdict": "Tai nghe true wireless phong cách Marshall có chống ồn.",
    "highlights": [
      "ANC chủ động — điểm mạnh đáng chú ý của sản phẩm",
      "Thiết kế nhỏ gọn — điểm mạnh đáng chú ý của sản phẩm",
      "Sạc nhanh — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Âm bass có thể hơi mạnh với người thích âm trung tính",
      "Giá cao hơn một số đối thủ cùng phân khúc",
      "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"
    ],
    "specs": [
      "ANC chủ động",
      "Thiết kế nhỏ gọn",
      "Sạc nhanh"
    ],
    "media": [
      {
        "id": "marshall-motif-ii-anc-media-1",
        "url": "https://picsum.photos/seed/marshall-motif-ii-anc-a/1200/1200",
        "alt": "Marshall Motif II ANC",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "marshall-motif-ii-anc-media-2",
        "url": "https://picsum.photos/seed/marshall-motif-ii-anc-b/1200/1200",
        "alt": "Marshall Motif II ANC — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-marshall-motif-ii-anc-0",
        "sku": "MARSHALL-MOTIF-II-ANC-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 4990000,
        "compareAtPrice": 5390000,
        "stock": 7,
        "lowStockAt": 5
      },
      {
        "id": "v-marshall-motif-ii-anc-1",
        "sku": "MARSHALL-MOTIF-II-ANC-BẠC",
        "name": "Bạc",
        "attributes": {
          "color": "Bạc"
        },
        "price": 4990000,
        "stock": 30,
        "lowStockAt": 5
      },
      {
        "id": "v-marshall-motif-ii-anc-2",
        "sku": "MARSHALL-MOTIF-II-ANC-XAN",
        "name": "Xanh navy",
        "attributes": {
          "color": "Xanh navy"
        },
        "price": 4990000,
        "stock": 33,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-marshall-motif-ii-anc-1",
        "authorName": "Trí Tuấn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Âm thanh chi tiết, đeo lâu không đau tai.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-marshall-motif-ii-anc-2",
        "authorName": "Gia Hân",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "ipad-pro-13-m4",
    "slug": "ipad-pro-13-m4",
    "name": "iPad Pro 13 M4",
    "category": "Máy tính bảng",
    "categorySlug": "may-tinh-bang",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Máy tính bảng mạnh nhất cho sáng tạo và làm việc di động. Chip M4, Màn hình Ultra Retina XDR, Hỗ trợ Apple Pencil Pro.",
    "shortDescription": "Máy tính bảng mạnh nhất cho sáng tạo và làm việc di động.",
    "price": 32990000,
    "compareAtPrice": 35630000,
    "verdict": "Máy tính bảng mạnh nhất cho sáng tạo và làm việc di động.",
    "highlights": [
      "Chip M4 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình Ultra Retina XDR — điểm mạnh đáng chú ý của sản phẩm",
      "Hỗ trợ Apple Pencil Pro — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Bàn phím và bút cảm ứng thường phải mua thêm",
      "Giá tăng nhanh khi nâng cấp dung lượng lưu trữ",
      "Đa nhiệm ứng dụng nặng vẫn còn hạn chế so với laptop"
    ],
    "specs": [
      "Chip M4",
      "Màn hình Ultra Retina XDR",
      "Hỗ trợ Apple Pencil Pro"
    ],
    "media": [
      {
        "id": "ipad-pro-13-m4-media-1",
        "url": "https://picsum.photos/seed/ipad-pro-13-m4-a/1200/1200",
        "alt": "iPad Pro 13 M4",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "ipad-pro-13-m4-media-2",
        "url": "https://picsum.photos/seed/ipad-pro-13-m4-b/1200/1200",
        "alt": "iPad Pro 13 M4 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-ipad-pro-13-m4-0",
        "sku": "IPAD-PRO-13-M4-128GB-BẠC",
        "name": "128 GB / Bạc",
        "attributes": {
          "storage": "128 GB",
          "color": "Bạc"
        },
        "price": 32990000,
        "compareAtPrice": 35630000,
        "stock": 16,
        "lowStockAt": 5
      },
      {
        "id": "v-ipad-pro-13-m4-1",
        "sku": "IPAD-PRO-13-M4-256GB-XÁM",
        "name": "256 GB / Xám",
        "attributes": {
          "storage": "256 GB",
          "color": "Xám"
        },
        "price": 35630000,
        "stock": 3,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-ipad-pro-13-m4-1",
        "authorName": "Quốc Bảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màn hình đẹp, xem phim và đọc tài liệu rất thích.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-ipad-pro-13-m4-2",
        "authorName": "Bích Ngọc",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin trâu, dùng cả ngày làm việc nhẹ không cần sạc.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Nexora Pick",
    "featured": false
  },
  {
    "id": "ipad-air-13-m2",
    "slug": "ipad-air-13-m2",
    "name": "iPad Air 13 M2",
    "category": "Máy tính bảng",
    "categorySlug": "may-tinh-bang",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Cân bằng hiệu năng và giá cho công việc hằng ngày. Chip M2, Màn hình 13 inch, Hỗ trợ Apple Pencil Pro.",
    "shortDescription": "Cân bằng hiệu năng và giá cho công việc hằng ngày.",
    "price": 19990000,
    "compareAtPrice": 21590000,
    "verdict": "Cân bằng hiệu năng và giá cho công việc hằng ngày.",
    "highlights": [
      "Chip M2 — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 13 inch — điểm mạnh đáng chú ý của sản phẩm",
      "Hỗ trợ Apple Pencil Pro — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Bàn phím và bút cảm ứng thường phải mua thêm",
      "Giá tăng nhanh khi nâng cấp dung lượng lưu trữ",
      "Đa nhiệm ứng dụng nặng vẫn còn hạn chế so với laptop"
    ],
    "specs": [
      "Chip M2",
      "Màn hình 13 inch",
      "Hỗ trợ Apple Pencil Pro"
    ],
    "media": [
      {
        "id": "ipad-air-13-m2-media-1",
        "url": "https://picsum.photos/seed/ipad-air-13-m2-a/1200/1200",
        "alt": "iPad Air 13 M2",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "ipad-air-13-m2-media-2",
        "url": "https://picsum.photos/seed/ipad-air-13-m2-b/1200/1200",
        "alt": "iPad Air 13 M2 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-ipad-air-13-m2-0",
        "sku": "IPAD-AIR-13-M2-128GB-BẠC",
        "name": "128 GB / Bạc",
        "attributes": {
          "storage": "128 GB",
          "color": "Bạc"
        },
        "price": 19990000,
        "compareAtPrice": 21590000,
        "stock": 34,
        "lowStockAt": 5
      },
      {
        "id": "v-ipad-air-13-m2-1",
        "sku": "IPAD-AIR-13-M2-256GB-XÁM",
        "name": "256 GB / Xám",
        "attributes": {
          "storage": "256 GB",
          "color": "Xám"
        },
        "price": 21590000,
        "stock": 5,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-ipad-air-13-m2-1",
        "authorName": "Quốc Bảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màn hình đẹp, xem phim và đọc tài liệu rất thích.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-ipad-air-13-m2-2",
        "authorName": "Đức Huy",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin trâu, dùng cả ngày làm việc nhẹ không cần sạc.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "ipad-gen-10",
    "slug": "ipad-gen-10",
    "name": "iPad Gen 10",
    "category": "Máy tính bảng",
    "categorySlug": "may-tinh-bang",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Lựa chọn phổ thông cho giải trí và học tập. Chip A14 Bionic, Cổng USB-C, Màn hình 10.9 inch.",
    "shortDescription": "Lựa chọn phổ thông cho giải trí và học tập.",
    "price": 12990000,
    "compareAtPrice": 14030000,
    "verdict": "Lựa chọn phổ thông cho giải trí và học tập.",
    "highlights": [
      "Chip A14 Bionic — điểm mạnh đáng chú ý của sản phẩm",
      "Cổng USB-C — điểm mạnh đáng chú ý của sản phẩm",
      "Màn hình 10.9 inch — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Bàn phím và bút cảm ứng thường phải mua thêm",
      "Giá tăng nhanh khi nâng cấp dung lượng lưu trữ",
      "Đa nhiệm ứng dụng nặng vẫn còn hạn chế so với laptop"
    ],
    "specs": [
      "Chip A14 Bionic",
      "Cổng USB-C",
      "Màn hình 10.9 inch"
    ],
    "media": [
      {
        "id": "ipad-gen-10-media-1",
        "url": "https://picsum.photos/seed/ipad-gen-10-a/1200/1200",
        "alt": "iPad Gen 10",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "ipad-gen-10-media-2",
        "url": "https://picsum.photos/seed/ipad-gen-10-b/1200/1200",
        "alt": "iPad Gen 10 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-ipad-gen-10-0",
        "sku": "IPAD-GEN-10-128GB-BẠC",
        "name": "128 GB / Bạc",
        "attributes": {
          "storage": "128 GB",
          "color": "Bạc"
        },
        "price": 12990000,
        "compareAtPrice": 14030000,
        "stock": 28,
        "lowStockAt": 5
      },
      {
        "id": "v-ipad-gen-10-1",
        "sku": "IPAD-GEN-10-256GB-XÁM",
        "name": "256 GB / Xám",
        "attributes": {
          "storage": "256 GB",
          "color": "Xám"
        },
        "price": 14030000,
        "stock": 28,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-ipad-gen-10-1",
        "authorName": "Trí Tuấn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màn hình đẹp, xem phim và đọc tài liệu rất thích.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-ipad-gen-10-2",
        "authorName": "Phương Thảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin trâu, dùng cả ngày làm việc nhẹ không cần sạc.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "samsung-galaxy-tab-s10-ultra",
    "slug": "samsung-galaxy-tab-s10-ultra",
    "name": "Samsung Galaxy Tab S10 Ultra",
    "category": "Máy tính bảng",
    "categorySlug": "may-tinh-bang",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Màn hình lớn nhất phân khúc, tối ưu cho đa nhiệm. Màn hình AMOLED 14.6 inch, Bút S Pen đi kèm, Chống nước IP68.",
    "shortDescription": "Màn hình lớn nhất phân khúc, tối ưu cho đa nhiệm.",
    "price": 28990000,
    "compareAtPrice": 31310000,
    "verdict": "Màn hình lớn nhất phân khúc, tối ưu cho đa nhiệm.",
    "highlights": [
      "Màn hình AMOLED 14.6 inch — điểm mạnh đáng chú ý của sản phẩm",
      "Bút S Pen đi kèm — điểm mạnh đáng chú ý của sản phẩm",
      "Chống nước IP68 — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Bàn phím và bút cảm ứng thường phải mua thêm",
      "Giá tăng nhanh khi nâng cấp dung lượng lưu trữ",
      "Đa nhiệm ứng dụng nặng vẫn còn hạn chế so với laptop"
    ],
    "specs": [
      "Màn hình AMOLED 14.6 inch",
      "Bút S Pen đi kèm",
      "Chống nước IP68"
    ],
    "media": [
      {
        "id": "samsung-galaxy-tab-s10-ultra-media-1",
        "url": "https://picsum.photos/seed/samsung-galaxy-tab-s10-ultra-a/1200/1200",
        "alt": "Samsung Galaxy Tab S10 Ultra",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-galaxy-tab-s10-ultra-media-2",
        "url": "https://picsum.photos/seed/samsung-galaxy-tab-s10-ultra-b/1200/1200",
        "alt": "Samsung Galaxy Tab S10 Ultra — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-galaxy-tab-s10-ultra-0",
        "sku": "SAMSUNG-GALAXY-TAB-S10-ULTRA-128GB-BẠC",
        "name": "128 GB / Bạc",
        "attributes": {
          "storage": "128 GB",
          "color": "Bạc"
        },
        "price": 28990000,
        "compareAtPrice": 31310000,
        "stock": 26,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-tab-s10-ultra-1",
        "sku": "SAMSUNG-GALAXY-TAB-S10-ULTRA-256GB-XÁM",
        "name": "256 GB / Xám",
        "attributes": {
          "storage": "256 GB",
          "color": "Xám"
        },
        "price": 31310000,
        "stock": 6,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-galaxy-tab-s10-ultra-1",
        "authorName": "Bích Ngọc",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màn hình đẹp, xem phim và đọc tài liệu rất thích.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-galaxy-tab-s10-ultra-2",
        "authorName": "Gia Hân",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin trâu, dùng cả ngày làm việc nhẹ không cần sạc.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "samsung-galaxy-tab-s9-fe",
    "slug": "samsung-galaxy-tab-s9-fe",
    "name": "Samsung Galaxy Tab S9 FE",
    "category": "Máy tính bảng",
    "categorySlug": "may-tinh-bang",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Đầy đủ tính năng cao cấp với giá dễ tiếp cận hơn. Màn hình 10.9 inch, Bút S Pen đi kèm, Chống nước IP68.",
    "shortDescription": "Đầy đủ tính năng cao cấp với giá dễ tiếp cận hơn.",
    "price": 13990000,
    "compareAtPrice": 15110000,
    "verdict": "Đầy đủ tính năng cao cấp với giá dễ tiếp cận hơn.",
    "highlights": [
      "Màn hình 10.9 inch — điểm mạnh đáng chú ý của sản phẩm",
      "Bút S Pen đi kèm — điểm mạnh đáng chú ý của sản phẩm",
      "Chống nước IP68 — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Bàn phím và bút cảm ứng thường phải mua thêm",
      "Giá tăng nhanh khi nâng cấp dung lượng lưu trữ",
      "Đa nhiệm ứng dụng nặng vẫn còn hạn chế so với laptop"
    ],
    "specs": [
      "Màn hình 10.9 inch",
      "Bút S Pen đi kèm",
      "Chống nước IP68"
    ],
    "media": [
      {
        "id": "samsung-galaxy-tab-s9-fe-media-1",
        "url": "https://picsum.photos/seed/samsung-galaxy-tab-s9-fe-a/1200/1200",
        "alt": "Samsung Galaxy Tab S9 FE",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-galaxy-tab-s9-fe-media-2",
        "url": "https://picsum.photos/seed/samsung-galaxy-tab-s9-fe-b/1200/1200",
        "alt": "Samsung Galaxy Tab S9 FE — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-galaxy-tab-s9-fe-0",
        "sku": "SAMSUNG-GALAXY-TAB-S9-FE-128GB-BẠC",
        "name": "128 GB / Bạc",
        "attributes": {
          "storage": "128 GB",
          "color": "Bạc"
        },
        "price": 13990000,
        "compareAtPrice": 15110000,
        "stock": 45,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-tab-s9-fe-1",
        "sku": "SAMSUNG-GALAXY-TAB-S9-FE-256GB-XÁM",
        "name": "256 GB / Xám",
        "attributes": {
          "storage": "256 GB",
          "color": "Xám"
        },
        "price": 15110000,
        "stock": 7,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-galaxy-tab-s9-fe-1",
        "authorName": "Bảo Trân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màn hình đẹp, xem phim và đọc tài liệu rất thích.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-galaxy-tab-s9-fe-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin trâu, dùng cả ngày làm việc nhẹ không cần sạc.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "xiaomi-pad-6",
    "slug": "xiaomi-pad-6",
    "name": "Xiaomi Pad 6",
    "category": "Máy tính bảng",
    "categorySlug": "may-tinh-bang",
    "brand": "Xiaomi",
    "brandSlug": "xiaomi",
    "description": "Màn hình tần số quét cao cho giải trí mượt mà. Màn hình 144Hz, Snapdragon 870, Loa Dolby Atmos.",
    "shortDescription": "Màn hình tần số quét cao cho giải trí mượt mà.",
    "price": 8990000,
    "compareAtPrice": 9710000,
    "verdict": "Màn hình tần số quét cao cho giải trí mượt mà.",
    "highlights": [
      "Màn hình 144Hz — điểm mạnh đáng chú ý của sản phẩm",
      "Snapdragon 870 — điểm mạnh đáng chú ý của sản phẩm",
      "Loa Dolby Atmos — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Bàn phím và bút cảm ứng thường phải mua thêm",
      "Giá tăng nhanh khi nâng cấp dung lượng lưu trữ",
      "Đa nhiệm ứng dụng nặng vẫn còn hạn chế so với laptop"
    ],
    "specs": [
      "Màn hình 144Hz",
      "Snapdragon 870",
      "Loa Dolby Atmos"
    ],
    "media": [
      {
        "id": "xiaomi-pad-6-media-1",
        "url": "https://picsum.photos/seed/xiaomi-pad-6-a/1200/1200",
        "alt": "Xiaomi Pad 6",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "xiaomi-pad-6-media-2",
        "url": "https://picsum.photos/seed/xiaomi-pad-6-b/1200/1200",
        "alt": "Xiaomi Pad 6 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-xiaomi-pad-6-0",
        "sku": "XIAOMI-PAD-6-128GB-BẠC",
        "name": "128 GB / Bạc",
        "attributes": {
          "storage": "128 GB",
          "color": "Bạc"
        },
        "price": 8990000,
        "compareAtPrice": 9710000,
        "stock": 19,
        "lowStockAt": 5
      },
      {
        "id": "v-xiaomi-pad-6-1",
        "sku": "XIAOMI-PAD-6-256GB-XÁM",
        "name": "256 GB / Xám",
        "attributes": {
          "storage": "256 GB",
          "color": "Xám"
        },
        "price": 9710000,
        "stock": 37,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-xiaomi-pad-6-1",
        "authorName": "Bích Ngọc",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màn hình đẹp, xem phim và đọc tài liệu rất thích.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-xiaomi-pad-6-2",
        "authorName": "Hải Đăng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin trâu, dùng cả ngày làm việc nhẹ không cần sạc.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "lenovo-tab-p12",
    "slug": "lenovo-tab-p12",
    "name": "Lenovo Tab P12",
    "category": "Máy tính bảng",
    "categorySlug": "may-tinh-bang",
    "brand": "Lenovo",
    "brandSlug": "lenovo",
    "description": "Màn hình lớn và loa chất lượng cho xem phim. Màn hình 12.7 inch 2.5K, Pin 10200 mAh, Loa JBL 4 củ.",
    "shortDescription": "Màn hình lớn và loa chất lượng cho xem phim.",
    "price": 9990000,
    "compareAtPrice": 10790000,
    "verdict": "Màn hình lớn và loa chất lượng cho xem phim.",
    "highlights": [
      "Màn hình 12.7 inch 2.5K — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 10200 mAh — điểm mạnh đáng chú ý của sản phẩm",
      "Loa JBL 4 củ — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Bàn phím và bút cảm ứng thường phải mua thêm",
      "Giá tăng nhanh khi nâng cấp dung lượng lưu trữ",
      "Đa nhiệm ứng dụng nặng vẫn còn hạn chế so với laptop"
    ],
    "specs": [
      "Màn hình 12.7 inch 2.5K",
      "Pin 10200 mAh",
      "Loa JBL 4 củ"
    ],
    "media": [
      {
        "id": "lenovo-tab-p12-media-1",
        "url": "https://picsum.photos/seed/lenovo-tab-p12-a/1200/1200",
        "alt": "Lenovo Tab P12",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "lenovo-tab-p12-media-2",
        "url": "https://picsum.photos/seed/lenovo-tab-p12-b/1200/1200",
        "alt": "Lenovo Tab P12 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-lenovo-tab-p12-0",
        "sku": "LENOVO-TAB-P12-128GB-BẠC",
        "name": "128 GB / Bạc",
        "attributes": {
          "storage": "128 GB",
          "color": "Bạc"
        },
        "price": 9990000,
        "compareAtPrice": 10790000,
        "stock": 43,
        "lowStockAt": 5
      },
      {
        "id": "v-lenovo-tab-p12-1",
        "sku": "LENOVO-TAB-P12-256GB-XÁM",
        "name": "256 GB / Xám",
        "attributes": {
          "storage": "256 GB",
          "color": "Xám"
        },
        "price": 10790000,
        "stock": 27,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-lenovo-tab-p12-1",
        "authorName": "Bảo Trân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màn hình đẹp, xem phim và đọc tài liệu rất thích.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-lenovo-tab-p12-2",
        "authorName": "Anh Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin trâu, dùng cả ngày làm việc nhẹ không cần sạc.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "apple-watch-series-10",
    "slug": "apple-watch-series-10",
    "name": "Apple Watch Series 10",
    "category": "Đồng hồ thông minh",
    "categorySlug": "dong-ho-thong-minh",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Bản nâng cấp toàn diện với màn hình lớn hơn rõ rệt. Màn hình lớn hơn, mỏng hơn, Đo điện tâm đồ, Chống nước 50m.",
    "shortDescription": "Bản nâng cấp toàn diện với màn hình lớn hơn rõ rệt.",
    "price": 10990000,
    "compareAtPrice": 11870000,
    "verdict": "Bản nâng cấp toàn diện với màn hình lớn hơn rõ rệt.",
    "highlights": [
      "Màn hình lớn hơn, mỏng hơn — điểm mạnh đáng chú ý của sản phẩm",
      "Đo điện tâm đồ — điểm mạnh đáng chú ý của sản phẩm",
      "Chống nước 50m — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Pin cần sạc hằng ngày với hầu hết mẫu",
      "Một số tính năng sức khỏe chuyên sâu cần gói dịch vụ riêng",
      "Dây đeo tiêu chuẩn có thể không hợp mọi cổ tay"
    ],
    "specs": [
      "Màn hình lớn hơn, mỏng hơn",
      "Đo điện tâm đồ",
      "Chống nước 50m"
    ],
    "media": [
      {
        "id": "apple-watch-series-10-media-1",
        "url": "https://picsum.photos/seed/apple-watch-series-10-a/1200/1200",
        "alt": "Apple Watch Series 10",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "apple-watch-series-10-media-2",
        "url": "https://picsum.photos/seed/apple-watch-series-10-b/1200/1200",
        "alt": "Apple Watch Series 10 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-apple-watch-series-10-0",
        "sku": "APPLE-WATCH-SERIES-10-41mm",
        "name": "41 mm",
        "attributes": {
          "size": "41 mm"
        },
        "price": 10990000,
        "compareAtPrice": 11870000,
        "stock": 19,
        "lowStockAt": 5
      },
      {
        "id": "v-apple-watch-series-10-1",
        "sku": "APPLE-WATCH-SERIES-10-45mm",
        "name": "45 mm",
        "attributes": {
          "size": "45 mm"
        },
        "price": 12090000,
        "stock": 36,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-apple-watch-series-10-1",
        "authorName": "Xuân Sơn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Theo dõi sức khỏe khá chính xác, đeo cả ngày không khó chịu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-apple-watch-series-10-2",
        "authorName": "Thu Hương",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng được nhiều ngày hơn kỳ vọng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Nexora Pick",
    "featured": false
  },
  {
    "id": "apple-watch-ultra-2",
    "slug": "apple-watch-ultra-2",
    "name": "Apple Watch Ultra 2",
    "category": "Đồng hồ thông minh",
    "categorySlug": "dong-ho-thong-minh",
    "brand": "Apple",
    "brandSlug": "apple",
    "description": "Bền bỉ cho thể thao mạo hiểm và hoạt động ngoài trời. Khung Titan, Pin 36 giờ, GPS song băng tần.",
    "shortDescription": "Bền bỉ cho thể thao mạo hiểm và hoạt động ngoài trời.",
    "price": 21990000,
    "compareAtPrice": 23750000,
    "verdict": "Bền bỉ cho thể thao mạo hiểm và hoạt động ngoài trời.",
    "highlights": [
      "Khung Titan — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 36 giờ — điểm mạnh đáng chú ý của sản phẩm",
      "GPS song băng tần — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Pin cần sạc hằng ngày với hầu hết mẫu",
      "Một số tính năng sức khỏe chuyên sâu cần gói dịch vụ riêng",
      "Dây đeo tiêu chuẩn có thể không hợp mọi cổ tay"
    ],
    "specs": [
      "Khung Titan",
      "Pin 36 giờ",
      "GPS song băng tần"
    ],
    "media": [
      {
        "id": "apple-watch-ultra-2-media-1",
        "url": "https://picsum.photos/seed/apple-watch-ultra-2-a/1200/1200",
        "alt": "Apple Watch Ultra 2",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "apple-watch-ultra-2-media-2",
        "url": "https://picsum.photos/seed/apple-watch-ultra-2-b/1200/1200",
        "alt": "Apple Watch Ultra 2 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-apple-watch-ultra-2-0",
        "sku": "APPLE-WATCH-ULTRA-2-41mm",
        "name": "41 mm",
        "attributes": {
          "size": "41 mm"
        },
        "price": 21990000,
        "compareAtPrice": 23750000,
        "stock": 35,
        "lowStockAt": 5
      },
      {
        "id": "v-apple-watch-ultra-2-1",
        "sku": "APPLE-WATCH-ULTRA-2-45mm",
        "name": "45 mm",
        "attributes": {
          "size": "45 mm"
        },
        "price": 24190000,
        "stock": 23,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-apple-watch-ultra-2-1",
        "authorName": "Ngọc Mai",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Theo dõi sức khỏe khá chính xác, đeo cả ngày không khó chịu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-apple-watch-ultra-2-2",
        "authorName": "Anh Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng được nhiều ngày hơn kỳ vọng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "samsung-galaxy-watch-7",
    "slug": "samsung-galaxy-watch-7",
    "name": "Samsung Galaxy Watch 7",
    "category": "Đồng hồ thông minh",
    "categorySlug": "dong-ho-thong-minh",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Theo dõi sức khỏe toàn diện tích hợp Galaxy AI. Cảm biến BioActive, Theo dõi giấc ngủ chi tiết, Chống nước IP68.",
    "shortDescription": "Theo dõi sức khỏe toàn diện tích hợp Galaxy AI.",
    "price": 7990000,
    "compareAtPrice": 8630000,
    "verdict": "Theo dõi sức khỏe toàn diện tích hợp Galaxy AI.",
    "highlights": [
      "Cảm biến BioActive — điểm mạnh đáng chú ý của sản phẩm",
      "Theo dõi giấc ngủ chi tiết — điểm mạnh đáng chú ý của sản phẩm",
      "Chống nước IP68 — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Pin cần sạc hằng ngày với hầu hết mẫu",
      "Một số tính năng sức khỏe chuyên sâu cần gói dịch vụ riêng",
      "Dây đeo tiêu chuẩn có thể không hợp mọi cổ tay"
    ],
    "specs": [
      "Cảm biến BioActive",
      "Theo dõi giấc ngủ chi tiết",
      "Chống nước IP68"
    ],
    "media": [
      {
        "id": "samsung-galaxy-watch-7-media-1",
        "url": "https://picsum.photos/seed/samsung-galaxy-watch-7-a/1200/1200",
        "alt": "Samsung Galaxy Watch 7",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-galaxy-watch-7-media-2",
        "url": "https://picsum.photos/seed/samsung-galaxy-watch-7-b/1200/1200",
        "alt": "Samsung Galaxy Watch 7 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-galaxy-watch-7-0",
        "sku": "SAMSUNG-GALAXY-WATCH-7-41mm",
        "name": "41 mm",
        "attributes": {
          "size": "41 mm"
        },
        "price": 7990000,
        "compareAtPrice": 8630000,
        "stock": 19,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-watch-7-1",
        "sku": "SAMSUNG-GALAXY-WATCH-7-45mm",
        "name": "45 mm",
        "attributes": {
          "size": "45 mm"
        },
        "price": 8790000,
        "stock": 40,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-galaxy-watch-7-1",
        "authorName": "Hoàng Nam",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Theo dõi sức khỏe khá chính xác, đeo cả ngày không khó chịu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-galaxy-watch-7-2",
        "authorName": "Quốc Bảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng được nhiều ngày hơn kỳ vọng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "samsung-galaxy-watch-ultra",
    "slug": "samsung-galaxy-watch-ultra",
    "name": "Samsung Galaxy Watch Ultra",
    "category": "Đồng hồ thông minh",
    "categorySlug": "dong-ho-thong-minh",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Phiên bản bền bỉ nhất dành cho vận động viên. Khung Titan, Pin đến 100 giờ, Nút Quick Button.",
    "shortDescription": "Phiên bản bền bỉ nhất dành cho vận động viên.",
    "price": 13990000,
    "compareAtPrice": 15110000,
    "verdict": "Phiên bản bền bỉ nhất dành cho vận động viên.",
    "highlights": [
      "Khung Titan — điểm mạnh đáng chú ý của sản phẩm",
      "Pin đến 100 giờ — điểm mạnh đáng chú ý của sản phẩm",
      "Nút Quick Button — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Pin cần sạc hằng ngày với hầu hết mẫu",
      "Một số tính năng sức khỏe chuyên sâu cần gói dịch vụ riêng",
      "Dây đeo tiêu chuẩn có thể không hợp mọi cổ tay"
    ],
    "specs": [
      "Khung Titan",
      "Pin đến 100 giờ",
      "Nút Quick Button"
    ],
    "media": [
      {
        "id": "samsung-galaxy-watch-ultra-media-1",
        "url": "https://picsum.photos/seed/samsung-galaxy-watch-ultra-a/1200/1200",
        "alt": "Samsung Galaxy Watch Ultra",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-galaxy-watch-ultra-media-2",
        "url": "https://picsum.photos/seed/samsung-galaxy-watch-ultra-b/1200/1200",
        "alt": "Samsung Galaxy Watch Ultra — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-galaxy-watch-ultra-0",
        "sku": "SAMSUNG-GALAXY-WATCH-ULTRA-41mm",
        "name": "41 mm",
        "attributes": {
          "size": "41 mm"
        },
        "price": 13990000,
        "compareAtPrice": 15110000,
        "stock": 12,
        "lowStockAt": 5
      },
      {
        "id": "v-samsung-galaxy-watch-ultra-1",
        "sku": "SAMSUNG-GALAXY-WATCH-ULTRA-45mm",
        "name": "45 mm",
        "attributes": {
          "size": "45 mm"
        },
        "price": 15390000,
        "stock": 32,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-galaxy-watch-ultra-1",
        "authorName": "Hoàng Nam",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Theo dõi sức khỏe khá chính xác, đeo cả ngày không khó chịu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-galaxy-watch-ultra-2",
        "authorName": "Phương Thảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng được nhiều ngày hơn kỳ vọng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "garmin-venu-3",
    "slug": "garmin-venu-3",
    "name": "Garmin Venu 3",
    "category": "Đồng hồ thông minh",
    "categorySlug": "dong-ho-thong-minh",
    "brand": "Garmin",
    "brandSlug": "garmin",
    "description": "Pin cực trâu và dữ liệu thể thao chuyên sâu. Pin 14 ngày, Huấn luyện viên AI, Đo oxy máu.",
    "shortDescription": "Pin cực trâu và dữ liệu thể thao chuyên sâu.",
    "price": 11990000,
    "compareAtPrice": 12950000,
    "verdict": "Pin cực trâu và dữ liệu thể thao chuyên sâu.",
    "highlights": [
      "Pin 14 ngày — điểm mạnh đáng chú ý của sản phẩm",
      "Huấn luyện viên AI — điểm mạnh đáng chú ý của sản phẩm",
      "Đo oxy máu — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Pin cần sạc hằng ngày với hầu hết mẫu",
      "Một số tính năng sức khỏe chuyên sâu cần gói dịch vụ riêng",
      "Dây đeo tiêu chuẩn có thể không hợp mọi cổ tay"
    ],
    "specs": [
      "Pin 14 ngày",
      "Huấn luyện viên AI",
      "Đo oxy máu"
    ],
    "media": [
      {
        "id": "garmin-venu-3-media-1",
        "url": "https://picsum.photos/seed/garmin-venu-3-a/1200/1200",
        "alt": "Garmin Venu 3",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "garmin-venu-3-media-2",
        "url": "https://picsum.photos/seed/garmin-venu-3-b/1200/1200",
        "alt": "Garmin Venu 3 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-garmin-venu-3-0",
        "sku": "GARMIN-VENU-3-41mm",
        "name": "41 mm",
        "attributes": {
          "size": "41 mm"
        },
        "price": 11990000,
        "compareAtPrice": 12950000,
        "stock": 23,
        "lowStockAt": 5
      },
      {
        "id": "v-garmin-venu-3-1",
        "sku": "GARMIN-VENU-3-45mm",
        "name": "45 mm",
        "attributes": {
          "size": "45 mm"
        },
        "price": 13190000,
        "stock": 41,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-garmin-venu-3-1",
        "authorName": "Gia Hân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Theo dõi sức khỏe khá chính xác, đeo cả ngày không khó chịu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-garmin-venu-3-2",
        "authorName": "Trí Tuấn",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng được nhiều ngày hơn kỳ vọng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "garmin-fenix-8",
    "slug": "garmin-fenix-8",
    "name": "Garmin Fenix 8",
    "category": "Đồng hồ thông minh",
    "categorySlug": "dong-ho-thong-minh",
    "brand": "Garmin",
    "brandSlug": "garmin",
    "description": "Đồng hồ outdoor cao cấp nhất cho leo núi, chạy trail. Khung Titan/Sapphire, Bản đồ định vị offline, Pin đến 28 ngày.",
    "shortDescription": "Đồng hồ outdoor cao cấp nhất cho leo núi, chạy trail.",
    "price": 24990000,
    "compareAtPrice": 26990000,
    "verdict": "Đồng hồ outdoor cao cấp nhất cho leo núi, chạy trail.",
    "highlights": [
      "Khung Titan/Sapphire — điểm mạnh đáng chú ý của sản phẩm",
      "Bản đồ định vị offline — điểm mạnh đáng chú ý của sản phẩm",
      "Pin đến 28 ngày — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Pin cần sạc hằng ngày với hầu hết mẫu",
      "Một số tính năng sức khỏe chuyên sâu cần gói dịch vụ riêng",
      "Dây đeo tiêu chuẩn có thể không hợp mọi cổ tay"
    ],
    "specs": [
      "Khung Titan/Sapphire",
      "Bản đồ định vị offline",
      "Pin đến 28 ngày"
    ],
    "media": [
      {
        "id": "garmin-fenix-8-media-1",
        "url": "https://picsum.photos/seed/garmin-fenix-8-a/1200/1200",
        "alt": "Garmin Fenix 8",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "garmin-fenix-8-media-2",
        "url": "https://picsum.photos/seed/garmin-fenix-8-b/1200/1200",
        "alt": "Garmin Fenix 8 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-garmin-fenix-8-0",
        "sku": "GARMIN-FENIX-8-41mm",
        "name": "41 mm",
        "attributes": {
          "size": "41 mm"
        },
        "price": 24990000,
        "compareAtPrice": 26990000,
        "stock": 38,
        "lowStockAt": 5
      },
      {
        "id": "v-garmin-fenix-8-1",
        "sku": "GARMIN-FENIX-8-45mm",
        "name": "45 mm",
        "attributes": {
          "size": "45 mm"
        },
        "price": 27490000,
        "stock": 25,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-garmin-fenix-8-1",
        "authorName": "Gia Hân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Theo dõi sức khỏe khá chính xác, đeo cả ngày không khó chịu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-garmin-fenix-8-2",
        "authorName": "Hải Đăng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng được nhiều ngày hơn kỳ vọng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "xiaomi-watch-s3",
    "slug": "xiaomi-watch-s3",
    "name": "Xiaomi Watch S3",
    "category": "Đồng hồ thông minh",
    "categorySlug": "dong-ho-thong-minh",
    "brand": "Xiaomi",
    "brandSlug": "xiaomi",
    "description": "Giá tốt, pin bền cho nhu cầu theo dõi cơ bản hằng ngày. Mặt kính tùy biến, Pin 15 ngày, GPS tích hợp.",
    "shortDescription": "Giá tốt, pin bền cho nhu cầu theo dõi cơ bản hằng ngày.",
    "price": 3490000,
    "compareAtPrice": 3770000,
    "verdict": "Giá tốt, pin bền cho nhu cầu theo dõi cơ bản hằng ngày.",
    "highlights": [
      "Mặt kính tùy biến — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 15 ngày — điểm mạnh đáng chú ý của sản phẩm",
      "GPS tích hợp — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Pin cần sạc hằng ngày với hầu hết mẫu",
      "Một số tính năng sức khỏe chuyên sâu cần gói dịch vụ riêng",
      "Dây đeo tiêu chuẩn có thể không hợp mọi cổ tay"
    ],
    "specs": [
      "Mặt kính tùy biến",
      "Pin 15 ngày",
      "GPS tích hợp"
    ],
    "media": [
      {
        "id": "xiaomi-watch-s3-media-1",
        "url": "https://picsum.photos/seed/xiaomi-watch-s3-a/1200/1200",
        "alt": "Xiaomi Watch S3",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "xiaomi-watch-s3-media-2",
        "url": "https://picsum.photos/seed/xiaomi-watch-s3-b/1200/1200",
        "alt": "Xiaomi Watch S3 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-xiaomi-watch-s3-0",
        "sku": "XIAOMI-WATCH-S3-41mm",
        "name": "41 mm",
        "attributes": {
          "size": "41 mm"
        },
        "price": 3490000,
        "compareAtPrice": 3770000,
        "stock": 8,
        "lowStockAt": 5
      },
      {
        "id": "v-xiaomi-watch-s3-1",
        "sku": "XIAOMI-WATCH-S3-45mm",
        "name": "45 mm",
        "attributes": {
          "size": "45 mm"
        },
        "price": 3840000,
        "stock": 42,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-xiaomi-watch-s3-1",
        "authorName": "Linh Đan",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Theo dõi sức khỏe khá chính xác, đeo cả ngày không khó chịu.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-xiaomi-watch-s3-2",
        "authorName": "Bích Ngọc",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Pin dùng được nhiều ngày hơn kỳ vọng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "razer-blackwidow-v4",
    "slug": "razer-blackwidow-v4",
    "name": "Razer BlackWidow V4",
    "category": "Gaming Gear",
    "categorySlug": "gaming",
    "brand": "Razer",
    "brandSlug": "razer",
    "description": "Bàn phím cơ gaming bền bỉ với đèn RGB tùy biến sâu. Switch cơ Green tùy chỉnh, RGB Chroma, Kê tay có đệm.",
    "shortDescription": "Bàn phím cơ gaming bền bỉ với đèn RGB tùy biến sâu.",
    "price": 3990000,
    "compareAtPrice": 4310000,
    "verdict": "Bàn phím cơ gaming bền bỉ với đèn RGB tùy biến sâu.",
    "highlights": [
      "Switch cơ Green tùy chỉnh — điểm mạnh đáng chú ý của sản phẩm",
      "RGB Chroma — điểm mạnh đáng chú ý của sản phẩm",
      "Kê tay có đệm — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Trọng lượng khá nặng khi mang theo di chuyển",
      "Đèn RGB có thể tốn pin nếu dùng ở chế độ không dây",
      "Phần mềm điều khiển đi kèm chiếm khá nhiều dung lượng ổ đĩa"
    ],
    "specs": [
      "Switch cơ Green tùy chỉnh",
      "RGB Chroma",
      "Kê tay có đệm"
    ],
    "media": [
      {
        "id": "razer-blackwidow-v4-media-1",
        "url": "https://picsum.photos/seed/razer-blackwidow-v4-a/1200/1200",
        "alt": "Razer BlackWidow V4",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "razer-blackwidow-v4-media-2",
        "url": "https://picsum.photos/seed/razer-blackwidow-v4-b/1200/1200",
        "alt": "Razer BlackWidow V4 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-razer-blackwidow-v4-0",
        "sku": "RAZER-BLACKWIDOW-V4-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 3990000,
        "compareAtPrice": 4310000,
        "stock": 22,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-razer-blackwidow-v4-1",
        "authorName": "Quốc Bảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Phản hồi nhanh, chơi game rõ rệt thấy khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-razer-blackwidow-v4-2",
        "authorName": "Minh Anh",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chất lượng hoàn thiện chắc chắn, dùng lâu không lo hỏng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "razer-deathadder-v3",
    "slug": "razer-deathadder-v3",
    "name": "Razer DeathAdder V3",
    "category": "Gaming Gear",
    "categorySlug": "gaming",
    "brand": "Razer",
    "brandSlug": "razer",
    "description": "Chuột gaming cầm tay thoải mái, phản hồi cực nhanh. Cảm biến 30K DPI, Nhẹ 59g, Pin 90 giờ (bản Pro).",
    "shortDescription": "Chuột gaming cầm tay thoải mái, phản hồi cực nhanh.",
    "price": 1690000,
    "compareAtPrice": 1830000,
    "verdict": "Chuột gaming cầm tay thoải mái, phản hồi cực nhanh.",
    "highlights": [
      "Cảm biến 30K DPI — điểm mạnh đáng chú ý của sản phẩm",
      "Nhẹ 59g — điểm mạnh đáng chú ý của sản phẩm",
      "Pin 90 giờ (bản Pro) — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Trọng lượng khá nặng khi mang theo di chuyển",
      "Đèn RGB có thể tốn pin nếu dùng ở chế độ không dây",
      "Phần mềm điều khiển đi kèm chiếm khá nhiều dung lượng ổ đĩa"
    ],
    "specs": [
      "Cảm biến 30K DPI",
      "Nhẹ 59g",
      "Pin 90 giờ (bản Pro)"
    ],
    "media": [
      {
        "id": "razer-deathadder-v3-media-1",
        "url": "https://picsum.photos/seed/razer-deathadder-v3-a/1200/1200",
        "alt": "Razer DeathAdder V3",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "razer-deathadder-v3-media-2",
        "url": "https://picsum.photos/seed/razer-deathadder-v3-b/1200/1200",
        "alt": "Razer DeathAdder V3 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-razer-deathadder-v3-0",
        "sku": "RAZER-DEATHADDER-V3-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 1690000,
        "compareAtPrice": 1830000,
        "stock": 21,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-razer-deathadder-v3-1",
        "authorName": "Hoàng Nam",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Phản hồi nhanh, chơi game rõ rệt thấy khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-razer-deathadder-v3-2",
        "authorName": "Đức Huy",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chất lượng hoàn thiện chắc chắn, dùng lâu không lo hỏng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Best seller",
    "featured": false
  },
  {
    "id": "razer-kraken-v3",
    "slug": "razer-kraken-v3",
    "name": "Razer Kraken V3",
    "category": "Gaming Gear",
    "categorySlug": "gaming",
    "brand": "Razer",
    "brandSlug": "razer",
    "description": "Tai nghe gaming thoải mái cho phiên chơi dài. Âm thanh vòm THX, Đệm tai làm mát gel, Mic Cardioid.",
    "shortDescription": "Tai nghe gaming thoải mái cho phiên chơi dài.",
    "price": 2490000,
    "compareAtPrice": 2690000,
    "verdict": "Tai nghe gaming thoải mái cho phiên chơi dài.",
    "highlights": [
      "Âm thanh vòm THX — điểm mạnh đáng chú ý của sản phẩm",
      "Đệm tai làm mát gel — điểm mạnh đáng chú ý của sản phẩm",
      "Mic Cardioid — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Trọng lượng khá nặng khi mang theo di chuyển",
      "Đèn RGB có thể tốn pin nếu dùng ở chế độ không dây",
      "Phần mềm điều khiển đi kèm chiếm khá nhiều dung lượng ổ đĩa"
    ],
    "specs": [
      "Âm thanh vòm THX",
      "Đệm tai làm mát gel",
      "Mic Cardioid"
    ],
    "media": [
      {
        "id": "razer-kraken-v3-media-1",
        "url": "https://picsum.photos/seed/razer-kraken-v3-a/1200/1200",
        "alt": "Razer Kraken V3",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "razer-kraken-v3-media-2",
        "url": "https://picsum.photos/seed/razer-kraken-v3-b/1200/1200",
        "alt": "Razer Kraken V3 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-razer-kraken-v3-0",
        "sku": "RAZER-KRAKEN-V3-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 2490000,
        "compareAtPrice": 2690000,
        "stock": 11,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-razer-kraken-v3-1",
        "authorName": "Xuân Sơn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Phản hồi nhanh, chơi game rõ rệt thấy khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-razer-kraken-v3-2",
        "authorName": "Phương Thảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chất lượng hoàn thiện chắc chắn, dùng lâu không lo hỏng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "corsair-k70-max",
    "slug": "corsair-k70-max",
    "name": "Corsair K70 Max",
    "category": "Gaming Gear",
    "categorySlug": "gaming",
    "brand": "Corsair",
    "brandSlug": "corsair",
    "description": "Bàn phím hiệu năng cao cho eSports chuyên nghiệp. Switch từ tính tùy chỉnh lực nhấn, Khung nhôm, RGB per-key.",
    "shortDescription": "Bàn phím hiệu năng cao cho eSports chuyên nghiệp.",
    "price": 4490000,
    "compareAtPrice": 4850000,
    "verdict": "Bàn phím hiệu năng cao cho eSports chuyên nghiệp.",
    "highlights": [
      "Switch từ tính tùy chỉnh lực nhấn — điểm mạnh đáng chú ý của sản phẩm",
      "Khung nhôm — điểm mạnh đáng chú ý của sản phẩm",
      "RGB per-key — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Trọng lượng khá nặng khi mang theo di chuyển",
      "Đèn RGB có thể tốn pin nếu dùng ở chế độ không dây",
      "Phần mềm điều khiển đi kèm chiếm khá nhiều dung lượng ổ đĩa"
    ],
    "specs": [
      "Switch từ tính tùy chỉnh lực nhấn",
      "Khung nhôm",
      "RGB per-key"
    ],
    "media": [
      {
        "id": "corsair-k70-max-media-1",
        "url": "https://picsum.photos/seed/corsair-k70-max-a/1200/1200",
        "alt": "Corsair K70 Max",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "corsair-k70-max-media-2",
        "url": "https://picsum.photos/seed/corsair-k70-max-b/1200/1200",
        "alt": "Corsair K70 Max — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-corsair-k70-max-0",
        "sku": "CORSAIR-K70-MAX-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 4490000,
        "compareAtPrice": 4850000,
        "stock": 6,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-corsair-k70-max-1",
        "authorName": "Quốc Bảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Phản hồi nhanh, chơi game rõ rệt thấy khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-corsair-k70-max-2",
        "authorName": "Linh Đan",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chất lượng hoàn thiện chắc chắn, dùng lâu không lo hỏng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "corsair-hs80",
    "slug": "corsair-hs80",
    "name": "Corsair HS80",
    "category": "Gaming Gear",
    "categorySlug": "gaming",
    "brand": "Corsair",
    "brandSlug": "corsair",
    "description": "Tai nghe không dây chất lượng studio cho stream và chơi game. Âm thanh không gian, Mic thu âm rõ, Kết nối không dây ổn định.",
    "shortDescription": "Tai nghe không dây chất lượng studio cho stream và chơi game.",
    "price": 2990000,
    "compareAtPrice": 3230000,
    "verdict": "Tai nghe không dây chất lượng studio cho stream và chơi game.",
    "highlights": [
      "Âm thanh không gian — điểm mạnh đáng chú ý của sản phẩm",
      "Mic thu âm rõ — điểm mạnh đáng chú ý của sản phẩm",
      "Kết nối không dây ổn định — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Trọng lượng khá nặng khi mang theo di chuyển",
      "Đèn RGB có thể tốn pin nếu dùng ở chế độ không dây",
      "Phần mềm điều khiển đi kèm chiếm khá nhiều dung lượng ổ đĩa"
    ],
    "specs": [
      "Âm thanh không gian",
      "Mic thu âm rõ",
      "Kết nối không dây ổn định"
    ],
    "media": [
      {
        "id": "corsair-hs80-media-1",
        "url": "https://picsum.photos/seed/corsair-hs80-a/1200/1200",
        "alt": "Corsair HS80",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "corsair-hs80-media-2",
        "url": "https://picsum.photos/seed/corsair-hs80-b/1200/1200",
        "alt": "Corsair HS80 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-corsair-hs80-0",
        "sku": "CORSAIR-HS80-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 2990000,
        "compareAtPrice": 3230000,
        "stock": 8,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-corsair-hs80-1",
        "authorName": "Thanh Tùng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Phản hồi nhanh, chơi game rõ rệt thấy khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-corsair-hs80-2",
        "authorName": "Linh Đan",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chất lượng hoàn thiện chắc chắn, dùng lâu không lo hỏng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "steelseries-arctis-nova-pro",
    "slug": "steelseries-arctis-nova-pro",
    "name": "SteelSeries Arctis Nova Pro",
    "category": "Gaming Gear",
    "categorySlug": "gaming",
    "brand": "SteelSeries",
    "brandSlug": "steelseries",
    "description": "Tai nghe cao cấp với tính năng đổi pin không gián đoạn. ANC chủ động, Đổi pin nóng, Âm thanh Hi-Res.",
    "shortDescription": "Tai nghe cao cấp với tính năng đổi pin không gián đoạn.",
    "price": 6990000,
    "compareAtPrice": 7550000,
    "verdict": "Tai nghe cao cấp với tính năng đổi pin không gián đoạn.",
    "highlights": [
      "ANC chủ động — điểm mạnh đáng chú ý của sản phẩm",
      "Đổi pin nóng — điểm mạnh đáng chú ý của sản phẩm",
      "Âm thanh Hi-Res — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Trọng lượng khá nặng khi mang theo di chuyển",
      "Đèn RGB có thể tốn pin nếu dùng ở chế độ không dây",
      "Phần mềm điều khiển đi kèm chiếm khá nhiều dung lượng ổ đĩa"
    ],
    "specs": [
      "ANC chủ động",
      "Đổi pin nóng",
      "Âm thanh Hi-Res"
    ],
    "media": [
      {
        "id": "steelseries-arctis-nova-pro-media-1",
        "url": "https://picsum.photos/seed/steelseries-arctis-nova-pro-a/1200/1200",
        "alt": "SteelSeries Arctis Nova Pro",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "steelseries-arctis-nova-pro-media-2",
        "url": "https://picsum.photos/seed/steelseries-arctis-nova-pro-b/1200/1200",
        "alt": "SteelSeries Arctis Nova Pro — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-steelseries-arctis-nova-pro-0",
        "sku": "STEELSERIES-ARCTIS-NOVA-PRO-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 6990000,
        "compareAtPrice": 7550000,
        "stock": 12,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-steelseries-arctis-nova-pro-1",
        "authorName": "Gia Hân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Phản hồi nhanh, chơi game rõ rệt thấy khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-steelseries-arctis-nova-pro-2",
        "authorName": "Thanh Tùng",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chất lượng hoàn thiện chắc chắn, dùng lâu không lo hỏng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "steelseries-rival-5",
    "slug": "steelseries-rival-5",
    "name": "SteelSeries Rival 5",
    "category": "Gaming Gear",
    "categorySlug": "gaming",
    "brand": "SteelSeries",
    "brandSlug": "steelseries",
    "description": "Chuột gaming đa năng với nhiều nút tùy biến. Cảm biến TrueMove Air, 9 nút lập trình, RGB 2 vùng.",
    "shortDescription": "Chuột gaming đa năng với nhiều nút tùy biến.",
    "price": 1590000,
    "compareAtPrice": 1720000,
    "verdict": "Chuột gaming đa năng với nhiều nút tùy biến.",
    "highlights": [
      "Cảm biến TrueMove Air — điểm mạnh đáng chú ý của sản phẩm",
      "9 nút lập trình — điểm mạnh đáng chú ý của sản phẩm",
      "RGB 2 vùng — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Trọng lượng khá nặng khi mang theo di chuyển",
      "Đèn RGB có thể tốn pin nếu dùng ở chế độ không dây",
      "Phần mềm điều khiển đi kèm chiếm khá nhiều dung lượng ổ đĩa"
    ],
    "specs": [
      "Cảm biến TrueMove Air",
      "9 nút lập trình",
      "RGB 2 vùng"
    ],
    "media": [
      {
        "id": "steelseries-rival-5-media-1",
        "url": "https://picsum.photos/seed/steelseries-rival-5-a/1200/1200",
        "alt": "SteelSeries Rival 5",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "steelseries-rival-5-media-2",
        "url": "https://picsum.photos/seed/steelseries-rival-5-b/1200/1200",
        "alt": "SteelSeries Rival 5 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-steelseries-rival-5-0",
        "sku": "STEELSERIES-RIVAL-5-ĐEN",
        "name": "Đen",
        "attributes": {
          "color": "Đen"
        },
        "price": 1590000,
        "compareAtPrice": 1720000,
        "stock": 25,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-steelseries-rival-5-1",
        "authorName": "Ngọc Mai",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Phản hồi nhanh, chơi game rõ rệt thấy khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-steelseries-rival-5-2",
        "authorName": "Minh Anh",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Chất lượng hoàn thiện chắc chắn, dùng lâu không lo hỏng.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "lg-ultragear-27gr93u",
    "slug": "lg-ultragear-27gr93u",
    "name": "LG UltraGear 27GR93U",
    "category": "Màn hình",
    "categorySlug": "man-hinh",
    "brand": "LG",
    "brandSlug": "lg",
    "description": "Màn hình gaming 4K tần số quét cao cho console và PC. 27 inch 4K 144Hz, 1ms GtG, HDMI 2.1.",
    "shortDescription": "Màn hình gaming 4K tần số quét cao cho console và PC.",
    "price": 14990000,
    "compareAtPrice": 16190000,
    "verdict": "Màn hình gaming 4K tần số quét cao cho console và PC.",
    "highlights": [
      "27 inch 4K 144Hz — điểm mạnh đáng chú ý của sản phẩm",
      "1ms GtG — điểm mạnh đáng chú ý của sản phẩm",
      "HDMI 2.1 — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Kích thước lớn cần bàn làm việc đủ rộng",
      "Cần cáp chuẩn cao để đạt đúng tần số quét tối đa",
      "Chân đế chiếm diện tích đáng kể trên bàn"
    ],
    "specs": [
      "27 inch 4K 144Hz",
      "1ms GtG",
      "HDMI 2.1"
    ],
    "media": [
      {
        "id": "lg-ultragear-27gr93u-media-1",
        "url": "https://picsum.photos/seed/lg-ultragear-27gr93u-a/1200/1200",
        "alt": "LG UltraGear 27GR93U",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "lg-ultragear-27gr93u-media-2",
        "url": "https://picsum.photos/seed/lg-ultragear-27gr93u-b/1200/1200",
        "alt": "LG UltraGear 27GR93U — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-lg-ultragear-27gr93u-0",
        "sku": "LG-ULTRAGEAR-27GR93U-STD",
        "name": "Tiêu chuẩn",
        "attributes": {},
        "price": 14990000,
        "compareAtPrice": 16190000,
        "stock": 16,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-lg-ultragear-27gr93u-1",
        "authorName": "Quốc Bảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màu sắc chuẩn, làm việc chỉnh ảnh/video thấy rõ sự khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-lg-ultragear-27gr93u-2",
        "authorName": "Ngọc Mai",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Tần số quét cao, chơi game và cuộn trang mượt hẳn.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "badge": "Nexora Pick",
    "featured": false
  },
  {
    "id": "lg-ultrafine-32un880",
    "slug": "lg-ultrafine-32un880",
    "name": "LG UltraFine 32UN880",
    "category": "Màn hình",
    "categorySlug": "man-hinh",
    "brand": "LG",
    "brandSlug": "lg",
    "description": "Màn hình làm việc màu chuẩn với sạc USB-C tiện lợi. 32 inch 4K, USB-C 90W, Hỗ trợ Ergo Stand.",
    "shortDescription": "Màn hình làm việc màu chuẩn với sạc USB-C tiện lợi.",
    "price": 12990000,
    "compareAtPrice": 14030000,
    "verdict": "Màn hình làm việc màu chuẩn với sạc USB-C tiện lợi.",
    "highlights": [
      "32 inch 4K — điểm mạnh đáng chú ý của sản phẩm",
      "USB-C 90W — điểm mạnh đáng chú ý của sản phẩm",
      "Hỗ trợ Ergo Stand — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Kích thước lớn cần bàn làm việc đủ rộng",
      "Cần cáp chuẩn cao để đạt đúng tần số quét tối đa",
      "Chân đế chiếm diện tích đáng kể trên bàn"
    ],
    "specs": [
      "32 inch 4K",
      "USB-C 90W",
      "Hỗ trợ Ergo Stand"
    ],
    "media": [
      {
        "id": "lg-ultrafine-32un880-media-1",
        "url": "https://picsum.photos/seed/lg-ultrafine-32un880-a/1200/1200",
        "alt": "LG UltraFine 32UN880",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "lg-ultrafine-32un880-media-2",
        "url": "https://picsum.photos/seed/lg-ultrafine-32un880-b/1200/1200",
        "alt": "LG UltraFine 32UN880 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-lg-ultrafine-32un880-0",
        "sku": "LG-ULTRAFINE-32UN880-STD",
        "name": "Tiêu chuẩn",
        "attributes": {},
        "price": 12990000,
        "compareAtPrice": 14030000,
        "stock": 18,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-lg-ultrafine-32un880-1",
        "authorName": "Gia Hân",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màu sắc chuẩn, làm việc chỉnh ảnh/video thấy rõ sự khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-lg-ultrafine-32un880-2",
        "authorName": "Đức Huy",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Tần số quét cao, chơi game và cuộn trang mượt hẳn.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "samsung-odyssey-oled-g8",
    "slug": "samsung-odyssey-oled-g8",
    "name": "Samsung Odyssey OLED G8",
    "category": "Màn hình",
    "categorySlug": "man-hinh",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Màn hình OLED cong đắt giá cho trải nghiệm gaming đắm chìm. 34 inch OLED cong, 175Hz, 0.03ms phản hồi.",
    "shortDescription": "Màn hình OLED cong đắt giá cho trải nghiệm gaming đắm chìm.",
    "price": 19990000,
    "compareAtPrice": 21590000,
    "verdict": "Màn hình OLED cong đắt giá cho trải nghiệm gaming đắm chìm.",
    "highlights": [
      "34 inch OLED cong — điểm mạnh đáng chú ý của sản phẩm",
      "175Hz — điểm mạnh đáng chú ý của sản phẩm",
      "0.03ms phản hồi — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Kích thước lớn cần bàn làm việc đủ rộng",
      "Cần cáp chuẩn cao để đạt đúng tần số quét tối đa",
      "Chân đế chiếm diện tích đáng kể trên bàn"
    ],
    "specs": [
      "34 inch OLED cong",
      "175Hz",
      "0.03ms phản hồi"
    ],
    "media": [
      {
        "id": "samsung-odyssey-oled-g8-media-1",
        "url": "https://picsum.photos/seed/samsung-odyssey-oled-g8-a/1200/1200",
        "alt": "Samsung Odyssey OLED G8",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-odyssey-oled-g8-media-2",
        "url": "https://picsum.photos/seed/samsung-odyssey-oled-g8-b/1200/1200",
        "alt": "Samsung Odyssey OLED G8 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-odyssey-oled-g8-0",
        "sku": "SAMSUNG-ODYSSEY-OLED-G8-STD",
        "name": "Tiêu chuẩn",
        "attributes": {},
        "price": 19990000,
        "compareAtPrice": 21590000,
        "stock": 27,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-odyssey-oled-g8-1",
        "authorName": "Trí Tuấn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màu sắc chuẩn, làm việc chỉnh ảnh/video thấy rõ sự khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-odyssey-oled-g8-2",
        "authorName": "Quốc Bảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Tần số quét cao, chơi game và cuộn trang mượt hẳn.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "samsung-viewfinity-s9",
    "slug": "samsung-viewfinity-s9",
    "name": "Samsung ViewFinity S9",
    "category": "Màn hình",
    "categorySlug": "man-hinh",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "description": "Độ phân giải 5K cho dựng phim và thiết kế đồ họa. 27 inch 5K, Chuẩn màu chuyên nghiệp, Webcam rời từ tính.",
    "shortDescription": "Độ phân giải 5K cho dựng phim và thiết kế đồ họa.",
    "price": 22990000,
    "compareAtPrice": 24830000,
    "verdict": "Độ phân giải 5K cho dựng phim và thiết kế đồ họa.",
    "highlights": [
      "27 inch 5K — điểm mạnh đáng chú ý của sản phẩm",
      "Chuẩn màu chuyên nghiệp — điểm mạnh đáng chú ý của sản phẩm",
      "Webcam rời từ tính — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Kích thước lớn cần bàn làm việc đủ rộng",
      "Cần cáp chuẩn cao để đạt đúng tần số quét tối đa",
      "Chân đế chiếm diện tích đáng kể trên bàn"
    ],
    "specs": [
      "27 inch 5K",
      "Chuẩn màu chuyên nghiệp",
      "Webcam rời từ tính"
    ],
    "media": [
      {
        "id": "samsung-viewfinity-s9-media-1",
        "url": "https://picsum.photos/seed/samsung-viewfinity-s9-a/1200/1200",
        "alt": "Samsung ViewFinity S9",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "samsung-viewfinity-s9-media-2",
        "url": "https://picsum.photos/seed/samsung-viewfinity-s9-b/1200/1200",
        "alt": "Samsung ViewFinity S9 — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-samsung-viewfinity-s9-0",
        "sku": "SAMSUNG-VIEWFINITY-S9-STD",
        "name": "Tiêu chuẩn",
        "attributes": {},
        "price": 22990000,
        "compareAtPrice": 24830000,
        "stock": 16,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-samsung-viewfinity-s9-1",
        "authorName": "Trí Tuấn",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màu sắc chuẩn, làm việc chỉnh ảnh/video thấy rõ sự khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-samsung-viewfinity-s9-2",
        "authorName": "Phương Thảo",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Tần số quét cao, chơi game và cuộn trang mượt hẳn.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "dell-ultrasharp-u2723qe",
    "slug": "dell-ultrasharp-u2723qe",
    "name": "Dell UltraSharp U2723QE",
    "category": "Màn hình",
    "categorySlug": "man-hinh",
    "brand": "Dell",
    "brandSlug": "dell",
    "description": "Màn hình văn phòng cao cấp với độ tương phản vượt trội. 27 inch 4K IPS Black, Hub USB-C tích hợp, Chuẩn màu 98% DCI-P3.",
    "shortDescription": "Màn hình văn phòng cao cấp với độ tương phản vượt trội.",
    "price": 13990000,
    "compareAtPrice": 15110000,
    "verdict": "Màn hình văn phòng cao cấp với độ tương phản vượt trội.",
    "highlights": [
      "27 inch 4K IPS Black — điểm mạnh đáng chú ý của sản phẩm",
      "Hub USB-C tích hợp — điểm mạnh đáng chú ý của sản phẩm",
      "Chuẩn màu 98% DCI-P3 — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Kích thước lớn cần bàn làm việc đủ rộng",
      "Cần cáp chuẩn cao để đạt đúng tần số quét tối đa",
      "Chân đế chiếm diện tích đáng kể trên bàn"
    ],
    "specs": [
      "27 inch 4K IPS Black",
      "Hub USB-C tích hợp",
      "Chuẩn màu 98% DCI-P3"
    ],
    "media": [
      {
        "id": "dell-ultrasharp-u2723qe-media-1",
        "url": "https://picsum.photos/seed/dell-ultrasharp-u2723qe-a/1200/1200",
        "alt": "Dell UltraSharp U2723QE",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "dell-ultrasharp-u2723qe-media-2",
        "url": "https://picsum.photos/seed/dell-ultrasharp-u2723qe-b/1200/1200",
        "alt": "Dell UltraSharp U2723QE — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-dell-ultrasharp-u2723qe-0",
        "sku": "DELL-ULTRASHARP-U2723QE-STD",
        "name": "Tiêu chuẩn",
        "attributes": {},
        "price": 13990000,
        "compareAtPrice": 15110000,
        "stock": 19,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-dell-ultrasharp-u2723qe-1",
        "authorName": "Phương Thảo",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màu sắc chuẩn, làm việc chỉnh ảnh/video thấy rõ sự khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-dell-ultrasharp-u2723qe-2",
        "authorName": "Ngọc Mai",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Tần số quét cao, chơi game và cuộn trang mượt hẳn.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  },
  {
    "id": "asus-proart-pa279cv",
    "slug": "asus-proart-pa279cv",
    "name": "ASUS ProArt PA279CV",
    "category": "Màn hình",
    "categorySlug": "man-hinh",
    "brand": "ASUS",
    "brandSlug": "asus",
    "description": "Màn hình đồ họa giá hợp lý cho nhà sáng tạo mới bắt đầu. 27 inch 4K, Chuẩn màu 100% sRGB, Calman Verified.",
    "shortDescription": "Màn hình đồ họa giá hợp lý cho nhà sáng tạo mới bắt đầu.",
    "price": 8990000,
    "compareAtPrice": 9710000,
    "verdict": "Màn hình đồ họa giá hợp lý cho nhà sáng tạo mới bắt đầu.",
    "highlights": [
      "27 inch 4K — điểm mạnh đáng chú ý của sản phẩm",
      "Chuẩn màu 100% sRGB — điểm mạnh đáng chú ý của sản phẩm",
      "Calman Verified — điểm mạnh đáng chú ý của sản phẩm"
    ],
    "considerations": [
      "Kích thước lớn cần bàn làm việc đủ rộng",
      "Cần cáp chuẩn cao để đạt đúng tần số quét tối đa",
      "Chân đế chiếm diện tích đáng kể trên bàn"
    ],
    "specs": [
      "27 inch 4K",
      "Chuẩn màu 100% sRGB",
      "Calman Verified"
    ],
    "media": [
      {
        "id": "asus-proart-pa279cv-media-1",
        "url": "https://picsum.photos/seed/asus-proart-pa279cv-a/1200/1200",
        "alt": "ASUS ProArt PA279CV",
        "type": "IMAGE",
        "sortOrder": 0
      },
      {
        "id": "asus-proart-pa279cv-media-2",
        "url": "https://picsum.photos/seed/asus-proart-pa279cv-b/1200/1200",
        "alt": "ASUS ProArt PA279CV — góc nhìn khác",
        "type": "IMAGE",
        "sortOrder": 1
      }
    ],
    "variants": [
      {
        "id": "v-asus-proart-pa279cv-0",
        "sku": "ASUS-PROART-PA279CV-STD",
        "name": "Tiêu chuẩn",
        "attributes": {},
        "price": 8990000,
        "compareAtPrice": 9710000,
        "stock": 32,
        "lowStockAt": 5
      }
    ],
    "reviews": [
      {
        "id": "r-asus-proart-pa279cv-1",
        "authorName": "Thanh Tùng",
        "rating": 5,
        "title": "Đáng mua",
        "content": "Màu sắc chuẩn, làm việc chỉnh ảnh/video thấy rõ sự khác biệt.",
        "verified": true,
        "createdAt": "2026-06-15T08:00:00Z"
      },
      {
        "id": "r-asus-proart-pa279cv-2",
        "authorName": "Gia Hân",
        "rating": 4,
        "title": "Hài lòng",
        "content": "Tần số quét cao, chơi game và cuộn trang mượt hẳn.",
        "verified": true,
        "createdAt": "2026-06-20T10:30:00Z"
      }
    ],
    "featured": false
  }
];
