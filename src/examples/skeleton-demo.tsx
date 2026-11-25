"use client";

import * as React from "react";
import { RefreshCw } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function SkeletonBasicDemo() {
  return (
    <div className="mx-auto flex w-full max-w-sm items-center gap-4">
      <Skeleton shape="circle" className="h-12 w-12 shrink-0" />
      <div className="flex-1 space-y-2.5">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3.5 w-1/2" />
      </div>
    </div>
  );
}

export function SkeletonCardDemo() {
  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden">
      <div className="border-b-2 border-border p-5">
        <Skeleton variant="flat" className="h-36 w-full" />
      </div>
      <CardHeader className="space-y-2.5 border-b-0 pb-3">
        <Skeleton variant="flat" className="h-5 w-2/3" />
        <Skeleton variant="flat" className="h-3.5 w-full" />
        <Skeleton variant="flat" className="h-3.5 w-4/5" />
      </CardHeader>
      <CardFooter className="justify-between">
        <Skeleton variant="flat" className="h-6 w-20" />
        <Skeleton variant="flat" className="h-9 w-24" />
      </CardFooter>
    </Card>
  );
}

const TABLE_SKELETON_ROWS = [
  { release: "w-16", service: "w-28", region: "w-20", status: "w-14" },
  { release: "w-14", service: "w-24", region: "w-24", status: "w-16" },
  { release: "w-16", service: "w-32", region: "w-16", status: "w-14" },
  { release: "w-14", service: "w-20", region: "w-20", status: "w-16" },
];

export function SkeletonTableDemo() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Release</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Region</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TABLE_SKELETON_ROWS.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <Skeleton variant="flat" className={`h-4 ${row.release}`} />
              </TableCell>
              <TableCell>
                <Skeleton variant="flat" className={`h-4 ${row.service}`} />
              </TableCell>
              <TableCell>
                <Skeleton variant="flat" className={`h-4 ${row.region}`} />
              </TableCell>
              <TableCell>
                <div className="flex justify-end">
                  <Skeleton variant="flat" className={`h-5 ${row.status}`} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function SkeletonInteractiveDemo() {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setLoading((prev) => !prev)}
      >
        <RefreshCw className="h-3.5 w-3.5" strokeWidth={2.5} />
        {loading ? "Show Loaded State" : "Show Skeleton State"}
      </Button>

      <Card className="w-full">
        <CardHeader className="flex-row items-center gap-3.5 space-y-0">
          {loading ? (
            <>
              <Skeleton
                shape="circle"
                variant="flat"
                className="h-11 w-11 shrink-0"
              />
              <div className="flex-1 space-y-2">
                <Skeleton variant="flat" className="h-4 w-36" />
                <Skeleton variant="flat" className="h-3 w-48" />
              </div>
            </>
          ) : (
            <>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  AM
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-base">Alex Morgan</CardTitle>
                  <Badge variant="success" size="sm" noShadow>
                    ONLINE
                  </Badge>
                </div>
                <CardDescription>
                  Lead Maintainer • Punch UI Core
                </CardDescription>
              </div>
            </>
          )}
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <Skeleton variant="flat" className="h-3.5 w-full" />
              <Skeleton variant="flat" className="h-3.5 w-5/6" />
            </div>
          ) : (
            <p className="text-xs leading-relaxed text-muted-foreground">
              Building bold Neobrutalist components with accessible Radix
              primitives, 6 live theme presets, and zero runtime bloat.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
