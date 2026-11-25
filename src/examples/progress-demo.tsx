"use client";

import * as React from "react";
import { HardDrive, Minus, Play, Plus, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

export function ProgressBasicDemo() {
  const [progress, setProgress] = React.useState(64);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4">
      <Progress value={progress} showValue aria-label="Build progress" />
      <div className="flex items-center justify-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setProgress((prev) => Math.max(0, prev - 10))}
        >
          <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
          10%
        </Button>
        <Button
          type="button"
          size="sm"
          onClick={() => setProgress((prev) => Math.min(100, prev + 10))}
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
          10%
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => setProgress(64)}
        >
          <RotateCcw className="h-3.5 w-3.5" strokeWidth={2.5} />
          Reset
        </Button>
      </div>
    </div>
  );
}

export function ProgressVariantsDemo() {
  const items = [
    { variant: "default" as const, label: "Default (Primary)", value: 78 },
    { variant: "secondary" as const, label: "Secondary", value: 65 },
    { variant: "success" as const, label: "Success", value: 92 },
    { variant: "info" as const, label: "Info", value: 54 },
    { variant: "warning" as const, label: "Warning", value: 72 },
    { variant: "danger" as const, label: "Danger", value: 38 },
  ];

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-3.5">
      {items.map((item) => (
        <div key={item.variant} className="space-y-1">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>{item.label}</span>
            <span className="font-mono">{item.value}%</span>
          </div>
          <Progress
            variant={item.variant}
            value={item.value}
            aria-label={item.label}
          />
        </div>
      ))}
    </div>
  );
}

export function ProgressSizeDemo() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4">
      <div className="space-y-1.5">
        <Label>Small (sm)</Label>
        <Progress size="sm" value={45} showValue aria-label="Small progress" />
      </div>
      <div className="space-y-1.5">
        <Label>Default</Label>
        <Progress
          size="default"
          value={68}
          showValue
          aria-label="Default progress"
        />
      </div>
      <div className="space-y-1.5">
        <Label>Large (lg) with Inline Value</Label>
        <Progress size="lg" value={82} showValue aria-label="Large progress" />
      </div>
    </div>
  );
}

export function ProgressStripedDemo() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-5">
      <div className="space-y-1.5">
        <Label>Striped Pattern</Label>
        <Progress
          value={74}
          size="lg"
          striped
          showValue
          aria-label="Striped progress"
        />
      </div>
      <div className="space-y-1.5">
        <Label>Striped Secondary</Label>
        <Progress
          value={58}
          variant="secondary"
          striped
          aria-label="Striped secondary progress"
        />
      </div>
      <div className="space-y-1.5">
        <Label>Indeterminate Loading</Label>
        <Progress
          indeterminate
          variant="info"
          striped
          aria-label="Indeterminate loading"
        />
      </div>
    </div>
  );
}

export function ProgressNoShadowDemo() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-3">
      <Progress value={60} noShadow aria-label="Flat default progress" />
      <Progress
        value={85}
        variant="success"
        noShadow
        showValue
        aria-label="Flat success progress"
      />
    </div>
  );
}

export function ProgressQuotaCardDemo() {
  const quotas = [
    {
      label: "Edge Bandwidth",
      used: "820 GB / 1 TB",
      value: 82,
      variant: "warning" as const,
    },
    {
      label: "Artifact Storage",
      used: "4.2 GB / 10 GB",
      value: 42,
      variant: "success" as const,
    },
    {
      label: "Monthly Builds",
      used: "94 / 100",
      value: 94,
      variant: "danger" as const,
    },
  ];

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="flex items-center gap-2 text-base">
            <HardDrive className="h-4 w-4" strokeWidth={2.5} />
            Workspace Quotas
          </CardTitle>
          <CardDescription>Current billing cycle usage</CardDescription>
        </div>
        <Badge variant="secondary" noShadow>
          PRO PLAN
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {quotas.map((q) => (
          <div key={q.label} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold">
              <span>{q.label}</span>
              <span className="font-mono text-muted-foreground">{q.used}</span>
            </div>
            <Progress
              value={q.value}
              variant={q.variant}
              noShadow
              aria-label={q.label}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function ProgressAnimatedDemo() {
  const [value, setValue] = React.useState(0);
  const [running, setRunning] = React.useState(true);

  React.useEffect(() => {
    if (!running) return;
    if (value >= 100) {
      setRunning(false);
      return;
    }

    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) return 100;
        return Math.min(100, prev + 2);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [running, value]);

  function handleReplay() {
    setValue(0);
    setRunning(true);
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center justify-between text-xs font-bold">
        <span className="font-mono uppercase">
          {value >= 100
            ? "Build Complete"
            : running
              ? "Compiling Registry..."
              : "Paused"}
        </span>
        <Badge
          variant={value >= 100 ? "success" : "secondary"}
          size="sm"
          noShadow
        >
          {value}%
        </Badge>
      </div>

      <Progress
        value={value}
        size="lg"
        variant={value >= 100 ? "success" : "default"}
        striped={value < 100}
        showValue
        aria-label="Animated build progress"
      />

      <div className="flex items-center justify-center gap-2">
        <Button type="button" size="sm" onClick={handleReplay}>
          <Play className="h-3.5 w-3.5" strokeWidth={2.5} />
          {value >= 100 ? "Replay 0–100%" : "Restart"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={value >= 100}
          onClick={() => setRunning((prev) => !prev)}
        >
          {running ? "Pause" : "Resume"}
        </Button>
      </div>
    </div>
  );
}
