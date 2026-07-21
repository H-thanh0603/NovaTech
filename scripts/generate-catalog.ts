/**
 * One-off generator for a large synthetic product catalog.
 * Run with: npx tsx scripts/generate-catalog.ts
 *
 * Regenerates:
 *  - src/features/catalog/catalog.data.ts
 *  - src/features/catalog/catalog-detail.data.ts
 *
 * Images use https://picsum.photos/seed/{slug}/{w}/{h} which always resolves
 * deterministically for a given seed, so every product has a valid image
 * without relying on hand-picked Unsplash photo IDs.
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

type VariantAxis = "ram-storage-color" | "storage-color" | "color" | "size" | "single";

type ModelSeed = {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  brandSlug: string;
  brandName: string;
  price: number;
  specs: readonly string[];
  verdict: string;
  badge?: string;
  featured?: boolean;
  variantAxis: VariantAxis;
  colors?: readonly string[];
  storages?: readonly string[];
  rams?: readonly string[];
  sizes?: readonly string[];
};

type CategorySeed = {
  id: string;
  slug: string;
  name: string;
  description: string;
};

type BrandSeed = {
  id: string;
  slug: string;
  name: string;
};

const categories: readonly CategorySeed[] = [
  { id: "cat-laptop", slug: "laptop", name: "Laptop", description: "Laptop tuyển chọn cho học tập, làm việc và sáng tạo." },
  { id: "cat-dien-thoai", slug: "dien-thoai", name: "Điện thoại", description: "Smartphone cân bằng trải nghiệm, camera và thời gian hỗ trợ." },
  { id: "cat-phu-kien", slug: "phu-kien", name: "Phụ kiện", description: "Phụ kiện nâng cấp góc làm việc và trải nghiệm hằng ngày." },
  { id: "cat-am-thanh", slug: "am-thanh", name: "Âm thanh", description: "Tai nghe và loa cho trải nghiệm âm thanh đáng tin cậy." },
  { id: "cat-may-tinh-bang", slug: "may-tinh-bang", name: "Máy tính bảng", description: "Máy tính bảng cho giải trí, ghi chú và sáng tạo di động." },
  { id: "cat-dong-ho-thong-minh", slug: "dong-ho-thong-minh", name: "Đồng hồ thông minh", description: "Thiết bị đeo theo dõi sức khỏe và kết nối liền mạch." },
  { id: "cat-gaming", slug: "gaming", name: "Gaming Gear", description: "Thiết bị chơi game cho trải nghiệm phản hồi nhanh và bền bỉ." },
  { id: "cat-man-hinh", slug: "man-hinh", name: "Màn hình", description: "Màn hình làm việc và giải trí với màu sắc chính xác." },
] as const;

const brands: readonly BrandSeed[] = [
  { id: "brand-apple", slug: "apple", name: "Apple" },
  { id: "brand-asus", slug: "asus", name: "ASUS" },
  { id: "brand-samsung", slug: "samsung", name: "Samsung" },
  { id: "brand-sony", slug: "sony", name: "Sony" },
  { id: "brand-logitech", slug: "logitech", name: "Logitech" },
  { id: "brand-dell", slug: "dell", name: "Dell" },
  { id: "brand-hp", slug: "hp", name: "HP" },
  { id: "brand-lenovo", slug: "lenovo", name: "Lenovo" },
  { id: "brand-msi", slug: "msi", name: "MSI" },
  { id: "brand-acer", slug: "acer", name: "Acer" },
  { id: "brand-lg", slug: "lg", name: "LG" },
  { id: "brand-xiaomi", slug: "xiaomi", name: "Xiaomi" },
  { id: "brand-oppo", slug: "oppo", name: "OPPO" },
  { id: "brand-google", slug: "google", name: "Google" },
  { id: "brand-oneplus", slug: "oneplus", name: "OnePlus" },
  { id: "brand-anker", slug: "anker", name: "Anker" },
  { id: "brand-belkin", slug: "belkin", name: "Belkin" },
  { id: "brand-baseus", slug: "baseus", name: "Baseus" },
  { id: "brand-jbl", slug: "jbl", name: "JBL" },
  { id: "brand-bose", slug: "bose", name: "Bose" },
  { id: "brand-sennheiser", slug: "sennheiser", name: "Sennheiser" },
  { id: "brand-marshall", slug: "marshall", name: "Marshall" },
  { id: "brand-garmin", slug: "garmin", name: "Garmin" },
  { id: "brand-razer", slug: "razer", name: "Razer" },
  { id: "brand-corsair", slug: "corsair", name: "Corsair" },
  { id: "brand-steelseries", slug: "steelseries", name: "SteelSeries" },
] as const;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function roundVnd(amount: number): number {
  return Math.round(amount / 10_000) * 10_000;
}

let seedCounter = 0;
function seededRandom(): number {
  seedCounter += 1;
  const x = Math.sin(seedCounter * 9973.13) * 10000;
  return x - Math.floor(x);
}

function pick<T>(items: readonly T[], salt: number): T {
  const index = Math.floor(seededRandom() * items.length + salt) % items.length;
  return items[Math.abs(index) % items.length];
}

function categoryOf(slug: string): CategorySeed {
  const found = categories.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown category slug: ${slug}`);
  return found;
}

function brandOf(slug: string): BrandSeed {
  const found = brands.find((b) => b.slug === slug);
  if (!found) throw new Error(`Unknown brand slug: ${slug}`);
  return found;
}

// ---------------------------------------------------------------------------
// Model seeds — one entry per distinct product line.
// ---------------------------------------------------------------------------

function laptop(name: string, brandSlug: string, price: number, specs: readonly string[], verdict: string, badge?: string, featured?: boolean): ModelSeed {
  const slug = slugify(name);
  return {
    id: slug,
    slug,
    name,
    categorySlug: "laptop",
    categoryName: "Laptop",
    brandSlug,
    brandName: brandOf(brandSlug).name,
    price,
    specs,
    verdict,
    badge,
    featured,
    variantAxis: "ram-storage-color",
    rams: ["16 GB", "32 GB"],
    storages: ["512 GB", "1 TB"],
    colors: ["Bạc", "Xám"],
  };
}

function phone(name: string, brandSlug: string, price: number, specs: readonly string[], verdict: string, badge?: string, featured?: boolean): ModelSeed {
  const slug = slugify(name);
  return {
    id: slug,
    slug,
    name,
    categorySlug: "dien-thoai",
    categoryName: "Điện thoại",
    brandSlug,
    brandName: brandOf(brandSlug).name,
    price,
    specs,
    verdict,
    badge,
    featured,
    variantAxis: "storage-color",
    storages: ["128 GB", "256 GB", "512 GB"],
    colors: ["Đen", "Bạc", "Xanh"],
  };
}

function accessory(name: string, brandSlug: string, price: number, specs: readonly string[], verdict: string, badge?: string, featured?: boolean): ModelSeed {
  const slug = slugify(name);
  return {
    id: slug,
    slug,
    name,
    categorySlug: "phu-kien",
    categoryName: "Phụ kiện",
    brandSlug,
    brandName: brandOf(brandSlug).name,
    price,
    specs,
    verdict,
    badge,
    featured,
    variantAxis: "color",
    colors: ["Đen", "Trắng"],
  };
}

function audio(name: string, brandSlug: string, price: number, specs: readonly string[], verdict: string, badge?: string, featured?: boolean): ModelSeed {
  const slug = slugify(name);
  return {
    id: slug,
    slug,
    name,
    categorySlug: "am-thanh",
    categoryName: "Âm thanh",
    brandSlug,
    brandName: brandOf(brandSlug).name,
    price,
    specs,
    verdict,
    badge,
    featured,
    variantAxis: "color",
    colors: ["Đen", "Bạc", "Xanh navy"],
  };
}

function tablet(name: string, brandSlug: string, price: number, specs: readonly string[], verdict: string, badge?: string, featured?: boolean): ModelSeed {
  const slug = slugify(name);
  return {
    id: slug,
    slug,
    name,
    categorySlug: "may-tinh-bang",
    categoryName: "Máy tính bảng",
    brandSlug,
    brandName: brandOf(brandSlug).name,
    price,
    specs,
    verdict,
    badge,
    featured,
    variantAxis: "storage-color",
    storages: ["128 GB", "256 GB"],
    colors: ["Bạc", "Xám"],
  };
}

function watch(name: string, brandSlug: string, price: number, specs: readonly string[], verdict: string, badge?: string, featured?: boolean): ModelSeed {
  const slug = slugify(name);
  return {
    id: slug,
    slug,
    name,
    categorySlug: "dong-ho-thong-minh",
    categoryName: "Đồng hồ thông minh",
    brandSlug,
    brandName: brandOf(brandSlug).name,
    price,
    specs,
    verdict,
    badge,
    featured,
    variantAxis: "size",
    sizes: ["41 mm", "45 mm"],
  };
}

function gaming(name: string, brandSlug: string, price: number, specs: readonly string[], verdict: string, badge?: string, featured?: boolean): ModelSeed {
  const slug = slugify(name);
  return {
    id: slug,
    slug,
    name,
    categorySlug: "gaming",
    categoryName: "Gaming Gear",
    brandSlug,
    brandName: brandOf(brandSlug).name,
    price,
    specs,
    verdict,
    badge,
    featured,
    variantAxis: "color",
    colors: ["Đen"],
  };
}

function monitor(name: string, brandSlug: string, price: number, specs: readonly string[], verdict: string, badge?: string, featured?: boolean): ModelSeed {
  const slug = slugify(name);
  return {
    id: slug,
    slug,
    name,
    categorySlug: "man-hinh",
    categoryName: "Màn hình",
    brandSlug,
    brandName: brandOf(brandSlug).name,
    price,
    specs,
    verdict,
    badge,
    featured,
    variantAxis: "single",
  };
}

const models: readonly ModelSeed[] = [
  // --- Laptop ---
  laptop("MacBook Air M4 13\"", "apple", 26_990_000, ["Apple M4", "RAM 16 GB", "Pin đến 18 giờ"], "Mỏng nhẹ, pin dài và đủ mạnh cho phần lớn ngày làm việc.", "Nexora Pick", true),
  laptop("ASUS Zenbook 14 OLED", "asus", 24_490_000, ["OLED 3K 120 Hz", "Intel Core Ultra 7", "1,2 kg"], "Lựa chọn Windows cân bằng cho người cần màn hình xuất sắc.", "Màn hình đẹp", true),
  laptop("MacBook Pro 14 M4 Pro", "apple", 52_990_000, ["Apple M4 Pro", "RAM 24 GB", "Màn hình Liquid Retina XDR"], "Hiệu năng mạnh cho dựng phim và lập trình chuyên sâu.", "Hiệu năng cao"),
  laptop("MacBook Air 15 M3", "apple", 32_990_000, ["Apple M3", "Màn hình 15 inch", "Pin đến 18 giờ"], "Màn hình lớn hơn cho ai cần không gian làm việc rộng."),
  laptop("ASUS ROG Zephyrus G14", "asus", 38_990_000, ["AMD Ryzen AI 9", "RTX 4060", "Màn hình 120 Hz"], "Laptop gaming mỏng nhẹ hiếm có, đủ mạnh để chiến game AAA."),
  laptop("ASUS Vivobook S14 OLED", "asus", 19_990_000, ["OLED 2.8K", "Intel Core Ultra 5", "1,3 kg"], "Màn hình OLED giá tốt cho học tập và văn phòng."),
  laptop("Dell XPS 13", "dell", 29_990_000, ["Intel Core Ultra 7", "Màn hình InfinityEdge", "RAM 16 GB"], "Thiết kế cao cấp, viền màn hình siêu mỏng."),
  laptop("Dell XPS 14", "dell", 36_990_000, ["Intel Core Ultra 7", "RTX 4050", "Màn hình OLED 3.2K"], "Cân bằng giữa sáng tạo nội dung và di động."),
  laptop("Dell Inspiron 14 Plus", "dell", 17_990_000, ["Intel Core i5", "RAM 16 GB", "SSD 512 GB"], "Lựa chọn phổ thông ổn định cho công việc hằng ngày."),
  laptop("HP Spectre x360 14", "hp", 33_990_000, ["Intel Core Ultra 7", "Màn hình cảm ứng gập 360°", "Bút cảm ứng đi kèm"], "Máy 2 trong 1 sang trọng, linh hoạt cho ghi chú và trình chiếu."),
  laptop("HP Pavilion Plus 14", "hp", 18_990_000, ["Intel Core i5", "Màn hình OLED", "1,4 kg"], "OLED giá hợp lý cho sinh viên và người mới đi làm."),
  laptop("HP Omen 16", "hp", 34_990_000, ["AMD Ryzen 9", "RTX 4070", "Màn hình 165 Hz"], "Laptop gaming hiệu năng cao với tản nhiệt cải tiến."),
  laptop("Lenovo ThinkPad X1 Carbon Gen 12", "lenovo", 41_990_000, ["Intel Core Ultra 7", "Bàn phím ThinkPad huyền thoại", "1,12 kg"], "Độ bền và bàn phím hàng đầu cho doanh nhân di chuyển nhiều.", "Bền bỉ"),
  laptop("Lenovo Yoga Slim 7i", "lenovo", 22_990_000, ["Intel Core Ultra 7", "Màn hình 2.8K OLED", "1,3 kg"], "Thiết kế mỏng nhẹ, màn hình đẹp trong tầm giá tốt."),
  laptop("Lenovo Legion Slim 5", "lenovo", 29_990_000, ["AMD Ryzen 7", "RTX 4060", "Bàn phím RGB"], "Laptop gaming mỏng, hiệu năng ổn định cho eSports."),
  laptop("MSI Prestige 16 AI Evo", "msi", 27_990_000, ["Intel Core Ultra 7", "Màn hình 3K 120 Hz", "1,9 kg"], "Cân bằng thiết kế mỏng nhẹ và hiệu năng AI onboard."),
  laptop("MSI Stealth 16", "msi", 42_990_000, ["RTX 4070", "Màn hình QHD+ 240 Hz", "Bàn phím cơ mini"], "Laptop gaming cao cấp, màn hình tần số quét cao."),
  laptop("Acer Swift Go 14", "acer", 16_990_000, ["Intel Core i5", "Màn hình OLED", "1,3 kg"], "OLED giá tốt nhất phân khúc phổ thông."),
  laptop("Acer Predator Helios Neo 16", "acer", 31_990_000, ["RTX 4060", "Màn hình 165 Hz", "Tản nhiệt kim cương"], "Hiệu năng gaming mạnh với mức giá dễ tiếp cận."),
  laptop("LG Gram 16", "lg", 28_990_000, ["Nhẹ 1,19 kg", "Pin đến 22 giờ", "Màn hình 16 inch"], "Nhẹ nhất phân khúc 16 inch, pin cực trâu."),
  laptop("LG Gram Pro 17", "lg", 35_990_000, ["Màn hình 17 inch WQXGA", "Pin đến 21 giờ", "Nhẹ 1,35 kg"], "Màn hình lớn nhưng vẫn nhẹ hơn hầu hết đối thủ."),

  // --- Điện thoại ---
  phone("iPhone 16 Pro", "apple", 28_490_000, ["A18 Pro", "Camera tele 5x", "Màn hình 120 Hz"], "Camera ổn định và hiệu năng bền cho người làm nội dung.", "Creator choice", true),
  phone("Samsung Galaxy S25", "samsung", 20_990_000, ["Snapdragon 8 Elite", "Galaxy AI", "7 năm cập nhật"], "Nhỏ gọn, màn hình sáng và nhiều tính năng hỗ trợ hằng ngày.", "AI tiện dụng", true),
  phone("iPhone 16", "apple", 22_990_000, ["A18", "Camera Fusion 48MP", "Màn hình 120 Hz"], "Bản tiêu chuẩn đầy đủ tính năng với giá dễ tiếp cận hơn."),
  phone("iPhone 16 Pro Max", "apple", 34_990_000, ["A18 Pro", "Camera tele 5x", "Pin lớn nhất dòng iPhone"], "Màn hình lớn và pin bền nhất cho nhu cầu dùng cả ngày."),
  phone("Samsung Galaxy S25 Ultra", "samsung", 31_990_000, ["Snapdragon 8 Elite", "Camera 200MP", "Bút S Pen"], "Camera zoom xa và S Pen cho công việc kết hợp sáng tạo.", "Flagship"),
  phone("Samsung Galaxy S25+", "samsung", 25_990_000, ["Snapdragon 8 Elite", "Màn hình 6.7 inch", "Pin 4900 mAh"], "Bản cân bằng giữa kích thước và thời lượng pin."),
  phone("Samsung Galaxy A55", "samsung", 10_990_000, ["Exynos 1480", "Chống nước IP67", "Màn hình Super AMOLED"], "Tầm trung bền bỉ với thiết kế khung kim loại."),
  phone("Samsung Galaxy Z Fold 6", "samsung", 42_990_000, ["Màn hình gập 7.6 inch", "Snapdragon 8 Elite", "Bút S Pen tùy chọn"], "Màn hình gập lớn cho đa nhiệm như máy tính bảng."),
  phone("Samsung Galaxy Z Flip 6", "samsung", 27_990_000, ["Màn hình gập dọc", "Camera Cover Screen", "Thiết kế bỏ túi"], "Gập dọc nhỏ gọn, phong cách và tiện lợi."),
  phone("Xiaomi 14T Pro", "xiaomi", 15_990_000, ["Dimensity 9300+", "Camera Leica", "Sạc 120W"], "Camera hợp tác Leica và sạc siêu nhanh trong tầm giá tốt."),
  phone("Xiaomi 14 Ultra", "xiaomi", 26_990_000, ["Snapdragon 8 Gen 3", "Camera Leica 4 ống kính", "Màn hình 2K"], "Hệ thống camera Leica đầy đủ cho người mê chụp ảnh."),
  phone("Redmi Note 13 Pro", "xiaomi", 7_990_000, ["Snapdragon 7s Gen 2", "Camera 200MP", "Sạc 67W"], "Camera độ phân giải cao ở phân khúc giá phổ thông."),
  phone("POCO F6", "xiaomi", 9_990_000, ["Snapdragon 8s Gen 3", "Màn hình AMOLED 120Hz", "Sạc 90W"], "Hiệu năng vượt tầm giá cho game thủ di động."),
  phone("OPPO Find X7 Ultra", "oppo", 27_990_000, ["Snapdragon 8 Gen 3", "Camera Hasselblad kép tele", "Sạc 100W"], "Camera kép tele độc đáo cho chụp xa linh hoạt."),
  phone("OPPO Reno 12", "oppo", 11_990_000, ["MediaTek Dimensity 7300", "AI chỉnh ảnh", "Thiết kế mỏng nhẹ"], "Tính năng AI chụp ảnh dễ dùng cho người mới."),
  phone("OPPO A3 Pro", "oppo", 6_490_000, ["Chống rơi IP69", "Pin 5800 mAh", "Khung bền chuẩn quân đội"], "Độ bền cao, phù hợp môi trường làm việc khắc nghiệt."),
  phone("Google Pixel 9 Pro", "google", 26_990_000, ["Google Tensor G4", "Camera AI đỉnh cao", "Gemini tích hợp sẵn"], "Camera xử lý AI tốt nhất hệ Android hiện tại.", "AI Camera"),
  phone("Google Pixel 9", "google", 19_990_000, ["Google Tensor G4", "Màn hình Actua", "7 năm cập nhật"], "Trải nghiệm Android thuần và cập nhật dài hạn."),
  phone("Google Pixel 8a", "google", 13_990_000, ["Google Tensor G3", "Camera tốt trong tầm giá", "Chống nước IP67"], "Camera Pixel với giá dễ tiếp cận hơn dòng Pro."),
  phone("OnePlus 12", "oneplus", 19_990_000, ["Snapdragon 8 Gen 3", "Sạc 100W", "Camera Hasselblad"], "Sạc siêu nhanh và hiệu năng flagship giá cạnh tranh."),
  phone("OnePlus Nord 4", "oneplus", 10_490_000, ["Snapdragon 7+ Gen 3", "Khung nhôm nguyên khối", "Sạc 100W"], "Thiết kế kim loại cao cấp ở phân khúc tầm trung."),

  // --- Phụ kiện ---
  accessory("Logitech MX Master 3S", "logitech", 2_190_000, ["Cảm biến 8K DPI", "Kết nối 3 thiết bị", "Cuộn MagSpeed"], "Chuột làm việc yên tĩnh, chính xác và chuyển thiết bị rất nhanh.", undefined, true),
  accessory("Logitech MX Keys S", "logitech", 2_490_000, ["Đèn phím thông minh", "Kết nối đa thiết bị", "Phím yên tĩnh"], "Bàn phím văn phòng cao cấp gõ êm và bền."),
  accessory("Logitech MX Anywhere 3S", "logitech", 1_890_000, ["Nhỏ gọn di động", "Cảm biến 8K DPI", "Sạc USB-C"], "Chuột di động chính xác cho người làm việc từ xa."),
  accessory("Logitech K380", "logitech", 690_000, ["Kết nối 3 thiết bị Bluetooth", "Nhỏ gọn", "Pin 2 năm"], "Bàn phím Bluetooth giá tốt cho máy tính bảng và laptop."),
  accessory("Anker 737 Power Bank", "anker", 1_690_000, ["24000 mAh", "Sạc nhanh 140W", "Màn hình hiển thị"], "Sạc dự phòng dung lượng lớn, đủ sạc đầy laptop 1 lần."),
  accessory("Anker Nano Power Bank", "anker", 590_000, ["10000 mAh", "Chân cắm gập gọn", "Sạc nhanh 22.5W"], "Nhỏ gọn nhét túi, tiện mang theo hằng ngày."),
  accessory("Anker PowerConf S330", "anker", 1_290_000, ["Loa họp trực tuyến", "Khử ồn AI", "Kết nối USB-C/Bluetooth"], "Chất lượng âm thanh rõ ràng cho họp online."),
  accessory("Belkin 3-in-1 Wireless Charger", "belkin", 2_290_000, ["Sạc không dây MagSafe", "Sạc đồng thời 3 thiết bị", "Thiết kế gập gọn"], "Một trạm sạc cho điện thoại, đồng hồ và tai nghe."),
  accessory("Belkin USB-C Hub 7-in-1", "belkin", 1_490_000, ["HDMI 4K", "Đọc thẻ SD", "Sạc PD 100W"], "Mở rộng cổng kết nối đầy đủ cho laptop mỏng."),
  accessory("Baseus GaN 100W Charger", "baseus", 890_000, ["Công nghệ GaN", "3 cổng sạc", "Nhỏ gọn hơn sạc thường 40%"], "Một cục sạc thay thế nhiều adapter cồng kềnh."),
  accessory("Baseus Magnetic Power Bank", "baseus", 990_000, ["10000 mAh", "Sạc nam châm MagSafe", "Có chân đế dựng điện thoại"], "Sạc dự phòng kiêm giá đỡ tiện lợi khi xem video."),

  // --- Âm thanh ---
  audio("Sony WH-1000XM5", "sony", 7_490_000, ["ANC thích ứng", "Pin 30 giờ", "Multipoint"], "Không gian tập trung đáng tin cậy cho văn phòng và chuyến bay.", "Chống ồn tốt", true),
  audio("Sony WF-1000XM5", "sony", 5_990_000, ["ANC nhỏ gọn", "Pin 8 giờ + hộp sạc", "Âm thanh Hi-Res"], "Tai nghe true wireless chống ồn tốt nhất của Sony."),
  audio("Sony SRS-XB13", "sony", 990_000, ["Chống nước IP67", "Pin 16 giờ", "Nhỏ gọn"], "Loa bluetooth bỏ túi cho các buổi đi chơi ngoài trời."),
  audio("JBL Flip 6", "jbl", 2_290_000, ["Chống nước IP67", "Âm thanh JBL Pro Sound", "Pin 12 giờ"], "Loa di động bền, âm lượng lớn cho ngoài trời."),
  audio("JBL Charge 5", "jbl", 3_490_000, ["Pin 20 giờ", "Sạc dự phòng cho điện thoại", "Chống nước IP67"], "Vừa nghe nhạc vừa sạc điện thoại khi đi cắm trại."),
  audio("JBL Tune 720BT", "jbl", 1_190_000, ["Pin 76 giờ", "Bass sâu JBL", "Gấp gọn"], "Tai nghe over-ear pin trâu cho nhu cầu phổ thông."),
  audio("Bose QuietComfort Ultra", "bose", 8_990_000, ["ANC hàng đầu", "Âm trường không gian", "Pin 24 giờ"], "Chống ồn đỉnh cao và âm thanh không gian sống động.", "Flagship ANC"),
  audio("Bose SoundLink Flex", "bose", 3_290_000, ["Chống nước IP67", "PositionIQ tự cân bằng âm", "Pin 12 giờ"], "Loa di động bền, âm thanh cân bằng dù để nằm hay dựng."),
  audio("Sennheiser Momentum 4", "sennheiser", 7_990_000, ["Pin 60 giờ", "ANC thích ứng", "Âm thanh Hi-Res"], "Pin cực trâu và chất âm tự nhiên đặc trưng Sennheiser."),
  audio("Sennheiser HD 660S2", "sennheiser", 9_490_000, ["Tai nghe có dây audiophile", "Trở kháng thấp", "Âm thanh chi tiết cao"], "Lựa chọn cho người nghe nhạc nghiêm túc tại nhà."),
  audio("Marshall Emberton II", "marshall", 3_190_000, ["Thiết kế cổ điển", "Chống nước IP67", "Pin 30 giờ"], "Phong cách retro với âm thanh mạnh mẽ đặc trưng Marshall."),
  audio("Marshall Motif II ANC", "marshall", 4_990_000, ["ANC chủ động", "Thiết kế nhỏ gọn", "Sạc nhanh"], "Tai nghe true wireless phong cách Marshall có chống ồn."),

  // --- Máy tính bảng ---
  tablet("iPad Pro 13 M4", "apple", 32_990_000, ["Chip M4", "Màn hình Ultra Retina XDR", "Hỗ trợ Apple Pencil Pro"], "Máy tính bảng mạnh nhất cho sáng tạo và làm việc di động.", "Nexora Pick"),
  tablet("iPad Air 13 M2", "apple", 19_990_000, ["Chip M2", "Màn hình 13 inch", "Hỗ trợ Apple Pencil Pro"], "Cân bằng hiệu năng và giá cho công việc hằng ngày."),
  tablet("iPad Gen 10", "apple", 12_990_000, ["Chip A14 Bionic", "Cổng USB-C", "Màn hình 10.9 inch"], "Lựa chọn phổ thông cho giải trí và học tập."),
  tablet("Samsung Galaxy Tab S10 Ultra", "samsung", 28_990_000, ["Màn hình AMOLED 14.6 inch", "Bút S Pen đi kèm", "Chống nước IP68"], "Màn hình lớn nhất phân khúc, tối ưu cho đa nhiệm."),
  tablet("Samsung Galaxy Tab S9 FE", "samsung", 13_990_000, ["Màn hình 10.9 inch", "Bút S Pen đi kèm", "Chống nước IP68"], "Đầy đủ tính năng cao cấp với giá dễ tiếp cận hơn."),
  tablet("Xiaomi Pad 6", "xiaomi", 8_990_000, ["Màn hình 144Hz", "Snapdragon 870", "Loa Dolby Atmos"], "Màn hình tần số quét cao cho giải trí mượt mà."),
  tablet("Lenovo Tab P12", "lenovo", 9_990_000, ["Màn hình 12.7 inch 2.5K", "Pin 10200 mAh", "Loa JBL 4 củ"], "Màn hình lớn và loa chất lượng cho xem phim."),

  // --- Đồng hồ thông minh ---
  watch("Apple Watch Series 10", "apple", 10_990_000, ["Màn hình lớn hơn, mỏng hơn", "Đo điện tâm đồ", "Chống nước 50m"], "Bản nâng cấp toàn diện với màn hình lớn hơn rõ rệt.", "Nexora Pick"),
  watch("Apple Watch Ultra 2", "apple", 21_990_000, ["Khung Titan", "Pin 36 giờ", "GPS song băng tần"], "Bền bỉ cho thể thao mạo hiểm và hoạt động ngoài trời."),
  watch("Samsung Galaxy Watch 7", "samsung", 7_990_000, ["Cảm biến BioActive", "Theo dõi giấc ngủ chi tiết", "Chống nước IP68"], "Theo dõi sức khỏe toàn diện tích hợp Galaxy AI."),
  watch("Samsung Galaxy Watch Ultra", "samsung", 13_990_000, ["Khung Titan", "Pin đến 100 giờ", "Nút Quick Button"], "Phiên bản bền bỉ nhất dành cho vận động viên."),
  watch("Garmin Venu 3", "garmin", 11_990_000, ["Pin 14 ngày", "Huấn luyện viên AI", "Đo oxy máu"], "Pin cực trâu và dữ liệu thể thao chuyên sâu."),
  watch("Garmin Fenix 8", "garmin", 24_990_000, ["Khung Titan/Sapphire", "Bản đồ định vị offline", "Pin đến 28 ngày"], "Đồng hồ outdoor cao cấp nhất cho leo núi, chạy trail."),
  watch("Xiaomi Watch S3", "xiaomi", 3_490_000, ["Mặt kính tùy biến", "Pin 15 ngày", "GPS tích hợp"], "Giá tốt, pin bền cho nhu cầu theo dõi cơ bản hằng ngày."),

  // --- Gaming Gear ---
  gaming("Razer BlackWidow V4", "razer", 3_990_000, ["Switch cơ Green tùy chỉnh", "RGB Chroma", "Kê tay có đệm"], "Bàn phím cơ gaming bền bỉ với đèn RGB tùy biến sâu."),
  gaming("Razer DeathAdder V3", "razer", 1_690_000, ["Cảm biến 30K DPI", "Nhẹ 59g", "Pin 90 giờ (bản Pro)"], "Chuột gaming cầm tay thoải mái, phản hồi cực nhanh.", "Best seller"),
  gaming("Razer Kraken V3", "razer", 2_490_000, ["Âm thanh vòm THX", "Đệm tai làm mát gel", "Mic Cardioid"], "Tai nghe gaming thoải mái cho phiên chơi dài."),
  gaming("Corsair K70 Max", "corsair", 4_490_000, ["Switch từ tính tùy chỉnh lực nhấn", "Khung nhôm", "RGB per-key"], "Bàn phím hiệu năng cao cho eSports chuyên nghiệp."),
  gaming("Corsair HS80", "corsair", 2_990_000, ["Âm thanh không gian", "Mic thu âm rõ", "Kết nối không dây ổn định"], "Tai nghe không dây chất lượng studio cho stream và chơi game."),
  gaming("SteelSeries Arctis Nova Pro", "steelseries", 6_990_000, ["ANC chủ động", "Đổi pin nóng", "Âm thanh Hi-Res"], "Tai nghe cao cấp với tính năng đổi pin không gián đoạn."),
  gaming("SteelSeries Rival 5", "steelseries", 1_590_000, ["Cảm biến TrueMove Air", "9 nút lập trình", "RGB 2 vùng"], "Chuột gaming đa năng với nhiều nút tùy biến."),

  // --- Màn hình ---
  monitor("LG UltraGear 27GR93U", "lg", 14_990_000, ["27 inch 4K 144Hz", "1ms GtG", "HDMI 2.1"], "Màn hình gaming 4K tần số quét cao cho console và PC.", "Nexora Pick"),
  monitor("LG UltraFine 32UN880", "lg", 12_990_000, ["32 inch 4K", "USB-C 90W", "Hỗ trợ Ergo Stand"], "Màn hình làm việc màu chuẩn với sạc USB-C tiện lợi."),
  monitor("Samsung Odyssey OLED G8", "samsung", 19_990_000, ["34 inch OLED cong", "175Hz", "0.03ms phản hồi"], "Màn hình OLED cong đắt giá cho trải nghiệm gaming đắm chìm."),
  monitor("Samsung ViewFinity S9", "samsung", 22_990_000, ["27 inch 5K", "Chuẩn màu chuyên nghiệp", "Webcam rời từ tính"], "Độ phân giải 5K cho dựng phim và thiết kế đồ họa."),
  monitor("Dell UltraSharp U2723QE", "dell", 13_990_000, ["27 inch 4K IPS Black", "Hub USB-C tích hợp", "Chuẩn màu 98% DCI-P3"], "Màn hình văn phòng cao cấp với độ tương phản vượt trội."),
  monitor("ASUS ProArt PA279CV", "asus", 8_990_000, ["27 inch 4K", "Chuẩn màu 100% sRGB", "Calman Verified"], "Màn hình đồ họa giá hợp lý cho nhà sáng tạo mới bắt đầu."),
] as const;

// ---------------------------------------------------------------------------
// Content helpers
// ---------------------------------------------------------------------------

const considerationsByCategory: Record<string, readonly string[]> = {
  laptop: ["Giá vẫn ở phân khúc trung — cao cấp", "Cần thời gian làm quen với bàn phím và touchpad mới", "Phụ kiện đi kèm trong hộp khá tối giản"],
  "dien-thoai": ["Giá bán cao hơn một số đối thủ cùng tầm", "Củ sạc có thể không đi kèm trong hộp", "Một số tính năng AI cần kết nối internet"],
  "phu-kien": ["Không phải mẫu rẻ nhất trong phân khúc", "Một số tính năng nâng cao cần cài thêm phần mềm", "Túi/hộp đựng đi kèm khá đơn giản"],
  "am-thanh": ["Âm bass có thể hơi mạnh với người thích âm trung tính", "Giá cao hơn một số đối thủ cùng phân khúc", "Đệm tai/eartip có thể cần thay sau thời gian dài dùng"],
  "may-tinh-bang": ["Bàn phím và bút cảm ứng thường phải mua thêm", "Giá tăng nhanh khi nâng cấp dung lượng lưu trữ", "Đa nhiệm ứng dụng nặng vẫn còn hạn chế so với laptop"],
  "dong-ho-thong-minh": ["Pin cần sạc hằng ngày với hầu hết mẫu", "Một số tính năng sức khỏe chuyên sâu cần gói dịch vụ riêng", "Dây đeo tiêu chuẩn có thể không hợp mọi cổ tay"],
  gaming: ["Trọng lượng khá nặng khi mang theo di chuyển", "Đèn RGB có thể tốn pin nếu dùng ở chế độ không dây", "Phần mềm điều khiển đi kèm chiếm khá nhiều dung lượng ổ đĩa"],
  "man-hinh": ["Kích thước lớn cần bàn làm việc đủ rộng", "Cần cáp chuẩn cao để đạt đúng tần số quét tối đa", "Chân đế chiếm diện tích đáng kể trên bàn"],
};

const reviewPool = [
  "Minh Anh", "Quốc Bảo", "Hoàng Nam", "Linh Đan", "Đức Huy", "Phương Thảo", "Trí Tuấn", "Bảo Trân",
  "Gia Hân", "Thanh Tùng", "Ngọc Mai", "Hải Đăng", "Thu Hương", "Anh Tuấn", "Bích Ngọc", "Xuân Sơn",
] as const;

const reviewTemplatesByCategory: Record<string, readonly string[]> = {
  laptop: ["Máy chạy mượt, phù hợp công việc hằng ngày và không hề nóng khi dùng lâu.", "Thiết kế đẹp, cầm nhẹ tay hơn mong đợi, pin dùng cả ngày không lo hết."],
  "dien-thoai": ["Camera chụp đẹp, dùng mượt sau nhiều tháng không thấy lag.", "Pin dùng cả ngày bình thường, sạc cũng khá nhanh."],
  "phu-kien": ["Dùng hằng ngày thấy tiện, chất lượng hoàn thiện tốt hơn giá tiền.", "Kết nối ổn định, không bị giật hay rớt tín hiệu."],
  "am-thanh": ["Âm thanh chi tiết, đeo lâu không đau tai.", "Chống ồn/khử tiếng ồn tốt, dùng ở nơi ồn vẫn nghe rõ."],
  "may-tinh-bang": ["Màn hình đẹp, xem phim và đọc tài liệu rất thích.", "Pin trâu, dùng cả ngày làm việc nhẹ không cần sạc."],
  "dong-ho-thong-minh": ["Theo dõi sức khỏe khá chính xác, đeo cả ngày không khó chịu.", "Pin dùng được nhiều ngày hơn kỳ vọng."],
  gaming: ["Phản hồi nhanh, chơi game rõ rệt thấy khác biệt.", "Chất lượng hoàn thiện chắc chắn, dùng lâu không lo hỏng."],
  "man-hinh": ["Màu sắc chuẩn, làm việc chỉnh ảnh/video thấy rõ sự khác biệt.", "Tần số quét cao, chơi game và cuộn trang mượt hẳn."],
};

function buildHighlights(seed: ModelSeed): string[] {
  return seed.specs.map((spec) => `${spec} — điểm mạnh đáng chú ý của sản phẩm`);
}

function buildConsiderations(seed: ModelSeed): string[] {
  return [...(considerationsByCategory[seed.categorySlug] ?? [])];
}

function buildVariants(seed: ModelSeed) {
  const base = seed.price;
  const compareAt = roundVnd(base * 1.08);
  const skuBase = seed.slug.toUpperCase().replace(/-/g, "-");

  type VariantOut = {
    id: string;
    sku: string;
    name: string;
    attributes: Record<string, string>;
    price: number;
    compareAtPrice?: number;
    stock: number;
    lowStockAt: number;
  };

  const variants: VariantOut[] = [];

  function stockFor(index: number): number {
    const base = 6 + Math.floor(seededRandom() * 40) - index * 3;
    return Math.max(3, base);
  }

  if (seed.variantAxis === "ram-storage-color" && seed.rams && seed.storages && seed.colors) {
    let i = 0;
    for (const ram of seed.rams) {
      for (const storage of seed.storages.slice(0, 1)) {
        const color = seed.colors[i % seed.colors.length];
        const priceStep = ram === seed.rams[0] ? base : roundVnd(base * 1.15);
        variants.push({
          id: `v-${seed.slug}-${i}`,
          sku: `${skuBase}-${ram.replace(/\s/g, "")}-${storage.replace(/\s/g, "")}`,
          name: `${ram} / ${storage} / ${color}`,
          attributes: { ram, storage, color },
          price: priceStep,
          compareAtPrice: i === 0 ? compareAt : undefined,
          stock: stockFor(i),
          lowStockAt: 5,
        });
        i += 1;
      }
    }
  } else if (seed.variantAxis === "storage-color" && seed.storages && seed.colors) {
    let i = 0;
    for (const storage of seed.storages) {
      const color = seed.colors[i % seed.colors.length];
      const priceStep = i === 0 ? base : roundVnd(base * (1 + i * 0.08));
      variants.push({
        id: `v-${seed.slug}-${i}`,
        sku: `${skuBase}-${storage.replace(/\s/g, "")}-${color.slice(0, 3).toUpperCase()}`,
        name: `${storage} / ${color}`,
        attributes: { storage, color },
        price: priceStep,
        compareAtPrice: i === 0 ? compareAt : undefined,
        stock: stockFor(i),
        lowStockAt: 5,
      });
      i += 1;
    }
  } else if (seed.variantAxis === "color" && seed.colors) {
    let i = 0;
    for (const color of seed.colors) {
      variants.push({
        id: `v-${seed.slug}-${i}`,
        sku: `${skuBase}-${color.slice(0, 3).toUpperCase()}`,
        name: color,
        attributes: { color },
        price: base,
        compareAtPrice: i === 0 ? compareAt : undefined,
        stock: stockFor(i),
        lowStockAt: 5,
      });
      i += 1;
    }
  } else if (seed.variantAxis === "size" && seed.sizes) {
    let i = 0;
    for (const size of seed.sizes) {
      variants.push({
        id: `v-${seed.slug}-${i}`,
        sku: `${skuBase}-${size.replace(/\s/g, "")}`,
        name: size,
        attributes: { size },
        price: i === 0 ? base : roundVnd(base * 1.1),
        compareAtPrice: i === 0 ? compareAt : undefined,
        stock: stockFor(i),
        lowStockAt: 5,
      });
      i += 1;
    }
  } else {
    variants.push({
      id: `v-${seed.slug}-0`,
      sku: `${skuBase}-STD`,
      name: "Tiêu chuẩn",
      attributes: {},
      price: base,
      compareAtPrice: compareAt,
      stock: 6 + Math.floor(seededRandom() * 30),
      lowStockAt: 5,
    });
  }

  return variants;
}

function buildMedia(seed: ModelSeed) {
  return [
    { id: `${seed.slug}-media-1`, url: `https://picsum.photos/seed/${seed.slug}-a/1200/1200`, alt: seed.name, type: "IMAGE" as const, sortOrder: 0 },
    { id: `${seed.slug}-media-2`, url: `https://picsum.photos/seed/${seed.slug}-b/1200/1200`, alt: `${seed.name} — góc nhìn khác`, type: "IMAGE" as const, sortOrder: 1 },
  ];
}

function buildReviews(seed: ModelSeed) {
  const templates = reviewTemplatesByCategory[seed.categorySlug] ?? [];
  const author1 = pick(reviewPool, seedCounter);
  const author2 = pick(reviewPool, seedCounter + 3);
  const reviews = [];
  if (templates[0]) {
    reviews.push({
      id: `r-${seed.slug}-1`,
      authorName: author1,
      rating: 5,
      title: "Đáng mua",
      content: templates[0],
      verified: true,
      createdAt: "2026-06-15T08:00:00Z",
    });
  }
  if (templates[1]) {
    reviews.push({
      id: `r-${seed.slug}-2`,
      authorName: author2,
      rating: 4,
      title: "Hài lòng",
      content: templates[1],
      verified: true,
      createdAt: "2026-06-20T10:30:00Z",
    });
  }
  return reviews;
}

// ---------------------------------------------------------------------------
// Assemble output structures
// ---------------------------------------------------------------------------

const catalogProducts = models.map((seed) => {
  const variants = buildVariants(seed);
  const compareAtPrice = variants[0]?.compareAtPrice;
  return {
    id: seed.id,
    slug: seed.slug,
    name: seed.name,
    category: seed.categoryName,
    price: seed.price,
    ...(compareAtPrice ? { compareAtPrice } : {}),
    imageUrl: `https://picsum.photos/seed/${seed.slug}-a/1200/1200`,
    imageAlt: seed.name,
    ...(seed.badge ? { badge: seed.badge } : {}),
    verdict: seed.verdict,
    specs: seed.specs,
    featured: Boolean(seed.featured),
  };
});

const catalogProductDetails = models.map((seed) => {
  const variants = buildVariants(seed);
  const compareAtPrice = variants[0]?.compareAtPrice;
  const category = categoryOf(seed.categorySlug);
  return {
    id: seed.id,
    slug: seed.slug,
    name: seed.name,
    category: category.name,
    categorySlug: category.slug,
    brand: seed.brandName,
    brandSlug: seed.brandSlug,
    description: `${seed.verdict} ${seed.specs.join(", ")}.`,
    shortDescription: seed.verdict,
    price: seed.price,
    ...(compareAtPrice ? { compareAtPrice } : {}),
    verdict: seed.verdict,
    highlights: buildHighlights(seed),
    considerations: buildConsiderations(seed),
    specs: seed.specs,
    media: buildMedia(seed),
    variants,
    reviews: buildReviews(seed),
    ...(seed.badge ? { badge: seed.badge } : {}),
    featured: Boolean(seed.featured),
  };
});

// ---------------------------------------------------------------------------
// Write files
// ---------------------------------------------------------------------------

function toModuleSource(header: string, exportName: string, typeAnnotation: string, value: unknown): string {
  return `${header}\n\nexport const ${exportName}: ${typeAnnotation} = ${JSON.stringify(value, null, 2)};\n`;
}

const catalogDataSource = toModuleSource(
  `import type { CatalogProduct } from "./catalog.types";`,
  "catalogProducts",
  "readonly CatalogProduct[]",
  catalogProducts,
);

const catalogDetailDataSource =
  `import type {\n  CatalogBrand,\n  CatalogCategory,\n  CatalogProductDetail,\n} from "./catalog.types";\n\n` +
  `export const catalogCategories: readonly CatalogCategory[] = ${JSON.stringify(categories, null, 2)};\n\n` +
  `export const catalogBrands: readonly CatalogBrand[] = ${JSON.stringify(brands, null, 2)};\n\n` +
  `export const catalogProductDetails: readonly CatalogProductDetail[] = ${JSON.stringify(catalogProductDetails, null, 2)};\n`;

const dataDir = resolve(import.meta.dirname, "..", "src", "features", "catalog");

writeFileSync(resolve(dataDir, "catalog.data.ts"), catalogDataSource, "utf-8");
writeFileSync(resolve(dataDir, "catalog-detail.data.ts"), catalogDetailDataSource, "utf-8");

console.log(`Generated ${catalogProducts.length} products across ${categories.length} categories and ${brands.length} brands.`);
