import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

//custom import
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from './CText';

const CButton = props => {
  const {type, Title, ChangeBtnStyle, ChangeTxtStyle, onPress} = props;
  return (
    <TouchableOpacity
      style={[localstyle.btnStyle, ChangeBtnStyle]}
      onPress={onPress}>
      <CText style={[localstyle.txtStyle, ChangeTxtStyle]} type={type}>
        {Title}
      </CText>
    </TouchableOpacity>
  );
};
const localstyle = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.black,
    ...styles.center,
    height: moderateScale(54),
  },
  txtStyle: {
    ...styles.selfCenter,
    color: colors.white,
  },
});
export default CButton;
