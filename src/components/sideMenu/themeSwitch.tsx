import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export function ThemeSwitch() {
  const [currentTheme, setCurrentTheme] = useState(
    document.body.classList.contains('dark') ? 'dark' : 'light'
  )

  const onCheckedChange = () => {
    if (currentTheme === 'light') {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    } else {
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
