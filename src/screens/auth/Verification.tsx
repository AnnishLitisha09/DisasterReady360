import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export const Verification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()} // works if using react-navigation
      >
        <Image 
          source={require('../../assets/images/back_arrow.png')} 
          style={styles.backIcon} 
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Center Content */}
      <View style={styles.content}>
        <Image 
          source={require('../../assets/images/Verification.png')} 
          style={styles.icon} 
          resizeMode="contain"
        />
        <Text style={styles.title}>Verified Successfully!</Text>
        <Text style={styles.subtitle}>Your number is verified!</Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
  },
  backButton: {
    marginTop: 15,
    marginLeft: 5,
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#F05423',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
