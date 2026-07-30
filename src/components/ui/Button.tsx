import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-pill text-button ring-offset-canvas transition-colors focus-visible:outline-none focus-visible:ring-1.5 focus-visible:ring-state-focus disabled:pointer-events-none disabled:bg-state-disabled-bg disabled:text-text-disabled h-11 md:h-12 px-6 py-3",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-text-inverse hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black/6 hover:after:rounded-pill relative overflow-hidden",
        secondary:
          "border border-border-default bg-transparent text-text-primary hover:bg-surface-alt",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
