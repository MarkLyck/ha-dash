import type { IconlyIconProps } from './types'

export const BackwardIcon = ({ size = 20, ...props }: IconlyIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Backward</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.07092 9.76877C4.63392 8.34078 6.58792 7.05377 8.73892 6.17877C10.5679 5.45177 12.0999 6.35977 12.3259 8.17977C12.5989 10.8628 12.5929 13.4318 12.3259 15.8288C12.0799 17.7208 10.3909 18.5228 8.73892 17.8208C6.62092 16.9458 4.72192 15.7578 3.07092 14.2308C1.65992 12.9408 1.62592 11.1088 3.07092 9.76877Z"
      fill="#FFFFFF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5426 9.76877C14.1056 8.34078 16.0606 7.05377 18.2106 6.17877C20.0396 5.45177 21.5716 6.35977 21.7976 8.17977C22.0706 10.8628 22.0646 13.4318 21.7976 15.8288C21.5516 17.7208 19.8646 18.5228 18.2106 17.8208C16.0926 16.9458 14.1946 15.7578 12.5426 14.2308C11.1326 12.9408 11.0976 11.1088 12.5426 9.76877Z"
      fill="#FFFFFF"
    />
  </svg>
)
