"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Lightbulb, Users, Award } from "lucide-react"
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
    <section className="border-b border-border bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 py-14">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="flex items-start gap-4"
                variants={fadeUp}
                transition={smoothTransition}
                whileHover={{ x: 4 }}
              >
                <motion.div
                  className="flex size-16 shrink-0 -skew-x-6 items-center justify-center rounded-md bg-primary text-primary-foreground"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <span className="skew-x-6">
                    {feature.badge ? (
                      <span className="font-heading text-lg font-extrabold">{feature.badge}</span>
                    ) : (
                      <Icon className="size-7" />
                    )}
                  </span>
                </motion.div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
