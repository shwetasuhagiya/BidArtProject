import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

//local import
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../common/constants';
import CHeader from '../common/CHeader';
import {colors, styles} from '../../themes';
import images from '../../assets/images';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import CTextInput from '../common/CTextInput';
import KeyBoardAvoidWrapper from '../common/KeyBoardAvoidWrapper';
import {RecentSearchData} from '../../api/constant';
import { StackNav } from '../../navigation/NavigationKeys';

export default function SearchPage({navigation}) {
  const [search,SetSearch] = useState('')
  const Setsearchicon=(item)=>{
    SetSearch(item)
  }
  const MovetoTrending = () => {
    navigation.navigate(StackNav.TrendingArtist);
  };
  const LeftIconTextinput = () => {
    return (
      <Ionicons
        name={'search-outline'}
        size={moderateScale(22)}
        style={localStyle.searchIcon}
      />
    );
  };
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
      <TouchableOpacity
        style={[localStyle.mainwapperStyle, style]}
        onPress={() => navigation.navigate(StackNav.SearchResult,{title:title})}>
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
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View style={localStyle.containerStyle}>
          <CHeader img={images.arrowLeft} onPress={MovetoTrending}/>
          <CText type={'B16'} numberOfLines={1}>
            {strings.Search}
          </CText>
          <View />
        </View>
        <CTextInput
          LeftIcon={LeftIconTextinput}
          placeholderText={strings.ArtistPlaceholderText}
          value={search}
          onChangeText={Setsearchicon}
        />
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
          <TrendingSearchItem
            title={strings.Love}
            style={localStyle.LoveStyle}
          />
        </View>
        <CText
          type={'B14'}
          numberOfLines={1}
          style={localStyle.TrendingSearchStyle}>
          {strings.RecentSearch}
        </CText>
        <FlatList
          data={RecentSearchData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
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
    ...styles.mb5
  },
  searchIcon: {
    ...styles.ml10,
  },
  flexContentItem: {
    ...styles.flexRow,
    ...styles.mt15,
  },
  flexContentItems: {
    ...styles.flexRow,
    ...styles.mt15,
    ...styles.mb10,
    ...styles.justifyBetween,
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
});
