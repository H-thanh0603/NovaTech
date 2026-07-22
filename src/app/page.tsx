import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/storefront/hero";
import { HomeSections } from "@/components/storefront/home-sections";
import { PromoCarousel } from "@/components/storefront/promo-carousel";
import { catalogProducts } from "@/features/catalog/catalog.data";
import { InMemoryCatalogRepository } from "@/features/catalog/catalog.repository";
import { getFeaturedProducts, listProducts } from "@/features/catalog/catalog.service";

export default async function HomePage() {
  const repository = new InMemoryCatalogRepository(catalogProducts);
  const [featuredProducts, gamingResult, laptopsResult, audioResult] = await Promise.all([
    getFeaturedProducts(repository),
    listProducts(repository, { categorySlug: "gaming", sort: "newest", pageSize: 5 }),
    listProducts(repository, { categorySlug: "may-tinh", sort: "newest", pageSize: 5 }),
    listProducts(repository, { categorySlug: "thiet-bi-phu-kien", sort: "newest", pageSize: 5 }),
  ]);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PromoCarousel products={featuredProducts} />
        <HomeSections
          products={featuredProducts}
          phones={gamingResult.items}
          laptops={laptopsResult.items}
          audio={audioResult.items}
        />
      </main>
      <SiteFooter />
    </>
  );
}
