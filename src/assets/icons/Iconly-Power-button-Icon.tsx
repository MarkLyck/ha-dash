import type { IconlyIconProps } from './types'

export const PowerButtonIcon = ({ size = 20, ...props }: IconlyIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Power Button</title>
    <path
      d="M16.9009 6.15625C18.661 7.58764 19.7887 9.75973 19.7887 12.2105C19.7887 16.513 16.3028 19.9989 12.0003 19.9989C7.69781 19.9989 4.21191 16.513 4.21191 12.2105C4.21191 9.75973 5.34055 7.58764 7.0997 6.15625"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4V10.7866"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
