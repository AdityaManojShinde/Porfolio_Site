import { motion } from "framer-motion"

import SectionHeading from "@/components/SectionHeading"
import educationData from "@/data/education.json"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

function Education() {
  const handleImageError = (e) => {
    e.target.src = `${import.meta.env.BASE_URL}project-placeholder.png`
  }

  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Education" title="My academic journey." />

      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {educationData.map((edu) => (
          <motion.article 
            key={edu.id} 
            variants={item}
            className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img 
                  src={edu.logo} 
                  alt={edu.institution} 
                  onError={handleImageError}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold leading-tight">{edu.institution}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{edu.location}</p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h4 className="font-medium text-primary">{edu.degree}</h4>
                {edu.field && <p className="text-sm text-muted-foreground">{edu.field}</p>}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                  {edu.duration.start ? `${edu.duration.start} - ${edu.duration.end}` : edu.duration.end}
                </span>
                <span className="text-emerald-400">{edu.status}</span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {edu.description}
              </p>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="pt-4 border-t border-white/10">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map(course => (
                      <span key={course} className="rounded-md border border-white/5 bg-white/[0.02] px-2 py-1 text-xs text-muted-foreground">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Education
