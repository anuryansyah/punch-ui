"use client";

import * as React from "react";
import { useDropzone, type Accept, type FileRejection } from "react-dropzone";
import {
  AlertCircle,
  File as FileIcon,
  FileImage,
  FileSpreadsheet,
  FileText,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type { Accept, FileRejection };
export type FileUploadVariant = "default" | "compact";

export interface FileUploadProps {
  /** Controlled list of selected files */
  value?: File[];
  /** Uncontrolled initial files */
  defaultValue?: File[];
  /** Callback fired when the file list changes */
  onChange?: (files: File[]) => void;
  /** Callback fired when files are rejected by validation rules */
  onReject?: (rejections: FileRejection[]) => void;
  /** Accepted MIME types & extensions (react-dropzone Accept map) */
  accept?: Accept;
  /** Allow selecting multiple files */
  multiple?: boolean;
  /** Maximum number of files allowed in the list */
  maxFiles?: number;
  /** Maximum file size in bytes (e.g. 5 * 1024 * 1024 for 5MB) */
  maxSize?: number;
  /** Layout density: "default" (tall dropzone) or "compact" (inline bar) */
  variant?: FileUploadVariant;
  /** Show thumbnail previews for image files */
  showPreview?: boolean;
  /** Disables drag-and-drop and file dialog */
  disabled?: boolean;
  /** Removes hard Neobrutalist drop shadow */
  noShadow?: boolean;
  /** Highlights dropzone in destructive error state */
  error?: boolean;
  /** Custom primary dropzone heading */
  title?: string;
  /** Custom helper text below the heading */
  description?: string;
  className?: string;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const idx = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1
  );
  const value = bytes / Math.pow(1024, idx);
  return `${value >= 10 || idx === 0 ? value.toFixed(0) : value.toFixed(1)} ${units[idx]}`;
}

function getFileIcon(file: File) {
  if (file.type.startsWith("image/")) {
    return <FileImage className="h-4 w-4 shrink-0" strokeWidth={2.5} />;
  }
  if (
    file.type === "text/csv" ||
    file.name.endsWith(".csv") ||
    file.name.endsWith(".xlsx")
  ) {
    return <FileSpreadsheet className="h-4 w-4 shrink-0" strokeWidth={2.5} />;
  }
  if (file.type === "application/pdf" || file.type.startsWith("text/")) {
    return <FileText className="h-4 w-4 shrink-0" strokeWidth={2.5} />;
  }
  return <FileIcon className="h-4 w-4 shrink-0" strokeWidth={2.5} />;
}

function formatAcceptHint(accept?: Accept): string | null {
  if (!accept) return null;
  const exts = Object.values(accept).flat();
  if (exts.length > 0) {
    return exts.map((e) => e.replace(/^\./, "").toUpperCase()).join(", ");
  }
  return Object.keys(accept).join(", ");
}

/**
 * Neobrutalist File Upload / Dropzone powered by react-dropzone.
 * Supports drag-and-drop, real-time accept/reject visual states,
 * image thumbnail previews, file size/count validation, and compact mode.
 */
