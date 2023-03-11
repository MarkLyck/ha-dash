import { FontAwesomeIcon } from '@/utils/icon'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { cva } from 'class-variance-authority'

const iconContainer = cva(
  [
    'rounded-full',
    'w-12',
    'h-12',
    'flex',
    'items-center',
    'flex',
    'justify-center',
    'items-center',
    'mb-2',
    'bg-opacity-25',
  ],
  {
    variants: {
      type: {
        lock: 'bg-blue-500 text-blue-600',
        light: 'bg-yellow-500 text-yellow-600',
        camera: 'bg-red-500 text-red-600',
      },
    },
  }
)

type StatusProps = {
  name: string
  state: string
  type: string
  icon: IconProp
}

export const Status = ({ name, state, type, icon }: StatusProps) => {
  if (!name || !state || !type) return null

  return (
    <div className="flex flex-col items-center">
      {/* @ts-expect-error - string doesn't match variant type */}
      <div className={iconContainer({ type: type })}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4 className="font-semibold">{name}</h4>
      <span className="opacity-50">{state}</span>
    </div>
  )
}
