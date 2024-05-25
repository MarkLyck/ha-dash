import type { IconlyIconProps } from './types'

export const FireIcon = ({ size = 20, ...props }: IconlyIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Fire</title>
    <path
      d="M9.24777 10.6061C7.81595 8.84549 6.46556 7.91574 5.54503 7.78964C5.54503 10.6061 2.5694 15.1788 6.71026 18.9654C14.1844 24.9096 23.2692 16.7511 17.8671 8.35433C17.3705 10.4154 15.5974 11.44 15.5974 11.44C13.9213 7.78964 13.3952 3 13.3952 3C9.81803 4.58853 8.86392 8.77121 9.24777 10.6061Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.24768 17.7454C9.50652 15.985 10.5125 15.6344 11.5973 13.7593C12.7929 16.2692 16.8507 18.2285 14.2355 20.3083C12.1723 21.9492 8.84246 20.5015 9.24768 17.7454Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
