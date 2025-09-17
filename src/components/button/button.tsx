import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './Styles';
import {CustomButtonProps} from './types';
import { moderateScale } from '../../utils/scalingUtils';

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  width = '100%',
  height = moderateScale(48),
  borderRadius = moderateScale(8),
  color = '#E4572E',
  fontSize = moderateScale(16),
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {width, height, borderRadius, backgroundColor: color},
        disabled && styles.disabledButton,

      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.title, {fontSize}]}>{title}</Text>
    </TouchableOpacity>
  );
};
