"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Lightbulb, Users, Award } from "lucide-react"

const FEATURES = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Innovation",
    description: "Des solutions sur mesure pour chaque défi technique.",
  },
  {
    icon: Users,
    number: "02",
    title: "Expertise",
    description: "Des ingénieurs et techniciens qualifiés sur chaque projet.",
  },
  {
    icon: Award,
    number: "03",
    title: "Excellence",
    description: "25 ans d'expérience au service de vos infrastructures.",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              Pourquoi nous
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl"
            >
              Notre
              <br />
              différence
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-px bg-primary"
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-0">
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                    className="group flex items-start gap-8 border-t border-border py-10 first:border-t-0"
                  >
                    <span className="font-display text-sm font-medium text-muted-foreground/40">
                      {feature.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Icon className="size-5 text-primary" />
                        <h3 className="font-heading text-xl font-bold">{feature.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
