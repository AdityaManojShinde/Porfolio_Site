import { ArrowRight, Code2, Download, Mail, Network } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import profileData from "@/data/profile.json"
import socialData from "@/data/social.json"

function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(113,112,255,0.22),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(94,106,210,0.16),transparent_28%)]" />

      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div 
          className="flex flex-col items-center text-center md:items-start md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-400" />
            Data Analytics student · AI/ML builder
          </div>

          <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] text-foreground md:text-7xl">
            {profileData.title.split('|')[0].trim()} with <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">clean engineering</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I am {profileData.name.split(' ')[0]}, {profileData.bio}
          </p>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:flex-row md:w-auto md:justify-start">
            <Button asChild size="lg">
              <a href="#projects">
                View projects <ArrowRight />
              </a>
            </Button>
            {socialData.resume && (
              <Button asChild size="lg" variant="outline">
                <a href={socialData.resume} target="_blank" rel="noopener noreferrer">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">Let&apos;s connect</a>
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-3 text-muted-foreground md:justify-start">
            {[
              ["icons/github.png", "GitHub", socialData.github],
              ["icons/linkedin.png", "LinkedIn", socialData.linkedin],
              [Mail, "Email", socialData.email],
            ].filter(([, , href]) => href).map(([IconOrPath, label, href]) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`grid size-12 place-items-center rounded-xl border border-white/10 transition hover:border-primary/50 hover:text-foreground ${
                  label === "GitHub" ? "bg-white/[0.03] dark:bg-white" : "bg-white/[0.03]"
                }`}
              >
                {typeof IconOrPath === "string" ? (
                  <img src={`${import.meta.env.BASE_URL}${IconOrPath}`} alt={label} className="size-7 object-contain" />
                ) : (
                  <IconOrPath className="size-6" />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/40">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0f1011] p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </div>
              <div className="space-y-4 font-mono text-sm text-muted-foreground">
                <p><span className="text-primary">const</span> focus = [&quot;AI&quot;, &quot;ML&quot;, &quot;Data&quot;]</p>
                <p><span className="text-primary">build</span>(portfolio).with(&quot;React&quot;, &quot;Tailwind&quot;)</p>
                <p className="text-emerald-400">✓ shipping clean interfaces</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
