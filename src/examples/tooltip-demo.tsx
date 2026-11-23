"use client";

import * as React from "react";
import { Bold, Code2, Italic, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TooltipBasicDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover or Focus Me</Button>
        </TooltipTrigger>
        <TooltipContent showArrow>
          <p>High-contrast Neobrutalist tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function TooltipPlacementDemo() {
  const sides = [
    { side: "top" as const, label: "Top" },
    { side: "right" as const, label: "Right" },
    { side: "bottom" as const, label: "Bottom" },
    { side: "left" as const, label: "Left" },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {sides.map((item) => (
          <Tooltip key={item.side}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                {item.label}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={item.side} showArrow>
              side=&quot;{item.side}&quot;
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export function TooltipVariantsDemo() {
  const variants = [
    { key: "default" as const, label: "Default (Contrast)" },
    { key: "card" as const, label: "Card" },
    { key: "primary" as const, label: "Primary" },
    { key: "secondary" as const, label: "Secondary" },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {variants.map((item) => (
          <Tooltip key={item.key}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                {item.label}
              </Button>
            </TooltipTrigger>
            <TooltipContent variant={item.key}>
              variant=&quot;{item.key}&quot;
            </TooltipContent>
          </Tooltip>
        ))}

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm" noShadow>
              No Shadow
            </Button>
          </TooltipTrigger>
          <TooltipContent variant="card" noShadow>
            Flat tooltip (noShadow)
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}

export function TooltipToolbarDemo() {
  const tools = [
    { label: "Bold", shortcut: "⌘B", icon: Bold },
    { label: "Italic", shortcut: "⌘I", icon: Italic },
    { label: "Code Block", shortcut: "⌘E", icon: Code2 },
    { label: "Share Link", shortcut: "⇧⌘S", icon: Share2 },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <div className="inline-flex items-center gap-1.5 rounded-md border-2 border-border bg-card p-1.5 shadow-brutal-sm">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Tooltip key={tool.label}>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={tool.label}
                  className="h-8 w-8"
                >
                  <Icon className="h-4 w-4" strokeWidth={2.5} />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="flex items-center gap-2">
                <span>{tool.label}</span>
                <kbd className="border-background/40 bg-background/15 rounded-sm border px-1 py-0.5 font-mono text-[10px] font-black">
                  {tool.shortcut}
                </kbd>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
