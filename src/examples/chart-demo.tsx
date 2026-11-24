"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  Treemap,
  XAxis,
  YAxis,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const MONTHLY_TRAFFIC = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 273, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 314, mobile: 215 },
];

const BAR_CONFIG: ChartConfig = {
  desktop: { label: "Desktop", color: "var(--primary)" },
  mobile: { label: "Mobile", color: "var(--secondary)" },
};

export function ChartBarDemo() {
  return (
    <ChartContainer config={BAR_CONFIG} className="h-[280px] max-w-2xl">
      <BarChart
        data={MONTHLY_TRAFFIC}
        margin={{ top: 8, right: 8, left: -12, bottom: 0 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
        />
        <YAxis
          tickLine={false}
          axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="desktop"
          fill="var(--color-desktop)"
          stroke="var(--border)"
          strokeWidth={2}
          radius={0}
        />
        <Bar
          dataKey="mobile"
          fill="var(--color-mobile)"
          stroke="var(--border)"
          strokeWidth={2}
          radius={0}
        />
      </BarChart>
    </ChartContainer>
  );
}

const REVENUE_DATA = [
  { month: "Jan", subscriptions: 4200, addons: 1400, services: 900 },
  { month: "Feb", subscriptions: 4800, addons: 1650, services: 1100 },
  { month: "Mar", subscriptions: 5100, addons: 1900, services: 1250 },
  { month: "Apr", subscriptions: 5600, addons: 2100, services: 1400 },
  { month: "May", subscriptions: 6200, addons: 2350, services: 1600 },
  { month: "Jun", subscriptions: 6900, addons: 2700, services: 1850 },
];

const STACKED_CONFIG: ChartConfig = {
  subscriptions: { label: "Subscriptions", color: "var(--primary)" },
  addons: { label: "Add-ons", color: "var(--info)" },
  services: { label: "Services", color: "var(--secondary)" },
};

export function ChartStackedBarDemo() {
  return (
    <ChartContainer config={STACKED_CONFIG} className="h-[280px] max-w-2xl">
      <BarChart
        data={REVENUE_DATA}
        margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
        />
        <YAxis
          tickLine={false}
          axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
          tickFormatter={(v) => `$${v / 1000}k`}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              valueFormatter={(v) => `$${Number(v ?? 0).toLocaleString()}`}
            />
          }
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="subscriptions"
          stackId="rev"
          fill="var(--color-subscriptions)"
          stroke="var(--border)"
          strokeWidth={2}
        />
        <Bar
          dataKey="addons"
          stackId="rev"
          fill="var(--color-addons)"
          stroke="var(--border)"
          strokeWidth={2}
        />
        <Bar
          dataKey="services"
          stackId="rev"
          fill="var(--color-services)"
          stroke="var(--border)"
          strokeWidth={2}
        />
      </BarChart>
    </ChartContainer>
  );
}

const LINE_DATA = [
  { week: "W1", sessions: 1240, conversions: 420 },
  { week: "W2", sessions: 1680, conversions: 590 },
  { week: "W3", sessions: 1520, conversions: 540 },
  { week: "W4", sessions: 2150, conversions: 780 },
  { week: "W5", sessions: 2490, conversions: 920 },
  { week: "W6", sessions: 2840, conversions: 1140 },
];

const LINE_CONFIG: ChartConfig = {
  sessions: { label: "Sessions", color: "var(--primary)" },
  conversions: { label: "Conversions", color: "var(--success)" },
};

export function ChartLineDemo() {
  return (
    <ChartContainer config={LINE_CONFIG} className="h-[280px] max-w-2xl">
      <LineChart
        data={LINE_DATA}
        margin={{ top: 10, right: 16, left: -8, bottom: 0 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="week"
          tickLine={false}
          axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
        />
        <YAxis
          tickLine={false}
          axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
        />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          type="linear"
          dataKey="sessions"
          stroke="var(--color-sessions)"
          strokeWidth={3}
          dot={{
            fill: "var(--color-sessions)",
            stroke: "var(--border)",
            strokeWidth: 2,
            r: 5,
          }}
          activeDot={{
            fill: "var(--secondary)",
            stroke: "var(--border)",
            strokeWidth: 2.5,
            r: 7,
          }}
        />
        <Line
          type="linear"
          dataKey="conversions"
          stroke="var(--color-conversions)"
          strokeWidth={3}
          dot={{
            fill: "var(--color-conversions)",
            stroke: "var(--border)",
            strokeWidth: 2,
            r: 5,
          }}
          activeDot={{
            fill: "var(--secondary)",
            stroke: "var(--border)",
            strokeWidth: 2.5,
            r: 7,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}

const AREA_DATA = [
  { day: "Mon", users: 420 },
  { day: "Tue", users: 580 },
  { day: "Wed", users: 510 },
  { day: "Thu", users: 740 },
  { day: "Fri", users: 890 },
  { day: "Sat", users: 680 },
  { day: "Sun", users: 960 },
];

const AREA_CONFIG: ChartConfig = {
  users: { label: "Active Users", color: "var(--primary)" },
};

export function ChartAreaDemo() {
  return (
    <ChartContainer config={AREA_CONFIG} className="h-[260px] max-w-2xl">
      <AreaChart
        data={AREA_DATA}
        margin={{ top: 10, right: 12, left: -12, bottom: 0 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
        />
        <YAxis
          tickLine={false}
          axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="users"
          fill="var(--color-users)"
          fillOpacity={0.85}
          stroke="var(--border)"
          strokeWidth={2.5}
        />
      </AreaChart>
    </ChartContainer>
  );
}

const PIE_DATA = [
  {
    source: "organic",
    label: "Organic",
    visitors: 4200,
    fill: "var(--primary)",
  },
  {
    source: "direct",
    label: "Direct",
    visitors: 2800,
    fill: "var(--secondary)",
  },
  { source: "social", label: "Social", visitors: 1950, fill: "var(--info)" },
  {
    source: "referral",
    label: "Referral",
    visitors: 1250,
    fill: "var(--success)",
  },
];

const PIE_CONFIG: ChartConfig = {
  organic: { label: "Organic", color: "var(--primary)" },
  direct: { label: "Direct", color: "var(--secondary)" },
  social: { label: "Social", color: "var(--info)" },
  referral: { label: "Referral", color: "var(--success)" },
};

export function ChartDonutDemo() {
  const totalVisitors = PIE_DATA.reduce((acc, item) => acc + item.visitors, 0);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center">
      <div className="relative w-full">
        <ChartContainer config={PIE_CONFIG} className="h-[260px]">
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="source" hideLabel />}
            />
            <Pie
              data={PIE_DATA}
              dataKey="visitors"
              nameKey="label"
              innerRadius={58}
              outerRadius={94}
              stroke="var(--border)"
              strokeWidth={2.5}
              paddingAngle={2}
            >
              {PIE_DATA.map((entry) => (
                <Cell key={entry.source} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-2xl font-black leading-none">
            {totalVisitors.toLocaleString()}
          </span>
          <span className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Visitors
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs font-bold">
        {PIE_DATA.map((entry) => (
          <div key={entry.source} className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 border-[1.5px] border-border"
              style={{ backgroundColor: entry.fill }}
            />
            <span>{entry.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TREEMAP_DATA = [
  {
    name: "Compute",
    size: 4200,
    fill: "var(--primary)",
    text: "var(--primary-foreground)",
  },
  {
    name: "Database",
    size: 3100,
    fill: "var(--secondary)",
    text: "var(--secondary-foreground)",
  },
  {
    name: "Edge CDN",
    size: 2250,
    fill: "var(--info)",
    text: "var(--info-foreground)",
  },
  {
    name: "Storage",
    size: 1750,
    fill: "var(--success)",
    text: "var(--success-foreground)",
  },
  {
    name: "Analytics",
    size: 1300,
    fill: "var(--warning)",
    text: "var(--warning-foreground)",
  },
  {
    name: "Monitoring",
    size: 950,
    fill: "var(--muted)",
    text: "var(--foreground)",
  },
  {
    name: "Auth",
    size: 720,
    fill: "var(--card)",
    text: "var(--card-foreground)",
  },
  {
    name: "Queues",
    size: 540,
    fill: "var(--destructive)",
    text: "var(--destructive-foreground)",
  },
];

const TREEMAP_CONFIG: ChartConfig = {
  size: { label: "Monthly Cost", color: "var(--primary)" },
};

interface TreemapCellProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  name?: string;
  size?: number;
  fill?: string;
  text?: string;
}

function NeobrutalTreemapCell({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  name,
  size,
  fill,
  text,
}: TreemapCellProps) {
  if (width <= 0 || height <= 0) return null;

  const showName = width > 56 && height > 28;
  const showValue = width > 56 && height > 48;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill || "var(--primary)"}
        stroke="var(--border)"
        strokeWidth={2.5}
      />
      {showName && (
        <text
          x={x + 10}
          y={y + 22}
          fill={text || "var(--foreground)"}
          stroke="none"
          className="font-mono text-xs font-extrabold uppercase"
        >
          {name}
        </text>
      )}
      {showValue && size !== undefined && (
        <text
          x={x + 10}
          y={y + 40}
          fill={text || "var(--foreground)"}
          stroke="none"
          className="font-mono text-xs font-bold opacity-90"
        >
          ${size.toLocaleString()}
        </text>
      )}
    </g>
  );
}

export function ChartTreemapDemo() {
  return (
    <ChartContainer config={TREEMAP_CONFIG} className="h-[300px] max-w-2xl">
      <Treemap
        data={TREEMAP_DATA}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="var(--border)"
        content={<NeobrutalTreemapCell />}
        isAnimationActive={false}
      >
        <ChartTooltip
          content={
            <ChartTooltipContent
              hideLabel
              valueFormatter={(v) => `$${Number(v ?? 0).toLocaleString()} / mo`}
            />
          }
        />
      </Treemap>
    </ChartContainer>
  );
}

const RANGE_DATASETS = {
  "7d": [
    { label: "Mon", requests: 1420 },
    { label: "Tue", requests: 1850 },
    { label: "Wed", requests: 1690 },
    { label: "Thu", requests: 2140 },
    { label: "Fri", requests: 2490 },
    { label: "Sat", requests: 1920 },
    { label: "Sun", requests: 2680 },
  ],
  "30d": [
    { label: "W1", requests: 9800 },
    { label: "W2", requests: 11400 },
    { label: "W3", requests: 12950 },
    { label: "W4", requests: 14820 },
  ],
  "90d": [
    { label: "Apr", requests: 38400 },
    { label: "May", requests: 44900 },
    { label: "Jun", requests: 52600 },
  ],
};

const INTERACTIVE_CONFIG: ChartConfig = {
  requests: { label: "API Requests", color: "var(--primary)" },
};

export function ChartInteractiveDemo() {
  const [range, setRange] = React.useState<"7d" | "30d" | "90d">("7d");
  const data = RANGE_DATASETS[range];
  const total = data.reduce((sum, row) => sum + row.requests, 0);

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-base">API Request Volume</CardTitle>
            <Badge variant="success" size="sm" noShadow>
              +18.4%
            </Badge>
          </div>
          <CardDescription>
            Total in window:{" "}
            <span className="font-mono font-black text-foreground">
              {total.toLocaleString()}
            </span>
          </CardDescription>
        </div>

        <ToggleGroup
          type="single"
          variant="outline"
          size="sm"
          noShadow
          value={range}
          onValueChange={(value) => {
            if (value === "7d" || value === "30d" || value === "90d") {
              setRange(value);
            }
          }}
          aria-label="Time range"
        >
          {(["7d", "30d", "90d"] as const).map((key) => (
            <ToggleGroupItem
              key={key}
              value={key}
              className="font-mono uppercase"
            >
              {key}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </CardHeader>

      <CardContent>
        <ChartContainer config={INTERACTIVE_CONFIG} className="h-[240px]">
          <BarChart
            data={data}
            margin={{ top: 8, right: 8, left: -8, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="requests"
              fill="var(--color-requests)"
              stroke="var(--border)"
              strokeWidth={2}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
