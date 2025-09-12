import type React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface PrimaryButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? '#CCC' : '#FF6B35',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
