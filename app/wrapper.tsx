'use client'

import { useEffect } from 'react'
import store from 'store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

import { Toaster } from '@/components/ui/sonner'
import { connectToHASS } from '@/lib/websocket'

import 'mapbox-gl/dist/mapbox-gl.css'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const theme =
      (store.get('theme') as undefined | 'light' | 'dark') || 'light'
    document.body.className = theme
    connectToHASS()
  }, [])

  return (
    <body>
      <QueryClientProvider client={queryClient}>
        <main className="h-full min-h-screen bg-bg-white">{children}</main>
      </QueryClientProvider>
      <Toaster />
    </body>
  )
}
