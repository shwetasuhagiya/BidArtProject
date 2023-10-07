import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import React, {useState} from 'react';

//custom imports
import {colors, styles} from '../../themes';
import {deviceWidth, moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';
import CButton from '../../components/common/CButton';
import images from '../../assets/images';
import {AuthNav} from '../../navigation/NavigationKeys';
import CText from '../../components/common/CText';
import StepIndicator from '../../components/StepIndicator';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';

const LoginScreen = ({navigation}) => {
  const [Email, SetEmail] = useState('');

  const onPressNext = () => {
    navigation.navigate(AuthNav.CreatePasswordScreen);
  };
  const onChangeEmail = item => {
    SetEmail(item);
  };

  const SocialButtonComponent = ({img, text}) => {
    return (
      <View style={localstyle.googleStyle}>
        <Image source={img} style={localstyle.googleImageStyle} />
        <CText type={'S16'}>{text}</CText>
      </View>
    );
  };

  return (
    <View style={styles.mainContainerSurface} >
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <StepIndicator step={1} />
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
            type={'B16'}
          />
          <View style={localstyle.LineContainer}>
            <View style={localstyle.randomLine}></View>
            <CText style={localstyle.ORstyle} type={'M12'}>
              {strings.or}
            </CText>
            <View style={localstyle.randomLine}></View>
          </View>
          <SocialButtonComponent img={images.Google} text={strings.Google} />
          <SocialButtonComponent
            img={images.Facebook}
            text={strings.Facebook}
          />
          <SocialButtonComponent img={images.Apple} text={strings.Apple} />
        </View>
      </KeyBoardAvoidWrapper>
    </View>
  );
};
const localstyle = StyleSheet.create({
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
