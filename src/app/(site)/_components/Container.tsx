import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "narrow" | "wide"
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 lg:px-8",
        {
          "max-w-7xl": size === "default",
          "max-w-4xl": size === "narrow", 
          "max-w-8xl": size === "wide",
        },
        className
      )}
    >
      {children}
    </div>
  )
}