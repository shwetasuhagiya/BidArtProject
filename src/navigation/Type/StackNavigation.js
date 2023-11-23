import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNav} from '../NavigationKeys';
import {StackRoute} from '../NavigationRoute';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.Splash}>
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
      <Stack.Screen
        name={StackNav.BidArtEvent}
        component={StackRoute.BidArtEvent}
      />
      <Stack.Screen
        name={StackNav.DetailEvent}
        component={StackRoute.DetailEvent}
      />
      <Stack.Screen
        name={StackNav.SearchEvent}
        component={StackRoute.SearchEvent}
      />
      <Stack.Screen
        name={StackNav.SearchDiscover}
        component={StackRoute.SearchDiscover}
      />
      <Stack.Screen
        name={StackNav.DetailArt}
        component={StackRoute.DetailArt}
      />
      <Stack.Screen
        name={StackNav.RegisterBid}
        component={StackRoute.RegisterBid}
      />
      <Stack.Screen
        name={StackNav.AddCreditCard}
        component={StackRoute.AddCreditCard}
      />
      <Stack.Screen
        name={StackNav.AddBillingAddress}
        component={StackRoute.AddBillingAddress}
      />
      <Stack.Screen
        name={StackNav.SubmitWork}
        component={StackRoute.SubmitWork}
      />
      <Stack.Screen name={StackNav.WhisList} component={StackRoute.WhisList} />
      <Stack.Screen
        name={StackNav.SettingAccount}
        component={StackRoute.SettingAccount}
      />
      <Stack.Screen name={StackNav.Payment} component={StackRoute.Payment} />
      <Stack.Screen name={StackNav.Setting} component={StackRoute.Setting} />
      <Stack.Screen
        name={StackNav.SearchArtist}
        component={StackRoute.SearchArtist}
      />
      <Stack.Screen name={StackNav.Chat} component={StackRoute.Chat} />
      <Stack.Screen
        name={StackNav.VoiceCall}
        component={StackRoute.VoiceCall}
      />
    </Stack.Navigator>
  );
}
