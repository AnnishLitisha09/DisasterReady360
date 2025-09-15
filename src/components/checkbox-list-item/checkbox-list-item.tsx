import type React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';
import { Check } from '../../assets/icons';

interface CheckboxListItemProps {
  name: string;
  isSelected: boolean;
  onToggle: () => void;
}

export const CheckboxListItem: React.FC<CheckboxListItemProps> = ({ name, isSelected, onToggle }) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(5),
      }}
    >
      <View
        style={{
          width: moderateScale(20),
          height: moderateScale(20),
          borderRadius: moderateScale(4),
          backgroundColor: isSelected ? '#FF6B35' : 'transparent',
          borderWidth: moderateScale(2),
          borderColor: isSelected ? '#FF6B35' : '#DDD',
          marginRight: moderateScale(15),
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isSelected && <Check size={moderateScale(18)} color="white" />}
      </View>
      <Text
        style={{
          fontSize: moderateScale(16),
          color: '#333',
          flex: 1,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
