"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { fadeUp, heroTextReveal, staggerContainer, smoothTransition } from "@/lib/animations"

const KEYWORDS = [
  "Énergie",
  "Réseaux de distribution",
  "Éclairage public",
  "Industrie",
  "Tertiaire",
  "Maintenance",
  "Énergie",
  "Réseaux de distribution",
  "Éclairage public",
  "Industrie",
  "Tertiaire",
  "Maintenance",
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <motion.img
        src="/images/hero-switchgear.png"
        alt="Ingénieur 3TE inspectant un tableau électrique industriel"
        className="absolute inset-0 -z-10 size-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/30"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-24 md:min-h-[640px]">
        <div className="max-w-2xl">
          <motion.span
            className="mb-4 inline-block rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground"
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Énergie · Électricité · Réseaux
          </motion.span>

          <motion.h1
            className="font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-balance text-primary-foreground md:text-6xl lg:text-7xl"
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Votre partenaire en infrastructures énergétiques et électriques
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85"
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            De la conception à l&apos;exploitation, 3TE accompagne industriels, collectivités et entreprises dans le
            développement de leurs réseaux et installations électriques.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              variants={fadeUp}
              transition={smoothTransition}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Discutons de votre projet
              <ArrowRight className="size-4" />
            </motion.a>
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/15"
              variants={fadeUp}
              transition={smoothTransition}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Découvrir nos savoir-faire
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative overflow-hidden bg-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}
        >
          {KEYWORDS.map((keyword, i) => (
            <span key={`${keyword}-${i}`} className="flex items-center gap-3">
              {keyword}
              <span className="inline-block size-1.5 rounded-full bg-primary-foreground/40" />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
