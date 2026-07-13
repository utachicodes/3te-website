"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ArrowUpRight, Star } from "lucide-react"

const STAT_BADGES = [
  { value: "500+", label: "Projets réalisés" },
  { value: "98%", label: "Satisfaction client" },
]

const AWARD_BADGES = [
  { value: "25 ANS", label: "D'expertise terrain" },
  { value: "180+", label: "Collaborateurs" },
  { value: "24/7", label: "Astreinte & maintenance" },
]

const PARTNERS = ["ENERGIA", "VOLTAX", "GRID+", "SOLARIS", "NOVATEC", "URBALUX"]

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative px-3 pt-3 md:px-4 md:pt-4">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand-dark md:rounded-[2.5rem]">
        <img
          src="/images/hero-switchgear.png"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-brand-dark/40 to-brand-dark/90" />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-6 select-none text-center font-display text-[16vw] font-bold uppercase leading-none tracking-tight text-white/[0.06] md:top-10 md:text-[9vw]"
        >
          ÉNERGIE
        </span>

        <div className="relative flex min-h-[640px] flex-col justify-between px-5 pb-6 pt-24 md:min-h-[720px] md:px-10 md:pb-10 md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-full bg-white/10 py-1.5 pl-1.5 pr-4 backdrop-blur-md">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="size-6 rounded-full border border-white/40 bg-primary/80"
                  />
                ))}
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3 fill-primary text-primary" />
                ))}
              </span>
              <span className="text-xs font-medium text-white/70">180+ experts terrain</span>
            </div>

            <div className="ml-auto hidden gap-3 sm:flex">
              {STAT_BADGES.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-white backdrop-blur-md"
                >
                  <div className="font-display text-xl font-bold leading-none md:text-2xl">{s.value}</div>
                  <div className="mt-1 max-w-[7rem] text-[11px] leading-tight text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white"
              >
                Infrastructures électriques
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white"
              >
                de nouvelle <span className="italic text-primary">génération</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                De la conception à l&apos;exploitation, nous accompagnons industriels
                et collectivités dans le développement de leurs réseaux et
                installations électriques.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Parlons projet
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <div className="flex gap-4">
                  {AWARD_BADGES.map((a) => (
                    <div key={a.label} className="text-white">
                      <div className="font-display text-base font-bold md:text-lg">{a.value}</div>
                      <div className="max-w-[6rem] text-[10px] leading-tight text-white/50">{a.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mx-auto max-w-6xl py-10 text-center md:py-14"
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Ils nous font confiance
        </span>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-heading text-lg font-bold tracking-tight text-muted-foreground/30 transition-colors hover:text-muted-foreground/60"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
