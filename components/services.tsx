"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { Factory, Building2, Lightbulb, Check } from "lucide-react"
import { fadeUp, fadeLeft, fadeRight, staggerContainer, smoothTransition } from "@/lib/animations"

const SERVICES = [
  {
    id: "industrie",
    label: "Industrie",
    icon: Factory,
    image: "/images/service-industrie.png",
    imageAlt: "Installation de panneaux solaires par un technicien 3TE",
    description:
      "Grâce à l'expertise et au savoir-faire de nos équipes, nous apportons des solutions pour l'étude, la conception et la réalisation de projets de supervision, d'automatisme et d'électricité industrielle.",
    points: [
      "Électricité industrielle haute et basse tension",
      "Automatisme et supervision",
      "Postes de transformation et distribution",
      "Maintenance et exploitation des sites",
    ],
  },
  {
    id: "tertiaire",
    label: "Tertiaire",
    icon: Building2,
    image: "/images/service-tertiaire.png",
    imageAlt: "Bâtiment tertiaire moderne équipé par 3TE",
    description:
      "Nous équipons les bâtiments tertiaires et collectifs en portant une attention particulière au confort, à la qualité et à la sécurité sur les lieux de vie et de travail.",
    points: [
      "Courants forts et courants faibles",
      "Éclairage et gestion technique du bâtiment",
      "Sécurité incendie et contrôle d'accès",
      "Rénovation et efficacité énergétique",
    ],
  },
  {
    id: "reseau",
    label: "Réseau & éclairage public",
    icon: Lightbulb,
    image: "/images/service-reseau.png",
    imageAlt: "Techniciens 3TE installant un réseau et un éclairage public",
    description:
      "3TE déploie et entretient les réseaux de distribution et les infrastructures d'éclairage public, pour des territoires mieux connectés et plus sûrs.",
    points: [
      "Extension et renforcement des réseaux",
      "Éclairage public et urbain",
      "Raccordements et branchements",
      "Solutions solaires et basse consommation",
    ],
  },
]

export function Services() {
  const [active, setActive] = useState(0)
  const service = SERVICES[active]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="bg-secondary" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 py-20">
        <motion.div
          className="max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={smoothTransition}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos savoir-faire</span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl text-balance">
            Ce que nous faisons
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Une expertise complète, de l&apos;étude à l&apos;exploitation, au service de vos infrastructures.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ...smoothTransition, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Domaines d'intervention">
              {SERVICES.map((s, i) => {
                const Icon = s.icon
                const selected = i === active
                return (
                  <motion.button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(i)}
                    className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                      selected
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground hover:bg-accent"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    layout
                  >
                    <Icon className="size-4" />
                    {s.label}
                  </motion.button>
                )
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={service.id}
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-2xl font-bold text-foreground">{service.label}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
                <motion.ul
                  className="mt-6 grid gap-3 sm:grid-cols-2"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {service.points.map((point) => (
                    <motion.li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                      variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                      >
                        <Check className="size-3.5" />
                      </motion.span>
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-lg border border-border shadow-sm"
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ...smoothTransition, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={service.image}
                src={service.image || "/placeholder.svg"}
                alt={service.imageAlt}
                className="aspect-[4/3] w-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
