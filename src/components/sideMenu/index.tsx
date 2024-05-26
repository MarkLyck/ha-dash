import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { tv } from 'tailwind-variants'

import { Button } from '../ui/button'
import { ThemeSwitch } from './themeSwitch'
import {
  VideoCameraIcon,
  HomeIcon,
  LayersIcon,
  FlashIcon,
  Database2Icon,
  CPUProcessorIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from '@/assets/icons'

const navigationItemLinkStyle = tv({
  base: 'flex w-full items-center rounded px-2 py-2 transition-all duration-200',
  variants: {
    selected: {
      true: 'bg-bg-sub dark:bg-surface',
      false: 'dark:hover:bg-bg-white hover:bg-bg-weak',
    },
  },
})

type NavigationItemProps = {
  href: string
  Icon: React.ElementType
  children: React.ReactNode
  selected: boolean
}

const NavigationItem = ({
  href,
  Icon,
  selected,
  children,
}: NavigationItemProps) => {
  return (
    <li className="navigation-item flex w-full px-2">
      <Link href={href} className={navigationItemLinkStyle({ selected })}>
        <Icon className="mx-auto h-4 w-4 @[100px]:mx-4" />
        <span className="w-0 overflow-hidden whitespace-nowrap transition-all duration-200 @[100px]:w-auto">
          {children}
        </span>
      </Link>
    </li>
  )
}

type LinkItem = {
  to: string
  Icon: React.ElementType
  label: string
}

const links: LinkItem[] = [
  { to: '/', Icon: HomeIcon, label: 'Home' },
  { to: '/security', Icon: VideoCameraIcon, label: 'Security' },
  { to: '/entities', Icon: CPUProcessorIcon, label: 'Entities' },
  { to: '/areas', Icon: LayersIcon, label: 'Areas' },
  { to: '/energy', Icon: FlashIcon, label: 'Energy' },
  { to: '/logs', Icon: Database2Icon, label: 'Logs' },
]

type SideMenuProps = {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideMenu = ({ collapsed, setCollapsed }: SideMenuProps) => {
  const pathname = usePathname()

  return (
    <div className="@container flex h-screen flex-col overflow-hidden border-r border-r-border bg-bg-white dark:border-r-slate-1000 dark:bg-bg-weak">
      <h4 className="m-2 flex h-12 items-center justify-center whitespace-nowrap rounded-lg bg-black p-2 text-center font-bold text-text-white dark:bg-bg-white dark:text-white">
        {collapsed ? 'HA' : 'HA-Dash'}
      </h4>
      <ul className="flex flex-col">
        {links.map((link) => (
          <NavigationItem
            key={link.to}
            href={link.to}
            Icon={link.Icon}
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
            <CaretRightIcon size={32} />
          ) : (
            <CaretLeftIcon size={32} />
          )}
        </Button>
      </div>
    </div>
  )
}
