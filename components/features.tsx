"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { Lightbulb, Users, Award, ShieldCheck, Leaf } from "lucide-react"

const ITEMS = [
  {
    icon: Lightbulb,
    title: "Innovation",
    summary: "Des solutions sur mesure pour chaque défi technique.",
    points: ["Étude & conception personnalisées", "Technologies éprouvées et évolutives", "Automatisme & supervision"],
  },
  {
    icon: Users,
    title: "Expertise",
    summary: "Des ingénieurs et techniciens qualifiés sur chaque projet.",
    points: ["180+ collaborateurs formés", "Encadrement de chantier dédié", "Habilitations électriques à jour"],
  },
  {
    icon: Award,
    title: "Excellence",
    summary: "25 ans d'expérience au service de vos infrastructures.",
    points: ["500+ projets livrés", "Suivi d'exploitation long terme", "98% de satisfaction client"],
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    summary: "La sécurité guide chacune de nos interventions, sans exception.",
    points: ["Procédures HSE strictes", "Formations sécurité continues", "Zéro compromis sur les chantiers"],
  },
  {
    icon: Leaf,
    title: "Environnement",
    summary: "Des solutions sobres en énergie, respectueuses de l'environnement.",
    points: ["Solutions bas-carbone privilégiées", "Optimisation de la consommation", "Éclairage & réseaux solaires"],
  },
]

const IMAGES = [
  { src: "/images/team.png", alt: "Équipe 3TE sur le terrain" },
  { src: "/images/service-reseau.png", alt: "Réseau de distribution électrique" },
  { src: "/images/service-industrie.png", alt: "Installation industrielle" },
]

export function Features() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="engagements" className="relative bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div ref={ref} className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Pourquoi 3TE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl"
          >
            25 ans d&apos;expertise au service de vos infrastructures
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Découvrez ce qui distingue nos équipes, de la conception à
            l&apos;exploitation de vos réseaux et installations électriques.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 grid grid-cols-3 gap-3 md:gap-4"
        >
          <div className="col-span-1 overflow-hidden rounded-2xl md:rounded-3xl">
            <img src={IMAGES[0].src} alt={IMAGES[0].alt} className="aspect-[3/4] w-full object-cover" />
          </div>
          <div className="col-span-1 overflow-hidden rounded-2xl md:rounded-3xl">
            <img src={IMAGES[1].src} alt={IMAGES[1].alt} className="aspect-[3/4] w-full object-cover" />
          </div>
          <div className="col-span-1 overflow-hidden rounded-2xl md:rounded-3xl">
            <img src={IMAGES[2].src} alt={IMAGES[2].alt} className="aspect-[3/4] w-full object-cover" />
          </div>
        </motion.div>

        <div className="mt-4 space-y-3 md:mt-6">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            const isActive = active === i
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`overflow-hidden rounded-2xl transition-colors duration-300 ${
                  isActive ? "bg-primary" : "bg-secondary hover:bg-accent"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  aria-expanded={isActive}
                >
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                      isActive ? "bg-brand-dark text-primary" : "bg-white text-primary"
                    }`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className={`font-heading text-base font-bold md:text-lg ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                    {item.title}
                  </span>
                  {!isActive && (
                    <span className="ml-auto hidden max-w-xs truncate text-sm text-muted-foreground sm:block">
                      {item.summary}
                    </span>
                  )}
                  <span
                    className={`ml-auto flex size-7 shrink-0 items-center justify-center rounded-full transition-transform sm:ml-0 ${
                      isActive ? "rotate-45 bg-brand-dark text-primary" : "bg-white text-foreground"
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="grid gap-4 px-5 pb-5 sm:grid-cols-3 md:px-6 md:pb-6">
                        <p className="text-sm leading-relaxed text-primary-foreground/80 sm:col-span-1">
                          {item.summary}
                        </p>
                        <ul className="space-y-1.5 sm:col-span-2">
                          {item.points.map((point) => (
                            <li key={point} className="text-sm text-primary-foreground/90">
                              · {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
