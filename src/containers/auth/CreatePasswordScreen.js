import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {colors, styles} from '../../themes';
import {deviceWidth, moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';
import CText from '../../components/common/CText';
import images from '../../assets/images';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/NavigationKeys';
import StepIndicator from '../../components/StepIndicator';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';

const CreatePasswordScreen = ({navigation}) => {
  const [password, SetPassword] = useState('');
  const [ConfirmPassword, SetConfirmPassword] = useState('');

  const GoBackBtnHandle = () => {
    navigation.navigate(AuthNav.LoginScreen);
  };
  const onChangePassword = item => {
    SetPassword(item);
  };
  const onConfirmPassword = item => {
    SetConfirmPassword(item);
  };
  const onpressNextbtn = () => {
    navigation.navigate(AuthNav.FullNameScreen);
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
            <CText style={localstyle.PasswordTitleStyle} type={'B24'}>
              {strings.PasswordTitle}
            </CText>
            <CText style={localstyle.PasswordDesStyle} type={'M16'}>
              {strings.PasswordDes}
            </CText>
            <CText type={'M14'} style={localstyle.PasswordTitle}>
              {strings.NewPassword}
            </CText>
            <CTextInput
              placeholderText={strings.PasswordPlaceHolderText}
              value={password}
              onChangeText={onChangePassword}
              isSecure
              RightIcon={RightIcon}
            />
            <CText style={localstyle.PasswordConfirmTitle} type={'M14'}>
              {strings.ConfirmPassword}
            </CText>
            <CTextInput
              placeholderText={strings.PasswordPlaceHolderText}
              value={ConfirmPassword}
              onChangeText={onConfirmPassword}
              secureTextEntry={true}
              isSecure
              RightIcon={() => (
                <View style={localstyle.btnhandle}>
                  <TouchableOpacity>
                    <Image
                      source={images.Check}
                      style={localstyle.inputRightIconCheckStyle}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
            <CText style={localstyle.termsStyle} type={'R14'}>
              {strings.temrsAndCondition}
              <CText type={'B14'}>{strings.TermofUse}</CText>
              <CText>{strings.and}</CText>
              <CText type={'B14'}>{strings.PrivacyPolicy}</CText>
              <CText>{strings.otherdes}</CText>
            </CText>
            <View style={localstyle.agreeStyle}>
              <Image source={images.Check} style={localstyle.CheckbtnStyle} />
              <CText>{strings.Agree}</CText>
            </View>
            <CButton
              Title={strings.Next}
              ChangeBtnStyle={localstyle.btnStyle}
              onPress={onpressNextbtn}
            />
          </View>

          <View style={localstyle.accountdetailStyle}>
            <CText type={'R14'} style={localstyle.AccountStyle}>
              {strings.AlreadyAccount}
              <CText type={'B14'} onPress={GoBackBtnHandle}>
                {strings.GoBack}
              </CText>
            </CText>
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
    ...styles.mb10,
  },
  PasswordConfirmTitle: {
    ...styles.mt20,
    ...styles.mb10,
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
  },
});
export default CreatePasswordScreen;
