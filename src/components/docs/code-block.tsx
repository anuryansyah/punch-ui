"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CodeBlockProps {
  code: string;
  title?: string;
  language?: string;
  maxHeightClassName?: string;
  className?: string;
}

export function CodeBlock({
  code,
  maxHeightClassName = "max-h-[360px]",
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md border-2 border-border bg-[#141923] text-[#f8fafc] shadow-brutal-sm",
        className
      )}
    >
      <Button
        type="button"
        variant="secondary"
        size="icon"
        noShadow
        onClick={handleCopy}
        aria-label={copied ? "Copied!" : "Copy code"}
        title={copied ? "Copied!" : "Copy code"}
        className="absolute right-3 top-3 z-10 h-8 w-8"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
        ) : (
          <Copy className="h-3.5 w-3.5" strokeWidth={2.5} />
        )}
      </Button>

      <pre
        className={cn(
          "overflow-auto p-4 pr-14 font-mono text-xs leading-relaxed",
          maxHeightClassName
        )}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
