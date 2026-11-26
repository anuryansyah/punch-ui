import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Pagination navigation container (<nav role="navigation" aria-label="pagination">).
 */
export const Pagination = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav">
>(({ className, ...rest }, ref) => (
  <nav
    ref={ref}
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...rest}
  />
));
Pagination.displayName = "Pagination";

export const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...rest }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-wrap items-center gap-2", className)}
    {...rest}
  />
));
PaginationContent.displayName = "PaginationContent";

export const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...rest }, ref) => (
  <li ref={ref} className={cn("inline-flex", className)} {...rest} />
));
PaginationItem.displayName = "PaginationItem";

export interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  size?: ButtonProps["size"];
  noShadow?: boolean;
  disabled?: boolean;
  asChild?: boolean;
}

export const PaginationLink = React.forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(
  (
    {
      className,
      isActive = false,
      size = "icon",
      noShadow = false,
      disabled = false,
      asChild = false,
      onClick,
      ...rest
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        aria-current={isActive ? "page" : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : rest.tabIndex}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          onClick?.(e);
        }}
        className={cn(
          buttonVariants({
            variant: isActive ? "default" : "outline",
            size,
            noShadow,
          }),
          "cursor-pointer select-none font-mono",
          disabled && "pointer-events-none opacity-50",
          className
        )}
        {...rest}
      />
    );
  }
);
PaginationLink.displayName = "PaginationLink";

export interface PaginationNavProps extends PaginationLinkProps {
  iconOnly?: boolean;
}

export const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  PaginationNavProps
>(
  (
    { className, size = "default", iconOnly = false, children, ...rest },
    ref
  ) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to previous page"
      size={iconOnly ? (size === "sm" ? "sm" : "icon") : size}
      className={cn(
        iconOnly ? (size === "sm" ? "w-8 px-0" : "") : "gap-1.5 px-3",
        className
      )}
      {...rest}
    >
      <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
      {!iconOnly && <span>{children ?? "Previous"}</span>}
    </PaginationLink>
  )
);
PaginationPrevious.displayName = "PaginationPrevious";

export const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  PaginationNavProps
>(
  (
    { className, size = "default", iconOnly = false, children, ...rest },
    ref
  ) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to next page"
      size={iconOnly ? (size === "sm" ? "sm" : "icon") : size}
      className={cn(
        iconOnly ? (size === "sm" ? "w-8 px-0" : "") : "gap-1.5 px-3",
        className
      )}
      {...rest}
    >
      {!iconOnly && <span>{children ?? "Next"}</span>}
      <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
    </PaginationLink>
  )
);
PaginationNext.displayName = "PaginationNext";

export const PaginationFirst = React.forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(({ className, size = "icon", ...rest }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to first page"
    size={size}
    className={className}
    {...rest}
  >
    <ChevronsLeft className="h-4 w-4" strokeWidth={2.5} />
  </PaginationLink>
));
PaginationFirst.displayName = "PaginationFirst";

export const PaginationLast = React.forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(({ className, size = "icon", ...rest }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to last page"
    size={size}
    className={className}
    {...rest}
  >
    <ChevronsRight className="h-4 w-4" strokeWidth={2.5} />
  </PaginationLink>
));
PaginationLast.displayName = "PaginationLast";

export const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...rest }, ref) => (
  <span
    ref={ref}
    aria-hidden="true"
    className={cn(
      "flex h-10 w-10 items-center justify-center rounded-md border-2 border-transparent font-mono text-muted-foreground",
      className
    )}
    {...rest}
  >
    <MoreHorizontal className="h-4 w-4" strokeWidth={2.5} />
    <span className="sr-only">More pages</span>
  </span>
));
PaginationEllipsis.displayName = "PaginationEllipsis";
