import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

//custom import
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import CHeader from '../common/CHeader';
import images from '../../assets/images';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import CButton from '../common/CButton';
import {StackNav, TabNav} from '../../navigation/NavigationKeys';
import { CheckCircle, Circle } from '../../assets/svg';

export default function RegisterBid({navigation}) {
   const [agreeBtn, setAgreeBtn] = useState(false);
  const MoveToNextScreen = () => {
    navigation.navigate(StackNav.AddCreditCard);
  };
  const MovetoBackScreen = () => {
    navigation.goBack();
  };
  const MovetoBillingScreen = () => {
    navigation.navigate(StackNav.AddBillingAddress);
  };
  const MoveToNext = () => {
    navigation.navigate(TabNav.Home);
  };
  const onPressCheckbtn = () => {
    setAgreeBtn(!agreeBtn);
  };
  const DetailsCard = ({img, text, onPress, data}) => {
    return (
      <TouchableOpacity style={localStyle.creditStyle} onPress={onPress}>
        <View style={localStyle.maincontent}>
          <Image source={img} style={styles.mr10} />
          <View>
            <CText>{text}</CText>
          </View>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Image source={images.addCircle} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainer}>
      <View>
        <View style={localStyle.containerStyle}>
          <CHeader
            img={images.close}
            style={localStyle.headerImgStyle}
            onPress={MovetoBackScreen}
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
          onPress={MoveToNextScreen}
        />
        <DetailsCard
          img={images.location}
          text={strings.BillingAddress}
          onPress={MovetoBillingScreen}
        />
      </View>
      <View>
        <TouchableOpacity
          style={[localStyle.maincontent, styles.center]}
          onPress={onPressCheckbtn}>
          {agreeBtn ? <CheckCircle /> : <Circle />}
          <CText type={'R12'} numberOfLines={1} color={colors.grayText}>
            {' '}
            {strings.Agreeto}
            <CText type={'S12'} numberOfLines={1}>
              {' '}
              {strings.ConditionSale}
            </CText>
          </CText>
        </TouchableOpacity>
        <CButton
          Title={strings.CompleteRegistration}
          type={'B16'}
          ChangeBtnStyle={localStyle.btnStyle}
          onPress={MoveToNext}
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
    height: moderateScale(56),
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
    backgroundColor: colors.black,
    ...styles.mb10,
    ...styles.mt30,
  },
});
