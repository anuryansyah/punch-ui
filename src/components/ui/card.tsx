import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brutalCardStyles = cva(
  "overflow-hidden rounded-lg border-2 border-border transition-all",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        muted: "bg-muted text-foreground",
        success: "bg-success text-success-foreground",
        info: "bg-info text-info-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-destructive text-destructive-foreground",
      },
      noShadow: {
        true: "shadow-none",
        false: "shadow-brutal-sm md:shadow-brutal",
      },
      interactive: {
        true: "cursor-pointer hover:-translate-y-0.5 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      noShadow: false,
      interactive: false,
    },
  }
);

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof brutalCardStyles> {
  noShadow?: boolean;
  interactive?: boolean;
}

/**
 * Neobrutalist Card container with a 2px border, theme/status variants,
 * noShadow option, and interactive mode.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant, noShadow = false, interactive = false, ...rest },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        brutalCardStyles({ variant, noShadow, interactive }),
        className
      )}
      {...rest}
    />
  )
);
Card.displayName = "Card";

const brutalCardHeaderStyles = cva(
  "flex flex-col gap-1.5 border-b-2 border-border p-5",
  {
    variants: {
      variant: {
        default: "",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        muted: "bg-muted text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardHeaderProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof brutalCardHeaderStyles> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, variant, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(brutalCardHeaderStyles({ variant }), className)}
      {...rest}
    />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...rest }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-bold leading-tight tracking-tight", className)}
    {...rest}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...rest }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-muted-foreground", className)}
    {...rest}
  />
));
CardDescription.displayName = "CardDescription";

export const CardAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    className={cn("ml-auto flex shrink-0 items-center gap-2", className)}
    {...rest}
  />
));
CardAction.displayName = "CardAction";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div ref={ref} className={cn("p-5", className)} {...rest} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-muted/40 flex items-center border-t-2 border-border px-5 py-3.5",
      className
    )}
    {...rest}
  />
));
CardFooter.displayName = "CardFooter";
