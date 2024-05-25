import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DeviceCard, type DeviceCardType } from '@/components/ui/deviceCard'
import { StateActionButton } from '@/components/ui/quickActionButton'

export interface FoodDispenserCardProps {
  name: string
  icon: IconProp
  isEmpty: boolean
  lastDispensed?: Date
  setState: (state: boolean) => void
}

export const FoodDispenserCard = ({
  name,
  icon,
  isEmpty,
  lastDispensed,
  setState,
}: FoodDispenserCardProps) => {
  const isActive = false
  let status = lastDispensed?.toDateString()
  let type: DeviceCardType = 'default'
  if (isEmpty) {
    type = 'warning'
    status = 'empty'
  }

  return (
    <DeviceCard
      isActive={isActive}
      name={name}
      status={<span data-chromatic="ignore">{status}</span>}
      type={type}
      setIsActive={setState}
      Icon={(props) => <FontAwesomeIcon icon={icon} {...props} />}
      action={
        <StateActionButton isActive={isActive}>
          <FontAwesomeIcon icon={['far', 'bowl-food']} />
        </StateActionButton>
      }
    />
  )
}
