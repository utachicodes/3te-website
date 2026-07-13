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
    <section id="savoir-faire" ref={ref} className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
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
              className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl"
            >
              Trois
              <br />
              domaines
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-px bg-primary"
            />

            <div className="mt-12 space-y-0">
              {SERVICES.map((service, i) => (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className={`group flex w-full items-center gap-4 border-t border-border py-5 text-left transition-colors first:border-t-0 ${
                    i === active ? "text-primary" : "text-foreground hover:text-muted-foreground"
                  }`}
                >
                  <span className="font-display text-xs font-medium text-muted-foreground/40">
                    {service.number}
                  </span>
                  <span className={`font-heading text-lg font-bold ${i === active ? "text-primary" : ""}`}>
                    {service.label}
                  </span>
                  {i === active && (
                    <motion.div
                      layoutId="active-indicator"
                      className="ml-auto h-px flex-1 bg-primary/20"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={SERVICES[active].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={SERVICES[active].image}
                    alt={SERVICES[active].label}
                    className="aspect-[16/10] w-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="font-display text-6xl font-bold text-white/20">
                      {SERVICES[active].number}
                    </span>
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
