import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';

//custom import
import {styles} from '../themes';
import images from '../assets/images';
import {StorageGetValue} from '../utils/asyncstorage';
import {moderateScale} from '../common/constants';
import {StackNav} from '../navigation/NavigationKeys';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      asyncProcess();
    }, 2000);
  }, []);

  const asyncProcess = async () => {
    try {
      let asyncData = await StorageGetValue();
      if (asyncData) {
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
      <Image source={images.logo} />
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
    position: 'absolute',
    bottom: moderateScale(100),
  },
});
export default Splash;
