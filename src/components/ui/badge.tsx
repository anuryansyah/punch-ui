import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge Neobrutalism untuk label status, kategori, dan penghitung (counter)
 */
const brutalBadgeStyles = cva(
  [
    "inline-flex items-center gap-1.5 rounded-sm border-2 border-border",
    "font-bold uppercase tracking-wider transition-all",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-brutal-sm",
        secondary: "bg-secondary text-secondary-foreground shadow-brutal-sm",
        outline: "bg-card text-card-foreground shadow-brutal-sm",
        muted: "bg-muted text-muted-foreground shadow-none",
        success: "bg-success text-success-foreground shadow-brutal-sm",
        info: "bg-info text-info-foreground shadow-brutal-sm",
        warning: "bg-warning text-warning-foreground shadow-brutal-sm",
        danger: "bg-destructive text-destructive-foreground shadow-brutal-sm",
        destructive:
          "bg-destructive text-destructive-foreground shadow-brutal-sm",
      },
      size: {
        sm: "px-1.5 py-0 text-[10px]",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      noShadow: {
        true: "!shadow-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      noShadow: false,
    },
  }
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof brutalBadgeStyles> {
  /**
   * Menghilangkan bayangan keras pada varian warna apa pun
   */
  noShadow?: boolean;
  /**
   * Menampilkan indikator titik bulat di sebelah kiri teks
   */
  dot?: boolean;
  /**
   * Meneruskan kelas Badge ke elemen anak tunggal (misal <Link />)
   */
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      size,
      noShadow = false,
      dot = false,
      asChild = false,
      children,
      ...rest
    },
    ref
  ) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(
            brutalBadgeStyles({ variant, size, noShadow }),
            className
          )}
          {...rest}
        >
          {children}
        </Slot>
      );
    }

    return (
      <span
        ref={ref}
        className={cn(
          brutalBadgeStyles({ variant, size, noShadow }),
          className
        )}
        {...rest}
      >
        {dot && (
          <span
            aria-hidden="true"
            className="h-2 w-2 shrink-0 rounded-full border border-border bg-current"
          />
        )}
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";

export { brutalBadgeStyles as badgeVariants };
