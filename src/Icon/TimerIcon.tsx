import 'react';
import { IIconExtendedProps } from '.';

const TimerIcon = ({
  size = '24',
  viewBox = '0 0 24 24',
  fillColor = '#000'
}: IIconExtendedProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    width={size}
    height={size}
    viewBox={viewBox}
    fill={fillColor}
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default TimerIcon;
