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
    image: "/images/service-industrie.png",
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
    image: "/images/service-tertiaire.png",
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
    image: "/images/service-reseau.png",
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
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
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

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {SERVICES.map((service, i) => {
                const Icon = service.icon
                return (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() => setActive(i)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className={`group flex w-full shrink-0 items-center gap-3 rounded-2xl px-5 py-4 text-left transition-colors ${
                      i === active ? "bg-primary text-primary-foreground" : "bg-white text-foreground hover:bg-accent"
                    }`}
                  >
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                        i === active ? "bg-brand-dark text-primary" : "bg-secondary text-primary"
                      }`}
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="font-heading text-base font-bold">{service.label}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={SERVICES[active].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-3xl bg-white"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={SERVICES[active].image}
                    alt={SERVICES[active].label}
                    className="aspect-[16/9] w-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                </div>

                <div className="grid gap-6 p-6 sm:grid-cols-2 md:p-8">
                  <div>
                    <h3 className="font-heading text-xl font-bold">{SERVICES[active].label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {SERVICES[active].description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {SERVICES[active].points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm text-foreground">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                          <Check className="size-3" />
                        </span>
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
