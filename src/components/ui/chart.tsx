"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType<{ className?: string }>;
    color?: string;
  }
>;

interface ChartContextProps {
  config: ChartConfig;
}

const ChartContext = React.createContext<ChartContextProps | null>(null);

export function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

export interface ChartContainerProps extends React.ComponentProps<"div"> {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}

/**
 * Neobrutalist ChartContainer wrapping Recharts ResponsiveContainer
 * and injecting CSS variables (--color-<key>) from ChartConfig.
 */
export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  ChartContainerProps
>(({ id, className, children, config, style, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  const colorVars = React.useMemo(() => {
    const vars: Record<string, string> = {};
    for (const [key, item] of Object.entries(config)) {
      if (item.color) {
        vars[`--color-${key}`] = item.color;
      }
    }
    return vars;
  }, [config]);

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        style={{ ...colorVars, ...style } as React.CSSProperties}
        className={cn(
          "flex aspect-video w-full justify-center font-mono text-xs",
          "[&_.recharts-cartesian-axis-tick_text]:fill-foreground [&_.recharts-cartesian-axis-tick_text]:font-mono [&_.recharts-cartesian-axis-tick_text]:text-[11px] [&_.recharts-cartesian-axis-tick_text]:font-bold",
          "[&_.recharts-cartesian-grid_line]:stroke-border/25",
          "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted/60 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
          "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border/30",
          "[&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

export const ChartTooltip = RechartsPrimitive.Tooltip;

export interface ChartTooltipPayloadItem {
  name?: string | number;
  dataKey?: string | number;
  value?: number | string;
  color?: string;
  fill?: string;
  payload?: Record<string, unknown>;
}

export interface ChartTooltipContentProps extends React.ComponentProps<"div"> {
  active?: boolean;
  payload?: ChartTooltipPayloadItem[];
  label?: string | number;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line" | "dashed";
  nameKey?: string;
  labelFormatter?: (
    value: string | number | undefined,
    payload: ChartTooltipPayloadItem[]
  ) => React.ReactNode;
  valueFormatter?: (value: number | string | undefined) => React.ReactNode;
}

/**
 * Neobrutalist ChartTooltipContent with 2px border, hard shadow, and monospace alignment.
 */
export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      label,
      className,
      hideLabel = false,
      hideIndicator = false,
      indicator = "dot",
      nameKey,
      labelFormatter,
      valueFormatter,
    },
    ref
  ) => {
    const { config } = useChart();

    if (!active || !payload?.length) {
      return null;
    }

    const formattedLabel = labelFormatter
      ? labelFormatter(label, payload)
      : label;

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[9rem] gap-1.5 rounded-md border-2 border-border bg-card px-3 py-2 font-mono text-xs text-card-foreground shadow-brutal",
          className
        )}
      >
        {!hideLabel &&
          formattedLabel !== undefined &&
          formattedLabel !== "" && (
            <div className="border-b-2 border-border pb-1 font-black uppercase tracking-wider text-foreground">
              {formattedLabel}
            </div>
          )}
        <div className="grid gap-1.5">
          {payload.map((item, idx) => {
            const rawKey = String(
              (nameKey && item.payload?.[nameKey]) ||
                item.dataKey ||
                item.name ||
                idx
            );
            const itemConfig = config[rawKey];
            const displayLabel =
              itemConfig?.label ?? item.name ?? item.dataKey ?? "Value";
            const indicatorColor =
              itemConfig?.color ||
              item.color ||
              (typeof item.payload?.fill === "string"
                ? item.payload.fill
                : undefined) ||
              item.fill ||
              "var(--primary)";

            return (
              <div
                key={`${rawKey}-${idx}`}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-2">
                  {!hideIndicator && (
                    <span
                      style={{
                        backgroundColor:
                          indicator === "dashed"
                            ? "transparent"
                            : indicatorColor,
                        borderColor:
                          indicator === "dashed"
                            ? indicatorColor
                            : "var(--border)",
                      }}
                      className={cn(
                        "shrink-0",
                        indicator === "dot" && "h-2.5 w-2.5 border-[1.5px]",
                        indicator === "line" && "h-3 w-1 border",
                        indicator === "dashed" &&
                          "h-3 w-0 border-l-2 border-dashed"
                      )}
                    />
                  )}
                  <span className="font-semibold text-muted-foreground">
                    {displayLabel}
                  </span>
                </div>
                <span className="font-mono font-black tabular-nums text-foreground">
                  {valueFormatter
                    ? valueFormatter(item.value)
                    : typeof item.value === "number"
                      ? item.value.toLocaleString()
                      : item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

export const ChartLegend = RechartsPrimitive.Legend;

export interface ChartLegendPayloadItem {
  value?: string;
  dataKey?: string | number;
  color?: string;
}

export interface ChartLegendContentProps extends React.ComponentProps<"div"> {
  payload?: ChartLegendPayloadItem[];
  hideIcon?: boolean;
  nameKey?: string;
}

/**
 * Neobrutalist ChartLegendContent displaying bordered square swatches and bold labels.
 */
export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentProps
>(({ className, payload, hideIcon = false, nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 pt-3 font-mono text-xs font-bold",
        className
      )}
    >
      {payload.map((item, idx) => {
        const key = String(nameKey || item.dataKey || item.value || idx);
        const itemConfig = config[key];
        const swatchColor = itemConfig?.color || item.color || "var(--primary)";

        return (
          <div key={`${key}-${idx}`} className="flex items-center gap-1.5">
            {!hideIcon && (
              <span
                className="h-3 w-3 shrink-0 border-[1.5px] border-border"
                style={{ backgroundColor: swatchColor }}
              />
            )}
            <span className="text-foreground">
              {itemConfig?.label || item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";
