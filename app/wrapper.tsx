'use client'

import { useEffect } from 'react'
import store from 'store'

import { Toaster } from '@/components/ui/sonner'
import { connectToHASS } from '@/lib/websocket'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const theme =
      (store.get('theme') as undefined | 'light' | 'dark') || 'light'
    document.body.className = theme
    connectToHASS()
  }, [])

  return (
    <body>
      <main className="h-full min-h-screen bg-white dark:bg-slate-900">
        {children}
      </main>
      <Toaster />
    </body>
  )
}
