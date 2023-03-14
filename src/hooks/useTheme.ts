import useDarkMode from 'use-dark-mode'

export const useTheme = (initialState = false) => {
  const { toggle, value } = useDarkMode(initialState, {
    classNameDark: 'dark',
    classNameLight: 'light',
  })

  return { toggle, type: value ? 'dark' : 'light' }
}
