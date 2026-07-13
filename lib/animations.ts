import type { Variants } from "motion/react"

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
}

export const smoothTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
}

export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export const marquee = {
  animate: {
    x: ["0%", "-50%"],
    transition: { x: { repeat: Infinity, repeatType: "loop" as const, duration: 30, ease: "linear" } },
  },
}

export const countUp = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
}

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4 },
}

export const iconPulse = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: -5 },
}
