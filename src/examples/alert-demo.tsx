"use client";

import * as React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  ShieldAlert,
  Terminal,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function AlertBasicDemo() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <Alert>
        <Terminal strokeWidth={2.5} />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add Neobrutalist components directly to your app via the Punch
          UI registry CLI.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export function AlertVariantsDemo() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-3.5">
      <Alert variant="success">
        <CheckCircle2 strokeWidth={2.5} />
        <AlertTitle>Deployment Succeeded</AlertTitle>
        <AlertDescription>
          Production build #502 is live across all 18 edge locations.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <Info strokeWidth={2.5} />
        <AlertTitle>Scheduled Maintenance</AlertTitle>
        <AlertDescription>
          Read-replica rotation starts Sunday at 02:00 UTC with zero downtime.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTriangle strokeWidth={2.5} />
        <AlertTitle>API Quota at 85%</AlertTitle>
        <AlertDescription>
          Consider upgrading your workspace tier before reaching the hourly rate
          limit.
        </AlertDescription>
      </Alert>

      <Alert variant="danger">
        <ShieldAlert strokeWidth={2.5} />
        <AlertTitle>Webhook Delivery Failed</AlertTitle>
        <AlertDescription>
          Endpoint returned HTTP 503 three times consecutively. Retries paused.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export function AlertDismissibleDemo() {
  const [visible, setVisible] = React.useState(true);

  if (!visible) {
    return (
      <Button variant="outline" size="sm" onClick={() => setVisible(true)}>
        Restore Alert
      </Button>
    );
  }

  return (
    <div className="mx-auto w-full max-w-lg">
      <Alert
        variant="secondary"
        dismissible
        onDismiss={() => setVisible(false)}
      >
        <Info strokeWidth={2.5} />
        <AlertTitle>New Registry Release</AlertTitle>
        <AlertDescription>
          Tier 3 overlay &amp; feedback components are now available in the
          registry.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export function AlertNoShadowDemo() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-3">
      <Alert noShadow>
        <Terminal strokeWidth={2.5} />
        <AlertTitle>Flat Default Alert</AlertTitle>
        <AlertDescription>
          Ideal for embedding inside Cards, Dialogs, or Form sections.
        </AlertDescription>
      </Alert>
      <Alert variant="primary" noShadow>
        <Info strokeWidth={2.5} />
        <AlertTitle>Flat Primary Alert</AlertTitle>
        <AlertDescription>
          Combines high-emphasis primary color with noShadow.
        </AlertDescription>
      </Alert>
    </div>
  );
}
