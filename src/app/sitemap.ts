import type { MetadataRoute } from "next";

import { catalogProducts } from "@/features/catalog/catalog.data";
import { blogArticles } from "@/features/blog/blog.data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexora.vn";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/san-pham`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/cam-nang`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/khuyen-mai`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/dang-nhap`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/dang-ky`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/don-hang`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  const productPages: MetadataRoute.Sitemap = catalogProducts.map((p) => ({
    url: `${baseUrl}/san-pham/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = blogArticles.map((a) => ({
    url: `${baseUrl}/cam-nang/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...articlePages];
}
