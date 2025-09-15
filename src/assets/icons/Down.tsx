import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface DownProps extends SvgProps {
  size?: number;
  color?: string;
}

export const Down: React.FC<DownProps> = ({ size = 24, color = '#e3e3e3', ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={color}
      {...props}
    >
      <Path d="M480-345L240-585l56-56 184 183 184-183 56 56-240 240z" />
    </Svg>
  );
};

