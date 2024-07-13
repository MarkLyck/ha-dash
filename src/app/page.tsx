'use client'

import { AreasCard } from '@/components/dashboard/areas'
import { Climate } from '@/components/device/climate'
import { Car } from '@/components/device/car'
import useStore from '@/lib/useStore'
import { Vacuum } from '@/components/device'
import { Chat } from '@/components/chat'

const Home = () => {
  const entities = useStore((s) => s.entities)

  const climateEntityId = Object.keys(entities).find((entityId) => {
    if (entityId.startsWith('climate') && !entityId.includes('tesla')) {
      return true
    }
    return false
  })
  const vacuumEntityId = Object.keys(entities).find((entityId) =>
    entityId.startsWith('vacuum'),
  )

  return (
    <div className="relative flex flex-wrap gap-4 p-4">
      <AreasCard className="w-full" />
      <Climate entityId={climateEntityId} className="w-[280px]" />
      <Car className="w-[280px]" />
      <Vacuum entityId={vacuumEntityId} className="w-[280px]" />
      <Chat className="absolute right-4 bottom-4" />
    </div>
  )
}

export default Home
