"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"

const CONTACT_DETAILS = [
  { icon: Phone, label: "Téléphone", value: "+221 33 000 00 00", href: "tel:+221338000000" },
  { icon: Mail, label: "Email", value: "contact@3te-energies.com", href: "mailto:contact@3te-energies.com" },
  { icon: MapPin, label: "Adresse", value: "Km 6.5 Route de Rufisque, Dakar" },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="relative bg-brand-dark text-white overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/40"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl"
            >
              On en
              <br />
              <span className="text-primary">parle</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-px bg-primary/60"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 space-y-6"
            >
              {CONTACT_DETAILS.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4">
                    <Icon className="mt-0.5 size-4 text-white/30" />
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-white/30">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm text-white/70">{item.value}</div>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={item.label} href={item.href} className="block transition-colors hover:text-white">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <CheckCircle2 className="size-10 text-primary" />
                  <h3 className="mt-4 font-heading text-lg font-bold">Merci</h3>
                  <p className="mt-2 text-sm text-white/50">
                    On vous recontacte très vite.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Nom" id="name" placeholder="Votre nom" />
                    <Field label="Entreprise" id="company" placeholder="Société" required={false} />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Email" id="email" type="email" placeholder="vous@exemple.com" />
                    <Field label="Téléphone" id="phone" type="tel" placeholder="+221 ..." required={false} />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/30">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Décrivez votre projet..."
                      className="w-full resize-none border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center gap-3 border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                  >
                    Envoyer
                    <span>&rarr;</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
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
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/30">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-primary"
      />
    </div>
  )
}
