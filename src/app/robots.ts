import { configWeb } from "@/config/configWeb.config";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/sitemap.xml"],
      },
    ],
    sitemap: `${configWeb.urlWeb}/sitemap.xml`,
    host: configWeb.urlWeb,
  };
}
