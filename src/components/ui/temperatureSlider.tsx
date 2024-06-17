'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { TbFlame, TbSnowflake } from 'react-icons/tb'

type TemperatureSliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & {
  currentValue: number
}

const currentTempStyle = cva(
  '-translate-y-1/2 absolute top-1/2 h-1 w-1 rounded opacity-50',
  {
    variants: {
      isHigher: {
        true: 'bg-info bg-slate-400',
        false: 'bg-slate-400 dark:bg-info',
      },
    },
  },
)

export const TemperatureSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  TemperatureSliderProps
>(({ className, currentValue, ...props }, ref) => {
  const value = Number(props.value)

  const percentageOffset =
    ((currentValue - Number(props?.min)) /
      (Number(props?.max) - Number(props?.min))) *
    100

  const showCurrentValue = Math.round(currentValue) !== value
  const isCooling = value < currentValue
  const isHeating = value > currentValue
  const showCoolHotIcon = value > 10

  const CoolHotIcon = isCooling ? TbSnowflake : TbFlame

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center overflow-hidden rounded border-[1px]',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-6 w-full grow overflow-hidden rounded-sm bg-bg-white hover:cursor-pointer dark:bg-bg-surface">
        <SliderPrimitive.Range className="absolute h-full bg-bg-surface dark:bg-bg-white" />
      </SliderPrimitive.Track>
      {showCurrentValue ? (
        <div
          className={currentTempStyle({ isHigher: currentValue > value })}
          style={{
            left: `calc(${percentageOffset}% - 1px)`,
          }}
        />
      ) : null}
      {showCoolHotIcon && (isCooling || isHeating) ? (
        <CoolHotIcon
          size={16}
          className="absolute left-2 text-slate-400 dark:text-slate-500"
        />
      ) : null}
      <SliderPrimitive.Thumb
        className="relative mr-2 block h-[14px] w-[2px] rounded border border-none bg-slate-100 transition dark:bg-white focus:outline-none"
        style={value < 10 ? { opacity: 0 } : { opacity: 1 }}
      />
    </SliderPrimitive.Root>
  )
})
TemperatureSlider.displayName = SliderPrimitive.Root.displayName
