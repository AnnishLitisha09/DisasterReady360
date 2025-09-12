'use client';

import type React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

interface DropdownProps {
  label: string
  value: string
  options: string[]
  onSelect: (value: string) => void
}

export const CustomDropdown: React.FC<DropdownProps> = ({ label, value, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#333',
          marginBottom: 8,
        }}
      >
        {label}
      </Text>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={{
          borderColor: '#cbcbcbff',
          borderWidth: 1,
          padding: 15,
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#666',
            fontSize: 14,
          }}
        >
          {value}
        </Text>
        <ChevronDown size={20} color="#666" />
      </TouchableOpacity>

      {isOpen && (
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: 5,
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
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
                padding: 15,
                borderBottomWidth: index < options.length - 1 ? 1 : 0,
                borderBottomColor: '#F0F0F0',
              }}
            >
              <Text style={{ color: '#333' }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
