"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  Eye,
  EyeOff,
  Mail,
  Search,
  Send,
} from "lucide-react";

/**
 * Overview demo
 */
export function InputDemo() {
  return <InputBasicDemo />;
}

/**
 * 1. Basic Input
 */
export function InputBasicDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Input type="email" placeholder="Enter your work email..." />
    </div>
  );
}

/**
 * 2. With Label & Helper Text
 */
export function InputWithLabelDemo() {
  return (
    <div className="w-full max-w-sm space-y-1.5">
      <Label htmlFor="full-name">
        Full Name <span className="text-destructive">*</span>
      </Label>
      <Input id="full-name" placeholder="e.g. Alex Morgan" />
      <p className="text-xs text-muted-foreground">
        This name will be displayed on your public workspace profile.
      </p>
    </div>
  );
}

/**
 * 3. Size (sm, default, lg)
 */
export function InputSizeDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Input inputSize="sm" placeholder="Small input (h-8)" />
      <Input inputSize="default" placeholder="Default input (h-10)" />
      <Input inputSize="lg" placeholder="Large input (h-12)" />
    </div>
  );
}

/**
 * 4. With Icon & Password Toggle
 */
export function InputWithIconDemo() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="w-full max-w-sm space-y-3">
      {/* Left Search Icon */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          strokeWidth={2.5}
        />
        <Input placeholder="Search deployments..." className="pl-9" />
      </div>

      {/* Password Input with Show/Hide Toggle */}
      <div className="relative">
        <Input
          type={showPass ? "text" : "password"}
          defaultValue="PunchUI_Secret_2026!"
          className="pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPass((prev) => !prev)}
          aria-label={showPass ? "Hide password" : "Show password"}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-sm p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {showPass ? (
            <EyeOff className="h-4 w-4" strokeWidth={2.5} />
          ) : (
            <Eye className="h-4 w-4" strokeWidth={2.5} />
          )}
        </button>
      </div>
    </div>
  );
}

/**
 * 5. Input with Button
 */
export function InputWithButtonDemo() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full max-w-md items-center gap-2.5"
    >
      <div className="relative flex-1">
        <Mail
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          strokeWidth={2.5}
        />
        <Input
          type="email"
          placeholder="teammate@company.com"
          className="pl-9"
        />
      </div>
      <Button type="submit">
        <Send className="h-4 w-4" strokeWidth={2.5} />
        Invite
      </Button>
    </form>
  );
}

/**
 * 6. Prefix & Suffix Addon
 */
export function InputAddonDemo() {
  return (
    <div className="w-full max-w-md space-y-3">
      {/* URL Prefix */}
      <div className="flex overflow-hidden rounded-md border-2 border-border bg-card shadow-brutal-sm transition-shadow focus-within:shadow-brutal">
        <span className="flex items-center border-r-2 border-border bg-muted px-3 font-mono text-xs font-bold text-muted-foreground">
          https://
        </span>
        <Input
          noShadow
          placeholder="punch-ui.vercel.app"
          className="rounded-none border-0"
        />
      </div>

      {/* Currency Prefix & Suffix */}
      <div className="flex overflow-hidden rounded-md border-2 border-border bg-card shadow-brutal-sm transition-shadow focus-within:shadow-brutal">
        <span className="flex items-center border-r-2 border-border bg-secondary px-3 font-mono text-xs font-bold text-secondary-foreground">
          $
        </span>
        <Input
          noShadow
          type="number"
          defaultValue="149.00"
          className="rounded-none border-0 font-mono"
        />
        <span className="flex items-center border-l-2 border-border bg-muted px-3 font-mono text-xs font-bold text-muted-foreground">
          USD
        </span>
      </div>
    </div>
  );
}

/**
 * 7. File Input
 */
export function InputFileDemo() {
  return (
    <div className="w-full max-w-sm space-y-1.5">
      <Label htmlFor="upload-schema">Upload Registry JSON</Label>
      <Input id="upload-schema" type="file" />
    </div>
  );
}

/**
 * 8. Validation State (Success & Error)
 */
export function InputValidationDemo() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="valid-slug">Workspace Slug</Label>
        <Input id="valid-slug" state="success" defaultValue="punch-ui-core" />
        <p className="flex items-center gap-1 text-xs font-bold text-success">
          <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
          Slug is available!
        </p>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="invalid-email">Admin Email</Label>
        <Input
          id="invalid-email"
          state="error"
          defaultValue="admin@invalid-domain"
        />
        <p className="flex items-center gap-1 text-xs font-bold text-destructive">
          <AlertCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
          Please enter a valid domain address.
        </p>
      </div>
    </div>
  );
}

/**
 * 9. Disabled & Read-Only
 */
export function InputDisabledDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="disabled-input">Disabled Input</Label>
        <Input
          id="disabled-input"
          disabled
          defaultValue="Locked environment variable"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="readonly-key">Read-Only API Key</Label>
        <div className="flex items-center gap-2">
          <Input
            id="readonly-key"
            readOnly
            defaultValue="pk_live_98a7bc65d4e3f210"
            className="bg-muted font-mono text-xs"
          />
          <Button size="icon" variant="secondary" aria-label="Copy API Key">
            <Copy className="h-4 w-4" strokeWidth={2.5} />
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * 10. Textarea
 */
export function InputTextareaDemo() {
  const [notes, setNotes] = useState(
    "Added 6 real-time color presets and mechanical button press tokens."
  );

  return (
    <div className="w-full max-w-md space-y-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor="release-notes">Release Changelog</Label>
        <span className="font-mono text-xs text-muted-foreground">
          {notes.length} / 200
        </span>
      </div>
      <Textarea
        id="release-notes"
        maxLength={200}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Describe what changed in this version..."
      />
    </div>
  );
}

/**
 * 11. No Shadow
 */
export function InputNoShadowDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Input noShadow placeholder="Flat input without shadow..." />
      <Textarea noShadow placeholder="Flat textarea without shadow..." />
    </div>
  );
}
