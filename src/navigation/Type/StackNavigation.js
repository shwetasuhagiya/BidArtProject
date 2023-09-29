import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../containers/Splash';
import HomeTab from '../../containers/Tab/HomeTab';


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="Home"
        component={HomeTab}
      />
    </Stack.Navigator>
  );
}
