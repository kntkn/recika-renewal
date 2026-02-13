import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://recika.jp";

const routes = [
  "",
  "/philosophy",
  "/business",
  "/company",
  "/news",
  "/contact",
  "/privacy",
];

const locales = ["ja", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            ja: `${baseUrl}/ja${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
