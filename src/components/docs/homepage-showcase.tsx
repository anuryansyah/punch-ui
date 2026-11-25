"use client";

import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  Disc3,
  Lock,
  Pause,
  Play,
  Send,
  ShieldCheck,
  ShoppingBag,
  SkipBack,
  SkipForward,
  Sparkles,
  Volume2,
  Wallet,
} from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const REVENUE_DATA = {
  "7d": [
    { label: "Mon", revenue: 4200, orders: 1400 },
    { label: "Tue", revenue: 5800, orders: 2100 },
    { label: "Wed", revenue: 4950, orders: 1850 },
    { label: "Thu", revenue: 7100, orders: 2600 },
    { label: "Fri", revenue: 8400, orders: 3100 },
    { label: "Sat", revenue: 6300, orders: 2250 },
    { label: "Sun", revenue: 9100, orders: 3450 },
  ],
  "30d": [
    { label: "W1", revenue: 28400, orders: 11200 },
    { label: "W2", revenue: 34100, orders: 14600 },
    { label: "W3", revenue: 39800, orders: 16200 },
    { label: "W4", revenue: 46200, orders: 19400 },
  ],
  "90d": [
    { label: "Apr", revenue: 112000, orders: 44000 },
    { label: "May", revenue: 134500, orders: 52800 },
    { label: "Jun", revenue: 158200, orders: 64100 },
  ],
};

const REVENUE_CONFIG: ChartConfig = {
  revenue: { label: "Gross", color: "var(--primary)" },
  orders: { label: "Net", color: "var(--secondary)" },
};

const PRODUCT_SWATCHES = [
  { id: "orange", label: "Tangerine", hex: "#ff8a00" },
  { id: "blue", label: "Cobalt", hex: "#3b82f6" },
  { id: "ink", label: "Deep Ink", hex: "#141923" },
  { id: "mint", label: "Emerald", hex: "#10b981" },
];

const TRACKS = [
  { title: "Brutalist Beats Vol. 4", artist: "Punch FM • Synthwave", dur: 204 },
  { title: "Hard Shadow Groove", artist: "Mono Studio • Lo-Fi", dur: 186 },
  { title: "2px Border Anthem", artist: "Pixel Brass • Funk", dur: 232 },
];

