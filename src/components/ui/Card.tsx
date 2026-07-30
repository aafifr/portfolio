import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-surface border border-border-default shadow-sm transition-shadow hover:shadow-md overflow-hidden",
  {
    variants: {
      radius: {
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      padding: {
        none: "p-0",
        default: "p-6",
        large: "p-8",
      }
    },
    defaultVariants: {
      radius: "lg",
      padding: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, radius, padding, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ radius, padding, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card, cardVariants }
