import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

//custom import
import {colors, styles} from '../../themes';
import CHeader from '../common/CHeader';
import images from '../../assets/images';
import strings from '../../i18n/strings';
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';
import CButton from '../common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';

export default function DetailArtist({route, navigation}) {
  const {name, userImage, image1, image2, image3} = route.params;
  const array = [
    {
      image: image1,
      name: 'Woman Face Pink',
      current: 'Current Bid',
      price: '$2,900',
    },
    {
      image: image2,
      name: 'Brutal Man',
      current: 'Current Bid',
      price: '$3,200',
    },
    {
      image: image1,
      name: 'Woman Face Pink',
      current: 'Current Bid',
      price: '$2,900',
    },
    {
      image: image3,
      name: ' Woman Face Pink',
      current: 'Current Bid',
      price: '$3,200',
    },
  ];

  const moveToNextScreen = () => {
    navigation.goBack();
  };
  const onpressRegister = () => {
    navigation.navigate(StackNav.RegisterBid);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={localStyle.mainImageStyle}
        onPress={() =>
          navigation.navigate(StackNav.DetailArt, {
            image: item.image,
            title: item.title,
            Creator: item.creatorImage,
          })
        }>
        <Image source={item.image} style={localStyle.imageStyle} />
        <View style={localStyle.contentmainStyle}>
          <CText type={'B14'} numberOfLines={1}>
            {item.name}
          </CText>
          <View style={localStyle.flexContainer}>
            <CText type={'M12'} color={colors.grayText} numberOfLines={1}>
              {item.current}
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
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
        <View style={localStyle.containerStyle}>
          <CHeader img={images.arrowLeft} onPress={moveToNextScreen} />
          <CText type={'B16'} numberOfLines={1}>
            {strings.DetailArtist}
          </CText>
          <View />
        </View>
        <View style={localStyle.contentStyle}>
          <Image source={userImage} style={localStyle.userImageStyle} />
          <View>
            <CText type={'B18'} numberOfLines={1}>
              180
            </CText>
            <CText type={'M12'} color={colors.grayText} numberOfLines={1}>
              {strings.Works}
            </CText>
          </View>
          <View style={localStyle.lineStyle}></View>
          <View>
            <CText type={'B18'} numberOfLines={1}>
              128K
            </CText>
            <CText type={'M12'} color={colors.grayText} numberOfLines={1}>
              {strings.followers}
            </CText>
          </View>
          <View style={localStyle.lineStyle}></View>
          <View>
            <CText type={'B18'} numberOfLines={1}>
              2K
            </CText>
            <CText type={'M12'} color={colors.grayText} numberOfLines={1}>
              {strings.following}
            </CText>
          </View>
        </View>
        <CText type={'B18'} numberOfLines={1}>
          {name}
        </CText>
        <CText
          type={'M14'}
          numberOfLines={1}
          color={colors.grayText}
          style={localStyle.addressStyle}>
          {strings.address}
        </CText>
        <CText
          type={'M14'}
          color={colors.grayText}
          numberOfLines={3}
          style={localStyle.addressStyle}>
          {strings.personalInfo}
          <CText numberOfLines={1}>{strings.readmore}</CText>
        </CText>
        <View style={localStyle.contentStyle}>
          <CButton
            Title={strings.followed}
            ChangeBtnStyle={localStyle.btnStyle}
          />
          <CButton
            Title={strings.message}
            ChangeBtnStyle={localStyle.ChangeBtnStyles}
            ChangeTxtStyle={localStyle.ChangeTxtStyle}
          />
        </View>
        <View style={[localStyle.contentsStyle, styles.mt0]}>
          <CText numberOfLines={1} type={'S16'}>
            {strings.artWork}
          </CText>
          <View style={localStyle.contentStyle}>
            <Image source={images.filter} style={styles.mr10} />
            <CText numberOfLines={1} type={'M14'}>
              {strings.SortFilter}
            </CText>
          </View>
        </View>
        <FlatList data={array} renderItem={renderItem} numColumns={2} key={2} />
      </ScrollView>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainerStyle: {
    ...styles.mainContainerSurface,
    ...styles.mh20,
  },
  containerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mb10,
  },
  userImageStyle: {
    width: moderateScale(80),
    height: moderateScale(80),
  },
  contentStyle: {
    ...styles.rowSpaceBetween,
    ...styles.mv15,
  },
  contentsStyle: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
  },
  lineStyle: {
    width: moderateScale(1),
    height: moderateScale(48),
    backgroundColor: colors.grayText,
  },
  addressStyle: {
    ...styles.mt5,
  },
  btnStyle: {
    width: moderateScale(156),
    height: moderateScale(48),
  },
  ChangeBtnStyles: {
    width: moderateScale(156),
    height: moderateScale(48),
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: moderateScale(1.5),
  },
  ChangeTxtStyle: {
    color: colors.black,
  },
  mainImageStyle: {
    height: moderateScale(260),
    backgroundColor: colors.white,
    ...styles.mv10,
    ...styles.mr15,
    width: moderateScale(158),
  },
  imageStyle: {
    width: moderateScale(156),
    height: moderateScale(156),
  },
  flexContainer: {
    ...styles.flexRow,
    ...styles.mt5,
    ...styles.justifyBetween,
  },
  contentmainStyle: {
    ...styles.p10,
  },
  ChangeBtnStyle: {
    width: moderateScale(140),
    height: moderateScale(32),
    ...styles.mt10,
  },
  imgStyle: {
    flexWrap: 'wrap',
  },
});
