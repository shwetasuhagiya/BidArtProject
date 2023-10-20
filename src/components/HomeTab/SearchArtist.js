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
import {RecentSearchData} from '../../api/constant';
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../common/constants';

export default function SearchArtist() {
  const RecentSearch = ({title, style}) => {
    return (
      <View style={[localStyle.mainwapperStyle, style]}>
        <CText type={'M16'} numberOfLines={1}>
          {title}
        </CText>
        <Ionicons name={'close'} size={moderateScale(16)} />
      </View>
    );
  };

  const TrendingSearchItem = ({title, style}) => {
    return (
      <TouchableOpacity style={[localStyle.mainwapperStyle, style]}>
        <CText type={'M16'} numberOfLines={1}>
          {title}
        </CText>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={localStyle.boxStyleContainer}>
        <Image source={item.images} style={localStyle.imageStyle} />
        <View style={localStyle.contentStyle}>
          <CText type={'B14'} numberOfLines={1} style={localStyle.lineStyle}>
            {item.name}
          </CText>
          <CText type={'M12'} numberOfLines={1} color={colors.grayText}>
            {strings.by}{' '}
            <CText type={'S12'} numberOfLines={1}>
              {item.email}
            </CText>
          </CText>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={localStyle.flexContentItems}>
        <CText type={'B14'} numberOfLines={1}>
          {strings.RecentSearch}
        </CText>
        <CText type={'S14'} numberOfLines={1} color={colors.grayText}>
          {strings.clearAll}
        </CText>
      </View>
      <View style={localStyle.flexContentItem}>
        <RecentSearch title={strings.Sculpture} />
        <RecentSearch title={strings.Statue} style={localStyle.statueStyle} />
        <RecentSearch title={strings.Wall} style={localStyle.WallStyle} />
      </View>
      <View style={localStyle.flexContentItem}>
        <RecentSearch
          title={strings.AcrylicPaint}
          style={localStyle.AcrylicPaintStyle}
        />
        <RecentSearch
          title={strings.Graffiti}
          style={localStyle.GraffitiStyle}
        />
      </View>
      <CText
        type={'B14'}
        numberOfLines={1}
        style={localStyle.TrendingSearchStyle}>
        {strings.TrendingSearch}
      </CText>
      <View style={localStyle.flexContentItem}>
        <TrendingSearchItem
          title={strings.Flowers}
          style={localStyle.folwerStyle}
        />
        <TrendingSearchItem
          title={strings.Wallpapers}
          style={localStyle.WallpapersStyle}
        />
        <TrendingSearchItem
          title={strings.Background}
          style={localStyle.BackgroundStyle}
        />
      </View>
      <View style={localStyle.flexContentItem}>
        <TrendingSearchItem
          title={strings.Happy}
          style={localStyle.HappyStyle}
        />
        <TrendingSearchItem title={strings.Love} style={localStyle.LoveStyle} />
      </View>
      <CText
        type={'B14'}
        numberOfLines={1}
        style={localStyle.TrendingSearchStyle}>
        {strings.RecentSeartch}
      </CText>
      <FlatList
        data={RecentSearchData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  boxStyleContainer: {
    height: moderateScale(66),
    backgroundColor: colors.white,
    ...styles.mv10,
    ...styles.flexRow,
    ...styles.aligncenter,
  },
  imageStyle: {
    width: moderateScale(66),
    height: moderateScale(66),
  },
  contentStyle: {
    ...styles.ph15,
  },
  lineStyle: {
    ...styles.mb5,
  },
  mainwapperStyle: {
    width: moderateScale(120),
    height: moderateScale(32),
    backgroundColor: colors.GrayPrimary,
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.aligncenter,
    ...styles.ph10,
    ...styles.mh10,
  },
  statueStyle: {
    width: moderateScale(99),
  },
  WallStyle: {
    width: moderateScale(81),
  },
  AcrylicPaintStyle: {
    width: moderateScale(138),
  },
  GraffitiStyle: {
    width: moderateScale(101),
  },
  TrendingSearchStyle: {
    ...styles.mt30,
    ...styles.mb10,
  },
  folwerStyle: {
    width: moderateScale(79),
  },
  WallpapersStyle: {
    width: moderateScale(106),
  },
  BackgroundStyle: {
    width: moderateScale(110),
  },
  HappyStyle: {
    width: moderateScale(72),
  },
  LoveStyle: {
    width: moderateScale(57),
  },
  flexContentItems: {
    ...styles.flexRow,
    ...styles.mt15,
    ...styles.mb10,
    ...styles.justifyBetween,
  },
  flexContentItem: {
    ...styles.flexRow,
    ...styles.mt15,
  },
});
