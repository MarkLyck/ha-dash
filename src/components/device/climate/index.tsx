'use client'

import useStore from '@/lib/useStore'

import { getSupportedFeatures } from '@/lib/supportedFeatures'
import { callService } from '@/lib/hass'

import { ClimateCard } from './Card'

export const Climate = ({ entityId }: { entityId?: string }) => {
  const entities = useStore((s) => s.entities)

  if (!entityId) return null
  const entity = entities[entityId]
  if (!entity) return null

  const supportedFeatures = getSupportedFeatures(
    'climate',
    entity.attributes.supported_features,
  )

  const setState = async (state: 'off' | 'cool' | 'heat' | 'auto') => {
    await callService({
      domain: 'climate',
      service: 'set_hvac_mode',
      service_data: {
        hvac_mode: state,
      },
      target: { entity_id: entityId },
    })
  }

  const setTargetTemperature = async (targetTemperature: number) => {
    await callService({
      domain: 'climate',
      service: 'set_temperature',
      service_data: {
        temperature: targetTemperature,
      },
      target: { entity_id: entityId },
    })
  }

  return (
    <ClimateCard
      name={entity.attributes.friendly_name}
      supportedFeatures={supportedFeatures}
      state={entity.state as 'off' | 'cool' | 'heat' | 'auto'}
      currentTemperature={entity.attributes.current_temperature}
      targetTemperature={entity.attributes.temperature}
      setState={setState}
      setTargetTemperature={setTargetTemperature}
    />
  )
}
