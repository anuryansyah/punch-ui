"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

/**
 * Overview demo
 */
export function CheckboxDemo() {
  return <CheckboxBasicDemo />;
}

/**
 * 1. Basic Checkbox
 */
export function CheckboxBasicDemo() {
  return (
    <div className="flex items-center gap-2.5">
      <Checkbox id="terms-basic" defaultChecked />
      <Label htmlFor="terms-basic" className="cursor-pointer">
        Accept terms and conditions
      </Label>
    </div>
  );
}

/**
 * 2. Size
 */
export function CheckboxSizeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <Checkbox id="cb-sm" checkboxSize="sm" defaultChecked />
        <Label htmlFor="cb-sm" className="cursor-pointer font-mono text-xs">
          sm
        </Label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="cb-default" checkboxSize="default" defaultChecked />
        <Label
          htmlFor="cb-default"
          className="cursor-pointer font-mono text-xs"
        >
          default
        </Label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="cb-lg" checkboxSize="lg" defaultChecked />
        <Label htmlFor="cb-lg" className="cursor-pointer font-mono text-xs">
          lg
        </Label>
      </div>
    </div>
  );
}

/**
 * 3. Variants
 */
export function CheckboxVariantDemo() {
  const variants = [
    { id: "primary", label: "primary", variant: "primary" },
    { id: "secondary", label: "secondary", variant: "secondary" },
    { id: "success", label: "success", variant: "success" },
    { id: "info", label: "info", variant: "info" },
    { id: "warning", label: "warning", variant: "warning" },
    { id: "destructive", label: "destructive", variant: "destructive" },
  ] as const;

  return (
    <div className="flex flex-wrap items-center gap-6">
      {variants.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <Checkbox
            id={`cb-var-${item.id}`}
            variant={item.variant}
            defaultChecked
          />
          <Label
            htmlFor={`cb-var-${item.id}`}
            className="cursor-pointer font-mono text-xs"
          >
            {item.label}
          </Label>
        </div>
      ))}
    </div>
  );
}

/**
 * 3. Indeterminate (Select All)
 */
export function CheckboxIndeterminateDemo() {
  const [permissions, setPermissions] = React.useState({
    read: true,
    write: true,
    deploy: false,
  });

  const values = Object.values(permissions);
  const allChecked = values.every(Boolean);
  const someChecked = values.some(Boolean);
  const parentState = allChecked ? true : someChecked ? "indeterminate" : false;

  function toggleAll(checked: boolean | "indeterminate") {
    const next = checked === true;
    setPermissions({ read: next, write: next, deploy: next });
  }

  return (
    <div className="w-full max-w-xs space-y-3 rounded-md border-2 border-border bg-card p-4 shadow-brutal-sm">
      <div className="flex items-center gap-2.5 border-b-2 border-border pb-2.5">
        <Checkbox
          id="perm-all"
          checked={parentState}
          onCheckedChange={toggleAll}
        />
        <Label htmlFor="perm-all" className="cursor-pointer font-extrabold">
          Select All Permissions
        </Label>
      </div>

      <div className="space-y-2 pl-2">
        {(
          [
            { key: "read", label: "Read repositories" },
            { key: "write", label: "Write & push commits" },
            { key: "deploy", label: "Deploy to production" },
          ] as const
        ).map((item) => (
          <div key={item.key} className="flex items-center gap-2.5">
            <Checkbox
              id={`perm-${item.key}`}
              checked={permissions[item.key]}
              onCheckedChange={(checked) =>
                setPermissions((prev) => ({
                  ...prev,
                  [item.key]: checked === true,
                }))
              }
            />
            <Label
              htmlFor={`perm-${item.key}`}
              className="cursor-pointer text-xs"
            >
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 4. With Description & Card
 */
export function CheckboxCardDemo() {
  const [emails, setEmails] = React.useState(true);
  const [security, setSecurity] = React.useState(true);

  return (
    <div className="w-full max-w-sm space-y-3">
      <label
        htmlFor="opt-emails"
        className="flex cursor-pointer items-start gap-3 rounded-md border-2 border-border bg-card p-3.5 shadow-brutal-sm transition-colors hover:bg-muted"
      >
        <Checkbox
          id="opt-emails"
          checked={emails}
          onCheckedChange={(v) => setEmails(v === true)}
          noShadow
          className="mt-0.5"
        />
        <div className="space-y-0.5">
          <p className="text-sm font-bold leading-none">Product Updates</p>
          <p className="text-xs text-muted-foreground">
            Receive release notes and new component announcements.
          </p>
        </div>
      </label>

      <label
        htmlFor="opt-security"
        className="flex cursor-pointer items-start gap-3 rounded-md border-2 border-border bg-card p-3.5 shadow-brutal-sm transition-colors hover:bg-muted"
      >
        <Checkbox
          id="opt-security"
          checked={security}
          onCheckedChange={(v) => setSecurity(v === true)}
          variant="secondary"
          noShadow
          className="mt-0.5"
        />
        <div className="space-y-0.5">
          <p className="text-sm font-bold leading-none">Security Alerts</p>
          <p className="text-xs text-muted-foreground">
            Get notified immediately when a new login is detected.
          </p>
        </div>
      </label>
    </div>
  );
}

/**
 * 5. Validation, Disabled & No Shadow
 */
export function CheckboxStatesDemo() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center gap-2.5">
        <Checkbox id="cb-error" state="error" />
        <Label htmlFor="cb-error" className="cursor-pointer text-destructive">
          You must agree before continuing
        </Label>
      </div>

      <div className="flex items-center gap-2.5">
        <Checkbox id="cb-disabled" disabled defaultChecked />
        <Label htmlFor="cb-disabled" className="opacity-50">
          Disabled checked option
        </Label>
      </div>

      <div className="flex items-center gap-2.5">
        <Checkbox id="cb-noshadow" noShadow defaultChecked />
        <Label htmlFor="cb-noshadow" className="cursor-pointer">
          Flat checkbox (noShadow)
        </Label>
      </div>
    </div>
  );
}
