'use client'

import React from 'react'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/globals.css'
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
      <body>
        <Wrapper>
          <div className="flex">
            <SideMenu />
            <div className="h-screen w-full">{children}</div>
          </div>
        </Wrapper>
      </body>
    </html>
  )
}

export default RootLayout
