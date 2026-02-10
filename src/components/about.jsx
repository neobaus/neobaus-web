import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Globe, Code, Award } from "lucide-react"
import { InteractiveCard } from "@/components/shared/InteractiveCard"

export function About() {
  const achievements = [
    {
      icon: "Code",
      title: "5+ Years Experience",
      badge: "",
      description: "Extensive development experience with modern technologies"
    },
    {
      icon: "Globe",
      title: "Global Reach",
      badge: "",
      description: "Serving clients both locally and internationally. Starting from small to big companies"
    },
    // {
    //   icon: <GraduationCap className="h-6 w-6 text-primary" />,
    //   title: "Master's Degree",
    //   description: "Advanced education in Computer Science"
    // },
    {
      icon: "Award",
      title: "Proven Track Record",
      badge: "",
      description: "Successful delivery of complex projects within budget and timelines"
    }
  ]

  // const services = SERVICES_WITH_SLUGS

  const iconMap = {
    Globe: <Globe className="h-8 w-8 text-primary" />,
    Code: <Code className="h-8 w-8 text-primary" />,
    Award: <Award className="h-8 w-8 text-primary" />,
    // HardDrive: <HardDrive className="h-8 w-8 text-primary" />,
  }

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-lg">
            About Us
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Data-Driven Team that Delivers Results
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Our goal is to empower businesses with data-driven insights and solutions that drive growth, efficiency, and success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((service, index) => {
            const href = service.href || `/services/${service.slug}`
            return (
              <InteractiveCard
                key={index}
                title={service.title}
                description={service.description}
                icon={iconMap[service.icon]}
                badge={service.badge}
                href={href}
                ariaLabel={`View details for ${service.title}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
