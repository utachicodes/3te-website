export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <img
      src="/images/logo.png"
      alt="3TE — Énergies & Réseaux"
      className="h-10 w-auto object-contain md:h-11"
    />
  )
}