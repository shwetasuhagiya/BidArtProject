import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';

//custom imports
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import CTextInput from '../../components/common/CTextInput';
import strings from '../../i18n/strings';
import images from '../../assets/images';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/NavigationKeys';
import StepIndicator from '../../components/StepIndicator';

const FullNameScreen = ({navigation}) => {
  const [name, Setname] = useState('');
  const [FullName, SetFullName] = useState('');

  const onChangeName = item => {
    Setname(item);
    let name = '[a-zA-Z]+\\.?';
    if (item.match(name)) {
      SetFullName('');
    } else {
      SetFullName('Enter a valid Full Name');
    }
  };
  const onpressNextbtn = () => {
    if (name === '') {
      SetFullName('please enter your FullName');
    } else {
      navigation.navigate(AuthNav.FollowArtistScreen);
    }
  };
  return (
    <SafeAreaView style={styles.mainContainerSurface}>
      <KeyBoardAvoidWrapper
        contentContainerStyle={styles.flexG1}></KeyBoardAvoidWrapper>
      <StepIndicator step={2} />
      <View style={localstyle.container}>
        <View>
          <CText numberOfLines={1}  style={localstyle.PasswordTitleStyle} type={'B24'}>
            {strings.FullNameTitle}
          </CText>
          <CText numberOfLines={2}  style={localstyle.PasswordDesStyle} type={'M16'}>
            {strings.FullNameDes}
          </CText>
          <CText numberOfLines={1}  type={'M14'} style={localstyle.PasswordTitle}>
            {strings.FullName}
          </CText>
          <CTextInput
            placeholderText={strings.FullNamePlaceHolderText}
            value={name}
            onChangeText={onChangeName}
          />
          <CText numberOfLines={1}  style={localstyle.textStyle}>{FullName}</CText>
        </View>
        <View style={styles.mh15}>
          <CText numberOfLines={2}  style={localstyle.termsStyle} type={'R14'}>
            {strings.temrsAndCondition}
            <CText numberOfLines={1}  type={'B14'}>{strings.TermofUse}</CText>
            <CText numberOfLines={1} >{strings.and}</CText>
            <CText numberOfLines={1}  type={'B14'}>{strings.PrivacyPolicy}</CText>
            <CText numberOfLines={1} >{strings.otherdes}</CText>
          </CText>
          <View style={localstyle.agreeStyle}>
            <Image source={images.Check} style={localstyle.CheckbtnStyle} />
            <CText numberOfLines={1} >{strings.Agree}</CText>
          </View>
          <CButton
            Title={strings.Next}
            ChangeBtnStyle={localstyle.btnStyle}
            onPress={onpressNextbtn}
            type={'B16'}
          />
        </View>
        <View />
      </View>
    </SafeAreaView>
  );
};
const localstyle = StyleSheet.create({
  container: {
    ...styles.mh15,
    height: '100%',
    ...styles.justifyBetween,
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
  termsStyle: {
    width: moderateScale(300),
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
  textStyle: {
    color: colors.red,
    ...styles.mv10,
  },
});
export default FullNameScreen;
