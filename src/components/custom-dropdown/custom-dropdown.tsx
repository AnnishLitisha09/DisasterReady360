'use client';

import type React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';
import { Down } from '../../assets/icons';

interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  onSelect: (value: string) => void;
}

export const CustomDropdown: React.FC<DropdownProps> = ({ label, value, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={{ marginBottom: moderateScale(20) }}>
      <Text
        style={{
          fontSize: moderateScale(16),
          fontWeight: '600',
          color: '#333',
          marginBottom: moderateScale(8),
        }}
      >
        {label}
      </Text>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={{
          borderColor: '#cbcbcbff',
          borderWidth: moderateScale(1),
          padding: moderateScale(15),
          borderRadius: moderateScale(8),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#666',
            fontSize: moderateScale(14),
          }}
        >
          {value}
        </Text>
        <Down size={moderateScale(20)} color="#666" />
      </TouchableOpacity>

      {isOpen && (
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: moderateScale(8),
            marginTop: moderateScale(5),
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: moderateScale(2) },
            shadowOpacity: 0.1,
            shadowRadius: moderateScale(4),
          }}
        >
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              style={{
                padding: moderateScale(15),
                borderBottomWidth: index < options.length - 1 ? moderateScale(1) : 0,
                borderBottomColor: '#F0F0F0',
              }}
            >
              <Text style={{ color: '#333', fontSize: moderateScale(14) }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
