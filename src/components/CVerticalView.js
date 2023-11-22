import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

//custom import
import {colors, styles} from '../themes';
import CText from './common/CText';
import CButton from './common/CButton';
import {moderateScale} from '../common/constants';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';

const CVerticalView = ({item, navigation}) => {
  const onpressRegister = () => {
    navigation.navigate(StackNav.RegisterBid);
  };
    const onpressDetail = item => {
      navigation.navigate(StackNav.DetailArt, {
        image: item.image,
        title: item.title,
        Creator: item.creatorImage,
      });
    };
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={localStyle.containerStyle}
        onPress={() => onpressDetail(item)}>
        <View>
          <Image source={item.image} style={localStyle.imageStyle} />
          <Image source={item.timeImage} style={localStyle.timeImageStyle} />
        </View>
        <View style={localStyle.contentStyle}>
          <CText type={'B14'} numberOfLines={1}>
            {item.title}
          </CText>
          <CText type={'M12'} style={localStyle.emailStyle} numberOfLines={1}>
            {strings.by}
            <CText type={'S12'}>{item.email}</CText>
          </CText>
          <View style={localStyle.lineStyle}></View>
          <View style={localStyle.priceStyle}>
            <CText type={'M12'} numberOfLines={1}>
              {item.CurrentBid}
            </CText>
            <CText type={'S14'} numberOfLines={1}>
              {item.price}
            </CText>
          </View>
          <CButton
            Title={strings.PlaceBid}
            ChangeBtnStyle={localStyle.btnStyle}
            type={'S12'}
            onPress={onpressRegister}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const localStyle = StyleSheet.create({
  imageStyle: {
    width: moderateScale(140),
    height: moderateScale(140),
  },
  timeImageStyle: {
    width: moderateScale(92),
    height: moderateScale(26),
    position: 'absolute',
    top: moderateScale(8),
    left: moderateScale(8),
  },
  containerStyle: {
    ...styles.flexRow,
    backgroundColor: colors.white,
    ...styles.mt15,
  },
  contentStyle: {
    ...styles.ph15,
    ...styles.mv15,
    // width: moderateScale(327),
  },
  btnStyle: {
    width: moderateScale(155),
    height: moderateScale(32),
    ...styles.mt10,
  },
  priceStyle: {
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
  lineStyle: {
    width: moderateScale(160),
    height: moderateScale(1),
    backgroundColor: colors.lightGray,
    ...styles.mv10,
  },
  emailStyle: {
    ...styles.mt5,
  },
});
export default CVerticalView;
