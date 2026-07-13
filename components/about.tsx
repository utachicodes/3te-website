"use client"

import { useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react"
import { useEffect } from "react"
import { ArrowRight, Zap } from "lucide-react"
import { fadeLeft, fadeRight, staggerContainer, smoothTransition } from "@/lib/animations"

const STATS = [
  { value: "25+", label: "Années d'expérience", numeric: 25, width: "62%" },
  { value: "180", label: "Collaborateurs", numeric: 180, width: "72%" },
  { value: "500+", label: "Projets réalisés", numeric: 500, width: "85%" },
  { value: "98%", label: "Clients satisfaits", numeric: 98, width: "98%" },
]

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (isInView) {
      animate(motionVal, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] })
    }
  }, [isInView, motionVal, value])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" })

  return (
    <section id="a-propos" className="relative bg-background overflow-hidden" ref={ref}>
      <div className="absolute inset-0 circuit-dots opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={smoothTransition}
          >
            <div className="inline-flex items-center gap-2 text-primary">
              <Zap className="size-4" fill="currentColor" />
              <span className="text-sm font-semibold uppercase tracking-widest">Qui sommes-nous ?</span>
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground text-balance md:text-5xl">
              Un partenaire de confiance pour vos infrastructures
            </h2>
            <motion.div
              className="mt-5 h-1 rounded-full bg-gradient-to-r from-primary to-primary/30"
              aria-hidden="true"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              3TE est une entreprise spécialisée dans les infrastructures énergétiques et les réseaux électriques. Nous
              intervenons sur le développement d&apos;infrastructures, l&apos;extension et l&apos;équipement des réseaux
              de distribution, l&apos;installation d&apos;éclairages publics et l&apos;aménagement électrique de sites
              industriels et de bâtiments.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Notre expertise s&apos;exerce de la conception à la réalisation et comprend la maintenance ainsi que
              l&apos;exploitation de vos installations.
            </p>
            <motion.a
              href="#services"
              className="group mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-border"
              whileHover={{ scale: 1.03, x: 2 }}
              whileTap={{ scale: 0.97 }}
            >
              En savoir plus
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ...smoothTransition, delay: 0.2 }}
          >
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <motion.div
              className="relative overflow-hidden rounded-lg border border-border/50"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/images/team.png"
                alt="L'équipe de techniciens et ingénieurs de 3TE"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 rounded-md bg-brand-dark/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  <span className="size-1.5 rounded-full bg-energy-glow animate-[led-blink_2s_ease-in-out_infinite]" />
                  180 experts au service de vos projets
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative bg-brand-dark overflow-hidden" ref={statsRef}>
        <div className="absolute inset-0 energy-grid-dense opacity-15" aria-hidden="true" />

        <motion.dl
          className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-16 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center md:text-left"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={smoothTransition}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-4xl font-bold text-primary md:text-5xl glow-text">
                {stat.numeric === 25 && <AnimatedNumber value={25} suffix="+" />}
                {stat.numeric === 180 && <AnimatedNumber value={180} />}
                {stat.numeric === 500 && <AnimatedNumber value={500} suffix="+" />}
                {stat.numeric === 98 && <AnimatedNumber value={98} suffix="%" />}
              </dd>
              <p className="mt-1 text-sm text-primary-foreground/60">{stat.label}</p>

              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-primary-foreground/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
                  initial={{ width: 0 }}
                  animate={statsInView ? { width: stat.width } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
