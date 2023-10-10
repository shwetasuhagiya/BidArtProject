import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors, styles} from '../../themes';
import typography from '../../themes/typography';
import { moderateScale } from '../../common/constants';
import CText from './CText';

const CButton = props => {
  const {type,Title, ChangeBtnStyle, ChangeTxtStyle, onPress} = props;
  return (
    <TouchableOpacity
      style={[localstyle.btnStyle, ChangeBtnStyle]}
      onPress={onPress}>
      <CText style={[localstyle.txtStyle, ChangeTxtStyle]} type={type}>{Title}</CText>
    </TouchableOpacity>
  );
};
const localstyle = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.black,
    ...styles.center,
  },
  txtStyle: {
    ...styles.selfCenter,
    color: colors.white,
  },
});
export default CButton;
