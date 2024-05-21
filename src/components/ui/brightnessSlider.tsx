'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'

import * as React from 'react'

import { cn } from '@/lib/utils'

type BrightnessSliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & {
  color?: string
}

export const BrightnessSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  BrightnessSliderProps
>(({ className, color, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      orientation="vertical"
      ref={ref}
      className={cn(
        'relative flex w-[80px] touch-none select-none items-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-60 w-full grow overflow-hidden rounded-lg border border-slate-200 bg-bg-sub hover:cursor-pointer dark:border-none dark:bg-slate-1000">
        <SliderPrimitive.Range
          className="absolute w-full bg-white"
          style={{ background: color ? color : undefined }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="relative mx-2 mt-4 block h-[6px] w-[62px] cursor-grab rounded border border-none bg-black transition focus:outline-none" />
    </SliderPrimitive.Root>
  )
})
BrightnessSlider.displayName = SliderPrimitive.Root.displayName
