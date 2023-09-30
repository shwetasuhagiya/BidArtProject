import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from '../themes';
import images from '../assets/images';
import {StorageGetValue} from '../utils/asyncstorage';

const Splash = (props) => {
  setTimeout(() => {
    props.navigation.replace('Onboarding');
  },3000);

  // const asyncProcess = async () => {
  //   try {
  //     let asyncData = await StorageGetValue();
  //     if (asyncData) {
  //       let {onBoardingValue, Loginvalue} = asyncData;
  //      if (!!Loginvalue) {
  //        props.navigation.replace('Home');
  //      } else if (!!onBoardingValue) {
  //        props.navigation.replace('Login');
  //      } else {
  //        props.navigation.replace('Onboarding');
  //      }
  //     }
  //   } catch (e) {
  //     console.log('error ', e);
  //   }
  // };
  return (
    <SafeAreaView style={localstyles.imagestyle}>
      <View>
        <Image source={images.logo} />
      </View>
      <Image source={images.loader} style={localstyles.loaderStyle} />
    </SafeAreaView>
  );
};
const localstyles = StyleSheet.create({
  imagestyle: {
    ...styles.flex,
    ...styles.center,
  },
  loaderStyle: {
    ...styles.t35,
  },
});
export default Splash;
