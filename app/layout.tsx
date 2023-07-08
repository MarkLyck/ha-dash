'use client'

import { useState, type ReactNode } from 'react'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/global.css'
import '@/lib/icons'

import { tv } from 'tailwind-variants'

import { SideMenu } from '@/components/sideMenu'

import { Wrapper } from './wrapper'

type RootLayoutProps = {
  children: ReactNode
}

const layoutStyle = tv({
  base: 'grid transition-all duration-200 ease-in-out',
  variants: {
    collapsed: {
      true: 'grid-cols-[80px_1fr]',
      false: 'grid-cols-[180px_1fr]',
    },
  },
})

const RootLayout = ({ children }: RootLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <html lang="en">
      <head>
        <title>Home Dashboard</title>
      </head>

      <Wrapper>
        <div className={layoutStyle({ collapsed })}>
          <SideMenu collapsed={collapsed} setCollapsed={setCollapsed} />
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
