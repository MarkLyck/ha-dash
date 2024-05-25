import type { IconlyIconProps } from './types'

export const LightIcon = ({ size = 20, ...props }: IconlyIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Light</title>
    <path
      d="M12.001 6.78835C16.8114 6.78835 20.7109 10.6878 20.7109 15.4983H3.29102C3.29102 10.6878 7.19049 6.78835 12.001 6.78835ZM12.001 6.78835L12.0013 3.13672"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.83008 18.4375C9.23113 19.8155 10.496 20.8176 11.9997 20.8176C13.5023 20.8176 14.7798 19.8155 15.1683 18.4375"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
