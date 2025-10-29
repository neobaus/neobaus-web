import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Zap, Shield, Target, TrendingUp } from "lucide-react"
import SERVICES_WITH_SLUGS from "@/lib/servicesData"

export function Services() {
  const services = SERVICES_WITH_SLUGS

  const iconMap = {
    Brain: <Brain className="h-8 w-8 text-primary" />,
    Zap: <Zap className="h-8 w-8 text-primary" />,
    TrendingUp: <TrendingUp className="h-8 w-8 text-primary" />,
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
            const href = service.href || `/services/${service.slug}`;

            return (
              <Link
                key={index}
                href={href}
                className="block group"
                aria-label={`View details for ${service.title}`}>
                <Card className="relative overflow-hidden transform transition-all duration-300 will-change-transform group-hover:-translate-y-1 group-hover:scale-105 active:scale-95 hover:shadow-lg">
                  {/* subtle highlight overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 z-0" />
                  <div className="relative z-10">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                          {iconMap[service.icon]}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {service.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg sm:text-xl">
                        {service.title}
                        <span className="block h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300 mt-2" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm sm:text-base leading-relaxed text-foreground/90 transition-colors duration-200 group-hover:text-foreground">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
