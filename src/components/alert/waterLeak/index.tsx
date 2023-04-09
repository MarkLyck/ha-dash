import { Title } from '@/components/ui/typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { cva } from 'class-variance-authority'
import { Button } from '@/components/ui/button'
import { getRoomIcon } from '@/components/room/roomIcon'

const linkStyle = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 first-letter:capitalize',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type WaterLeakAlertProps = {
  room: string
  dateTime: Date
}

export const WaterLeakAlert = ({ room }: WaterLeakAlertProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FontAwesomeIcon
        icon={['far', 'house-flood-water']}
        size="4x"
        className="mb-4 text-danger-600"
      />
      <Title level={1} className="text-xl text-danger-600 dark:text-danger-600">
        Water leak detected!
      </Title>
      <Title level={3} className="mb-4 text-lg">
        {/* TODO use real DateTime */}
        In the {room} - 11:46 am
      </Title>
      <div className="flex flex-col gap-4">
        <Button>
          <FontAwesomeIcon icon={['fas', 'pipe-valve']} className="mr-2" />
          Turn off water supply
        </Button>
        <div className="flex gap-4">
          <Link href={`/room/${room}`} className={linkStyle()}>
            <FontAwesomeIcon icon={getRoomIcon(room)} className="mr-2" />
            {room}
          </Link>
          <Button className="flex-1">
            <FontAwesomeIcon icon={['fas', 'x']} className="mr-2" />
            Dismiss
          </Button>
        </div>
      </div>
    </div>
  )
}
