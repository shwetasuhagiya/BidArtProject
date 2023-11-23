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
import Ionicons from 'react-native-vector-icons/Ionicons';
import KeyBoardAvoidWrapper from '../common/KeyBoardAvoidWrapper';
import {colors, styles} from '../../themes';
import CHeader from '../common/CHeader';
import CText from '../common/CText';
import images from '../../assets/images';
import CTextInput from '../common/CTextInput';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import {BidArtEventList} from '../../api/constant';
import {StackNav} from '../../navigation/NavigationKeys';

export default function BidArtEvent({navigation}) {
  const [search, SetSearch] = useState('');
  const Setsearchicon = item => {
    SetSearch(item);
  };
  const MoveToBackScreen = () => {
    navigation.goBack();
  };
  const MoveToSearch = () => {
    navigation.navigate(StackNav.SearchEvent);
  };

  const onpressDetailEvent = item => {
    navigation.navigate(StackNav.DetailEvent, {
      image: item.mainImage,
      date: item.date,
      auction: item.auction,
    });
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
  const renderItemEvent = ({item}) => {
    return (
      <TouchableOpacity
        style={localStyle.maineventStyle}
        onPress={() => onpressDetailEvent(item)}>
        <View style={localStyle.childImgStyle}>
          <Image source={item.mainImage} style={localStyle.imgStyle} />
          <View>
            <Image source={item.sideImage1} style={localStyle.childImage} />
            <Image source={item.sideImage2} style={localStyle.childImage} />
          </View>
        </View>
        <View style={localStyle.eventInfoStyle}>
          <View>
            <CText
              type={'B18'}
              numberOfLines={1}
              style={localStyle.artistStyle}>
              {item.date}
            </CText>
            <View style={localStyle.contentstyle}>
              <CText type={'M12'} numberOfLines={1}>
                {strings.OnAuction}{' '}
              </CText>
              <View style={localStyle.dotStyle} />
              <CText type={'M12'} numberOfLines={1}>
                {item.auction}
              </CText>
            </View>
          </View>
          <Image source={images.arrowRight} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainer}>
      <KeyBoardAvoidWrapper style={styles.flexG1}>
        <View style={localStyle.containerStyle}>
          <CHeader img={images.arrowLeft} onPress={MoveToBackScreen} />
          <CText type={'B16'} numberOfLines={1}>
            {strings.BidArtEvent}
          </CText>
          <View />
        </View>
        <TouchableOpacity onPress={MoveToSearch}>
          <CTextInput
            LeftIcon={LeftIconTextinput}
            placeholderText={strings.Searchevent}
            value={search}
            onChangeText={Setsearchicon}
          />
        </TouchableOpacity>
        <FlatList data={BidArtEventList} renderItem={renderItemEvent} />
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainer: {
    ...styles.mh15,
    ...styles.mainContainerSurface,
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
  maineventStyle: {
    height: moderateScale(282),
    backgroundColor: colors.white,
    ...styles.mv15,
  },
  imgStyle: {
    height: moderateScale(200),
    width: moderateScale(227),
  },
  childImgStyle: {
    ...styles.flexRow,
  },
  childImage: {
    height: moderateScale(100),
    width: moderateScale(120),
  },
  eventInfoStyle: {
    ...styles.p15,
    ...styles.rowSpaceBetween,
  },
  artistStyle: {
    ...styles.mb5,
  },
  dotStyle: {
    width: moderateScale(4),
    height: moderateScale(4),
    backgroundColor: colors.grayText,
    borderRadius: moderateScale(2),
  },
  contentstyle: {
    ...styles.flexRow,
    ...styles.center,
  },
});
