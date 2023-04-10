// import { Tabs } from '@/components/ui/tabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getAreaIcon } from './areaIcon'

type areaTabsProps = {
  areas: string[]
}

export const AreaTabs = ({ areas }: areaTabsProps) => {
  return (
    <div>
      {areas.map((area) => (
        <div key={area} className="flex items-center py-2">
          <FontAwesomeIcon icon={getAreaIcon(area)} className="mr-2 h-6 w-6" />{' '}
          {area}
        </div>
      ))}
    </div>
  )
}
