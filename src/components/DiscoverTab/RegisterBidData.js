import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

//custom import
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import CHeader from '../common/CHeader';
import images from '../../assets/images';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import CButton from '../common/CButton';
import {TabNav} from '../../navigation/NavigationKeys';

export default function RegisterBidData({navigation}) {
  const MoveToNextScreen = () => {
    navigation.navigate(TabNav.Discover);
  };
  const MoveToGoBack = () => {
    navigation.navigate(TabNav.Discover);
  };
  const DetailsCard = ({img, text, placeHolder}) => {
    return (
      <View style={localStyle.creditStyle}>
        <View style={localStyle.maincontent}>
          <Image source={img} style={styles.mr10} />
          <View>
            <CText
              type={'M12'}
              numberOfLines={1}
              color={colors.grayText}
              style={localStyle.addressStyle}>
              {text}
            </CText>
            <CText type={'M12'} numberOfLines={1}>
              {placeHolder}
            </CText>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainer}>
      <View>
        <View style={localStyle.containerStyle}>
          <CHeader
            img={images.close}
            style={localStyle.headerImgStyle}
            onPress={MoveToGoBack}
          />
          <CText type={'B16'} numberOfLines={1}>
            {strings.RegistertoBid}
          </CText>
          <View />
        </View>
        <View style={localStyle.contentStyle}>
          <Image source={images.face} style={localStyle.imageStyle} />
          <View style={localStyle.infoStyle}>
            <CText
              type={'B14'}
              numberOfLines={1}
              style={localStyle.contentTitle}>
              {strings.TrippleFace}
            </CText>
            <CText type={'M12'} numberOfLines={1}>
              {strings.by}
              <CText type={'S12'} numberOfLines={1}>
                {strings.email}
              </CText>
            </CText>
          </View>
        </View>
        <CText type={'S16'} numberOfLines={1} style={localStyle.timeStyle}>
          {strings.time}
        </CText>
        <View style={localStyle.lineStyle} />
        <DetailsCard
          img={images.credit}
          text={strings.CreditCard}
          placeHolder={strings.PlaceholderCard}
        />
        <DetailsCard
          img={images.location}
          text={strings.BillingAddress}
          placeHolder={strings.billingAdd}
        />
      </View>
      <View>
        <View style={[localStyle.maincontent, styles.center]}>
          <AntDesign name={'checkcircle'} size={moderateScale(24)} />
          <CText type={'R12'} numberOfLines={1} color={colors.grayText}>
            {' '}
            {strings.Agreeto}
            <CText type={'S12'} numberOfLines={1}>
              {strings.ConditionSale}
            </CText>
          </CText>
        </View>
        <CButton
          Title={strings.CompleteRegistration}
          type={'B16'}
          ChangeBtnStyle={localStyle.btnStyle}
          onPress={MoveToNextScreen}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainer: {
    ...styles.mainContainerSurface,
    ...styles.mh15,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  containerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mb5,
  },
  headerImgStyle: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  contentStyle: {
    height: moderateScale(80),
    backgroundColor: colors.white,
    ...styles.mt15,
    ...styles.mb20,
    ...styles.flexRow,
    ...styles.aligncenter,
  },
  imageStyle: {
    height: moderateScale(80),
    width: moderateScale(80),
  },
  infoStyle: {
    ...styles.ph15,
  },
  contentTitle: {
    ...styles.mb5,
  },
  timeStyle: {
    textAlign: 'center',
  },
  lineStyle: {
    height: moderateScale(1),
    backgroundColor: colors.lightGray,
    ...styles.mt25,
    ...styles.mb20,
  },
  creditStyle: {
    height: moderateScale(74),
    borderColor: colors.lightGray,
    borderWidth: moderateScale(1),
    ...styles.rowSpaceBetween,
    ...styles.p10,
    ...styles.mv10,
  },
  maincontent: {
    ...styles.flexRow,
    ...styles.aligncenter,
  },
  colorStyle: {
    color: colors.grayText,
    ...styles.mr5,
  },
  btnStyle: {
    ...styles.mb10,
    ...styles.mt30,
  },
  addressStyle: {
    ...styles.mb5,
  },
});
