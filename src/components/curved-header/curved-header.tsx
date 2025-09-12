import type React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

interface CurvedHeaderProps {
  title: string
  onBackPress: () => void
}

export const CurvedHeader: React.FC<CurvedHeaderProps> = ({ title, onBackPress }) => {
  return (
    <View
      style={{
        backgroundColor: '#FF6B35',
        paddingTop: 70,
        paddingBottom: 40,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={onBackPress} style={{ marginRight: 15 }}>
          <ChevronLeft size={30} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};
