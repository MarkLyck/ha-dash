import { WaterSupplyCard, type WaterSupplyCardProps } from './Card'

export const WaterSupply = (props: Omit<WaterSupplyCardProps, 'icon'>) => {
  return <WaterSupplyCard icon={['far', 'pipe-valve']} {...props} />
}
