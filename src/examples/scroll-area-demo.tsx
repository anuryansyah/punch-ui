"use client";

import React, { useState } from "react";
import { ScrollArea, type ScrollbarSize } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const DEPLOY_LOGS = [
  { id: "REL-101", service: "auth-gateway", status: "Active" },
  { id: "REL-102", service: "payment-worker", status: "Active" },
  { id: "REL-103", service: "invoice-pdf", status: "Pending" },
  { id: "REL-104", service: "inventory-sync", status: "Active" },
  { id: "REL-105", service: "webhook-dispatcher", status: "Error" },
  { id: "REL-106", service: "analytics-ingest", status: "Active" },
  { id: "REL-107", service: "notification-hub", status: "Active" },
  { id: "REL-108", service: "audit-trail-db", status: "Pending" },
  { id: "REL-109", service: "cdn-purger", status: "Active" },
];

const PIPELINE_STAGES = [
  "1. Lint & Typecheck",
  "2. Unit Testing",
  "3. Build Registry JSON",
  "4. Docker Image",
  "5. Canary Deploy",
  "6. Production Rollout",
];

const SIZE_OPTIONS: { label: string; value: ScrollbarSize }[] = [
  { label: "6px (Custom)", value: 6 },
  { label: "sm (8px)", value: "sm" },
  { label: "md (10px)", value: "md" },
  { label: "lg (14px)", value: "lg" },
];

/**
 * Overview demo
 */
export function ScrollAreaDemo() {
  return <ScrollAreaVerticalDemo />;
}

/**
 * 1. Vertical Scroll
 */
export function ScrollAreaVerticalDemo() {
  return (
    <ScrollArea className="h-60 w-full max-w-sm" viewportClassName="p-4">
      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider">
        Deployment History
      </h4>
      <div className="space-y-2.5">
        {DEPLOY_LOGS.map((item, idx) => (
          <div key={item.id} className="space-y-2.5">
            <div className="flex items-center justify-between gap-2 text-xs">
              <div>
                <span className="font-mono font-bold">{item.id}</span>
                <p className="text-muted-foreground">{item.service}</p>
              </div>
              <Badge
                noShadow
                size="sm"
                variant={
                  item.status === "Error"
                    ? "destructive"
                    : item.status === "Pending"
                      ? "warning"
                      : "success"
                }
              >
                {item.status}
              </Badge>
            </div>
            {idx < DEPLOY_LOGS.length - 1 && (
              <Separator variant="muted" thickness="thin" />
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

/**
 * 2. Horizontal Scroll
 */
export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea
      orientation="horizontal"
      className="w-full max-w-lg"
      viewportClassName="p-4"
    >
      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider">
        Pipeline Stages
      </h4>
      <div className="flex w-max items-center gap-3 pb-1">
        {PIPELINE_STAGES.map((stage) => (
          <div
            key={stage}
            className="shrink-0 rounded-md border-2 border-border bg-secondary px-3.5 py-3 font-mono text-xs font-bold text-secondary-foreground shadow-brutal-sm"
          >
            {stage}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

/**
 * 3. Both Directions (Vertical & Horizontal)
 */
export function ScrollAreaBothDemo() {
  return (
    <ScrollArea
      orientation="both"
      className="h-56 w-full max-w-md"
      viewportClassName="p-4"
    >
      <div className="w-[560px] space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider">
          Cluster Telemetry Matrix (560px Wide)
        </h4>
        {DEPLOY_LOGS.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6 rounded-sm border-2 border-border bg-muted px-3 py-2 font-mono text-xs"
          >
            <span className="font-bold">{item.id}</span>
            <span>{item.service}.punch-ui.internal</span>
            <span>region: ap-southeast-1</span>
            <span>24ms</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

/**
 * 4. Scrollbar Size (Interactive)
 */
export function ScrollAreaSizeDemo() {
  const [size, setSize] = useState<ScrollbarSize>("sm");

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border-2 border-border bg-card p-3 shadow-brutal-sm">
        <span className="font-mono text-xs font-bold uppercase">
          scrollbarSize:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {SIZE_OPTIONS.map((opt) => {
            const active = size === opt.value;
            return (
              <button
                key={String(opt.value)}
                type="button"
                onClick={() => setSize(opt.value)}
                className={`rounded-sm border-2 border-border px-2.5 py-1 font-mono text-xs font-bold transition-all ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      <ScrollArea
        scrollbarSize={size}
        className="h-52 w-full"
        viewportClassName="p-4"
      >
        <div className="space-y-2.5">
          {DEPLOY_LOGS.map((item, idx) => (
            <div key={item.id} className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold">
                  {item.id} — {item.service}
                </span>
                <span className="font-mono text-muted-foreground">v2.4.0</span>
              </div>
              {idx < DEPLOY_LOGS.length - 1 && (
                <Separator variant="muted" thickness="thin" />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

/**
 * 5. Ghost & No Shadow (Embedded inside Card)
 */
export function ScrollAreaGhostDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader variant="secondary" className="py-3">
          <CardTitle className="text-sm">Ghost Inside Card</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea variant="ghost" className="h-44" viewportClassName="p-4">
            <div className="space-y-2.5">
              {DEPLOY_LOGS.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="font-mono font-bold">{item.id}</span>
                  <span className="text-muted-foreground">{item.service}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <ScrollArea noShadow className="h-[222px]" viewportClassName="p-4">
        <h4 className="mb-3 text-xs font-bold uppercase tracking-wider">
          No Shadow Variant
        </h4>
        <div className="space-y-2.5">
          {DEPLOY_LOGS.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-xs"
            >
              <span className="font-mono font-bold">{item.id}</span>
              <span className="text-muted-foreground">{item.service}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
