"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

/**
 * Overview demo
 */
export function RadioGroupDemo() {
  return <RadioGroupBasicDemo />;
}

/**
 * 1. Basic Radio Group
 */
export function RadioGroupBasicDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2.5">
        <RadioGroupItem value="default" id="rg-default" />
        <Label htmlFor="rg-default" className="cursor-pointer">
          Default Density
        </Label>
      </div>
      <div className="flex items-center gap-2.5">
        <RadioGroupItem value="comfortable" id="rg-comfortable" />
        <Label htmlFor="rg-comfortable" className="cursor-pointer">
          Comfortable
        </Label>
      </div>
      <div className="flex items-center gap-2.5">
        <RadioGroupItem value="compact" id="rg-compact" />
        <Label htmlFor="rg-compact" className="cursor-pointer">
          Compact
        </Label>
      </div>
    </RadioGroup>
  );
}

/**
 * 2. Shape (Circle vs Square) & Horizontal
 */
export function RadioGroupShapeDemo() {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-2">
        <p className="font-mono text-xs font-bold uppercase text-muted-foreground">
          Circle (Default)
        </p>
        <RadioGroup orientation="horizontal" defaultValue="monthly">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="monthly" id="rg-circle-m" shape="circle" />
            <Label htmlFor="rg-circle-m" className="cursor-pointer">
              Monthly
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="yearly" id="rg-circle-y" shape="circle" />
            <Label htmlFor="rg-circle-y" className="cursor-pointer">
              Yearly (Save 20%)
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <p className="font-mono text-xs font-bold uppercase text-muted-foreground">
          Square (shape=&quot;square&quot;)
        </p>
        <RadioGroup orientation="horizontal" defaultValue="daily">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="daily" id="rg-sq-d" shape="square" />
            <Label htmlFor="rg-sq-d" className="cursor-pointer">
              Daily Digest
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="weekly" id="rg-sq-w" shape="square" />
            <Label htmlFor="rg-sq-w" className="cursor-pointer">
              Weekly Summary
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

/**
 * 3. Size
 */
export function RadioGroupSizeDemo() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="default">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="sm" id="rg-size-sm" radioSize="sm" />
        <Label
          htmlFor="rg-size-sm"
          className="cursor-pointer font-mono text-xs"
        >
          sm
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="default"
          id="rg-size-default"
          radioSize="default"
        />
        <Label
          htmlFor="rg-size-default"
          className="cursor-pointer font-mono text-xs"
        >
          default
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="lg" id="rg-size-lg" radioSize="lg" />
        <Label
          htmlFor="rg-size-lg"
          className="cursor-pointer font-mono text-xs"
        >
          lg
        </Label>
      </div>
    </RadioGroup>
  );
}

/**
 * 4. Variants
 */
export function RadioGroupVariantDemo() {
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
        <RadioGroup key={item.id} defaultValue={item.id}>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value={item.id}
              id={`rg-var-${item.id}`}
              variant={item.variant}
            />
            <Label
              htmlFor={`rg-var-${item.id}`}
              className="cursor-pointer font-mono text-xs"
            >
              {item.label}
            </Label>
          </div>
        </RadioGroup>
      ))}
    </div>
  );
}

/**
 * 5. Card Selection
 */
export function RadioGroupCardDemo() {
  const [plan, setPlan] = React.useState("pro");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$0/mo",
      desc: "Up to 3 projects & community support.",
    },
    {
      id: "pro",
      name: "Pro Studio",
      price: "$19/mo",
      desc: "Unlimited workspaces & priority builds.",
    },
    {
      id: "team",
      name: "Team",
      price: "$49/mo",
      desc: "SSO, audit logs, and shared billing.",
    },
  ];

  return (
    <RadioGroup
      value={plan}
      onValueChange={setPlan}
      className="w-full max-w-md"
    >
      {plans.map((item) => {
        const isSelected = plan === item.id;
        return (
          <label
            key={item.id}
            htmlFor={`plan-${item.id}`}
            className={`flex cursor-pointer items-start justify-between gap-3 rounded-md border-2 border-border p-3.5 transition-all ${
              isSelected
                ? "bg-secondary text-secondary-foreground shadow-brutal"
                : "bg-card text-card-foreground shadow-brutal-sm hover:bg-muted"
            }`}
          >
            <div className="flex items-start gap-3">
              <RadioGroupItem
                value={item.id}
                id={`plan-${item.id}`}
                noShadow
                className="mt-0.5"
              />
              <div className="space-y-0.5">
                <p className="text-sm font-extrabold leading-none">
                  {item.name}
                </p>
                <p className="text-xs opacity-80">{item.desc}</p>
              </div>
            </div>
            <span className="font-mono text-xs font-extrabold">
              {item.price}
            </span>
          </label>
        );
      })}
    </RadioGroup>
  );
}

/**
 * 6. Validation, Disabled & No Shadow
 */
export function RadioGroupStatesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <RadioGroup>
        <div className="flex items-center gap-2.5">
          <RadioGroupItem value="required" id="rg-error" state="error" />
          <Label htmlFor="rg-error" className="cursor-pointer text-destructive">
            Please select a shipping method
          </Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="locked" disabled>
        <div className="flex items-center gap-2.5">
          <RadioGroupItem value="locked" id="rg-disabled" />
          <Label htmlFor="rg-disabled" className="opacity-50">
            Disabled selected option
          </Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="flat">
        <div className="flex items-center gap-2.5">
          <RadioGroupItem value="flat" id="rg-noshadow" noShadow />
          <Label htmlFor="rg-noshadow" className="cursor-pointer">
            Flat radio item (noShadow)
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
