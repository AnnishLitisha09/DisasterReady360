import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { moderateScale } from '../utils/scalingUtils';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText, placeholder = 'Search...' }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={styles.input}
      />
      <Image
        source={require('../assets/icons/searchicon')} // add your search icon
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: moderateScale(25),
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
    color: '#333',
    paddingVertical: moderateScale(8),
  },
  icon: {
    width: moderateScale(18),
    height: moderateScale(18),
    tintColor: 'black',
    marginLeft: moderateScale(8),
  },
});
