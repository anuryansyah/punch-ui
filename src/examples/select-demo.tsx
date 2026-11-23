"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Overview demo
 */
export function SelectDemo() {
  return <SelectBasicDemo />;
}

/**
 * 1. Basic Select
 */
export function SelectBasicDemo() {
  return (
    <div className="w-full max-w-xs">
      <Select defaultValue="tangerine">
        <SelectTrigger aria-label="Select theme preset">
          <SelectValue placeholder="Choose a preset..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="tangerine">Tangerine</SelectItem>
          <SelectItem value="soft-blue">Soft Blue</SelectItem>
          <SelectItem value="cyber-yellow">Cyber Yellow</SelectItem>
          <SelectItem value="deep-ink">Deep Ink</SelectItem>
          <SelectItem value="soft-pink">Soft Pink</SelectItem>
          <SelectItem value="crimson-red">Crimson Red</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

/**
 * 2. Size Variants
 */
export function SelectSizeDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Select defaultValue="sm">
        <SelectTrigger selectSize="sm" aria-label="Small select">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sm">Small (sm)</SelectItem>
          <SelectItem value="compact">Compact</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="default">
        <SelectTrigger selectSize="default" aria-label="Default select">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="standard">Standard</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="lg">
        <SelectTrigger selectSize="lg" aria-label="Large select">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lg">Large (lg)</SelectItem>
          <SelectItem value="expanded">Expanded</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

/**
 * 3. Grouped & Scrollable Options
 */
export function SelectGroupedDemo() {
  return (
    <div className="w-full max-w-xs">
      <Select>
        <SelectTrigger aria-label="Select timezone">
          <SelectValue placeholder="Select a timezone..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="wib">Western Indonesia Time (WIB)</SelectItem>
            <SelectItem value="wita">Central Indonesia Time (WITA)</SelectItem>
            <SelectItem value="wit">Eastern Indonesia Time (WIT)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="sgt">Singapore Time (SGT)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

/**
 * 4. Validation & Disabled States
 */
export function SelectStatesDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <div className="space-y-1.5">
        <Label>Plan Tier (Success)</Label>
        <Select defaultValue="pro">
          <SelectTrigger state="success" aria-label="Valid plan">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Starter Free</SelectItem>
            <SelectItem value="pro">Pro Workspace</SelectItem>
            <SelectItem value="enterprise" disabled>
              Enterprise (Contact Sales)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label className="text-destructive">Billing Region (Error)</Label>
        <Select>
          <SelectTrigger state="error" aria-label="Missing billing region">
            <SelectValue placeholder="Region is required..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="eu">European Union</SelectItem>
            <SelectItem value="apac">Asia Pacific</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label className="opacity-60">Locked Role (Disabled)</Label>
        <Select defaultValue="owner" disabled>
          <SelectTrigger aria-label="Disabled role select">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="owner">Owner</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

/**
 * 5. No Shadow & Form Card
 */
export function SelectFormCardDemo() {
  const [role, setRole] = React.useState("maintainer");

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Invite Member</CardTitle>
        <CardDescription>
          Assign a workspace role using a flat noShadow select.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Label htmlFor="invite-role">Workspace Role</Label>
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger id="invite-role" noShadow>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="viewer">Viewer — Read-only access</SelectItem>
            <SelectItem value="maintainer">
              Maintainer — Edit &amp; publish
            </SelectItem>
            <SelectItem value="admin">Admin — Full billing control</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
          Role: {role}
        </span>
        <Button size="sm">Send Invite</Button>
      </CardFooter>
    </Card>
  );
}

/**
 * 6. Align Items (item-aligned vs popper align)
 */
export function SelectAlignDemo() {
  return (
    <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
      <div className="space-y-1.5">
        <Label>Item-Aligned (position=&quot;item-aligned&quot;)</Label>
        <Select defaultValue="banana">
          <SelectTrigger aria-label="Item aligned select">
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="item-aligned">
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana (Aligned)</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
            <SelectItem value="mango">Mango</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label>Popper End-Aligned (align=&quot;end&quot;)</Label>
        <Select defaultValue="md">
          <SelectTrigger aria-label="Popper end aligned select">
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper" align="end" className="w-52 min-w-0">
            <SelectItem value="sm">Small (320px)</SelectItem>
            <SelectItem value="md">Medium (640px)</SelectItem>
            <SelectItem value="lg">Large (1024px)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

/**
 * 6. Clearable Select
 */
export function SelectClearableDemo() {
  const [preset, setPreset] = React.useState("tangerine");

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label>Theme Preset</Label>
      <Select value={preset} onValueChange={setPreset}>
        <SelectTrigger
          aria-label="Clearable preset select"
          clearable={Boolean(preset)}
          onClear={() => setPreset("")}
        >
          <SelectValue placeholder="Choose a preset..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="tangerine">Tangerine</SelectItem>
          <SelectItem value="soft-blue">Soft Blue</SelectItem>
          <SelectItem value="cyber-yellow">Cyber Yellow</SelectItem>
        </SelectContent>
      </Select>
      <p className="font-mono text-xs text-muted-foreground">
        Value:{" "}
        <span className="font-bold text-foreground">{preset || "none"}</span>
      </p>
    </div>
  );
}
