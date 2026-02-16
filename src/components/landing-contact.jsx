 "use client"
 import { useState } from "react"
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
 import { Badge } from "@/components/ui/badge"
 import { Button } from "@/components/ui/button"
 import { Calendar, Mail, Clock } from "lucide-react"
 import { toast } from "sonner"
 
 export function LandingContact() {
   const [form, setForm] = useState({
     name: "",
     email: "",
     message: "",
   })
   const [status, setStatus] = useState("idle")
 
   function updateField(key, value) {
     setForm((prev) => ({ ...prev, [key]: value }))
   }
 
   function handleFieldFocus(e) {
     if (typeof window === "undefined") return
     const el = e?.currentTarget
     const isMobile = window.matchMedia("(max-width: 640px)").matches
     if (!isMobile || !el) return
 
     setTimeout(() => {
       try {
         el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
       } catch {
         const rect = el.getBoundingClientRect()
         const offset = rect.top + window.scrollY - Math.max(0, window.innerHeight / 2 - rect.height / 2)
         window.scrollTo({ top: offset, behavior: "smooth" })
       }
     }, 100)
   }
 
   async function handleSubmit(e) {
     e.preventDefault()
     if (status === "submitting") return
     setStatus("submitting")
 
     try {
       const res = await fetch("/api/contact", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           name: form.name.trim(),
           email: form.email.trim(),
           message: form.message.trim(),
         }),
       })
 
       if (!res.ok) {
         const data = await res.json().catch(() => ({}))
         throw new Error(data.error || "Failed to send message")
       }
 
       toast.success("Message sent. We’ll get back to you shortly.", { duration: 5000 })
       setForm({ name: "", email: "", message: "" })
       setStatus("idle")
     } catch (err) {
       toast.error(err?.message || "Something went wrong. Please try again.", {
         duration: 5000,
       })
       setStatus("error")
     }
   }
 
   return (
     <section
       id="contact"
       className="py-16 sm:py-20 lg:py-24 bg-muted/30"
     >
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-start">
           <div className="space-y-6">
             <Badge variant="outline" className="text-xs sm:text-sm">
               Contact Us
             </Badge>
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
               Let’s plan your next growth milestone
             </h2>
             <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
               Tell us about your business and what you want to achieve. We’ll review
               your goals and send you a tailored meeting proposal.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
               <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/60 p-3 sm:p-4 shadow-xs">
                 <div className="rounded-full bg-primary/10 p-2">
                   <Calendar className="h-4 w-4 text-primary" />
                 </div>
                 <div>
                   <p className="font-medium">Flexible slots</p>
                   <p className="text-muted-foreground">
                     We’ll suggest times that work across time zones.
                   </p>
                 </div>
               </div>
               <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/60 p-3 sm:p-4 shadow-xs">
                 <div className="rounded-full bg-primary/10 p-2">
                   <Mail className="h-4 w-4 text-primary" />
                 </div>
                 <div>
                   <p className="font-medium">Direct to your inbox</p>
                   <p className="text-muted-foreground">
                     All responses go straight to the email you provide.
                   </p>
                 </div>
               </div>
               <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/60 p-3 sm:p-4 shadow-xs">
                 <div className="rounded-full bg-primary/10 p-2">
                   <Clock className="h-4 w-4 text-primary" />
                 </div>
                 <div>
                   <p className="font-medium">Typical reply in &lt; 24 hours</p>
                   <p className="text-muted-foreground">
                     We aim to respond by the next business day.
                   </p>
                 </div>
               </div>
             </div>
           </div>
 
           <Card className="shadow-md">
             <CardHeader className="pb-2">
               <CardTitle className="text-lg sm:text-xl">
                 Share a few details
               </CardTitle>
             </CardHeader>
             <CardContent className="pt-2">
               <form className="space-y-4" onSubmit={handleSubmit}>
                 <div className="space-y-1.5">
                   <label htmlFor="contact-name" className="block text-sm font-medium">
                     Name
                   </label>
                   <input
                     id="contact-name"
                     type="text"
                     required
                     value={form.name}
                     onChange={(e) => updateField("name", e.target.value)}
                     onFocus={handleFieldFocus}
                     className="w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                     placeholder="Jane Doe"
                   />
                 </div>
                 <div className="space-y-1.5">
                   <label htmlFor="contact-email" className="block text-sm font-medium">
                     Email
                   </label>
                   <input
                     id="contact-email"
                     type="email"
                     required
                     value={form.email}
                     onChange={(e) => updateField("email", e.target.value)}
                     onFocus={handleFieldFocus}
                     className="w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                     placeholder="jane@company.com"
                   />
                 </div>
                 <div className="space-y-1.5">
                   <label htmlFor="contact-message" className="block text-sm font-medium">
                     What would you like to work on?
                   </label>
                   <textarea
                     id="contact-message"
                     required
                     rows={4}
                     value={form.message}
                     onChange={(e) => updateField("message", e.target.value)}
                     onFocus={handleFieldFocus}
                     className="w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                     placeholder="Share your goals, current challenges, and ideal timeline."
                   />
                 </div>
                 <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                   <p className="text-xs sm:text-sm text-muted-foreground">
                     No spam. Just a thoughtful reply from the neobaus team.
                   </p>
                   <Button
                     type="submit"
                     size="lg"
                     className="w-full sm:w-auto"
                     disabled={status === "submitting"}
                   >
                     {status === "submitting" ? "Sending..." : "Send message"}
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
