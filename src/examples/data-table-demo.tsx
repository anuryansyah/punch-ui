"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

export interface PaymentRecord {
  id: string;
  customer: string;
  email: string;
  initials: string;
  status: "Paid" | "Pending" | "Failed";
  method: "Credit Card" | "Bank Transfer" | "PayPal";
  amount: number;
}

const PAYMENTS: PaymentRecord[] = [
  {
    id: "INV-001",
    customer: "Alex Morgan",
    email: "alex@punch-ui.dev",
    initials: "AM",
    status: "Paid",
    method: "Credit Card",
    amount: 250,
  },
  {
    id: "INV-002",
    customer: "Sarah Connor",
    email: "sarah@punch-ui.dev",
    initials: "SC",
    status: "Pending",
    method: "Bank Transfer",
    amount: 150,
  },
  {
    id: "INV-003",
    customer: "Marcus Vance",
    email: "marcus@punch-ui.dev",
    initials: "MV",
    status: "Failed",
    method: "PayPal",
    amount: 350,
  },
  {
    id: "INV-004",
    customer: "Elena Rostova",
    email: "elena@punch-ui.dev",
    initials: "ER",
    status: "Paid",
    method: "Credit Card",
    amount: 450,
  },
  {
    id: "INV-005",
    customer: "Liam Chen",
    email: "liam@punch-ui.dev",
    initials: "LC",
    status: "Paid",
    method: "Bank Transfer",
    amount: 195,
  },
  {
    id: "INV-006",
    customer: "Maya Lin",
    email: "maya@punch-ui.dev",
    initials: "ML",
    status: "Pending",
    method: "Credit Card",
    amount: 320,
  },
  {
    id: "INV-007",
    customer: "Noah Patel",
    email: "noah@punch-ui.dev",
    initials: "NP",
    status: "Paid",
    method: "PayPal",
    amount: 540,
  },
  {
    id: "INV-008",
    customer: "Chloe Park",
    email: "chloe@punch-ui.dev",
    initials: "CP",
    status: "Paid",
    method: "Credit Card",
    amount: 280,
  },
  {
    id: "INV-009",
    customer: "Lucas Meyer",
    email: "lucas@punch-ui.dev",
    initials: "LM",
    status: "Failed",
    method: "Bank Transfer",
    amount: 110,
  },
  {
    id: "INV-010",
    customer: "Zoe Alvarez",
    email: "zoe@punch-ui.dev",
    initials: "ZA",
    status: "Paid",
    method: "Credit Card",
    amount: 625,
  },
  {
    id: "INV-011",
    customer: "Ethan Brooks",
    email: "ethan@punch-ui.dev",
    initials: "EB",
    status: "Pending",
    method: "PayPal",
    amount: 215,
  },
  {
    id: "INV-012",
    customer: "Hannah Kim",
    email: "hannah@punch-ui.dev",
    initials: "HK",
    status: "Paid",
    method: "Credit Card",
    amount: 490,
  },
];

function StatusBadge({ status }: { status: PaymentRecord["status"] }) {
  return (
    <Badge
      size="sm"
      noShadow
      variant={
        status === "Paid"
          ? "success"
          : status === "Pending"
            ? "warning"
            : "destructive"
      }
    >
      {status}
    </Badge>
  );
}

const BASIC_COLUMNS: ColumnDef<PaymentRecord>[] = [
  {
    accessorKey: "id",
    header: "Invoice",
    cell: ({ row }) => (
      <span className="font-mono font-bold">{row.getValue("id")}</span>
    ),
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = Number(row.getValue("amount"));
      return (
        <div className="text-right font-mono font-bold">
          ${amount.toFixed(2)}
        </div>
      );
    },
  },
];

