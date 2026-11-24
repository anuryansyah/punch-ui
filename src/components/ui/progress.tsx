"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const progressTrackVariants = cva(
  "relative w-full overflow-hidden rounded-md border-2 border-border bg-muted",
  {
    variants: {
      size: {
        sm: "h-2.5",
        default: "h-4",
        lg: "h-6",
      },
      noShadow: {
        true: "shadow-none",
        false: "shadow-brutal-sm",
      },
    },
    defaultVariants: {
      size: "default",
      noShadow: false,
    },
  }
);

const progressIndicatorVariants = cva(
  "h-full transition-[width] duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        info: "bg-info text-info-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-destructive text-destructive-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof progressTrackVariants>,
    VariantProps<typeof progressIndicatorVariants> {
  value?: number;
  max?: number;
  striped?: boolean;
  showValue?: boolean;
  indeterminate?: boolean;
  noShadow?: boolean;
}

const STRIPE_STYLE: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(0, 0, 0, 0.16) 8px, rgba(0, 0, 0, 0.16) 16px)",
};

/**
 * Neobrutalist Progress bar with semantic variants, striped pattern,
 * indeterminate loading animation, and optional monospace percentage readout.
 */
export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      variant = "default",
      size = "default",
      striped = false,
      showValue = false,
      indeterminate = false,
      noShadow = false,
      ...props
    },
    ref
  ) => {
    const safeMax = max > 0 ? max : 100;
    const clamped = Math.min(safeMax, Math.max(0, value));
    const percent = Math.round((clamped / safeMax) * 100);

    const bar = (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={indeterminate ? undefined : clamped}
        className={cn(progressTrackVariants({ size, noShadow }), className)}
        {...props}
      >
        {indeterminate ? (
          <div
            style={striped ? STRIPE_STYLE : undefined}
            className={cn(
              progressIndicatorVariants({ variant }),
              "animate-progress-indeterminate w-2/5 border-x-2 border-border"
            )}
          />
        ) : (
          <div
            style={{
              width: `${percent}%`,
              ...(striped ? STRIPE_STYLE : undefined),
            }}
            className={cn(
              progressIndicatorVariants({ variant }),
              percent > 0 && percent < 100 && "border-r-2 border-border",
              size === "lg" &&
                showValue &&
                "flex items-center justify-end pr-2 font-mono text-[11px] font-black"
            )}
          >
            {size === "lg" && showValue && percent >= 18 ? `${percent}%` : null}
          </div>
        )}
      </div>
    );

    if (showValue && size !== "lg" && !indeterminate) {
      return (
        <div className="flex w-full items-center gap-3">
          <div className="min-w-0 flex-1">{bar}</div>
          <span className="w-10 shrink-0 text-right font-mono text-xs font-black tabular-nums">
            {percent}%
          </span>
        </div>
      );
    }

    return bar;
  }
);
Progress.displayName = "Progress";
