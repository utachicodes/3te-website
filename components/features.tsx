"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Lightbulb, Users, Award, Zap } from "lucide-react"
import { fadeUp, staggerContainer, smoothTransition } from "@/lib/animations"

const FEATURES = [
  {
    icon: Lightbulb,
    title: "Solutions innovantes",
    description: "Des solutions sur mesure et des idées innovantes pour chaque projet.",
  },
  {
    icon: Users,
    title: "Équipe expérimentée",
    description: "Des experts qualifiés au service de nos clients, de l'étude à la maintenance.",
  },
  {
    icon: Award,
    title: "Années d'expérience",
    description: "L'expérience fait la différence sur les projets les plus exigeants.",
    badge: "25+",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="relative border-b border-border bg-background overflow-hidden" ref={ref}>
      <div className="absolute inset-0 energy-grid opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="group relative rounded-lg border border-border/60 bg-white/80 p-6 transition-all hover:border-primary/30 hover:bg-white"
                variants={fadeUp}
                transition={smoothTransition}
                whileHover={{ y: -2 }}
              >
                <div className="absolute top-3 right-3">
                  <span className="inline-block size-1.5 rounded-full bg-primary/40 animate-[led-blink_4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 1.2}s` }} />
                </div>

                <motion.div
                  className="flex size-14 shrink-0 -skew-x-6 items-center justify-center rounded-lg bg-primary text-primary-foreground"
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <span className="skew-x-6">
                    {feature.badge ? (
                      <span className="font-heading text-lg font-extrabold">{feature.badge}</span>
                    ) : (
                      <Icon className="size-6" />
                    )}
                  </span>
                </motion.div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
