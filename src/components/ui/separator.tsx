import * as React from "react";
import { cn } from "@/lib/utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Divider orientation: horizontal (default) or vertical.
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Divider line style: solid (default), dashed, dotted, or muted.
   */
  variant?: "solid" | "dashed" | "dotted" | "muted";
  /**
   * Divider thickness: thin (1px), default (2px), or thick (4px).
   */
  thickness?: "thin" | "default" | "thick";
  /**
   * When true (default), treated as decorative by screen readers (role="none").
   * Set to false to expose role="separator".
   */
  decorative?: boolean;
  /**
   * Optional centered text or label element (horizontal orientation only).
   */
  label?: React.ReactNode;
}

const HORIZONTAL_THICKNESS = {
  thin: "border-t",
  default: "border-t-2",
  thick: "border-t-4",
} as const;

const VERTICAL_THICKNESS = {
  thin: "border-l",
  default: "border-l-2",
  thick: "border-l-4",
} as const;

const VARIANT_CLASSES = {
  solid: "border-solid border-border",
  dashed: "border-dashed border-border",
  dotted: "border-dotted border-border",
  muted: "border-solid border-muted-foreground/40",
} as const;

/**
 * Neobrutalist Separator with orientation, line style (solid/dashed/dotted/muted),
 * thickness (thin/default/thick), and centered label options.
 */
export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      className,
      orientation = "horizontal",
      variant = "solid",
      thickness = "default",
      decorative = true,
      label,
      children,
      ...rest
    },
    ref
  ) => {
    const centerContent = label ?? children;

    if (orientation === "horizontal" && centerContent) {
      const lineClass = cn(
        "h-0 flex-1",
        HORIZONTAL_THICKNESS[thickness],
        VARIANT_CLASSES[variant]
      );

      return (
        <div
          ref={ref}
          role={decorative ? "none" : "separator"}
          aria-orientation={decorative ? undefined : "horizontal"}
          className={cn("flex w-full items-center gap-3", className)}
          {...rest}
        >
          <span aria-hidden="true" className={lineClass} />
          <span className="shrink-0 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {centerContent}
          </span>
          <span aria-hidden="true" className={lineClass} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={decorative ? undefined : orientation}
        className={cn(
          "shrink-0",
          orientation === "horizontal"
            ? cn("h-0 w-full", HORIZONTAL_THICKNESS[thickness])
            : cn("h-full w-0", VERTICAL_THICKNESS[thickness]),
          VARIANT_CLASSES[variant],
          className
        )}
        {...rest}
      />
    );
  }
);
Separator.displayName = "Separator";
