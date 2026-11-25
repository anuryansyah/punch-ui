"use client";

import * as React from "react";
import { Lock, Palette, Rocket, Terminal } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

export function AccordionBasicDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="mx-auto max-w-lg"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is Punch UI accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. Every interactive primitive is built on Radix UI with full
          WAI-ARIA keyboard navigation, focus rings, and screen-reader roles.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I customize the theme presets?</AccordionTrigger>
        <AccordionContent>
          All 6 color presets, Dark Mode, and border radius values are driven by
          CSS variables so you can switch or override tokens globally in
          seconds.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I install components?</AccordionTrigger>
        <AccordionContent>
          Use the standard shadcn CLI pointing directly to the Punch UI registry
          JSON endpoints—no extra runtime lock-in required.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function AccordionMultipleDemo() {
  return (
    <Accordion
      type="multiple"
      defaultValue={["deploy", "tokens"]}
      className="mx-auto max-w-lg"
    >
      <AccordionItem value="deploy">
        <AccordionTrigger>Edge Deployment Pipeline</AccordionTrigger>
        <AccordionContent>
          Static registry artifacts are generated with{" "}
          <code className="font-mono font-bold text-foreground">
            npm run registry:build
          </code>{" "}
          and cached across regional CDN nodes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="tokens">
        <AccordionTrigger>Neobrutalist Design Tokens</AccordionTrigger>
        <AccordionContent>
          Consistent 2px borders, hard offset shadows, sharp 0px default
          corners, and strokeWidth 2.5 Lucide icons across all components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="i18n">
        <AccordionTrigger>Bilingual Documentation</AccordionTrigger>
        <AccordionContent>
          Every component page supports instant switching between Indonesian and
          English locales without page reloads.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function AccordionVariantsDemo() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="space-y-2">
        <Label>Separated Cards (variant=&quot;separated&quot;)</Label>
        <Accordion type="single" collapsible variant="separated">
          <AccordionItem value="sep-1">
            <AccordionTrigger>Standalone Card Item #1</AccordionTrigger>
            <AccordionContent>
              Each item renders as its own bordered Neobrutalist card with an
              independent offset shadow.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sep-2">
            <AccordionTrigger>Standalone Card Item #2</AccordionTrigger>
            <AccordionContent>
              Great for FAQ pages or expandable task checklists with breathing
              room between entries.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-2">
        <Label>Flush Minimal (variant=&quot;flush&quot;)</Label>
        <Accordion type="single" collapsible variant="flush">
          <AccordionItem value="flush-1">
            <AccordionTrigger>Flush Section #1</AccordionTrigger>
            <AccordionContent>
              Zero outer shadow or box chrome—ideal for embedding inside Cards,
              Dialogs, or Sheets.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="flush-2">
            <AccordionTrigger>Flush Section #2</AccordionTrigger>
            <AccordionContent>
              Uses crisp 2px horizontal dividers to separate collapsible items.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export function AccordionRichDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="cli"
      noShadow
      className="mx-auto max-w-lg"
    >
      <AccordionItem value="cli">
        <AccordionTrigger>
          <Terminal className="h-4 w-4 shrink-0" strokeWidth={2.5} />
          <span>CLI &amp; Registry</span>
          <Badge variant="success" size="sm" noShadow className="ml-auto">
            READY
          </Badge>
        </AccordionTrigger>
        <AccordionContent>
          Copy-paste or install any Punch UI component via JSON registry with
          dependencies automatically resolved.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="themes">
        <AccordionTrigger>
          <Palette className="h-4 w-4 shrink-0" strokeWidth={2.5} />
          <span>6 Live Color Presets</span>
          <Badge variant="secondary" size="sm" noShadow className="ml-auto">
            LIVE
          </Badge>
        </AccordionTrigger>
        <AccordionContent>
          Switch between Tangerine, Soft Blue, Cyber Yellow, Deep Ink, Soft
          Pink, and Crimson Red in real time.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="deploy">
        <AccordionTrigger>
          <Rocket className="h-4 w-4 shrink-0" strokeWidth={2.5} />
          <span>Production Bundle</span>
        </AccordionTrigger>
        <AccordionContent>
          Tree-shakeable TypeScript components with strict ESLint, Prettier, and
          Next.js App Router compatibility.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="enterprise" disabled>
        <AccordionTrigger>
          <Lock className="h-4 w-4 shrink-0" strokeWidth={2.5} />
          <span>Enterprise SSO Audit</span>
          <Badge variant="outline" size="sm" noShadow className="ml-auto">
            LOCKED
          </Badge>
        </AccordionTrigger>
        <AccordionContent>Disabled content.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
