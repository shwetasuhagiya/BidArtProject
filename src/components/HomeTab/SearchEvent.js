import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
//local import
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, styles} from '../../themes';
import CHeader from '../common/CHeader';
import images from '../../assets/images';
import strings from '../../i18n/strings';
import CText from '../common/CText';
import CTextInput from '../common/CTextInput';
import {moderateScale} from '../../common/constants';
import { StackNav } from '../../navigation/NavigationKeys';

export default function SearchEvent({navigation}) {
  const [search, SetSearch] = useState('');
  const Setsearchicon = item => {
    SetSearch(item);
  };
  const MoveToBackScreen = ()=>{
    navigation.navigate(StackNav.BidArtEvent)
  }
  const LeftIconTextinput = () => {
    return (
      <Ionicons
        name={'search-outline'}
        size={moderateScale(22)}
        style={localStyle.searchIcon}
      />
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View style={localStyle.containerStyle}>
          <CHeader img={images.arrowLeft} onPress={MoveToBackScreen}/>
          <CText type={'B16'} numberOfLines={1}>
            {strings.Search}
          </CText>
          <View />
        </View>
        <CTextInput
          LeftIcon={LeftIconTextinput}
          placeholderText={strings.Searchevent}
          value={search}
          onChangeText={Setsearchicon}
        />
        <CText type={'B16'} numberOfLines={1} style={localStyle.textStyle}>
          {strings.ExploreView}
        </CText>
        <View style={localStyle.imageContainer}>
          <Image source={images.map} style={localStyle.mapImageStyle} />
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
  },
  mainContentStyle: {
    ...styles.rowSpaceBetween,
    ...styles.p15,
  },
  contentstyle: {
    ...styles.mb5,
  },
});
