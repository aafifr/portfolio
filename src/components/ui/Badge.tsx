import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  showIndicator?: boolean
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, children, showIndicator = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 rounded-pill bg-neutral-50 px-3 h-8 text-caption text-text-secondary",
          className
        )}
        {...props}
      >
        {showIndicator && (
          <span className="h-2 w-2 rounded-full bg-accent-available" />
        )}
        {children}
      </div>
    )
  }
)
Badge.displayName = "Badge"

export { Badge }
