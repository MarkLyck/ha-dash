import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { StateActionButton } from '@/components/ui/quickActionButton'
import { DeviceCard, type DeviceCardType } from '@/components/ui/deviceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  let status = lastDispensed?.toDateString()
  let type: DeviceCardType = 'default'
  if (isEmpty) {
    type = 'warning'
    status = 'empty'
  }

  return (
    <DeviceCard
      isActive={true}
      name={name}
      status={status}
      type={type}
      setIsActive={setState}
      icon={icon}
      action={
        <StateActionButton isActive={true}>
          <FontAwesomeIcon icon={['far', 'bowl-food']} />
        </StateActionButton>
      }
    />
  )
}
