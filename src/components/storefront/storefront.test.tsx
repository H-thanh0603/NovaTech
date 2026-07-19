import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { SiteFooter } from "../layout/site-footer";
import { Hero } from "./hero";
import { HomeSections } from "./home-sections";
import { ProductCard } from "./product-card";

describe("storefront content", () => {
  it("gives the homepage a single clear value proposition", () => {
    const markup = renderToStaticMarkup(<Hero />);
    const textContent = markup.replace(/<[^>]+>/g, "");

    expect(markup.match(/<h1/g)).toHaveLength(1);
    expect(textContent).toContain("Công nghệ tốt không cần khó chọn");
    expect(textContent).toContain("Khám phá sản phẩm");
  });

  it("explains an empty featured catalog without failing the page", () => {
    const markup = renderToStaticMarkup(<HomeSections products={[]} />);

    expect(markup).toContain("Bộ sưu tập đang được cập nhật");
  });

  it("does not disguise unavailable footer pages as product links", () => {
    const markup = renderToStaticMarkup(<SiteFooter />);

    expect(markup).not.toContain('href="#featured"');
    expect(markup).toContain("Sắp ra mắt");
  });

  it("presents the decision details and accessible product image", () => {
    const markup = renderToStaticMarkup(
      <ProductCard
        product={{
          id: "laptop-one",
          slug: "laptop-one",
          name: "Laptop One",
          category: "Laptop",
          price: 28_990_000,
          imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
          imageAlt: "Laptop bạc mở trên bàn",
          verdict: "Nhẹ và đủ mạnh cho công việc.",
          specs: ["RAM 16 GB", "Pin 18 giờ"],
          featured: true,
        }}
      />,
    );

    expect(markup).toContain('alt="Laptop bạc mở trên bàn"');
    expect(markup).toContain("Nhẹ và đủ mạnh cho công việc.");
    expect(markup).toContain("28.990.000");
  });
});