export function FileUpload({
  value,
  defaultValue = [],
  onChange,
  onReject,
  accept,
  multiple = true,
  maxFiles,
  maxSize,
  variant = "default",
  showPreview = true,
  disabled = false,
  noShadow = false,
  error = false,
  title,
  description,
  className,
}: FileUploadProps) {
  const [internalFiles, setInternalFiles] =
    React.useState<File[]>(defaultValue);
  const [rejectionMessages, setRejectionMessages] = React.useState<string[]>(
    []
  );

  const files = value !== undefined ? value : internalFiles;

  const updateFiles = React.useCallback(
    (next: File[]) => {
      if (value === undefined) {
        setInternalFiles(next);
      }
      onChange?.(next);
    },
    [value, onChange]
  );

  // Manage object URLs for image previews and clean up on change/unmount
  const [previewUrls, setPreviewUrls] = React.useState<Record<string, string>>(
    {}
  );

  React.useEffect(() => {
    if (!showPreview) {
      setPreviewUrls({});
      return;
    }

    const urls: Record<string, string> = {};
    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const key = `${file.name}-${file.size}-${file.lastModified}`;
        urls[key] = URL.createObjectURL(file);
      }
    });
    setPreviewUrls(urls);

    return () => {
      Object.values(urls).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files, showPreview]);

  const handleDrop = React.useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      const nextErrors: string[] = [];

      if (fileRejections.length > 0) {
        onReject?.(fileRejections);
        fileRejections.forEach((rej) => {
          const reason = rej.errors
            .map((err) => {
              if (err.code === "file-too-large" && maxSize) {
                return `exceeds ${formatFileSize(maxSize)}`;
              }
              if (err.code === "file-invalid-type") {
                return "unsupported file type";
              }
              if (err.code === "too-many-files" && maxFiles) {
                return `maximum ${maxFiles} file(s) allowed`;
              }
              return err.message;
            })
            .join(", ");
          nextErrors.push(`${rej.file.name}: ${reason}`);
        });
      }

      if (acceptedFiles.length > 0) {
        let merged = multiple
          ? [...files, ...acceptedFiles]
          : [acceptedFiles[0]];

        if (maxFiles && merged.length > maxFiles) {
          nextErrors.push(`Maximum ${maxFiles} file(s) allowed.`);
          merged = merged.slice(0, maxFiles);
        }

        updateFiles(merged);
      }

      setRejectionMessages(nextErrors);
    },
    [files, maxFiles, maxSize, multiple, onReject, updateFiles]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop: handleDrop,
    accept,
    multiple,
    maxFiles,
    maxSize,
    disabled,
  });

  const handleRemove = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    updateFiles(next);
    setRejectionMessages([]);
  };

  const handleClearAll = () => {
    updateFiles([]);
    setRejectionMessages([]);
  };

  const acceptHint = formatAcceptHint(accept);
  const autoDescription = [
    acceptHint ? `Formats: ${acceptHint}` : "Any file format",
    maxSize ? `Max ${formatFileSize(maxSize)}` : null,
    maxFiles ? `Up to ${maxFiles} file${maxFiles > 1 ? "s" : ""}` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  const resolvedTitle =
    title ??
    (isDragReject
      ? "Unsupported file!"
      : isDragAccept
        ? "Drop files here!"
        : variant === "compact"
          ? "Drop files or click to browse"
          : "Drag & drop files here, or click to browse");

  const resolvedDescription = description ?? autoDescription;

  return (
    <div className={cn("w-full space-y-3", className)}>
      {/* Dropzone Surface */}
      <div
        {...getRootProps()}
        aria-disabled={disabled}
        className={cn(
          "relative cursor-pointer rounded-md border-2 outline-none transition-all",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          variant === "compact" ? "px-4 py-3" : "px-6 py-8 text-center",
          // Visual states
          isDragReject
            ? "bg-destructive/15 border-solid border-destructive text-foreground"
            : isDragAccept
              ? "bg-success/20 border-solid border-border text-foreground"
              : isDragActive
                ? "bg-secondary/50 border-solid border-border text-foreground"
                : error
                  ? "hover:bg-muted/60 border-dashed border-destructive bg-card text-card-foreground"
                  : "hover:bg-muted/60 border-dashed border-border bg-card text-card-foreground",
          // Shadow
          !noShadow &&
            !disabled &&
            (isDragReject || error
              ? variant === "compact"
                ? "shadow-brutal-error-sm"
                : "shadow-brutal-error"
              : isDragAccept
                ? variant === "compact"
                  ? "shadow-brutal-success-sm"
                  : "shadow-brutal-success"
                : variant === "compact"
                  ? "shadow-brutal-sm"
                  : "shadow-brutal"),
          disabled &&
            "bg-muted/40 pointer-events-none cursor-not-allowed opacity-55 shadow-none"
        )}
      >
        <input {...getInputProps()} />

        <div
          className={cn(
            "flex w-full items-center",
            variant === "compact"
              ? "flex-row justify-between gap-3"
              : "flex-col justify-center gap-2.5"
          )}
        >
          <div
            className={cn(
              "flex min-w-0 items-center gap-3",
              variant === "default" && "flex-col gap-2.5"
            )}
          >
            <div
              className={cn(
                "flex shrink-0 items-center justify-center rounded-md border-2 border-border shadow-brutal-sm transition-colors",
                variant === "compact" ? "h-9 w-9" : "h-12 w-12",
                isDragReject
                  ? "bg-destructive text-destructive-foreground"
                  : isDragAccept
                    ? "bg-success text-success-foreground"
                    : "bg-secondary text-secondary-foreground"
              )}
            >
              <UploadCloud
                className={variant === "compact" ? "h-4 w-4" : "h-6 w-6"}
                strokeWidth={2.5}
              />
            </div>

            <div
              className={cn(
                "min-w-0",
                variant === "compact" ? "text-left" : "space-y-1 text-center"
              )}
            >
              <p className="text-sm font-bold leading-snug">{resolvedTitle}</p>
              <p className="font-mono text-[11px] text-muted-foreground">
                {resolvedDescription}
              </p>
            </div>
          </div>

          {variant === "compact" && (
            <Badge variant="outline" size="sm" noShadow className="shrink-0">
              Browse
            </Badge>
          )}
        </div>
      </div>

      {/* Validation Error Banner */}
      {rejectionMessages.length > 0 && (
        <div
          role="alert"
          className="bg-destructive/10 flex items-start justify-between gap-2 rounded-md border-2 border-destructive px-3.5 py-2.5 text-xs font-bold text-destructive"
        >
          <div className="flex items-start gap-2">
            <AlertCircle
              className="mt-0.5 h-4 w-4 shrink-0"
              strokeWidth={2.5}
            />
            <ul className="space-y-0.5">
              {rejectionMessages.map((msg, i) => (
                <li key={`${msg}-${i}`}>{msg}</li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={() => setRejectionMessages([])}
            aria-label="Dismiss error"
            className="shrink-0 rounded-sm p-0.5 hover:bg-destructive hover:text-destructive-foreground"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        </div>
      )}

      {/* Selected Files List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
              {files.length} file{files.length > 1 ? "s" : ""} selected
            </span>
            {files.length > 1 && !disabled && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                noShadow
                onClick={handleClearAll}
                className="h-7 px-2 text-xs text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <Trash2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                Clear all
              </Button>
            )}
          </div>

          <ul className="space-y-2">
            {files.map((file, index) => {
              const key = `${file.name}-${file.size}-${file.lastModified}`;
              const previewUrl = previewUrls[key];

              return (
                <li
                  key={`${key}-${index}`}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-md border-2 border-border bg-card p-2.5 text-card-foreground",
                    !noShadow && "shadow-brutal-sm"
                  )}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    {previewUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={previewUrl}
                        alt={file.name}
                        className="h-10 w-10 shrink-0 rounded-sm border-2 border-border object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border-2 border-border bg-muted text-foreground">
                        {getFileIcon(file)}
                      </div>
                    )}

                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold">{file.name}</p>
                      <p className="font-mono text-[11px] text-muted-foreground">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>

                  {!disabled && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      noShadow
                      onClick={() => handleRemove(index)}
                      aria-label={`Remove ${file.name}`}
                      className="h-7 w-7 shrink-0 hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
