import { Brain, Code2, Database, GitBranch } from "lucide-react"

import SectionHeading from "@/components/SectionHeading"

const skills = [
  [Code2, "Frontend", "React, Vite, Tailwind, shadcn/ui"],
  [Database, "Data", "Python, SQL, dashboards, analytics"],
  [Brain, "AI/ML", "Models, notebooks, evaluation, automation"],
  [GitBranch, "DevOps", "Git, CI basics, deployment workflows"],
]

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="A practical toolkit for shipping end-to-end."
        description="Comfortable moving from UI to data workflows, with a bias for simple systems that are easy to maintain."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skills.map(([Icon, title, body]) => (
          <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]">
            <Icon className="mb-5 size-6 text-primary" />
            <h3 className="text-xl font-medium tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
