import {View, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';

//custom import
import {colors, styles} from '../themes';
import {moderateScale} from '../common/constants';
import CText from './common/CText';
import strings from '../i18n/strings';
import CButton from './common/CButton';

const CHorizontalView = ({item}) => {
  return (
    <SafeAreaView>
      <View style={localStyle.container}>
        <Image source={item.image} style={localStyle.imageStyle} />
        <Image source={item.timeImage} style={localStyle.absoluteImage} />
        <View style={localStyle.contentStyle}>
          <CText numberOfLines={1} type={'B14'}>
            {item.title}
          </CText>
          <CText numberOfLines={1} type={'M12'} style={localStyle.emailStyle}>
            {strings.by} <CText type={'S12'}>{item.email}</CText>
          </CText>
          <View style={localStyle.lineHeightStyle} />
          <View style={localStyle.flexStyle}>
            <CText numberOfLines={1}>{item.CurrentBid}</CText>
            <CText numberOfLines={1}>{item.price}</CText>
          </View>
          <CButton
            Title={strings.PlaceBid}
            ChangeBtnStyle={localStyle.btnStyle}
            type={'S12'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const localStyle = StyleSheet.create({
  imageStyle: {
    width: moderateScale(156),
    height: moderateScale(156),
  },
  container: {
    width: moderateScale(160),
    height: moderateScale(287),
    backgroundColor: colors.white,
    ...styles.mt15,
    ...styles.mr15,
  },
  contentStyle: {
    ...styles.ph15,
    ...styles.mv10,
    width: moderateScale(156),
  },
  lineHeightStyle: {
    width: moderateScale(130),
    height: moderateScale(1),
    backgroundColor: colors.lightGray,
  },
  emailStyle: {
    ...styles.mv5,
  },
  flexStyle: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mv10,
  },
  btnStyle: {
    height: moderateScale(32),
  },
  absoluteImage: {
    height: moderateScale(26),
    width: moderateScale(92),
    position: 'absolute',
    top: moderateScale(8),
    left: moderateScale(8),
  },
});
export default CHorizontalView;
