"use client";

import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  ShieldAlert,
  TrendingUp,
  Zap,
} from "lucide-react";

/**
 * Default overview demo
 */
export function CardDemo() {
  return <CardBasicDemo />;
}

/**
 * 1. Basic Card
 */
export function CardBasicDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Production Deployment</CardTitle>
        <CardDescription>
          Automated build pipeline for Southeast Asia edge cluster.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        All 14 microservices passed integration checks and are ready to roll out
        to production traffic.
      </CardContent>
      <CardFooter className="justify-end gap-2.5">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Deploy Now</Button>
      </CardFooter>
    </Card>
  );
}

/**
 * 2. Composition (CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter + UI Components)
 */
export function CardCompositionDemo() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="flex-row items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="bg-primary text-primary-foreground">
            <AvatarFallback className="bg-primary text-primary-foreground">
              PU
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Punch UI Design System</CardTitle>
            <CardDescription>Updated 12 minutes ago by Alex</CardDescription>
          </div>
        </div>
        <CardAction>
          <Badge variant="success">Active</Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Combines{" "}
          <code className="font-mono font-bold text-foreground">
            CardHeader
          </code>
          ,{" "}
          <code className="font-mono font-bold text-foreground">
            CardAction
          </code>
          ,{" "}
          <code className="font-mono font-bold text-foreground">
            CardContent
          </code>
          , and{" "}
          <code className="font-mono font-bold text-foreground">
            CardFooter
          </code>{" "}
          with Avatar, Badge, Separator, and Buttons.
        </p>
        <Separator />
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-md border-2 border-border bg-muted p-2.5">
            <p className="font-mono text-base font-bold">28</p>
            <p className="text-[11px] text-muted-foreground">Components</p>
          </div>
          <div className="rounded-md border-2 border-border bg-muted p-2.5">
            <p className="font-mono text-base font-bold">6</p>
            <p className="text-[11px] text-muted-foreground">Themes</p>
          </div>
          <div className="rounded-md border-2 border-border bg-muted p-2.5">
            <p className="font-mono text-base font-bold">100%</p>
            <p className="text-[11px] text-muted-foreground">TypeScript</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          v0.1.0 • MIT License
        </span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            View Logs
          </Button>
          <Button size="sm">
            Open Repo
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

/**
 * 3. Variant (default, primary, secondary, muted)
 */
export function CardVariantDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card variant="default">
        <CardHeader>
          <CardTitle className="text-base">Default Card</CardTitle>
        </CardHeader>
        <CardContent className="text-xs">
          Standard surface using <code className="font-mono">--card</code>{" "}
          token.
        </CardContent>
      </Card>

      <Card variant="primary">
        <CardHeader>
          <CardTitle className="text-base">Primary Card</CardTitle>
        </CardHeader>
        <CardContent className="text-xs">
          High-emphasis callout using{" "}
          <code className="font-mono">--primary</code>.
        </CardContent>
      </Card>

      <Card variant="secondary">
        <CardHeader>
          <CardTitle className="text-base">Secondary Card</CardTitle>
        </CardHeader>
        <CardContent className="text-xs">
          Accent surface using <code className="font-mono">--secondary</code>.
        </CardContent>
      </Card>

      <Card variant="muted">
        <CardHeader>
          <CardTitle className="text-base">Muted Card</CardTitle>
        </CardHeader>
        <CardContent className="text-xs">
          Subtle background using <code className="font-mono">--muted</code>.
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * 4. Status Variant (success, info, warning, danger)
 */
export function CardStatusDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card variant="success" className="p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
          All Systems Operational
        </div>
        <p className="mt-1 text-xs opacity-90">
          Zero incidents reported in the last 30 days.
        </p>
      </Card>

      <Card variant="info" className="p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <Cpu className="h-4 w-4" strokeWidth={2.5} />
          Database Migration Running
        </div>
        <p className="mt-1 text-xs opacity-90">
          replica sync is currently at 84% completion.
        </p>
      </Card>

      <Card variant="warning" className="p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <Zap className="h-4 w-4" strokeWidth={2.5} />
          API Rate Limit Approaching
        </div>
        <p className="mt-1 text-xs opacity-90">
          8,920 of 10,000 hourly requests consumed.
        </p>
      </Card>

      <Card variant="danger" className="p-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <ShieldAlert className="h-4 w-4" strokeWidth={2.5} />
          Webhook Delivery Failed
        </div>
        <p className="mt-1 text-xs opacity-90">
          Endpoint returned HTTP 503 Service Unavailable.
        </p>
      </Card>
    </div>
  );
}

