import type { IconlyIconProps } from './types'

export const VideoCameraIcon = ({ size = 20, ...props }: IconlyIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Video Camera</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6403 4.75391H5.84984C3.48329 4.75391 2 6.42963 2 8.80051V15.1985C2 17.5694 3.47572 19.2451 5.84984 19.2451H12.6392C15.0133 19.2451 16.4912 17.5694 16.4912 15.1985V8.80051C16.4912 6.42963 15.0133 4.75391 12.6403 4.75391Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4844 9.99068L19.891 7.20249C20.4423 6.75058 21.2564 6.83167 21.7083 7.38304C21.8975 7.61439 22.0013 7.90413 22.0002 8.20252L21.9883 15.8038C21.9862 16.5174 21.4078 17.0947 20.6942 17.0925C20.3969 17.0925 20.1083 16.9887 19.878 16.7995L16.4844 14.0124"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)