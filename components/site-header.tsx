"use client"

import { useEffect, useState } from "react"
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled ? "border-border bg-background/95 backdrop-blur-xl" : "border-transparent bg-background/60 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:py-4">
          <a href="#" aria-label="Accueil 3TE">
            <Logo variant="dark" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                <span className="font-mono text-[10px] text-primary/70">0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 lg:inline-flex"
          >
            Demander un devis
            <ArrowUpRight className="size-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center text-foreground lg:hidden"
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
            className="border-b border-border bg-background/98 backdrop-blur-xl lg:hidden"
            aria-label="Navigation mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border-b border-border py-3 text-sm font-medium text-foreground/70 last:border-0 hover:text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <span className="font-mono text-[10px] text-primary/70">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
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
    </header>
  )
}
