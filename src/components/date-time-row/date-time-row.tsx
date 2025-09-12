import type React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface DateTimeField {
  label: string
  value: string
  onPress: () => void
}

interface DateTimeRowProps {
  fields: DateTimeField[]
}

export const DateTimeRow: React.FC<DateTimeRowProps> = ({ fields }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}
    >
      {fields.map((field, index) => (
        <View key={index} style={{ flex: 1, marginRight: index < fields.length - 1 ? 10 : 0 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#333',
              marginBottom: 8,
            }}
          >
            {field.label}
          </Text>
          <TouchableOpacity
            onPress={field.onPress}
            style={{
              borderColor: '#cbcbcbff',
              borderWidth: 1,
              padding: 12,
              borderRadius: 8,
              minHeight: 45,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: field.value ? '#333' : '#999',
                fontSize: 12,
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
