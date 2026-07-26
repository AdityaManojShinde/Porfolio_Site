import { ExternalLink } from "lucide-react"

import SectionHeading from "@/components/SectionHeading"
import certificatesData from "@/data/certificates.json"
import placeholderImage from "@/assets/project-placeholder.png"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Certificates() {
  const handleImageError = (e) => {
    e.target.src = placeholderImage
  }

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Certificates" title="Professional certifications." />

      <div className="relative px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {certificatesData.map((cert, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.05]">
                  <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-black/20">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      onError={handleImageError}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                    
                    <h3 className="mb-4 text-xl font-medium tracking-tight">{cert.title}</h3>
                    
                    <div className="mt-auto pt-4">
                      {cert.credential && (
                        <Button asChild variant="outline" className="w-full">
                          <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                            View Credential <ExternalLink className="ml-2 size-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-8" />
          <CarouselNext className="-right-4 md:-right-8" />
        </Carousel>
      </div>
    </section>
  )
}

export default Certificates
