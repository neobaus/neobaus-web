import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroCTA() {
  return (
    <div className="w-full mt-4 sm:mt-2 lg:mt-2">
      <Button
        size="lg"
        className="w-full lg:w-9/10 text-base sm:text-lg px-6 sm:px-4 py-4 sm:py-4 h-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Upgrade Your Business Now
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}