"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react"
import { ShieldCheck, BadgeCheck, Award, ArrowUpRight, MapPin } from "lucide-react"

const STATS = [
  { value: 25, suffix: "+", label: "Années", description: "d'expertise technique" },
  { value: 180, suffix: "", label: "Collaborateurs", description: "passionnés" },
  { value: 500, suffix: "+", label: "Projets", description: "réalisés" },
  { value: 98, suffix: "%", label: "Satisfaction", description: "client" },
]

const SECTORS = [
  { label: "Industrie", value: 45 },
  { label: "Tertiaire", value: 30 },
  { label: "Réseau & éclairage", value: 25 },
]

const REGIONS = [
  { label: "Dakar", value: 100 },
  { label: "Thiès", value: 62 },
  { label: "Saint-Louis", value: 41 },
  { label: "Ziguinchor", value: 28 },
  { label: "Kaolack", value: 24 },
]

const VALUES = [
  {
    number: "01",
    title: "Sécurité avant tout",
    description: "Aucune intervention ne démarre sans validation des procédures HSE et des habilitations électriques à jour.",
    tags: ["Habilitations B0-H0V-BR-BC", "Zéro accident majeur", "Formations continues"],
  },
  {
    number: "02",
    title: "Proximité terrain",
    description: "Des équipes basées à Dakar et mobilisables sur l'ensemble du territoire, en astreinte permanente.",
    tags: ["180+ techniciens", "Astreinte 24/7", "Couverture nationale"],
  },
  {
    number: "03",
    title: "Qualité certifiée",
    description: "Chaque installation est réceptionnée selon les normes en vigueur, avec un contrôle qualité documenté.",
    tags: ["NF C 15-100", "ISO 9001", "Contrôle qualité"],
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const display = useTransform(motionVal, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (isInView) {
      animate(motionVal, value, { duration: 2, ease: [0.16, 1, 0.3, 1] })
    }
  }, [isInView, motionVal, value])

  return <motion.span ref={ref}>{display}</motion.span>
}

