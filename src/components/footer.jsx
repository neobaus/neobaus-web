import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Services: [
      { name: "AI Integrations", href: "/services/ai-integrations" },
      { name: "Analytics", href: "/#analytics" },
      { name: "Custom Development", href: "/services/custom-developments" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
    ],
  
    // Legal: [
    //   { name: "Privacy Policy", href: "#" },
    //   { name: "Terms of Service", href: "#" },
    //   { name: "Cookie Policy", href: "#" },
    //   { name: "GDPR", href: "#" },
    //   { name: "Security", href: "#" }
    // ]
  }

  const socialLinks = [
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "#" }
  ]

  return (
    <footer id="footer" className="bg-muted/30 border-t relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 glow-effect"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 glow-effect" style={{animationDelay: '1.5s'}}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        {/* <div className="py-12 border-b">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with neobaus
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest insights, tips, and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                
                <span className="text-xl font-bold text-foreground">neobaus</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                AI-powered website analytics and sales platform that helps businesses make data-driven decisions and maximize their growth potential.
              </p>
              
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-foreground mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">
                © 2025 neobaus. All rights reserved.
              </p>
              {/* <Badge variant="outline" className="text-xs">
                SOC 2 Compliant
              </Badge> */}
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>
  )
}
