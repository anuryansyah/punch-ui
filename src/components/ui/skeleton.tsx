import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const skeletonVariants = cva(
  "animate-skeleton-pulse border-2 border-border bg-muted",
  {
    variants: {
      variant: {
        default: "shadow-brutal-sm",
        flat: "shadow-none",
      },
      shape: {
        rectangle: "rounded-md",
        circle: "rounded-full",
      },
      noShadow: {
        true: "!shadow-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "rectangle",
      noShadow: false,
    },
  }
);

export interface SkeletonProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  noShadow?: boolean;
}

/**
 * Neobrutalist geometric Skeleton loading placeholder block.
 */
export function Skeleton({
  className,
  variant = "default",
  shape = "rectangle",
  noShadow = false,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(skeletonVariants({ variant, shape, noShadow }), className)}
      {...props}
    />
  );
}
Skeleton.displayName = "Skeleton";
