import { mkdir, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ORIGIN = "https://cphub.vn";
const GENERATED_DIR = join(process.cwd(), "src", "features", "catalog");
const MAX_PRODUCTS = 200;

type SourceImage = { id: number; position: number; src: string; alt: string | null };
type SourceVariant = {
  id: number;
  sku: string | null;
  title: string;
  price: string;
  compare_at_price: string | null;
  inventory_quantity: number;
  available: boolean;
  option1: string | null;
  option2: string | null;
  option3: string | null;
};
type SourceProduct = {
  id: number;
  handle: string;
  title: string;
  product_type: string;
  vendor: string;
  body_html: string;
  updated_at: string;
  image: SourceImage | null;
  images: SourceImage[];
  variants: SourceVariant[];
};

type CatalogRecord = Record<string, unknown>;

function plainText(html: string) {
  return html
    .replace(/<li[^>]*>/gi, "• ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function specsFrom(html: string, title: string) {
  const listed = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    .map((match) => plainText(match[1]))
    .filter(Boolean)
    .slice(0, 8);
  return listed.length > 0 ? listed : title.split(/[|/]/).map((part) => part.trim()).filter(Boolean).slice(0, 5);
}

function slug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function categoryFor(productType: string, title: string) {
  const value = `${productType} ${title}`.toLowerCase();
  if (/server|máy chủ|workstation|máy trạm|công nghiệp/.test(value)) return "Máy chủ & linh kiện";
  if (/laptop|notebook|tablet|máy tính|pc |all-in-one/.test(value)) return "Máy tính";
  if (/cpu|ram|bo mạch|motherboard|vga|card đồ họa|ssd|hdd|ổ cứng|case|nguồn|tản nhiệt|quạt/.test(value)) return "Linh kiện PC";
  if (/gaming|game|bàn phím|chuột|tai nghe|ghế|vô lăng|tay cầm/.test(value)) return "Gaming";
  if (/vr|stream|micro|webcam|đèn/.test(value)) return "VR & Streaming";
  if (/máy in|máy chiếu|màn chiếu|văn phòng|photocopy|scan|máy quét/.test(value)) return "Văn phòng";
  if (/wifi|router|switch|mạng|network|poe|nas|cáp mạng/.test(value)) return "Mạng & kết nối";
  if (/phần mềm|office|windows|antivirus|kaspersky/.test(value)) return "Phần mềm";
  if (/màn hình|loa|camera|máy ảnh|đầu đọc|cáp|hub|sạc|adapter/.test(value)) return "Thiết bị & phụ kiện";
  return "Khác";
}

async function fetchText(url: string) {
  let lastError: unknown;
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { "user-agent": "NovaTech catalog sync/1.0" } });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 1_000 * 2 ** attempt));
    }
  }
  throw new Error(`Không thể tải ${url}: ${String(lastError)}`);
}

async function fetchAllProducts() {
  const products: SourceProduct[] = [];
  for (let page = 1; ; page += 1) {
    const payload = JSON.parse(await fetchText(`${ORIGIN}/collections/all/products.json?limit=250&page=${page}`)) as { products?: SourceProduct[] };
    const batch = payload.products ?? [];
    products.push(...batch);
    console.log(`Đã đọc ${products.length} sản phẩm...`);
    if (products.length >= MAX_PRODUCTS) return products.slice(0, MAX_PRODUCTS);
    if (batch.length === 0) return products;
    await new Promise((resolve) => setTimeout(resolve, 350));
  }
}

function toRecord(source: SourceProduct): CatalogRecord | null {
  const primaryVariant = source.variants.find((variant) => Number(variant.price) > 0) ?? source.variants[0];
  const price = primaryVariant && Number(primaryVariant.price) > 0 ? Number(primaryVariant.price) : null;
  const priceStatus = price == null ? "CONTACT" : "AVAILABLE";
  const imageSources = source.images.filter((image) => image.src.startsWith("https://cdn.hstatic.net/")).slice(0, 3);
  if (imageSources.length === 0) return null;
  const description = plainText(source.body_html).slice(0, 500) || source.title;
  const category = categoryFor(source.product_type, source.title);
  const productSlug = source.handle || slug(source.title);
  const variants = priceStatus === "AVAILABLE"
    ? source.variants.filter((variant) => Number(variant.price) > 0).map((variant, index) => ({
      id: `v-${source.id}-${variant.id}`,
      sku: variant.sku || `${productSlug}-${index + 1}`,
      name: variant.title || "Phiên bản tiêu chuẩn",
      attributes: Object.fromEntries([["Lựa chọn", variant.option1], ["Tùy chọn 2", variant.option2], ["Tùy chọn 3", variant.option3]].filter(([, value]) => value)),
      price: Number(variant.price),
      ...(variant.compare_at_price && Number(variant.compare_at_price) > Number(variant.price) ? { compareAtPrice: Number(variant.compare_at_price) } : {}),
      stock: variant.available ? Math.max(1, variant.inventory_quantity || 99) : 0,
      lowStockAt: 3,
    }))
    : [];
  const compareAtPrice = primaryVariant?.compare_at_price && Number(primaryVariant.compare_at_price) > (price ?? 0)
    ? Number(primaryVariant.compare_at_price)
    : undefined;
  const specs = specsFrom(source.body_html, source.title);
  const media = imageSources.map((image, index) => ({
    id: `m-${source.id}-${image.id}`,
    url: image.src,
    alt: image.alt || source.title,
    type: "IMAGE" as const,
    sortOrder: index,
  }));
  return {
    id: String(source.id), slug: productSlug, name: source.title, category, price: price ?? 0, priceStatus,
    ...(compareAtPrice ? { compareAtPrice } : {}), imageUrl: media[0].url, imageAlt: media[0].alt,
    verdict: description, specs, featured: false, tags: [slug(category), slug(source.product_type)].filter(Boolean),
    releaseDate: source.updated_at, sourceUrl: `${ORIGIN}/products/${productSlug}`, sourceUpdatedAt: source.updated_at,
    brand: source.vendor || "Khác", brandSlug: slug(source.vendor || "Khác"), media, variants,
  };
}

