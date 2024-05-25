import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { getAreaIcon } from '@/components/area/getAreaIcon'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/typography'

type SmokeAlertProps = {
  area: string
  dateTime: Date
}

export const SmokeAlert = ({ area }: SmokeAlertProps) => (
  <div className="flex flex-col items-center justify-center">
    <FontAwesomeIcon
      icon={['far', 'fire-smoke']}
      size="4x"
      className="mb-4 text-destructive"
    />
    <Title level={1} className="text-destructive text-xl">
      Smoke detected!
    </Title>
    <Title level={3} className="mb-4 text-lg">
      {/* TODO use real DateTime */}
      In the {area} - 01:42 am
    </Title>
    <div className="flex flex-col gap-4">
      <Button>
        <FontAwesomeIcon icon={['fas', 'unlock']} className="mr-2" />
        Unlock doors
      </Button>
      <div className="flex gap-4">
        <Link href={`/areas/${area}`}>
          <Button>
            <FontAwesomeIcon icon={getAreaIcon(area)} className="mr-2" />
            {area}
          </Button>
        </Link>
        <Button className="flex-1">
          <FontAwesomeIcon icon={['fas', 'x']} className="mr-2" />
          Dismiss
        </Button>
      </div>
    </div>
  </div>
)
