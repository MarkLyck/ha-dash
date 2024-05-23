import type { HassEntity } from 'home-assistant-js-websocket'

import { callService } from '@/lib/hass'
import { hexToRgb } from '@/lib/utils'

import { LightCard } from './Card'

import { getSupportedFeatures } from '@/lib/supportedFeatures'

// brightness from the HASS API is a number between 0 and 255
const convertBrightnessToPercentage = (brightness: number): number => {
  return Math.floor((brightness / 255) * 100)
}

export const Light = ({ entity }: { entity: HassEntity }) => {
  const supportedFeatures = getSupportedFeatures(
    'light',
    entity.attributes.supported_features,
  )

  const handleStateChange = async () => {
    await callService({
      domain: 'light',
      service: 'toggle',
      service_data: {},
      target: { entity_id: entity.entity_id },
    })
  }
  const handleColorChange = async (hexColor: string) => {
    await callService({
      domain: 'light',
      service: 'turn_on',
      service_data: {
        entity_id: entity.entity_id,
        rgb_color: hexToRgb(hexColor),
      },
    })
  }
  const handleSetBrightness = async (brightness: number | undefined) => {
    if (!brightness) return

    await callService({
      domain: 'light',
      service: 'turn_on',
      service_data: {
        entity_id: entity.entity_id,
        brightness_pct: brightness,
      },
    })
  }

  const brightnessPct = convertBrightnessToPercentage(
    entity.attributes.brightness,
  )

  return (
    <LightCard
      supportedFeatures={supportedFeatures}
      brightness={brightnessPct}
      setState={handleStateChange}
      setColor={handleColorChange}
      setBrightness={handleSetBrightness}
      icon={['far', 'lightbulb']}
      color="#FFF"
      isOn={entity.state !== 'off' && entity.state !== 'unavailable'}
      name={entity.attributes.friendly_name || entity.entity_id}
    />
  )
}
