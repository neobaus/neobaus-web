"use client"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"

export function Navbar() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = Array.from(navLinks).map(link => {
      const hash = link.getAttribute('href');
      return document.getElementById(hash?.replace('#', ''));
    });
    function onScroll() {
      let current = '';
      sections.forEach((section, idx) => {
        if (section && window.scrollY + 80 >= section.offsetTop) {
          current = navLinks[idx].getAttribute('href');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
          link.classList.add('active');
        }
      });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToContact() {
    if (typeof document === "undefined") return
    const el = document.getElementById("contact")
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-1 sm:space-x-2 hover:opacity-80 transition-opacity">
              
              <span className="text-lg sm:text-xl font-bold text-foreground">neobaus</span>
            </a>
          </div>

          {/* Navigation Links */}
          {/* <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#services" className="px-3 sm:px-4 py-2 hover:text-primary transition-colors text-sm nav-link">
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className="px-3 sm:px-4 py-2 hover:text-primary transition-colors text-sm nav-link">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects" className="px-3 sm:px-4 py-2 hover:text-primary transition-colors text-sm nav-link">
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="px-3 sm:px-4 py-2 hover:text-primary transition-colors text-sm nav-link">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button onClick={scrollToContact} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-200 text-sm px-3 sm:px-4 py-2">
              Book a meeting
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
