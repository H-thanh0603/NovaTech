import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/storefront/hero";
import { HomeSections } from "@/components/storefront/home-sections";
import { catalogProducts } from "@/features/catalog/catalog.data";
import { InMemoryCatalogRepository } from "@/features/catalog/catalog.repository";
import { getFeaturedProducts, listProducts } from "@/features/catalog/catalog.service";

export default async function HomePage() {
  const repository = new InMemoryCatalogRepository(catalogProducts);
  const [featuredProducts, phonesResult, laptopsResult, audioResult] = await Promise.all([
    getFeaturedProducts(repository),
    listProducts(repository, { categorySlug: "dien-thoai", sort: "best-selling", pageSize: 5 }),
    listProducts(repository, { categorySlug: "laptop", sort: "best-selling", pageSize: 5 }),
    listProducts(repository, { categorySlug: "am-thanh", sort: "best-selling", pageSize: 5 }),
  ]);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HomeSections
          products={featuredProducts}
          phones={phonesResult.items}
          laptops={laptopsResult.items}
          audio={audioResult.items}
        />
      </main>
      <SiteFooter />
    </>
  );
}
