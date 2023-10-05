import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import typography from '../../themes/typography';
import images from '../../assets/images';

const CTextInput = props => {
  const {
    placeholderText,
    ChangeStyle,
    value,
    onChangeText,
    RightIcon,
    LeftIcon,
    isSecure=false,
    changeViewStyle,
  } = props;
  const [isSecurepass, SetisSecurePass] = useState(false);
  const onPressSecureIcon = () => {
    SetisSecurePass(!isSecurepass);
  };
  return (
    <View style={[localstyle.flexinput, changeViewStyle]}>
      {!!LeftIcon && <LeftIcon />}
      <TextInput
        placeholder={placeholderText}
        style={[localstyle.TextInputStyle, ChangeStyle]}
        placeholderTextColor={colors.grayText}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecurepass}
      />
      {!!RightIcon && <RightIcon />}
      {isSecure && (
        <TouchableOpacity onPress={onPressSecureIcon}>
          {!isSecurepass ? (
            <Image source={images.Eye1} style={localstyle.securetextStyle} />
          ) : (
            <Image source={images.Eye} style={localstyle.securetextStyle} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
const localstyle = StyleSheet.create({
  flexinput: {
    ...styles.rowCenter,
    ...styles.mt20,
    width: '100%',
    borderColor: colors.borderColor,
    borderWidth: moderateScale(1.5),
    ...styles.mb10,
  },
  TextInputStyle: {
    ...typography.fontSizes.f14,
    ...typography.fontWeights.Regular,
    ...styles.ph10,
    ...styles.flex,
    height: moderateScale(52),
  },
  securetextStyle: {
    ...styles.center,
    ...styles.mr10,
    height: moderateScale(24),
    width: moderateScale(24),
  },
});
export default CTextInput;
