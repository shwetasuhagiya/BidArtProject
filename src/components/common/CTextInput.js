import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import typography from '../../themes/typography';

const CTextInput = props => {
  const {placeholderText, ChangeStyle, value, onChangeText, secureTextEntry} =
    props;
  return (
    <TextInput
      placeholder={placeholderText}
      style={[localstyle.TextInputStyle, ChangeStyle]}
      placeholderTextColor={colors.grayText}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};
const localstyle = StyleSheet.create({
  TextInputStyle: {
    borderColor: colors.borderColor,
    borderWidth: moderateScale(1.5),
    height: moderateScale(52),
    ...styles.pl10,
    ...styles.mv15,
    ...typography.fontSizes.f14,
  },
});
export default CTextInput;
