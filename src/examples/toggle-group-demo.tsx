"use client";

import * as React from "react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Strikethrough,
  Underline,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupBasicDemo() {
  const [formats, setFormats] = React.useState<string[]>(["bold", "italic"]);

  return (
    <div className="flex flex-col items-center gap-3">
      <ToggleGroup
        type="multiple"
        value={formats}
        onValueChange={setFormats}
        aria-label="Text formatting"
      >
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold strokeWidth={2.5} />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic strokeWidth={2.5} />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline strokeWidth={2.5} />
        </ToggleGroupItem>
        <ToggleGroupItem value="strike" aria-label="Toggle strikethrough">
          <Strikethrough strokeWidth={2.5} />
        </ToggleGroupItem>
      </ToggleGroup>

      <p className="font-mono text-xs text-muted-foreground">
        Active:{" "}
        <span className="font-bold text-foreground">
          {formats.length > 0 ? formats.join(", ") : "none"}
        </span>
      </p>
    </div>
  );
}

export function ToggleGroupSingleDemo() {
  const [align, setAlign] = React.useState("left");

  return (
    <div className="flex flex-col items-center gap-3">
      <ToggleGroup
        type="single"
        value={align}
        onValueChange={(next) => {
          if (next) setAlign(next);
        }}
        aria-label="Text alignment"
      >
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft strokeWidth={2.5} />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter strokeWidth={2.5} />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight strokeWidth={2.5} />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Justify">
          <AlignJustify strokeWidth={2.5} />
        </ToggleGroupItem>
      </ToggleGroup>

      <p className="font-mono text-xs text-muted-foreground">
        Alignment: <span className="font-bold text-foreground">{align}</span>
      </p>
    </div>
  );
}

export function ToggleGroupVariantsDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-1.5">
        <Label>Connected Outline (variant=&quot;outline&quot;)</Label>
        <ToggleGroup type="single" defaultValue="week" variant="outline">
          <ToggleGroupItem value="day">Day</ToggleGroupItem>
          <ToggleGroupItem value="week">Week</ToggleGroupItem>
          <ToggleGroupItem value="month">Month</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <Label>Secondary Accent (variant=&quot;secondary&quot;)</Label>
        <ToggleGroup
          type="multiple"
          defaultValue={["bold", "underline"]}
          variant="secondary"
        >
          <ToggleGroupItem value="bold">
            <Bold strokeWidth={2.5} />
            Bold
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic strokeWidth={2.5} />
            Italic
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline strokeWidth={2.5} />
            Underline
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}

export function ToggleGroupSizeDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ToggleGroup type="single" defaultValue="sm" size="sm" variant="outline">
        <ToggleGroupItem value="sm">Small A</ToggleGroupItem>
        <ToggleGroupItem value="sm-2">Small B</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup
        type="single"
        defaultValue="md"
        size="default"
        variant="outline"
      >
        <ToggleGroupItem value="md">Default A</ToggleGroupItem>
        <ToggleGroupItem value="md-2">Default B</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" defaultValue="lg" size="lg" variant="outline">
        <ToggleGroupItem value="lg">Large A</ToggleGroupItem>
        <ToggleGroupItem value="lg-2">Large B</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export function ToggleGroupStatesDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-1.5">
        <Label>With Disabled Item</Label>
        <ToggleGroup type="single" defaultValue="grid">
          <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
          <ToggleGroupItem value="list">List</ToggleGroupItem>
          <ToggleGroupItem value="kanban" disabled>
            Kanban (Pro)
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <Label>No Shadow (Flat)</Label>
        <ToggleGroup
          type="multiple"
          defaultValue={["bold"]}
          variant="outline"
          noShadow
        >
          <ToggleGroupItem value="bold" aria-label="Bold">
            <Bold strokeWidth={2.5} />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <Italic strokeWidth={2.5} />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <Underline strokeWidth={2.5} />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
