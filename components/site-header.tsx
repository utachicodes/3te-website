"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

const NAV_LINKS = [
  { label: "À propos", href: "#a-propos" },
  { label: "Savoir-faire", href: "#savoir-faire" },
  { label: "Engagements", href: "#engagements" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled ? "bg-brand-dark/90 backdrop-blur-xl" : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:py-5">
            <a href="#" aria-label="Accueil 3TE">
              <Logo variant="light" />
            </a>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 lg:inline-block"
            >
              Demander un devis
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center text-white lg:hidden"
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
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="border-t border-white/10 bg-brand-dark/95 backdrop-blur-xl lg:hidden"
              aria-label="Navigation mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 overflow-hidden">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/5 py-3 text-sm font-medium text-white/60 last:border-0 hover:text-white"
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
                  className="mt-4 border border-white/20 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white"
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
