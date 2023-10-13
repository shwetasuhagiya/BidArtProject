import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../themes';
import images from '../assets/images';
import {StorageGetValue} from '../utils/asyncstorage';
import {moderateScale} from '../common/constants';
import {StackNav} from '../navigation/NavigationKeys';

const Splash = ({navigation}) => {
  // setTimeout(() => {
  //   // props.navigation.replace('Onboarding');
  // }, 3000);

  useEffect(() => {
    setTimeout(() => {
      asyncProcess();
    }, 2000);
  }, []);

  const asyncProcess = async () => {
    try {
      let asyncData = await StorageGetValue();
      if (asyncData) {
        // cl
        let {onBoardingValue, Loginvalue} = asyncData;
        if (!!Loginvalue) {
          navigation.replace(StackNav.TabNavigation);
        } else if (!!onBoardingValue) {
          navigation.replace(StackNav.AuthNavigation);
        } else {
          navigation.replace(StackNav.OnBoarding);
        }
      }
    } catch (e) {
      console.log('error ', e);
    }
  };
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
    top: moderateScale(300),
  },
});
export default Splash;
