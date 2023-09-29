import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from '../themes';

const Splash = props => {
//   setTimeout(()=>{
//       props.navigation.navigate('Home')
//   },3000)
  return (
    <SafeAreaView style={localstyles.imagestyle}>
      <View>
        <Image source={require('../assets/images/Logo.png')} />
      </View>
      <Image source={require('../assets/images/loader.png')} style={localstyles.loaderStyle}/>
    </SafeAreaView>
  );
};
const localstyles = StyleSheet.create({
  imagestyle: {
    ...styles.flex,
    ...styles.center,
  },
  loaderStyle:{
    ...styles.t35
  }
});
export default Splash;
