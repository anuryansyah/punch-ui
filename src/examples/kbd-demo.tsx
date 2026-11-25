"use client";

import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

/**
 * Overview demo
 */
export function KbdDemo() {
  return <KbdBasicDemo />;
}

/**
 * 1. Basic & Key Combinations
 */
export function KbdBasicDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>

      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span className="font-mono text-xs font-bold text-muted-foreground">
          +
        </span>
        <Kbd>Shift</Kbd>
        <span className="font-mono text-xs font-bold text-muted-foreground">
          +
        </span>
        <Kbd>P</Kbd>
      </KbdGroup>

      <Kbd>Esc</Kbd>

      <KbdGroup>
        <Kbd>↑</Kbd>
        <Kbd>↓</Kbd>
        <Kbd>←</Kbd>
        <Kbd>→</Kbd>
      </KbdGroup>
    </div>
  );
}

/**
 * 2. Variants (default, secondary, primary, muted)
 */
export function KbdVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <Kbd variant="default">⌘K</Kbd>
        <span className="font-mono text-xs text-muted-foreground">default</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd variant="secondary">⌘S</Kbd>
        <span className="font-mono text-xs text-muted-foreground">
          secondary
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd variant="primary">Enter</Kbd>
        <span className="font-mono text-xs text-muted-foreground">primary</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd variant="muted">Esc</Kbd>
        <span className="font-mono text-xs text-muted-foreground">muted</span>
      </div>
    </div>
  );
}

/**
 * 3. Size (sm, default, lg)
 */
export function KbdSizeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <div className="flex items-center gap-2">
        <Kbd size="sm">⌘</Kbd>
        <Kbd size="sm">K</Kbd>
        <span className="font-mono text-xs text-muted-foreground">sm</span>
      </div>

      <div className="flex items-center gap-2">
        <Kbd size="default">⌘</Kbd>
        <Kbd size="default">K</Kbd>
        <span className="font-mono text-xs text-muted-foreground">default</span>
      </div>

      <div className="flex items-center gap-2">
        <Kbd size="lg">⌘</Kbd>
        <Kbd size="lg">K</Kbd>
        <span className="font-mono text-xs text-muted-foreground">lg</span>
      </div>
    </div>
  );
}

/**
 * 4. Inside UI & Shortcut Cheat Sheet (with noShadow)
 */
export function KbdInContextDemo() {
  const shortcuts = [
    { action: "Open Command Palette", keys: ["⌘", "K"] },
    { action: "Save Changes", keys: ["⌘", "S"] },
    { action: "Toggle Sidebar", keys: ["⌘", "B"] },
    { action: "Close Active Modal", keys: ["Esc"] },
  ];

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-5">
      {/* Inside a Search Trigger Button */}
      <Button
        type="button"
        variant="outline"
        className="w-full justify-between px-3 text-muted-foreground"
      >
        <span className="flex items-center gap-2 text-xs">
          <Search className="h-4 w-4" strokeWidth={2.5} />
          Search documentation...
        </span>
        <KbdGroup>
          <Kbd size="sm" variant="secondary" noShadow>
            ⌘
          </Kbd>
          <Kbd size="sm" variant="secondary" noShadow>
            K
          </Kbd>
        </KbdGroup>
      </Button>

      {/* Shortcut List Card */}
      <Card className="w-full">
        <CardHeader className="py-3">
          <CardTitle className="text-sm">Keyboard Shortcuts</CardTitle>
        </CardHeader>
        <CardContent className="divide-y-2 divide-border p-0">
          {shortcuts.map((item) => (
            <div
              key={item.action}
              className="flex items-center justify-between px-4 py-2.5 text-xs"
            >
              <span className="font-medium">{item.action}</span>
              <KbdGroup>
                {item.keys.map((key) => (
                  <Kbd key={key} size="sm" variant="muted">
                    {key}
                  </Kbd>
                ))}
              </KbdGroup>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
