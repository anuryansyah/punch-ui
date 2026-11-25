"use client";

import * as React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import CharacterCount from "@tiptap/extension-character-count";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Check,
  ChevronDown,
  Code,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  Pilcrow,
  Quote,
  Redo2,
  Strikethrough,
  Trash2,
  Underline as UnderlineIcon,
  Undo2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type RichTextEditorVariant = "default" | "minimal";
export type RichTextEditorSize = "sm" | "default" | "lg";

export interface RichTextEditorProps {
  /** Controlled HTML content */
  value?: string;
  /** Uncontrolled initial HTML content */
  defaultValue?: string;
  /** Callback fired when HTML content changes */
  onChange?: (html: string) => void;
  /** Placeholder shown when editor is empty */
  placeholder?: string;
  /** Toolbar preset: "default" (full) or "minimal" (compact) */
  variant?: RichTextEditorVariant;
  /** Controls minimum editor height & toolbar density */
  size?: RichTextEditorSize;
  /** Disables editing and dims the editor */
  disabled?: boolean;
  /** Renders formatted content without toolbar or editing */
  readOnly?: boolean;
  /** Removes hard Neobrutalist drop shadow */
  noShadow?: boolean;
  /** Highlights editor with destructive error border & shadow */
  error?: boolean;
  /** Displays bottom bar with word & character count */
  showCharacterCount?: boolean;
  /** Optional character limit enforced by Tiptap CharacterCount */
  maxLength?: number;
  className?: string;
  editorClassName?: string;
  "aria-label"?: string;
}

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  label: string;
  size: RichTextEditorSize;
  children: React.ReactNode;
}

