import Link from 'next/link'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

import { ThemeSwitch } from './themeSwitch'

const containerStyle = cva(
  'bg-slate-0 dark:bg-slate-1200 p-4 w-52 h-screen border-r border-r-slate-100 dark:border-r-slate-1000'
)
const listStyle = cva(
  'flex flex-col border border-slate-200 dark:border-slate-500 rounded'
)

type NavigationItemProps = {
  href: string
  icon: IconProp
  children: React.ReactNode
}
const NavigationItem = ({ href, icon, children }: NavigationItemProps) => {
  return (
    <li className="overflow-hidden border-b border-b-slate-200 first-of-type:rounded-tl first-of-type:rounded-tr last-of-type:rounded-bl last-of-type:rounded-br last-of-type:border-b-0 dark:border-b-slate-1000">
      <Link
        href={href}
        className="block w-full px-4 py-2  hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-1100"
      >
        <FontAwesomeIcon icon={icon} className="mr-4" />
        {children}
      </Link>
    </li>
  )
}

export const SideMenu = () => {
  return (
    <div className={containerStyle()}>
      <h4 className="mb-4 dark:text-slate-100">HA Dash</h4>
      <ul className={listStyle()}>
        <NavigationItem href="/" icon={['fas', 'home']}>
          Home
        </NavigationItem>
        <NavigationItem href="/security" icon={['fas', 'camera-security']}>
          Security
        </NavigationItem>
        <NavigationItem href="/devices" icon={['fas', 'sensor']}>
          Devices
        </NavigationItem>
        <NavigationItem href="/areas" icon={['fas', 'layer-group']}>
          Areas
        </NavigationItem>
        <NavigationItem href="/energy" icon={['fas', 'bolt']}>
          Energy
        </NavigationItem>
        <NavigationItem href="/logs" icon={['fas', 'list-timeline']}>
          Logs
        </NavigationItem>
      </ul>
      <div className="my-4">
        <ThemeSwitch />
      </div>
    </div>
  )
}
