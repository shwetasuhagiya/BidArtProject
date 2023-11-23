import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

//custom import
import KeyBoardAvoidWrapper from '../common/KeyBoardAvoidWrapper';
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import {SearchResultData, searchData} from '../../api/constant';
import CButton from '../common/CButton';

export default function SearchResult() {
  const [SelectedItem, SetSelectedItem] = useState(0);

  const RenderMainItems = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => SetSelectedItem(item.id)}
        style={[
          localStyle.bottomStyle,
          SelectedItem === item.id ? localStyle.ActiveStyle : null,
        ]}>
        <CText
          type={SelectedItem === item.id ? 'B16' : 'B16'}
          style={[
            SelectedItem === item.id ? null : localStyle.OtherFontcolor,
            localStyle.FontStyle,
          ]}>
          {item.name}
        </CText>
      </TouchableOpacity>
    );
  };

  const renderItemSearch = ({item}) => {
    return (
      <View style={localStyle.mainBoxContainer}>
        <Image source={item.image} style={localStyle.imageStyle} />
        <Image source={item.timeImage} style={localStyle.absoluteImage} />
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
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainer}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View style={localStyle.contentStyle}>
          {searchData.map(item => {
            return <RenderMainItems item={item} />;
          })}
        </View>
        <CText type={'M16'} numberOfLines={1}>
          {strings.Artworkresult}
        </CText>
        <FlatList
          data={SearchResultData}
          renderItem={renderItemSearch}
          numColumns={2}
          key={2}
          scrollEnabled
          showsVerticalScrollIndicator={false}
        />
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainer: {
    ...styles.mainContainerSurface,
    ...styles.mh10,
  },
  containerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mb5,
  },
  searchIcon: {
    ...styles.ml10,
  },
  bottomStyle: {
    borderBottomWidth: 1,
    borderColor: colors.GrayPrimary,
    width: moderateScale(120),
    ...styles.flex,
    ...styles.center,
  },
  ActiveStyle: {
    borderColor: colors.black,
  },
  OtherFontcolor: {
    color: colors.grayText,
  },
  FontStyle: {
    ...styles.mb15,
  },
  contentStyle: {
    ...styles.rowSpaceEvenly,
    ...styles.mt15,
    ...styles.mb10,
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
  absoluteImage: {
    height: moderateScale(26),
    width: moderateScale(92),
    position: 'absolute',
    top: moderateScale(8),
    left: moderateScale(8),
  },
});
