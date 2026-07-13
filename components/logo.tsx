export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-white" : "text-foreground"
  const subColor = variant === "light" ? "text-white/50" : "text-muted-foreground"

  return (
    <div className="flex items-center gap-2.5">
      <span
        className="flex size-9 items-center justify-center rounded-md bg-primary font-mono text-sm font-bold tracking-tight text-primary-foreground"
        aria-hidden="true"
      >
        3TE
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-base font-extrabold tracking-tight ${textColor}`}>3TE</span>
        <span className={`font-mono text-[9px] font-medium uppercase tracking-[0.18em] ${subColor}`}>Énergies &amp; Réseaux</span>
      </span>
    </div>
  )
}
