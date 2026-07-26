import SectionHeading from "@/components/SectionHeading"

const timeline = [
  ["2026", "Deepening ML engineering, analytics, and production frontend workflows."],
  ["2025", "Built academic and personal projects around React, data analysis, and automation."],
  ["Now", "Seeking internships and collaborations in AI, data, and software engineering."],
]

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Experience" title="Learning in public, building with intent." />

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        {timeline.map(([year, body], index) => (
          <div key={year} className="grid gap-4 border-white/10 py-6 first:pt-0 last:pb-0 md:grid-cols-[140px_1fr] [&:not(:last-child)]:border-b">
            <p className="font-mono text-sm text-primary">{year}</p>
            <p className="leading-7 text-muted-foreground">{body}</p>
            {index === timeline.length - 1 ? null : <span className="hidden" />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
