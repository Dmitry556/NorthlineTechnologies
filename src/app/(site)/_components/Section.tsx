import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: "default" | "surface" | "elevated"
  padding?: "default" | "sm" | "lg" | "xl"
  id?: string
}

export function Section({ 
  children, 
  className, 
  background = "default",
  padding = "default",
  id
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        {
          "bg-[var(--nl-bg)]": background === "default",
          "bg-[var(--nl-surface)]": background === "surface",
          "bg-[var(--nl-elev)]": background === "elevated",
        },
        {
          "py-12 lg:py-16": padding === "default",
          "py-8 lg:py-12": padding === "sm",
          "py-16 lg:py-24": padding === "lg",
          "py-24 lg:py-32": padding === "xl",
        },
        className
      )}
    >
      {children}
    </section>
  )
}