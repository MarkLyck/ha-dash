import { deviceIconStyle, DeviceName } from '@/components/ui/deviceCard'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'
import Typography from '@/components/ui/typography'

import { getRoomIcon } from './roomIcon'

export const container = cva(
  'py-3 px-4 flex flex-col justify-start rounded-xl border transition w-full max-w-[160px] h-auto items-start',
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

const detailContainerStyle = cva('first-letter:capitalize py-1/2 px-1')
const Divider = () => (
  <div className="mx-1 h-3 w-[1px] bg-slate-400 last-of-type:hidden" />
)

type RoomCardProps = {
  roomName: string
  numberOfLightsOn?: number
  temperature?: number
  humidity?: number
}

export const RoomCard = ({
  roomName,
  numberOfLightsOn,
  temperature,
  humidity,
}: RoomCardProps) => {
  const icon = getRoomIcon(roomName)

  return (
    <Button className={container({ active: true })}>
      <div className="mb-2 flex h-8 w-full items-center justify-between">
        <FontAwesomeIcon icon={icon} className={deviceIconStyle()} />
      </div>
      <DeviceName>{roomName}</DeviceName>

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