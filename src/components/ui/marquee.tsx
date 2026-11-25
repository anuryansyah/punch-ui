import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const marqueeVariants = cva(
  "group relative flex w-full select-none overflow-hidden rounded-md border-2 border-border",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        muted: "bg-muted text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface MarqueeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof marqueeVariants> {
  /** Scroll direction */
  direction?: "left" | "right";
  /** Animation speed preset */
  speed?: "slow" | "normal" | "fast";
  /** Pause scrolling when user hovers over the strip */
  pauseOnHover?: boolean;
  /** Remove hard Neobrutalist drop shadow */
  noShadow?: boolean;
}

const SPEED_DURATION: Record<"slow" | "normal" | "fast", string> = {
  slow: "44s",
  normal: "28s",
  fast: "18s",
};

/**
 * Infinite Neobrutalist Marquee ticker strip with seamless 2x track duplication
 * and optional pause-on-hover.
 */
export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      variant,
      direction = "left",
      speed = "normal",
      pauseOnHover = true,
      noShadow = false,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const trackStyle = {
      "--marquee-duration": SPEED_DURATION[speed],
      ...style,
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={cn(
          marqueeVariants({ variant }),
          !noShadow && "shadow-brutal-sm",
          className
        )}
        style={trackStyle}
        {...props}
      >
        <div
          className={cn(
            "flex w-max shrink-0 items-center",
            direction === "right"
              ? "animate-marquee-reverse"
              : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          <div className="flex shrink-0 items-center gap-4 py-2.5 pr-4">
            {children}
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 items-center gap-4 py-2.5 pr-4"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
Marquee.displayName = "Marquee";
