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
      initialRouteName={StackNav.TabNavigation}>
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
      <Stack.Screen
        name={StackNav.TrendingArtist}
        component={StackRoute.TrendingArtist}
      />
      <Stack.Screen
        name={StackNav.DetailArtist}
        component={StackRoute.DetailArtist}
      />
      <Stack.Screen
        name={StackNav.SearchPage}
        component={StackRoute.SearchPage}
      />
      <Stack.Screen
        name={StackNav.SearchResult}
        component={StackRoute.SearchResult}
      />
    </Stack.Navigator>
  );
}
