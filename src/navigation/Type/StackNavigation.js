import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StackNav } from '../NavigationKeys';
import { StackRoute } from '../NavigationRoute';


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.Splash}
      >
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
      <Stack.Screen name={StackNav.Onboarding} component={StackRoute.OnBoarding} />
      <Stack.Screen name={StackNav.AuthNavigation} component={StackRoute.AuthNavigation} />
    </Stack.Navigator>
  );
}
