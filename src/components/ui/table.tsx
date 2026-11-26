"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TableHeaderVariant = "secondary" | "primary" | "muted" | "default";

interface TableContextValue {
  headerVariant: TableHeaderVariant;
  grid: boolean;
  striped: boolean;
  hoverable: boolean;
  compact: boolean;
}

const TableContext = React.createContext<TableContextValue>({
  headerVariant: "secondary",
  grid: false,
  striped: false,
  hoverable: false,
  compact: false,
});

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /**
   * Table header background color: secondary (default), primary, muted, or default.
   */
  headerVariant?: TableHeaderVariant;
  /**
   * Adds vertical dividers between columns in addition to horizontal borders.
   */
  grid?: boolean;
  /**
   * Applies alternating background shading to even rows.
   */
  striped?: boolean;
  /**
   * Highlights table rows on pointer hover.
   */
  hoverable?: boolean;
  /**
   * Reduces cell padding for denser tables.
   */
  compact?: boolean;
  /**
   * Removes the hard drop shadow on the outer table container.
   */
  noShadow?: boolean;
  /**
   * Additional classes for the outer table container wrapper.
   */
  containerClassName?: string;
}

const HEADER_VARIANT_CLASSES: Record<TableHeaderVariant, string> = {
  secondary: "bg-secondary text-secondary-foreground",
  primary: "bg-primary text-primary-foreground",
  muted: "bg-muted text-foreground",
  default: "bg-card text-card-foreground",
};

/**
 * Neobrutalist Table component with crisp 2px borders, header color variants,
 * vertical grid option, striped rows, compact mode, and noShadow.
 */
export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      containerClassName,
      headerVariant = "secondary",
      grid = false,
      striped = false,
      hoverable = false,
      compact = false,
      noShadow = false,
      ...rest
    },
    ref
  ) => (
    <TableContext.Provider
      value={{ headerVariant, grid, striped, hoverable, compact }}
    >
      <div
        className={cn(
          "relative w-full overflow-x-auto rounded-lg border-2 border-border bg-card text-card-foreground",
          noShadow ? "shadow-none" : "shadow-brutal-sm md:shadow-brutal",
          containerClassName
        )}
      >
        <table
          ref={ref}
          className={cn(
            "w-full caption-bottom border-collapse text-sm",
            className
          )}
          {...rest}
        />
      </div>
    </TableContext.Provider>
  )
);
Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...rest }, ref) => {
  const { headerVariant } = React.useContext(TableContext);
  return (
    <thead
      ref={ref}
      className={cn(
        "border-b-2 border-border [&_tr]:border-b-0 [&_tr]:even:bg-transparent [&_tr]:hover:bg-transparent",
        HEADER_VARIANT_CLASSES[headerVariant],
        className
      )}
      {...rest}
    />
  );
});
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...rest }, ref) => (
  <tbody
    ref={ref}
    className={cn("divide-y-2 divide-border", className)}
    {...rest}
  />
));
TableBody.displayName = "TableBody";

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...rest }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "bg-muted/60 border-t-2 border-border font-bold text-foreground [&>tr]:last:border-b-0",
      className
    )}
    {...rest}
  />
));
TableFooter.displayName = "TableFooter";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...rest }, ref) => {
  const { striped, hoverable } = React.useContext(TableContext);
  return (
    <tr
      ref={ref}
      className={cn(
        "data-[state=selected]:bg-secondary/40 transition-colors",
        striped && "even:bg-muted",
        hoverable && "cursor-pointer hover:bg-muted",
        className
      )}
      {...rest}
    />
  );
});
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...rest }, ref) => {
  const { grid, compact } = React.useContext(TableContext);
  return (
    <th
      ref={ref}
      className={cn(
        "text-left align-middle font-mono text-xs font-bold uppercase tracking-wider",
        compact ? "h-9 px-3 py-2" : "h-11 px-4 py-3",
        grid && "border-r-2 border-border last:border-r-0",
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...rest}
    />
  );
});
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...rest }, ref) => {
  const { grid, compact } = React.useContext(TableContext);
  return (
    <td
      ref={ref}
      className={cn(
        "align-middle text-xs font-medium md:text-sm",
        compact ? "px-3 py-2" : "px-4 py-3",
        grid && "border-r-2 border-border last:border-r-0",
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...rest}
    />
  );
});
TableCell.displayName = "TableCell";

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...rest }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "bg-muted/30 border-t-2 border-border px-4 py-2.5 text-left font-mono text-xs text-muted-foreground",
      className
    )}
    {...rest}
  />
));
TableCaption.displayName = "TableCaption";
