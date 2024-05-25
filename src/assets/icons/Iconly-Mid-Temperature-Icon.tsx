import type { IconlyIconProps } from './types'

export const MidTemperatureIcon = ({
  size = 20,
  ...props
}: IconlyIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Medium Temperature</title>
    <path
      d="M9.11469 5.99968V12.0224C7.90723 12.935 7.11426 14.3692 7.11426 15.9999C7.11426 18.7612 9.35307 21 12.1144 21C14.8757 21 17.1145 18.7612 17.1145 15.9999C17.1145 14.3692 16.3225 12.935 15.115 12.0224V5.99968C15.115 4.3427 13.7713 3 12.1144 3C10.4574 3 9.11469 4.3427 9.11469 5.99968Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5868 15.9999C13.5868 16.8133 12.9271 17.473 12.1137 17.473C11.2993 17.473 10.6396 16.8133 10.6396 15.9999C10.6396 15.1865 11.2993 14.5259 12.1137 14.5259C12.9271 14.5259 13.5868 15.1865 13.5868 15.9999Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.1143 9.07516V14.5268"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
