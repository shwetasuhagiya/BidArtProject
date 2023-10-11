import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
//local import
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabNav} from '../NavigationKeys';
import {TabRoute} from '../NavigationRoute';
import {Image, StyleSheet, View} from 'react-native';
import images from '../../assets/images';
import {colors, styles} from '../../themes';
import {hp, moderateScale} from '../../common/constants';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const TabText = ({IconType, name, focused}) => {
    return (
      <View style={localStyle.tabViewContainer}>
        <IconType
          name={name}
          solid={focused}
          size={moderateScale(20)}
          color={!!focused ? colors.black : colors.GrayPrimary}
        />
      </View>
    );
  };
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}} initialRouteName={TabNav.Discover}>
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
