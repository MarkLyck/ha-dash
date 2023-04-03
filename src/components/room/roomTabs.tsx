// import { Tabs } from '@/components/ui/tabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getRoomIcon } from './roomIcon'

type RoomTabsProps = {
  rooms: string[]
}

export const RoomTabs = ({ rooms }: RoomTabsProps) => {
  return (
    <div>
      {rooms.map((room) => (
        <div key={room} className="flex items-center py-2">
          <FontAwesomeIcon icon={getRoomIcon(room)} className="mr-2 h-6 w-6" />{' '}
          {room}
        </div>
      ))}
    </div>
  )
}
