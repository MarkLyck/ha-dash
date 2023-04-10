'use client'

import { useAtom } from 'jotai'

import { areasAtom } from '@/lib/websocket'

type AreaProps = {
  params: {
    area_id: string
  }
}

const Area = ({ params }: AreaProps) => {
  const [areas] = useAtom(areasAtom)
  const area = areas.find((area) => area.area_id === params.area_id)

  return <div className="p-4">{area?.name}</div>
}

export default Area
