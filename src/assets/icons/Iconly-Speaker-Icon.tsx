import type { IconlyIconProps } from './types'

export const SpeakerIcon = ({ size = 20, ...props }: IconlyIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>briefcase</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9989 11.2148C10.5029 11.2148 9.28687 12.4318 9.28687 13.9268C9.28687 15.4228 10.5029 16.6388 11.9989 16.6388C13.4949 16.6388 14.7119 15.4228 14.7119 13.9268C14.7119 12.4318 13.4949 11.2148 11.9989 11.2148Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9989 18.139C9.67593 18.139 7.78693 16.249 7.78693 13.927C7.78693 11.604 9.67593 9.715 11.9989 9.715C14.3219 9.715 16.2119 11.604 16.2119 13.927C16.2119 16.249 14.3219 18.139 11.9989 18.139ZM11.0429 6.455C11.0849 6.346 11.1649 6.226 11.2699 6.123C11.3579 6.033 11.4769 5.952 11.6049 5.9C11.7499 5.846 11.8759 5.827 12.0109 5.824C12.2169 5.826 12.4159 5.888 12.5849 6.005C12.7489 6.113 12.8849 6.278 12.9629 6.475C13.0409 6.661 13.0599 6.873 13.0159 7.077C12.9809 7.261 12.8849 7.445 12.7399 7.593C12.5819 7.747 12.4009 7.843 12.2029 7.882C12.1369 7.897 12.0689 7.904 11.9989 7.904C11.8669 7.904 11.7309 7.877 11.6019 7.824C11.4009 7.739 11.2399 7.603 11.1279 7.43C11.0219 7.277 10.9599 7.074 10.9599 6.863C10.9599 6.721 10.9879 6.583 11.0429 6.455ZM15.2609 2.5H8.73893C6.43193 2.5 4.55493 4.377 4.55493 6.685V17.316C4.55493 19.623 6.43193 21.5 8.73893 21.5H15.2609C17.5679 21.5 19.4449 19.623 19.4449 17.316V6.685C19.4449 4.377 17.5679 2.5 15.2609 2.5Z"
      fill="currentColor"
    />
  </svg>
)
