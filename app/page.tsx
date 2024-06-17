'use client'

import { AreasCard } from '@/components/dashboard/areas'
import { Climate } from '@/components/device/climate'
import { Car } from '@/components/device/car'
import useStore from '@/lib/useStore'

const Home = () => {
  const entities = useStore((s) => s.entities)

  const climateEntityId = Object.keys(entities).find((entityId) => {
    if (entityId.startsWith('climate') && !entityId.includes('tesla')) {
      return true
    }
    return false
  })
  // const vacuumEntityId = Object.keys(entities).find((entityId) =>
  //   entityId.startsWith('vacuum'),
  // )

  return (
    <div className="flex flex-wrap gap-4 p-4">
      <AreasCard className="w-full" />
      <Climate entityId={climateEntityId} />
      <Car className="w-[280px]" />
    </div>
  )
}

export default Home
