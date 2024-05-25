import type { IconlyIconProps } from './types'

export const PauseIcon = ({ size = 20, ...props }: IconlyIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Pause</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.58963 3.5H6.27563C5.44863 3.5 4.77563 4.173 4.77563 5V19C4.77563 19.827 5.44863 20.5 6.27563 20.5H8.58963C9.41663 20.5 10.0896 19.827 10.0896 19V5C10.0896 4.173 9.41663 3.5 8.58963 3.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.7243 3.5H15.4103C14.5833 3.5 13.9103 4.173 13.9103 5V19C13.9103 19.827 14.5833 20.5 15.4103 20.5H17.7243C18.5513 20.5 19.2243 19.827 19.2243 19V5C19.2243 4.173 18.5513 3.5 17.7243 3.5Z"
      fill="currentColor"
    />
  </svg>
)
