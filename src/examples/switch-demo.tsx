"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

/**
 * Overview demo
 */
export function SwitchDemo() {
  return <SwitchBasicDemo />;
}

/**
 * 1. Basic Switch
 */
export function SwitchBasicDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="airplane-mode" defaultChecked />
      <Label htmlFor="airplane-mode" className="cursor-pointer">
        Airplane Mode
      </Label>
    </div>
  );
}

/**
 * 2. Shape (Square vs Pill)
 */
export function SwitchShapeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex items-center gap-3">
        <Switch id="sw-square" shape="square" defaultChecked />
        <Label htmlFor="sw-square" className="cursor-pointer font-mono text-xs">
          square (default)
        </Label>
      </div>

      <div className="flex items-center gap-3">
        <Switch id="sw-pill" shape="pill" defaultChecked />
        <Label htmlFor="sw-pill" className="cursor-pointer font-mono text-xs">
          pill
        </Label>
      </div>
    </div>
  );
}

/**
 * 3. Size
 */
export function SwitchSizeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex items-center gap-2.5">
        <Switch id="sw-sm" switchSize="sm" defaultChecked />
        <Label htmlFor="sw-sm" className="cursor-pointer font-mono text-xs">
          sm
        </Label>
      </div>

      <div className="flex items-center gap-2.5">
        <Switch id="sw-default" switchSize="default" defaultChecked />
        <Label
          htmlFor="sw-default"
          className="cursor-pointer font-mono text-xs"
        >
          default
        </Label>
      </div>

      <div className="flex items-center gap-2.5">
        <Switch id="sw-lg" switchSize="lg" defaultChecked />
        <Label htmlFor="sw-lg" className="cursor-pointer font-mono text-xs">
          lg
        </Label>
      </div>
    </div>
  );
}

/**
 * 4. Variants
 */
export function SwitchVariantDemo() {
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
        <div key={item.id} className="flex items-center gap-2.5">
          <Switch
            id={`sw-var-${item.id}`}
            variant={item.variant}
            defaultChecked
          />
          <Label
            htmlFor={`sw-var-${item.id}`}
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
 * 5. Settings Card
 */
export function SwitchSettingsCardDemo() {
  const [marketing, setMarketing] = React.useState(false);
  const [twoFactor, setTwoFactor] = React.useState(true);
  const [autoDeploy, setAutoDeploy] = React.useState(true);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Workspace Preferences</CardTitle>
        <CardDescription>
          Manage security and deployment toggles.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-4 border-b-2 border-border pb-3">
          <div>
            <Label htmlFor="pref-2fa" className="cursor-pointer font-bold">
              Two-Factor Authentication
            </Label>
            <p className="text-xs text-muted-foreground">
              Require an authenticator code on sign-in.
            </p>
          </div>
          <Switch
            id="pref-2fa"
            variant="success"
            noShadow
            checked={twoFactor}
            onCheckedChange={setTwoFactor}
          />
        </div>

        <div className="flex items-center justify-between gap-4 border-b-2 border-border pb-3">
          <div>
            <Label htmlFor="pref-deploy" className="cursor-pointer font-bold">
              Auto-Deploy Main Branch
            </Label>
            <p className="text-xs text-muted-foreground">
              Trigger production builds on every push.
            </p>
          </div>
          <Switch
            id="pref-deploy"
            noShadow
            checked={autoDeploy}
            onCheckedChange={setAutoDeploy}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <Label
              htmlFor="pref-marketing"
              className="cursor-pointer font-bold"
            >
              Product Digest
            </Label>
            <p className="text-xs text-muted-foreground">
              Weekly changelog and component releases.
            </p>
          </div>
          <Switch
            id="pref-marketing"
            noShadow
            checked={marketing}
            onCheckedChange={setMarketing}
          />
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * 6. Disabled & No Shadow
 */
export function SwitchStatesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch id="sw-disabled-off" disabled />
        <Label htmlFor="sw-disabled-off" className="opacity-50">
          Disabled (Off)
        </Label>
      </div>

      <div className="flex items-center gap-3">
        <Switch id="sw-disabled-on" disabled defaultChecked />
        <Label htmlFor="sw-disabled-on" className="opacity-50">
          Disabled (On)
        </Label>
      </div>

      <div className="flex items-center gap-3">
        <Switch id="sw-noshadow" noShadow defaultChecked />
        <Label htmlFor="sw-noshadow" className="cursor-pointer">
          Flat switch (noShadow)
        </Label>
      </div>
    </div>
  );
}
