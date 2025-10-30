import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow py-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground text-center max-w-md mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex gap-4">
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}