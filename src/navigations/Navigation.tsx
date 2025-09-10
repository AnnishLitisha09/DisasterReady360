import React from 'react';
// Packages
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Getstarted, Loginpage, Otppage, Signup, Test } from '../screens';
// Screens


const RootStack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Getstarted">
        <RootStack.Screen name="Test" component={Test} options={{ headerShown: false }}/>
         <RootStack.Screen name="Getstarted" component={Getstarted} options={{ headerShown: false }}/>
         <RootStack.Screen name="Loginpage" component={Loginpage} options={{ headerShown: false }}/>
         <RootStack.Screen name="Otppage" component={Otppage} options={{ headerShown: false }}/>
         <RootStack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};