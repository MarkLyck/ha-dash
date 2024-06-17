'use client'

import { useQuery } from '@tanstack/react-query'
import { withErrorBoundary } from 'react-error-boundary'

import { TeslaCard } from './TeslaCard'
import useStore from '@/lib/useStore'
import type { ChargingState, ShiftState } from './types'

const CAR_ENTITY_IDS = {
  battery_level: 'sensor.tesla_model_y_battery_level',
  battery_range: 'sensor.tesla_model_y_battery_range',
  charge_energy_added: 'sensor.tesla_model_y_charge_energy_added',
  charge_rate: 'sensor.tesla_model_y_charge_rate',
  charger_current: 'sensor.tesla_model_y_charger_current',
  charger_power: 'sensor.tesla_model_y_charger_power',
  charger_voltage: 'sensor.tesla_model_y_charger_voltage',
  charging: 'sensor.tesla_model_y_charging',
  distance_to_arrival: 'sensor.tesla_model_y_distance_to_arrival',
  inside_temperature: 'sensor.tesla_model_y_inside_temperature',
  outside_temperature: 'sensor.tesla_model_y_outside_temperature',
  time_to_arrival: 'sensor.tesla_model_y_time_to_arrival',
  time_to_full_charge: 'sensor.tesla_model_y_time_to_full_charge',
  shift_state: 'sensor.tesla_model_y_shift_state',
  speed: 'sensor.tesla_model_y_speed',
  lock: 'lock.tesla_model_y_lock',
}

const fetchTeslaState = async () => {
  const response = await fetch('/api/tessie/location')
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }
  return response.json()
}

type CarProps = {
  className?: string
}

const CarComponent = ({ className }: CarProps) => {
  const entities = useStore((s) => s.entities)
  const { data: location } = useQuery({
    queryKey: ['teslaLocation'],
    queryFn: fetchTeslaState,
  })

  const lockEntity = entities[CAR_ENTITY_IDS.lock]
  const batteryEntity = entities[CAR_ENTITY_IDS.battery_level]
  const chargingEntity = entities[CAR_ENTITY_IDS.charging]
  const shiftStateEntity = entities[CAR_ENTITY_IDS.shift_state]

  return (
    <TeslaCard
      className={className}
      location={location}
      locked={lockEntity?.state === 'locked'}
      batteryPercentage={
        batteryEntity?.state ? Number.parseInt(batteryEntity.state) : undefined
      }
      gear={shiftStateEntity?.state as ShiftState | undefined}
      chargingState={chargingEntity?.state as ChargingState | undefined}
    />
  )
}

export const Car = withErrorBoundary(CarComponent, {
  fallback: <div>Car Error</div>,
})
