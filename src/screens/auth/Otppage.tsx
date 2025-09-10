import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { moderateScale } from '../../utils/scalingUtils';
import { Arrowback } from '../../assets/icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export const Otppage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params as { email: string };

  const [otp, setOtp] = useState(['', '', '', '']);
  const [showLottie, setShowLottie] = useState(false);
  const inputs = useRef<TextInput[]>([]);
  const [timer, setTimer] = useState(10);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setCanResend(true);
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) inputs.current[index + 1]?.focus();
    if (!text && index > 0) inputs.current[index - 1]?.focus();
  };

  const handleResend = () => {
    setOtp(['', '', '', '']);
    setTimer(10);
    setCanResend(false);
    console.log('OTP resent!');
  };

  const handleContinue = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4) {
      Alert.alert('Invalid OTP', 'Please enter the 4-digit OTP.');
      return;
    }

    if (enteredOtp === '1234') {
      setShowLottie(true); // Show full screen Lottie
      setTimeout(() => {
        setShowLottie(false);
        navigation.navigate('Loginpage', { email, otpVerified: true });
      }, 2000); // 2 seconds animation
    } else {
      Alert.alert('Error', 'Incorrect OTP');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!showLottie && (
        <>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Arrowback width={moderateScale(30)} height={moderateScale(30)} />
          </TouchableOpacity>

          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.title}>SMS Code</Text>
          <Text style={styles.subtitle}>Enter the 4-digit code that was sent to {email}</Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <View key={index} style={styles.otpBox}>
                <TextInput
                  ref={(el) => { if (el) inputs.current[index] = el; }}
                  style={styles.hiddenInput}
                  maxLength={1}
                  keyboardType="number-pad"
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                />
                {digit !== '' && <Text style={styles.dot}>•</Text>}
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>

          {canResend ? (
            <TouchableOpacity onPress={handleResend}>
              <Text style={[styles.resendText, { color: '#E35B33', fontWeight: '600' }]}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.resendText}>Resend in ({timer}s)</Text>
          )}
        </>
      )}

      {showLottie && (
        <View style={styles.fullScreenLottie}>
          <LottieView
            source={require('../../assets/lottie/pin.json')}
            autoPlay
            loop={false}
            style={{ width: width, height: height }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9', paddingHorizontal: moderateScale(20), paddingTop: moderateScale(30) },
  backButton: { marginTop: moderateScale(10) },
  logo: { width: moderateScale(200), height: moderateScale(200), alignSelf: 'center', marginTop: moderateScale(30), borderRadius: moderateScale(20) },
  title: { fontSize: moderateScale(20), fontWeight: 'bold', color: '#000', textAlign: 'center', marginTop: moderateScale(20) },
  subtitle: { fontSize: moderateScale(13), color: '#333', textAlign: 'center', marginTop: moderateScale(8), marginBottom: moderateScale(30) },
  otpContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: moderateScale(30) },
  otpBox: { width: moderateScale(60), height: moderateScale(60), borderRadius: moderateScale(10), backgroundColor: '#F5F7FA', justifyContent: 'center', alignItems: 'center' },
  hiddenInput: { position: 'absolute', width: '100%', height: '100%', textAlign: 'center', fontSize: moderateScale(18), fontWeight: 'bold', color: 'transparent' },
  dot: { fontSize: moderateScale(28), color: '#E35B33', fontWeight: 'bold' },
  continueButton: { backgroundColor: '#E35B33', borderRadius: moderateScale(30), justifyContent: 'center', alignItems: 'center', height: moderateScale(50) },
  continueText: { color: '#FFFFFF', fontSize: moderateScale(16), fontWeight: '600' },
  resendText: { marginTop: moderateScale(20), textAlign: 'center', fontSize: moderateScale(14), color: '#555' },
  fullScreenLottie: { position: 'absolute', top: 0, left: 0, width, height, zIndex: 999 },
});
