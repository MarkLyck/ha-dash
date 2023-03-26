import { AirPurifierCard, type AirPurifierCardProps } from './Card'

export const AirPurifier = (props: Omit<AirPurifierCardProps, 'icon'>) => {
  return <AirPurifierCard icon={['far', 'leaf']} {...props} />
}
