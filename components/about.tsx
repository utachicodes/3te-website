"use client"

import { useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react"
import { useEffect } from "react"

const STATS = [
  { value: 25, suffix: "+", label: "Années", description: "d'expertise technique" },
  { value: 180, suffix: "", label: "Collaborateurs", description: "passionnés" },
  { value: 500, suffix: "+", label: "Projets", description: "réalisés" },
  { value: 98, suffix: "%", label: "Satisfaction", description: "client" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const display = useTransform(motionVal, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (isInView) {
      animate(motionVal, value, { duration: 2, ease: [0.16, 1, 0.3, 1] })
    }
  }, [isInView, motionVal, value])

  return <motion.span ref={ref}>{display}</motion.span>
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="a-propos" ref={ref} className="relative bg-brand-dark text-white overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/40"
            >
              Qui sommes-nous
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl"
            >
              On ne fait
              <br />
              pas que du
              <br />
              <span className="text-primary">courant</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 h-px bg-primary/60"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 max-w-md text-base leading-relaxed text-white/50"
            >
              3TE conçoit, réalise et maintient des infrastructures
              énergétiques. Réseaux de distribution, éclairage public,
              installations industrielles — de l&apos;étude au suivi
              d&apos;exploitation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="#services"
                className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                Nos domaines
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative overflow-hidden"
              >
                <img
                  src="/images/team.png"
                  alt="Équipe 3TE"
                  className="aspect-[4/3] w-full object-cover grayscale-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-12 left-6 right-6 grid grid-cols-4 gap-4 rounded-lg bg-white/5 p-6 backdrop-blur-md"
              >
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-2xl font-bold md:text-3xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/40">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
