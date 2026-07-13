"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Zap } from "lucide-react"
import { fadeLeft, fadeRight, staggerContainer, smoothTransition } from "@/lib/animations"

const CONTACT_DETAILS = [
  { icon: Phone, label: "Téléphone", value: "+221 33 000 00 00", href: "tel:+221338000000" },
  { icon: Mail, label: "Email", value: "contact@3te-energies.com", href: "mailto:contact@3te-energies.com" },
  { icon: MapPin, label: "Adresse", value: "Km 6.5 Route de Rufisque, Dakar" },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="contact" className="relative bg-secondary overflow-hidden" ref={ref}>
      <div className="absolute inset-0 energy-grid opacity-20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={smoothTransition}
          >
            <div className="inline-flex items-center gap-2 text-primary">
              <Zap className="size-4" fill="currentColor" />
              <span className="text-sm font-semibold uppercase tracking-widest">Contact</span>
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl text-balance">
              Parlons de votre projet
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              Une question, un besoin, un projet d&apos;infrastructure ? Notre équipe vous répond et vous accompagne à
              chaque étape.
            </p>

            <motion.dl
              className="mt-10 space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {CONTACT_DETAILS.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="group flex items-start gap-4">
                    <motion.span
                      className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <Icon className="size-5" />
                    </motion.span>
                    <div>
                      <dt className="text-sm font-semibold text-muted-foreground">{item.label}</dt>
                      <dd className="font-semibold text-foreground">{item.value}</dd>
                    </div>
                  </div>
                )
                return item.href ? (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="block transition-opacity hover:opacity-80"
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    transition={smoothTransition}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.label}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    transition={smoothTransition}
                  >
                    {content}
                  </motion.div>
                )
              })}
            </motion.dl>
          </motion.div>

          <motion.div
            className="relative rounded-lg border border-border/50 bg-white p-6 shadow-sm md:p-8"
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ...smoothTransition, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-gradient-to-r from-primary/0 via-primary to-primary/0" />

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  className="flex h-full flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                    <CheckCircle2 className="relative size-14 text-primary" />
                  </motion.div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-foreground">Message envoyé</h3>
                  <p className="mt-2 text-muted-foreground">
                    Merci pour votre message. Notre équipe vous recontactera très prochainement.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                  className="space-y-5"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nom complet" id="name" placeholder="Votre nom" />
                    <Field label="Entreprise" id="company" placeholder="Votre société" required={false} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" id="email" type="email" placeholder="vous@exemple.com" />
                    <Field label="Téléphone" id="phone" type="tel" placeholder="+221 ..." required={false} />
                  </div>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                    transition={smoothTransition}
                  >
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Décrivez votre projet..."
                      className="w-full resize-none rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_oklch(0.48_0.15_152/0.1)]"
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-border"
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                    transition={smoothTransition}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Envoyer le message
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
      transition={smoothTransition}
    >
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_oklch(0.48_0.15_152/0.1)]"
      />
    </motion.div>
  )
}
