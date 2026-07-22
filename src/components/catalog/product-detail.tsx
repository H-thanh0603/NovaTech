"use client";

import { Check, ChevronDown, Heart, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";

import { ProductCard } from "@/components/storefront/product-card";
import { ReviewList } from "@/components/catalog/review-list";
import { StickyAddToCart } from "@/components/catalog/sticky-add-to-cart";
import { VariantSelector } from "@/components/catalog/variant-selector";
import { addToCartAction } from "@/features/checkout/checkout.actions";
import { formatVnd } from "@/features/catalog/catalog.service";
import type { CatalogProduct, CatalogProductDetail } from "@/features/catalog/catalog.types";
import { useWishlist } from "@/features/wishlist/wishlist-context";

type ProductDetailProps = Readonly<{
  product: CatalogProductDetail;
  relatedProducts?: readonly CatalogProduct[];
}>;

const faqItems = [
  {
    q: "Bảo hành bao lâu?",
    a: "Tất cả sản phẩm tại Nexora đều được bảo hành chính hãng 12 tháng. Một số sản phẩm cao cấp có thể lên đến 24 tháng — chi tiết xem trong phần thông số kỹ thuật.",
  },
  {
    q: "Có hỗ trợ trả góp 0% không?",
    a: "Có. Nexora hỗ trợ trả góp 0% qua thẻ tín dụng cho đơn hàng từ 5 triệu. Thời gian trả góp linh hoạt 3, 6, 9, 12 tháng.",
  },
  {
    q: "Thời gian giao hàng bao lâu?",
    a: "Nội thành Hà Nội, TP.HCM: giao trong 2-4 giờ. Các tỉnh khác: 1-3 ngày làm việc. Bạn sẽ nhận được dự kiến giao hàng chi tiết khi đặt hàng.",
  },
  {
    q: "Có thể đổi trả không?",
    a: "Nexora hỗ trợ đổi mới trong 30 ngày nếu sản phẩm có lỗi từ nhà sản xuất. Sản phẩm phải còn nguyên tem, hộp và phụ kiện đầy đủ.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q} className="rounded-xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-bold text-midnight">{item.q}</span>
              <ChevronDown
                className={`size-5 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {isOpen ? (
              <p className="px-5 pb-4 text-sm leading-6 text-slate-600">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function ProductDetail({ product, relatedProducts = [] }: ProductDetailProps) {
  const [selectedSku, setSelectedSku] = useState(product.variants[0]?.sku ?? "");
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [cartState, cartFormAction] = useActionState(addToCartAction, null);

  const activeMedia = product.media[activeMediaIndex] ?? product.media[0];
  const added = cartState?.success === true;
  const selectedVariant = product.variants.find((v) => v.sku === selectedSku) ?? product.variants[0];
  const displayPrice = selectedVariant?.price ?? product.price;
  const hasDiscount = selectedVariant?.compareAtPrice
    ? selectedVariant.compareAtPrice > displayPrice
    : product.compareAtPrice
      ? product.compareAtPrice > displayPrice
      : false;
  const discountPercent = hasDiscount
    ? Math.round(
        (1 - displayPrice / (selectedVariant?.compareAtPrice ?? product.compareAtPrice!)) * 100,
      )
    : 0;

  return (
    <div className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
      <nav aria-label="Đường dẫn" className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-electric">Trang chủ</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/san-pham?category=${product.categorySlug}`} className="hover:text-electric">{product.category}</Link>
        <span aria-hidden="true">/</span>
        <span className="font-semibold text-slate-700">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="group relative aspect-square overflow-hidden rounded-panel border border-slate-200 bg-slate-100">
            {activeMedia ? (
              <Image
                src={activeMedia.url}
                alt={activeMedia.alt}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : null}
            <div className="absolute left-4 top-4 flex flex-col gap-2">
              {product.badge ? (
                <span className="rounded-full bg-midnight px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                  {product.badge}
                </span>
              ) : null}
              {hasDiscount ? (
                <span className="rounded-full bg-red-500 px-3 py-1.5 text-[11px] font-bold text-white">
                  -{discountPercent}%
                </span>
              ) : null}
            </div>
          </div>
          {product.media.length > 1 ? (
            <div className="flex gap-3">
              {product.media.map((media, index) => (
                <button
                  key={media.id}
                  type="button"
                  onClick={() => setActiveMediaIndex(index)}
                  className={`relative size-20 overflow-hidden rounded-xl border-2 transition-colors ${
                    index === activeMediaIndex ? "border-electric" : "border-slate-200 hover:border-slate-300"
                  }`}
                  aria-label={`Xem ảnh ${index + 1}`}
                >
                  <Image src={media.url} alt={media.alt} fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-electric">{product.category}</p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-4xl">{product.name}</h1>
            <p className="mt-3 text-base leading-7 text-slate-600">{product.shortDescription}</p>
          </div>

          <div className="flex items-end gap-3">
            <p className="font-display text-3xl font-bold tracking-[-0.03em] text-midnight">{formatVnd(displayPrice)}</p>
            {hasDiscount ? (
              <div className="flex items-center gap-2 pb-1">
                <p className="text-sm text-slate-400 line-through">{formatVnd(selectedVariant?.compareAtPrice ?? product.compareAtPrice!)}</p>
                <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-bold text-red-600">-{discountPercent}%</span>
              </div>
            ) : null}
          </div>
          <p className="-mt-3 text-sm font-semibold text-teal-tech">Trả góp 0% từ {formatVnd(Math.round(displayPrice / 12))}/tháng</p>

          <div className="rounded-xl border border-slate-200 bg-surface p-5">
            <p className="text-sm font-bold text-midnight">Nexora Verdict</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{product.verdict}</p>
          </div>

          {product.variants.length > 0 ? (
            <VariantSelector variants={product.variants} selectedSku={selectedSku} onSelect={setSelectedSku} />
          ) : null}

          <form action={cartFormAction}>
            <input type="hidden" name="slug" value={product.slug} />
            <input type="hidden" name="sku" value={selectedSku} />
            <input type="hidden" name="quantity" value="1" />
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={added}
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-electric px-6 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:bg-teal-tech"
              >
                {added ? (
                  <><Check className="size-4" aria-hidden="true" /> Đã thêm vào giỏ</>
                ) : (
                  <><ShoppingBag className="size-4" aria-hidden="true" /> Thêm vào giỏ hàng</>
                )}
              </button>
              <WishlistToggleButton slug={product.slug} />
            </div>
          </form>
          {cartState?.error ? <p className="text-sm text-red-500">{cartState.error}</p> : null}

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-display text-lg font-bold text-midnight">Điểm nổi bật</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {product.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal-tech" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-midnight">Cần cân nhắc</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {product.considerations.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Minus className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-midnight">Thông số kỹ thuật</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.specs.map((spec) => (
                <li key={spec} className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section aria-labelledby="description-title" className="mt-12 max-w-3xl">
        <h2 id="description-title" className="font-display text-2xl font-bold text-midnight">Mô tả chi tiết</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">{product.description}</p>
      </section>

      <section aria-labelledby="reviews-title" className="mt-12 max-w-3xl">
        <h2 id="reviews-title" className="font-display text-2xl font-bold text-midnight">Đánh giá từ khách hàng</h2>
        <div className="mt-6">
          <ReviewList reviews={product.reviews} />
        </div>
      </section>

      <section aria-labelledby="faq-title" className="mt-12 max-w-3xl">
        <h2 id="faq-title" className="font-display text-2xl font-bold text-midnight">Câu hỏi thường gặp</h2>
        <div className="mt-6">
          <FaqAccordion />
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section aria-labelledby="related-title" className="mt-16">
          <h2 id="related-title" className="font-display text-2xl font-bold text-midnight">Sản phẩm liên quan</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((rp) => <ProductCard key={rp.id} product={rp} />)}
          </div>
        </section>
      ) : null}

      <StickyAddToCart
        slug={product.slug}
        sku={selectedSku}
        productName={product.name}
        price={displayPrice}
        imageUrl={activeMedia?.url ?? ""}
        imageAlt={activeMedia?.alt ?? product.name}
      />
    </div>
  );
}

function WishlistToggleButton({ slug }: Readonly<{ slug: string }>) {
  const { has, toggle } = useWishlist();
  const active = has(slug);

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      className={`grid size-12 shrink-0 place-items-center rounded-full border transition-colors ${
        active
          ? "border-red-300 bg-red-50 text-red-500"
          : "border-slate-200 text-slate-400 hover:border-red-300 hover:text-red-500"
      }`}
      aria-label={active ? "Bỏ yêu thích" : "Thêm yêu thích"}
      aria-pressed={active}
    >
      <Heart className={`size-5 ${active ? "fill-current" : ""}`} aria-hidden="true" />
    </button>
  );
}
