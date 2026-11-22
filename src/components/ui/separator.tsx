import * as React from "react";
import { cn } from "@/lib/utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Orientasi garis pemisah: horizontal (default) atau vertical
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Gaya garis pemisah: solid (default), dashed, dotted, atau muted
   */
  variant?: "solid" | "dashed" | "dotted" | "muted";
  /**
   * Ketebalan garis pemisah: thin (1px), default (2px), atau thick (4px)
   */
  thickness?: "thin" | "default" | "thick";
  /**
   * Jika true (default), dianggap dekoratif oleh pembaca layar (role="none").
   * Set false untuk menyertakan role="separator".
   */
  decorative?: boolean;
  /**
   * Teks atau elemen label opsional di tengah garis (khusus orientasi horizontal)
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
 * Garis pemisah Neobrutalism dengan opsi orientasi, gaya garis (solid/dashed/dotted/muted),
 * ketebalan (thin/default/thick), serta label di tengah.
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
