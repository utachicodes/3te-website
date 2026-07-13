"use client"

import { Logo } from "./logo"
import { LinkedInIcon } from "./linkedin-icon"

const SITE_LINKS = [
  { label: "À propos", href: "#a-propos" },
  { label: "Savoir-faire", href: "#savoir-faire" },
  { label: "Engagements", href: "#engagements" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/40">
              Infrastructures énergétiques, réseaux électriques et
              installations industrielles. Dakar, Sénégal.
            </p>
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn 3TE"
              className="mt-6 inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-primary/50 hover:text-primary"
            >
              <LinkedInIcon className="size-4" />
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/40">
              <li>
                <a href="tel:+221338000000" className="transition-colors hover:text-white">
                  +221 33 000 00 00
                </a>
              </li>
              <li>
                <a href="mailto:contact@3te-energies.com" className="transition-colors hover:text-white">
                  contact@3te-energies.com
                </a>
              </li>
              <li className="pt-1">
                Km 6.5 Route de Rufisque
                <br />
                BP 968, Dakar
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/25 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} 3TE</p>
          <p>Mentions légales</p>
        </div>
      </div>
    </footer>
  )
}
