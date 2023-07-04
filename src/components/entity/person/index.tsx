import type { HassEntity } from 'home-assistant-js-websocket'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

type PersonProps = {
  entity: HassEntity
}

export const Person = ({ entity }: PersonProps) => {
  const { id, friendly_name } = entity.attributes
  const initials = friendly_name?.split(' ').map((word) => word[0])
  const imageSrc = entity.attributes.entity_picture

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar>
          <AvatarImage src={imageSrc} alt={String(id)} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={imageSrc} alt={String(id)} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{friendly_name}</h4>
            <p className="text-sm">{entity.state}</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                {entity.last_updated}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