function BarRow({ label, value, isInView, delay }: { label: string; value: number; isInView: boolean; delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="text-white/70">{label}</span>
        <span className="font-display font-bold text-primary">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : {}}
          transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </div>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pathRef = useRef(null)
  const pathInView = useInView(pathRef, { once: true, margin: "-100px" })

  const dataRef = useRef(null)
  const dataInView = useInView(dataRef, { once: true, margin: "-100px" })

  const proofRef = useRef(null)
  const proofInView = useInView(proofRef, { once: true, margin: "-100px" })

  const craftRef = useRef(null)
  const craftInView = useInView(craftRef, { once: true, margin: "-100px" })

  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })

  const [activeValue, setActiveValue] = useState(0)

  return (
    <section id="a-propos" className="relative overflow-hidden bg-background">
      {/* Intro */}
      <div ref={ref} className="relative mx-auto max-w-6xl px-4 pt-20 pb-28 md:pt-28 md:pb-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              Qui sommes-nous
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl"
            >
              3TE, un acteur de référence des infrastructures électriques au <span className="italic text-primary">Sénégal</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              3TE conçoit, réalise et maintient des infrastructures
              énergétiques. Réseaux de distribution, éclairage public,
              installations industrielles — de l&apos;étude au suivi
              d&apos;exploitation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="#savoir-faire"
                className="group inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Nos domaines
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative overflow-hidden rounded-3xl"
              >
                <img
                  src="/images/project-2.png"
                  alt="Équipe 3TE"
                  className="aspect-[4/3] w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute right-4 top-4 max-w-[11rem] rounded-2xl bg-white/95 p-4 text-xs leading-relaxed text-foreground shadow-lg backdrop-blur-md sm:right-6 sm:top-6"
              >
                3TE figure parmi les entreprises de référence des infrastructures électriques au Sénégal depuis 2001.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-8 left-4 right-4 grid grid-cols-4 gap-4 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md md:-bottom-10 md:left-6 md:right-6 md:p-6"
              >
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-xl font-bold text-foreground md:text-3xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:text-[11px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Notre parcours */}
      <div ref={pathRef} className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr_1fr] md:items-center md:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={pathInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 hidden overflow-hidden rounded-2xl md:order-1 md:block"
          >
            <img src="/images/project-5.png" alt="Domaines d'expertise 3TE" className="aspect-square w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pathInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Notre parcours
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              De la création à la position de référence
            </h3>
            <div className="mt-6 space-y-5 border-l border-border pl-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-primary">2001</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Création de 3TE à Dakar, d&apos;abord centrée sur la maintenance
                  électrique industrielle pour quelques clients locaux.
                </p>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-primary">2010 — 2018</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Développement des activités réseaux et éclairage public,
                  puis du pôle tertiaire, et montée en compétences des équipes.
                </p>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-primary">Aujourd&apos;hui</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  180+ collaborateurs et plus de 500 projets livrés pour des
                  industriels, collectivités et bailleurs au Sénégal.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={pathInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-3 hidden overflow-hidden rounded-2xl md:block"
          >
            <img src="/images/project-1.png" alt="Équipe terrain 3TE" className="aspect-square w-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Répartition / data card */}
      <div ref={dataRef} className="px-3 pb-24 md:px-4 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={dataInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand-dark text-white md:rounded-[2.5rem]"
        >
          <div className="grid gap-10 p-6 md:grid-cols-2 md:p-12">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                <MapPin className="size-3.5" />
                Zones d&apos;intervention
              </span>
              <h3 className="mt-3 font-display text-xl font-bold md:text-2xl">
                Une couverture qui s&apos;étend à tout le Sénégal
              </h3>
              <div className="mt-8 space-y-5">
                {REGIONS.map((region, i) => (
                  <BarRow key={region.label} label={region.label} value={region.value} isInView={dataInView} delay={0.2 + i * 0.1} />
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Répartition de l&apos;activité
              </span>
              <h3 className="mt-3 font-display text-xl font-bold md:text-2xl">
                Projets réalisés par secteur
              </h3>
              <div className="mt-8 space-y-5">
                {SECTORS.map((sector, i) => (
                  <BarRow key={sector.label} label={sector.label} value={sector.value} isInView={dataInView} delay={0.3 + i * 0.1} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 px-6 py-8 sm:flex-row md:px-12">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="size-8 rounded-full border-2 border-brand-dark bg-primary/70" />
                ))}
              </div>
              <span className="text-sm text-white/60">On recrute des ingénieurs et techniciens dans tout le Sénégal.</span>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Rejoindre l&apos;équipe
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Conformité / preuve */}
      <div ref={proofRef} className="px-3 pb-24 md:px-4 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={proofInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl md:rounded-[2.5rem]"
        >
          <img
            src="/images/project-3.png"
            alt="Technicien 3TE en intervention"
            className="aspect-[4/5] w-full object-cover sm:aspect-[16/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-brand-dark/50" />

          <div className="absolute left-5 top-5 flex gap-2 sm:left-8 sm:top-8">
            {[
              { icon: ShieldCheck, label: "HSE" },
              { icon: BadgeCheck, label: "NF C 15-100" },
              { icon: Award, label: "ISO 9001" },
            ].map((b) => (
              <span key={b.label} className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-md">
                <b.icon className="size-3.5 text-primary" />
                {b.label}
              </span>
            ))}
          </div>

          <div className="absolute inset-x-5 bottom-5 flex flex-col gap-6 sm:inset-x-8 sm:bottom-8">
            <p className="max-w-md font-display text-xl font-bold leading-tight text-white sm:text-2xl">
              Nous garantissons sécurité, fiabilité et conformité aux normes en vigueur.
            </p>
            <div className="flex gap-6 sm:gap-10">
              {[
                { value: "25 ans", label: "d'expertise terrain" },
                { value: "Zéro", label: "accident majeur en 2025" },
                { value: "100%", label: "installations réceptionnées conformes" },
              ].map((b) => (
                <div key={b.label} className="text-white">
                  <div className="font-display text-lg font-bold sm:text-xl">{b.value}</div>
                  <div className="max-w-[8rem] text-[10px] leading-tight text-white/60 sm:text-[11px]">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Approche */}
      <div ref={craftRef} className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <div className="grid items-center gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={craftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 overflow-hidden rounded-2xl md:order-1"
          >
            <img src="/images/project-3.png" alt="Bâtiment tertiaire équipé par 3TE" className="aspect-[4/5] w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={craftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <h3 className="font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              Expertise terrain et technologies modernes, dans le respect de l&apos;environnement
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Nos équipes combinent un savoir-faire électrique éprouvé et des
              solutions bas-carbone — éclairage LED, réseaux solaires,
              supervision énergétique — pour des infrastructures durables et
              économes.
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              Discuter de votre projet
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={craftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-3 overflow-hidden rounded-2xl"
          >
            <img src="/images/project-6.png" alt="Bureau d'études 3TE — solutions techniques" className="aspect-[4/5] w-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Nos valeurs */}
      <div ref={valuesRef} className="mx-auto max-w-6xl px-4 pb-20 md:pb-28">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-md font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl"
        >
          Nos valeurs, celles qui nous guident
        </motion.h3>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {VALUES.map((item, i) => {
            const isActive = activeValue === i
            return (
              <motion.button
                key={item.number}
                type="button"
                onClick={() => setActiveValue(i)}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`rounded-2xl p-6 text-left transition-colors ${
                  isActive ? "bg-brand-dark text-white" : "bg-secondary text-foreground hover:bg-accent"
                }`}
              >
                <span className={`font-display text-sm font-bold ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {item.number}
                </span>
                <h4 className="mt-2 font-heading text-lg font-bold">{item.title}</h4>
                <p className={`mt-2 text-sm leading-relaxed ${isActive ? "text-white/60" : "text-muted-foreground"}`}>
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md px-3 py-1 font-mono text-[10px] ${
                        isActive ? "bg-white/10 text-white/80" : "bg-white text-muted-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
