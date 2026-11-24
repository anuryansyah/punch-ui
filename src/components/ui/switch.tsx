"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const switchTrackVariants = cva(
  [
    "peer inline-flex shrink-0 cursor-pointer items-center border-2 border-border transition-[box-shadow,background-color]",
    "data-[state=unchecked]:bg-muted",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "data-[state=checked]:bg-primary",
        secondary: "data-[state=checked]:bg-secondary",
        success: "data-[state=checked]:bg-success",
        info: "data-[state=checked]:bg-info",
        warning: "data-[state=checked]:bg-warning",
        danger: "data-[state=checked]:bg-destructive",
        destructive: "data-[state=checked]:bg-destructive",
      },
      switchSize: {
        sm: "h-5 w-9",
        default: "h-6 w-11",
        lg: "h-7 w-14",
      },
      shape: {
        pill: "rounded-full",
        square: "rounded-sm",
      },
      noShadow: {
        true: "shadow-none focus-visible:shadow-none",
        false: "shadow-brutal-sm focus-visible:shadow-brutal",
      },
    },
    defaultVariants: {
      variant: "primary",
      switchSize: "default",
      shape: "square",
      noShadow: false,
    },
  }
);

const switchThumbVariants = cva(
  "pointer-events-none block border-2 border-border bg-card transition-transform duration-150",
  {
    variants: {
      switchSize: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-0.5",
        default:
          "h-4 w-4 data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-0.5",
        lg: "h-5 w-5 data-[state=checked]:translate-x-[30px] data-[state=unchecked]:translate-x-0.5",
      },
      shape: {
        pill: "rounded-full",
        square: "rounded-[1px]",
      },
    },
    defaultVariants: {
      switchSize: "default",
      shape: "square",
    },
  }
);

export interface SwitchProps
  extends
    React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchTrackVariants> {
  noShadow?: boolean;
}

/**
 * Neobrutalist mechanical Switch powered by @radix-ui/react-switch.
 */
export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(
  (
    {
      className,
      variant = "primary",
      switchSize = "default",
      shape = "square",
      noShadow = false,
      ...rest
    },
    ref
  ) => (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(
        switchTrackVariants({ variant, switchSize, shape, noShadow }),
        className
      )}
      {...rest}
    >
      <SwitchPrimitive.Thumb
        className={cn(switchThumbVariants({ switchSize, shape }))}
      />
    </SwitchPrimitive.Root>
  )
);
Switch.displayName = SwitchPrimitive.Root.displayName;
