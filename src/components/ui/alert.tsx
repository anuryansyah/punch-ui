"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  [
    "relative w-full rounded-md border-2 border-border px-4 py-3.5 text-sm",
    "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg~*]:pl-7",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        info: "bg-info text-info-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-destructive text-destructive-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
      noShadow: {
        true: "shadow-none",
        false: "shadow-brutal-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      noShadow: false,
    },
  }
);

export interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  noShadow?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
}

/**
 * Neobrutalist static Alert banner with semantic status variants and optional dismiss action.
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = "default",
      noShadow = false,
      dismissible = false,
      onDismiss,
      children,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        alertVariants({ variant, noShadow }),
        dismissible && "pr-11",
        className
      )}
      {...props}
    >
      {children}
      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss alert"
          onClick={onDismiss}
          className="border-current/30 absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-sm border-2 transition-colors hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <X className="h-3.5 w-3.5" strokeWidth={2.5} />
        </button>
      )}
    </div>
  )
);
Alert.displayName = "Alert";

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-1 font-extrabold leading-tight tracking-tight",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-xs leading-relaxed opacity-90 [&_p]:leading-relaxed",
      className
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";
