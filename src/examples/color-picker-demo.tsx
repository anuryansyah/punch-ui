"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ColorPicker } from "@/components/ui/color-picker";
import { Label } from "@/components/ui/label";

/**
 * Overview demo
 */
export function ColorPickerDemo() {
  return <ColorPickerBasicDemo />;
}

/**
 * 1. Basic Color Picker
 */
export function ColorPickerBasicDemo() {
  const [color, setColor] = useState("#ff8a00");

  return (
    <div className="flex flex-wrap items-center gap-4">
      <ColorPicker value={color} onChange={setColor} />
      <Badge
        noShadow
        className="font-mono"
        style={{ backgroundColor: color, color: "#000000" }}
      >
        Selected: {color.toUpperCase()}
      </Badge>
    </div>
  );
}

/**
 * 2. Custom Presets & Swatch-Only Trigger
 */
export function ColorPickerPresetsDemo() {
  const [brandColor, setBrandColor] = useState("#3b82f6");
  const [tagColor, setTagColor] = useState("#10b981");

  return (
    <div className="flex flex-wrap items-end gap-6">
      <div className="space-y-1.5">
        <Label className="block">Brand Palette</Label>
        <ColorPicker
          value={brandColor}
          onChange={setBrandColor}
          presets={[
            "#3b82f6",
            "#06b6d4",
            "#10b981",
            "#facc15",
            "#ff8a00",
            "#dc2626",
          ]}
        />
      </div>

      <div className="space-y-1.5">
        <Label className="block">Swatch Only</Label>
        <ColorPicker
          value={tagColor}
          onChange={setTagColor}
          showHex={false}
          aria-label="Pick tag color"
        />
      </div>
    </div>
  );
}

/**
 * 3. Size (sm, default, lg)
 */
export function ColorPickerSizeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <ColorPicker size="sm" defaultValue="#ff8a00" />
      <ColorPicker size="default" defaultValue="#3b82f6" />
      <ColorPicker size="lg" defaultValue="#10b981" />
    </div>
  );
}

/**
 * 4. Disabled, No Shadow & Error
 */
export function ColorPickerStatesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="space-y-1">
        <span className="block font-mono text-[11px] font-bold uppercase text-muted-foreground">
          disabled
        </span>
        <ColorPicker disabled defaultValue="#141923" />
      </div>

      <div className="space-y-1">
        <span className="block font-mono text-[11px] font-bold uppercase text-muted-foreground">
          noShadow
        </span>
        <ColorPicker noShadow defaultValue="#facc15" />
      </div>

      <div className="space-y-1">
        <span className="block font-mono text-[11px] font-bold uppercase text-destructive">
          error
        </span>
        <ColorPicker error defaultValue="#be123c" />
      </div>
    </div>
  );
}

/**
 * 5. Brand Card Live Preview
 */
export function ColorPickerCardDemo() {
  const [accent, setAccent] = useState("#ff8a00");
  const [surface, setSurface] = useState("#fffbf5");

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="py-3">
        <CardTitle className="text-sm">Workspace Branding</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label className="block">Accent</Label>
            <ColorPicker
              size="sm"
              value={accent}
              onChange={setAccent}
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="block">Surface</Label>
            <ColorPicker
              size="sm"
              value={surface}
              onChange={setSurface}
              className="w-full"
            />
          </div>
        </div>

        <div
          className="flex items-center justify-between rounded-md border-2 border-border p-4 shadow-brutal-sm"
          style={{ backgroundColor: surface }}
        >
          <div className="space-y-0.5">
            <p className="text-sm font-bold text-black">Punch Workspace</p>
            <p className="font-mono text-xs text-neutral-600">
              Live color preview
            </p>
          </div>
          <span
            className="rounded-sm border-2 border-border px-2.5 py-1 font-mono text-xs font-bold text-black shadow-brutal-sm"
            style={{ backgroundColor: accent }}
          >
            ACTIVE
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
