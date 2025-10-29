import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "hello@neobaus.com",
      href: "mailto:hello@neobaus.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Manila, Philippines",
      href: "https://maps.google.com/?q=Manila,Philippines"
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-lg">
            Contact Us
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-3 transform transition-transform duration-300 group-hover:scale-110">
                      {info.icon}
                    </div>
                    <CardTitle className="text-lg mb-2">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">
                    {info.value}
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="text-center pb-0">
              <CardTitle className="text-xl sm:text-2xl mb-2">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    rows={4}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="text-right">
                  <Button type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}