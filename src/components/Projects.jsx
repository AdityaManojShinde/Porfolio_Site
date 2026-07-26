import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import SectionHeading from "@/components/SectionHeading"
import projectsData from "@/data/projects.json"
import placeholderImage from "@/assets/project-placeholder.png"

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

function Projects() {
  const handleImageError = (e) => {
    e.target.src = placeholderImage
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Projects" title="Selected builds and experiments." />

      <motion.div 
        className="grid gap-5 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsData.map((project) => (
          <motion.article 
            key={project.id} 
            variants={item}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:bg-white/[0.05]"
          >
            <Link to={`/project/${project.id}`} className="absolute inset-0 z-10">
              <span className="sr-only">View {project.title} details</span>
            </Link>
            
            <div className="relative aspect-video w-full overflow-hidden border-b border-white/10">
              <img 
                src={project.image} 
                alt={project.title} 
                onError={handleImageError}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                  {project.tags[0]}
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="text-2xl font-medium tracking-tight">{project.title}</h3>
              <p className="mt-4 line-clamp-2 leading-7 text-muted-foreground">{project.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
