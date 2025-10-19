import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Zap, Shield, Target, TrendingUp } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze your website data to provide actionable insights and predictions.",
      badge: "Core Feature"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Real-time Dashboard",
      description: "Monitor your website performance with live data visualization and customizable metrics tracking.",
      badge: "Popular"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Automated Reports",
      description: "Generate comprehensive reports automatically and receive them via email or dashboard notifications.",
      badge: "New"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Data Security",
      description: "Enterprise-grade security with end-to-end encryption to protect your valuable business data.",
      badge: "Security"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Conversion Optimization",
      description: "AI-driven recommendations to improve your conversion rates and maximize your revenue potential.",
      badge: "ROI Focused"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Growth Insights",
      description: "Predict future trends and identify growth opportunities with our advanced forecasting models.",
      badge: "Strategic"
    }
  ]

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful AI-Driven Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your website data into actionable insights with our cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  {feature.icon}
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
