"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;

/**
 * High-contrast dark backdrop overlay for Dialog.
 */
export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const dialogContentVariants = cva(
  "fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-hidden rounded-lg border-2 border-border bg-card p-6 text-card-foreground outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        default: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
      },
      noShadow: {
        true: "shadow-none",
        false: "shadow-brutal-lg",
      },
    },
    defaultVariants: {
      size: "default",
      noShadow: false,
    },
  }
);

export interface DialogContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  noShadow?: boolean;
  hideCloseButton?: boolean;
}

/**
 * Neobrutalist Dialog modal content with bold 2px border, large offset shadow, and crisp close button.
 */
export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(
  (
    {
      className,
      children,
      size = "default",
      noShadow = false,
      hideCloseButton = false,
      ...props
    },
    ref
  ) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(dialogContentVariants({ size, noShadow }), className)}
        {...props}
      >
        {children}
        {!hideCloseButton && (
          <DialogPrimitive.Close
            aria-label="Close dialog"
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md border-2 border-border bg-card text-foreground shadow-brutal-sm transition-all hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:pointer-events-none"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const dialogHeaderVariants = cva("flex flex-col space-y-1.5 text-left", {
  variants: {
    variant: {
      default: "pr-10",
      primary:
        "[&_[data-slot=dialog-description]]:text-primary-foreground/85 -mx-6 -mt-6 mb-2 border-b-2 border-border bg-primary px-6 py-4 pr-14 text-primary-foreground",
      secondary:
        "[&_[data-slot=dialog-description]]:text-secondary-foreground/80 -mx-6 -mt-6 mb-2 border-b-2 border-border bg-secondary px-6 py-4 pr-14 text-secondary-foreground",
      muted:
        "-mx-6 -mt-6 mb-2 border-b-2 border-border bg-muted px-6 py-4 pr-14 text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface DialogHeaderProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogHeaderVariants> {}

/**
 * Dialog header block with optional Neobrutalist accent background.
 */
export function DialogHeader({
  className,
  variant = "default",
  ...props
}: DialogHeaderProps) {
  return (
    <div
      className={cn(dialogHeaderVariants({ variant }), className)}
      {...props}
    />
  );
}
DialogHeader.displayName = "DialogHeader";

/**
 * Dialog footer row for action buttons.
 */
export function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}
DialogFooter.displayName = "DialogFooter";

/**
 * Accessible title heading for Dialog.
 */
export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-extrabold leading-tight tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

/**
 * Accessible description text for Dialog.
 */
export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    data-slot="dialog-description"
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
