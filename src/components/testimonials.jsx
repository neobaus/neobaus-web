import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      avatar: "SJ",
      rating: 5,
      content: "Dtek has completely transformed how we analyze our website performance. The AI predictions are incredibly accurate and have helped us increase our conversion rate by 35%.",
      badge: "35% conversion increase"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      avatar: "MC",
      rating: 5,
      content: "The real-time analytics and automated reports save us hours every week. The insights are actionable and have directly impacted our revenue growth.",
      badge: "Revenue growth"
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      company: "ShopFast",
      avatar: "ER",
      rating: 5,
      content: "The AI recommendations are spot-on. We've implemented several suggestions and seen immediate improvements in our user engagement and sales.",
      badge: "Immediate results"
    },
    {
      name: "David Thompson",
      role: "Digital Marketing Lead",
      company: "GrowthCo",
      avatar: "DT",
      rating: 5,
      content: "The dashboard is intuitive and the data visualization is excellent. Our team can now make data-driven decisions with confidence.",
      badge: "Data-driven decisions"
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      company: "InnovateLab",
      avatar: "LW",
      rating: 5,
      content: "Dtek's predictive analytics helped us identify trends before our competitors. It's like having a crystal ball for our business.",
      badge: "Competitive advantage"
    },
    {
      name: "James Wilson",
      role: "Founder",
      company: "ScaleUp",
      avatar: "JW",
      rating: 5,
      content: "The customer support is outstanding and the platform is incredibly reliable. We've never experienced any downtime since we started using it.",
      badge: "100% uptime"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses that trust Dtek to power their growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="relative">
                  <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-sm text-muted-foreground italic pl-4">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.badge}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
