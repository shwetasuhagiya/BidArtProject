import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
//local import
import {TabNav} from '../NavigationKeys';
import {TabRoute} from '../NavigationRoute';
import {Image, StyleSheet} from 'react-native';
import images from '../../assets/images';
import {styles} from '../../themes';
import {hp} from '../../common/constants';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}
      initialRouteName={TabNav.Home}>
      <Tab.Screen
        name={TabNav.Home}
        component={TabRoute.HomeTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? images.activeHome : images.home} />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Discover}
        component={TabRoute.DiscoverTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? images.activeDiscover : images.discover} />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Inbox}
        component={TabRoute.InboxTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? images.activeSms : images.sms} />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Profile}
        component={TabRoute.ProfileTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? images.activeProfile : images.profile} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const localStyle = StyleSheet.create({
  tabViewContainer: {
    ...styles.center,
    height: hp(10),
  },
});
export default TabNavigation;
