import { useParams, Link } from "react-router-dom"
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react"
import { motion } from "framer-motion"

import projectsData from "@/data/projects.json"
import { Button } from "@/components/ui/button"

import { Helmet } from 'react-helmet-async'

function ProjectDetails() {
  const { id } = useParams()
  const project = projectsData.find((p) => p.id.toString() === id)

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold">Project not found</h2>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    )
  }

  const handleImageError = (e) => {
    e.target.src = `${import.meta.env.BASE_URL}project-placeholder.png`
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Aditya Shinde</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl px-5 py-32"
      >
      <Button asChild variant="ghost" className="mb-8">
        <Link to="/" className="inline-flex items-center">
          <ArrowLeft className="mr-2 size-4" />
          Back to Projects
        </Link>
      </Button>

      <div className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <img 
          src={project.image} 
          alt={project.title}
          onError={handleImageError}
          className="aspect-video w-full object-cover" 
        />
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-bold md:text-5xl">{project.title}</h1>
        <div className="flex gap-3">
          {project.github && (
            <Button asChild variant="outline" size="icon">
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                <Code2 className="size-5" />
              </a>
            </Button>
          )}
          {project.demo && (
            <Button asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                Live Demo <ExternalLink className="ml-2 size-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-sm text-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg leading-relaxed text-muted-foreground">{project.description}</p>
        {/* Additional project details could be mapped here if available in JSON */}
      </div>
    </motion.section>
    </>
  )
}

export default ProjectDetails
