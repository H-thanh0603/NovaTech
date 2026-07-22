import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { blogArticles, blogCategories } from "@/features/blog/blog.data";

export const metadata: Metadata = {
  title: "Cẩm nang công nghệ",
  description: "Hướng dẫn, đánh giá, và so sánh sản phẩm công nghệ từ Nexora.",
};

export default function BlogPage() {
  const featured = blogArticles[0];
  const rest = blogArticles.slice(1);

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <div className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-electric">Nexora Cẩm nang</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-midnight sm:text-5xl">Đọc ít hơn. Hiểu đúng hơn.</h1>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {blogCategories.map((cat) => (
              <span key={cat} className="inline-flex min-h-9 shrink-0 items-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600">
                {cat}
              </span>
            ))}
          </div>

          <Link href={`/cam-nang/${featured.slug}`} className="group mt-8 block overflow-hidden rounded-panel border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto">
                <Image src={featured.coverImage} alt={featured.title} fill priority sizes="(max-width: 1024px) 92vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <span className="inline-flex w-fit rounded-full bg-electric/10 px-3 py-1 text-xs font-bold text-electric">{featured.category}</span>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-midnight sm:text-3xl">{featured.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
                  <span>{featured.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.publishedAt}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1"><Clock className="size-3" aria-hidden="true" /> {featured.readingTime} phút</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <Link key={article.slug} href={`/cam-nang/${article.slug}`} className="group flex flex-col overflow-hidden rounded-panel border border-slate-200 bg-white">
                <div className="relative aspect-video">
                  <Image src={article.coverImage} alt={article.title} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-500">{article.category}</span>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-[-0.02em] text-midnight">{article.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                    <span>{article.publishedAt}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1"><Clock className="size-3" aria-hidden="true" /> {article.readingTime} phút</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
