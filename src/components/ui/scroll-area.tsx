"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ScrollbarSize = "sm" | "md" | "lg" | number;

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Orientasi area scroll: vertical (default), horizontal, atau both
   */
  orientation?: "vertical" | "horizontal" | "both";
  /**
   * Gaya kontainer luar:
   * - "default": Bingkai border 2px + bg-card + shadow
   * - "ghost": Tanpa border & tanpa shadow (cocok disisipkan di dalam Card/Sidebar)
   */
  variant?: "default" | "ghost";
  /**
   * Menghilangkan bayangan keras pada kontainer luar
   */
  noShadow?: boolean;
  /**
   * Ketebalan scrollbar:
   * - "sm" = 8px (default tipis)
   * - "md" = 10px
   * - "lg" = 14px
   * - atau angka pixel kustom, misal: scrollbarSize={6}
   */
  scrollbarSize?: ScrollbarSize;
  /**
   * Class tambahan untuk viewport bagian dalam
   */
  viewportClassName?: string;
}

const SIZE_MAP: Record<"sm" | "md" | "lg", number> = {
  sm: 8,
  md: 10,
  lg: 14,
};

/**
 * Komponen ScrollArea Neobrutalism dengan custom track & thumb yang ramping
 * serta ukuran ketebalan yang dapat dikustomisasi (scrollbarSize).
 */
