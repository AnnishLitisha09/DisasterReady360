import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const SosIcon = ({ width = 24, height = 24, fill = "#e3e3e3", ...props }: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 -960 960 960"
      fill={fill}
      {...props}
    >
      <Path d="M200-160v-80h64l79-263q8-26 29.5-41.5T420-560h120q26 0 47.5 15.5T617-503l79 263h64v80H200zm148-80h264l-72-240H420l-72 240zm92-400v-200h80v200h-80zm238 99l-57-57 142-141 56 56-141 142zm42 181v-80h200v80H720zM282-541L141-683l56-56 142 141-57 57zM40-360v-80h200v80H40zm440 120z" />
    </Svg>
  );
};
