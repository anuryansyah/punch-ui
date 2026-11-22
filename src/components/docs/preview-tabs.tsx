"use client";

import React, { useState } from "react";
import { Check, Code2, Copy, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

interface PreviewTabsProps {
  title: string;
  filePath: string;
  rawCode: string;
  highlightedHtml: string;
  children: React.ReactNode;
}

export function PreviewTabs({
  title,
  filePath,
  rawCode,
  highlightedHtml,
  children,
}: PreviewTabsProps) {
  const { dict } = useLanguage();
  const pt = dict.common.previewTabs;
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-lg border-2 border-border bg-card text-card-foreground shadow-brutal-sm md:shadow-brutal">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-border bg-muted/60 px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full border-2 border-border bg-destructive" />
            <span className="h-3 w-3 rounded-full border-2 border-border bg-warning" />
            <span className="h-3 w-3 rounded-full border-2 border-border bg-success" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex h-8 items-center rounded-md border-2 border-border bg-card p-0.5">
            <Button
              type="button"
              size="sm"
              noShadow
              variant={tab === "preview" ? "default" : "ghost"}
              onClick={() => setTab("preview")}
              className="h-full rounded-sm border-0 px-2.5 py-0 text-xs"
            >
              <Eye className="h-3.5 w-3.5" strokeWidth={2.5} />
              {pt.preview}
            </Button>
            <Button
              type="button"
              size="sm"
              noShadow
              variant={tab === "code" ? "default" : "ghost"}
              onClick={() => setTab("code")}
              className="h-full rounded-sm border-0 px-2.5 py-0 text-xs"
            >
              <Code2 className="h-3.5 w-3.5" strokeWidth={2.5} />
              {pt.code}
            </Button>
          </div>

          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={handleCopy}
            aria-label={copied ? pt.copied : pt.copy}
            title={copied ? pt.copied : pt.copy}
            className="h-8 w-8 shadow-brutal-sm active:translate-x-[2px] active:translate-y-[2px] md:shadow-brutal-sm"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            ) : (
              <Copy className="h-3.5 w-3.5" strokeWidth={2.5} />
            )}
          </Button>
        </div>
      </div>

      {/* Body */}
      {tab === "preview" ? (
        <div
          data-preview-canvas
          className="bg-dot-pattern flex min-h-[180px] items-center justify-center p-6 md:p-10"
        >
          {children}
        </div>
      ) : (
        <div
          className="max-h-[420px] overflow-auto bg-[#141923] p-4 font-mono text-xs leading-relaxed text-[#f8fafc] [&_pre]:!bg-transparent [&_pre]:!p-0"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      )}
    </div>
  );
}
