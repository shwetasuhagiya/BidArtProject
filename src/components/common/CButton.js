import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors, styles} from '../../themes';
import typography from '../../themes/typography';

const CButton = props => {
  const {Title, ChangeBtnStyle, ChangeTxtStyle, onPress} = props;
  return (
    <TouchableOpacity
      style={[localstyle.btnStyle, ChangeBtnStyle]}
      onPress={onPress}>
      <Text style={[localstyle.txtStyle, ChangeTxtStyle]}>{Title}</Text>
    </TouchableOpacity>
  );
};
const localstyle = StyleSheet.create({
  btnStyle: {
    height: 54,
    backgroundColor: colors.black,
    ...styles.center,
  },
  txtStyle: {
    ...typography.fontSizes.f16,
    ...typography.fontWeights.Bold,
    ...styles.selfCenter,
    color: colors.white,
  },
});
export default CButton;
