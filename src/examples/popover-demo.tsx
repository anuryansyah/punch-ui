"use client";

import * as React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export function PopoverBasicDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <SlidersHorizontal className="h-4 w-4" strokeWidth={2.5} />
          Dimensions
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-3">
          <div className="space-y-1">
            <h4 className="text-sm font-extrabold leading-none">Dimensions</h4>
            <p className="text-xs text-muted-foreground">
              Set the canvas dimensions for the exported frame.
            </p>
          </div>
          <Separator />
          <div className="grid gap-2.5">
            <div className="grid grid-cols-3 items-center gap-3">
              <Label htmlFor="popover-width">Width</Label>
              <Input
                id="popover-width"
                inputSize="sm"
                defaultValue="1280px"
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-3">
              <Label htmlFor="popover-height">Height</Label>
              <Input
                id="popover-height"
                inputSize="sm"
                defaultValue="720px"
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-3">
              <Label htmlFor="popover-padding">Padding</Label>
              <Input
                id="popover-padding"
                inputSize="sm"
                defaultValue="24px"
                className="col-span-2"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverPlacementDemo() {
  const placements = [
    { side: "top" as const, label: "Top" },
    { side: "right" as const, label: "Right" },
    { side: "bottom" as const, label: "Bottom" },
    { side: "left" as const, label: "Left" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {placements.map((item) => (
        <Popover key={item.side}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              {item.label}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={item.side} className="w-56">
            <p className="font-mono text-xs font-black uppercase">
              side=&quot;{item.side}&quot;
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Automatically flips if it approaches the viewport boundary.
            </p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}

export function PopoverProfileDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Inspect Author</Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72">
        <div className="flex items-start gap-3">
          <Avatar size="default">
            <AvatarFallback className="bg-primary text-primary-foreground">
              AM
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-sm font-extrabold">Alex Morgan</p>
              <Badge variant="success" size="sm" noShadow>
                CORE
              </Badge>
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              @alex.morgan
            </p>
            <p className="pt-1 text-xs text-card-foreground">
              Maintainer of Punch UI design tokens, Radix primitives, and docs.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverNoShadowDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" noShadow>
          Flat Popover (noShadow)
        </Button>
      </PopoverTrigger>
      <PopoverContent noShadow className="w-64">
        <p className="text-sm font-bold">No Shadow Mode</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Uses a crisp 2px border without hard offset shadows for minimal
          surfaces.
        </p>
      </PopoverContent>
    </Popover>
  );
}
