"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

const KEYWORDS = [
  "Énergie",
  "Distribution",
  "Éclairage",
  "Industrie",
  "Tertiaire",
  "Maintenance",
  "Énergie",
  "Distribution",
  "Éclairage",
  "Industrie",
  "Tertiaire",
  "Maintenance",
  "Énergie",
  "Distribution",
  "Éclairage",
  "Industrie",
  "Tertiaire",
  "Maintenance",
]

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-brand-dark">
      <img
        src="/images/hero-switchgear.png"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-30 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/70 to-brand-dark" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-8 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-px w-12 bg-white/30" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Infrastructures électriques
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight text-white"
          >
            On construit
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-display text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight text-white"
          >
            <span className="text-primary">l&apos;énergie</span> de demain
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-lg text-base leading-relaxed text-white/50"
        >
          De la conception à l&apos;exploitation, nous accompagnons industriels
          et collectivités dans le développement de leurs infrastructures
          électriques.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Parlons projet
            <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#savoir-faire"
            className="text-sm text-white/40 transition-colors hover:text-white/70"
          >
            Découvrir nos domaines
          </a>
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
            <span key={`${keyword}-${i}`} className="mx-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.15em] text-white/25">
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
