"use client";

import * as React from "react";
import {
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type Table as TanStackTable,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Columns3,
  Search,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  type TableProps,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

/**
 * Generates visible page numbers with ellipsis markers for large page counts.
 */
function getPageNumbers(
  currentPage: number,
  totalPages: number
): (number | "ellipsis")[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [1];

  if (currentPage > 3) {
    pages.push("ellipsis");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i += 1) {
    pages.push(i);
  }

  if (currentPage < totalPages - 2) {
    pages.push("ellipsis");
  }

  pages.push(totalPages);
  return pages;
}

export interface DataTableColumnHeaderProps<
  TData,
  TValue,
> extends React.HTMLAttributes<HTMLButtonElement> {
  column: Column<TData, TValue>;
  title: string;
}

/**
 * Sortable column header button for TanStack Table columns.
 */
export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
  ...rest
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <span className={className}>{title}</span>;
  }

  const sorted = column.getIsSorted();

  return (
    <button
      type="button"
      onClick={() => column.toggleSorting(sorted === "asc")}
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-75 focus-visible:underline focus-visible:outline-none",
        className
      )}
      {...rest}
    >
      <span>{title}</span>
      {sorted === "desc" ? (
        <ArrowDown className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
      ) : sorted === "asc" ? (
        <ArrowUp className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
      ) : (
        <ArrowUpDown
          className="h-3.5 w-3.5 shrink-0 opacity-60"
          strokeWidth={2.5}
        />
      )}
    </button>
  );
}

export interface DataTablePaginationProps<TData> {
  table: TanStackTable<TData>;
  pageSizeOptions?: number[];
  noShadow?: boolean;
  showSelectedCount?: boolean;
}

/**
 * Pagination footer bar powered by Punch UI Pagination primitives.
 */
