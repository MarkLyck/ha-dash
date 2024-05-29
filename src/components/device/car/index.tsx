import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useQuery } from '@tanstack/react-query'

import { CarCard } from './Card'
import useStore from '@/lib/useStore'

import type { ChargingState, ShiftState } from './types'

const CAR_ENTITY_IDS = {
  battery_level: 'sensor.model_y_battery_level',
  battery_range: 'sensor.model_y_battery_range',
  charge_energy_added: 'sensor.model_y_charge_energy_added',
  charge_rate: 'sensor.model_y_charge_rate',
  charger_current: 'sensor.model_y_charger_current',
  charger_power: 'sensor.model_y_charger_power',
  charger_voltage: 'sensor.model_y_charger_voltage',
  charging: 'sensor.model_y_charging',
  distance_to_arrival: 'sensor.model_y_distance_to_arrival',
  inside_temperature: 'sensor.model_y_inside_temperature',
  outside_temperature: 'sensor.model_y_outside_temperature',
  time_to_arrival: 'sensor.model_y_time_to_arrival',
  time_to_full_charge: 'sensor.model_y_time_to_full_charge',
  shift_state: 'sensor.model_y_shift_state',
  speed: 'sensor.model_y_speed',
}

const fetchTeslaState = async () => {
  const response = await fetch('/api/teslemetry')
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }
  return response.json()
}

export const Car = () => {
  const entities = useStore((s) => s.entities)
  const teslaState = useQuery({
    queryKey: ['teslaState'],
    queryFn: fetchTeslaState,
  })

  console.log('🔈 ~ teslaState:', teslaState)

  const batteryEntity = entities[CAR_ENTITY_IDS.battery_level]
  const chargingEntity = entities[CAR_ENTITY_IDS.charging]
  const shiftStateEntity = entities[CAR_ENTITY_IDS.shift_state]

  let icon: IconProp = ['far', 'car']
  const batteryPercentage: undefined | number = batteryEntity
    ? Number.parseInt(batteryEntity.state)
    : undefined

  const chargingState: ChargingState | undefined = chargingEntity
    ? (chargingEntity.state as ChargingState)
    : undefined

  const isCharging =
    chargingState === 'charging' || chargingState === 'starting'
  const isDriving = false
  const isHome = true

  if (
    isCharging &&
    typeof batteryPercentage === 'number' &&
    batteryPercentage < 100
  ) {
    icon = ['far', 'car-circle-bolt']
  } else if (isHome) {
    icon = ['far', 'car-garage']
  } else if (isDriving) {
    icon = ['far', 'car-side']
  }

  return (
    <CarCard
      name="Model Y"
      mode={shiftStateEntity?.state as ShiftState | undefined}
      icon={icon}
      isLocked={true}
      chargingState={chargingState}
      batteryPercentage={batteryPercentage}
    />
  )
}
