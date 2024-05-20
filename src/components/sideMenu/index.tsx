import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { tv } from 'tailwind-variants'

import { Button } from '../ui/button'
import { ThemeSwitch } from './themeSwitch'

const navigationItemLinkStyle = tv({
  base: 'flex w-full items-center rounded px-2 py-2 transition-all duration-200',
  variants: {
    selected: {
      true: 'bg-neutral-100',
      false: 'dark:hover:bg-slate-1100 hover:bg-slate-100 dark:text-slate-200',
    },
  },
})

type NavigationItemProps = {
  href: string
  icon: IconProp
  children: React.ReactNode
  selected: boolean
}

const NavigationItem = ({
  href,
  icon,
  selected,
  children,
}: NavigationItemProps) => {
  return (
    <li className="navigation-item flex w-full px-2">
      <Link href={href} className={navigationItemLinkStyle({ selected })}>
        <FontAwesomeIcon
          icon={icon}
          className="mx-auto h-4 w-4 @[100px]:mx-4"
        />
        <span className="w-0 overflow-hidden whitespace-nowrap transition-all duration-200 @[100px]:w-auto">
          {children}
        </span>
      </Link>
    </li>
  )
}

type LinkItem = {
  to: string
  icon: IconProp
  label: string
}

const links: LinkItem[] = [
  { to: '/', icon: ['far', 'home'], label: 'Home' },
  { to: '/security', icon: ['far', 'camera-security'], label: 'Security' },
  { to: '/entities', icon: ['far', 'sensor'], label: 'Entities' },
  { to: '/areas', icon: ['far', 'layer-group'], label: 'Areas' },
  { to: '/energy', icon: ['far', 'bolt'], label: 'Energy' },
  { to: '/logs', icon: ['far', 'list-timeline'], label: 'Logs' },
]

type SideMenuProps = {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideMenu = ({ collapsed, setCollapsed }: SideMenuProps) => {
  const pathname = usePathname()

  return (
    <div className="@container flex h-screen flex-col overflow-hidden border-r border-r-slate-100 bg-white dark:border-r-slate-1000">
      <h4 className="m-2 flex h-12 items-center justify-center whitespace-nowrap rounded-lg bg-primary p-2 text-center font-bold text-white dark:text-slate-100">
        {collapsed ? 'HA' : 'HA-Dash'}
      </h4>
      <ul className="flex flex-col">
        {links.map((link) => (
          <NavigationItem
            key={link.to}
            href={link.to}
            icon={link.icon}
            selected={pathname === link.to}
          >
            {link.label}
          </NavigationItem>
        ))}
      </ul>
      <div className="my-4 flex justify-center">
        <ThemeSwitch />
      </div>
      <div className="mt-auto mb-2 flex w-full justify-center px-2">
        <Button
          variant="ghost"
          className="w-full p-2"
          onClick={() => setCollapsed((curr) => !curr)}
        >
          {collapsed ? (
            <CaretRightIcon className="h-6 w-6" />
          ) : (
            <CaretLeftIcon className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  )
}
