import type React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Check } from 'lucide-react-native';

interface CheckboxListItemProps {
  name: string
  isSelected: boolean
  onToggle: () => void
}

export const CheckboxListItem: React.FC<CheckboxListItemProps> = ({ name, isSelected, onToggle }) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 5,
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          backgroundColor: isSelected ? '#FF6B35' : 'transparent',
          borderWidth: 2,
          borderColor: isSelected ? '#FF6B35' : '#DDD',
          marginRight: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isSelected && <Check size={12} color="white" />}
      </View>
      <Text
        style={{
          fontSize: 16,
          color: '#333',
          flex: 1,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
