import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Globe, Code, Award } from "lucide-react"

export function About() {
  const achievements = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "5+ Years Experience",
      description: "Extensive development experience with modern technologies"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Reach",
      description: "Serving clients both locally and internationally"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Master's Degree",
      description: "Advanced education in Computer Science"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Proven Track Record",
      description: "Successful delivery of complex projects"
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs">
            About Us
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Meet the Team
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Learn about the vision and expertise behind neobaus
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
             {/* Founder Card */}
             <Card className="hover:shadow-lg transition-shadow duration-300">
                 <CardHeader className="text-center pb-2 sm:pb-3">
                 <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                     AU
                 </div>
                 <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                     Ardy Ubanos
                 </CardTitle>
                 <CardDescription className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">
                     CEO & Founder of neobaus
                 </CardDescription>
                 </CardHeader>
                 <CardContent className="text-center pt-0">
                 <Button size="lg" className="text-sm sm:text-base">
                     Connect with Ardy
                 </Button>
                 </CardContent>
             </Card>

             {/* Employee Card */}
             <Card className="hover:shadow-lg transition-shadow duration-300">
                 <CardHeader className="text-center pb-2 sm:pb-3">
                 <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                     E1
                 </div>
                 <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                     somename
                 </CardTitle>
                 <CardDescription className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">
                     Employee1
                 </CardDescription>
                 </CardHeader>
                 <CardContent className="text-center pt-0">
                 <Button size="lg" className="text-sm sm:text-base">
                     Connect with somename
                 </Button>
                 </CardContent>
             </Card>

             {/* Placeholder for third card */}
             <Card className="hover:shadow-lg transition-shadow duration-300">
                 <CardHeader className="text-center pb-2 sm:pb-3">
                 <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                     E2
                 </div>
                 <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                     Coming Soon
                 </CardTitle>
                 <CardDescription className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">
                     Team Member
                 </CardDescription>
                 </CardHeader>
                 <CardContent className="text-center pt-0">
                 <Button size="lg" className="text-sm sm:text-base" disabled>
                     Connect Soon
                 </Button>
                 </CardContent>
             </Card>
        </div>

        {/* Company Vision */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                Our Vision
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At neobaus, we believe in democratizing AI-powered analytics for businesses of all sizes. 
                Our mission is to provide intuitive, powerful tools that help companies make data-driven 
                decisions and unlock their full potential through cutting-edge technology and exceptional 
                user experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">100+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
