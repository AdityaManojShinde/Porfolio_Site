import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Certificates from "@/components/Certificates"
import WhatsAppButton from "@/components/WhatsAppButton"

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certificates />
      <Projects />
      <Experience />
      <Contact />
      <WhatsAppButton />
    </>
  )
}

export default Home
