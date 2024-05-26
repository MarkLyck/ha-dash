import type { IconlyIconProps } from './types'

export const HomeIcon = ({ size = 20, ...props }: IconlyIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Home</title>
    <path
      d="M4.49609 8.77539V17.4504C4.49609 19.1424 5.86799 20.5143 7.55999 20.5143H16.4393C18.1313 20.5143 19.5032 19.1424 19.5032 17.4504V8.77539"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 9.95611L13.4741 3.9986C12.6101 3.31557 11.3899 3.31557 10.5259 3.9986L3 9.95611"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
