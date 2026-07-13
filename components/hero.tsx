"use client"

import { motion } from "motion/react"
import { ArrowRight, Zap } from "lucide-react"
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
    <section className="relative isolate overflow-hidden min-h-[600px] md:min-h-[700px]">
      <motion.img
        src="/images/hero-switchgear.png"
        alt="Ingénieur 3TE inspectant un tableau électrique industriel"
        className="absolute inset-0 -z-20 size-full object-cover"
        initial={{ scale: 1.15, filter: "brightness(0.6)" }}
        animate={{ scale: 1, filter: "brightness(0.65)" }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(135deg, oklch(0.12 0.04 155 / 0.95) 0%, oklch(0.15 0.04 155 / 0.85) 40%, oklch(0.18 0.04 155 / 0.6) 100%),
            linear-gradient(to right, oklch(0.12 0.04 155 / 0.98) 0%, transparent 60%)
          `,
        }}
      />

      <div className="absolute inset-0 -z-[5] energy-grid-dense opacity-40" aria-hidden="true" />

      <motion.div
        className="absolute top-20 right-[10%] -z-[4] size-[300px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "oklch(0.48 0.15 152 / 0.6)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-4 py-24 md:min-h-[700px]">
        <div className="max-w-3xl">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm"
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Zap className="size-3.5" fill="currentColor" />
            Énergie · Électricité · Réseaux
          </motion.div>

          <motion.h1
            className="font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-balance text-white md:text-6xl lg:text-7xl"
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Votre partenaire en{" "}
            <span className="text-primary glow-text">infrastructures</span>{" "}
            énergétiques et électriques
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            De la conception à l&apos;exploitation, 3TE accompagne industriels, collectivités et entreprises dans le
            développement de leurs réseaux et installations électriques.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-border-strong"
              variants={fadeUp}
              transition={smoothTransition}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Discutons de votre projet
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
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
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, oklch(0.48 0.15 152 / 0.6), oklch(0.72 0.19 152 / 0.8), oklch(0.48 0.15 152 / 0.6), transparent)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="relative overflow-hidden bg-brand-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="absolute inset-0 energy-grid-dense opacity-20" aria-hidden="true" />
        <motion.div
          className="relative flex gap-8 whitespace-nowrap py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
        >
          {KEYWORDS.map((keyword, i) => (
            <span key={`${keyword}-${i}`} className="flex items-center gap-3">
              <span className="inline-block size-1 rounded-full bg-primary animate-[led-blink_3s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.5}s` }} />
              {keyword}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
