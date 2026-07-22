"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { CatalogProduct } from "@/features/catalog/catalog.types";

type PromoCarouselProps = Readonly<{ products: readonly CatalogProduct[] }>;

export function PromoCarousel({ products }: PromoCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = Math.min(products.length, 3);

  useEffect(() => {
    if (count < 2 || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % count), 6000);
    return () => window.clearInterval(timer);
  }, [count, paused]);

  if (count === 0) return null;
  const product = products[active % count];

  return (
    <section className="bg-surface py-6 sm:py-8" aria-roledescription="carousel" aria-label="Ưu đãi nổi bật">
      <div
        className="mx-auto max-w-page px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <article className="relative isolate grid min-h-72 overflow-hidden rounded-[2rem] bg-midnight text-white sm:min-h-80 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.5),_transparent_48%)]" aria-hidden="true" />
          <div className="flex flex-col justify-center px-7 py-10 sm:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">NovaTech picks · {product.category}</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{product.name}</h2>
            <p className="mt-3 max-w-xl line-clamp-2 text-sm leading-6 text-slate-300">{product.verdict}</p>
            <Link href={`/san-pham/${product.slug}`} className="mt-7 inline-flex min-h-11 w-fit items-center rounded-full bg-white px-5 text-sm font-bold text-midnight transition-transform hover:-translate-y-0.5">
              Khám phá sản phẩm
            </Link>
          </div>
          <div className="relative min-h-60 bg-white/5">
            <Image src={product.imageUrl} alt={product.imageAlt} fill priority={active === 0} sizes="(max-width: 1024px) 100vw, 44vw" className="object-contain p-6" />
          </div>
          {count > 1 ? (
            <>
              <button type="button" aria-label="Banner trước" onClick={() => setActive((current) => (current - 1 + count) % count)} className="absolute left-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25">
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button type="button" aria-label="Banner tiếp theo" onClick={() => setActive((current) => (current + 1) % count)} className="absolute right-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25">
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
              <div className="absolute bottom-5 left-7 flex gap-2 sm:left-12">
                {products.slice(0, count).map((item, index) => (
                  <button key={item.id} type="button" aria-label={`Banner ${index + 1}`} aria-current={index === active} onClick={() => setActive(index)} className={`h-2 rounded-full transition-all ${index === active ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/70"}`} />
                ))}
              </div>
            </>
          ) : null}
        </article>
      </div>
    </section>
  );
}
