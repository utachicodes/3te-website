export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-primary-foreground" : "text-foreground"
  const subColor = variant === "light" ? "text-primary-foreground/70" : "text-muted-foreground"

  return (
    <div className="flex items-center gap-2.5">
      <span
        className="flex size-11 items-center justify-center rounded-md bg-primary font-heading text-xl font-extrabold tracking-tight text-primary-foreground"
        aria-hidden="true"
      >
        3TE
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-lg font-extrabold tracking-tight ${textColor}`}>3TE</span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${subColor}`}>Énergies &amp; Réseaux</span>
      </span>
    </div>
  )
}
