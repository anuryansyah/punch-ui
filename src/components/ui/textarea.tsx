import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brutalTextareaStyles = cva(
  [
    "flex min-h-[96px] w-full rounded-md border-2 bg-card px-3.5 py-2.5 text-sm font-medium text-card-foreground outline-none transition-[box-shadow,border-color]",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      state: {
        default: "border-border shadow-brutal-sm focus-visible:shadow-brutal",
        error:
          "bg-destructive/5 shadow-brutal-error-sm focus-visible:shadow-brutal-error border-destructive",
        success:
          "bg-success/5 shadow-brutal-success-sm focus-visible:shadow-brutal-success border-success",
      },
      noShadow: {
        true: "!shadow-none focus-visible:!shadow-none",
        false: "",
      },
    },
    defaultVariants: {
      state: "default",
      noShadow: false,
    },
  }
);

export interface TextareaProps
  extends
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof brutalTextareaStyles> {
  noShadow?: boolean;
}

/**
 * Textarea Neobrutalism dengan dukungan status validasi (state) dan opsi noShadow.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, state, noShadow = false, ...rest }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={state === "error" || undefined}
      className={cn(brutalTextareaStyles({ state, noShadow }), className)}
      {...rest}
    />
  )
);
Textarea.displayName = "Textarea";

export { brutalTextareaStyles as textareaVariants };
