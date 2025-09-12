import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Flashscreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text style={styles.title}>Disaster Ready 360</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fb6e44ff',
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 90, 
    overflow: 'hidden', 
    borderWidth: 4,
    borderColor: '#fff', 
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
});

export default Flashscreen;
