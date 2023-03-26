import { HumidifierCard, type HumidifierCardProps } from './Card'

export const Humidifier = (props: Omit<HumidifierCardProps, 'icon'>) => {
  return <HumidifierCard icon={['far', 'humidity']} {...props} />
}
