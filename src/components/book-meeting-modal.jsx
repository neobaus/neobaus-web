 "use client"
 import { useEffect, useRef, useState } from "react"
 import { Button } from "@/components/ui/button"
 import { toast } from "sonner"
 
 export function BookMeetingModal({ open, onClose }) {
   const dialogRef = useRef(null)
   const [submitting, setSubmitting] = useState(false)
   const [form, setForm] = useState({ name: "", email: "", message: "" })
 
   useEffect(() => {
     function onKeyDown(e) {
       if (e.key === "Escape") onClose?.()
     }
     if (open) {
       document.addEventListener("keydown", onKeyDown)
       // Prevent background scroll when open
       document.body.style.overflow = "hidden"
     }
     return () => {
       document.removeEventListener("keydown", onKeyDown)
       document.body.style.overflow = ""
     }
   }, [open, onClose])
 
   function handleOverlayClick(e) {
     if (e.target === e.currentTarget) onClose?.()
   }
 
   function updateField(key, value) {
     setForm((f) => ({ ...f, [key]: value }))
   }
 
   async function handleSubmit(e) {
     e.preventDefault()
     if (submitting) return
     setSubmitting(true)
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
       toast.success("Request received — we’ll email you shortly.", { duration: 5000 })
       setForm({ name: "", email: "", message: "" })
       onClose?.()
     } catch (err) {
       toast.error(err?.message || "Something went wrong. Please try again.", { duration: 5000 })
     } finally {
       setSubmitting(false)
     }
   }
 
   if (!open) return null
 
  return (
    <div
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      aria-hidden="true"
    >
      <div className="w-full max-w-md">
        <div
           ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="book-meeting-title"
          className="w-full rounded-lg border border-border bg-background shadow-lg"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
             <h2 id="book-meeting-title" className="text-base sm:text-lg font-semibold">
               Book a Meeting
             </h2>
             <button
               type="button"
               onClick={onClose}
               aria-label="Close"
               className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
             >
               ✕
             </button>
           </div>
 
          <form onSubmit={handleSubmit} className="px-4 py-4 sm:py-5 space-y-3">
             <div className="space-y-1">
               <label htmlFor="bm-name" className="block text-sm font-medium">
                 Name
               </label>
               <input
                 id="bm-name"
                 type="text"
                 required
                 value={form.name}
                 onChange={(e) => updateField("name", e.target.value)}
                 className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                 placeholder="Jane Doe"
               />
             </div>
             <div className="space-y-1">
               <label htmlFor="bm-email" className="block text-sm font-medium">
                 Email
               </label>
               <input
                 id="bm-email"
                 type="email"
                 required
                 value={form.email}
                 onChange={(e) => updateField("email", e.target.value)}
                 className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                 placeholder="jane@company.com"
               />
             </div>
             <div className="space-y-1">
               <label htmlFor="bm-message" className="block text-sm font-medium">
                 Message
               </label>
               <textarea
                 id="bm-message"
                 required
                 rows={4}
                 value={form.message}
                 onChange={(e) => updateField("message", e.target.value)}
                 className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                 placeholder="Share your goals and preferred time windows."
               />
             </div>
 
             <div className="flex items-center justify-end gap-3 pt-1">
               <Button type="button" variant="outline" onClick={onClose}>
                 Cancel
               </Button>
               <Button type="submit" disabled={submitting}>
                 {submitting ? "Sending..." : "Send Request"}
               </Button>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
 }
