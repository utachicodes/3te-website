"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Phone, Mail, MapPin, Zap } from "lucide-react"
import { Logo } from "./logo"
import { LinkedInIcon } from "./linkedin-icon"
import { fadeUp, staggerContainer, smoothTransition } from "@/lib/animations"

const SITE_LINKS = [
  { label: "Accueil", href: "#" },
  { label: "Qui sommes-nous ?", href: "#a-propos" },
  { label: "Savoir-faire", href: "#services" },
  { label: "Nos engagements", href: "#engagements" },
  { label: "Nos partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="relative bg-brand-dark text-primary-foreground overflow-hidden" ref={ref}>
      <div className="absolute inset-0 energy-grid-dense opacity-10" aria-hidden="true" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <motion.div
          className="grid gap-12 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} transition={smoothTransition}>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              3TE, votre partenaire de confiance en infrastructures énergétiques, réseaux électriques et installations
              industrielles.
            </p>
            <motion.a
              href="https://www.linkedin.com"
              aria-label="LinkedIn 3TE"
              className="mt-6 inline-flex size-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground transition-all hover:bg-primary/80 hover:text-primary-foreground"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <LinkedInIcon className="size-5" />
            </motion.a>
          </motion.div>

          <motion.nav
            aria-label="Plan du site"
            variants={fadeUp}
            transition={{ ...smoothTransition, delay: 0.1 }}
          >
            <h3 className="font-heading text-lg font-bold">Plan du site</h3>
            <ul className="mt-5 space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    <span className="inline-block size-1 rounded-full bg-primary/40 transition-colors group-hover:bg-primary" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={fadeUp} transition={{ ...smoothTransition, delay: 0.2 }}>
            <h3 className="font-heading text-lg font-bold">À propos de nous</h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-3">
                <span className="flex size-7 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Phone className="size-3.5" />
                </span>
                <a href="tel:+221338000000" className="transition-colors hover:text-primary-foreground">
                  +221 33 000 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-7 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Mail className="size-3.5" />
                </span>
                <a href="mailto:contact@3te-energies.com" className="transition-colors hover:text-primary-foreground">
                  contact@3te-energies.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <MapPin className="size-3.5" />
                </span>
                <span>Km 6.5 Route de Rufisque, BP 968, Dakar - Sénégal</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative border-t border-primary-foreground/10">
        <div className="absolute inset-0 energy-grid-dense opacity-5" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-primary-foreground/50 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-energy-glow animate-[led-blink_3s_ease-in-out_infinite]" />
            <p>&copy; {new Date().getFullYear()} 3TE. Tous droits réservés.</p>
          </div>
          <p>Mentions légales · Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  )
}
