"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ShieldCheck, Leaf, BadgeCheck } from "lucide-react"
import { fadeUp, staggerContainer, smoothTransition } from "@/lib/animations"

const ENGAGEMENTS = [
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "La sécurité de nos équipes et de nos clients guide chacune de nos interventions, sur tous nos chantiers.",
  },
  {
    icon: Leaf,
    title: "Environnement",
    description:
      "Nous privilégions des solutions sobres en énergie et respectueuses de l'environnement pour un impact durable.",
  },
  {
    icon: BadgeCheck,
    title: "Qualité",
    description:
      "Un engagement qualité de la conception à la maintenance, pour des installations fiables et pérennes.",
  },
]

const PARTNERS = ["ENERGIA", "VOLTAX", "GRID+", "SOLARIS", "NOVATEC", "URBALUX"]

export function Engagements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const partnersRef = useRef(null)
  const partnersInView = useInView(partnersRef, { once: true, margin: "-50px" })

  return (
    <section id="engagements" className="bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 py-20">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={smoothTransition}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos valeurs</span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl text-balance">
            Nos engagements au quotidien
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {ENGAGEMENTS.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="group rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-md"
                variants={fadeUp}
                transition={smoothTransition}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <motion.div
                  className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Icon className="size-6" />
                </motion.div>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div id="partenaires" className="mt-20 border-t border-border pt-12" ref={partnersRef}>
          <motion.p
            className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground"
            variants={fadeUp}
            initial="hidden"
            animate={partnersInView ? "visible" : "hidden"}
            transition={smoothTransition}
          >
            Ils nous font confiance
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate={partnersInView ? "visible" : "hidden"}
          >
            {PARTNERS.map((name) => (
              <motion.span
                key={name}
                className="font-heading text-xl font-extrabold tracking-tight text-muted-foreground/60"
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                transition={smoothTransition}
                whileHover={{ scale: 1.1, color: "oklch(0.53 0.14 152)" }}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
