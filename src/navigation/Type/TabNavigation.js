import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TabNav} from '../NavigationKeys';
import {TabRoute} from '../NavigationRoute';
import {Image} from 'react-native';
import images from '../../assets/images';
import { colors } from '../../themes';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false,tabBarShowLabel:false
    }}>
      <Tab.Screen
        name={TabNav.Home}
        component={TabRoute.HomeTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? images.activeHome : images.Home} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
