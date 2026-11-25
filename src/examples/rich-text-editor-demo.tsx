"use client";

import React, { useState } from "react";
import { CheckCircle2, Code2, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RichTextEditor } from "@/components/ui/rich-text-editor";

const INITIAL_HTML = `<h2>Punch UI Release Notes</h2>
<p>Build <strong>bold</strong>, <em>high-contrast</em> interfaces with <u>zero visual fluff</u> and <code>2px</code> crisp borders.</p>
<ul>
  <li>Powered by <strong>Tiptap v3</strong> headless ProseMirror engine</li>
  <li>Supports headings, lists, alignment, code blocks, and <a href="https://tiptap.dev">links</a></li>
</ul>
<blockquote>Design with thick ink outlines and tactile hard shadows.</blockquote>`;

const READONLY_HTML = `<h3>v1.4 Deployment Summary</h3>
<p>All <strong>36 core components</strong> passed automated typecheck and registry validation.</p>
<ol>
  <li>Updated global scrollbar styling to borderless transparent track</li>
  <li>Added <code>RichTextEditor</code> with full &amp; minimal toolbar presets</li>
</ol>`;

/**
 * Overview demo
 */
export function RichTextEditorDemo() {
  return <RichTextEditorBasicDemo />;
}

/**
 * 1. Basic (Full Toolbar)
 */
export function RichTextEditorBasicDemo() {
  const [html, setHtml] = useState(INITIAL_HTML);
  const [showHtml, setShowHtml] = useState(false);

  return (
    <div className="w-full max-w-2xl space-y-3">
      <RichTextEditor
        value={html}
        onChange={setHtml}
        showCharacterCount
        placeholder="Start writing your announcement..."
      />

      <div className="flex items-center justify-end">
        <Button
          type="button"
          variant="outline"
          size="sm"
          noShadow
          onClick={() => setShowHtml((prev) => !prev)}
        >
          <Code2 className="h-3.5 w-3.5" strokeWidth={2.5} />
          {showHtml ? "Hide HTML Output" : "Inspect HTML Output"}
        </Button>
      </div>

      {showHtml && (
        <pre className="max-h-40 overflow-auto rounded-md border-2 border-border bg-[#141923] p-3 font-mono text-xs text-[#f8fafc]">
          {html}
        </pre>
      )}
    </div>
  );
}

/**
 * 2. Minimal Toolbar (Comment Box)
 */
export function RichTextEditorMinimalDemo() {
  const [comment, setComment] = useState(
    "<p>Looks great! Let's ship this to <strong>staging</strong> after the QA pass.</p>"
  );

  return (
    <div className="w-full max-w-xl space-y-2">
      <Label className="block">Quick Review Comment</Label>
      <RichTextEditor
        variant="minimal"
        size="sm"
        value={comment}
        onChange={setComment}
        maxLength={280}
        showCharacterCount
        placeholder="Write a concise reply..."
      />
    </div>
  );
}

/**
 * 3. Size (sm, default, lg)
 */
export function RichTextEditorSizeDemo() {
  return (
    <div className="w-full max-w-2xl space-y-6">
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
          size=&quot;sm&quot;
        </span>
        <RichTextEditor
          size="sm"
          variant="minimal"
          defaultValue="<p>Compact editor for comments and inline notes.</p>"
        />
      </div>

      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
          size=&quot;default&quot;
        </span>
        <RichTextEditor
          size="default"
          defaultValue="<p>Standard editor height for descriptions and changelogs.</p>"
        />
      </div>

      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
          size=&quot;lg&quot;
        </span>
        <RichTextEditor
          size="lg"
          defaultValue="<p>Spacious canvas ideal for long-form articles and documentation.</p>"
        />
      </div>
    </div>
  );
}

/**
 * 4. Read-Only, Disabled, No Shadow & Error
 */
export function RichTextEditorStatesDemo() {
  return (
    <div className="grid w-full max-w-2xl gap-5">
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
          readOnly (toolbar hidden)
        </span>
        <RichTextEditor readOnly defaultValue={READONLY_HTML} />
      </div>

      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
          disabled
        </span>
        <RichTextEditor
          disabled
          size="sm"
          variant="minimal"
          defaultValue="<p>This editor is locked while a review is in progress.</p>"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
            noShadow
          </span>
          <RichTextEditor
            noShadow
            size="sm"
            variant="minimal"
            defaultValue="<p>Flat surface without hard drop shadow.</p>"
          />
        </div>

        <div className="space-y-1.5">
          <span className="font-mono text-xs font-bold uppercase text-destructive">
            error
          </span>
          <RichTextEditor
            error
            size="sm"
            variant="minimal"
            placeholder="Body content is required..."
          />
        </div>
      </div>
    </div>
  );
}

/**
 * 5. Article / Release Composer (Form Integration)
 */
export function RichTextEditorFormDemo() {
  const [title, setTitle] = useState("Q4 Product Roadmap Update");
  const [body, setBody] = useState(
    "<p>We are rolling out the new <strong>Neobrutalist</strong> dashboard toolkit next Monday.</p>"
  );
  const [hasError, setHasError] = useState(false);
  const [published, setPublished] = useState(false);

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    const plainText = body.replace(/<[^>]+>/g, "").trim();
    if (!title.trim() || !plainText) {
      setHasError(true);
      setPublished(false);
      return;
    }
    setHasError(false);
    setPublished(true);
  };

  return (
    <Card className="w-full max-w-2xl">
      <form onSubmit={handlePublish}>
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <CardTitle className="text-base">New Announcement</CardTitle>
              <CardDescription>
                Author: Alex Morgan &middot; Workspace Changelog
              </CardDescription>
            </div>
            {published && (
              <Badge variant="success" noShadow>
                <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                Published
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="post-title">Title</Label>
            <Input
              id="post-title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setPublished(false);
              }}
              placeholder="Enter announcement title..."
            />
          </div>

          <div className="space-y-1.5">
            <Label>Body</Label>
            <RichTextEditor
              value={body}
              onChange={(val) => {
                setBody(val);
                setHasError(false);
                setPublished(false);
              }}
              error={hasError}
              showCharacterCount
              maxLength={500}
              placeholder="Write your release details..."
            />
            {hasError && (
              <p className="text-xs font-bold text-destructive">
                Please provide both a title and body content before publishing.
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter className="justify-between">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setTitle("");
              setBody("");
              setHasError(false);
              setPublished(false);
            }}
          >
            Clear Draft
          </Button>
          <Button type="submit" size="sm">
            <Send className="h-3.5 w-3.5" strokeWidth={2.5} />
            Publish Update
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
