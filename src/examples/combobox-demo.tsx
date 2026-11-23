"use client";

import * as React from "react";
import {
  Cloud,
  Cpu,
  Database,
  Globe,
  Layers,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import {
  Combobox,
  MultiCombobox,
  type ComboboxOption,
} from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";

const frameworkOptions: ComboboxOption[] = [
  { value: "nextjs", label: "Next.js", keywords: ["react", "vercel", "ssr"] },
  { value: "vite", label: "Vite", keywords: ["bundler", "fast"] },
  { value: "astro", label: "Astro", keywords: ["islands", "static"] },
  { value: "remix", label: "Remix", keywords: ["react", "router"] },
  { value: "nuxt", label: "Nuxt", keywords: ["vue", "ssr"] },
  { value: "sveltekit", label: "SvelteKit", keywords: ["svelte"] },
];

const stackOptions: ComboboxOption[] = [
  { value: "typescript", label: "TypeScript" },
  { value: "react", label: "React 19" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "postgres", label: "PostgreSQL" },
  { value: "prisma", label: "Prisma ORM" },
  { value: "docker", label: "Docker" },
  { value: "graphql", label: "GraphQL" },
  { value: "redis", label: "Redis" },
];

const serviceOptions: ComboboxOption[] = [
  {
    value: "edge-cdn",
    label: "Edge CDN",
    description: "Global static & ISR delivery",
    group: "Frontend",
    badge: "FAST",
    icon: <Globe className="h-4 w-4" strokeWidth={2.5} />,
  },
  {
    value: "ui-kit",
    label: "Design System",
    description: "Shared Neobrutalist tokens",
    group: "Frontend",
    icon: <Layers className="h-4 w-4" strokeWidth={2.5} />,
  },
  {
    value: "api-gateway",
    label: "API Gateway",
    description: "Rate-limited REST & RPC routes",
    group: "Backend",
    badge: "CORE",
    icon: <Server className="h-4 w-4" strokeWidth={2.5} />,
  },
  {
    value: "postgres-db",
    label: "Primary Database",
    description: "Managed PostgreSQL cluster",
    group: "Backend",
    icon: <Database className="h-4 w-4" strokeWidth={2.5} />,
  },
  {
    value: "worker-queue",
    label: "Background Workers",
    description: "Async job processing",
    group: "Infrastructure",
    icon: <Cpu className="h-4 w-4" strokeWidth={2.5} />,
  },
  {
    value: "cloud-kms",
    label: "Hardware Vault",
    description: "Enterprise HSM encryption",
    group: "Infrastructure",
    badge: "PRO",
    disabled: true,
    icon: <Shield className="h-4 w-4" strokeWidth={2.5} />,
  },
  {
    value: "edge-kv",
    label: "Edge KV Store",
    description: "Low-latency key-value cache",
    group: "Infrastructure",
    icon: <Zap className="h-4 w-4" strokeWidth={2.5} />,
  },
  {
    value: "cloud-storage",
    label: "Object Storage",
    description: "S3-compatible media buckets",
    group: "Infrastructure",
    icon: <Cloud className="h-4 w-4" strokeWidth={2.5} />,
  },
];

export function ComboboxBasicDemo() {
  const [framework, setFramework] = React.useState("nextjs");

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
      <div className="space-y-1.5">
        <Label htmlFor="combobox-framework">Framework</Label>
        <Combobox
          id="combobox-framework"
          options={frameworkOptions}
          value={framework}
          onValueChange={setFramework}
          placeholder="Select a framework..."
          searchPlaceholder="Search framework..."
          clearable
        />
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Selected value:{" "}
        <span className="font-bold text-foreground">{framework || "none"}</span>
      </p>
    </div>
  );
}

export function ComboboxMultiDemo() {
  const [skills, setSkills] = React.useState<string[]>([
    "typescript",
    "react",
    "tailwind",
  ]);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-3">
      <div className="space-y-1.5">
        <Label htmlFor="combobox-stack">Tech Stack</Label>
        <MultiCombobox
          id="combobox-stack"
          options={stackOptions}
          value={skills}
          onValueChange={setSkills}
          placeholder="Select technologies..."
          searchPlaceholder="Filter technologies..."
          maxDisplay={3}
          clearable
        />
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Selected ({skills.length}):{" "}
        <span className="font-bold text-foreground">
          {skills.length > 0 ? skills.join(", ") : "none"}
        </span>
      </p>
    </div>
  );
}

export function ComboboxGroupedDemo() {
  const [service, setService] = React.useState("api-gateway");

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="combobox-service">Target Service</Label>
      <Combobox
        id="combobox-service"
        options={serviceOptions}
        value={service}
        onValueChange={setService}
        placeholder="Choose a service..."
        searchPlaceholder="Search services or groups..."
        clearable
      />
    </div>
  );
}

export function ComboboxSizesDemo() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
      <div className="space-y-1.5">
        <Label>Small (sm)</Label>
        <Combobox
          options={frameworkOptions}
          triggerSize="sm"
          placeholder="Small combobox..."
        />
      </div>
      <div className="space-y-1.5">
        <Label>Default</Label>
        <Combobox
          options={frameworkOptions}
          triggerSize="default"
          placeholder="Default combobox..."
        />
      </div>
      <div className="space-y-1.5">
        <Label>Large (lg)</Label>
        <Combobox
          options={frameworkOptions}
          triggerSize="lg"
          placeholder="Large combobox..."
        />
      </div>
    </div>
  );
}

export function ComboboxStatesDemo() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
      <div className="space-y-1.5">
        <Label>Success</Label>
        <Combobox
          options={frameworkOptions}
          defaultValue="nextjs"
          state="success"
        />
      </div>
      <div className="space-y-1.5">
        <Label>Error</Label>
        <Combobox
          options={frameworkOptions}
          state="error"
          placeholder="Selection is required..."
        />
      </div>
      <div className="space-y-1.5">
        <Label>Disabled</Label>
        <Combobox options={frameworkOptions} defaultValue="astro" disabled />
      </div>
      <div className="space-y-1.5">
        <Label>No Shadow (Flat)</Label>
        <Combobox options={frameworkOptions} defaultValue="vite" noShadow />
      </div>
    </div>
  );
}
