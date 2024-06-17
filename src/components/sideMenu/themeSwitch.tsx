'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import store from 'store'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export function ThemeSwitch() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const storedTheme = store.get('theme') as undefined | 'light' | 'dark'
    if (storedTheme !== currentTheme) {
      setCurrentTheme(storedTheme || 'light')
    }
  }, [])

  const onCheckedChange = () => {
    if (currentTheme === 'light') {
      store.set('theme', 'dark')
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    } else {
      store.set('theme', 'light')
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" onCheckedChange={onCheckedChange} />
      <Label htmlFor="airplane-mode">
        <FontAwesomeIcon
          className="dark:text-slate-200"
          icon={['fas', currentTheme === 'light' ? 'moon' : 'brightness']}
        />
      </Label>
    </div>
  )
}
