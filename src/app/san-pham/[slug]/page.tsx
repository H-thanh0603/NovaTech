import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/catalog/product-detail";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { InMemoryCatalogRepository } from "@/features/catalog/catalog.repository";
import { getProductBySlug, listProducts } from "@/features/catalog/catalog.service";

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
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.media[0]?.url ?? "", alt: product.media[0]?.alt ?? product.name }],
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const repository = new InMemoryCatalogRepository();
  const product = await getProductBySlug(repository, slug);

  if (!product) {
    notFound();
  }

  const relatedResult = await listProducts(repository, {
    categorySlug: product.categorySlug,
    sort: "newest",
    pageSize: 5,
  });
  const related = relatedResult.items.filter((p) => p.slug !== slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.media.map((m) => m.url),
    brand: { "@type": "Brand", name: product.brand },
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: product.price,
      availability: product.variants[0]?.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="bg-surface">
        <ProductDetail product={product} relatedProducts={related} />
      </main>
      <SiteFooter />
    </>
  );
}
