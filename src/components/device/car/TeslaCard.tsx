import { Card, CardContent } from '@/components/ui/card'
import { default as MapBox, Marker } from 'react-map-gl'

import { env } from '@/../env'

import type { ChargingState, Location, ShiftState } from './types'
import { Button } from '@/components/ui/button'
import { TbLock, TbLockOpen, TbSnowflake, TbSnowflakeOff } from 'react-icons/tb'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { BatteryIndicator } from './BatteryIndicator'

type TeslaCardProps = {
  className?: string
  location: Location
  locked: boolean | undefined
  batteryPercentage: number | undefined
  chargingState: ChargingState | undefined
  gear: ShiftState | undefined
}

export const TeslaCard = ({
  className,
  location,
  locked,
  batteryPercentage,
  chargingState,
  gear,
}: TeslaCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<{
    width: number | undefined
    height: number | undefined
  }>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // when the component gets mounted
    setSize({
      width: cardRef.current?.offsetWidth,
      height: cardRef.current?.offsetHeight,
    })
    // to handle page resize
    const getSize = () => {
      setSize({
        width: cardRef.current?.offsetWidth,
        height: cardRef.current?.offsetHeight,
      })
    }
    window.addEventListener('resize', getSize)
    // remove the event listener before the component gets unmounted
    return () => window.removeEventListener('resize', getSize)
  }, [cardRef])

  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardContent
        ref={cardRef}
        className="relative flex flex-col items-center justify-center gap-2 bg-[#040405] p-4"
      >
        <div className="z-20 mt-[100px]">
          <div>
            <Button
              variant="outline"
              className="rounded-r-none border-r-0"
              disabled
            >
              {locked ? <TbLockOpen /> : <TbLock />}
            </Button>
            <Button
              variant="outline"
              className="rounded-l-none border-l-0"
              disabled
            >
              {locked ? <TbSnowflake /> : <TbSnowflakeOff />}
            </Button>
          </div>
        </div>
        {location ? (
          <div className="absolute top-0 right-0 left-0 z-1 overflow-hidden rounded-lg">
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[100px] w-full bg-gradient-to-t from-black to-transparent" />
            <MapBox
              mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
              initialViewState={{
                longitude: location.longitude,
                latitude: location.latitude,
                zoom: 14,
              }}
              style={{ width: size.width, height: 180 }}
              mapStyle="mapbox://styles/marklyck/clwspy9v505hd01nxhp06ahd0"
            >
              <Marker
                longitude={location.longitude}
                latitude={location.latitude}
                anchor="bottom"
              >
                <div className="size-4 rounded-full border-2 border-info bg-info/50 shadow-md" />
              </Marker>
            </MapBox>
          </div>
        ) : null}
        <div className="absolute top-3 left-3 space-y-1.5">
          <p
            className="font-semibold"
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
          >
            Tesla Model Y
          </p>
          <div className="flex items-center gap-2">
            <BatteryIndicator
              percentage={batteryPercentage}
              isCharging={chargingState === 'charging'}
            />
            <span
              className="font-semibold text-text-sub text-xs"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
            >
              {batteryPercentage}%
            </span>
          </div>
          {gear !== 'unknown' && (
            <p className="text-text-sub text-xs first-letter:capitalize">
              {gear}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
