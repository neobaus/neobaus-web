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
      content: "neobaus has completely transformed how we analyze our website performance. The AI predictions are incredibly accurate and have helped us increase our conversion rate by 35%.",
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
      content: "neobaus's predictive analytics helped us identify trends before our competitors. It's like having a crystal ball for our business.",
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
    },
    {
      name: "Alex Martinez",
      role: "CTO",
      company: "DataFlow",
      avatar: "AM",
      rating: 5,
      content: "The integration was seamless and the API documentation is excellent. We were up and running in minutes, not hours.",
      badge: "Easy integration"
    },
    {
      name: "Rachel Green",
      role: "Head of Growth",
      company: "ScaleTech",
      avatar: "RG",
      rating: 5,
      content: "The predictive models are incredibly accurate. We've been able to optimize our campaigns based on AI insights and see 40% better ROI.",
      badge: "40% better ROI"
    },
    {
      name: "Tom Anderson",
      role: "VP Marketing",
      company: "CloudFirst",
      avatar: "TA",
      rating: 5,
      content: "The real-time alerts and notifications help us catch issues before they impact our business. It's like having a 24/7 monitoring team.",
      badge: "24/7 monitoring"
    },
    {
      name: "Maria Garcia",
      role: "Analytics Manager",
      company: "RetailPro",
      avatar: "MG",
      rating: 5,
      content: "The custom dashboards and reporting services are exactly what we needed. Our stakeholders love the clear, actionable insights.",
      badge: "Custom dashboards"
    }
  ]

  // Create 20 testimonials by duplicating the array
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs">
            Testimonials
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Join thousands of businesses that trust neobaus to power their growth
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* First Row - Right to Left */}
          <div className="flex animate-marquee-right mb-4 sm:mb-6">
            {allTestimonials.slice(0, 10).map((testimonial, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 w-80 sm:w-96 mx-2">
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-sm sm:text-base truncate">{testimonial.name}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm truncate">
                          {testimonial.role} at {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="relative">
                      <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-primary/20 absolute -top-1 -left-1 sm:-top-2 sm:-left-2" />
                      <p className="text-xs sm:text-sm text-muted-foreground italic pl-3 sm:pl-4 line-clamp-3">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.badge}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Second Row - Left to Right */}
          <div className="flex animate-marquee-left">
            {allTestimonials.slice(10, 20).map((testimonial, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 w-80 sm:w-96 mx-2">
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-sm sm:text-base truncate">{testimonial.name}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm truncate">
                          {testimonial.role} at {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="relative">
                      <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-primary/20 absolute -top-1 -left-1 sm:-top-2 sm:-left-2" />
                      <p className="text-xs sm:text-sm text-muted-foreground italic pl-3 sm:pl-4 line-clamp-3">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.badge}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">10K+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">99.9%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50M+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">4.9/5</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}