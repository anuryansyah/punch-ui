"use client";

import * as React from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Archive,
  ChevronDown,
  Clock,
  Flag,
  Minus,
  Plus,
  Rocket,
  RotateCcw,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export function ButtonGroupBasicDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <Archive className="h-4 w-4" strokeWidth={2.5} />
        Archive
      </Button>
      <Button variant="outline">
        <Flag className="h-4 w-4" strokeWidth={2.5} />
        Report
      </Button>
      <Button variant="outline">
        <Clock className="h-4 w-4" strokeWidth={2.5} />
        Snooze
      </Button>
    </ButtonGroup>
  );
}

export function ButtonGroupVerticalDemo() {
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="outline" size="icon" aria-label="Zoom in">
        <Plus className="h-4 w-4" strokeWidth={2.5} />
      </Button>
      <Button variant="outline" size="icon" aria-label="Zoom out">
        <Minus className="h-4 w-4" strokeWidth={2.5} />
      </Button>
      <Button variant="outline" size="icon" aria-label="Reset zoom">
        <RotateCcw className="h-4 w-4" strokeWidth={2.5} />
      </Button>
    </ButtonGroup>
  );
}

export function ButtonGroupSplitDemo() {
  const [target, setTarget] = React.useState("Production");

  return (
    <div className="flex flex-col items-center gap-3">
      <ButtonGroup>
        <Button>
          <Rocket className="h-4 w-4" strokeWidth={2.5} />
          Deploy to {target}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" aria-label="Select deployment target">
              <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onSelect={() => setTarget("Production")}>
              Deploy to Production
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setTarget("Staging")}>
              Deploy to Staging
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => setTarget("Preview")}>
              Create Preview Build
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  );
}

export function ButtonGroupInputDemo() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4">
      <ButtonGroup className="w-full">
        <ButtonGroupText>https://</ButtonGroupText>
        <Input placeholder="punch-ui.dev" className="min-w-0 flex-1" />
        <Button variant="secondary">Visit</Button>
      </ButtonGroup>

      <ButtonGroup className="w-full">
        <Input placeholder="Search components..." className="min-w-0 flex-1" />
        <Button size="icon" aria-label="Search">
          <Search className="h-4 w-4" strokeWidth={2.5} />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export function ButtonGroupSizeDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Group
        </Button>
        <Button variant="outline" size="sm">
          Action
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline" size="default">
          Default
        </Button>
        <Button variant="outline" size="default">
          Group
        </Button>
        <Button variant="outline" size="default">
          Action
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Group
        </Button>
        <Button variant="outline" size="lg">
          Action
        </Button>
      </ButtonGroup>
    </div>
  );
}

export function ButtonGroupNoShadowDemo() {
  const [align, setAlign] = React.useState<"left" | "center" | "right">("left");

  return (
    <ButtonGroup noShadow>
      <Button
        variant={align === "left" ? "default" : "outline"}
        size="icon"
        aria-label="Align left"
        onClick={() => setAlign("left")}
      >
        <AlignLeft className="h-4 w-4" strokeWidth={2.5} />
      </Button>
      <Button
        variant={align === "center" ? "default" : "outline"}
        size="icon"
        aria-label="Align center"
        onClick={() => setAlign("center")}
      >
        <AlignCenter className="h-4 w-4" strokeWidth={2.5} />
      </Button>
      <Button
        variant={align === "right" ? "default" : "outline"}
        size="icon"
        aria-label="Align right"
        onClick={() => setAlign("right")}
      >
        <AlignRight className="h-4 w-4" strokeWidth={2.5} />
      </Button>
    </ButtonGroup>
  );
}
