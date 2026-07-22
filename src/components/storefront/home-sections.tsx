import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Flame,
  Gamepad2,
  GraduationCap,
  Headphones,
  HousePlug,
  Laptop,
  ShieldCheck,
  Sparkles,
  Smartphone,
  WandSparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

import type { CatalogProduct } from "@/features/catalog/catalog.types";
import { ProductCard } from "./product-card";

const quickFinders = [
  { label: "Laptop cho sinh viên", icon: GraduationCap },
  { label: "Điện thoại dưới 15 triệu", icon: Smartphone },
  { label: "Setup làm việc tại nhà", icon: BriefcaseBusiness },
  { label: "Góc gaming gọn đẹp", icon: Gamepad2 },
] as const;

const guides = [
  {
    eyebrow: "Hướng dẫn mua",
    title: "Laptop cho sinh viên: chọn theo ngành, không chạy theo cấu hình",
    description: "Ngân sách nào nên ưu tiên CPU, RAM hay pin? Đây là cách chọn thực tế cho 4 năm đại học.",
    tone: "bg-blue-50 text-blue-950",
  },
  {
    eyebrow: "So sánh dễ hiểu",
    title: "OLED hay IPS: khác biệt nào bạn thực sự nhìn thấy mỗi ngày?",
    description: "Màu sắc, độ sáng, pin và độ bền được giải thích bằng tình huống sử dụng thay vì bảng số.",
    tone: "bg-teal-50 text-teal-950",
  },
  {
    eyebrow: "Build Your Setup",
    title: "Một góc làm việc tốt với ngân sách 25 triệu",
    description: "Phân bổ ngân sách cho laptop, màn hình và phụ kiện để mỗi khoản nâng cấp đều đáng tiền.",
    tone: "bg-amber-50 text-amber-950",
  },
] as const;

const trustItems = [
  { icon: ShieldCheck, title: "Bảo hành minh bạch", copy: "Điều kiện rõ trước khi mua" },
  { icon: Zap, title: "Giao hàng có dự kiến", copy: "Không để bạn phải đoán" },
  { icon: Headphones, title: "Hỗ trợ có ngữ cảnh", copy: "Hiểu sản phẩm và nhu cầu" },
] as const;

type HomeSectionsProps = Readonly<{
  products: readonly CatalogProduct[];
  phones?: readonly CatalogProduct[];
  laptops?: readonly CatalogProduct[];
  audio?: readonly CatalogProduct[];
}>;

function CategorySection({
  id,
  title,
  eyebrow,
  products,
  categoryHref,
}: Readonly<{
  id: string;
  title: string;
  eyebrow: string;
  products: readonly CatalogProduct[];
  categoryHref: string;
}>) {
  if (products.length === 0) return null;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 bg-surface py-14 sm:py-18">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-electric">{eyebrow}</p>
            <h2 id={`${id}-title`} className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-midnight sm:text-3xl">{title}</h2>
          </div>
          <Link href={categoryHref} className="inline-flex min-h-10 items-center gap-1.5 text-sm font-bold text-electric hover:gap-2.5 transition-all">
            Xem tất cả <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}

