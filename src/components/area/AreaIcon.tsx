import {
  BathIcon,
  DoubleBedIcon,
  Oven1Icon,
  WorkIcon,
  Sofa2Icon,
} from '@/assets/icons'

export type AreaIconProps = React.SVGProps<SVGSVGElement> & {
  areaName: string
  size?: number
}

export const AreaIcon = ({ areaName, ...props }: AreaIconProps) => {
  const area = areaName.toLowerCase()

  let Icon: null | (({ size }: { size?: number }) => JSX.Element) = null

  if (area.includes('bed')) Icon = DoubleBedIcon
  if (area.includes('office')) Icon = WorkIcon
  if (area.includes('bath')) Icon = BathIcon
  if (area.includes('kitchen')) Icon = Oven1Icon
  if (area.includes('living')) Icon = Sofa2Icon

  if (Icon === null) return null

  return <Icon {...props} />
}
