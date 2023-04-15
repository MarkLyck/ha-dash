'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'

import {
  areasAtom,
  configAtom,
  connectToHASS,
  devicesAtom,
  entitiesAtom,
  servicesAtom,
} from '@/lib/websocket'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [, setEntities] = useAtom(entitiesAtom)
  const [, setServices] = useAtom(servicesAtom)
  const [, setConfig] = useAtom(configAtom)
  const [, setDevices] = useAtom(devicesAtom)
  const [, setAreas] = useAtom(areasAtom)
  // console.log('🔈 ~ devices:', devices)
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
      setDevices,
    })
  }, [setEntities, setServices, setConfig, setAreas, setDevices])

  return <div className="h-full min-h-screen bg-slate-1000">{children}</div>
}
