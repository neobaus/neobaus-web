import { Navbar } from '@/components/navbar'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'

const projects = [
  {
    title: 'AI Chatbot for Customer Support',
    description: 'A GPT-powered chatbot integrated with CRM data to provide personalized customer support 24/7.',
    tech: 'Next.js, OpenAI, Node.js',
  },
  {
    title: 'Analytics Dashboard for E-Commerce',
    description: 'A comprehensive dashboard tracking sales, inventory, and user engagement in real-time.',
    tech: 'React, D3.js, Firebase',
  },
  {
    title: 'Automated Invoice Processing',
    description: 'Utilizes OCR and custom ML models to extract data from invoices and automate bookkeeping.',
    tech: 'Python, Tesseract, FastAPI',
  },
]

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-muted/30 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
            {projects.map((project, i) => (
              <Card key={i} className="group relative">
                <CardHeader>
                  <CardTitle className="mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-2">{project.description}</CardDescription>
                  <span className="text-xs text-foreground/60 block">Tech stack: {project.tech}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
