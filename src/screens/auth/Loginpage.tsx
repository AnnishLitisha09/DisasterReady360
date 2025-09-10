import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Switch,
  Alert,
  ScrollView,
} from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';
import { Arrowback } from '../../assets/icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export const Loginpage = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Get email and OTP status from route params
  const emailFromRoute = route.params?.email || '';
  const otpVerifiedFromRoute = route.params?.otpVerified || false;

  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState(emailFromRoute);
  const [otpVerified, setOtpVerified] = useState(otpVerifiedFromRoute);

  useEffect(() => {
    if (emailFromRoute) setEmail(emailFromRoute);
    if (otpVerifiedFromRoute) setOtpVerified(true);
  }, [emailFromRoute, otpVerifiedFromRoute]);

  const handleVerify = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email');
    } else if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
    } else {
      // Navigate to OTP page with current email
      navigation.navigate('Otppage', { email });
    }
  };

  const handleLogin = () => {
    if (!otpVerified) {
      Alert.alert('Error', 'Please verify your email first.');
      return;
    }
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Arrowback width={moderateScale(30)} height={moderateScale(30)} />
        </TouchableOpacity>

        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Disaster Ready - 360</Text>
        <Text style={styles.subtitle}>Log into your account</Text>
        <Text style={styles.description}>
          Welcome to Disaster Ready 360, enter your details below to continue.
        </Text>

        <Text style={styles.label}>Enter your Email</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            placeholderTextColor="#A4A8AE"
            value={email} // Show email from route
            onChangeText={setEmail}
          />
          <TouchableOpacity
            onPress={handleVerify}
            disabled={otpVerified} // Disable if already verified
          >
            <Text
              style={[
                styles.verifyText,
                otpVerified && { color: 'green' },
              ]}
            >
              {otpVerified ? 'Verified' : 'Verify'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rememberMeContainer}>
          <Switch
            value={remember}
            onValueChange={setRemember}
            trackColor={{ false: '#ccc', true: '#E35B33' }}
            thumbColor={'#fff'}
          />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.loginButton,
            { backgroundColor: otpVerified ? '#E35B33' : '#ccc' },
          ]}
          onPress={handleLogin}
          disabled={!otpVerified}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
  Don’t have an account?{' '}
  <Text
    style={styles.signUp}
    onPress={() => navigation.navigate('Signup')}
  >
    SIGN UP
  </Text>
</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContainer: {
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(30),
    paddingBottom: moderateScale(30),
  },
  backButton: { marginTop: moderateScale(10) },
  logo: {
    width: moderateScale(200),
    height: moderateScale(200),
    alignSelf: 'center',
    marginTop: moderateScale(30),
    borderRadius: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(24),
    fontStyle: 'italic',
    color: '#E35B33',
    textAlign: 'center',
    marginTop: moderateScale(46),
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: moderateScale(30),
  },
  description: {
    fontSize: moderateScale(12),
    color: '#333',
    textAlign: 'center',
    marginTop: moderateScale(13),
    marginBottom: moderateScale(50),
  },
  label: {
    fontSize: moderateScale(14),
    color: '#000',
    marginBottom: moderateScale(8),
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    height: moderateScale(50),
  },
  input: { flex: 1, fontSize: moderateScale(14), color: '#000' },
  verifyText: { color: '#E35B33', fontWeight: '600' },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
  rememberMeText: { marginLeft: 8, fontSize: moderateScale(14), color: '#000' },
  loginButton: {
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(50),
    marginTop: moderateScale(30),
  },
  loginText: { color: '#FFFFFF', fontSize: moderateScale(16), fontWeight: '600' },
  footerText: {
    marginTop: moderateScale(20),
    textAlign: 'center',
    fontSize: moderateScale(14),
    color: '#000',
  },
  signUp: { color: '#E35B33', fontWeight: '600' },
});
