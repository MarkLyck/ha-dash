'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'

import {
  areasAtom,
  configAtom,
  connectToHASS,
  entitiesAtom,
  servicesAtom,
} from '@/lib/websocket'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [entities, setEntities] = useAtom(entitiesAtom)
  const [services, setServices] = useAtom(servicesAtom)
  const [config, setConfig] = useAtom(configAtom)
  const [areas, setAreas] = useAtom(areasAtom)
  // console.log('🔈 ~ areas:', areas)
  // console.log('🔈 ~ entities:', entities)
  // console.log('🔈 ~ services:', services)
  // console.log('🔈 ~ config:', config)

  useEffect(() => {
    connectToHASS({
      setEntities,
      setServices,
      setConfig,
      setAreas,
    })
  }, [setEntities, setServices, setConfig, setAreas])

  return <div className="h-full min-h-screen bg-slate-1000">{children}</div>
}
