"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const basicFormSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters."),
  email: z.string().email("Please enter a valid email address."),
});

type BasicFormValues = z.infer<typeof basicFormSchema>;

/**
 * Overview demo
 */
export function FormDemo() {
  return <FormBasicDemo />;
}

/**
 * 1. Basic Form
 */
export function FormBasicDemo() {
  const [submitted, setSubmitted] = React.useState<BasicFormValues | null>(
    null
  );

  const form = useForm<BasicFormValues>({
    resolver: zodResolver(basicFormSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: BasicFormValues) {
    setSubmitted(values);
  }

  return (
    <div className="w-full max-w-sm space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="alex_morgan"
                    state={fieldState.error ? "error" : "default"}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your public handle across the workspace.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="alex@punch-ui.dev"
                    state={fieldState.error ? "error" : "default"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-2.5">
            <Button type="submit" size="sm">
              Save Profile
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => {
                form.reset();
                setSubmitted(null);
              }}
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>

      {submitted && (
        <div className="rounded-md border-2 border-border bg-secondary p-3 font-mono text-xs text-secondary-foreground shadow-brutal-sm">
          <p className="font-extrabold uppercase">Submitted:</p>
          <p className="mt-1">
            {submitted.username} ({submitted.email})
          </p>
        </div>
      )}
    </div>
  );
}

const fullFormSchema = z.object({
  projectName: z.string().min(2, "Project name is required."),
  framework: z.string().min(1, "Please select a framework."),
  launchDate: z.date({ message: "Launch date is required." }),
  visibility: z.enum(["public", "private"]),
  bio: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(160, "Keep description under 160 characters."),
  concurrency: z.array(z.number()).min(1),
  autoDeploy: z.boolean(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the deployment terms.",
  }),
});

type FullFormValues = z.infer<typeof fullFormSchema>;

/**
 * 2. All Tier 2 Controls
 */
export function FormControlsDemo() {
  const [result, setResult] = React.useState<FullFormValues | null>(null);

  const form = useForm<FullFormValues>({
    resolver: zodResolver(fullFormSchema),
    defaultValues: {
      projectName: "punch-studio",
      framework: "next",
      launchDate: new Date(),
      visibility: "private",
      bio: "Neobrutalist component library & design system workspace.",
      concurrency: [4],
      autoDeploy: true,
      acceptTerms: false,
    },
  });

  function onSubmit(values: FullFormValues) {
    setResult(values);
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Create Project</CardTitle>
          <Badge size="sm" noShadow variant="secondary">
            Zod Validated
          </Badge>
        </div>
        <CardDescription>
          Combines Input, Select, DatePicker, RadioGroup, Textarea, Slider,
          Switch, and Checkbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input
                        noShadow
                        state={fieldState.error ? "error" : "default"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="framework"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Framework</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger
                          noShadow
                          state={fieldState.error ? "error" : "default"}
                        >
                          <SelectValue placeholder="Choose..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="remix">Remix</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="launchDate"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Launch Date</FormLabel>
                  <FormControl>
                    <DatePicker
                      noShadow
                      clearable
                      value={field.value}
                      onSelect={field.onChange}
                      state={fieldState.error ? "error" : "default"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="visibility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visibility</FormLabel>
                  <FormControl>
                    <RadioGroup
                      orientation="horizontal"
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem
                          value="private"
                          id="vis-private"
                          noShadow
                        />
                        <Label htmlFor="vis-private" className="cursor-pointer">
                          Private
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem
                          value="public"
                          id="vis-public"
                          noShadow
                        />
                        <Label htmlFor="vis-public" className="cursor-pointer">
                          Public
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Project Summary</FormLabel>
                  <FormControl>
                    <Textarea
                      noShadow
                      rows={3}
                      state={fieldState.error ? "error" : "default"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="concurrency"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Build Workers</FormLabel>
                    <span className="font-mono text-xs font-extrabold">
                      {field.value[0]} workers
                    </span>
                  </div>
                  <FormControl>
                    <Slider
                      noShadow
                      min={1}
                      max={8}
                      step={1}
                      value={field.value}
                      onValueChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="autoDeploy"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between space-y-0 rounded-md border-2 border-border p-3">
                  <div>
                    <FormLabel className="cursor-pointer">
                      Auto-Deploy on Push
                    </FormLabel>
                    <FormDescription>
                      Automatically build commits pushed to main.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      noShadow
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field, fieldState }) => (
                <FormItem>
                  <div className="flex items-center gap-2.5">
                    <FormControl>
                      <Checkbox
                        noShadow
                        state={fieldState.error ? "error" : "default"}
                        checked={field.value}
                        onCheckedChange={(val) => field.onChange(val === true)}
                      />
                    </FormControl>
                    <FormLabel className="cursor-pointer">
                      I agree to the workspace deployment terms
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Create Project
            </Button>
          </form>
        </Form>

        {result && (
          <pre className="mt-4 overflow-x-auto rounded-md border-2 border-border bg-muted p-3 font-mono text-[11px] font-bold">
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </CardContent>
    </Card>
  );
}
