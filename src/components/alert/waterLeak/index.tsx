import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

import { getAreaIcon } from '@/components/area/areaIcon'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/typography'

const linkStyle = cva(
  'inline-flex items-center justify-center rounded-md font-medium text-sm transition-colors disabled:pointer-events-none active:scale-95 dark:data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 data-[state=open]:bg-slate-100 dark:hover:text-slate-100 first-letter:capitalize disabled:opacity-50 focus:outline-none dark:focus:ring-slate-400 focus:ring-2 focus:ring-slate-400 dark:focus:ring-offset-slate-900 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-white dark:bg-slate-50 hover:bg-slate-700 dark:text-slate-900',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-2',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type WaterLeakAlertProps = {
  area: string
  dateTime: Date
}

export const WaterLeakAlert = ({ area }: WaterLeakAlertProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FontAwesomeIcon
        icon={['far', 'house-flood-water']}
        size="4x"
        className="mb-4 text-destructive"
      />
      <Title level={1} className="text-destructive text-xl">
        Water leak detected!
      </Title>
      <Title level={3} className="mb-4 text-lg">
        {/* TODO use real DateTime */}
        In the {area} - 11:46 am
      </Title>
      <div className="flex flex-col gap-4">
        <Button>
          <FontAwesomeIcon icon={['fas', 'pipe-valve']} className="mr-2" />
          Turn off water supply
        </Button>
        <div className="flex gap-4">
          <Link href={`/area/${area}`} className={linkStyle()}>
            <FontAwesomeIcon icon={getAreaIcon(area)} className="mr-2" />
            {area}
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
