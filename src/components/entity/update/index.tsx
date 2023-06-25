import type { HassEntity } from 'home-assistant-js-websocket'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

type UpdateProps = {
  entity: HassEntity
}

export const Update = ({ entity }: UpdateProps) => {
  console.log('🔈 ~ entity:', entity)
  const {
    title,
    installed_version,
    latest_version,
    entity_picture,
    release_url,
  } = entity.attributes

  return (
    <Card className="w-[240px] overflow-hidden">
      <CardHeader className="flex flex-row items-center p-4 pb-0">
        <Image
          src={entity_picture ?? ''}
          height={32}
          width={32}
          alt={title as string}
          className="mr-2 rounded"
        />
        <div className="w-full">
          <CardTitle className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </CardTitle>
          <CardDescription>
            {installed_version}
            {' > '}
            {latest_version}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex gap-2 p-4">
        <Button size="sm" disabled>
          Update
        </Button>
        {typeof release_url === 'string' ? (
          <Link href={release_url} target="_blank">
            <Button size="sm" variant="link">
              Release notes
            </Button>
          </Link>
        ) : null}
      </CardContent>
    </Card>
  )
}
