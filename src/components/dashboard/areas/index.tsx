'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import useStore from '@/lib/useStore'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

import { MediaPlayer } from './mediaPlayer'
import { getEntitiesByType } from '@/lib/utils'
import { useArea } from '@/hooks/useArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAreaIcon } from '@/components/area/areaIcon'

const AreaTabClass = tv({
  base: 'rounded-none bg-transparent text-white shadow-none hover:bg-white/20 px-4',
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

export const AreasCard = () => {
  const areas = useStore((s) => s.areas)
  const [selectedArea, setSelectedArea] = useState<string | undefined>(
    areas[0]?.area_id,
  )
  const area = useArea(selectedArea)

  const mediaPlayerEntities = getEntitiesByType(area.entities, 'media_player')

  const currentArea = areas.find((area) => area.area_id === selectedArea)
  const areaImageSrc =
    // @ts-expect-error - any
    areaImages[currentArea?.name ?? 'fallback'] ?? areaImages.fallback

  return (
    <Card
      className="flex h-[400px] flex-col justify-between bg-center bg-cover p-4"
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
                <FontAwesomeIcon
                  icon={getAreaIcon(area.name)}
                  className="mr-2"
                />
                {area.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {mediaPlayerEntities.length > 0 ? (
          <MediaPlayer
            key={selectedArea}
            entityId={mediaPlayerEntities[0]?.entity_id}
          />
        ) : null}
      </div>
    </Card>
  )
}
