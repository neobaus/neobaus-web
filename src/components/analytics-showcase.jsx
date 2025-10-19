import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Eye, MousePointer, Clock, DollarSign } from "lucide-react"

export function AnalyticsShowcase() {
  const metrics = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Active Users",
      value: "12,543",
      change: "+23%",
      trend: "up"
    },
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "Page Views",
      value: "89,234",
      change: "+15%",
      trend: "up"
    },
    {
      icon: <MousePointer className="h-6 w-6 text-primary" />,
      title: "Click Rate",
      value: "3.2%",
      change: "+8%",
      trend: "up"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Avg. Session",
      value: "4m 32s",
      change: "+12%",
      trend: "up"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "Revenue",
      value: "$24,567",
      change: "+31%",
      trend: "up"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Growth Rate",
      value: "18.5%",
      change: "+5%",
      trend: "up"
    }
  ]

  return (
    <section id="analytics" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Analytics
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real-Time Performance Metrics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Track your website's performance with live data and AI-powered insights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  {metric.icon}
                  <Badge 
                    variant={metric.trend === "up" ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {metric.change}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold">{metric.value}</CardTitle>
                <CardDescription className="text-sm font-medium">
                  {metric.title}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">AI Predictions</CardTitle>
              <CardDescription>
                Our AI analyzes patterns to predict future performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Next Week Traffic</span>
                  <span className="font-semibold text-primary">+15% expected</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Conversion Rate</span>
                  <span className="font-semibold text-primary">+8% predicted</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Revenue Forecast</span>
                  <span className="font-semibold text-primary">+22% projected</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Smart Recommendations</CardTitle>
              <CardDescription>
                Get actionable insights to improve your website performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">Optimize landing page load time</p>
                  <p className="text-xs text-muted-foreground">Could increase conversions by 12%</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">Improve mobile experience</p>
                  <p className="text-xs text-muted-foreground">Potential 18% traffic increase</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">A/B test call-to-action buttons</p>
                  <p className="text-xs text-muted-foreground">Expected 6% conversion boost</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            View Full Analytics Dashboard
          </Button>
        </div>
      </div>
    </section>
  )
}
