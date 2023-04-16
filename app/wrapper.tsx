'use client'

import { useEffect } from 'react'

import { connectToHASS } from '@/lib/websocket'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    connectToHASS()
  }, [])

  return (
    <main className="h-full min-h-screen bg-white dark:bg-slate-900">
      {children}
    </main>
  )
}
