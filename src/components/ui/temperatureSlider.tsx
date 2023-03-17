'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

type TemperatureSliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & {
  currentValue: number
}

const currentTempStyle = cva('absolute top-[1px] bottom-[1px] w-[1px]', {
  variants: {
    isHigher: {
      true: 'bg-slate-500 dark:bg-slate-400',
      false: 'bg-slate-400 dark:bg-slate-500',
    },
  },
})

export const TemperatureSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  TemperatureSliderProps
>(({ className, currentValue, ...props }, ref) => {
  const value = Number(props.value)

  const percentageOffset =
    ((currentValue - Number(props?.min)) /
      (Number(props?.max) - Number(props?.min))) *
    100

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center overflow-hidden',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-5 w-full grow overflow-hidden rounded border border-slate-200 bg-slate-100 hover:cursor-pointer dark:border-none dark:bg-slate-1000">
        <SliderPrimitive.Range className="absolute h-full bg-slate-900 dark:bg-slate-200" />
      </SliderPrimitive.Track>
      <div
        className={currentTempStyle({ isHigher: currentValue > value })}
        style={{
          left: `calc(${percentageOffset}% - 1px)`,
        }}
      />
      <SliderPrimitive.Thumb
        className="relative mr-2 block h-[12px] w-[2px] rounded border border-none bg-slate-100 transition focus:outline-none dark:bg-slate-800 "
        style={value < 10 ? { opacity: 0 } : { opacity: 1 }}
      />
    </SliderPrimitive.Root>
  )
})
TemperatureSlider.displayName = SliderPrimitive.Root.displayName
