'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

const BrightnessSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden rounded bg-slate-200 dark:bg-slate-1200">
      <SliderPrimitive.Range className="absolute h-full bg-slate-900 dark:bg-amber-100" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded border-2 border-slate-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 dark:border-amber-100 dark:bg-amber-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900" />
  </SliderPrimitive.Root>
))
BrightnessSlider.displayName = SliderPrimitive.Root.displayName

export { BrightnessSlider }