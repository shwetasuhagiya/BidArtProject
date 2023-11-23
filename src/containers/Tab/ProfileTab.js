import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

//custom import
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import images from '../../assets/images';
import CButton from '../../components/common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';
import {LOGIN_TOKEN} from '../../utils/keys';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';

export default function ProfileTab({navigation}) {
  const SubmitWorkScreen = () => {
    navigation.navigate(StackNav.SubmitWork);
  };
  const MoveToScreen = () => {
    navigation.navigate(StackNav.WhisList);
  };
  const MoveToNextScreen = () => {
    navigation.navigate(StackNav.SettingAccount);
  };
  const MoveToPaymentScreen = () => {
    navigation.navigate(StackNav.Payment);
  };
  const MoveToSetting = () => {
    navigation.navigate(StackNav.Setting);
  };
  const onpressLogOut = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          AsyncStorage.removeItem(LOGIN_TOKEN).then(
            navigation.reset({
              index: 0,
              routes: [{name: StackNav.AuthNavigation}],
            }),
          );
        },
      },
    ]);
  };
  const RenderItems = ({title, icon, onPress, style}) => {
    return (
      <TouchableOpacity
        style={[localStyle.containerStyle, style]}
        onPress={onPress}>
        <CText type={'B16'} numberOfLines={1}>
          {title}
        </CText>
        <SimpleLineIcons name={icon} size={moderateScale(15)} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View style={localStyle.containerStyle}>
          <CText type={'B24'} numberOfLines={1}>
            {strings.Profile}
          </CText>
          <Ionicons
            name={'settings'}
            size={moderateScale(24)}
            onPress={MoveToSetting}
          />
        </View>
        <View style={localStyle.container}>
          <Image source={images.profileUser} style={localStyle.profileStyle} />
          <View style={localStyle.followStyle}>
            <CText type={'B18'} numberOfLines={1}>
              {strings.FullNamePlaceHolder}
            </CText>
            <CText
              type={'S14'}
              numberOfLines={1}
              color={colors.grayText}
              style={localStyle.emailStyle}>
              {strings.ProfileEmail}
            </CText>
            <View style={localStyle.boxstyle}>
              <CText type={'S16'} numberOfLines={1}>
                {strings.totalFollowers}{' '}
                <CText type={'S14'} numberOfLines={1} color={colors.grayText}>
                  {strings.followers}
                </CText>
              </CText>
              <View style={localStyle.lineStyle} />
              <CText type={'S16'} numberOfLines={1}>
                {strings.totalFollowing}{' '}
                <CText type={'S14'} numberOfLines={1} color={colors.grayText}>
                  {strings.following}
                </CText>
              </CText>
            </View>
          </View>
        </View>
        <RenderItems title={strings.MyWork} icon={'arrow-right'} />
        <View style={localStyle.containerStyle}>
          <Image source={images.work1} style={localStyle.imgStyle} />
          <Image source={images.work2} style={localStyle.imgStyle} />
          <TouchableOpacity
            style={localStyle.borderStyle}
            onPress={SubmitWorkScreen}>
            <SimpleLineIcons
              name={'plus'}
              size={moderateScale(15)}
              style={styles.mb5}
            />
            <CText numberOfLines={1}>{strings.SubmitWork}</CText>
          </TouchableOpacity>
        </View>
        <RenderItems
          title={strings.Whislist}
          icon={'arrow-right'}
          onPress={MoveToScreen}
        />
        <View style={localStyle.verticallineStyle} />
        <RenderItems
          title={strings.SettingAccount}
          icon={'arrow-right'}
          onPress={MoveToNextScreen}
        />
        <View style={localStyle.verticallineStyle} />
        <RenderItems
          title={strings.Payment}
          icon={'arrow-right'}
          onPress={MoveToPaymentScreen}
          style={localStyle.paymentStyle}
        />
      </KeyBoardAvoidWrapper>
      <CButton
        Title={strings.LogOut}
        type={'B16'}
        ChangeTxtStyle={localStyle.ChangeTextStyle}
        ChangeBtnStyle={localStyle.ChangeBtnStyle}
        onPress={onpressLogOut}
      />
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainerStyle: {
    ...styles.mainContainerSurface,
    ...styles.mh15,
    ...styles.justifyBetween,
  },
  containerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mb5,
    ...styles.pt15,
  },
  profileStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
  container: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.mv25,
  },
  boxstyle: {
    width: moderateScale(211),
    height: moderateScale(40),
    borderWidth: moderateScale(1),
    borderColor: colors.lightGray,
    ...styles.rowSpaceBetween,
    ...styles.ph10,
  },
  lineStyle: {
    width: moderateScale(1),
    height: moderateScale(24),
    backgroundColor: colors.lightGray,
  },
  followStyle: {
    ...styles.ml15,
  },
  emailStyle: {
    ...styles.mv10,
  },
  imgStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
  borderStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderColor: colors.black,
    borderWidth: moderateScale(1),
    ...styles.aligncenter,
    ...styles.justifyCenter,
  },
  verticallineStyle: {
    height: moderateScale(2),
    backgroundColor: colors.GrayPrimary,
    ...styles.mv10,
  },
  ChangeTextStyle: {
    color: colors.black,
  },
  ChangeBtnStyle: {
    backgroundColor: colors.white,
    borderWidth: moderateScale(1),
    borderColor: colors.black,
    ...styles.mb20,
  },
  paymentStyle: {
    ...styles.mb20,
  },
});
