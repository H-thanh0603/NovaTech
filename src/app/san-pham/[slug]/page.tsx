import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/catalog/product-detail";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { InMemoryCatalogRepository } from "@/features/catalog/catalog.repository";
import { getProductBySlug } from "@/features/catalog/catalog.service";

type PageProps = Readonly<{ params: Promise<{ slug: string }> }>;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const repository = new InMemoryCatalogRepository();
  const product = await getProductBySlug(repository, slug);

  if (!product) {
    return { title: "Không tìm thấy sản phẩm" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const repository = new InMemoryCatalogRepository();
  const product = await getProductBySlug(repository, slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <ProductDetail product={product} />
      </main>
      <SiteFooter />
    </>
  );
}
