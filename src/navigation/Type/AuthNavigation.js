import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AuthNav } from '../NavigationKeys';
import { AuthRoute } from '../NavigationRoute';

const Stack = createNativeStackNavigator();


const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AuthNav.LoginScreen}>
      <Stack.Screen
        name={AuthNav.LoginScreen}
        component={AuthRoute.LoginScreen}
      />
      <Stack.Screen
        name={AuthNav.CreatePasswordScreen}
        component={AuthRoute.CreatePasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation
