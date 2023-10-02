import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../containers/Splash';
import OnBoarding from '../../containers/OnBoarding';
import LoginScreen from '../../containers/auth/LoginScreen';
import AuthNavigation from './AuthNavigation';


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={OnBoarding} />
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
    </Stack.Navigator>
  );
}
