import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {WorkList} from '../../api/constant';
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import CButton from '../common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';

export default function WorksDetail({navigation}) {
  const onpressRegister = () => {
    navigation.navigate(StackNav.RegisterBid);
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={localStyle.mainBoxContainer}
        onPress={() =>
          navigation.navigate(StackNav.DetailArt, {
            image: item.image,
            title: item.title,
            Creator: item.creatorImage,
          })
        }>
        <Image source={item.image} style={localStyle.imageStyle} />
        <View style={localStyle.mainContentStyle}>
          <CText type={'B14'} numberOfLines={1}>
            {item.title}
          </CText>
          <CText type={'M12'} numberOfLines={1} style={localStyle.emailStyle}>
            {strings.by}{' '}
            <CText type={'S12'} numberOfLines={1}>
              {item.email}
            </CText>
          </CText>
          <View style={localStyle.lineHeightStyle} />
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
            ChangeBtnStyle={localStyle.ChangeBtnStyle}
            onPress={onpressRegister}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={WorkList}
        renderItem={renderItem}
        key={2}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  container: {
    height: moderateScale(251),
    width: moderateScale(156),
    ...styles.mr20,
    backgroundColor: colors.white,
    ...styles.mv10,
  },
  mainBoxContainer: {
    width: moderateScale(156),
    height: moderateScale(287),
    backgroundColor: colors.white,
    ...styles.mt15,
    ...styles.mr20,
  },
  imageStyle: {
    width: moderateScale(156),
    height: moderateScale(156),
  },
  mainContentStyle: {
    ...styles.p10,
  },
  lineHeightStyle: {
    width: moderateScale(140),
    height: moderateScale(1),
    backgroundColor: colors.GrayPrimary,
  },
  emailStyle: {
    ...styles.mv5,
  },
  priceStyle: {
    ...styles.rowSpaceBetween,
    ...styles.mv10,
  },
  ChangeBtnStyle: {
    width: moderateScale(140),
    height: moderateScale(32),
  },
});