export function HomeSections({ products, phones, laptops, audio }: HomeSectionsProps) {
  const flashSaleProducts = (phones ?? []).filter((p) => p.compareAtPrice && p.compareAtPrice > p.price).slice(0, 5);
  const hasFlashSale = flashSaleProducts.length > 0;

  return (
    <>
      <section aria-labelledby="quick-finder-title" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <h2 id="quick-finder-title" className="shrink-0 text-sm font-bold text-midnight">Bạn đang tìm gì?</h2>
            <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
              {quickFinders.map(({ label, icon: Icon }) => (
                <Link key={label} href="/san-pham" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-surface px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-electric hover:text-electric">
                  <Icon className="size-4" aria-hidden="true" /> {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {hasFlashSale ? (
        <section aria-labelledby="flash-sale-title" className="scroll-mt-28 bg-gradient-to-r from-red-50 to-orange-50 py-10 sm:py-14">
          <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-red-500 text-white">
                <Flame className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 id="flash-sale-title" className="font-display text-2xl font-bold text-red-500">Flash Sale</h2>
                <p className="text-xs font-semibold text-slate-500">Sản phẩm giảm giá — số lượng có hạn</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {flashSaleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </section>
      ) : null}

      <section id="featured" aria-labelledby="featured-title" className="scroll-mt-28 bg-surface py-14 sm:py-18">
        <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-electric">Featured drop · 07/2026</p>
              <h2 id="featured-title" className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-[-0.045em] text-midnight sm:text-4xl">Những thiết bị đáng chú ý ngay lúc này.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">Ít lựa chọn hơn, nhưng mỗi lựa chọn đều có lý do rõ ràng để xuất hiện.</p>
          </div>
          {products.length > 0 ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="mt-10 rounded-panel border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Sparkles className="mx-auto size-8 text-electric" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold text-midnight">Bộ sưu tập đang được cập nhật</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">Nexora đang hoàn thiện phần đánh giá để mỗi sản phẩm xuất hiện đều có lý do thuyết phục.</p>
            </div>
          )}
        </div>
      </section>

      <CategorySection
        id="phones"
        title="Điện thoại bán chạy"
        eyebrow="Điện thoại · Hot nhất"
        products={phones ?? []}
        categoryHref="/san-pham?category=dien-thoai"
      />

      <section id="setup" aria-labelledby="setup-title" className="scroll-mt-28 bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-midnight px-6 py-12 text-white sm:px-10 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12 lg:px-14 lg:py-16">
            <div className="absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-electric/30 blur-3xl" aria-hidden="true" />
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-mint"><WandSparkles className="size-4" aria-hidden="true" /> Build Your Setup</p>
              <h2 id="setup-title" className="mt-4 font-display text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Một ngân sách. Một bộ máy thật sự hợp nhau.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Chọn mục tiêu và mức đầu tư, Nexora sẽ phân bổ hợp lý giữa thiết bị chính, màn hình và phụ kiện.</p>
              <Link href="/san-pham" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-mint px-6 text-sm font-bold text-midnight transition-transform hover:-translate-y-0.5">
                Khám phá cấu hình mẫu <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-0">
              {[
                { icon: Laptop, label: "Thiết bị chính", value: "16,9 triệu", width: "70%" },
                { icon: Smartphone, label: "Màn hình", value: "5,4 triệu", width: "42%" },
                { icon: HousePlug, label: "Phụ kiện", value: "2,7 triệu", width: "25%" },
              ].map(({ icon: Icon, label, value, width }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                  <Icon className="size-5 text-mint" aria-hidden="true" />
                  <p className="mt-8 text-xs text-slate-400">{label}</p>
                  <p className="mt-1 font-display text-xl font-bold">{value}</p>
                  <div className="mt-4 h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-electric-light" style={{ width }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CategorySection
        id="laptops"
        title="Laptop đáng mua"
        eyebrow="Laptop · Tuyển chọn"
        products={laptops ?? []}
        categoryHref="/san-pham?category=laptop"
      />

      <section id="picks" aria-labelledby="picks-title" className="scroll-mt-28 bg-slate-100 py-18 sm:py-24">
        <div className="mx-auto grid max-w-page gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-tech">Nexora Picks</p>
            <h2 id="picks-title" className="mt-3 font-display text-3xl font-semibold tracking-[-0.045em] text-midnight sm:text-5xl">Không phải tốt nhất trên giấy. Tốt nhất cho đúng người.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">Mỗi lựa chọn được đánh giá trên trải nghiệm thực tế, vòng đời sử dụng và giá trị lâu dài.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Đáng tiền", copy: "Hiệu năng và trải nghiệm tương xứng với từng đồng bạn bỏ ra." },
              { title: "Dùng lâu", copy: "Độ bền, cập nhật và khả năng sửa chữa được tính vào quyết định." },
              { title: "Đúng ngữ cảnh", copy: "Không gợi ý cấu hình thừa cho nhu cầu vốn không cần đến." },
              { title: "Nói cả điểm trừ", copy: "Điều cần cân nhắc luôn xuất hiện trước nút mua hàng." },
            ].map((item) => (
              <article key={item.title} className="rounded-card border border-slate-200 bg-white p-6">
                <span className="grid size-9 place-items-center rounded-full bg-teal-50 text-teal-tech"><Check className="size-4" aria-hidden="true" /></span>
                <h3 className="mt-5 font-display text-lg font-bold text-midnight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CategorySection
        id="audio"
        title="Âm thanh được yêu thích"
        eyebrow="Âm thanh · Chọn nhiều"
        products={audio ?? []}
        categoryHref="/san-pham?category=am-thanh"
      />

      <section id="guides" aria-labelledby="guides-title" className="scroll-mt-28 bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-electric">Technology, decoded.</p>
          <h2 id="guides-title" className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-[-0.045em] text-midnight sm:text-5xl">Đọc ít hơn. Hiểu đúng hơn.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {guides.map((guide) => (
              <article key={guide.title} className={`flex min-h-80 flex-col rounded-panel p-7 sm:p-8 ${guide.tone}`}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-65">{guide.eyebrow}</p>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.035em]">{guide.title}</h3>
                <p className="mt-4 text-sm leading-7 opacity-75">{guide.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold">Bài viết đang biên tập <Sparkles className="size-4" aria-hidden="true" /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Cam kết dịch vụ" className="border-t border-slate-200 bg-surface">
        <div className="mx-auto grid max-w-page gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          {trustItems.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-electric shadow-sm"><Icon className="size-5" aria-hidden="true" /></span>
              <div><h2 className="text-sm font-bold text-midnight">{title}</h2><p className="mt-1 text-xs text-slate-500">{copy}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
