'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, color, ...props }, ref) => {
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
      <SliderPrimitive.Track className="relative h-5 w-full grow overflow-hidden rounded border border-slate-200 bg-slate-100 hover:cursor-pointer dark:border-none dark:bg-slate-1000">
        <SliderPrimitive.Range
          className="absolute h-full bg-slate-900 dark:bg-slate-200"
          style={color ? { background: color } : undefined}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="relative mr-2 block h-[12px] w-[3px] rounded border border-none bg-slate-100 transition focus:outline-none dark:bg-slate-800 "
        style={value < 10 ? { opacity: 0 } : { opacity: 1 }}
      />
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName
