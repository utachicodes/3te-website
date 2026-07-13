"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Phone, Mail, Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { LinkedInIcon } from "./linkedin-icon"

const NAV_LINKS = [
  { label: "Qui sommes-nous ?", href: "#a-propos" },
  { label: "Savoir-faire", href: "#services" },
  { label: "Nos engagements", href: "#engagements" },
  { label: "Nos partenaires", href: "#partenaires" },
  { label: "Actualités", href: "#actualites" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <motion.div
        className="bg-brand-dark text-primary-foreground"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm">
          <a
            href="https://www.linkedin.com"
            aria-label="LinkedIn 3TE"
            className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <div className="flex items-center gap-6">
            <a href="tel:+221338652222" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Phone className="size-4" />
              <span className="hidden sm:inline">+221 33 000 00 00</span>
            </a>
            <a
              href="mailto:contact@3te-energies.com"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Mail className="size-4" />
              <span className="hidden sm:inline">contact@3te-energies.com</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main nav */}
      <motion.div
        className={`border-b border-border transition-all duration-300 ${
          scrolled ? "bg-background/95 shadow-md backdrop-blur-md" : "bg-background"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#" aria-label="Accueil 3TE">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="#contact"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 lg:inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Demander un devis
          </motion.a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="size-6" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="size-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              className="border-t border-border bg-background lg:hidden"
              aria-label="Navigation mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 overflow-hidden">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/60 py-3 text-sm font-semibold text-foreground last:border-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 mb-2 rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  Demander un devis
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
