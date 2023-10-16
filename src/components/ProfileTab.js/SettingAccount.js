import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import React from 'react';

//local import
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors, styles} from '../../themes';
import CHeader from '../common/CHeader';
import strings from '../../i18n/strings';
import images from '../../assets/images';
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';
import CTextInput from '../common/CTextInput';
import {Google, Trash} from '../../assets/svg';
import CButton from '../common/CButton';
import {TabNav} from '../../navigation/NavigationKeys';

export default function SettingAccount({navigation}) {
  const MoveToBackScreen = () => {
    navigation.navigate(TabNav.Profile);
  };
  const RenderItems = ({title, text, style, value, onChangeText, color}) => {
    return (
      <View style={localStyle.textInputStyle}>
        <CText type={'M14'} numberOfLines={1}>
          {title}
        </CText>
        <CTextInput
          placeholderText={text}
          changeViewStyle={style}
          value={value}
          onChangeText={onChangeText}
          color={color}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View style={localStyle.containerStyle}>
          <CHeader img={images.arrowLeft} onPress={MoveToBackScreen} />
          <CText type={'B16'} numberOfLines={1}>
            {strings.SettingAccount}
          </CText>
          <View />
        </View>
        <View style={localStyle.parentStyle}>
          <Image source={images.profileUser} style={localStyle.imageStyle} />
          <SimpleLineIcons
            name={'camera'}
            size={moderateScale(24)}
            style={localStyle.iconStyle}
          />
        </View>
        <RenderItems
          text={strings.FullNamePlaceHolder}
          title={strings.FullName}
        />
        <RenderItems
          text={strings.UsernamePlaceHolder}
          title={strings.Username}
        />
        <RenderItems text={strings.Emailtext} title={strings.Email} />
        <CText type={'M14'} numberOfLines={1} style={localStyle.textInputStyle}>
          {strings.Account}
        </CText>
        <View style={localStyle.contentStyle}>
          <Google style={localStyle.imgStyle} />
          <View>
            <CText
              type={'S14'}
              numberOfLines={1}
              style={localStyle.googleStyle}>
              {strings.GoogleAccount}
            </CText>
            <CText type={'M12'} numberOfLines={1}>
              {strings.GoogleConnet}
            </CText>
          </View>
        </View>
        <View style={localStyle.trashStyle}>
          <Trash
            width={moderateScale(16)}
            height={moderateScale(16)}
            style={localStyle.imgStyle}
          />
          <CText type={'M12'} numberOfLines={1}>
            {strings.DeleteAccount}
          </CText>
        </View>
        <CButton
          Title={strings.SaveChange}
          type={'B16'}
          ChangeBtnStyle={localStyle.btnStyle}
          ChangeTxtStyle={localStyle.ChangeTxtStyle}
          onPress={MoveToBackScreen}
        />
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainerStyle: {
    ...styles.mainContainerSurface,
    ...styles.mh15,
  },
  containerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mb5,
  },
  imageStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
  parentStyle: {
    ...styles.center,
    ...styles.mt20,
    ...styles.mb10,
  },
  iconStyle: {
    position: 'absolute',
    color: colors.white,
  },
  textInputStyle: {
    ...styles.mt20,
  },
  contentStyle: {
    height: moderateScale(72),
    borderWidth: moderateScale(1.5),
    borderColor: colors.borderColor,
    ...styles.flexRow,
    ...styles.ph15,
    ...styles.aligncenter,
    ...styles.mv10,
  },
  imgStyle: {
    ...styles.mr10,
  },
  googleStyle: {
    ...styles.mb5,
  },
  trashStyle: {
    ...styles.flexRow,
  },
  btnStyle: {
    ...styles.mb10,
    ...styles.mt30,
    backgroundColor: colors.lightGray,
  },
  ChangeTxtStyle: {
    color: colors.light400,
  },
});
