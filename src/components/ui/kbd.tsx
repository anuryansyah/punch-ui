import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const kbdVariants = cva(
  "inline-flex select-none items-center justify-center gap-1 whitespace-nowrap rounded-sm border-2 border-border font-mono font-bold leading-none",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        primary: "bg-primary text-primary-foreground",
        muted: "bg-muted text-muted-foreground",
      },
      size: {
        sm: "h-5 min-w-5 px-1.5 text-[10px]",
        default: "h-6 min-w-6 px-2 text-xs",
        lg: "h-8 min-w-8 px-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {
  noShadow?: boolean;
}

/**
 * Tactile Neobrutalist keyboard shortcut keycap (<kbd>).
 */
export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, variant, size, noShadow = false, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(
        kbdVariants({ variant, size }),
        !noShadow && "shadow-[0_2px_0_0_var(--border)]",
        className
      )}
      {...props}
    />
  )
);
Kbd.displayName = "Kbd";

export const KbdGroup = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("inline-flex items-center gap-1", className)}
    {...props}
  />
));
KbdGroup.displayName = "KbdGroup";
