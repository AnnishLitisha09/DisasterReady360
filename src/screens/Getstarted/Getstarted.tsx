import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { moderateScale } from '../../utils/scalingUtils';
import { useNavigation } from '@react-navigation/native'; // ✅ Import navigation

export const Getstarted = () => {
  const navigation = useNavigation(); // ✅ Access navigation

  const handleGetStarted = () => {
    navigation.navigate('AssignDrillScreen'); // ✅ Navigate to the Login page
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LottieView
          source={require('../../assets/lottie/safe.json')}
          autoPlay
          loop={false}
          style={styles.lottie}
        />

        {/* White container */}
        <View style={styles.whiteBox}>
          <Text style={styles.title}>Disaster Ready - 360</Text>
          <Text style={styles.description}>
            Stay ready for any emergency. Being alert helps you act quickly and survive. 
            When you learn and prepare, you stay safe. With awareness and action, 
            we can all protect ourselves and others.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  content: {
    alignItems: 'center',
  },
  lottie: {
    width: moderateScale(340),
    height: moderateScale(340),
    marginTop: moderateScale(100),
  },
  whiteBox: {
    width: moderateScale(367),
    height: moderateScale(337),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(20),
    alignItems: 'center',
    padding: moderateScale(20),
    marginTop: moderateScale(30),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: moderateScale(10),
    marginTop:moderateScale(20)
  },
  description: {
    fontSize: moderateScale(16),
    color: '#A4A8AE',
    textAlign: 'center',
    marginBottom: moderateScale(20),
    marginTop:moderateScale(20)
  },
  button: {
    width: moderateScale(310),
    height: moderateScale(50),
    backgroundColor: '#E35B33',
    borderRadius: moderateScale(56),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(35),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});
