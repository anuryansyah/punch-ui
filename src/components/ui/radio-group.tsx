"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> {
  orientation?: "vertical" | "horizontal";
}

/**
 * Neobrutalist RadioGroup container powered by @radix-ui/react-radio-group.
 */
export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, orientation = "vertical", ...rest }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    orientation={orientation}
    className={cn(
      orientation === "horizontal"
        ? "flex flex-wrap items-center gap-5"
        : "grid gap-3",
      className
    )}
    {...rest}
  />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const radioItemVariants = cva(
  [
    "aspect-square shrink-0 cursor-pointer border-2 bg-card transition-[box-shadow,border-color,background-color]",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      shape: {
        circle: "rounded-full",
        square: "rounded-sm",
      },
      radioSize: {
        sm: "h-4 w-4",
        default: "h-5 w-5",
        lg: "h-6 w-6",
      },
      state: {
        default: "border-border shadow-brutal-sm focus-visible:shadow-brutal",
        error:
          "shadow-brutal-error-sm focus-visible:shadow-brutal-error border-destructive",
      },
      noShadow: {
        true: "!shadow-none focus-visible:!shadow-none",
        false: "",
      },
    },
    defaultVariants: {
      shape: "circle",
      radioSize: "default",
      state: "default",
      noShadow: false,
    },
  }
);

const radioIndicatorVariants = cva("block", {
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "border border-border bg-secondary",
      success: "bg-success",
      info: "bg-info",
      warning: "bg-warning",
      danger: "bg-destructive",
      destructive: "bg-destructive",
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-[1px]",
    },
    radioSize: {
      sm: "h-2 w-2",
      default: "h-2.5 w-2.5",
      lg: "h-3 w-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    shape: "circle",
    radioSize: "default",
  },
});

export interface RadioGroupItemProps
  extends
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioItemVariants>,
    VariantProps<typeof radioIndicatorVariants> {
  noShadow?: boolean;
}

/**
 * Neobrutalist RadioGroupItem with circle/square shapes, 3 sizes, color variants, and error state.
 */
export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    {
      className,
      variant = "primary",
      shape = "circle",
      radioSize = "default",
      state = "default",
      noShadow = false,
      ...rest
    },
    ref
  ) => (
    <RadioGroupPrimitive.Item
      ref={ref}
      aria-invalid={state === "error" || undefined}
      className={cn(
        radioItemVariants({ shape, radioSize, state, noShadow }),
        className
      )}
      {...rest}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <span
          className={radioIndicatorVariants({ variant, shape, radioSize })}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
