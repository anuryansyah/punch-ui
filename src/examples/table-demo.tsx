import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

const INVOICES = [
  { id: "INV-001", method: "Credit Card", status: "Paid", amount: "$250.00" },
  {
    id: "INV-002",
    method: "Bank Transfer",
    status: "Pending",
    amount: "$150.00",
  },
  { id: "INV-003", method: "PayPal", status: "Failed", amount: "$350.00" },
  { id: "INV-004", method: "Credit Card", status: "Paid", amount: "$450.00" },
];

const TEAM_MEMBERS = [
  {
    initials: "AM",
    name: "Alex Morgan",
    email: "alex@punch-ui.dev",
    role: "Owner",
    status: "Active",
  },
  {
    initials: "SC",
    name: "Sarah Connor",
    email: "sarah@punch-ui.dev",
    role: "Maintainer",
    status: "Active",
  },
  {
    initials: "JD",
    name: "John Doe",
    email: "john@punch-ui.dev",
    role: "Viewer",
    status: "Pending",
  },
];

/**
 * Overview demo
 */
export function TableDemo() {
  return <TableBasicDemo />;
}

/**
 * 1. Basic Table
 */
export function TableBasicDemo() {
  return (
    <div className="w-full max-w-2xl">
      <Table>
        <TableCaption>Recent workspace billing invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[110px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICES.map((inv) => (
            <TableRow key={inv.id}>
              <TableCell className="font-mono font-bold">{inv.id}</TableCell>
              <TableCell>
                <Badge
                  size="sm"
                  noShadow
                  variant={
                    inv.status === "Paid"
                      ? "success"
                      : inv.status === "Pending"
                        ? "warning"
                        : "danger"
                  }
                >
                  {inv.status}
                </Badge>
              </TableCell>
              <TableCell>{inv.method}</TableCell>
              <TableCell className="text-right font-mono font-bold">
                {inv.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right font-mono">$1,200.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

/**
 * 2. Header Variants
 */
export function TableHeaderVariantsDemo() {
  return (
    <div className="grid w-full max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">
      {(["secondary", "primary", "muted", "default"] as const).map(
        (variant) => (
          <Table key={variant} headerVariant={variant}>
            <TableHeader>
              <TableRow>
                <TableHead>headerVariant</TableHead>
                <TableHead className="text-right">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono font-bold">{variant}</TableCell>
                <TableCell className="text-right font-mono">100%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )
      )}
    </div>
  );
}

/**
 * 3. Grid & Striped
 */
export function TableGridStripedDemo() {
  return (
    <div className="w-full max-w-2xl">
      <Table grid striped>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICES.map((inv) => (
            <TableRow key={inv.id}>
              <TableCell className="font-mono font-bold">{inv.id}</TableCell>
              <TableCell>{inv.status}</TableCell>
              <TableCell>{inv.method}</TableCell>
              <TableCell className="text-right font-mono font-bold">
                {inv.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/**
 * 4. Hoverable
 */
export function TableHoverableDemo() {
  return (
    <div className="w-full max-w-2xl">
      <Table hoverable>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICES.map((inv) => (
            <TableRow key={inv.id}>
              <TableCell className="font-mono font-bold">{inv.id}</TableCell>
              <TableCell>{inv.status}</TableCell>
              <TableCell>{inv.method}</TableCell>
              <TableCell className="text-right font-mono font-bold">
                {inv.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/**
 * 5. Compact & No Shadow (Embedded inside Card)
 */
export function TableCompactDemo() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader variant="muted" className="py-3">
        <CardTitle className="text-sm">Compact Billing Summary</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table
          compact
          noShadow
          headerVariant="default"
          containerClassName="rounded-none border-0"
        >
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {INVOICES.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-mono font-bold">{inv.id}</TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right font-mono font-bold">
                  {inv.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

/**
 * 5. With Avatar & Actions
 */
export function TableActionsDemo() {
  return (
    <div className="w-full max-w-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TEAM_MEMBERS.map((member) => (
            <TableRow key={member.email}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" noShadow>
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold leading-tight">{member.name}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {member.email}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-mono text-xs font-bold">
                {member.role}
              </TableCell>
              <TableCell>
                <Badge
                  size="sm"
                  noShadow
                  variant={member.status === "Active" ? "success" : "warning"}
                >
                  {member.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8"
                  aria-label={`Actions for ${member.name}`}
                >
                  <MoreHorizontal className="h-4 w-4" strokeWidth={2.5} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
