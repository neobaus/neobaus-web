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
    // {
    //   icon: <GraduationCap className="h-6 w-6 text-primary" />,
    //   title: "Master's Degree",
    //   description: "Advanced education in Computer Science"
    // },
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
          <Badge variant="outline" className="mb-3 sm:mb-4 text-lg">
            About Us
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Goal
          </h2>
          {/* <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Learn about the mission and vision guiding neobaus
          </p> */}
        </div>

        {/* Company Goal Placeholder */}
        <div className="max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Empower businesses with accessible, Data and AI-driven solutions
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-muted-foreground">
                Our company goal is to democratize advanced analytics, enabling organizations of any size to make data-driven decisions with clarity, confidence, and speed.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-background/60 border-dashed">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        {achievement.icon}
                        <CardTitle className="text-base sm:text-lg">
                          {achievement.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-xs sm:text-sm leading-relaxed">
                        {achievement.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {/* <div className="text-center mt-6">
                <Button variant="outline" size="lg" className="text-sm sm:text-base">
                  Learn more
                </Button>
              </div> */}
            </CardContent>
          </Card>
        </div>

        {/* Company Vision */}
        {/* <div className="mt-12 sm:mt-16 lg:mt-20">
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
        </div> */}
      </div>
    </section>
  )
}
