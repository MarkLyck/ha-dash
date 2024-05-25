import type { IconlyIconProps } from './types'

export const IconlyForward = ({ size = 20, ...props }: IconlyIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Forward</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9291 9.76877C19.3661 8.34078 17.4121 7.05377 15.2611 6.17877C13.4321 5.45177 11.9001 6.35977 11.6741 8.17977C11.4011 10.8628 11.4071 13.4318 11.6741 15.8288C11.9201 17.7208 13.6091 18.5228 15.2611 17.8208C17.3791 16.9458 19.2781 15.7578 20.9291 14.2308C22.3401 12.9408 22.3741 11.1088 20.9291 9.76877Z"
        fill="#FFFFFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4574 9.76877C9.89438 8.34078 7.93938 7.05377 5.78938 6.17877C3.96038 5.45177 2.42838 6.35977 2.20238 8.17977C1.92938 10.8628 1.93538 13.4318 2.20238 15.8288C2.44838 17.7208 4.13538 18.5228 5.78938 17.8208C7.90738 16.9458 9.80538 15.7578 11.4574 14.2308C12.8674 12.9408 12.9024 11.1088 11.4574 9.76877Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}