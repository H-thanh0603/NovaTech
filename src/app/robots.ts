import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/tai-khoan/", "/thanh-toan", "/thanh-toan-gateway"],
    },
    sitemap: "https://nexora.vn/sitemap.xml",
  };
}
