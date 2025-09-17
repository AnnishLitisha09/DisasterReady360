import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function CloseIcon({
  width = 24,
  height = 24,
  color = '#e3e3e3',
  ...props
}: SvgProps) {
  return (
    <Svg
      height={width}
      viewBox="0 -960 960 960"
      width={height}
      fill={color}
      {...props}>
      <Path d="M256-200l-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z" />
    </Svg>
  );
}
