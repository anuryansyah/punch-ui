import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonGroupVariants = cva(
  [
    "inline-flex w-fit items-stretch rounded-md",
    "[&>*]:!shadow-none [&>*]:active:!translate-x-0 [&>*]:active:!translate-y-0",
    "[&>*:focus-visible]:relative [&>*:focus-visible]:z-10",
  ].join(" "),
  {
    variants: {
      orientation: {
        horizontal:
          "flex-row [&>*:not(:first-child)]:-ml-[2px] [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:-mt-[2px] [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none",
      },
      noShadow: {
        true: "shadow-none",
        false: "shadow-brutal-sm md:shadow-brutal",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      noShadow: false,
    },
  }
);

export interface ButtonGroupProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  noShadow?: boolean;
}

/**
 * Neobrutalist ButtonGroup that seamlessly joins adjacent Buttons, Inputs, and Addons
 * with collapsed 2px borders and a single unified offset shadow.
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    { className, orientation = "horizontal", noShadow = false, ...props },
    ref
  ) => (
    <div
      ref={ref}
      role="group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation, noShadow }), className)}
      {...props}
    />
  )
);
ButtonGroup.displayName = "ButtonGroup";

export interface ButtonGroupTextProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

/**
 * Static text or icon addon block designed to sit flush inside a ButtonGroup.
 */
export const ButtonGroupText = React.forwardRef<
  HTMLDivElement,
  ButtonGroupTextProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border-2 border-border bg-muted px-3 font-mono text-xs font-bold text-foreground",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
});
ButtonGroupText.displayName = "ButtonGroupText";

export interface ButtonGroupSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

/**
 * Explicit 2px divider for separating visual sections inside a ButtonGroup.
 */
export const ButtonGroupSeparator = React.forwardRef<
  HTMLDivElement,
  ButtonGroupSeparatorProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    aria-orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "vertical" ? "w-[2px] self-stretch" : "h-[2px] w-full",
      className
    )}
    {...props}
  />
));
ButtonGroupSeparator.displayName = "ButtonGroupSeparator";
