import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/storefront/hero";
import { HomeSections } from "@/components/storefront/home-sections";
import { catalogProducts } from "@/features/catalog/catalog.data";
import { InMemoryCatalogRepository } from "@/features/catalog/catalog.repository";
import { getFeaturedProducts } from "@/features/catalog/catalog.service";

export default async function HomePage() {
  const repository = new InMemoryCatalogRepository(catalogProducts);
  const products = await getFeaturedProducts(repository);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HomeSections products={products} />
      </main>
      <SiteFooter />
    </>
  );
}
