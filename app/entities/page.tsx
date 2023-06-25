'use client'

import useStore from '@/lib/useStore'
import { Entity } from '@/components/entity'
import type { HassEntity } from 'home-assistant-js-websocket'
import { Separator } from '@/components/ui/separator'

const generateGroupedEntities = (entities: (HassEntity | undefined)[]) => {
  const groupedEntities: Record<string, HassEntity[]> = {}

  entities.forEach((entity) => {
    const entityGroup = entity?.entity_id.split('.')[0]
    if (!entity || !entityGroup) return

    if (!groupedEntities[entityGroup]) {
      groupedEntities[entityGroup] = [entity]
    } else {
      groupedEntities[entityGroup]?.push(entity)
    }
  })

  return groupedEntities
}

const Entities = () => {
  const entities = useStore((s) => s.entities)
  const entitiesList = Object.keys(entities).map((key) => entities[key])
  const groupEntities = generateGroupedEntities(entitiesList)
  const groups = Object.keys(groupEntities)

  return (
    <div className="flex flex-col gap-2 p-4">
      {groups.map((group) => {
        return (
          <>
            <h1 className="font-bold capitalize">{group}</h1>
            <Separator />
            <ul key={group} className="flex flex-col gap-2">
              {groupEntities[group]?.map((entity) => (
                <Entity entity={entity} key={entity.entity_id} />
              ))}
            </ul>
          </>
        )
      })}
    </div>
  )
}

export default Entities
