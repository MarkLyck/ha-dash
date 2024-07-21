import type { ReactNode } from 'react'
import { GeistSans } from 'geist/font/sans'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/global.css'
import '@/lib/icons'

import { AppProvider } from './AppProvider'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      style={{ colorScheme: 'light dark' }}
      className={GeistSans.className}
      suppressHydrationWarning // next-themes
    >
      <head>
        <title>Home Dashboard</title>
      </head>

      <body>
        <AppProvider>
          <div className="grid transition-all duration-200 ease-in-out">
            <div
              className="h-screen w-full overflow-y-auto"
              style={{ overflowY: 'auto' }}
            >
              {children}
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  )
}

export default RootLayout
