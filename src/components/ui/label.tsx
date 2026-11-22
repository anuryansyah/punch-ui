import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

/**
 * Label formulir dengan tipografi bold kontras tinggi
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...rest }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-xs font-bold uppercase tracking-wider text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-60",
        className
      )}
      {...rest}
    />
  )
);
Label.displayName = "Label";
