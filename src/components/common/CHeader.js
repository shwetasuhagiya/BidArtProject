import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

//custom imports
import {styles} from '../../themes';
import images from '../../assets/images';
import CText from './CText';

const CHeader = ({img, icon, onPress, IconPress, Style, text}) => {
  return (
    <View style={[localStyle.imageContainerStyle, Style]}>
      <TouchableOpacity onPress={onPress}>
        <Image source={img} />
      </TouchableOpacity>
      <TouchableOpacity onPress={IconPress}>
        <Image source={icon} />
      </TouchableOpacity>
    </View>
  );
};
const localStyle = StyleSheet.create({
  imageContainerStyle: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mv10,
  },
});
export default CHeader;
