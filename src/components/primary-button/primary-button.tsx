import type React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? '#CCC' : '#FF6B35',
        paddingVertical: moderateScale(16),
        borderRadius: moderateScale(12),
        alignItems: 'center',
        marginHorizontal: moderateScale(20),
        marginBottom: moderateScale(20),
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: moderateScale(16),
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
