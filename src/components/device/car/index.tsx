import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { CarCard, type CarCardProps } from './Card'

export const Car = (props: Omit<CarCardProps, 'icon'>) => {
  let icon: IconProp = ['far', 'car']
  const batteryPercentage = props.batteryPercentage
  const isCharging = props.isCharging
  const isDriving = props.mode === 'driving'
  const isHome = props.isHome

  if (isCharging && batteryPercentage < 100) {
    icon = ['far', 'car-circle-bolt']
  } else if (isHome) {
    icon = ['far', 'car-garage']
  } else if (isDriving) {
    icon = ['far', 'car-side']
  }

  return <CarCard icon={icon} {...props} />
}
