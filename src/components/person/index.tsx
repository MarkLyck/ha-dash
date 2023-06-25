import { Card } from '@/components/ui/card'

import type { HassEntity } from 'home-assistant-js-websocket'

type PersonProps = {
  person: HassEntity
}

export const Person = ({ person }: PersonProps) => {
  console.log('🔈 ~ person:', person)
  return <Card>index</Card>
}
