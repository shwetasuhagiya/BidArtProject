import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';

//custom import
import CHeader from '../common/CHeader';
import images from '../../assets/images';
import {colors, styles} from '../../themes';
import {deviceWidth, moderateScale} from '../../common/constants';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import CButton from '../common/CButton';
import {StackNav, TabNav} from '../../navigation/NavigationKeys';

export default function DetailArt({route, navigation}) {
  const {image, title} = route.params;
  const MoveToBackScreen = () => {
    navigation.navigate(TabNav.Discover);
  };
  const MoveToRegister = () => {
    navigation.navigate(StackNav.RegisterBid);
  };
  return (
    <SafeAreaView style={localStyle.mainContainer}>
      <View style={localStyle.containerStyle}>
        <CHeader img={images.arrowLeft} onPress={MoveToBackScreen} />
        <View style={localStyle.bookmarkStyle}>
          <Image source={images.share} style={styles.mr10} />
          <Image source={images.BookMark} />
        </View>
      </View>
      <Image source={image} style={localStyle.imgStyle} />
      <CText type={'B18'} numberOfLines={1}>
        {title}
      </CText>
      <View style={localStyle.contentStyle}>
        <View style={localStyle.bookmarkStyle}>
          <Image source={images.user5} style={localStyle.imagestyle} />
          <View>
            <CText type={'M12'} numberOfLines={1} color={colors.grayText}>
              {strings.Creator}
            </CText>
            <CText type={'S14'} numberOfLines={1}>
              {strings.OliverArtworthly}
            </CText>
          </View>
        </View>
        <CButton
          type={'M14'}
          numberOfLines={1}
          Title={strings.follow}
          ChangeBtnStyle={localStyle.btnStyle}
          ChangeTxtStyle={localStyle.ChangeTextStyle}
        />
      </View>
      <CText type={'M16'} numberOfLines={3} color={colors.grayText}>
        {strings.detailArt}{' '}
        <CText type={'S16'} numberOfLines={1}>
          {strings.learnmore}
        </CText>
      </CText>
      <CButton
        Title={strings.RegistertoBid}
        type={'B16'}
        ChangeBtnStyle={localStyle.ChangeButtonStyle}
        onPress={MoveToRegister}
      />
      <CButton
        Title={strings.ContactGallery}
        type={'B16'}
        ChangeTxtStyle={localStyle.ChangeTextStyle}
        ChangeBtnStyle={localStyle.ChangeBtnStyle}
      />
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainer: {
    ...styles.mainContainerSurface,
    ...styles.mh15,
  },
  containerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mb5,
  },
  bookmarkStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
  },
  imgStyle: {
    height: moderateScale(327),
    width: deviceWidth - 35,
    ...styles.mv15,
  },
  contentStyle: {
    ...styles.rowSpaceBetween,
    ...styles.mv20,
  },
  btnStyle: {
    width: moderateScale(87),
    height: moderateScale(36),
    backgroundColor: colors.white,
    borderWidth: moderateScale(1),
    borderColor: colors.black,
  },
  ChangeTextStyle: {
    color: colors.black,
  },
  imagestyle: {
    ...styles.mr10,
  },
  ChangeBtnStyle: {
    backgroundColor: colors.white,
    borderWidth: moderateScale(1),
    borderColor: colors.black,
  },
  ChangeButtonStyle: {
    ...styles.mv15,
  },
});
