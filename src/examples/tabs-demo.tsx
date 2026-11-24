"use client";

import * as React from "react";
import {
  BarChart3,
  Bell,
  LayoutDashboard,
  Lock,
  Settings,
  User,
} from "lucide-react";
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
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsBasicDemo() {
  return (
    <Tabs defaultValue="account" className="mx-auto max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Account Details</CardTitle>
            <CardDescription>
              Update your workspace profile information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="tabs-name">Display Name</Label>
              <Input id="tabs-name" defaultValue="Alex Morgan" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="tabs-handle">Username</Label>
              <Input id="tabs-handle" defaultValue="@alex.morgan" />
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button size="sm">Save Account</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Security Password</CardTitle>
            <CardDescription>
              Rotate your workspace credentials regularly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="tabs-current-pw">Current Password</Label>
              <Input
                id="tabs-current-pw"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="tabs-new-pw">New Password</Label>
              <Input id="tabs-new-pw" type="password" placeholder="••••••••" />
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button size="sm">Update Password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export function TabsFolderDemo() {
  return (
    <Tabs defaultValue="overview" variant="folder" className="mx-auto max-w-lg">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="specs">Token Specs</TabsTrigger>
        <TabsTrigger value="cli">CLI Install</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-2 text-sm">
        <p className="font-extrabold">Physical Folder Tab Metaphor</p>
        <p className="text-muted-foreground">
          The active tab merges directly into the card panel below, creating a
          tactile Neobrutalist file folder aesthetic.
        </p>
      </TabsContent>

      <TabsContent value="specs" className="space-y-2 font-mono text-xs">
        <div className="flex justify-between border-b-2 border-border pb-1.5">
          <span className="text-muted-foreground">BORDER WIDTH</span>
          <span className="font-bold">2px solid var(--border)</span>
        </div>
        <div className="flex justify-between border-b-2 border-border pb-1.5">
          <span className="text-muted-foreground">SHADOW</span>
          <span className="font-bold">4px 4px 0px var(--border)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">DEFAULT RADIUS</span>
          <span className="font-bold">0px (Sharp)</span>
        </div>
      </TabsContent>

      <TabsContent value="cli" className="font-mono text-xs">
        <div className="rounded-sm border-2 border-border bg-muted p-3 font-bold">
          npx shadcn@latest add https://punch-ui.dev/r/tabs.json
        </div>
      </TabsContent>
    </Tabs>
  );
}

export function TabsUnderlineDemo() {
  return (
    <Tabs
      defaultValue="dashboard"
      variant="underline"
      className="mx-auto max-w-lg"
    >
      <TabsList>
        <TabsTrigger value="dashboard">
          <LayoutDashboard strokeWidth={2.5} />
          <span>Overview</span>
        </TabsTrigger>
        <TabsTrigger value="analytics">
          <BarChart3 strokeWidth={2.5} />
          <span>Analytics</span>
        </TabsTrigger>
        <TabsTrigger value="alerts">
          <Bell strokeWidth={2.5} />
          <span>Alerts</span>
          <Badge variant="secondary" size="sm" noShadow>
            4
          </Badge>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="dashboard" className="text-sm text-muted-foreground">
        All 18 edge nodes are online with 99.98% uptime over the last 30 days.
      </TabsContent>
      <TabsContent value="analytics" className="text-sm text-muted-foreground">
        Median API latency dropped by 14ms after enabling regional read
        replicas.
      </TabsContent>
      <TabsContent value="alerts" className="text-sm text-muted-foreground">
        4 unread deployment alerts waiting for team review.
      </TabsContent>
    </Tabs>
  );
}

export function TabsVerticalDemo() {
  return (
    <Tabs
      defaultValue="profile"
      orientation="vertical"
      className="mx-auto max-w-xl"
    >
      <TabsList className="sm:w-44">
        <TabsTrigger value="profile">
          <User strokeWidth={2.5} />
          <span>Profile</span>
        </TabsTrigger>
        <TabsTrigger value="security">
          <Lock strokeWidth={2.5} />
          <span>Security</span>
        </TabsTrigger>
        <TabsTrigger value="preferences">
          <Settings strokeWidth={2.5} />
          <span>Preferences</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card noShadow className="p-4">
          <p className="text-sm font-extrabold">Public Profile</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Manage avatar, bio, and organization badges visible to
            collaborators.
          </p>
        </Card>
      </TabsContent>

      <TabsContent value="security">
        <Card noShadow className="p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-extrabold">Two-Factor Auth (2FA)</p>
              <p className="text-xs text-muted-foreground">
                Require OTP verification on new devices.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="preferences">
        <Card noShadow className="p-4">
          <p className="text-sm font-extrabold">Workspace Preferences</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Configure default theme preset, compact density, and keyboard
            shortcuts.
          </p>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export function TabsSizesDemo() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4">
      <Tabs defaultValue="a" size="sm" className="w-auto">
        <TabsList>
          <TabsTrigger value="a">Small A</TabsTrigger>
          <TabsTrigger value="b">Small B</TabsTrigger>
          <TabsTrigger value="c">Small C</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="a" size="default" className="w-auto">
        <TabsList>
          <TabsTrigger value="a">Default A</TabsTrigger>
          <TabsTrigger value="b">Default B</TabsTrigger>
          <TabsTrigger value="c">Default C</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="a" size="lg" className="w-auto">
        <TabsList>
          <TabsTrigger value="a">Large A</TabsTrigger>
          <TabsTrigger value="b">Large B</TabsTrigger>
          <TabsTrigger value="c">Large C</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

export function TabsStatesDemo() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-1.5">
        <Label>With Disabled Tab</Label>
        <Tabs defaultValue="active" className="w-auto">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived" disabled>
              Archived (Disabled)
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <Label>No Shadow (Flat)</Label>
        <Tabs defaultValue="flat-a" noShadow className="w-auto">
          <TabsList>
            <TabsTrigger value="flat-a">Flat Tab A</TabsTrigger>
            <TabsTrigger value="flat-b">Flat Tab B</TabsTrigger>
            <TabsTrigger value="flat-c">Flat Tab C</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
