import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_TOKEN, ON_BOARDING} from './keys';

const StorageGetValue = async () => {
  const asyncData = await AsyncStorage.multiGet([ON_BOARDING, LOGIN_TOKEN]);
  console.log('asyncData', asyncData);
  // console.warn(asyncData)
  console.log('!!asyncData[0][1]', !!asyncData[0][1]);
  const onBoardingValue = !!asyncData[0][1] ? asyncData[0][1] : false;
  const Loginvalue = !!asyncData[1][1] ? json.parse(asyncData[1][1]) : false;
  return {onBoardingValue, Loginvalue};
};

const StoreOnbardingData = async value => {
  const jsonvalue = JSON.stringify(value);
  await AsyncStorage.setItem(ON_BOARDING, jsonvalue);
  return;
};
const StoreLoginData = async value => {
  const jsonvalue = JSON.stringify(value);
  await AsyncStorage.setItem(LOGIN_TOKEN, jsonvalue);
  return;
};

export {StorageGetValue, StoreOnbardingData, StoreLoginData};
