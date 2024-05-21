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
        'relative flex w-[80px] touch-none select-none items-center',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-60 w-full grow overflow-hidden rounded-[20px] border-2 border-border bg-white hover:cursor-pointer dark:bg-black">
        <SliderPrimitive.Range
          className="absolute w-full bg-bg-weak"
          // style={{ background: color ? color : undefined }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="relative mx-2 mt-4 block h-[6px] w-[62px] cursor-grab rounded border border-none bg-black transition focus:outline-none">
        <div className="-right-6 -translate-y-1/2 absolute top-1/2 translate-x-1/2 rounded-full bg-blue-500 px-2 py-1 text-xs">
          {props.value}%
        </div>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  )
})
BrightnessSlider.displayName = SliderPrimitive.Root.displayName
