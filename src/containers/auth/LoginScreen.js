import {View, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';

//custom imports
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';
import CButton from '../../components/common/CButton';
import images from '../../assets/images';
import {AuthNav} from '../../navigation/NavigationKeys';
import CText from '../../components/common/CText';
import StepIndicator from '../../components/StepIndicator';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import {validateEmail} from '../../utils/Validation';

const LoginScreen = ({navigation}) => {
  const [Email, SetEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');

  const handleValidEmail = () => {
    navigation.navigate(AuthNav.CreatePasswordScreen);
  };

  const onChangeEmail = item => {
    const {msg} = validateEmail(item);
    SetEmail(item);
    setEmailValidError(msg);
  };

  const SocialButtonComponent = ({img, text}) => {
    return (
      <View style={localstyle.googleStyle}>
        <Image source={img} style={localstyle.googleImageStyle} />
        <CText numberOfLines={1} type={'S16'}>
          {text}
        </CText>
      </View>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <StepIndicator step={1} />
        <View style={localstyle.container}>
          <CText
            numberOfLines={1}
            style={localstyle.EmailTitleStyle}
            type={'B24'}>
            {strings.EmailTitle}
          </CText>
          <CText
            numberOfLines={2}
            style={localstyle.EmailDesStyle}
            type={'M16'}>
            {strings.EmailDes}
          </CText>
          <CText numberOfLines={1} type={'M14'}>
            {strings.YourEmail}
          </CText>
          <CTextInput
            placeholderText={strings.EmailPlaceHolderText}
            value={Email}
            onChangeText={onChangeEmail}
            errorText={emailValidError}
            keyBoardType={'email-address'}
          />
          <CButton
            Title={strings.Next}
            ChangeBtnStyle={localstyle.btnstyle}
            onPress={handleValidEmail}
            type={'B16'}
          />
          <View style={localstyle.LineContainer}>
            <View style={localstyle.randomLine}></View>
            <CText numberOfLines={1} style={localstyle.ORstyle} type={'M12'}>
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
    ...styles.mt20,
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
  textStyle: {
    color: colors.red,
    ...styles.mv10,
  },
});
export default LoginScreen;
