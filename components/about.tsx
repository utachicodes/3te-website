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
    <section id="a-propos" ref={ref} className="relative bg-background overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              Qui sommes-nous
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl"
            >
              On ne fait pas que du <span className="italic text-primary">courant</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
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
              className="mt-8"
            >
              <a
                href="#savoir-faire"
                className="group inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
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
                className="relative overflow-hidden rounded-3xl"
              >
                <img
                  src="/images/team.png"
                  alt="Équipe 3TE"
                  className="aspect-[4/3] w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-8 left-4 right-4 grid grid-cols-4 gap-4 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md md:-bottom-10 md:left-6 md:right-6 md:p-6"
              >
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-xl font-bold text-foreground md:text-3xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:text-[11px]">
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
