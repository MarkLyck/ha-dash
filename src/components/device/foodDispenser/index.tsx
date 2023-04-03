import { FoodDispenserCard, type FoodDispenserCardProps } from './Card'

export const FoodDispenser = (props: Omit<FoodDispenserCardProps, 'icon'>) => {
  return <FoodDispenserCard icon={['far', 'dog']} {...props} />
}
