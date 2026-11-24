"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";

/**
 * Overview demo
 */
export function FileUploadDemo() {
  return <FileUploadBasicDemo />;
}

/**
 * 1. Basic Dropzone (Multiple Files)
 */
export function FileUploadBasicDemo() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="w-full max-w-lg">
      <FileUpload value={files} onChange={setFiles} />
    </div>
  );
}

/**
 * 2. Image Upload with Thumbnail Preview
 */
export function FileUploadImageDemo() {
  const [images, setImages] = useState<File[]>([]);

  return (
    <div className="w-full max-w-lg space-y-2">
      <Label className="block">Product Cover Images</Label>
      <FileUpload
        value={images}
        onChange={setImages}
        accept={{ "image/*": [".png", ".jpg", ".jpeg", ".webp"] }}
        maxSize={5 * 1024 * 1024}
        maxFiles={4}
        showPreview
        title="Drop product images here"
      />
    </div>
  );
}

/**
 * 3. Validation (Type, Max Size & Max Files)
 */
export function FileUploadValidationDemo() {
  const [docs, setDocs] = useState<File[]>([]);

  return (
    <div className="w-full max-w-lg space-y-2">
      <Label className="block">Invoice Attachments (PDF / CSV only)</Label>
      <FileUpload
        value={docs}
        onChange={setDocs}
        accept={{
          "application/pdf": [".pdf"],
          "text/csv": [".csv"],
        }}
        maxSize={2 * 1024 * 1024}
        maxFiles={2}
        title="Upload PDF or CSV reports"
      />
    </div>
  );
}

/**
 * 4. Compact Variant
 */
export function FileUploadCompactDemo() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="w-full max-w-lg space-y-2">
      <Label className="block">Import CSV Dataset</Label>
      <FileUpload
        variant="compact"
        multiple={false}
        accept={{ "text/csv": [".csv"] }}
        maxSize={5 * 1024 * 1024}
        value={files}
        onChange={setFiles}
      />
    </div>
  );
}

/**
 * 5. Disabled, No Shadow & Error States
 */
export function FileUploadStatesDemo() {
  return (
    <div className="grid w-full max-w-2xl gap-5">
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
          disabled
        </span>
        <FileUpload
          disabled
          variant="compact"
          title="Uploads locked during maintenance"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
            noShadow
          </span>
          <FileUpload
            noShadow
            variant="compact"
            title="Flat dropzone surface"
          />
        </div>

        <div className="space-y-1.5">
          <span className="font-mono text-xs font-bold uppercase text-destructive">
            error
          </span>
          <FileUpload
            error
            variant="compact"
            title="Please attach at least 1 file"
          />
        </div>
      </div>
    </div>
  );
}
