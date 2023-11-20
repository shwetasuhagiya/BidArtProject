import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

//custom imports
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';
import CText from '../../components/common/CText';
import images from '../../assets/images';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/NavigationKeys';
import StepIndicator from '../../components/StepIndicator';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import { passwordStrength } from '../../utils/Validation';


const CreatePasswordScreen = ({navigation}) => {
  const [password, SetPassword] = useState('');
  const [ConfirmPassword, SetConfirmPassword] = useState('');
  const [isError, SetIsError] = useState('');
  const [passworkChk, SetPasswordChk] = useState('');

  const GoBackBtnHandle = () => {
    navigation.replace(AuthNav.LoginScreen);
  };
  const onChangePassword = item => {
    SetPassword(item);
    const {msg} = passwordStrength(item)
    SetPasswordChk(msg)
  };
  const onConfirmPassword = item => {
    SetConfirmPassword(item);
    SetIsError('')
  };
  const onpressNextbtn = () => {
    if (password !== ConfirmPassword) {
      SetIsError(strings.passwordNotMatch);
    }
    else if(password === "" && ConfirmPassword === ""){
        SetIsError(strings.enterPassword)
    }
    else {
      SetIsError('');
      navigation.navigate(AuthNav.FullNameScreen);
    }
  };
  const RightIcon = () => {
    return (
      <View style={localstyle.btnhandle}>
        <TouchableOpacity>
          <Image
            source={images.Check}
            style={localstyle.inputRightIconCheckStyle}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainerSurface}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <StepIndicator step={2} />
        <View style={localstyle.container}>
          <View>
            <CText
              numberOfLines={1}
              style={localstyle.PasswordTitleStyle}
              type={'B24'}>
              {strings.PasswordTitle}
            </CText>
            <CText
              numberOfLines={1}
              style={localstyle.PasswordDesStyle}
              type={'M16'}>
              {strings.PasswordDes}
            </CText>
            <CText
              numberOfLines={1}
              type={'M14'}
              style={localstyle.PasswordTitle}>
              {strings.NewPassword}
            </CText>
            <CTextInput
              placeholderText={strings.PasswordPlaceHolderText}
              value={password}
              onChangeText={onChangePassword}
              isSecure
              errorText={passworkChk}
              keyBoardType={'default'}
              RightIcon={RightIcon}
            />
            <CText
              numberOfLines={1}
              style={localstyle.PasswordConfirmTitle}
              type={'M14'}>
              {strings.ConfirmPassword}
            </CText>
            <CTextInput
              placeholderText={strings.PasswordPlaceHolderText}
              value={ConfirmPassword}
              onChangeText={onConfirmPassword}
              isSecure
              RightIcon={RightIcon}
              keyBoardType={'default'}
            />
            {/* <CText numberOfLines={1} style={localstyle.textStyle}>
              {isError}
            </CText> */}
            <CText numberOfLines={2} style={localstyle.termsStyle} type={'R14'}>
              {strings.temrsAndCondition}
              <CText numberOfLines={1} type={'B14'}>
                {strings.TermofUse}
              </CText>
              <CText numberOfLines={1}>{strings.and}</CText>
              <CText numberOfLines={1} type={'B14'}>
                {strings.PrivacyPolicy}
              </CText>
              <CText numberOfLines={1}>{strings.otherdes}</CText>
            </CText>
            <View style={localstyle.agreeStyle}>
              <Image source={images.Check} style={localstyle.CheckbtnStyle} />
              <CText numberOfLines={1}>{strings.Agree}</CText>
            </View>
            <CButton
              Title={strings.Next}
              ChangeBtnStyle={localstyle.btnStyle}
              onPress={onpressNextbtn}
              type={'B16'}
            />
          </View>

          <View style={localstyle.accountdetailStyle}>
            <CText
              numberOfLines={1}
              type={'R14'}
              style={localstyle.AccountStyle}>
              {strings.AlreadyAccount}
            </CText>
            <TouchableOpacity onPress={GoBackBtnHandle}>
              <CText numberOfLines={1} type={'B14'}>
                {strings.GoBack}
              </CText>
            </TouchableOpacity>
          </View>
        </View>
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
};
const localstyle = StyleSheet.create({
  container: {
    ...styles.mh15,
    ...styles.justifyBetween,
    height: '100%',
  },
  PasswordTitleStyle: {
    ...styles.mt10,
  },
  PasswordDesStyle: {
    color: colors.grayText,
    ...styles.mt15,
    ...styles.mb20,
  },
  PasswordTitle: {
    ...styles.mt20,
  },
  PasswordConfirmTitle: {
    ...styles.mt10,
  },
  inputRightIconCheckStyle: {
    ...styles.mr10,
    height: moderateScale(16),
    width: moderateScale(16),
  },
  btnhandle: {
    ...styles.flexRow,
    ...styles.center,
  },
  TextinputStyle: {
    ...styles.mb15,
  },
  termsStyle: {
    ...styles.mt20,
  },
  CheckbtnStyle: {
    height: moderateScale(24),
    width: moderateScale(24),
    ...styles.mr10,
  },
  agreeStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mt20,
  },
  btnStyle: {
    ...styles.mt40,
  },
  AccountStyle: {
    textAlign: 'center',
  },
  accountdetailStyle: {
    ...styles.flex,
    ...styles.center,
    ...styles.flexRow
  },
  securetextStyle: {
    ...styles.center,
    ...styles.mr10,
    height: moderateScale(24),
    width: moderateScale(24),
  },
  textStyle: {
    color: colors.red,
    ...styles.mv10,
  },
  emailStyle: {
    color: colors.green,
    ...styles.mv10,
  },
});
export default CreatePasswordScreen;
