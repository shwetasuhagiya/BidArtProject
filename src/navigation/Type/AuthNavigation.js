import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../containers/auth/LoginScreen';

const Stack = createNativeStackNavigator();


const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={LoginScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation
