'use client'

import { useEffect } from 'react'
import store from 'store'

import { Toaster } from '@/components/ui/toaster'
import { connectToHASS } from '@/lib/websocket'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = (store.get('theme') as undefined | 'light' | 'dark') || 'light'

  useEffect(() => {
    connectToHASS()
  }, [])

  return (
    <body className={theme}>
      <main className="h-full min-h-screen bg-white dark:bg-slate-900">
        {children}
      </main>
      <Toaster />
    </body>
  )
}
