import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brutalInputStyles = cva(
  [
    "flex w-full overflow-hidden rounded-md border-2 bg-card font-medium text-card-foreground outline-none transition-[box-shadow,border-color]",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[&[type=file]]:p-0 [&[type=file]]:pr-3.5",
    "file:mr-3.5 file:h-full file:cursor-pointer file:rounded-none file:border-0 file:border-r-2 file:border-solid file:border-border file:bg-secondary file:px-3.5 file:font-sans file:text-xs file:font-bold file:text-secondary-foreground file:transition-colors hover:file:bg-primary hover:file:text-primary-foreground",
  ].join(" "),
  {
    variants: {
      inputSize: {
        sm: "h-8 px-2.5 py-1 text-xs",
        default: "h-10 px-3.5 py-2 text-sm",
        lg: "h-12 px-4 py-2.5 text-base",
      },
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
      inputSize: "default",
      state: "default",
      noShadow: false,
    },
  }
);

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof brutalInputStyles> {
  noShadow?: boolean;
}

/**
 * Neobrutalist Input with size options (inputSize), validation states (state),
 * built-in file upload styling, and noShadow option.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", inputSize, state, noShadow = false, ...rest },
    ref
  ) => (
    <input
      ref={ref}
      type={type}
      aria-invalid={state === "error" || undefined}
      className={cn(
        brutalInputStyles({ inputSize, state, noShadow }),
        className
      )}
      {...rest}
    />
  )
);
Input.displayName = "Input";

export { brutalInputStyles as inputVariants };
