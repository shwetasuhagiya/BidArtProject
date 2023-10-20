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
import CText from './CText';

const CTextInput = props => {
  const {
    placeholderText,
    ChangeStyle,
    value,
    onChangeText,
    RightIcon,
    LeftIcon,
    errorText,
    errorStyle,
    isSecure = false,
    changeViewStyle,
    color,
    keyBoardType,
  } = props;
  const [isSecurepass, SetisSecurePass] = useState(false);
  const onPressSecureIcon = () => {
    SetisSecurePass(!isSecurepass);
  };
  return (
    <View>
      <View style={[localstyle.flexinput, changeViewStyle]}>
        {!!LeftIcon && <LeftIcon />}
        <TextInput
          placeholder={placeholderText}
          style={[localstyle.TextInputStyle, ChangeStyle]}
          placeholderTextColor={[colors.grayText, color]}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecurepass}
          keyboardType={keyBoardType}
        />
        {!!RightIcon && <RightIcon />}
        {!!isSecure && (
          <TouchableOpacity onPress={onPressSecureIcon}>
            {!isSecurepass ? (
              <Image source={images.Eye} style={localstyle.securetextStyle} />
            ) : (
              <Image source={images.Eye1} style={localstyle.securetextStyle} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {errorText && errorText != '' ? (
        <CText
          style={{
            ...localstyle.errorText,
            ...errorStyle,
            color: colors.alertColor,
          }}>
          {errorText}
        </CText>
      ) : null}
    </View>
  );
};
const localstyle = StyleSheet.create({
  flexinput: {
    ...styles.rowCenter,
    ...styles.mt15,
    width: '100%',
    borderColor: colors.borderColor,
    borderWidth: moderateScale(1.5),
  },
  TextInputStyle: {
    ...typography.fontSizes.f14,
    ...typography.fontWeights.Medium,
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
  errorText: {
    textAlign: 'left',
    ...typography.fontSizes.f12,
    ...styles.mv10,
    ...styles.ml10,
  },
});
export default CTextInput;
