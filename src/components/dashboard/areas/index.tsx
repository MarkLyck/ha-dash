'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import useStore from '@/lib/useStore'
import { useState } from 'react'

import { tv } from 'tailwind-variants'

const AreaTabClass = tv({
  base: 'rounded-none bg-transparent text-white shadow-none hover:bg-white/20',
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

  const currentArea = areas.find((area) => area.area_id === selectedArea)
  const areaImageSrc =
    // @ts-expect-error - any
    areaImages[currentArea?.name ?? 'fallback'] ?? areaImages.fallback

  return (
    <Card
      className="h-[600px] bg-center bg-cover p-4"
      style={{
        backgroundImage: `url(${areaImageSrc})`,
      }}
    >
      <ul className="inline-flex overflow-x-auto rounded-lg border border-border/10 bg-black/20 backdrop-blur-sm">
        {areas.map((area) => (
          <li key={area.area_id}>
            <Button
              size="lg"
              onClick={() => setSelectedArea(area.area_id)}
              className={AreaTabClass({
                selected: selectedArea === area.area_id,
              })}
            >
              {area.name}
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  )
}
