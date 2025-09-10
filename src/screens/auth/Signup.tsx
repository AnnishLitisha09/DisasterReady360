import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { moderateScale } from '../../utils/scalingUtils';
import { useNavigation } from '@react-navigation/native';
import { Arrowback } from '../../assets/icons';

export const Signup = () => {
  const navigation = useNavigation();

  const [role, setRole] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  const institutions = [
    { label: 'Institution A', value: 'Institution A' },
    { label: 'Institution B', value: 'Institution B' },
  ];

  const states = [
    { label: 'Andhra Pradesh', value: 'AP' },
    { label: 'Arunachal Pradesh', value: 'AR' },
    { label: 'Assam', value: 'AS' },
    { label: 'Bihar', value: 'BR' },
    { label: 'Chhattisgarh', value: 'CG' },
    { label: 'Goa', value: 'GA' },
    { label: 'Gujarat', value: 'GJ' },
    { label: 'Haryana', value: 'HR' },
    { label: 'Himachal Pradesh', value: 'HP' },
    { label: 'Jammu and Kashmir', value: 'JK' },
    { label: 'Jharkhand', value: 'JH' },
    { label: 'Karnataka', value: 'KA' },
    { label: 'Kerala', value: 'KL' },
    { label: 'Madhya Pradesh', value: 'MP' },
    { label: 'Maharashtra', value: 'MH' },
    { label: 'Manipur', value: 'MN' },
    { label: 'Meghalaya', value: 'ML' },
    { label: 'Mizoram', value: 'MZ' },
    { label: 'Nagaland', value: 'NL' },
    { label: 'Odisha', value: 'OR' },
    { label: 'Punjab', value: 'PB' },
    { label: 'Rajasthan', value: 'RJ' },
    { label: 'Sikkim', value: 'SK' },
    { label: 'Tamil Nadu', value: 'TN' },
    { label: 'Telangana', value: 'TS' },
    { label: 'Tripura', value: 'TR' },
    { label: 'Uttar Pradesh', value: 'UP' },
    { label: 'Uttarakhand', value: 'UK' },
    { label: 'West Bengal', value: 'WB' },
  ];

  const cities = {
    AP: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool'],
    AR: ['Itanagar', 'Naharlagun', 'Ziro', 'Bomdila', 'Pasighat'],
    AS: ['Guwahati', 'Dibrugarh', 'Jorhat', 'Tinsukia', 'Silchar'],
    BR: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga'],
    CG: ['Raipur', 'Bilaspur', 'Korba', 'Durg', 'Raigarh'],
    GA: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda'],
    GJ: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
    HR: ['Chandigarh', 'Faridabad', 'Gurgaon', 'Hisar', 'Rohtak'],
    HP: ['Shimla', 'Dharamshala', 'Kullu', 'Manali', 'Solan'],
    JK: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Kathua'],
    JH: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'],
    KA: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi'],
    KL: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kottayam', 'Thrissur'],
    MP: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'],
    MH: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
    MN: ['Imphal', 'Thoubal', 'Kangpokpi', 'Bishnupur', 'Senapati'],
    ML: ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Williamnagar'],
    MZ: ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip', 'Kolasib'],
    NL: ['Kohima', 'Dimapur', 'Mokokchung', 'Wokha', 'Mon'],
    OR: ['Bhubaneswar', 'Cuttack', 'Berhampur', 'Sambalpur', 'Rourkela'],
    PB: ['Chandigarh', 'Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala'],
    RJ: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer'],
    SK: ['Gangtok', 'Namchi', 'Mangan', 'Rangpo', 'Jorethang'],
    TN: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
    TS: ['Hyderabad', 'Warangal', 'Khammam', 'Nizamabad', 'Karimnagar'],
    TR: ['Agartala', 'Udaipur', 'Dharmanagar', 'Ambassa', 'Belonia'],
    UP: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut'],
    UK: ['Dehradun', 'Haridwar', 'Nainital', 'Rishikesh', 'Roorkee'],
    WB: ['Kolkata', 'Siliguri', 'Durgapur', 'Asansol', 'Howrah'],
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Arrowback width={moderateScale(24)} height={moderateScale(24)} />
        </TouchableOpacity>

        <Text style={styles.heading}>Create your account</Text>
        <Text style={styles.description}>
          Welcome to Disaster Ready 360, enter your details below to continue.
        </Text>

        <Text style={styles.label}>Select your role</Text>
        <RNPickerSelect
          onValueChange={(value) => setRole(value)}
          items={[
            { label: 'Student', value: 'student' },
            { label: 'Teacher', value: 'teacher' },
            { label: 'Parent', value: 'parent' },
            { label: 'Community', value: 'community' },
          ]}
          placeholder={{ label: 'Select your role', value: null }}
          style={pickerStyle}
        />

        {role && (
          <>
            <Text style={styles.label}>Enter your Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />

            <Text style={styles.label}>Enter your Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
            />

            {(role === 'student' || role === 'teacher') && (
              <>
                <Text style={styles.label}>Select Institution</Text>
                <RNPickerSelect
                  onValueChange={setInstitution}
                  items={institutions}
                  placeholder={{ label: 'Select Institution', value: null }}
                  style={pickerStyle}
                />
              </>
            )}

            {role === 'community' && (
              <>
                <Text style={styles.label}>Select State</Text>
                <RNPickerSelect
                  onValueChange={(value) => setState(value)}
                  items={states}
                  placeholder={{ label: 'Select State', value: null }}
                  style={pickerStyle}
                />

                {state && (
                  <>
                    <Text style={styles.label}>Select City</Text>
                    <RNPickerSelect
                      onValueChange={setCity}
                      items={(cities[state] || []).map((c) => ({ label: c, value: c }))}
                      placeholder={{ label: 'Select City', value: null }}
                      style={pickerStyle}
                    />
                  </>
                )}
              </>
            )}
          </>
        )}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create your account</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink} onPress={() => navigation.navigate('Loginpage')}>
              LOG IN
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#F9F9F9', paddingTop: moderateScale(30) },
  container: { padding: moderateScale(20), paddingBottom: moderateScale(30) },
  backButton: { marginBottom: moderateScale(20) },
  heading: { fontSize: moderateScale(24), fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: moderateScale(10) },
  description: { fontSize: moderateScale(14), color: '#333', textAlign: 'center', marginBottom: moderateScale(20) },
  label: { marginTop: moderateScale(15), marginBottom: moderateScale(5), fontWeight: '600', color: '#000' },
  input: { borderWidth: 1, borderColor: '#F0F4F8', padding: moderateScale(10), borderRadius: moderateScale(12), backgroundColor: '#F0F4F8' },
  button: { marginTop: moderateScale(30), backgroundColor: '#d9673f', padding: moderateScale(15), borderRadius: moderateScale(8), alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
  loginContainer: { marginTop: moderateScale(20), alignItems: 'center' },
  loginText: { fontSize: moderateScale(14), color: '#000' },
  loginLink: { color: '#E35B33', fontWeight: '600' },
});

const pickerStyle = {
  inputIOS: { padding: moderateScale(12), borderWidth: 1, borderColor: '#ccc', borderRadius: moderateScale(12), backgroundColor: '#F0F4F8' },
  inputAndroid: { padding: moderateScale(12), borderWidth: 1, borderColor: '#ccc', borderRadius: moderateScale(12), marginBottom: moderateScale(10), backgroundColor: '#F0F4F8' },
};
