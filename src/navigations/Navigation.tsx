import React, { useEffect, useState } from 'react';
// Packages
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import profile from '../screens/profile/profile';
import { ActivityIndicator, View } from 'react-native';
// Screens
import { AssignDrillScreen, Dashboard, Getstarted, Infographics, Learningmodules, Loginpage, Otppage, Result, Signup, Test, Veiwvideo } from '../screens';
import { getAuthData } from '../store/authStorage';

import SosScreen from '../screens/SosScreen/SosScreen';

const RootStack = createNativeStackNavigator();

export const Navigation = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authData = await getAuthData();
      if (authData?.token && authData?.user_id) {
        setInitialRoute('Dashboard');
      } else {
        setInitialRoute('Getstarted');
      }
    };
    checkAuth();
  }, []);

  if (!initialRoute) {
    // Show loading indicator while checking AsyncStorage
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#E35B33" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={initialRoute}>
        <RootStack.Screen name="Test" component={Test} options={{ headerShown: false }}/>
        <RootStack.Screen name="Getstarted" component={Getstarted} options={{ headerShown: false }}/>
        <RootStack.Screen name="Loginpage" component={Loginpage} options={{ headerShown: false }}/>
        <RootStack.Screen name="Otppage" component={Otppage} options={{ headerShown: false }}/>
        <RootStack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <RootStack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
        <RootStack.Screen name="Learningmodules" component={Learningmodules} options={{ headerShown: false }}/>
        <RootStack.Screen name="Veiwvideo" component={Veiwvideo} options={{ headerShown: false }}/>
        <RootStack.Screen name="Infographics" component={Infographics} options={{ headerShown: false }}/>
        <RootStack.Screen name="Result" component={Result} options={{ headerShown: false }}/>
        <RootStack.Screen name="SosScreen" component={SosScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="profile" component={profile} options={{ headerShown: false }}/>
        <RootStack.Screen name="AssignDrillScreen" component={AssignDrillScreen} options={{ headerShown: false }}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};