import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNav} from '../NavigationKeys';
import {AuthRoute} from '../NavigationRoute';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AuthNav.FollowArtistScreen}>
      <Stack.Screen
        name={AuthNav.LoginScreen}
        component={AuthRoute.LoginScreen}
      />
      <Stack.Screen
        name={AuthNav.CreatePasswordScreen}
        component={AuthRoute.CreatePasswordScreen}
      />
      <Stack.Screen
        name={AuthNav.FullNameScreen}
        component={AuthRoute.FullNameScreen}
      />
      <Stack.Screen
        name={AuthNav.FollowArtistScreen}
        component={AuthRoute.FollowArtistScreen}
      />
      <Stack.Screen
        name={AuthNav.FollowCategoriesScreen}
        component={AuthRoute.FollowCategoriesScreen}
      />
      <Stack.Screen
        name={AuthNav.BudgetScreen}
        component={AuthRoute.BudgetScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
