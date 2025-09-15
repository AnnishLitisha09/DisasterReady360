import type React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';

interface DateTimeField {
  label: string;
  value: string;
  onPress: () => void;
}

interface DateTimeRowProps {
  fields: DateTimeField[];
}

export const DateTimeRow: React.FC<DateTimeRowProps> = ({ fields }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(20),
      }}
    >
      {fields.map((field, index) => (
        <View key={index} style={{ flex: 1, marginRight: index < fields.length - 1 ? moderateScale(10) : 0 }}>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontWeight: '600',
              color: '#333',
              marginBottom: moderateScale(8),
            }}
          >
            {field.label}
          </Text>
          <TouchableOpacity
            onPress={field.onPress}
            style={{
              borderColor: '#cbcbcbff',
              borderWidth: moderateScale(1),
              padding: moderateScale(12),
              borderRadius: moderateScale(8),
              minHeight: moderateScale(45),
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: field.value ? '#333' : '#999',
                fontSize: moderateScale(12),
              }}
            >
              {field.value || field.label}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
