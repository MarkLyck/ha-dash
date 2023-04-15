'use client'

import { useEffect } from 'react'

import { connectToHASS } from '@/lib/websocket'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    connectToHASS()
  }, [])

  return <div className="h-full min-h-screen bg-slate-1000">{children}</div>
}
