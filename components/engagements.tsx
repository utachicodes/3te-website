"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ShieldCheck, Leaf, BadgeCheck, Zap } from "lucide-react"
import { fadeUp, staggerContainer, smoothTransition } from "@/lib/animations"

const ENGAGEMENTS = [
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "La sécurité de nos équipes et de nos clients guide chacune de nos interventions, sur tous nos chantiers.",
    color: "from-red-500/10 to-red-500/0",
  },
  {
    icon: Leaf,
    title: "Environnement",
    description:
      "Nous privilégions des solutions sobres en énergie et respectueuses de l'environnement pour un impact durable.",
    color: "from-emerald-500/10 to-emerald-500/0",
  },
  {
    icon: BadgeCheck,
    title: "Qualité",
    description:
      "Un engagement qualité de la conception à la maintenance, pour des installations fiables et pérennes.",
    color: "from-primary/10 to-primary/0",
  },
]

const PARTNERS = ["ENERGIA", "VOLTAX", "GRID+", "SOLARIS", "NOVATEC", "URBALUX"]

export function Engagements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const partnersRef = useRef(null)
  const partnersInView = useInView(partnersRef, { once: true, margin: "-50px" })

  return (
    <section id="engagements" className="relative bg-background overflow-hidden" ref={ref}>
      <div className="absolute inset-0 circuit-dots opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={smoothTransition}
        >
          <div className="inline-flex items-center gap-2 text-primary">
            <Zap className="size-4" fill="currentColor" />
            <span className="text-sm font-semibold uppercase tracking-widest">Nos valeurs</span>
          </div>
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
                className="group relative overflow-hidden rounded-lg border border-border/60 bg-white p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                variants={fadeUp}
                transition={smoothTransition}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 transition-opacity group-hover:opacity-100`} />

                <div className="relative">
                  <div className="absolute top-0 right-0 size-20 rounded-full bg-primary/5 blur-2xl transition-all group-hover:scale-150 group-hover:bg-primary/10" />

                  <motion.div
                    className="relative flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Icon className="size-6" />
                  </motion.div>
                  <h3 className="relative mt-5 font-heading text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="relative mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
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
            className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={partnersInView ? "visible" : "hidden"}
          >
            {PARTNERS.map((name, i) => (
              <motion.span
                key={name}
                className="font-heading text-xl font-extrabold tracking-tight text-muted-foreground/40 transition-colors hover:text-primary"
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                transition={{ ...smoothTransition, delay: i * 0.08 }}
                whileHover={{ scale: 1.08 }}
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
