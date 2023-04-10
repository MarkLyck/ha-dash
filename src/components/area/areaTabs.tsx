// import { Tabs } from '@/components/ui/tabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getAreaIcon } from './areaIcon'

type RoomTabsProps = {
  rooms: string[]
}

export const AreaTabs = ({ rooms }: RoomTabsProps) => {
  return (
    <div>
      {rooms.map((room) => (
        <div key={room} className="flex items-center py-2">
          <FontAwesomeIcon icon={getAreaIcon(room)} className="mr-2 h-6 w-6" />{' '}
          {room}
        </div>
      ))}
    </div>
  )
}
