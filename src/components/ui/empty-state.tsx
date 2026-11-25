import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const emptyStateVariants = cva(
  "flex w-full flex-col items-center justify-center rounded-lg text-center transition-colors",
  {
    variants: {
      variant: {
        default: "border-2 border-border bg-card text-card-foreground",
        dashed:
          "border-2 border-dashed border-border bg-card text-card-foreground",
        muted: "bg-muted/60 border-2 border-border text-foreground",
        ghost: "border-0 bg-transparent text-foreground",
      },
      size: {
        sm: "gap-2 px-4 py-6",
        default: "gap-3 px-6 py-10",
        lg: "gap-4 px-8 py-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface EmptyStateProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateVariants> {
  noShadow?: boolean;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    { className, variant = "default", size, noShadow = false, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        emptyStateVariants({ variant, size }),
        variant !== "ghost" && !noShadow && "shadow-brutal-sm md:shadow-brutal",
        className
      )}
      {...props}
    />
  )
);
EmptyState.displayName = "EmptyState";

const emptyStateIconVariants = cva(
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-md border-2 border-border [&_svg]:h-6 [&_svg]:w-6",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground",
        primary: "bg-primary text-primary-foreground",
        muted: "bg-muted text-muted-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        danger: "bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface EmptyStateIconProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateIconVariants> {
  noShadow?: boolean;
}

export const EmptyStateIcon = React.forwardRef<
  HTMLDivElement,
  EmptyStateIconProps
>(({ className, variant, noShadow = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      emptyStateIconVariants({ variant }),
      !noShadow && "shadow-brutal-sm",
      className
    )}
    {...props}
  />
));
EmptyStateIcon.displayName = "EmptyStateIcon";

export const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-base font-bold tracking-tight md:text-lg", className)}
    {...props}
  />
));
EmptyStateTitle.displayName = "EmptyStateTitle";

export const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "max-w-md text-xs text-muted-foreground md:text-sm",
      className
    )}
    {...props}
  />
));
EmptyStateDescription.displayName = "EmptyStateDescription";

export const EmptyStateActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-1 flex flex-wrap items-center justify-center gap-2.5",
      className
    )}
    {...props}
  />
));
EmptyStateActions.displayName = "EmptyStateActions";
