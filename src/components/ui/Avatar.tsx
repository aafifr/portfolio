import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "sm" | "md" | "lg"
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, size = "md", src, alt, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-pill bg-neutral-100 flex-shrink-0",
          {
            "h-8 w-8": size === "sm",
            "h-12 w-12": size === "md",
            "h-24 w-24": size === "lg",
          },
          className
        )}
      >
        <img
          ref={ref}
          src={src || "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=256&q=80"}
          alt={alt || "Avatar"}
          className="h-full w-full object-cover"
          {...props}
        />
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar }
