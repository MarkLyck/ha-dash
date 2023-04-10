'use client'

import Link from 'next/link'
import { useAtom } from 'jotai'

import { areasAtom } from '@/lib/websocket'
import { AreaCard } from '@/components/area/areaCard'

const Areas = () => {
  const [areas] = useAtom(areasAtom)

  return (
    <ul className="flex flex-wrap gap-2 p-4">
      {areas.map((area) => (
        <Link key={area.area_id} href={`/areas/${area.area_id}`}>
          <AreaCard areaName={area.name} />
        </Link>
      ))}
    </ul>
  )
}

export default Areas
