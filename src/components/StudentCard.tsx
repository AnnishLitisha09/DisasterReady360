import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { moderateScale } from '../utils/scalingUtils';

type StudentCardProps = {
  name: string;
  email: string;
  level: string;
  onPress?: () => void;
};

export const StudentCard: React.FC<StudentCardProps> = ({ name, email, level, onPress }) => {
  return (
    <View style={styles.card}>
      {/* Profile Image */}
      <Image
        source={require('../assets/images/badge.png')} // replace with your avatar icon
        style={styles.avatar}
      />

      {/* Student Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.level}>{level}</Text>
      </View>

      {/* View Button */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: moderateScale(20),
    marginVertical: moderateScale(8),
    marginHorizontal: moderateScale(15),
    borderRadius: moderateScale(12),
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  avatar: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(25),
    marginRight: moderateScale(12),
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    fontSize: moderateScale(13),
    color: '#666',
    marginVertical: moderateScale(2),
  },
  level: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: '#888',
  },
  button: {
    backgroundColor: '#E35B33',
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(14),
    borderRadius: moderateScale(20),
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: moderateScale(12),
  },
});
