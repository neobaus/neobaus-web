import { notFound } from "next/navigation"
import Link from "next/link"
import SERVICES from "@/lib/servicesData"
import { Card } from "@/components/ui/card"
import Script from "next/script"

export default function ServicePage({ params }) {
  const { slug } = params

  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    return notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.neobaus.com"
  const serviceUrl = `${siteUrl}/services/${slug}`

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">{service.title}</h1>
            <p className="text-base text-muted-foreground mb-6">{service.description}</p>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-primary underline">
                Back to Home
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground underline">
                All Services
              </Link>
            </div>
          </Card>
          <Script
            id="ld-service"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: service.title,
                name: service.title,
                description: service.description,
                provider: {
                  "@type": "Organization",
                  name: "neobaus",
                  areaServed: "PH",
                  url: siteUrl,
                },
                url: serviceUrl,
              }),
            }}
          />
          <Script
            id="ld-breadcrumb"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: siteUrl,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: `${siteUrl}/services`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: service.title,
                    item: serviceUrl,
                  },
                ],
              }),
            }}
          />
        </div>
      </div>
    </section>
  )
}
