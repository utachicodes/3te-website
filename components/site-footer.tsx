"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Phone, Mail, MapPin } from "lucide-react"
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
    <footer className="bg-brand-dark text-primary-foreground" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <motion.div
          className="grid gap-12 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} transition={smoothTransition}>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              3TE, votre partenaire de confiance en infrastructures énergétiques, réseaux électriques et installations
              industrielles.
            </p>
            <motion.a
              href="https://www.linkedin.com"
              aria-label="LinkedIn 3TE"
              className="mt-6 inline-flex size-10 items-center justify-center rounded-md bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
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
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={fadeUp} transition={{ ...smoothTransition, delay: 0.2 }}>
            <h3 className="font-heading text-lg font-bold">À propos de nous</h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href="tel:+221338000000" className="transition-colors hover:text-primary-foreground">
                  +221 33 000 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href="mailto:contact@3te-energies.com" className="transition-colors hover:text-primary-foreground">
                  contact@3te-energies.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Km 6.5 Route de Rufisque, BP 968, Dakar - Sénégal</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-primary-foreground/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} 3TE. Tous droits réservés.</p>
          <p>Mentions légales · Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  )
}
