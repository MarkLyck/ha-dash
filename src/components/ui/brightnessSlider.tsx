'use client'

import * as React from 'react'
import { useTheme } from '@/hooks/useTheme'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { calculateContrast, cn } from '@/lib/utils'

export const BrightnessSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, color, ...props }, ref) => {
  const value = Number(props.value)

  const contrast = calculateContrast(color, 'white')
  console.log('🔈 ~ contrast:', contrast)

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
        <SliderPrimitive.Range
          className="absolute h-full bg-slate-900 dark:bg-slate-200"
          style={color ? { background: color } : undefined}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="relative mr-2 block h-[10px] w-[2px] rounded border border-none bg-slate-100 transition focus:outline-none dark:bg-slate-800 "
        style={value < 10 ? { opacity: 0 } : { opacity: 1 }}
      />
    </SliderPrimitive.Root>
  )
})
BrightnessSlider.displayName = SliderPrimitive.Root.displayName
