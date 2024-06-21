'use client'

import useStore from '@/lib/useStore'

type AreaProps = {
  params: {
    area_id: string
  }
}

const Area = ({ params }: AreaProps) => {
  const areas = useStore((s) => s.areas)
  const area = areas.find((area) => area.area_id === params.area_id)

  return <div className="p-4">{area?.name}</div>
}

export default Area
