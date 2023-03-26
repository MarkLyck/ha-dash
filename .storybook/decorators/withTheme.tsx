import React from 'react'

export const WithTheme = (Story, context) => {
  let { theme } = context.globals

  document.body.classList.remove('light')
  document.body.classList.remove('dark')

  if (theme === 'light' || theme === 'dark') {
    document.body.classList.add(theme)
    document.body.style.padding = '16px'
    return (
      <body className={theme}>
        <Story />
      </body>
    )
  } else {
    document.body.classList.remove('light')
    document.body.classList.remove('dark')
    document.body.style.padding = '0px'
  }

  return (
    <div className="flex flex-col">
      <body className="dark" style={{ padding: 16 }}>
        <Story />
      </body>
      <body className="light" style={{ padding: 16 }}>
        <Story />
      </body>
    </div>
  )
}
