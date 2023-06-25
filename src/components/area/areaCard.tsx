import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

import { Button } from '@/components/ui/button'
import { DeviceName, deviceIconStyle } from '@/components/ui/deviceCard'
import Typography from '@/components/ui/typography'
import { getAreaIcon } from './areaIcon'

export const container = cva(
  'flex h-auto w-full max-w-[160px] flex-col items-start justify-start rounded-xl border px-4 py-3 transition',
  {
    variants: {
      active: {
        false: [
          'bg-slate-100',
          'border-slate-200',
          'hover:bg-slate-100',
          'dark:bg-slate-1000',
          'dark:border-slate-700',
          'dark:hover:border-slate-500',
        ],
        true: [
          'bg-white',
          'hover:bg-slate-100',
          'dark:bg-slate-800',
          'dark:border-slate-500',
          'dark:hover:border-slate-600',
        ],
      },
    },
  }
)

const detailContainerStyle = cva('py-1/2 px-1 first-letter:capitalize')
const Divider = () => (
  <div className="mx-1 h-3 w-[1px] bg-slate-400 last-of-type:hidden" />
)

type AreaCardProps = {
  areaName: string
  numberOfLightsOn?: number
  temperature?: number
  humidity?: number
}

export const AreaCard = ({
  areaName,
  numberOfLightsOn,
  temperature,
  humidity,
}: AreaCardProps) => {
  const icon = getAreaIcon(areaName)

  return (
    <Button className={container({ active: true })}>
      <div className="mb-2 flex h-8 w-full items-center justify-between">
        <FontAwesomeIcon icon={icon} className={deviceIconStyle()} />
      </div>
      <DeviceName>{areaName}</DeviceName>

      <Typography.Subtle className="mt-1 flex w-full items-center gap-1 overflow-hidden whitespace-nowrap text-sm text-opacity-60 first-letter:capitalize">
        {numberOfLightsOn ? (
          <>
            <div className={detailContainerStyle()}>
              <FontAwesomeIcon
                icon={['far', 'lightbulb-on']}
                className="mr-1"
              />
              {numberOfLightsOn}
            </div>
            <Divider />
          </>
        ) : null}
        {temperature ? (
          <>
            <div className={detailContainerStyle()}>
              <FontAwesomeIcon
                icon={['far', 'temperature-half']}
                className="mr-1"
              />
              {temperature}°F
            </div>
            <Divider />
          </>
        ) : null}
        {(temperature === undefined || numberOfLightsOn === 0) && humidity ? (
          <div className={detailContainerStyle()}>
            <FontAwesomeIcon icon={['far', 'humidity']} className="mr-1" />
            {humidity}%
          </div>
        ) : null}
      </Typography.Subtle>
    </Button>
  )
}
