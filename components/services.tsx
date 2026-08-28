"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { Factory, Building2, Lightbulb, Check } from "lucide-react"

const SERVICES = [
  {
    id: "industrie",
    number: "01",
    label: "Industrie",
    icon: Factory,
    image: "/images/project-1.png",
    description:
      "Électricité industrielle haute et basse tension, automatisme, supervision et maintenance de sites.",
    points: [
      "Haute et basse tension",
      "Automatisme & supervision",
      "Postes de transformation",
      "Maintenance de sites",
    ],
  },
  {
    id: "tertiaire",
    number: "02",
    label: "Tertiaire",
    icon: Building2,
    image: "/images/project-3.png",
    description:
      "Équipement de bâtiments tertiaires avec une attention particulière au confort et à la sécurité.",
    points: [
      "Courants forts & faibles",
      "Éclairage & GTB",
      "Sécurité incendie",
      "Rénovation énergétique",
    ],
  },
  {
    id: "reseau",
    number: "03",
    label: "Réseau & éclairage",
    icon: Lightbulb,
    image: "/images/project-4.png",
    description:
      "Déploiement et entretien des réseaux de distribution et des infrastructures d'éclairage public.",
    points: [
      "Extension de réseaux",
      "Éclairage public & urbain",
      "Raccordements",
      "Solutions solaires",
    ],
  },
]

export function Services() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="savoir-faire" ref={ref} className="relative bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Savoir-faire
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl"
          >
            Trois domaines, une seule exigence
          </motion.h2>
        </div>

        <div className="mt-10 grid gap-x-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1">
              {SERVICES.map((service, i) => {
                const Icon = service.icon
                const isActive = i === active
                return (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() => setActive(i)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className={`group flex w-full items-center gap-4 border-t border-border py-5 text-left transition-colors first:border-t-0 sm:border-t-0 sm:border-b sm:py-6 lg:border-t lg:border-b-0 lg:first:border-t-0 lg:py-5 ${
                      isActive ? "text-primary" : "text-foreground hover:text-muted-foreground"
                    }`}
                  >
                    <span className="font-mono text-xs text-muted-foreground/50">{service.number}</span>
                    <Icon className={`size-4 ${isActive ? "text-primary" : "text-muted-foreground/60"}`} />
                    <span className="font-heading text-base font-bold sm:text-lg">{service.label}</span>
                    {isActive && (
                      <motion.div layoutId="active-indicator" className="ml-auto hidden h-px flex-1 bg-primary/30 lg:block" />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="mt-10 lg:col-span-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={SERVICES[active].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative overflow-hidden rounded-md">
                  <motion.img
                    src={SERVICES[active].image}
                    alt={SERVICES[active].label}
                    className="aspect-[16/9] w-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="font-mono text-5xl font-bold text-white/15">{SERVICES[active].number}</span>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="font-heading text-xl font-bold">{SERVICES[active].label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {SERVICES[active].description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {SERVICES[active].points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm text-foreground">
                        <Check className="size-3.5 text-primary" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
