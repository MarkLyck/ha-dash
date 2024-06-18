// import { DeviceCard } from '@/components/ui/deviceCard'
import { GeistMono } from 'geist/font/mono'
import { useRef, useState } from 'react'
import { cn, debounce } from '@/lib/utils'
import type { ClimateFeature } from '@/lib/supportedFeatures'
import {
  TbAirConditioning,
  TbFlame,
  TbPower,
  TbSnowflake,
} from 'react-icons/tb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TbChevronDown, TbChevronUp } from 'react-icons/tb'
import { Button } from '@/components/ui/button'

export interface ClimateCardProps {
  className?: string
  name?: string
  state: 'heat' | 'cool' | 'auto' | 'off'
  currentTemperature: number
  targetTemperature: number
  setState: (state: 'heat' | 'cool' | 'auto' | 'off') => void
  setTargetTemperature: (temperature: number) => void
  supportedFeatures: Map<ClimateFeature, number>
}

export const ClimateCard = ({
  className,
  state,
  currentTemperature,
  targetTemperature,
  setState,
  setTargetTemperature,
  supportedFeatures,
}: ClimateCardProps) => {
  const [targetTempValue, setTargetTempValue] = useState(targetTemperature)
  const debouncedSetTargetTemperature = useRef(
    debounce((value: number) => setTargetTemperature(value), 300),
  ).current

  let StateIcon = TbAirConditioning
  let stateText: string = state
  if (state === 'heat') {
    StateIcon = TbFlame
    stateText = 'heating'
  } else if (state === 'cool') {
    StateIcon = TbSnowflake
    stateText = 'cooling'
  }

  const ticks = Array.from({ length: 85 - 65 + 1 }, (_, i) => i + 65)

  return (
    <Card className={cn('relative', className)}>
      <CardHeader className="p-3">
        <CardTitle className="z-40 flex w-fit items-center gap-2">
          <StateIcon /> <span>Air Condition</span>
        </CardTitle>
        <p className="text-sm text-text-sub first-letter:capitalize">
          {state === 'heat' || state === 'cool'
            ? `${stateText} to ${targetTempValue}°`
            : stateText}
        </p>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <div
          className={cn(
            GeistMono.className,
            '-translate-y-1/2 absolute top-1/2 left-6 z-10 flex flex-col items-center gap-2',
          )}
        >
          <Button
            variant="ghost"
            className="w-[136px] hover:bg-warning hover:text-white"
            disabled={!supportedFeatures.has('TARGET_TEMPERATURE')}
            onClick={() => {
              setTargetTempValue(Math.round(targetTemperature) + 1)
              debouncedSetTargetTemperature(Math.round(targetTemperature) + 1)
            }}
          >
            <TbChevronUp size={20} />
          </Button>
          <div className="relative rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <div className="fond-bold flex w-[136px] items-center justify-center gap-2 text-[32px]">
              <span>{Math.round(targetTempValue)}</span>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-[136px] hover:bg-info hover:text-white"
            disabled={!supportedFeatures.has('TARGET_TEMPERATURE')}
            onClick={() => {
              setTargetTempValue(Math.round(targetTemperature) - 1)
              debouncedSetTargetTemperature(Math.round(targetTemperature) - 1)
            }}
          >
            <TbChevronDown size={20} />
          </Button>
        </div>
        <div className="absolute bottom-4 left-6">
          <Button
            variant="outline"
            size="sm"
            className={cn(
              'rounded-r-none',
              state === 'cool' && 'bg-neutral-100 dark:bg-neutral-600',
            )}
            onClick={() => setState('cool')}
            disabled={state === 'cool'}
          >
            <TbSnowflake size={20} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              'rounded-none',
              state === 'heat' && 'bg-neutral-100 dark:bg-neutral-600',
            )}
            onClick={() => setState('heat')}
            disabled={state === 'heat'}
          >
            <TbFlame size={20} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              'rounded-l-none',
              state === 'off' && 'bg-neutral-100 dark:bg-neutral-600',
            )}
            disabled={state === 'off'}
            onClick={() => setState('off')}
          >
            <TbPower size={20} />
          </Button>
        </div>
        <div
          className={cn(
            GeistMono.className,
            'absolute top-5 right-4 flex flex-col items-end gap-[10px]',
          )}
        >
          <div className="-top-2 absolute right-0 z-10 h-20 w-20 rounded-lg bg-gradient-to-b from-white to-transparent dark:from-black" />
          <div className="-bottom-2 absolute right-0 z-10 h-20 w-20 rounded-lg bg-gradient-to-t from-white to-transparent dark:from-black" />
          {ticks.reverse().map((tick) => {
            const isCurrentTemp = tick === Math.round(currentTemperature)
            const isTargetTemp = tick === Math.round(targetTempValue)

            return (
              <div key={tick} className="relative z-1">
                <div
                  className={cn(
                    'h-[2px] w-3 rounded bg-black/50 dark:bg-white/50',
                    // tick < currentTemperature && 'bg-black dark:bg-white',
                    tick % 5 === 0 && 'w-6',
                    isCurrentTemp && 'bg-white dark:bg-white',
                    isTargetTemp && 'bg-info dark:bg-info',
                  )}
                />
                {isTargetTemp && (
                  <div className="-translate-y-1/2 absolute top-1/2 right-8 z-30 rounded bg-info px-1 py-0.5 text-[14px] text-white shadow">
                    {Math.round(targetTempValue)}°
                  </div>
                )}
                {tick % 5 === 0 && (
                  <span className="-translate-y-1/2 absolute top-1/2 right-8 rounded text-[14px]">
                    {tick}°
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