const SORTABLE_COLUMNS: ColumnDef<PaymentRecord>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice" />
    ),
    cell: ({ row }) => (
      <span className="font-mono font-bold">{row.getValue("id")}</span>
    ),
  },
  {
    accessorKey: "customer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2.5">
        <Avatar size="sm" noShadow>
          <AvatarFallback>{row.original.initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold leading-tight">{row.original.customer}</p>
          <p className="font-mono text-[11px] text-muted-foreground">
            {row.original.email}
          </p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <div className="text-right">
        <DataTableColumnHeader column={column} title="Amount" />
      </div>
    ),
    cell: ({ row }) => {
      const amount = Number(row.getValue("amount"));
      return (
        <div className="text-right font-mono font-bold">
          ${amount.toFixed(2)}
        </div>
      );
    },
  },
];

const SELECTION_COLUMNS: ColumnDef<PaymentRecord>[] = [
  {
    id: "select",
    enableHiding: false,
    header: ({ table }) => (
      <input
        type="checkbox"
        aria-label="Select all rows"
        checked={table.getIsAllPageRowsSelected()}
        onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
        className="h-4 w-4 cursor-pointer accent-primary"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        aria-label={`Select row ${row.original.id}`}
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(e.target.checked)}
        className="h-4 w-4 cursor-pointer accent-primary"
      />
    ),
  },
  ...SORTABLE_COLUMNS.slice(0, 4),
  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="text-right">Actions</div>,
    cell: () => (
      <div className="text-right">
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8"
          aria-label="Row actions"
        >
          <MoreHorizontal className="h-4 w-4" strokeWidth={2.5} />
        </Button>
      </div>
    ),
  },
];

/**
 * Overview demo
 */
export function DataTableDemo() {
  return <DataTablePaginationDemo />;
}

/**
 * 1. Basic Data Table
 */
export function DataTableBasicDemo() {
  return (
    <div className="w-full max-w-2xl">
      <DataTable columns={BASIC_COLUMNS} data={PAYMENTS.slice(0, 4)} />
    </div>
  );
}

/**
 * 2. Search & Sorting
 */
export function DataTableSortingSearchDemo() {
  return (
    <div className="w-full max-w-3xl">
      <DataTable
        columns={SORTABLE_COLUMNS}
        data={PAYMENTS.slice(0, 5)}
        searchKey="customer"
        searchPlaceholder="Search customer..."
        hoverable
      />
    </div>
  );
}

/**
 * 3. With Pagination
 */
export function DataTablePaginationDemo() {
  return (
    <div className="w-full max-w-3xl">
      <DataTable
        columns={SORTABLE_COLUMNS}
        data={PAYMENTS}
        searchKey="customer"
        searchPlaceholder="Filter invoices by customer..."
        paginated
        pageSize={4}
        pageSizeOptions={[4, 6, 12]}
        hoverable
      />
    </div>
  );
}

/**
 * 4. Row Selection
 */
export function DataTableSelectionDemo() {
  return (
    <div className="w-full max-w-3xl">
      <DataTable
        columns={SELECTION_COLUMNS}
        data={PAYMENTS.slice(0, 8)}
        enableRowSelection
        paginated
        pageSize={4}
        pageSizeOptions={[4, 8]}
        hoverable
      />
    </div>
  );
}

/**
 * 5. Column Visibility & Grid
 */
export function DataTableColumnsDemo() {
  return (
    <div className="w-full max-w-3xl">
      <DataTable
        columns={SORTABLE_COLUMNS}
        data={PAYMENTS.slice(0, 6)}
        searchKey="customer"
        searchPlaceholder="Search customer..."
        enableColumnVisibility
        grid
        striped
        hoverable
      />
    </div>
  );
}

/**
 * 6. Compact & No Shadow
 */
export function DataTableCompactDemo() {
  return (
    <div className="w-full max-w-3xl">
      <DataTable
        columns={BASIC_COLUMNS}
        data={PAYMENTS.slice(0, 8)}
        paginated
        pageSize={4}
        pageSizeOptions={[4, 8]}
        headerVariant="primary"
        compact
        noShadow
        striped
      />
    </div>
  );
}
