import SERVICES_WITH_SLUGS from "@/lib/servicesData";

export default function sitemap() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.neobaus.com").replace(/\/+$/, "");

  const staticRoutes = ["", "/about", "/services", "/contact"];
  const serviceRoutes = (SERVICES_WITH_SLUGS || []).map(
    (s) => `/services/${s.slug}`
  );

  const urls = [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  return urls;
}
