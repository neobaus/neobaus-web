import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"

export function Navbar() {
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
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#features" className="px-3 sm:px-4 py-2 hover:text-primary transition-colors text-sm">
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#analytics" className="px-3 sm:px-4 py-2 hover:text-primary transition-colors text-sm">
                  Analytics
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className="px-3 sm:px-4 py-2 hover:text-primary transition-colors text-sm">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#footer" className="px-3 sm:px-4 py-2 hover:text-primary transition-colors text-sm">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex hover:text-primary text-sm px-3 py-2">
              Login
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-200 text-sm px-3 sm:px-4 py-2">
              Join up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
