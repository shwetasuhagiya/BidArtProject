import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import CHeader from '../components/common/CHeader';
import images from '../assets/images';
import {colors, styles} from '../themes';
import CText from '../components/common/CText';
import {moderateScale} from '../common/constants';
import {ArtWorkList} from '../api/constant';
import CHorizontalView from '../components/CHorizontalView';
import CVerticalView from '../components/CVerticalView';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';

const FilterResult = ({navigation}) => {
  const [isHorizontalView, isSetHorizontalView] = useState(true);
  const [data, setData] = useState(true);
  const [search, setSearch] = useState(true);

  const onPressHorizontalView = () => {
    isSetHorizontalView(true);
  };
  const onPressVerticalView = () => {
    isSetHorizontalView(false);
  };

  const BacktoScreen = () => {
    navigation.replace(StackNav.TabNavigation);
  };

  const onPressClear = () => {
    setData(false);
  };
  const onPressClearData = () => {
    setSearch(false);
  };
  const HeaderBtn = () => {
    return (
      <View style={localStyle.iconStyle}>
        <TouchableOpacity onPress={onPressHorizontalView}>
          {isHorizontalView ? (
            <Image source={images.activeHorizonatal} />
          ) : (
            <Image source={images.horizonatal} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressVerticalView}>
          {!isHorizontalView ? (
            <Image source={images.activeVertical} />
          ) : (
            <Image source={images.vertical} />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  const renderArtListItem = ({item, index}) => {
    return isHorizontalView ? (
      <CHorizontalView item={item} index={index} navigation={navigation} />
    ) : (
      <CVerticalView item={item} index={index} navigation={navigation} />
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainer}>
      <CHeader
        img={images.arrowLeft}
        icon={images.filter}
        onPress={BacktoScreen}
      />
      <View style={localStyle.container}>
        <CText type={'B24'} numberOfLines={1}>
          {strings.Result}
        </CText>
        <HeaderBtn />
      </View>
      {data ? (
        <View style={localStyle.searchStyle}>
          <CText type={'M16'} numberOfLines={1}>
            {strings.SortbyLotNumberAscending}
          </CText>
          <TouchableOpacity onPress={onPressClear}>
            <Image source={images.close} />
          </TouchableOpacity>
        </View>
      ) : null}
      {search ? (
        <View style={[localStyle.searchStyle, localStyle.searchBottom]}>
          <CText type={'M16'} numberOfLines={1}>
            {strings.MediumWorkonPaper}
          </CText>
          <TouchableOpacity onPress={onPressClearData}>
            <Image source={images.close} />
          </TouchableOpacity>
        </View>
      ) : null}
      <FlatList
        data={[...ArtWorkList, ...ArtWorkList]}
        key={isHorizontalView ? 'one' : 'two'}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderArtListItem}
        showsVerticalScrollIndicator={false}
        numColumns={isHorizontalView ? 2 : 1}
      />
    </SafeAreaView>
  );
};
const localStyle = StyleSheet.create({
  mainContainer: {
    ...styles.mainContainerSurface,
    ...styles.mh20,
  },
  container: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mt15,
  },
  iconStyle: {
    width: moderateScale(72),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(1.5),
    borderColor: colors.lightGray,
    ...styles.justifyCenter,
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.ph10,
    backgroundColor: colors.white,
  },
  searchStyle: {
    width: moderateScale(275),
    height: moderateScale(32),
    backgroundColor: colors.borderColor,
    ...styles.rowSpaceBetween,
    ...styles.ph10,
    ...styles.mv10,
  },
  searchBottom: {
    width: moderateScale(225),
  },
});
export default FilterResult;
