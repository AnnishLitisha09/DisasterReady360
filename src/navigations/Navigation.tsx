import React from 'react';
// Packages
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Dashboard, Getstarted, Infographics, Learningmodules, Loginpage, Otppage, Result, Signup, Test, Veiwvideo } from '../screens';
// Screens


const RootStack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Result">
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
      </RootStack.Navigator>
    </NavigationContainer>
  );
};