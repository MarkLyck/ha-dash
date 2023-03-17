'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

export const TemperatureSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const value = Number(props.value)

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden rounded border border-slate-200 bg-slate-100 dark:border-none dark:bg-slate-1000">
        <SliderPrimitive.Range className="absolute h-full bg-slate-900 dark:bg-slate-200" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="relative mr-2 block h-[10px] w-[2px] rounded border border-none bg-slate-100 transition focus:outline-none dark:bg-slate-800 "
        style={value < 10 ? { opacity: 0 } : { opacity: 1 }}
      />
    </SliderPrimitive.Root>
  )
})
TemperatureSlider.displayName = SliderPrimitive.Root.displayName
