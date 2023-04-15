'use client'

import Link from 'next/link'

import useStore from '@/lib/useStore'
import { AreaCard } from '@/components/area/areaCard'

const Areas = () => {
  const areas = useStore((s) => s.areas)

  return (
    <ul className="flex flex-wrap gap-2 p-4">
      {areas.map((area) => (
        <Link
          key={area.area_id}
          href={`/areas/${area.area_id}`}
          className="w-full max-w-[160px]"
        >
          <AreaCard areaName={area.name} />
        </Link>
      ))}
    </ul>
  )
}

export default Areas
