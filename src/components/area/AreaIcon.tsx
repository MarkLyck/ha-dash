import {
  TbBath,
  TbBedFilled,
  TbCarGarage,
  TbDesk,
  TbFence,
  TbFridge,
  TbHorseToy,
  TbSofa,
} from 'react-icons/tb'

export type AreaIconProps = React.SVGProps<SVGSVGElement> & {
  areaName: string
  size?: number
}

export const AreaIcon = ({ areaName, ...props }: AreaIconProps) => {
  const area = areaName.toLowerCase()

  let Icon: null | (({ size }: { size?: number }) => JSX.Element) = null

  if (area.includes('bed')) Icon = TbBedFilled
  if (area.includes('office')) Icon = TbDesk
  if (area.includes('bath')) Icon = TbBath
  if (area.includes('kitchen')) Icon = TbFridge
  if (area.includes('living')) Icon = TbSofa
  if (area.includes('nursery')) Icon = TbHorseToy
  if (area.includes('garage')) Icon = TbCarGarage
  if (area.includes('balcony')) Icon = TbFence

  if (Icon === null) return null

  return <Icon {...props} />
}
