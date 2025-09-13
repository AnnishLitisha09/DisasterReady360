import type React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { moderateScale } from '../../utils/scalingUtils';
import { useNavigation } from '@react-navigation/native';

interface CurvedHeaderProps {
  title: string;
}

export const CurvedHeader: React.FC<CurvedHeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#E35B33',
        paddingTop: moderateScale(70),
        paddingBottom: moderateScale(40),
        paddingHorizontal: moderateScale(20),
        borderBottomLeftRadius: moderateScale(60),
        borderBottomRightRadius: moderateScale(60),
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginRight: moderateScale(15) }}
        >
          <ChevronLeft size={moderateScale(30)} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: moderateScale(20),
            fontWeight: '600',
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};
