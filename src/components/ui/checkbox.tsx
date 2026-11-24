"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  [
    "group peer inline-flex shrink-0 cursor-pointer items-center justify-center rounded-sm border-2 bg-card transition-[box-shadow,background-color,border-color]",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground",
        secondary:
          "data-[state=checked]:bg-secondary data-[state=indeterminate]:bg-secondary data-[state=checked]:text-secondary-foreground data-[state=indeterminate]:text-secondary-foreground",
        success:
          "data-[state=checked]:bg-success data-[state=indeterminate]:bg-success data-[state=checked]:text-success-foreground data-[state=indeterminate]:text-success-foreground",
        info: "data-[state=checked]:bg-info data-[state=indeterminate]:bg-info data-[state=checked]:text-info-foreground data-[state=indeterminate]:text-info-foreground",
        warning:
          "data-[state=checked]:bg-warning data-[state=indeterminate]:bg-warning data-[state=checked]:text-warning-foreground data-[state=indeterminate]:text-warning-foreground",
        danger:
          "data-[state=checked]:bg-destructive data-[state=indeterminate]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=indeterminate]:text-destructive-foreground",
        destructive:
          "data-[state=checked]:bg-destructive data-[state=indeterminate]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=indeterminate]:text-destructive-foreground",
      },
      checkboxSize: {
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
      variant: "primary",
      checkboxSize: "default",
      state: "default",
      noShadow: false,
    },
  }
);

const iconSizeMap = {
  sm: "h-3 w-3",
  default: "h-3.5 w-3.5",
  lg: "h-4 w-4",
} as const;

export interface CheckboxProps
  extends
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  noShadow?: boolean;
}

/**
 * Neobrutalist Checkbox powered by @radix-ui/react-checkbox with variant, size, error state, and indeterminate support.
 */
export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      variant,
      checkboxSize = "default",
      state,
      noShadow = false,
      ...rest
    },
    ref
  ) => {
    const iconSize = iconSizeMap[checkboxSize ?? "default"];

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        aria-invalid={state === "error" || undefined}
        className={cn(
          checkboxVariants({ variant, checkboxSize, state, noShadow }),
          className
        )}
        {...rest}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          <Check
            className={cn("hidden group-data-[state=checked]:block", iconSize)}
            strokeWidth={3}
          />
          <Minus
            className={cn(
              "hidden group-data-[state=indeterminate]:block",
              iconSize
            )}
            strokeWidth={3}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
