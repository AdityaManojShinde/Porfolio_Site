import { Mail, Send } from "lucide-react"

import { Button } from "@/components/ui/button"

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(113,112,255,0.2),transparent_30%)]" />
        <Mail className="mb-6 size-8 text-primary" />
        <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
          Have an idea worth building?
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          I am open to internships, collaborative projects, and practical AI/data problems.
        </p>
        <Button asChild className="mt-8" size="lg">
          <a href="mailto:aditya@example.com">
            Start a conversation <Send />
          </a>
        </Button>
      </div>
    </section>
  )
}

export default Contact
