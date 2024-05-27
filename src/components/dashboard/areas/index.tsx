'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import useStore from '@/lib/useStore'
import { useEffect, useState } from 'react'
import { tv } from 'tailwind-variants'

import { MediaPlayer } from './mediaPlayer'
import { cn, getEntitiesByType } from '@/lib/utils'
import { useArea } from '@/hooks/useArea'
import { LightsControl } from './lights'
import { AreaIcon } from '@/components/area/AreaIcon'

const AreaTabClass = tv({
  base: 'rounded-none bg-transparent px-4 text-white shadow-none hover:bg-white/20',
  variants: {
    selected: {
      true: 'bg-white text-black hover:bg-white',
      false: '',
    },
  },
})

const areaImages = {
  living_room: '/images/areas/living_room.png',
  kitchen: '/images/areas/kitchen.png',
  bedroom: '/images/areas/bedroom.png',
  bathroom: '/images/areas/bathroom.png',
  office: '/images/areas/office.png',
  fallback: '/images/areas/living_room.png',
}

export const AreasCard = ({ className }: { className?: string }) => {
  const areas = useStore((s) => s.areas)
  const [selectedArea, setSelectedArea] = useState<string | undefined>(
    areas[0]?.area_id,
  )
  const area = useArea(selectedArea)

  useEffect(() => {
    if (!selectedArea) {
      setSelectedArea(areas[0]?.area_id)
    }
  }, [areas.length])

  const lightEntities = getEntitiesByType(area.entities, 'light')
  const mediaPlayerEntities = getEntitiesByType(area.entities, 'media_player')

  const currentArea = areas.find((area) => area.area_id === selectedArea)
  const areaImageSrc =
    // @ts-expect-error - any
    areaImages[currentArea?.name ?? 'fallback'] ?? areaImages.fallback

  return (
    <Card
      className={cn(
        'flex h-[400px] flex-col justify-between bg-center bg-cover p-4',
        className,
      )}
      style={{
        backgroundImage: `url(${areaImageSrc})`,
      }}
    >
      <div>
        <ul className="inline-flex overflow-x-auto rounded-lg border border-border/10 bg-black/20 backdrop-blur-lg">
          {areas.map((area) => (
            <li key={area.area_id}>
              <Button
                size="lg"
                onClick={() => setSelectedArea(area.area_id)}
                className={AreaTabClass({
                  selected: selectedArea === area.area_id,
                })}
              >
                <AreaIcon areaName={area.name} className="mr-2" />
                {area.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        {mediaPlayerEntities.length > 0 ? (
          <MediaPlayer
            key={selectedArea}
            entityId={mediaPlayerEntities[0]?.entity_id}
          />
        ) : null}
        {lightEntities.length > 0 ? (
          <LightsControl
            entityIds={lightEntities.map((entity) => entity.entity_id)}
          />
        ) : null}
      </div>
    </Card>
  )
}
