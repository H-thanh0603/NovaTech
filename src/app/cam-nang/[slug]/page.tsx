import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { blogArticles } from "@/features/blog/blog.data";

type PageProps = Readonly<{ params: Promise<{ slug: string }> }>;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Không tìm thấy bài viết" };
  return { title: article.title, description: article.excerpt };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <Link href="/cam-nang" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-electric">
            <ArrowLeft className="size-4" aria-hidden="true" /> Cẩm nang
          </Link>

          <span className="mt-6 inline-flex rounded-full bg-electric/10 px-3 py-1 text-xs font-bold text-electric">{article.category}</span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-midnight sm:text-4xl">{article.title}</h1>

          <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
            <span className="font-semibold text-slate-600">{article.author}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedAt}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1"><Clock className="size-3" aria-hidden="true" /> {article.readingTime} phút đọc</span>
          </div>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-panel">
            <Image src={article.coverImage} alt={article.title} fill priority sizes="(max-width: 768px) 92vw, 768px" className="object-cover" />
          </div>

          <div className="mt-8 flex flex-col gap-4 text-base leading-8 text-slate-700">
            {article.content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>

        <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold text-midnight">Bài viết liên quan</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((rel) => (
              <Link key={rel.slug} href={`/cam-nang/${rel.slug}`} className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="relative aspect-video">
                  <Image src={rel.coverImage} alt={rel.title} fill sizes="(max-width: 640px) 92vw, 300px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <span className="text-[11px] font-bold text-slate-400">{rel.category}</span>
                  <h3 className="mt-1.5 text-sm font-bold text-midnight">{rel.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
