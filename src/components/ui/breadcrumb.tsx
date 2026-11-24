"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbVariant = "default" | "contained" | "pills";

interface BreadcrumbContextValue {
  variant: BreadcrumbVariant;
  noShadow: boolean;
}

const BreadcrumbContext = React.createContext<BreadcrumbContextValue>({
  variant: "default",
  noShadow: false,
});

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  variant?: BreadcrumbVariant;
  noShadow?: boolean;
}

/**
 * Neobrutalist Breadcrumb navigation container supporting default, contained, and physical pills variants.
 */
export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, variant = "default", noShadow = false, ...props }, ref) => (
    <BreadcrumbContext.Provider value={{ variant, noShadow }}>
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn(
          variant === "contained" &&
            cn(
              "inline-flex rounded-md border-2 border-border bg-card px-3.5 py-2",
              !noShadow && "shadow-brutal-sm"
            ),
          className
        )}
        {...props}
      />
    </BreadcrumbContext.Provider>
  )
);
Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(BreadcrumbContext);
  return (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center break-words text-sm font-semibold text-muted-foreground",
        variant === "pills" ? "gap-2" : "gap-1.5 sm:gap-2",
        className
      )}
      {...props}
    />
  );
});
BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  const { variant, noShadow } = React.useContext(BreadcrumbContext);

  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variant === "pills"
          ? cn(
              "rounded-md border-2 border-border bg-card px-2.5 py-1 text-xs font-bold text-card-foreground hover:bg-secondary hover:text-secondary-foreground",
              !noShadow &&
                "shadow-brutal-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            )
          : "rounded-sm px-1 py-0.5 hover:bg-secondary hover:text-secondary-foreground",
        className
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => {
  const { variant, noShadow } = React.useContext(BreadcrumbContext);

  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        "inline-flex items-center gap-1.5 font-extrabold",
        variant === "pills"
          ? cn(
              "rounded-md border-2 border-border bg-primary px-2.5 py-1 text-xs text-primary-foreground",
              !noShadow && "shadow-brutal-sm"
            )
          : "text-foreground",
        className
      )}
      {...props}
    />
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn("text-foreground [&>svg]:h-3.5 [&>svg]:w-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight strokeWidth={2.5} />}
    </li>
  );
}
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded-sm border-2 border-border bg-muted text-foreground",
        className
      )}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" strokeWidth={2.5} />
      <span className="sr-only">More</span>
    </span>
  );
}
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
