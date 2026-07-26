import SectionHeading from "@/components/SectionHeading"

const stats = [
  ["3rd year", "B.Tech IT"],
  ["Data", "Analytics focus"],
  ["AI/ML", "Core interest"],
]

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="About" title="Curious engineer with a product mindset." />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-lg leading-8 text-muted-foreground">
            I study Information Technology at MIT ADT University, specializing in Data Analytics. My work sits at the intersection of software engineering, ML systems, and user-centered design.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-2xl font-medium tracking-tight text-foreground">{value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