/**
 * 5. Accent Header (CardHeader variant="secondary" | "primary")
 */
export function CardAccentHeaderDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader variant="secondary">
          <CardTitle className="text-base">Secondary Header Block</CardTitle>
        </CardHeader>
        <CardContent className="text-xs">
          Retro window header style with{" "}
          <code className="font-mono">variant=&quot;secondary&quot;</code> on
          CardHeader.
        </CardContent>
      </Card>

      <Card>
        <CardHeader variant="primary">
          <CardTitle className="text-base">Primary Header Block</CardTitle>
        </CardHeader>
        <CardContent className="text-xs">
          Bold header bar with{" "}
          <code className="font-mono">variant=&quot;primary&quot;</code> on
          CardHeader.
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * 6. KPI & Metric Card
 */
export function CardKpiDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-xs uppercase tracking-wider">
            Monthly Revenue
          </CardTitle>
          <Badge variant="success">+18.4%</Badge>
        </CardHeader>
        <CardContent className="space-y-1">
          <p className="font-mono text-2xl font-bold">$84,250.00</p>
          <CardDescription>+$13,100.00 vs last month</CardDescription>
        </CardContent>
        <CardFooter className="justify-between">
          <span className="flex items-center gap-1 font-mono text-xs font-bold">
            <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.5} />
            Target 92%
          </span>
          <Button size="sm" variant="outline">
            Report
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-xs uppercase tracking-wider">
            Active Subscribers
          </CardTitle>
          <Badge variant="secondary">+342</Badge>
        </CardHeader>
        <CardContent className="space-y-1">
          <p className="font-mono text-2xl font-bold">12,840</p>
          <CardDescription>98.2% monthly retention rate</CardDescription>
        </CardContent>
        <CardFooter className="justify-between">
          <span className="font-mono text-xs text-muted-foreground">
            Updated just now
          </span>
          <Button size="sm" variant="outline">
            Audience
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

/**
 * 7. Card with Form (Login Form)
 */
export function CardFormDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to access your dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="login-email">Email</Label>
            <Input id="login-email" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="login-password">Password</Label>
              <a
                href="#forgot"
                onClick={(e) => e.preventDefault()}
                className="text-xs font-bold underline-offset-4 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <Input id="login-password" type="password" placeholder="••••••••" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button className="w-full">Login</Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a
            href="#signup"
            onClick={(e) => e.preventDefault()}
            className="font-bold text-card-foreground underline-offset-4 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}

/**
 * 8. Interactive Card
 */
export function CardInteractiveDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card interactive className="p-5">
        <div className="flex items-center justify-between">
          <Badge variant="default">Starter Plan</Badge>
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </div>
        <p className="mt-3 font-mono text-2xl font-bold">$19 / mo</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Click this card to feel the mechanical press interaction.
        </p>
      </Card>

      <Card interactive variant="secondary" className="p-5">
        <div className="flex items-center justify-between">
          <Badge variant="outline">Pro Plan</Badge>
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </div>
        <p className="mt-3 font-mono text-2xl font-bold">$49 / mo</p>
        <p className="mt-1 text-xs opacity-80">
          Unlimited projects, custom registry, and priority builds.
        </p>
      </Card>
    </div>
  );
}

/**
 * 9. No Shadow
 */
export function CardNoShadowDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card noShadow className="p-5">
        <h4 className="text-sm font-bold">Default No Shadow</h4>
        <p className="mt-1 text-xs text-muted-foreground">
          Flat 2px border card ideal for nested layouts or dense grids.
        </p>
      </Card>

      <Card variant="muted" noShadow className="p-5">
        <h4 className="text-sm font-bold">Muted No Shadow</h4>
        <p className="mt-1 text-xs text-muted-foreground">
          Combine <code className="font-mono">variant=&quot;muted&quot;</code>{" "}
          with <code className="font-mono">noShadow</code>.
        </p>
      </Card>
    </div>
  );
}

/**
 * 10. Card with Image
 */
export function CardImageDemo() {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative border-b-2 border-border">
        <Image
          src="/images/card-cover.jpg"
          alt="Punch UI Neobrutalist Design Kit cover"
          width={640}
          height={320}
          className="h-56 w-full object-cover"
        />
        <Badge size="sm" variant="success" className="absolute right-3 top-3">
          Featured
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>Neobrutalist Design Kit</CardTitle>
        <CardDescription>
          Bold 2px borders, hard offset shadows, and accessible Radix
          primitives.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-between">
        <span className="font-mono text-sm font-extrabold">Free &amp; OSS</span>
        <Button size="sm">Explore Kit</Button>
      </CardFooter>
    </Card>
  );
}
