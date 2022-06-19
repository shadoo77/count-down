import { ReactElement } from 'react';
import TimerIcon from './TimerIcon';

export enum IconName {
  'TimerIcon' = 'TimerIcon',
}

// These aren't required
export interface IIconExtendedProps {
  size?: string | number;
  viewBox?: string;
  fillColor?: string;
}

// This is required
interface IIconProps extends IIconExtendedProps {
  name: IconName;
}

interface IIcons {
  [key: string]: (props: IIconExtendedProps) => ReactElement;
}

const icons: IIcons = {
  TimerIcon
};

const Icon = (props: IIconProps): ReactElement =>
  icons[props.name](props) || null ;

export default Icon;
