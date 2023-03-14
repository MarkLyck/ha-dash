import React from 'react'

export const WithTheme = (Story, context) => {
  let { scheme } = context.globals

  document.body.classList.remove('light', 'dark')

  if (scheme === 'light' || scheme === 'dark') {
    document.body.classList.add(scheme)
    document.body.style.padding = '16px'
    return (
      <body className={scheme}>
        <Story />
      </body>
    )
  } else {
    document.body.style.padding = '0px'
  }

  return (
    <div className="flex flex-col gap-4">
      <body className="dark" style={{ padding: 16 }}>
        <Story />
      </body>
      <body className="light" style={{ padding: 16 }}>
        <Story />
      </body>
    </div>
  )
}
