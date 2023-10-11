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


const CHeader = ({img, icon, onPress, IconPress, style,}) => {
  return (
    <View style={[localStyle.imageContainerStyle, style]}>
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
