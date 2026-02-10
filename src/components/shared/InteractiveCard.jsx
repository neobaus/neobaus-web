import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function InteractiveCard({
  title,
  description,
  icon,
  badge,
  href,
  ariaLabel,
  className = ""
}) {
  const Wrapper = href ? Link : "div"
  const wrapperProps = href
    ? { href, "aria-label": ariaLabel || `View details for ${title}` }
    : {}

  return (
    <Wrapper className="block group" {...wrapperProps}>
      <Card className={`relative overflow-hidden transform transition-all duration-300 will-change-transform group-hover:-translate-y-1 group-hover:scale-105 active:scale-95 hover:shadow-lg ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 z-0" />
        <div className="relative z-10">
          <CardHeader className="pb-3 sm:pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                {icon}
              </div>
              {badge ? (
                <Badge variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ) : null}
            </div>
            <CardTitle className="text-lg sm:text-xl">
              {title}
              <span className="block h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300 mt-2" />
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-sm sm:text-base leading-relaxed text-foreground/90 transition-colors duration-200 group-hover:text-foreground">
              {description}
            </CardDescription>
          </CardContent>
        </div>
      </Card>
    </Wrapper>
  )
}
