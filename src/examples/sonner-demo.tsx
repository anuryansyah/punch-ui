"use client";

import * as React from "react";
import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Info,
  Loader2,
  ShieldAlert,
  Undo2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export function SonnerBasicDemo() {
  return (
    <Button
      onClick={() =>
        toast("Deployment Triggered", {
          description: "Build #508 has been queued for ap-southeast-1.",
        })
      }
    >
      <Bell className="h-4 w-4" strokeWidth={2.5} />
      Show Toast
    </Button>
  );
}

export function SonnerVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        variant="success"
        onClick={() =>
          toast.success("Registry Published", {
            description: "All 32 component artifacts are live.",
          })
        }
      >
        <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
        Success
      </Button>

      <Button
        variant="info"
        onClick={() =>
          toast.info("New Preset Available", {
            description: "Try Cyber Yellow in the Theme Customizer.",
          })
        }
      >
        <Info className="h-4 w-4" strokeWidth={2.5} />
        Info
      </Button>

      <Button
        variant="warning"
        onClick={() =>
          toast.warning("API Rate Limit Near", {
            description: "88% of hourly request quota has been used.",
          })
        }
      >
        <AlertTriangle className="h-4 w-4" strokeWidth={2.5} />
        Warning
      </Button>

      <Button
        variant="danger"
        onClick={() =>
          toast.error("Connection Failed", {
            description: "Unable to reach upstream webhook endpoint.",
          })
        }
      >
        <ShieldAlert className="h-4 w-4" strokeWidth={2.5} />
        Error
      </Button>
    </div>
  );
}

export function SonnerActionDemo() {
  return (
    <Button
      variant="secondary"
      onClick={() =>
        toast("Component Archived", {
          description: "legacy-banner.tsx was moved to archive.",
          action: {
            label: "Undo",
            onClick: () =>
              toast.success("Restored", {
                description: "legacy-banner.tsx is back in workspace.",
              }),
          },
        })
      }
    >
      <Undo2 className="h-4 w-4" strokeWidth={2.5} />
      Toast with Undo Action
    </Button>
  );
}

export function SonnerPromiseDemo() {
  function triggerAsyncBuild() {
    const fakeDeploy = new Promise<{ version: string }>((resolve) => {
      setTimeout(() => resolve({ version: "v1.2.0" }), 1400);
    });

    toast.promise(fakeDeploy, {
      loading: "Building Punch UI registry...",
      success: (data) => `Published ${data.version} successfully!`,
      error: "Registry build failed.",
    });
  }

  return (
    <Button variant="outline" onClick={triggerAsyncBuild}>
      <Loader2 className="h-4 w-4" strokeWidth={2.5} />
      Run Promise Toast
    </Button>
  );
}

const POSITIONS = [
  { value: "top-left" as const, label: "Top Left" },
  { value: "top-center" as const, label: "Top Center" },
  { value: "top-right" as const, label: "Top Right" },
  { value: "bottom-left" as const, label: "Bottom Left" },
  { value: "bottom-center" as const, label: "Bottom Center" },
  { value: "bottom-right" as const, label: "Bottom Right" },
];

export function SonnerPositionDemo() {
  return (
    <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-2.5 sm:grid-cols-3">
      {POSITIONS.map((pos) => (
        <Button
          key={pos.value}
          variant="outline"
          size="sm"
          onClick={() =>
            toast(`Position: ${pos.label}`, {
              description: `Rendered at ${pos.value}.`,
              position: pos.value,
            })
          }
        >
          {pos.label}
        </Button>
      ))}
    </div>
  );
}