function formatSeconds(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function HomepageShowcase() {
  // 1. Digital Wallet
  const [balance, setBalance] = useState(18420.5);
  const [cardFrozen, setCardFrozen] = useState(false);

  // 2. Sprint Checklist
  const [tasks, setTasks] = useState([
    { id: "t1", label: "Ship 47 registry JSON items", done: true },
    { id: "t2", label: "Verify Light & Dark mode contrast", done: true },
    { id: "t3", label: "Build custom color theme builder", done: true },
    { id: "t4", label: "Deploy docs to production", done: false },
  ]);
  const doneCount = tasks.filter((t) => t.done).length;
  const sprintPct = Math.round((doneCount / tasks.length) * 100);

  // 3. 2FA Security
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [otp, setOtp] = useState("482910");

  // 4. E-Commerce Product
  const [productColor, setProductColor] = useState(PRODUCT_SWATCHES[0]);
  const [productSize, setProductSize] = useState("M");
  const [cartCount, setCartCount] = useState(0);

  // 5. Revenue Mini Chart
  const [range, setRange] = useState<"7d" | "30d" | "90d">("7d");
  const chartData = REVENUE_DATA[range];
  const totalRev = chartData.reduce((acc, row) => acc + row.revenue, 0);

  // 6. Event / Meeting Booking
  const [bookingDate, setBookingDate] = useState<Date | undefined>(
    () => new Date(2026, 11, 4)
  );
  const [bookingSlot, setBookingSlot] = useState("11:00");

  // 7. Music Player
  const [trackIdx, setTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressSec, setProgressSec] = useState<number[]>([78]);
  const currentTrack = TRACKS[trackIdx];

  // 8. Live Support Chat
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "m1",
      sender: "Maya Lin",
      initials: "ML",
      mine: false,
      text: "Hey! Ready to push the new Neobrutalist checkout?",
      time: "10:24",
    },
    {
      id: "m2",
      sender: "You",
      initials: "AM",
      mine: true,
      text: "Yep, just finished testing all 6 theme presets.",
      time: "10:25",
    },
  ]);

  // 9. Quick Checkout / Payment
  const [payMethod, setPayMethod] = useState("card");
  const [cardName, setCardName] = useState("Alex Morgan");
  const [expMonth, setExpMonth] = useState("08");
  const [isPaying, setIsPaying] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = chatInput.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `m-${prev.length + 1}`,
        sender: "You",
        initials: "AM",
        mine: true,
        text: trimmed,
        time: "Now",
      },
    ]);
    setChatInput("");
  };

  const handlePayNow = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      toast.success("Payment confirmed!", {
        description: `$49.00 charged via ${payMethod.toUpperCase()} for ${cardName || "Guest"}.`,
      });
    }, 900);
  };

  return (
    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
      {/* ==================== COLUMN 1 ==================== */}
      <div className="space-y-6">
        {/* 1. Digital Wallet / Virtual Card */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4" strokeWidth={2.5} />
                <CardTitle className="text-base">Digital Wallet</CardTitle>
              </div>
              <Badge variant="success" size="sm" noShadow>
                +12.4%
              </Badge>
            </div>
            <p className="mt-1 font-mono text-2xl font-black tracking-tight">
              ${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Virtual Card Visual */}
            <div
              className={cn(
                "relative overflow-hidden rounded-md border-2 border-border p-4 shadow-brutal-sm transition-all",
                cardFrozen
                  ? "bg-muted text-muted-foreground opacity-75"
                  : "bg-primary text-primary-foreground"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-black uppercase tracking-wider">
                  Punch Virtual
                </span>
                {cardFrozen ? (
                  <Badge variant="danger" size="sm" noShadow>
                    <Lock className="h-3 w-3" strokeWidth={2.5} />
                    FROZEN
                  </Badge>
                ) : (
                  <CreditCard className="h-5 w-5" strokeWidth={2.5} />
                )}
              </div>

              <p className="mt-5 font-mono text-sm font-black tracking-[0.2em]">
                4532 •••• •••• 4829
              </p>

              <div className="mt-4 flex items-end justify-between text-[11px]">
                <div>
                  <span className="block opacity-75">CARD HOLDER</span>
                  <span className="font-mono font-bold">ALEX MORGAN</span>
                </div>
                <div className="text-right">
                  <span className="block opacity-75">EXPIRES</span>
                  <span className="font-mono font-bold">12/28</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <ButtonGroup className="w-full">
              <Button
                type="button"
                variant="secondary"
                noShadow
                disabled={cardFrozen}
                onClick={() => {
                  setBalance((b) => b + 250);
                  toast.success("Top up +$250.00 added!");
                }}
                className="flex-1"
              >
                <ArrowDownLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
                Top Up
              </Button>
              <Button
                type="button"
                variant="outline"
                noShadow
                disabled={cardFrozen}
                onClick={() => {
                  setBalance((b) => Math.max(0, b - 120));
                  toast.info("Transferred $120.00 to Maya Lin.");
                }}
                className="flex-1"
              >
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                Transfer
              </Button>
            </ButtonGroup>

            {/* Freeze Toggle */}
            <div className="flex items-center justify-between rounded-md border-2 border-border bg-muted/50 px-3 py-2">
              <span className="text-xs font-bold">Freeze Virtual Card</span>
              <Switch
                checked={cardFrozen}
                onCheckedChange={(checked) => {
                  setCardFrozen(checked);
                  toast(checked ? "Card frozen." : "Card unfrozen.");
                }}
                aria-label="Freeze virtual card"
              />
            </div>
          </CardContent>
        </Card>

        {/* 2. Live Team Chat Widget */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <Avatar size="sm" noShadow>
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-sm">Maya Lin</CardTitle>
                  <CardDescription className="text-[11px]">
                    Design Systems Lead
                  </CardDescription>
                </div>
              </div>
              <Badge variant="success" size="sm" dot noShadow>
                Online
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            <ScrollArea
              scrollbarSize="sm"
              className="h-44"
              viewportClassName="p-3"
              noShadow
              noBorder
            >
              <div className="space-y-2.5">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex flex-col gap-1",
                      msg.mine ? "items-end" : "items-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-md border-2 border-border px-3 py-2 text-xs font-medium shadow-brutal-sm",
                        msg.mine
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-card-foreground"
                      )}
                    >
                      {msg.text}
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {msg.time}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type a message..."
                className="h-9 flex-1 text-xs"
              />
              <Button
                type="submit"
                size="icon"
                aria-label="Send message"
                className="h-9 w-9 shrink-0"
              >
                <Send className="h-3.5 w-3.5" strokeWidth={2.5} />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* 3. 2FA Security & OTP */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <CardTitle className="text-base">2FA Security</CardTitle>
                <CardDescription>Authenticator code check.</CardDescription>
              </div>
              <Switch
                checked={twoFactorEnabled}
                onCheckedChange={setTwoFactorEnabled}
                aria-label="Toggle two-factor authentication"
              />
            </div>
          </CardHeader>

          <CardContent className="space-y-3.5">
            <Alert variant={twoFactorEnabled ? "success" : "warning"} noShadow>
              <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
              <AlertTitle>
                {twoFactorEnabled ? "2FA Active" : "2FA Paused"}
              </AlertTitle>
              <AlertDescription>
                {twoFactorEnabled
                  ? "Required for billing & API token changes."
                  : "Enable 2FA to protect workspace secrets."}
              </AlertDescription>
            </Alert>

            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={setOtp}
                disabled={!twoFactorEnabled}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </CardContent>

          <CardFooter className="justify-end">
            <Button
              size="sm"
              disabled={!twoFactorEnabled || otp.length < 6}
              onClick={() =>
                toast.success("Session verified!", {
                  description: `Code ${otp} accepted.`,
                })
              }
            >
              <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
              Verify Code
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* ==================== COLUMN 2 ==================== */}
      <div className="space-y-6">
        {/* 4. E-Commerce Product Card */}
        <Card className="overflow-hidden">
          {/* Geometric Product Visual Banner */}
          <div
            className="relative flex h-44 flex-col justify-between border-b-2 border-border p-4 transition-colors"
            style={{ backgroundColor: productColor.hex }}
          >
            <div className="flex items-center justify-between">
              <Badge variant="secondary" size="sm" noShadow>
                <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                LIMITED DROP
              </Badge>
              <Badge variant="danger" size="sm" noShadow className="font-mono">
                -25%
              </Badge>
            </div>

            <div className="flex items-end justify-between">
              <div className="rounded-md border-2 border-border bg-card px-3 py-1.5 text-card-foreground shadow-brutal-sm">
                <span className="block font-mono text-[10px] font-bold uppercase text-muted-foreground">
                  COLORWAY
                </span>
                <span className="text-xs font-black">{productColor.label}</span>
              </div>
              {cartCount > 0 && (
                <Badge variant="default" size="sm" noShadow className="font-mono">
                  In Cart: {cartCount}
                </Badge>
              )}
            </div>
          </div>

          <CardContent className="space-y-4 pt-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-black leading-tight">
                  Punch Heavyweight Hoodie
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  480 GSM organic cotton • Boxy fit
                </p>
              </div>
              <div className="text-right font-mono">
                <span className="block text-base font-black">$128</span>
                <span className="block text-[11px] text-muted-foreground line-through">
                  $169
                </span>
              </div>
            </div>

            {/* Color Swatches */}
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-bold uppercase text-muted-foreground">
                Color
              </span>
              <div className="flex items-center gap-2">
                {PRODUCT_SWATCHES.map((swatch) => {
                  const selected = productColor.id === swatch.id;
                  return (
                    <button
                      key={swatch.id}
                      type="button"
                      onClick={() => setProductColor(swatch)}
                      aria-label={`Select ${swatch.label}`}
                      className={cn(
                        "h-6 w-6 cursor-pointer rounded-sm border-2 border-border transition-transform",
                        selected
                          ? "scale-110 ring-2 ring-ring ring-offset-1"
                          : "hover:scale-105"
                      )}
                      style={{ backgroundColor: swatch.hex }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Size Selector */}
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-bold uppercase text-muted-foreground">
                Size
              </span>
              <ToggleGroup
                type="single"
                variant="outline"
                size="sm"
                noShadow
                value={productSize}
                onValueChange={(v) => v && setProductSize(v)}
                aria-label="Product size"
              >
                {["S", "M", "L", "XL"].map((sz) => (
                  <ToggleGroupItem key={sz} value={sz} className="font-mono">
                    {sz}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </CardContent>

          <CardFooter>
            <Button
              type="button"
              className="w-full"
              onClick={() => {
                setCartCount((c) => c + 1);
                toast.success("Added to cart!", {
                  description: `Punch Hoodie (${productColor.label} / ${productSize})`,
                });
              }}
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={2.5} />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>

        {/* 5. Revenue Mini Chart */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-base">Revenue</CardTitle>
                <Badge variant="success" size="sm" noShadow>
                  +24.8%
                </Badge>
              </div>
              <p className="mt-1 font-mono text-xl font-black">
                ${totalRev.toLocaleString("en-US")}
              </p>
            </div>

            <ToggleGroup
              type="single"
              variant="outline"
              size="sm"
              noShadow
              value={range}
              onValueChange={(v) => {
                if (v === "7d" || v === "30d" || v === "90d") setRange(v);
              }}
              aria-label="Revenue range"
            >
              <ToggleGroupItem value="7d" className="px-2 font-mono">
                7D
              </ToggleGroupItem>
              <ToggleGroupItem value="30d" className="px-2 font-mono">
                30D
              </ToggleGroupItem>
              <ToggleGroupItem value="90d" className="px-2 font-mono">
                90D
              </ToggleGroupItem>
            </ToggleGroup>
          </CardHeader>

          <CardContent>
            <ChartContainer config={REVENUE_CONFIG} className="h-[180px] w-full">
              <BarChart data={chartData} barGap={3}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  strokeOpacity={0.25}
                />
                <XAxis
                  dataKey="label"
                  tickLine={false}
                  axisLine={{ stroke: "var(--border)", strokeWidth: 2 }}
                  tick={{ fontSize: 10, fontWeight: 700 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  width={36}
                  tickFormatter={(v: number) =>
                    v >= 1000 ? `$${Math.round(v / 1000)}k` : `$${v}`
                  }
                  tick={{ fontSize: 10, fontWeight: 700 }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="revenue"
                  fill="var(--color-revenue)"
                  stroke="var(--border)"
                  strokeWidth={2}
                />
                <Bar
                  dataKey="orders"
                  fill="var(--color-orders)"
                  stroke="var(--border)"
                  strokeWidth={2}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 6. Event / Meeting Booking Card */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4" strokeWidth={2.5} />
              <CardTitle className="text-base">Book Design Review</CardTitle>
            </div>
            <CardDescription>
              Pick a date and 30-min slot with the Punch UI team.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3.5">
            <div className="space-y-1.5">
              <Label className="block">Date</Label>
              <DatePicker value={bookingDate} onSelect={setBookingDate} />
            </div>

            <div className="space-y-1.5">
              <Label className="block">Time Slot (UTC+7)</Label>
              <ToggleGroup
                type="single"
                variant="outline"
                size="sm"
                noShadow
                value={bookingSlot}
                onValueChange={(v) => v && setBookingSlot(v)}
                className="grid w-full grid-cols-4"
                aria-label="Meeting time slot"
              >
                {["09:30", "11:00", "14:30", "16:00"].map((slot) => (
                  <ToggleGroupItem key={slot} value={slot} className="font-mono">
                    {slot}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </CardContent>

          <CardFooter>
            <Button
              type="button"
              size="sm"
              className="w-full"
              onClick={() =>
                toast.success("Session booked!", {
                  description: `Confirmed for ${bookingSlot} UTC+7.`,
                })
              }
            >
              Confirm Booking
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* ==================== COLUMN 3 ==================== */}
      <div className="space-y-6">
        {/* 7. Mini Music / Podcast Player */}
        <Card>
          <CardContent className="space-y-4 pt-5">
            <div className="flex items-center gap-3.5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border-2 border-border bg-secondary text-secondary-foreground shadow-brutal-sm">
                <Disc3
                  className={cn("h-8 w-8", isPlaying && "animate-spin")}
                  strokeWidth={2.5}
                />
              </div>
              <div className="min-w-0 flex-1">
                <Badge variant="default" size="sm" noShadow className="mb-1">
                  {isPlaying ? "PLAYING" : "PAUSED"}
                </Badge>
                <h3 className="truncate text-sm font-black">
                  {currentTrack.title}
                </h3>
                <p className="truncate text-xs text-muted-foreground">
                  {currentTrack.artist}
                </p>
              </div>
            </div>

            {/* Scrubber Slider */}
            <div className="space-y-1.5">
              <Slider
                value={progressSec}
                onValueChange={setProgressSec}
                min={0}
                max={currentTrack.dur}
                step={1}
                aria-label="Track progress"
              />
              <div className="flex justify-between font-mono text-[11px] font-bold text-muted-foreground">
                <span>{formatSeconds(progressSec[0])}</span>
                <span>{formatSeconds(currentTrack.dur)}</span>
              </div>
            </div>

            {/* Transport Controls */}
            <div className="flex items-center justify-between gap-2">
              <ButtonGroup noShadow>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  noShadow
                  aria-label="Previous track"
                  onClick={() => {
                    setTrackIdx(
                      (i) => (i - 1 + TRACKS.length) % TRACKS.length
                    );
                    setProgressSec([0]);
                  }}
                  className="h-9 w-9"
                >
                  <SkipBack className="h-4 w-4" strokeWidth={2.5} />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  noShadow
                  aria-label={isPlaying ? "Pause" : "Play"}
                  onClick={() => setIsPlaying((p) => !p)}
                  className="h-9 w-11"
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" strokeWidth={2.5} />
                  ) : (
                    <Play className="h-4 w-4" strokeWidth={2.5} />
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  noShadow
                  aria-label="Next track"
                  onClick={() => {
                    setTrackIdx((i) => (i + 1) % TRACKS.length);
                    setProgressSec([0]);
                  }}
                  className="h-9 w-9"
                >
                  <SkipForward className="h-4 w-4" strokeWidth={2.5} />
                </Button>
              </ButtonGroup>

              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-muted-foreground">
                <Volume2 className="h-4 w-4" strokeWidth={2.5} />
                <span>82%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 8. Sprint Task Checklist */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="text-base">Release Sprint #14</CardTitle>
              <Badge
                variant={sprintPct === 100 ? "success" : "secondary"}
                size="sm"
                noShadow
                className="font-mono"
              >
                {sprintPct}%
              </Badge>
            </div>
            <CardDescription>
              Check off tasks to update release readiness live.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Progress value={sprintPct} size="sm" noShadow />

            <div className="space-y-2.5">
              {tasks.map((task) => (
                <label
                  key={task.id}
                  className="flex cursor-pointer items-center gap-2.5 rounded-sm border-2 border-border bg-background/60 px-3 py-2 text-xs font-bold transition-colors hover:bg-muted/60"
                >
                  <Checkbox
                    checked={task.done}
                    onCheckedChange={(checked) => {
                      setTasks((prev) =>
                        prev.map((t) =>
                          t.id === task.id
                            ? { ...t, done: Boolean(checked) }
                            : t
                        )
                      );
                    }}
                  />
                  <span
                    className={cn(
                      task.done && "text-muted-foreground line-through"
                    )}
                  >
                    {task.label}
                  </span>
                </label>
              ))}
            </div>
          </CardContent>

          <CardFooter className="justify-between">
            <div className="flex -space-x-2">
              {["AM", "ML", "JC"].map((initials) => (
                <Avatar key={initials} size="sm" noShadow>
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="font-mono text-[11px] font-bold text-muted-foreground">
              {doneCount}/{tasks.length} completed
            </span>
          </CardFooter>
        </Card>

        {/* 9. Quick Checkout / Payment Method */}
        <Card>
          <form onSubmit={handlePayNow}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-base">Quick Checkout</CardTitle>
                <Badge variant="secondary" size="sm" noShadow className="font-mono">
                  $49.00
                </Badge>
              </div>
              <CardDescription>
                Pro Workspace • Monthly license.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <RadioGroup
                value={payMethod}
                onValueChange={setPayMethod}
                className="grid grid-cols-3 gap-2"
              >
                {[
                  { value: "card", label: "Card" },
                  { value: "ewallet", label: "E-Wallet" },
                  { value: "bank", label: "Bank" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={cn(
                      "flex cursor-pointer items-center justify-center gap-1.5 rounded-md border-2 border-border px-2 py-2 text-xs font-bold transition-colors",
                      payMethod === opt.value
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-card hover:bg-muted/60"
                    )}
                  >
                    <RadioGroupItem value={opt.value} />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </RadioGroup>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_100px]">
                <div className="space-y-1">
                  <Label htmlFor="checkout-name">Name</Label>
                  <Input
                    id="checkout-name"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="h-9 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Exp</Label>
                  <Select value={expMonth} onValueChange={setExpMonth}>
                    <SelectTrigger className="h-9 text-xs" noShadow>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="04">04/28</SelectItem>
                      <SelectItem value="08">08/28</SelectItem>
                      <SelectItem value="12">12/29</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                type="submit"
                className="w-full"
                isLoading={isPaying}
                loadingText="Processing..."
              >
                Pay $49.00 Now
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
