import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface CheckProps extends SvgProps {
  size?: number;   // 🔹 custom size (applies to width & height)
  color?: string;  // 🔹 custom color
}

export const Check: React.FC<CheckProps> = ({ size = 24, color = '#e3e3e3', ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={color}
      {...props}
    >
      <Path d="M400-304L240-464l56-56 104 104 264-264 56 56-320 320z" />
    </Svg>
  );
};

