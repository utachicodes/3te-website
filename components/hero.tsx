"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const SPEC_ITEMS = [
  { label: "Fondée en", value: "2001" },
  { label: "Effectif", value: "180+" },
  { label: "Projets livrés", value: "500+" },
  { label: "Satisfaction", value: "98%" },
  { label: "Zone d'action", value: "Sénégal" },
]

const KEYWORDS = [
  "Énergie", "Distribution", "Éclairage", "Industrie", "Tertiaire", "Maintenance",
  "Énergie", "Distribution", "Éclairage", "Industrie", "Tertiaire", "Maintenance",
]

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-dark">
      <div className="blueprint-grid absolute inset-0 opacity-60" />
      <img
        src="/images/hero-switchgear.png"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-25 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark/70 to-brand-dark" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <span className="flex size-2 rounded-full bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
            Infrastructures électriques — Sénégal
          </span>
        </motion.div>

        <div className="mt-6 overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-white"
          >
            On construit
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-white"
          >
            l&apos;énergie <span className="text-primary">de demain</span>
          </motion.h1>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-lg text-sm leading-relaxed text-white/50 md:col-span-6 md:text-base"
          >
            De la conception à l&apos;exploitation, nous accompagnons
            industriels et collectivités dans le développement de leurs
            infrastructures électriques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center gap-6 md:col-span-6 md:justify-end"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Parlons projet
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#savoir-faire" className="text-sm text-white/40 transition-colors hover:text-white/70">
              Nos domaines
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-14 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 sm:grid-cols-5 sm:divide-x sm:divide-y-0"
        >
          {SPEC_ITEMS.map((spec) => (
            <div key={spec.label} className="px-1 py-4 sm:px-6 sm:first:pl-0">
              <div className="font-mono text-lg font-bold text-white sm:text-xl">{spec.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/40">{spec.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="relative w-full overflow-hidden border-t border-white/10"
      >
        <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap py-4">
          {KEYWORDS.map((keyword, i) => (
            <span key={`${keyword}-${i}`} className="mx-6 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.15em] text-white/25">
              {keyword}
              <span className="inline-block h-px w-6 bg-white/15" />
            </span>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  )
}
