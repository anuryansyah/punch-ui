"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";

const HIGHLIGHTS = [
  "47 COMPONENTS",
  "6 LIVE PRESETS",
  "CUSTOM COLOR BUILDER",
  "LIGHT & DARK MODE",
  "CUSTOM REGISTRY",
  "ZERO BLUR",
];

const TAGS = [
  "Charts",
  "Data Table",
  "Rich Text Editor",
  "File Upload",
  "Color Picker",
  "Navigation Menu",
  "Command",
  "Combobox",
  "Input OTP",
  "Toggle Group",
];

/**
 * Overview demo
 */
export function MarqueeDemo() {
  return <MarqueeBasicDemo />;
}

/**
 * 1. Basic Marquee Ticker
 */
export function MarqueeBasicDemo() {
  return (
    <div className="w-full max-w-2xl">
      <Marquee variant="secondary">
        {HIGHLIGHTS.map((item) => (
          <React.Fragment key={item}>
            <span className="font-mono text-xs font-black uppercase tracking-wider">
              {item}
            </span>
            <span aria-hidden="true" className="text-sm font-black">
              ✦
            </span>
          </React.Fragment>
        ))}
      </Marquee>
    </div>
  );
}

/**
 * 2. Variants (default, primary, secondary, muted)
 */
export function MarqueeVariantsDemo() {
  return (
    <div className="w-full max-w-2xl space-y-3">
      {(["default", "primary", "secondary", "muted"] as const).map((v) => (
        <Marquee key={v} variant={v} speed="slow">
          {HIGHLIGHTS.map((item) => (
            <React.Fragment key={item}>
              <span className="font-mono text-xs font-black uppercase tracking-wider">
                {v.toUpperCase()} — {item}
              </span>
              <span aria-hidden="true" className="font-black">
                /
              </span>
            </React.Fragment>
          ))}
        </Marquee>
      ))}
    </div>
  );
}

/**
 * 3. Opposite Direction & Speed (Dual Row)
 */
export function MarqueeDualDemo() {
  return (
    <div className="w-full max-w-2xl space-y-3">
      <Marquee variant="primary" direction="left" speed="fast">
        {HIGHLIGHTS.map((item) => (
          <React.Fragment key={item}>
            <span className="font-mono text-xs font-black uppercase tracking-wider">
              {item}
            </span>
            <span aria-hidden="true" className="font-black">
              ✦
            </span>
          </React.Fragment>
        ))}
      </Marquee>

      <Marquee variant="default" direction="right" speed="slow">
        {TAGS.map((tag) => (
          <Badge key={tag} variant="outline" noShadow className="font-mono">
            {tag}
          </Badge>
        ))}
      </Marquee>
    </div>
  );
}

/**
 * 4. No Shadow & Pause Control
 */
export function MarqueeNoShadowDemo() {
  return (
    <div className="w-full max-w-2xl space-y-3">
      <Marquee variant="muted" noShadow pauseOnHover>
        {TAGS.map((tag) => (
          <Badge key={tag} variant="secondary" size="sm" noShadow>
            {tag}
          </Badge>
        ))}
      </Marquee>
    </div>
  );
}
