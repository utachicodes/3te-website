"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ShieldCheck, Leaf, BadgeCheck } from "lucide-react"

const ENGAGEMENTS = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Sécurité",
    description:
      "La sécurité guide chacune de nos interventions. Sur chaque chantier, sans exception.",
  },
  {
    icon: Leaf,
    number: "02",
    title: "Environnement",
    description:
      "Des solutions sobres en énergie, respectueuses de l'environnement pour un impact durable.",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Qualité",
    description:
      "De la conception à la maintenance, des installations fiables et pérennes.",
  },
]

const PARTNERS = ["ENERGIA", "VOLTAX", "GRID+", "SOLARIS", "NOVATEC", "URBALUX"]

export function Engagements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const partnersRef = useRef(null)
  const partnersInView = useInView(partnersRef, { once: true, margin: "-50px" })

  return (
    <section id="engagements" ref={ref} className="relative bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              Nos valeurs
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl"
            >
              On fait
              <br />
              les choses
              <br />
              <span className="text-primary">bien</span>
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
              {ENGAGEMENTS.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                    className="group border-t border-border py-10 first:border-t-0"
                  >
                    <div className="flex items-start gap-8">
                      <span className="font-display text-sm font-medium text-muted-foreground/40">
                        {item.number}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <Icon className="size-5 text-primary" />
                          <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                        </div>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="partenaires" ref={partnersRef} className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Ils nous font confiance
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={partnersInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8"
          >
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="font-heading text-lg font-bold tracking-tight text-muted-foreground/30 transition-colors hover:text-muted-foreground/60"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
