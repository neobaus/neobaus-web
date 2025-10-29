import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Zap, Shield, Target, TrendingUp } from "lucide-react"

export function Services() {
  const services = [
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "AI Integrations",
    description: "Enhance your systems with intelligent AI solutions that deliver real-time insights and smarter decision-making.",
    // badge: "Core Service",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Automations",
    description: "Streamline repetitive tasks with powerful automations that save time and boost productivity effortlessly.",
    // badge: "New",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Custom Developments",
    description: "Turn your ideas into reality with tailor-made AI solutions designed to grow and evolve with your business.",
    // badge: "Strategic",
  },
];



  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs">
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
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
