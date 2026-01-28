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
];

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-muted/10 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="mb-3 sm:mb-4 text-lg inline-block rounded-full border px-3 py-1 border-primary text-primary bg-background/80">Projects</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Work
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Real results powered by data, AI, and modern technology.
          </p>
        </div>
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
  )
}
