import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { tv } from 'tailwind-variants'

import { Button } from '../ui/button'
import { ThemeSwitch } from './themeSwitch'

const navigationItemLinkStyle = tv({
  base: 'px-2 w-full rounded py-2 flex items-center transition-all duration-200',
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
    <li className="px-2 w-full navigation-item flex">
      <Link href={href} className={navigationItemLinkStyle({ selected })}>
        <FontAwesomeIcon
          icon={icon}
          className="w-4 h-4 mx-auto @[100px]:mx-4"
        />
        <span className="w-0 @[100px]:w-auto overflow-hidden whitespace-nowrap transition-all duration-200">
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
    <div className="@container bg-white h-screen border-r overflow-hidden border-r-slate-100 dark:border-r-slate-1000 flex flex-col">
      <h4 className="m-2 dark:text-slate-100 p-2 h-12 flex items-center justify-center rounded-lg text-center whitespace-nowrap bg-primary text-white font-bold">
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
      <div className="w-full px-2 mb-2 mt-auto flex justify-center">
        <Button
          variant="ghost"
          className="w-full p-2"
          onClick={() => setCollapsed((curr) => !curr)}
        >
          {collapsed ? (
            <CaretRightIcon className="w-6 h-6" />
          ) : (
            <CaretLeftIcon className="w-6 h-6" />
          )}
        </Button>
      </div>
    </div>
  )
}
