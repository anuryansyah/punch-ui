"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sliderTrackVariants = cva(
  "relative grow overflow-hidden border-2 border-border bg-muted data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full",
  {
    variants: {
      sliderSize: {
        sm: "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2",
        default:
          "data-[orientation=horizontal]:h-3 data-[orientation=vertical]:w-3",
        lg: "data-[orientation=horizontal]:h-4 data-[orientation=vertical]:w-4",
      },
      shape: {
        square: "rounded-sm",
        circle: "rounded-full",
      },
      noShadow: {
        true: "shadow-none",
        false: "shadow-brutal-sm",
      },
    },
    defaultVariants: {
      sliderSize: "default",
      shape: "square",
      noShadow: false,
    },
  }
);

const sliderRangeVariants = cva(
  "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
  {
    variants: {
      variant: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-success",
        info: "bg-info",
        warning: "bg-warning",
        danger: "bg-destructive",
        destructive: "bg-destructive",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const sliderThumbVariants = cva(
  [
    "block cursor-grab border-2 border-border bg-card transition-transform active:cursor-grabbing",
    "hover:scale-105 focus-visible:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      sliderSize: {
        sm: "h-4 w-4",
        default: "h-5 w-5",
        lg: "h-6 w-6",
      },
      shape: {
        square: "rounded-sm",
        circle: "rounded-full",
      },
      noShadow: {
        true: "shadow-none focus-visible:shadow-none",
        false: "shadow-brutal-sm focus-visible:shadow-brutal",
      },
    },
    defaultVariants: {
      sliderSize: "default",
      shape: "square",
      noShadow: false,
    },
  }
);

export interface SliderProps
  extends
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderTrackVariants>,
    VariantProps<typeof sliderRangeVariants> {
  noShadow?: boolean;
}

/**
 * Neobrutalist Slider powered by @radix-ui/react-slider with multi-thumb range support,
 * square/circle thumb shapes, 3 sizes, and semantic color variants.
 */
export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      variant = "primary",
      sliderSize = "default",
      shape = "square",
      noShadow = false,
      value,
      defaultValue,
      ...rest
    },
    ref
  ) => {
    const thumbCount = Math.max(1, (value ?? defaultValue ?? [0]).length);

    return (
      <SliderPrimitive.Root
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        className={cn(
          "relative flex touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-auto data-[disabled]:cursor-not-allowed data-[orientation=vertical]:flex-col data-[disabled]:opacity-50",
          className
        )}
        {...rest}
      >
        <SliderPrimitive.Track
          className={cn(sliderTrackVariants({ sliderSize, shape, noShadow }))}
        >
          <SliderPrimitive.Range
            className={cn(sliderRangeVariants({ variant }))}
          />
        </SliderPrimitive.Track>

        {Array.from({ length: thumbCount }, (_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className={cn(sliderThumbVariants({ sliderSize, shape, noShadow }))}
          />
        ))}
      </SliderPrimitive.Root>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;
