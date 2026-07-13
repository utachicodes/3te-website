"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Logo } from "./logo"

const NAV_LINKS = [
  { label: "À propos", href: "#a-propos" },
  { label: "Savoir-faire", href: "#savoir-faire" },
  { label: "Engagements", href: "#engagements" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50 w-full px-3 pt-3 md:px-4 md:pt-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl"
      >
        <div className="flex items-center justify-between gap-4 rounded-full border border-border/60 bg-white/90 py-2 pl-3 pr-2 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-xl md:pl-4 md:pr-2.5">
          <a href="#" aria-label="Accueil 3TE">
            <Logo variant="dark" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            Demander un devis
            <ArrowUpRight className="size-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label={open ? "Fermer" : "Menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="size-5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="size-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="mt-2 overflow-hidden rounded-3xl border border-border/60 bg-white/95 shadow-lg backdrop-blur-xl lg:hidden"
              aria-label="Navigation mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col px-4 py-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/60 py-3 text-sm font-medium text-foreground/70 last:border-0 hover:text-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
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