export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      className,
      children,
      orientation = "vertical",
      variant = "default",
      noShadow = false,
      scrollbarSize = "sm",
      viewportClassName,
      ...rest
    },
    ref
  ) => {
    const outerRef = React.useRef<HTMLDivElement | null>(null);
    const viewportRef = React.useRef<HTMLDivElement | null>(null);
    const vTrackRef = React.useRef<HTMLDivElement | null>(null);
    const hTrackRef = React.useRef<HTMLDivElement | null>(null);
    const [vThumb, setVThumb] = React.useState({ size: 0, offset: 0 });
    const [hThumb, setHThumb] = React.useState({ size: 0, offset: 0 });

    const barPx =
      typeof scrollbarSize === "number"
        ? Math.max(4, scrollbarSize)
        : SIZE_MAP[scrollbarSize];

    const updateMetrics = React.useCallback(() => {
      const el = viewportRef.current;
      if (!el) return;

      const {
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollLeft,
        scrollWidth,
        clientWidth,
      } = el;

      if (scrollHeight > clientHeight && clientHeight > 0) {
        const trackHeight = vTrackRef.current?.clientHeight || clientHeight;
        const ratio = clientHeight / scrollHeight;
        const size = Math.max(ratio * trackHeight, 24);
        const maxScroll = scrollHeight - clientHeight;
        const maxTrack = Math.max(0, trackHeight - size);
        const offset = maxScroll > 0 ? (scrollTop / maxScroll) * maxTrack : 0;
        setVThumb({ size, offset });
      } else {
        setVThumb({ size: 0, offset: 0 });
      }

      if (scrollWidth > clientWidth && clientWidth > 0) {
        const trackWidth = hTrackRef.current?.clientWidth || clientWidth;
        const ratio = clientWidth / scrollWidth;
        const size = Math.max(ratio * trackWidth, 24);
        const maxScroll = scrollWidth - clientWidth;
        const maxTrack = Math.max(0, trackWidth - size);
        const offset = maxScroll > 0 ? (scrollLeft / maxScroll) * maxTrack : 0;
        setHThumb({ size, offset });
      } else {
        setHThumb({ size: 0, offset: 0 });
      }
    }, []);

    React.useEffect(() => {
      updateMetrics();
      const raf = requestAnimationFrame(() => updateMetrics());
      const el = viewportRef.current;
      if (!el) return () => cancelAnimationFrame(raf);

      const resizeObserver = new ResizeObserver(() => updateMetrics());
      resizeObserver.observe(el);
      if (outerRef.current) {
        resizeObserver.observe(outerRef.current);
      }
      if (el.firstElementChild) {
        resizeObserver.observe(el.firstElementChild);
      }

      window.addEventListener("resize", updateMetrics);
      return () => {
        cancelAnimationFrame(raf);
        resizeObserver.disconnect();
        window.removeEventListener("resize", updateMetrics);
      };
    }, [updateMetrics, children]);

    const handleVerticalDrag = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const el = viewportRef.current;
      if (!el) return;

      const startY = e.clientY;
      const startScrollTop = el.scrollTop;
      const { scrollHeight, clientHeight } = el;
      const trackHeight = vTrackRef.current?.clientHeight || clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      const maxTrack = Math.max(0, trackHeight - vThumb.size);

      const onMouseMove = (moveEvent: MouseEvent) => {
        if (maxTrack <= 0) return;
        const deltaY = moveEvent.clientY - startY;
        el.scrollTop = startScrollTop + (deltaY / maxTrack) * maxScroll;
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const handleHorizontalDrag = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const el = viewportRef.current;
      if (!el) return;

      const startX = e.clientX;
      const startScrollLeft = el.scrollLeft;
      const { scrollWidth, clientWidth } = el;
      const trackWidth = hTrackRef.current?.clientWidth || clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      const maxTrack = Math.max(0, trackWidth - hThumb.size);

      const onMouseMove = (moveEvent: MouseEvent) => {
        if (maxTrack <= 0) return;
        const deltaX = moveEvent.clientX - startX;
        el.scrollLeft = startScrollLeft + (deltaX / maxTrack) * maxScroll;
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const showVertical =
      (orientation === "vertical" || orientation === "both") && vThumb.size > 0;
    const showHorizontal =
      (orientation === "horizontal" || orientation === "both") &&
      hThumb.size > 0;

    return (
      <div
        ref={(node) => {
          outerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          "relative flex overflow-hidden",
          variant === "default"
            ? cn(
                "rounded-lg border-2 border-border bg-card text-card-foreground",
                noShadow ? "shadow-none" : "shadow-brutal-sm"
              )
            : "rounded-none border-0 bg-transparent shadow-none",
          className
        )}
        {...rest}
      >
        <div
          ref={viewportRef}
          onScroll={updateMetrics}
          style={{
            marginRight: showVertical ? `${barPx}px` : undefined,
            marginBottom: showHorizontal ? `${barPx}px` : undefined,
          }}
          className={cn(
            "min-h-0 min-w-0 flex-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            orientation === "vertical" && "overflow-y-auto overflow-x-hidden",
            orientation === "horizontal" && "overflow-x-auto overflow-y-hidden",
            orientation === "both" && "overflow-auto",
            viewportClassName
          )}
        >
          {children}
        </div>

        {/* Custom Track & Thumb Vertikal */}
        {showVertical && (
          <div
            ref={vTrackRef}
            aria-hidden="true"
            style={{
              width: `${barPx}px`,
              bottom: showHorizontal ? `${barPx}px` : "0px",
            }}
            onClick={(e) => {
              const el = viewportRef.current;
              if (!el || e.target !== e.currentTarget) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const clickRatio = (e.clientY - rect.top) / rect.height;
              el.scrollTo({
                top: clickRatio * (el.scrollHeight - el.clientHeight),
                behavior: "smooth",
              });
            }}
            className="absolute right-0 top-0 border-l-[1.5px] border-border bg-muted"
          >
            <div
              onMouseDown={handleVerticalDrag}
              style={{
                height: `${vThumb.size}px`,
                transform: `translateY(${vThumb.offset}px)`,
              }}
              className="w-full cursor-grab border-y-[1.5px] border-border bg-primary transition-colors hover:bg-secondary active:cursor-grabbing"
            />
          </div>
        )}

        {/* Custom Track & Thumb Horizontal */}
        {showHorizontal && (
          <div
            ref={hTrackRef}
            aria-hidden="true"
            style={{
              height: `${barPx}px`,
              right: showVertical ? `${barPx}px` : "0px",
            }}
            onClick={(e) => {
              const el = viewportRef.current;
              if (!el || e.target !== e.currentTarget) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const clickRatio = (e.clientX - rect.left) / rect.width;
              el.scrollTo({
                left: clickRatio * (el.scrollWidth - el.clientWidth),
                behavior: "smooth",
              });
            }}
            className="absolute bottom-0 left-0 border-t-[1.5px] border-border bg-muted"
          >
            <div
              onMouseDown={handleHorizontalDrag}
              style={{
                width: `${hThumb.size}px`,
                transform: `translateX(${hThumb.offset}px)`,
              }}
              className="h-full cursor-grab border-x-[1.5px] border-border bg-primary transition-colors hover:bg-secondary active:cursor-grabbing"
            />
          </div>
        )}
      </div>
    );
  }
);
ScrollArea.displayName = "ScrollArea";
