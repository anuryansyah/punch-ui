"use client";

import * as React from "react";
import { AlertTriangle, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function AlertDialogBasicDemo() {
  const [status, setStatus] = React.useState<string>("Waiting for action");

  return (
    <div className="flex flex-col items-center gap-3">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Publish Registry</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Publish v1.0.0 to Registry?</AlertDialogTitle>
            <AlertDialogDescription>
              All 25 components will be bundled and published to the public
              Punch UI registry. Downstream projects will receive the update
              immediately.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setStatus("Cancelled")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => setStatus("Published v1.0.0")}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <p className="font-mono text-xs text-muted-foreground">
        Status: <span className="font-bold text-foreground">{status}</span>
      </p>
    </div>
  );
}

export function AlertDialogDestructiveDemo() {
  const [deleted, setDeleted] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="danger">
            <Trash2 className="h-4 w-4" strokeWidth={2.5} />
            Delete Workspace
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border-2 border-border bg-destructive text-destructive-foreground shadow-brutal-sm">
                <AlertTriangle className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <AlertDialogTitle>Delete workspace permanently?</AlertDialogTitle>
            </div>
            <AlertDialogDescription>
              This action cannot be undone. All projects, API tokens, and member
              permissions in{" "}
              <span className="font-bold text-foreground">punch-core</span> will
              be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep Workspace</AlertDialogCancel>
            <AlertDialogAction
              variant="danger"
              onClick={() => setDeleted(true)}
            >
              Yes, Delete Everything
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {deleted && (
        <p className="font-mono text-xs font-bold text-destructive">
          Workspace deletion confirmed.
        </p>
      )}
    </div>
  );
}

export function AlertDialogAsyncDemo() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [revoked, setRevoked] = React.useState(false);

  function handleConfirm(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRevoked(true);
      setOpen(false);
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="warning">Revoke All Sessions</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign out all active devices?</AlertDialogTitle>
            <AlertDialogDescription>
              Every active browser and CLI session will be terminated. You will
              need to sign in again with 2FA.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="danger"
              isLoading={loading}
              onClick={handleConfirm}
            >
              {loading ? "Revoking..." : "Revoke Sessions"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {revoked && (
        <p className="font-mono text-xs font-bold text-success">
          All active sessions were revoked.
        </p>
      )}
    </div>
  );
}