export function DataTablePagination<TData>({
  table,
  pageSizeOptions = [5, 10, 20],
  noShadow = false,
  showSelectedCount = false,
}: DataTablePaginationProps<TData>) {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const pageCount = Math.max(1, table.getPageCount());
  const currentPage = pageIndex + 1;
  const totalRows = table.getFilteredRowModel().rows.length;
  const selectedRows = table.getFilteredSelectedRowModel().rows.length;
  const pageNumbers = getPageNumbers(currentPage, pageCount);

  const startRow = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold text-muted-foreground">
        <span>
          {showSelectedCount && selectedRows > 0
            ? `${selectedRows} of ${totalRows} selected`
            : `Showing ${startRow}-${endRow} of ${totalRows}`}
        </span>

        <label className="inline-flex items-center gap-2">
          <span>Rows</span>
          <select
            aria-label="Rows per page"
            value={pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className={cn(
              "h-8 rounded-md border-2 border-border bg-card px-2 font-mono text-xs font-bold text-card-foreground focus-visible:outline-none",
              !noShadow && "shadow-brutal-sm"
            )}
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Pagination className="mx-0 w-auto justify-start sm:justify-end">
        <PaginationContent className="gap-1.5">
          <PaginationItem>
            <PaginationFirst
              href="#first-page"
              size="sm"
              className="w-8 px-0"
              noShadow={noShadow}
              disabled={!table.getCanPreviousPage()}
              onClick={(e) => {
                e.preventDefault();
                table.setPageIndex(0);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              href="#prev-page"
              size="sm"
              iconOnly
              noShadow={noShadow}
              disabled={!table.getCanPreviousPage()}
              onClick={(e) => {
                e.preventDefault();
                table.previousPage();
              }}
            />
          </PaginationItem>

          {pageNumbers.map((page, index) =>
            page === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis className="h-8 w-8" />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`#page-${page}`}
                  size="sm"
                  className="min-w-8 px-2"
                  noShadow={noShadow}
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    table.setPageIndex(page - 1);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              href="#next-page"
              size="sm"
              iconOnly
              noShadow={noShadow}
              disabled={!table.getCanNextPage()}
              onClick={(e) => {
                e.preventDefault();
                table.nextPage();
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLast
              href="#last-page"
              size="sm"
              className="w-8 px-0"
              noShadow={noShadow}
              disabled={!table.getCanNextPage()}
              onClick={(e) => {
                e.preventDefault();
                table.setPageIndex(pageCount - 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey?: string;
  searchPlaceholder?: string;
  paginated?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  enableColumnVisibility?: boolean;
  enableRowSelection?: boolean;
  toolbarActions?: React.ReactNode;
  headerVariant?: TableProps["headerVariant"];
  grid?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
  noShadow?: boolean;
  emptyMessage?: string;
  className?: string;
}

/**
 * Neobrutalist Data Table powered by @tanstack/react-table and Punch UI primitives.
 */
export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Search...",
  paginated = false,
  pageSize = 5,
  pageSizeOptions = [5, 10, 20],
  enableColumnVisibility = false,
  enableRowSelection = false,
  toolbarActions,
  headerVariant = "secondary",
  grid = false,
  striped = false,
  hoverable = false,
  compact = false,
  noShadow = false,
  emptyMessage = "No results found.",
  className,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });

  const [columnsMenuOpen, setColumnsMenuOpen] = React.useState(false);
  const columnsMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setPagination((prev) => ({ ...prev, pageSize }));
  }, [pageSize]);

  React.useEffect(() => {
    if (!columnsMenuOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        columnsMenuRef.current &&
        !columnsMenuRef.current.contains(event.target as Node)
      ) {
        setColumnsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [columnsMenuOpen]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      ...(paginated ? { pagination } : {}),
    },
    enableRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...(paginated ? { getPaginationRowModel: getPaginationRowModel() } : {}),
  });

  const searchColumn = searchKey ? table.getColumn(searchKey) : undefined;
  const searchValue = (searchColumn?.getFilterValue() as string) ?? "";
  const showToolbar = Boolean(
    searchKey || enableColumnVisibility || toolbarActions
  );
  const selectedCount = table.getFilteredSelectedRowModel().rows.length;
  const totalFilteredCount = table.getFilteredRowModel().rows.length;

  return (
    <div className={cn("w-full space-y-3", className)}>
      {showToolbar && (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {searchKey ? (
            <div className="relative w-full sm:max-w-xs">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                strokeWidth={2.5}
              />
              <Input
                inputSize="sm"
                noShadow={noShadow}
                value={searchValue}
                onChange={(e) => {
                  searchColumn?.setFilterValue(e.target.value);
                  if (paginated) {
                    table.setPageIndex(0);
                  }
                }}
                placeholder={searchPlaceholder}
                className="pl-9 pr-8"
              />
              {searchValue && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => {
                    searchColumn?.setFilterValue("");
                    if (paginated) {
                      table.setPageIndex(0);
                    }
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                </button>
              )}
            </div>
          ) : (
            <div />
          )}

          <div className="flex flex-wrap items-center gap-2">
            {toolbarActions}
            {enableColumnVisibility && (
              <div ref={columnsMenuRef} className="relative">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  noShadow={noShadow}
                  onClick={() => setColumnsMenuOpen((prev) => !prev)}
                >
                  <Columns3 className="h-3.5 w-3.5" strokeWidth={2.5} />
                  Columns
                </Button>

                {columnsMenuOpen && (
                  <div
                    className={cn(
                      "absolute right-0 z-30 mt-2 w-44 rounded-md border-2 border-border bg-card p-2 text-card-foreground",
                      !noShadow && "shadow-brutal"
                    )}
                  >
                    <p className="mb-1.5 border-b-2 border-border px-1.5 pb-1 font-mono text-[11px] font-bold uppercase text-muted-foreground">
                      Toggle Columns
                    </p>
                    <div className="space-y-1">
                      {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => (
                          <label
                            key={column.id}
                            className="flex cursor-pointer items-center gap-2 rounded-sm px-1.5 py-1 text-xs font-medium capitalize hover:bg-muted"
                          >
                            <input
                              type="checkbox"
                              checked={column.getIsVisible()}
                              onChange={(e) =>
                                column.toggleVisibility(e.target.checked)
                              }
                              className="h-3.5 w-3.5 accent-primary"
                            />
                            <span className="truncate">{column.id}</span>
                          </label>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <Table
        headerVariant={headerVariant}
        grid={grid}
        striped={striped}
        hoverable={hoverable}
        compact={compact}
        noShadow={noShadow}
      >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center font-mono text-xs font-bold text-muted-foreground"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {paginated ? (
        <DataTablePagination
          table={table}
          pageSizeOptions={pageSizeOptions}
          noShadow={noShadow}
          showSelectedCount={enableRowSelection}
        />
      ) : (
        enableRowSelection && (
          <p className="font-mono text-xs font-bold text-muted-foreground">
            {selectedCount} of {totalFilteredCount} row(s) selected.
          </p>
        )
      )}
    </div>
  );
}
