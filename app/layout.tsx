'use client'

import React from 'react'

import '@/styles/globals.css'
import '@/lib/icons'
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
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}

export default RootLayout
