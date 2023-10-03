import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, styles} from '../../themes';
import {deviceWidth, moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';
import CButton from '../../components/common/CButton';
import images from '../../assets/images';
import {AuthNav} from '../../navigation/NavigationKeys';
import CText from '../../components/common/CText';

const LoginScreen = props => {
  const data = [1, 2, 3, 4, 5];
  const [Email, SetEmail] = useState('');

  const onPressNext = () => {
    props.navigation.navigate(AuthNav.CreatePasswordScreen);
  };
  const onChangeEmail = item => {
    SetEmail(item)
  };

  return (
    <SafeAreaView>
      <View style={localstyle.viewStyle}>
        {data.map(item => (
          <View
            style={
              item <= 1 ? localstyle.HeaderActiveStyle : localstyle.HeaderStyle
            }
          />
        ))}
      </View>
      <View style={localstyle.container}>
        <CText style={localstyle.EmailTitleStyle} type={'B24'}>
          {strings.EmailTitle}
        </CText>
        <CText style={localstyle.EmailDesStyle} type={'M16'}>
          {strings.EmailDes}
        </CText>
        <CText type={'M14'}>{strings.YourEmail}</CText>
        <CTextInput
          placeholderText={strings.EmailPlaceHolderText}
          value={Email}
          onChangeText={onChangeEmail}
        />
        <CButton
          Title={strings.Next}
          ChangeBtnStyle={localstyle.btnstyle}
          onPress={onPressNext}
        />
        <View style={localstyle.LineContainer}>
          <View style={localstyle.randomLine}></View>
          <CText style={localstyle.ORstyle} type={'M12'}>
            {strings.or}
          </CText>
          <View style={localstyle.randomLine}></View>
        </View>
        <View style={localstyle.googleStyle}>
          <Image source={images.Google} style={localstyle.googleImageStyle} />
          <CText type={'S16'}>{strings.Google}</CText>
        </View>
        <View style={localstyle.googleStyle}>
          <Image source={images.Facebook} style={localstyle.googleImageStyle} />
          <CText type={'S16'}>{strings.Facebook}</CText>
        </View>
        <View style={localstyle.googleStyle}>
          <Image source={images.Apple} style={localstyle.googleImageStyle} />
          <CText type={'S16'}>{strings.Apple}</CText>
        </View>
      </View>
    </SafeAreaView>
  );
};
const localstyle = StyleSheet.create({
  viewStyle: {
    ...styles.flexRow,
    width: deviceWidth,
    ...styles.mh10,
    ...styles.mt20,
    ...styles.mb30,
  },
  HeaderActiveStyle: {
    width: moderateScale(60),
    height: moderateScale(4),
    borderRadius: moderateScale(4),
    backgroundColor: colors.black,
    ...styles.mh5,
  },
  HeaderStyle: {
    width: moderateScale(60),
    height: moderateScale(4),
    borderRadius: moderateScale(4),
    backgroundColor: colors.borderColor,
    ...styles.mh5,
  },
  container: {
    ...styles.mh15,
  },
  EmailTitleStyle: {
    ...styles.mt10,
  },
  EmailDesStyle: {
    color: colors.grayText,
    ...styles.mt15,
    ...styles.mb25,
  },
  btnstyle: {
    ...styles.mt10,
  },
  ORstyle: {
    ...styles.selfCenter,
    ...styles.ph10,
  },
  googleStyle: {
    ...styles.flexRow,
    ...styles.center,
    borderWidth: moderateScale(1.5),
    height: moderateScale(52),
    ...styles.mb15,
    borderColor: colors.borderColor,
  },
  googleImageStyle: {
    height: moderateScale(35),
    width: moderateScale(30),
    ...styles.mr15,
  },
  LineContainer: {
    ...styles.flexRow,
    ...styles.mv40,
    ...styles.center,
  },
  randomLine: {
    width: moderateScale(150),
    height: moderateScale(1),
    backgroundColor: colors.borderColor,
  },
});
export default LoginScreen;
