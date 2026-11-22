import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Definisi variasi tombol bergaya Neobrutalism:
 * - Garis tepi 2px mengikuti variabel --border
 * - Efek tekan mekanis (translate ke arah bayangan saat active)
 * - Prop `noShadow` dapat dikombinasikan dengan semua varian warna
 */
const brutalButtonStyles = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md border-2 border-border text-sm font-bold transition-all",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:shadow-brutal",
        secondary:
          "bg-secondary text-secondary-foreground shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:shadow-brutal",
        outline:
          "bg-card text-card-foreground shadow-brutal-sm hover:bg-muted active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:shadow-brutal",
        noShadow:
          "bg-primary text-primary-foreground shadow-none hover:brightness-95",
        ghost:
          "border-transparent bg-transparent text-foreground shadow-none hover:border-border hover:bg-muted",
        success:
          "bg-success text-success-foreground shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:shadow-brutal",
        info: "bg-info text-info-foreground shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:shadow-brutal",
        warning:
          "bg-warning text-warning-foreground shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:shadow-brutal",
        danger:
          "bg-destructive text-destructive-foreground shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:shadow-brutal",
        destructive:
          "bg-destructive text-destructive-foreground shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:shadow-brutal",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3.5 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
      noShadow: {
        true: "!shadow-none hover:brightness-95 active:!translate-x-0 active:!translate-y-0",
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

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brutalButtonStyles> {
  /**
   * Merender elemen child sebagai root tombol (menggunakan Radix Slot)
   */
  asChild?: boolean;
  /**
   * Menghilangkan bayangan keras dan efek geser tekan pada varian warna apa pun
   * (misal: <Button variant="danger" noShadow />)
   */
  noShadow?: boolean;
  /**
   * Menampilkan indikator loading spinner dan menonaktifkan interaksi tombol
   */
  isLoading?: boolean;
  /**
   * Teks opsional pengganti children saat isLoading bernilai true
   */
  loadingText?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      noShadow = false,
      asChild = false,
      isLoading = false,
      loadingText,
      disabled,
      children,
      ...rest
    },
    ref
  ) => {
    const resolvedNoShadow = noShadow || variant === "noShadow";

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(
            brutalButtonStyles({
              variant,
              size,
              noShadow: resolvedNoShadow,
            }),
            className
          )}
          {...rest}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        className={cn(
          brutalButtonStyles({
            variant,
            size,
            noShadow: resolvedNoShadow,
          }),
          className
        )}
        {...rest}
      >
        {isLoading && (
          <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
        )}
        {isLoading && loadingText ? loadingText : children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { brutalButtonStyles as buttonVariants };
