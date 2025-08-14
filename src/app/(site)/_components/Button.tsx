import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    default: "bg-[var(--nl-brand)] text-[var(--nl-brand-ink)] hover:bg-[var(--nl-brand)]/90 focus:ring-[var(--nl-brand)] border-transparent hover:translate-y-[-2px]",
    secondary: "bg-[var(--nl-elev)] text-[var(--nl-text)] hover:bg-[var(--nl-elev)]/80 border-[var(--nl-border)] hover:translate-y-[-2px]",
    outline: "border-[var(--nl-border)] text-[var(--nl-text)] hover:bg-[var(--nl-elev)] hover:text-[var(--nl-text)] hover:translate-y-[-2px]",
    ghost: "text-[var(--nl-text)] hover:bg-[var(--nl-elev)] hover:text-[var(--nl-text)] border-transparent hover:translate-y-[-2px]",
  },
  size: {
    default: "h-12 px-6 py-3 text-base",
    sm: "h-10 px-4 py-2 text-sm",
    lg: "h-14 px-8 py-4 text-lg",
    icon: "h-12 w-12",
  },
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--nl-radius)] text-sm font-medium transition-all duration-[var(--nl-motion)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nl-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nl-bg)] disabled:pointer-events-none disabled:opacity-50 border active:scale-[0.98]",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }