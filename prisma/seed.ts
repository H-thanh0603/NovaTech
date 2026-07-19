import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is required to seed Nexora catalog data.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const categories = [
  { name: "Laptop", slug: "laptop", description: "Laptop tuyển chọn cho học tập, làm việc và sáng tạo." },
  { name: "Điện thoại", slug: "dien-thoai", description: "Smartphone cân bằng trải nghiệm, camera và thời gian hỗ trợ." },
  { name: "Phụ kiện", slug: "phu-kien", description: "Phụ kiện nâng cấp góc làm việc và trải nghiệm hằng ngày." },
] as const;

const brands = [
  { name: "Apple", slug: "apple" },
  { name: "ASUS", slug: "asus" },
  { name: "Samsung", slug: "samsung" },
  { name: "Sony", slug: "sony" },
  { name: "Logitech", slug: "logitech" },
] as const;

const products = [
  {
    name: "MacBook Air M4 13\"",
    slug: "macbook-air-m4-13",
    description: "Laptop mỏng nhẹ cho công việc hằng ngày, học tập và sáng tạo nội dung di động.",
    shortDescription: "Mỏng nhẹ, pin dài và đủ mạnh cho phần lớn ngày làm việc.",
    categorySlug: "laptop",
    brandSlug: "apple",
    sku: "MBA-M4-13-16-256-SLV",
    variantName: "16 GB / 256 GB / Bạc",
    attributes: { ram: "16 GB", storage: "256 GB", color: "Bạc" },
    price: 26_990_000,
    compareAtPrice: 28_990_000,
    stock: 18,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Laptop nhôm màu bạc mở trên bàn làm việc tối giản",
  },
  {
    name: "ASUS Zenbook 14 OLED",
    slug: "asus-zenbook-14-oled-ux3405",
    description: "Laptop Windows cao cấp với màn hình OLED sắc nét và thiết kế di động.",
    shortDescription: "Lựa chọn Windows cân bằng cho người cần màn hình xuất sắc.",
    categorySlug: "laptop",
    brandSlug: "asus",
    sku: "ASUS-UX3405-U7-16-512",
    variantName: "Core Ultra 7 / 16 GB / 512 GB",
    attributes: { processor: "Intel Core Ultra 7", ram: "16 GB", storage: "512 GB" },
    price: 24_490_000,
    compareAtPrice: 26_990_000,
    stock: 12,
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Laptop mỏng màu xám hiển thị màn hình sáng trên bàn gỗ",
  },
  {
    name: "iPhone 16 Pro",
    slug: "iphone-16-pro",
    description: "Điện thoại cao cấp với hệ camera linh hoạt và hiệu năng ổn định dài hạn.",
    shortDescription: "Camera ổn định và hiệu năng bền cho người làm nội dung.",
    categorySlug: "dien-thoai",
    brandSlug: "apple",
    sku: "IP16P-128-BLK",
    variantName: "128 GB / Titan đen",
    attributes: { storage: "128 GB", color: "Titan đen" },
    price: 28_490_000,
    compareAtPrice: 30_990_000,
    stock: 24,
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Điện thoại màu tối đặt nghiêng trên bề mặt trung tính",
  },
  {
    name: "Samsung Galaxy S25",
    slug: "samsung-galaxy-s25",
    description: "Smartphone Android nhỏ gọn với màn hình sáng và thời gian cập nhật dài.",
    shortDescription: "Nhỏ gọn, màn hình sáng và nhiều tính năng hỗ trợ hằng ngày.",
    categorySlug: "dien-thoai",
    brandSlug: "samsung",
    sku: "SS-S25-256-NAVY",
    variantName: "256 GB / Navy",
    attributes: { storage: "256 GB", color: "Navy" },
    price: 20_990_000,
    compareAtPrice: 22_990_000,
    stock: 31,
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Điện thoại Samsung màu tím nhạt nhìn từ mặt lưng",
  },
  {
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    description: "Tai nghe không dây chống ồn chủ động cho công việc tập trung và di chuyển.",
    shortDescription: "Không gian tập trung đáng tin cậy cho văn phòng và chuyến bay.",
    categorySlug: "phu-kien",
    brandSlug: "sony",
    sku: "SONY-WH1000XM5-BLK",
    variantName: "Đen",
    attributes: { color: "Đen" },
    price: 7_490_000,
    compareAtPrice: 8_490_000,
    stock: 20,
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Tai nghe chụp tai màu đen trên nền tối",
  },
  {
    name: "Logitech MX Master 3S",
    slug: "logitech-mx-master-3s",
    description: "Chuột không dây công thái học với cuộn điện từ và kết nối đa thiết bị.",
    shortDescription: "Chuột làm việc yên tĩnh, chính xác và chuyển thiết bị rất nhanh.",
    categorySlug: "phu-kien",
    brandSlug: "logitech",
    sku: "LOGI-MX-MASTER-3S-GRAPHITE",
    variantName: "Graphite",
    attributes: { color: "Graphite" },
    price: 2_190_000,
    compareAtPrice: 2_490_000,
    stock: 46,
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Chuột công thái học màu đen cạnh bàn phím",
  },
] as const;

async function seed(): Promise<void> {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: category,
      create: category,
    });
  }

  for (const brand of brands) {
    await prisma.brand.upsert({
      where: { slug: brand.slug },
      update: brand,
      create: brand,
    });
  }

  for (const item of products) {
    const [category, brand] = await Promise.all([
      prisma.category.findUniqueOrThrow({ where: { slug: item.categorySlug } }),
      prisma.brand.findUniqueOrThrow({ where: { slug: item.brandSlug } }),
    ]);

    const product = await prisma.product.upsert({
      where: { slug: item.slug },
      update: {
        name: item.name,
        description: item.description,
        shortDescription: item.shortDescription,
        status: "ACTIVE",
        categoryId: category.id,
        brandId: brand.id,
        verdict: item.shortDescription,
      },
      create: {
        name: item.name,
        slug: item.slug,
        description: item.description,
        shortDescription: item.shortDescription,
        status: "ACTIVE",
        categoryId: category.id,
        brandId: brand.id,
        verdict: item.shortDescription,
        publishAt: new Date(),
      },
    });

    await prisma.productVariant.upsert({
      where: { sku: item.sku },
      update: {
        productId: product.id,
        name: item.variantName,
        attributes: item.attributes,
        price: item.price,
        compareAtPrice: item.compareAtPrice,
        stock: item.stock,
      },
      create: {
        productId: product.id,
        sku: item.sku,
        name: item.variantName,
        attributes: item.attributes,
        price: item.price,
        compareAtPrice: item.compareAtPrice,
        stock: item.stock,
      },
    });

    const existingMedia = await prisma.productMedia.findFirst({
      where: { productId: product.id, url: item.imageUrl },
    });

    if (existingMedia) {
      await prisma.productMedia.update({
        where: { id: existingMedia.id },
        data: { alt: item.imageAlt, sortOrder: 0 },
      });
    } else {
      await prisma.productMedia.create({
        data: {
          productId: product.id,
          url: item.imageUrl,
          alt: item.imageAlt,
          sortOrder: 0,
        },
      });
    }
  }
}

seed()
  .then(async () => prisma.$disconnect())
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
