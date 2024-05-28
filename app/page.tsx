'use client'

import { AreasCard } from '@/components/dashboard/areas'
import { Climate } from '@/components/device/climate'
import useStore from '@/lib/useStore'

const Home = () => {
  const entities = useStore((s) => s.entities)

  const climateEntityId = Object.keys(entities).find((entityId) =>
    entityId.startsWith('climate'),
  )
  const vacuumEntityId = Object.keys(entities).find((entityId) =>
    entityId.startsWith('vacuum'),
  )
  console.log('🔈 ~ vacuumEntityId:', vacuumEntityId)

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <AreasCard className="col-span-4" />
      <Climate entityId={climateEntityId} />
    </div>
  )
}

export default Home
