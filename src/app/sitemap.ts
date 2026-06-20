import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/propiedades`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/experiencia`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...properties.map((property) => ({
      url: `${siteUrl}/propiedades/${property.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}