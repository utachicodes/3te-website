"use client"

import { useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react"
import { useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { fadeLeft, fadeRight, staggerContainer, smoothTransition } from "@/lib/animations"

const STATS = [
  { value: "25+", label: "Années d'expérience", numeric: 25 },
  { value: "180", label: "Collaborateurs", numeric: 180 },
  { value: "500+", label: "Projets réalisés", numeric: 500 },
  { value: "98%", label: "Clients satisfaits", numeric: 98 },
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
    <section id="a-propos" className="bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={smoothTransition}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Qui sommes-nous ?</span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground text-balance md:text-5xl">
              Un partenaire de confiance pour vos infrastructures
            </h2>
            <motion.div
              className="mt-5 h-1 w-16 rounded-full bg-primary"
              aria-hidden="true"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : { width: 0 }}
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
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              whileHover={{ scale: 1.03, x: 2 }}
              whileTap={{ scale: 0.97 }}
            >
              En savoir plus
              <ArrowRight className="size-4" />
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ...smoothTransition, delay: 0.2 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/images/team.png"
                alt="L'équipe de techniciens et ingénieurs de 3TE"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-brand-dark" ref={statsRef}>
        <motion.dl
          className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-14 md:grid-cols-4"
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
              <dd className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
                {stat.numeric === 25 && <AnimatedNumber value={25} suffix="+" />}
                {stat.numeric === 180 && <AnimatedNumber value={180} />}
                {stat.numeric === 500 && <AnimatedNumber value={500} suffix="+" />}
                {stat.numeric === 98 && <AnimatedNumber value={98} suffix="%" />}
              </dd>
              <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
