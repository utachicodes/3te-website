"use client"

import { motion } from "motion/react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <motion.div
      className="flex min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </motion.div>
  )
}
