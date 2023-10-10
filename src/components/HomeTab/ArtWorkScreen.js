import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';

// custom import
import {colors, styles} from '../../themes';
import images from '../../assets/images';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import {ArtWorkList} from '../../api/constant';
import CHorizontalView from '../CHorizontalView';
import CVerticalView from '../CVerticalView';
import CHeader from '../common/CHeader';
import CText from '../common/CText';
import {StackNav} from '../../navigation/NavigationKeys';
import FilterArtWork from '../modals/FilterArtWork';

const ArtWorkScreen = ({navigation}) => {
  const [isHorizontalView, isSetHorizontalView] = useState(true);
  const FilterRef = useRef(null);

  const onPressHorizontalView = () => {
    isSetHorizontalView(true);
  };
  const onPressVerticalView = () => {
    isSetHorizontalView(false);
  };

  const BacktoScreen = () => {
    navigation.replace(StackNav.TabNavigation);
  };
  const onPressFilter = () => FilterRef.current.show();

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
      <CHorizontalView item={item} index={index} />
    ) : (
      <CVerticalView item={item} index={index} />
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <CHeader
        img={images.arrowLeft}
        icon={images.filter}
        onPress={BacktoScreen}
        IconPress={onPressFilter}
      />
      <View style={localStyle.container}>
        <CText type={'B24'} numberOfLines={1}>
          {strings.PopularArtwork}
        </CText>
        <HeaderBtn />
      </View>
      <FlatList
        data={[...ArtWorkList, ...ArtWorkList]}
        key={isHorizontalView ? 'one' : 'two'}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderArtListItem}
        showsVerticalScrollIndicator={false}
        numColumns={isHorizontalView ? 2 : 1}
      />
      <FilterArtWork sheetRef={FilterRef} />
    </SafeAreaView>
  );
};
const localStyle = StyleSheet.create({
  mainContainerStyle: {
    ...styles.mainContainerSurface,
    ...styles.mh20,
  },
  imageContainerStyle: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mv10,
  },
  iconStyle: {
    width: moderateScale(72),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(1.5),
    borderColor: colors.lightGray,
    ...styles.p4,
    ...styles.justifyCenter,
    ...styles.flexRow,
    gap: 10,
    ...styles.aligncenter,
  },
  activeImgStyle: {
    width: moderateScale(32),
    height: moderateScale(32),
  },
  container: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mt15,
  },
});
export default ArtWorkScreen;
