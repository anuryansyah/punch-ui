"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;
export const SheetPortal = SheetPrimitive.Portal;

/**
 * High-contrast dark backdrop overlay for Sheet.
 */
export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetContentVariants = cva(
  "fixed z-50 flex flex-col gap-4 bg-card p-6 text-card-foreground outline-none transition ease-in-out data-[state=closed]:duration-200 data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 w-full border-b-2 border-border data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 w-full border-t-2 border-border data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full border-r-2 border-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        right:
          "inset-y-0 right-0 h-full border-l-2 border-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
      },
      size: {
        sm: "",
        default: "",
        lg: "",
        full: "",
      },
    },
    compoundVariants: [
      { side: ["left", "right"], size: "sm", className: "w-3/4 sm:max-w-xs" },
      {
        side: ["left", "right"],
        size: "default",
        className: "w-3/4 sm:max-w-md",
      },
      { side: ["left", "right"], size: "lg", className: "w-full sm:max-w-xl" },
      { side: ["left", "right"], size: "full", className: "w-full" },
    ],
    defaultVariants: {
      side: "right",
      size: "default",
    },
  }
);

export interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetContentVariants> {
  hideCloseButton?: boolean;
  noShadow?: boolean;
}

/**
 * Neobrutalist Sheet slide-over panel supporting top, right, bottom, and left edges.
 */
export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      side = "right",
      size = "default",
      hideCloseButton = false,
      noShadow = false,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(
          sheetContentVariants({ side, size }),
          !noShadow && "shadow-brutal-lg",
          className
        )}
        {...props}
      >
        {children}
        {!hideCloseButton && (
          <SheetPrimitive.Close
            aria-label="Close sheet"
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md border-2 border-border bg-card text-foreground shadow-brutal-sm transition-all hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:pointer-events-none"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const sheetHeaderVariants = cva("flex flex-col space-y-1.5 text-left", {
  variants: {
    variant: {
      default: "pr-10",
      primary:
        "[&_[data-slot=sheet-description]]:text-primary-foreground/85 -mx-6 -mt-6 mb-2 border-b-2 border-border bg-primary px-6 py-4 pr-14 text-primary-foreground",
      secondary:
        "[&_[data-slot=sheet-description]]:text-secondary-foreground/80 -mx-6 -mt-6 mb-2 border-b-2 border-border bg-secondary px-6 py-4 pr-14 text-secondary-foreground",
      muted:
        "-mx-6 -mt-6 mb-2 border-b-2 border-border bg-muted px-6 py-4 pr-14 text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface SheetHeaderProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sheetHeaderVariants> {}

/**
 * Sheet header container with optional Neobrutalist accent background.
 */
export function SheetHeader({
  className,
  variant = "default",
  ...props
}: SheetHeaderProps) {
  return (
    <div
      className={cn(sheetHeaderVariants({ variant }), className)}
      {...props}
    />
  );
}
SheetHeader.displayName = "SheetHeader";

/**
 * Sheet footer row pinned to the bottom of the drawer for action buttons.
 */
export function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-auto flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}
SheetFooter.displayName = "SheetFooter";

/**
 * Accessible title heading for Sheet.
 */
export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-extrabold leading-tight tracking-tight",
      className
    )}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

/**
 * Accessible description text for Sheet.
 */
export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    data-slot="sheet-description"
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