function detailsFrom(products: readonly CatalogRecord[]) {
  return products.map((product) => ({
    ...product,
    categorySlug: slug(String(product.category)),
    shortDescription: product.verdict,
    description: product.verdict,
    highlights: Array.isArray(product.specs) ? product.specs.slice(0, 3) : [],
    considerations: [],
    reviews: [],
  }));
}

async function main() {
  const sourceProducts = await fetchAllProducts();
  const records = sourceProducts.map(toRecord).filter((record): record is CatalogRecord => record !== null);
  const handles = new Set(records.map((record) => record.slug));
  if (records.length === 0 || handles.size !== records.length) throw new Error("Catalogue rỗng hoặc có slug trùng lặp");
  const featured = records
    .slice()
    .sort((a, b) => String(b.sourceUpdatedAt).localeCompare(String(a.sourceUpdatedAt)))
    .slice(0, 24)
    .map((record) => String(record.slug));
  const products: CatalogRecord[] = records.map((record) => ({ ...record, featured: featured.includes(String(record.slug)) }));
  const categories = [...new Set(products.map((product) => String(product.category)))].sort().map((name) => ({ id: `cat-${slug(name)}`, slug: slug(name), name }));
  const brands = [...new Set(products.map((product) => String(product.brand)))].sort().map((name) => ({ id: `brand-${slug(name)}`, slug: slug(name), name }));
  const navigation = categories
    .map((category) => ({ ...category, count: products.filter((product) => product.category === category.name).length }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "vi"))
    .slice(0, 8);
  const tempDir = join(GENERATED_DIR, `.catalog-sync-${Date.now()}`);
  await mkdir(tempDir, { recursive: true });
  await writeFile(join(tempDir, "catalog.data.ts"), `import type { CatalogProduct } from "./catalog.types";\n\nexport const catalogProducts = ${JSON.stringify(products, null, 2)} as unknown as readonly CatalogProduct[];\n`, "utf8");
  await writeFile(join(tempDir, "catalog-detail.data.ts"), `import type { CatalogBrand, CatalogCategory, CatalogProductDetail } from "./catalog.types";\n\nexport const catalogCategories: readonly CatalogCategory[] = ${JSON.stringify(categories, null, 2)};\n\nexport const catalogBrands: readonly CatalogBrand[] = ${JSON.stringify(brands, null, 2)};\n\nexport const catalogProductDetails = ${JSON.stringify(detailsFrom(products), null, 2)} as unknown as readonly CatalogProductDetail[];\n`, "utf8");
  await writeFile(join(tempDir, "catalog-navigation.data.ts"), `import type { CatalogNavigationItem } from "./catalog.types";\n\nexport const catalogNavigation: readonly CatalogNavigationItem[] = ${JSON.stringify(navigation, null, 2)};\n`, "utf8");
  for (const file of ["catalog.data.ts", "catalog-detail.data.ts", "catalog-navigation.data.ts"]) {
    const destination = join(GENERATED_DIR, file);
    const backup = join(tempDir, `${file}.backup`);
    try {
      await rename(destination, backup);
    } catch (error: unknown) {
      if (!(error instanceof Error && "code" in error && error.code === "ENOENT")) throw error;
    }
    try {
      await rename(join(tempDir, file), destination);
    } catch (error) {
      try { await rename(backup, destination); } catch { /* preserve the original error */ }
      throw error;
    }
  }
  await rm(tempDir, { recursive: true, force: true });
  console.log(`Đã đồng bộ ${products.length} sản phẩm CP Hub; bỏ qua ${sourceProducts.length - products.length} sản phẩm thiếu ảnh CDN.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
