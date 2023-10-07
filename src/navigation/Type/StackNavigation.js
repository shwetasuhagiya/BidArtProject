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
      initialRouteName={StackNav.FilterResult}>
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
      <Stack.Screen
        name={StackNav.OnBoarding}
        component={StackRoute.OnBoarding}
      />
      <Stack.Screen
        name={StackNav.AuthNavigation}
        component={StackRoute.AuthNavigation}
      />
      <Stack.Screen
        name={StackNav.TabNavigation}
        component={StackRoute.TabNavigation}
      />
      <Stack.Screen
        name={StackNav.ArtWorkScreen}
        component={StackRoute.ArtWorkScreen}
      />
      <Stack.Screen
        name={StackNav.FilterResult}
        component={StackRoute.FilterResult}
      />
    </Stack.Navigator>
  );
}
