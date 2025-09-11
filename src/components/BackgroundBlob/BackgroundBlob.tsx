import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface BackgroundBlobProps {
  opacity?: number;
}

export const BackgroundBlob: React.FC<BackgroundBlobProps> = ({
  opacity = 0.5,
}) => {
  return (
    <View style={styles.container}>
      <Svg width={142} height={213} viewBox="0 0 142 213" fill="none">
        <Path
      
          d="M-236.205 205.328c4.806 33.461 30.636 76.511 66.137 61.866 26.835-11.07-3.981-38.4 27.275-62.186 31.257-23.786 76.957-26.064 103.42-.235 19.488 19.02-4.918 44.53 11.27 65.861 37.209 49.032 174.063 13.419 169.29-46.428-3.163-39.67-58.52-36.045-81.551-69.499-27.982-40.648 7.128-87.377-32.497-119.491C-2.828 10.93-36.041-10.912-73.181 7.188c-48.235 23.507 65.664 91.738 20.49 119.748-20.987 13.013-38.535 9.886-63.68 10.897-30.737 1.235-49.036-20.824-77.431-9.348-34.416 13.91-47.046 44.515-42.403 76.843z"
          fill="#E4572E"   // ✅ Changed to solid previous background color
          fillOpacity={0.8}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
});
