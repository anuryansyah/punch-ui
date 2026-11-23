"use client";

import * as React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Loader2,
  ShieldAlert,
} from "lucide-react";
import { Toaster as Sonner, toast } from "sonner";
import { cn } from "@/lib/utils";

export { toast };

export type ToasterProps = React.ComponentProps<typeof Sonner> & {
  noShadow?: boolean;
};

/**
 * Neobrutalist Sonner Toaster with bold 2px borders, hard offset shadows,
 * Lucide strokeWidth={2.5} status icons, and semantic status colors.
 */
export function Toaster({
  noShadow = false,
  position = "bottom-right",
  icons,
  toastOptions,
  ...props
}: ToasterProps) {
  return (
    <Sonner
      position={position}
      icons={{
        success: <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />,
        info: <Info className="h-4 w-4" strokeWidth={2.5} />,
        warning: <AlertTriangle className="h-4 w-4" strokeWidth={2.5} />,
        error: <ShieldAlert className="h-4 w-4" strokeWidth={2.5} />,
        loading: <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />,
        ...icons,
      }}
      toastOptions={{
        unstyled: true,
        ...toastOptions,
        classNames: {
          toast: cn(
            "group pointer-events-auto flex w-full items-center gap-3 rounded-md border-2 border-border bg-card p-4 font-sans text-card-foreground",
            !noShadow && "shadow-brutal",
            toastOptions?.classNames?.toast
          ),
          content: cn("min-w-0 flex-1", toastOptions?.classNames?.content),
          title: cn(
            "text-sm font-extrabold leading-tight",
            toastOptions?.classNames?.title
          ),
          description: cn(
            "mt-0.5 text-xs leading-relaxed opacity-90",
            toastOptions?.classNames?.description
          ),
          icon: cn(
            "relative flex h-5 w-5 shrink-0 items-center justify-center",
            toastOptions?.classNames?.icon
          ),
          actionButton: cn(
            "ml-auto shrink-0 cursor-pointer rounded-sm border-2 border-border bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground shadow-brutal-sm transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
            toastOptions?.classNames?.actionButton
          ),
          cancelButton: cn(
            "shrink-0 cursor-pointer rounded-sm border-2 border-border bg-muted px-2.5 py-1 text-xs font-bold text-foreground",
            toastOptions?.classNames?.cancelButton
          ),
          closeButton: cn(
            "border-2 border-border bg-card text-foreground",
            toastOptions?.classNames?.closeButton
          ),
          success: cn(
            "!bg-success !text-success-foreground",
            toastOptions?.classNames?.success
          ),
          info: cn(
            "!bg-info !text-info-foreground",
            toastOptions?.classNames?.info
          ),
          warning: cn(
            "!bg-warning !text-warning-foreground",
            toastOptions?.classNames?.warning
          ),
          error: cn(
            "!bg-destructive !text-destructive-foreground",
            toastOptions?.classNames?.error
          ),
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  );
}
