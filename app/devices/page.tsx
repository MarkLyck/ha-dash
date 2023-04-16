'use client'

import useStore from '@/lib/useStore'
import { Entity } from '@/components/entity'

const Devices = () => {
  const entities = useStore((s) => s.entities)
  const entitiesList = Object.keys(entities).map((key) => entities[key])

  return (
    <div className="flex flex-col gap-2 p-4">
      {entitiesList?.map((entity) => {
        if (!entity) return null

        return <Entity entity={entity} key={entity.entity_id} />
      })}
    </div>
  )
}

export default Devices
