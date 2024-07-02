import useStore from '@/lib/useStore'
import { callService } from '@/lib/hass'

import { VacuumCard } from './Card'
import { getSupportedFeatures } from '@/lib/supportedFeatures'

export const Vacuum = ({
  entityId,
}: {
  entityId?: string
}) => {
  const entities = useStore((s) => s.entities)

  if (!entityId) return null
  const entity = entities[entityId]
  console.log('🔈 ~ entity:', entity)
  if (!entity) return null

  const supportedFeatures = getSupportedFeatures(
    'vacuum',
    entity.attributes.supported_features,
  )

  const startVacuum = async () => {
    await callService({
      domain: 'vacuum',
      service: 'start',
      service_data: {},
      target: { entity_id: entityId },
    })
  }

  console.log(supportedFeatures)

  return <VacuumCard className="w-[280px]" startVacuum={startVacuum} />
}
