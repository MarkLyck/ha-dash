// TODO: this is broken, and has a body inside div error.
export const WithTheme = (Story, context) => {
  const { theme } = context.globals

  const padding = context.parameters?.layout === 'fullscreen' ? 0 : 16

  document.body.classList.remove('light')
  document.body.classList.remove('dark')

  if (theme === 'light' || theme === 'dark') {
    document.body.classList.add(theme)
    document.body.style.padding = `${padding}px`
    return (
      <body className={theme}>
        <Story />
      </body>
    )
  }
  document.body.classList.remove('light')
  document.body.classList.remove('dark')
  document.body.style.padding = '0px'

  return (
    <body className="flex flex-col">
      <main className="dark" style={{ padding }}>
        <Story />
      </main>
      <main className="light" style={{ padding }}>
        <Story />
      </main>
    </body>
  )
}
