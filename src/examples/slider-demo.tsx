"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

/**
 * Overview demo
 */
export function SliderDemo() {
  return <SliderBasicDemo />;
}

/**
 * 1. Basic Slider
 */
export function SliderBasicDemo() {
  const [volume, setVolume] = React.useState([65]);

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider-volume">Master Volume</Label>
        <span className="font-mono text-xs font-extrabold">{volume[0]}%</span>
      </div>
      <Slider
        id="slider-volume"
        value={volume}
        onValueChange={setVolume}
        max={100}
        step={1}
        aria-label="Master Volume"
      />
    </div>
  );
}

/**
 * 2. Range Slider (Dual Thumb)
 */
export function SliderRangeDemo() {
  const [range, setRange] = React.useState([25, 75]);

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between">
        <Label>Price Range</Label>
        <span className="font-mono text-xs font-extrabold">
          ${range[0]} – ${range[1]}
        </span>
      </div>
      <Slider
        value={range}
        onValueChange={setRange}
        min={0}
        max={100}
        step={5}
        aria-label="Price Range"
      />
    </div>
  );
}

/**
 * 3. Size & Shape
 */
export function SliderSizeShapeDemo() {
  return (
    <div className="w-full max-w-sm space-y-5">
      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold text-muted-foreground">
          sm (square)
        </span>
        <Slider sliderSize="sm" defaultValue={[40]} aria-label="Small slider" />
      </div>

      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold text-muted-foreground">
          default (square)
        </span>
        <Slider
          sliderSize="default"
          defaultValue={[60]}
          aria-label="Default slider"
        />
      </div>

      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold text-muted-foreground">
          lg (square)
        </span>
        <Slider sliderSize="lg" defaultValue={[80]} aria-label="Large slider" />
      </div>

      <div className="space-y-1.5">
        <span className="font-mono text-xs font-bold text-muted-foreground">
          circle shape
        </span>
        <Slider shape="circle" defaultValue={[55]} aria-label="Circle slider" />
      </div>
    </div>
  );
}

/**
 * 4. Variants
 */
export function SliderVariantDemo() {
  const variants = [
    { label: "primary", variant: "primary", value: 75 },
    { label: "secondary", variant: "secondary", value: 65 },
    { label: "success", variant: "success", value: 85 },
    { label: "info", variant: "info", value: 55 },
    { label: "warning", variant: "warning", value: 45 },
    { label: "destructive", variant: "destructive", value: 30 },
  ] as const;

  return (
    <div className="w-full max-w-sm space-y-4">
      {variants.map((item) => (
        <div key={item.label} className="space-y-1.5">
          <div className="flex items-center justify-between font-mono text-xs font-bold">
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </div>
          <Slider
            variant={item.variant}
            defaultValue={[item.value]}
            aria-label={`${item.label} slider`}
          />
        </div>
      ))}
    </div>
  );
}

/**
 * 5. Stepped & Vertical
 */
export function SliderSteppedVerticalDemo() {
  const [stepVal, setStepVal] = React.useState([50]);

  return (
    <div className="flex w-full max-w-md flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="w-full max-w-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <Label>Quality Preset (Step 25)</Label>
          <span className="font-mono text-xs font-extrabold">
            {stepVal[0]}%
          </span>
        </div>
        <Slider
          value={stepVal}
          onValueChange={setStepVal}
          min={0}
          max={100}
          step={25}
          aria-label="Quality preset"
        />
        <div className="flex justify-between font-mono text-[10px] font-bold text-muted-foreground">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex h-36 flex-col items-center gap-2">
          <Slider
            orientation="vertical"
            defaultValue={[70]}
            aria-label="Vertical slider 1"
          />
          <span className="font-mono text-[10px] font-bold">EQ 1</span>
        </div>
        <div className="flex h-36 flex-col items-center gap-2">
          <Slider
            orientation="vertical"
            variant="info"
            defaultValue={[45]}
            aria-label="Vertical slider 2"
          />
          <span className="font-mono text-[10px] font-bold">EQ 2</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 6. Disabled & No Shadow
 */
export function SliderStatesDemo() {
  return (
    <div className="w-full max-w-sm space-y-5">
      <div className="space-y-1.5">
        <Label className="opacity-50">Disabled Slider</Label>
        <Slider defaultValue={[40]} disabled aria-label="Disabled slider" />
      </div>

      <div className="space-y-1.5">
        <Label>Flat Slider (noShadow)</Label>
        <Slider defaultValue={[65]} noShadow aria-label="Flat slider" />
      </div>
    </div>
  );
}
