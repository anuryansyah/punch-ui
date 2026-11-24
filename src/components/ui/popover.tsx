"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;

export interface PopoverContentProps extends React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
> {
  noShadow?: boolean;
}

/**
 * Neobrutalist Popover content container powered by @radix-ui/react-popover.
 */
export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    {
      className,
      align = "center",
      sideOffset = 6,
      noShadow = false,
      onInteractOutside,
      onFocusOutside,
      ...rest
    },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        onInteractOutside={(event) => {
          const target = event.target as HTMLElement | null;
          if (
            target?.closest("[data-radix-select-viewport], [role='listbox']") ||
            document.querySelector("[data-radix-select-viewport]")
          ) {
            event.preventDefault();
            return;
          }
          onInteractOutside?.(event);
        }}
        onFocusOutside={(event) => {
          const target = event.target as HTMLElement | null;
          if (
            target?.closest("[data-radix-select-viewport], [role='listbox']") ||
            document.querySelector("[data-radix-select-viewport]")
          ) {
            event.preventDefault();
            return;
          }
          onFocusOutside?.(event);
        }}
        className={cn(
          "z-50 w-72 rounded-md border-2 border-border bg-card p-4 text-card-foreground outline-none",
          !noShadow && "shadow-brutal",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          className
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
