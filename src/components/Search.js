import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';

//local import
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, styles} from '../themes';
import CText from './common/CText';
import CTextInput from './common/CTextInput';
import {moderateScale} from '../common/constants';
import CHeader from './common/CHeader';
import images from '../assets/images';

export default function Search({onpress, placeholder}) {
  const [search, SetSearch] = useState('');
  const Setsearchicon = item => {
    SetSearch(item);
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
  const RoundOfNumbers = ({num, style}) => {
    return (
      <View style={[localStyle.roundNumStyle, style]}>
        <CText type={'B16'} style={localStyle.numStyle}>
          {num}
        </CText>
      </View>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View style={localStyle.containerStyle}>
          <CHeader img={images.arrowLeft} onPress={onpress} />
          <CText type={'B16'} numberOfLines={1}>
            {strings.Search}
          </CText>
          <View />
        </View>
        <CTextInput
          LeftIcon={LeftIconTextinput}
          placeholderText={placeholder}
          value={search}
          onChangeText={Setsearchicon}
        />
        <CText type={'B16'} numberOfLines={1} style={localStyle.textStyle}>
          {strings.ExploreView}
        </CText>
        <View style={localStyle.imageContainer}>
          <Image source={images.map} style={localStyle.mapImageStyle} />
          <RoundOfNumbers num={16} style={localStyle.absoluteStyle} />
          <RoundOfNumbers num={7} style={localStyle.changeNumStyle} />
          <RoundOfNumbers num={8} style={localStyle.changetoNumStyle} />
          <RoundOfNumbers num={12} style={localStyle.changeStyle} />

          <View style={localStyle.mainContentStyle}>
            <View>
              <CText
                type={'S14'}
                numberOfLines={1}
                style={localStyle.contentstyle}>
                {strings.CityGuide}
              </CText>
              <CText type={'M12'} numberOfLines={1}>
                {strings.otherTxt}
              </CText>
            </View>
            <Image source={images.arrowRight} />
          </View>
        </View>
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
    ...styles.mb5,
  },
  searchIcon: {
    ...styles.ml10,
  },
  textStyle: {
    ...styles.mt15,
    ...styles.mb10,
  },
  imageContainer: {
    height: moderateScale(548),
    backgroundColor: colors.white,
  },
  mapImageStyle: {
    height: moderateScale(475),
    width: moderateScale(345),
    position: 'relative',
  },
  mainContentStyle: {
    ...styles.rowSpaceBetween,
    ...styles.p15,
  },
  contentstyle: {
    ...styles.mb5,
  },
  roundNumStyle: {
    backgroundColor: colors.black,
    width: moderateScale(52),
    height: moderateScale(52),
    borderRadius: moderateScale(26),
    position: 'absolute',
    ...styles.center,
  },
  numStyle: {
    color: colors.white,
  },
  changeNumStyle: {
    width: moderateScale(38),
    height: moderateScale(38),
    borderRadius: moderateScale(19),
    top: moderateScale(280),
    left: moderateScale(50),
  },
  changetoNumStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    top: moderateScale(190),
    left: moderateScale(240),
  },
  changeStyle: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
    top: moderateScale(335),
    left: moderateScale(190),
  },
  absoluteStyle: {
    top: moderateScale(58),
    left: moderateScale(100),
  },
});
