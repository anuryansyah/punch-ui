"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export type ToggleGroupVariant = "default" | "outline" | "secondary";
export type ToggleGroupSize = "sm" | "default" | "lg";

interface ToggleGroupContextValue {
  variant: ToggleGroupVariant;
  size: ToggleGroupSize;
  noShadow: boolean;
}

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  variant: "default",
  size: "default",
  noShadow: false,
});

export type ToggleGroupProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> & {
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  noShadow?: boolean;
};

/**
 * Neobrutalist ToggleGroup powered by @radix-ui/react-toggle-group
 * supporting single and multiple pressed states.
 */
export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(
  (
    {
      className,
      variant = "default",
      size = "default",
      noShadow = false,
      children,
      ...props
    },
    ref
  ) => (
    <ToggleGroupContext.Provider value={{ variant, size, noShadow }}>
      <ToggleGroupPrimitive.Root
        ref={ref}
        className={cn(
          "inline-flex items-center",
          variant === "outline"
            ? cn(
                "rounded-md [&>*:focus-visible]:relative [&>*:focus-visible]:z-10 [&>*:not(:first-child)]:-ml-[2px] [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none",
                !noShadow && "shadow-brutal-sm"
              )
            : "gap-2",
          className
        )}
        {...props}
      >
        {children}
      </ToggleGroupPrimitive.Root>
    </ToggleGroupContext.Provider>
  )
);
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const toggleGroupItemVariants = cva(
  [
    "inline-flex cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border-2 border-border bg-card font-bold text-card-foreground transition-all",
    "hover:bg-muted",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-45",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        outline:
          "shadow-none data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        secondary:
          "data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground",
      },
      size: {
        sm: "h-8 min-w-8 px-2.5 text-xs",
        default: "h-10 min-w-10 px-3 text-sm",
        lg: "h-12 min-w-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ToggleGroupItemProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Item
> &
  Partial<VariantProps<typeof toggleGroupItemVariants>>;

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, variant: variantProp, size: sizeProp, ...props }, ref) => {
  const ctx = React.useContext(ToggleGroupContext);
  const variant = variantProp ?? ctx.variant;
  const size = sizeProp ?? ctx.size;

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleGroupItemVariants({ variant, size }),
        variant !== "outline" &&
          !ctx.noShadow &&
          "shadow-brutal-sm data-[state=on]:translate-x-[2px] data-[state=on]:translate-y-[2px] data-[state=on]:shadow-none",
        className
      )}
      {...props}
    />
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