function ToolbarButton({
  onClick,
  active = false,
  disabled = false,
  label,
  size,
  children,
}: ToolbarButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          aria-label={label}
          aria-pressed={active}
          className={cn(
            "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-sm border-2 font-bold transition-all",
            "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring",
            "disabled:pointer-events-none disabled:opacity-40",
            size === "sm" ? "h-7 w-7" : "h-8 w-8",
            active
              ? "border-border bg-primary text-primary-foreground shadow-brutal-sm"
              : "border-transparent bg-transparent text-card-foreground hover:border-border hover:bg-card"
          )}
        >
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="px-2 py-1 text-[11px]">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

const MIN_HEIGHT_MAP: Record<RichTextEditorSize, string> = {
  sm: "min-h-[110px] p-3 text-sm",
  default: "min-h-[180px] p-4 text-sm",
  lg: "min-h-[280px] p-5 text-base",
};

/**
 * Neobrutalist Rich Text Editor (WYSIWYG) powered by Tiptap v3.
 * Supports full and minimal toolbars, link popover, alignment, character count,
 * read-only & disabled states, and form error styling.
 */
export function RichTextEditor({
  value,
  defaultValue = "",
  onChange,
  placeholder = "Write something bold...",
  variant = "default",
  size = "default",
  disabled = false,
  readOnly = false,
  noShadow = false,
  error = false,
  showCharacterCount = false,
  maxLength,
  className,
  editorClassName,
  "aria-label": ariaLabel = "Rich text editor",
}: RichTextEditorProps) {
  const [linkOpen, setLinkOpen] = React.useState(false);
  const [linkUrl, setLinkUrl] = React.useState("");

  const isEditable = !disabled && !readOnly;

  const editor = useEditor({
    immediatelyRender: false,
    editable: isEditable,
    content: value !== undefined ? value : defaultValue,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
        link: {
          openOnClick: readOnly,
          autolink: true,
          HTMLAttributes: {
            rel: "noopener noreferrer nofollow",
            target: "_blank",
          },
        },
        underline: {},
      }),
      Placeholder.configure({
        placeholder,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CharacterCount.configure({
        limit: maxLength ?? null,
      }),
    ],
    editorProps: {
      attributes: {
        "aria-label": ariaLabel,
        class: cn(
          "punch-editor-content w-full outline-none",
          MIN_HEIGHT_MAP[size],
          editorClassName
        ),
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      onChange?.(currentEditor.getHTML());
    },
  });

  // Sync controlled value changes
  React.useEffect(() => {
    if (!editor || value === undefined) return;
    if (editor.getHTML() !== value) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [editor, value]);

  // Sync editable state
  React.useEffect(() => {
    if (!editor) return;
    editor.setEditable(isEditable);
  }, [editor, isEditable]);

  const handleOpenLinkPopover = (open: boolean) => {
    if (open && editor) {
      const previousUrl = editor.getAttributes("link").href as
        string | undefined;
      setLinkUrl(previousUrl ?? "");
    }
    setLinkOpen(open);
  };

  const handleApplyLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor) return;
    const trimmed = linkUrl.trim();
    if (!trimmed) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      const normalized = /^https?:\/\//i.test(trimmed)
        ? trimmed
        : `https://${trimmed}`;
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: normalized })
        .run();
    }
    setLinkOpen(false);
  };

  const handleRemoveLink = () => {
    if (!editor) return;
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    setLinkUrl("");
    setLinkOpen(false);
  };

  const iconClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const charCount = editor?.storage.characterCount.characters() ?? 0;
  const wordCount = editor?.storage.characterCount.words() ?? 0;
  const isAtLimit = maxLength !== undefined && charCount >= maxLength;

  const activeHeadingLevel = ([1, 2, 3, 4] as const).find((level) =>
    editor?.isActive("heading", { level })
  );
  const currentTextStyleLabel = activeHeadingLevel
    ? `Heading ${activeHeadingLevel}`
    : "Normal";

  const activeAlign = editor?.isActive({ textAlign: "center" })
    ? "center"
    : editor?.isActive({ textAlign: "right" })
      ? "right"
      : "left";

  return (
    <div
      data-disabled={disabled ? "true" : undefined}
      data-readonly={readOnly ? "true" : undefined}
      className={cn(
        "overflow-hidden rounded-md border-2 bg-card text-card-foreground transition-all",
        error ? "border-destructive" : "border-border",
        !noShadow &&
          !disabled &&
          (error ? "shadow-brutal-error" : "shadow-brutal"),
        disabled && "bg-muted/40 cursor-not-allowed opacity-60",
        className
      )}
    >
      {/* Toolbar (hidden in readOnly mode) */}
      {!readOnly && (
        <TooltipProvider delayDuration={250}>
          <div
            role="toolbar"
            aria-label="Formatting options"
            className={cn(
              "bg-muted/70 flex flex-wrap items-center gap-1 border-b-2 px-2.5 py-2",
              error ? "border-destructive" : "border-border"
            )}
          >
            {variant === "default" && (
              <>
                <ToolbarButton
                  size={size}
                  label="Undo (Ctrl+Z)"
                  disabled={disabled || !editor?.can().undo()}
                  onClick={() => editor?.chain().focus().undo().run()}
                >
                  <Undo2 className={iconClass} strokeWidth={2.5} />
                </ToolbarButton>
                <ToolbarButton
                  size={size}
                  label="Redo (Ctrl+Y)"
                  disabled={disabled || !editor?.can().redo()}
                  onClick={() => editor?.chain().focus().redo().run()}
                >
                  <Redo2 className={iconClass} strokeWidth={2.5} />
                </ToolbarButton>

                <Separator
                  orientation="vertical"
                  thickness="thin"
                  className="mx-1 h-5"
                />

                <DropdownMenu>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          disabled={disabled}
                          aria-label="Text style"
                          className={cn(
                            "inline-flex shrink-0 cursor-pointer items-center justify-between gap-1.5 rounded-sm border-2 px-2 font-bold transition-all",
                            "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring",
                            "disabled:pointer-events-none disabled:opacity-40",
                            size === "sm"
                              ? "h-7 min-w-[92px] text-[11px]"
                              : "h-8 min-w-[104px] text-xs",
                            activeHeadingLevel
                              ? "border-border bg-primary text-primary-foreground shadow-brutal-sm"
                              : "hover:bg-secondary/60 border-border bg-card text-card-foreground"
                          )}
                        >
                          <span className="truncate">
                            {currentTextStyleLabel}
                          </span>
                          <ChevronDown
                            className="h-3.5 w-3.5 shrink-0"
                            strokeWidth={2.5}
                          />
                        </button>
                      </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="px-2 py-1 text-[11px]"
                    >
                      Text Style
                    </TooltipContent>
                  </Tooltip>

                  <DropdownMenuContent align="start" className="w-44">
                    {(
                      [
                        {
                          level: 1,
                          label: "Heading 1",
                          Icon: Heading1,
                          textClass: "text-base font-black",
                        },
                        {
                          level: 2,
                          label: "Heading 2",
                          Icon: Heading2,
                          textClass: "text-sm font-extrabold",
                        },
                        {
                          level: 3,
                          label: "Heading 3",
                          Icon: Heading3,
                          textClass: "text-xs font-extrabold",
                        },
                        {
                          level: 4,
                          label: "Heading 4",
                          Icon: Heading4,
                          textClass: "text-xs font-bold",
                        },
                      ] as const
                    ).map(({ level, label, Icon, textClass }) => (
                      <DropdownMenuItem
                        key={level}
                        onSelect={() =>
                          editor?.chain().focus().toggleHeading({ level }).run()
                        }
                        className="justify-between"
                      >
                        <span
                          className={cn("flex items-center gap-2", textClass)}
                        >
                          <Icon
                            className="h-3.5 w-3.5 shrink-0"
                            strokeWidth={2.5}
                          />
                          {label}
                        </span>
                        {activeHeadingLevel === level && (
                          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                        )}
                      </DropdownMenuItem>
                    ))}

                    <DropdownMenuItem
                      onSelect={() =>
                        editor?.chain().focus().setParagraph().run()
                      }
                      className="justify-between"
                    >
                      <span className="flex items-center gap-2 text-xs font-normal">
                        <Pilcrow className="h-3.5 w-3.5" strokeWidth={2.5} />
                        Normal
                      </span>
                      {!activeHeadingLevel && (
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      )}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Separator
                  orientation="vertical"
                  thickness="thin"
                  className="mx-1 h-5"
                />
              </>
            )}

            {/* Inline formatting (shown in both default and minimal) */}
            <ToolbarButton
              size={size}
              label="Bold (Ctrl+B)"
              disabled={disabled}
              active={editor?.isActive("bold")}
              onClick={() => editor?.chain().focus().toggleBold().run()}
            >
              <Bold className={iconClass} strokeWidth={2.5} />
            </ToolbarButton>
            <ToolbarButton
              size={size}
              label="Italic (Ctrl+I)"
              disabled={disabled}
              active={editor?.isActive("italic")}
              onClick={() => editor?.chain().focus().toggleItalic().run()}
            >
              <Italic className={iconClass} strokeWidth={2.5} />
            </ToolbarButton>
            <ToolbarButton
              size={size}
              label="Underline (Ctrl+U)"
              disabled={disabled}
              active={editor?.isActive("underline")}
              onClick={() => editor?.chain().focus().toggleUnderline().run()}
            >
              <UnderlineIcon className={iconClass} strokeWidth={2.5} />
            </ToolbarButton>
            <ToolbarButton
              size={size}
              label="Strikethrough"
              disabled={disabled}
              active={editor?.isActive("strike")}
              onClick={() => editor?.chain().focus().toggleStrike().run()}
            >
              <Strikethrough className={iconClass} strokeWidth={2.5} />
            </ToolbarButton>

            {variant === "default" && (
              <ToolbarButton
                size={size}
                label="Inline Code"
                disabled={disabled}
                active={editor?.isActive("code")}
                onClick={() => editor?.chain().focus().toggleCode().run()}
              >
                <Code className={iconClass} strokeWidth={2.5} />
              </ToolbarButton>
            )}

            <Separator
              orientation="vertical"
              thickness="thin"
              className="mx-1 h-5"
            />

            {/* Lists */}
            <ToolbarButton
              size={size}
              label="Bullet List"
              disabled={disabled}
              active={editor?.isActive("bulletList")}
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
            >
              <List className={iconClass} strokeWidth={2.5} />
            </ToolbarButton>
            <ToolbarButton
              size={size}
              label="Ordered List"
              disabled={disabled}
              active={editor?.isActive("orderedList")}
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            >
              <ListOrdered className={iconClass} strokeWidth={2.5} />
            </ToolbarButton>

            {variant === "default" && (
              <>
                <ToolbarButton
                  size={size}
                  label="Blockquote"
                  disabled={disabled}
                  active={editor?.isActive("blockquote")}
                  onClick={() =>
                    editor?.chain().focus().toggleBlockquote().run()
                  }
                >
                  <Quote className={iconClass} strokeWidth={2.5} />
                </ToolbarButton>
                <ToolbarButton
                  size={size}
                  label="Code Block"
                  disabled={disabled}
                  active={editor?.isActive("codeBlock")}
                  onClick={() =>
                    editor?.chain().focus().toggleCodeBlock().run()
                  }
                >
                  <Code2 className={iconClass} strokeWidth={2.5} />
                </ToolbarButton>
                <ToolbarButton
                  size={size}
                  label="Horizontal Rule"
                  disabled={disabled}
                  onClick={() =>
                    editor?.chain().focus().setHorizontalRule().run()
                  }
                >
                  <Minus className={iconClass} strokeWidth={2.5} />
                </ToolbarButton>

                <Separator
                  orientation="vertical"
                  thickness="thin"
                  className="mx-1 h-5"
                />

                {/* Alignment */}
                <ToggleGroup
                  type="single"
                  variant="outline"
                  size="sm"
                  noShadow
                  disabled={disabled}
                  value={activeAlign}
                  onValueChange={(value) => {
                    if (value) {
                      editor?.chain().focus().setTextAlign(value).run();
                    }
                  }}
                  aria-label="Text alignment"
                >
                  {(
                    [
                      { value: "left", label: "Align Left", Icon: AlignLeft },
                      {
                        value: "center",
                        label: "Align Center",
                        Icon: AlignCenter,
                      },
                      {
                        value: "right",
                        label: "Align Right",
                        Icon: AlignRight,
                      },
                    ] as const
                  ).map(({ value: alignValue, label, Icon }) => (
                    <Tooltip key={alignValue}>
                      <TooltipTrigger asChild>
                        <ToggleGroupItem
                          value={alignValue}
                          aria-label={label}
                          className={
                            size === "sm"
                              ? "h-7 min-w-7 px-0"
                              : "h-8 min-w-8 px-0"
                          }
                        >
                          <Icon className={iconClass} strokeWidth={2.5} />
                        </ToggleGroupItem>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="px-2 py-1 text-[11px]"
                      >
                        {label}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </ToggleGroup>
              </>
            )}

            <Separator
              orientation="vertical"
              thickness="thin"
              className="mx-1 h-5"
            />

            {/* Link Popover */}
            <Popover open={linkOpen} onOpenChange={handleOpenLinkPopover}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      disabled={disabled}
                      aria-label="Insert Link"
                      aria-pressed={editor?.isActive("link")}
                      className={cn(
                        "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-sm border-2 font-bold transition-all",
                        "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring",
                        "disabled:pointer-events-none disabled:opacity-40",
                        size === "sm" ? "h-7 w-7" : "h-8 w-8",
                        editor?.isActive("link")
                          ? "border-border bg-primary text-primary-foreground shadow-brutal-sm"
                          : "border-transparent bg-transparent text-card-foreground hover:border-border hover:bg-card"
                      )}
                    >
                      <Link2 className={iconClass} strokeWidth={2.5} />
                    </button>
                  </PopoverTrigger>
                </TooltipTrigger>
                <TooltipContent side="top" className="px-2 py-1 text-[11px]">
                  Insert Link
                </TooltipContent>
              </Tooltip>

              <PopoverContent align="start" className="w-72 p-3">
                <form onSubmit={handleApplyLink} className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider">
                    Link URL
                  </div>
                  <Input
                    type="text"
                    noShadow
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="h-8 text-xs"
                  />
                  <div className="flex items-center justify-end gap-2">
                    {editor?.isActive("link") && (
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        noShadow
                        onClick={handleRemoveLink}
                      >
                        <Trash2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                        Remove
                      </Button>
                    )}
                    <Button type="submit" size="sm" noShadow>
                      Apply
                    </Button>
                  </div>
                </form>
              </PopoverContent>
            </Popover>
          </div>
        </TooltipProvider>
      )}

      {/* Editable Content Surface */}
      <EditorContent editor={editor} />

      {/* Optional Footer Status Bar */}
      {(showCharacterCount || maxLength !== undefined) && (
        <div
          className={cn(
            "bg-muted/50 flex items-center justify-between gap-2 border-t-2 px-3 py-1.5 font-mono text-[11px] font-bold text-muted-foreground",
            error ? "border-destructive" : "border-border"
          )}
        >
          <span>{wordCount} words</span>
          <span className={cn(isAtLimit && "text-destructive")}>
            {maxLength !== undefined
              ? `${charCount} / ${maxLength} chars`
              : `${charCount} chars`}
          </span>
        </div>
      )}
    </div>
  );
}
