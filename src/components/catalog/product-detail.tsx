"use client";

import { Check, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ReviewList } from "@/components/catalog/review-list";
import { VariantSelector } from "@/components/catalog/variant-selector";
import type { CatalogProductDetail } from "@/features/catalog/catalog.types";

type ProductDetailProps = Readonly<{
  product: CatalogProductDetail;
}>;

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSku, setSelectedSku] = useState(product.variants[0]?.sku ?? "");
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [added, setAdded] = useState(false);

  const activeMedia = product.media[activeMediaIndex] ?? product.media[0];

  function handleAddToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

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
          <div className="relative aspect-square overflow-hidden rounded-panel border border-slate-200 bg-slate-100">
            {activeMedia ? (
              <Image
                src={activeMedia.url}
                alt={activeMedia.alt}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
            ) : null}
            {product.badge ? (
              <span className="absolute left-4 top-4 rounded-full bg-midnight px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                {product.badge}
              </span>
            ) : null}
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

          <div className="rounded-xl border border-slate-200 bg-surface p-5">
            <p className="text-sm font-bold text-midnight">Nexora Verdict</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{product.verdict}</p>
          </div>

          {product.variants.length > 0 ? (
            <VariantSelector variants={product.variants} selectedSku={selectedSku} onSelect={setSelectedSku} />
          ) : null}

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={added}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-electric px-6 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:bg-teal-tech"
          >
            {added ? (
              <><Check className="size-4" aria-hidden="true" /> Đã thêm vào giỏ</>
            ) : (
              <><ShoppingBag className="size-4" aria-hidden="true" /> Thêm vào giỏ hàng</>
            )}
          </button>

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
    </div>
  );
}
