'use client'

import { AreasCard } from '@/components/dashboard/areas'
import { Climate } from '@/components/device/climate'
import { Car } from '@/components/device/car'
import useStore from '@/lib/useStore'

const Home = () => {
  const entities = useStore((s) => s.entities)

  const climateEntityId = Object.keys(entities).find((entityId) =>
    entityId.startsWith('climate'),
  )
  // const vacuumEntityId = Object.keys(entities).find((entityId) =>
  //   entityId.startsWith('vacuum'),
  // )
  // console.log('🔈 ~ vacuumEntityId:', vacuumEntityId)

  return (
    <div className="grid grid-cols-8 gap-4 p-4">
      <AreasCard className="col-span-8" />
      <Climate entityId={climateEntityId} />
      <Car className="col-span-2" />
    </div>
  )
}

export default Home
