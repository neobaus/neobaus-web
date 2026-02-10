import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Zap, Shield, Target, TrendingUp, HardDrive } from "lucide-react"
import SERVICES_WITH_SLUGS from "@/lib/servicesData"
import { InteractiveCard } from "@/components/shared/InteractiveCard"

export function Services() {
  const services = SERVICES_WITH_SLUGS

  const iconMap = {
    Brain: <Brain className="h-8 w-8 text-primary" />,
    Zap: <Zap className="h-8 w-8 text-primary" />,
    TrendingUp: <TrendingUp className="h-8 w-8 text-primary" />,
    HardDrive: <HardDrive className="h-8 w-8 text-primary" />,
  }



  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-lg">
            Services
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Data and AI-Powered Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Unlock the full potential of your business data with intelligent analytics that reveal insights, trends, and opportunities. Make smarter moves faster — with AI that adapts to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const href = service.href || `/services/${service.slug}`
            const total = services.length
            const remainder = total % 3
            const isLastRow = index >= total - remainder
            let colStartClass = ""

            if (isLastRow && remainder === 1) {
              colStartClass = "lg:col-start-2"
            }
            if (isLastRow && remainder === 2) {
              if (index % 3 === 0) {
                colStartClass = "lg:col-start-1"
              } else {
                colStartClass = "lg:col-start-3"
              }
            }

            return (
              <div key={index} className={colStartClass}>
                <InteractiveCard
                  title={service.title}
                  description={service.description}
                  icon={iconMap[service.icon]}
                  badge={service.badge}
                  href={href}
                  ariaLabel={`View details for ${service.title}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
