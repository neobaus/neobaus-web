import { notFound } from "next/navigation"
import Link from "next/link"
import SERVICES from "@/lib/servicesData"
import { Card } from "@/components/ui/card"

export default function AIIntegrationsPage() {
  const service = SERVICES.find((s) => s.slug === "ai-integrations")

  if (!service) return notFound()

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
        </div>
      </div>
    </section>
  )
}
