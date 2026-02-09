import { MetadataRoute } from "next";
import { configWeb } from "@/config/configWeb.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: configWeb.urlWeb,
      lastModified: new Date("2025-08-22").toISOString(),
      changeFrequency: "never",
      priority: 1.0,
    },
    {
      url: configWeb.urlWeb + "/contact",
      lastModified: new Date("2025-08-22").toISOString(),
      changeFrequency: "never",
      priority: 0.7,
    },
  ];
}
