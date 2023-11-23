import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

//custom import
import CText from '../common/CText';
import strings from '../../i18n/strings';
import {ActiveBidFiled} from '../../api/constant';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';

export default function BidsDetail({navigation}) {
  const onpressDetail = item => {
    navigation.navigate(StackNav.DetailArt, {
      image: item.image,
      title: item.title,
    });
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={localStyle.container}
        onPress={() => onpressDetail(item)}>
        <Image source={item.image} style={localStyle.imageStyle} />
        <View style={localStyle.bottomContainer}>
          <CText numberOfLines={1} type={'B14'} style={localStyle.contentStyle}>
            {item.name}
          </CText>
          <CText numberOfLines={1} type={'M12'}>
            {strings.by}
            <CText numberOfLines={1} type={'S12'}>
              {item.email}
            </CText>
          </CText>
          <View style={localStyle.lineStyle} />
          <CText numberOfLines={2} type={'M12'} color={colors.grayText}>
            {item.discription}
          </CText>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <CText type={'S12'} style={styles.mt10} numberOfLines={1}>
        {strings.ActiveBid}
      </CText>
      <FlatList data={ActiveBidFiled} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  container: {
    ...styles.mt15,
    height: moderateScale(140),
    backgroundColor: colors.white,
    ...styles.flexRow,
  },
  imageStyle: {
    height: moderateScale(140),
    width: moderateScale(140),
  },
  bottomContainer: {
    ...styles.p15,
    width: moderateScale(187),
  },
  contentStyle: {
    ...styles.mb5,
  },
  lineStyle: {
    width: moderateScale(175),
    height: moderateScale(1),
    backgroundColor: colors.GrayPrimary,
    ...styles.mv15,
  },
});
