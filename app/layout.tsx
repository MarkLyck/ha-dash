'use client'

import React from 'react'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/global.css'
import '@/lib/icons'

import { SideMenu } from '@/components/sideMenu'

import { Wrapper } from './wrapper'

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Home Dashboard</title>
      </head>

      <Wrapper>
        <div className="flex">
          <SideMenu />
          <div
            className="h-screen w-full overflow-y-auto"
            style={{ overflowY: 'auto' }}
          >
            {children}
          </div>
        </div>
      </Wrapper>
    </html>
  )
}

export default RootLayout
