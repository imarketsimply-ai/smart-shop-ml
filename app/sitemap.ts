import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://smart-shop-ml.vercel.app", lastModified: new Date() },
    { url: "https://smart-shop-ml.vercel.app/ofertas", lastModified: new Date() },
    { url: "https://smart-shop-ml.vercel.app/legal/terminos", lastModified: new Date() },
    { url: "https://smart-shop-ml.vercel.app/legal/privacidad", lastModified: new Date() },
  ];
}

