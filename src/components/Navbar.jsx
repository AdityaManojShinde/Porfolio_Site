import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import profileData from "@/data/profile.json"

const links = ["about", "skills", "education", "certificates", "projects", "experience", "contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.getElementById(link)).filter(Boolean)
      const scrollPosition = window.scrollY + 150

      let current = ""
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.offsetTop <= scrollPosition) {
          current = section.id
          break
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto md:mt-4 flex max-w-6xl items-center justify-between md:rounded-2xl border border-white/10 bg-background/70 px-6 py-3 shadow-xl backdrop-blur-2xl">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 font-semibold tracking-tight"
        >
          <img
            src={`${import.meta.env.BASE_URL}portfolio_logo.svg`}
            alt="Portfolio Logo"
            className="h-10 w-10 object-contain rounded-full"
          />

          <span className="text-lg">{profileData.name}</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`relative text-sm capitalize transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full ${activeSection === link ? "text-foreground after:w-full" : "text-muted-foreground"}`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="rounded-full px-6">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-background/95 p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setOpen(false)}
                className={`text-lg capitalize transition ${activeSection === link ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}
              >
                {link}
              </a>
            ))}

            <Button
              className="mt-4 w-full rounded-full"
              onClick={() => setOpen(false)}
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}