import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

//custom imports
import {colors, styles} from '../../themes';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import images from '../../assets/images';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';
import {StackNav} from '../../navigation/NavigationKeys';
import {ArtWorkList, TreadingArtistList} from '../../api/constant';
import {moderateScale} from '../../common/constants';
import CButton from '../../components/common/CButton';

const HomeTab = ({navigation}) => {
  const [search, SetSearch] = useState('');
  const LeftIconBtn = () => {
    return <Image source={images.search} style={localstyles.searchStyle} />;
  };
  const onChangeTextCom = item => {
    SetSearch(item);
  };
  const ViewAllCategories = () => {
    navigation.navigate(StackNav.ArtWorkScreen);
  };
  const ViewAllBidArtEvent = () => {
    navigation.navigate(StackNav.BidArtEvent);
  };

  const onpressRegister = () => {
    navigation.navigate(StackNav.RegisterBid);
  };

  const ViewAllArtist = () => {
    navigation.navigate(StackNav.TrendingArtist);
  };
  const CategoriesHeader = ({name, onPress, Style}) => {
    return (
      <View style={[localstyles.HeaderTitleStyle, Style]}>
        <CText type={'B18'} numberOfLines={1}>
          {name}
        </CText>
        <TouchableOpacity onPress={onPress}>
          <CText type={'S14'} color={colors.light400} numberOfLines={1}>
            {strings.viewAll}
          </CText>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={localstyles.mainArtContaineStyle}
        onPress={() =>
          navigation.navigate(StackNav.DetailArt, {
            image: item.image,
            title: item.title,
            Creator: item.creatorImage,
          })
        }>
        <Image source={item.image} style={localstyles.artImgesStyles} />
        <Image source={item.timeImage} style={localstyles.absoluteImage} />
        <View style={localstyles.contentStyle}>
          <CText numberOfLines={1} type={'B18'}>
            {item.title}
          </CText>
          <View style={localstyles.artStyle}>
            <View style={localstyles.flexStyle}>
              <Image
                source={item.creatorImage}
                style={localstyles.imageStyle}
              />
              <View>
                <CText type={'M12'} numberOfLines={1}>
                  {item.Creator}
                </CText>
                <CText type={'S14'} numberOfLines={1}>
                  {item.email}
                </CText>
              </View>
            </View>
            <View>
              <CText type={'M12'} numberOfLines={1}>
                {item.CurrentBid}
              </CText>
              <CText type={'S14'} numberOfLines={1}>
                {item.price}
              </CText>
            </View>
          </View>
          <CButton
            Title={strings.PlaceBid}
            ChangeBtnStyle={localstyles.btnStyle}
            type={'B14'}
            onPress={onpressRegister}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const BidArtEvent = () => {
    return (
      <TouchableOpacity
        style={localstyles.maineventStyle}
        onPress={() =>
          navigation.navigate(StackNav.DetailEvent, {
            image: images.event,
            date: strings.Eventdate,
            auction: strings.Auction,
          })
        }>
        <View style={localstyles.childImgStyle}>
          <Image source={images.event} style={localstyles.imgStyle} />
          <View>
            <Image source={images.artwork2} style={localstyles.childImage} />
            <Image source={images.event1} style={localstyles.childImage} />
          </View>
        </View>
        <View style={localstyles.eventInfoStyle}>
          <View>
            <CText
              type={'B18'}
              numberOfLines={1}
              style={localstyles.artistStyle}>
              {strings.Eventdate}
            </CText>
            <CText type={'M12'} numberOfLines={1}>
              {strings.Auction}
            </CText>
          </View>
          <Image source={images.arrowRight} />
        </View>
      </TouchableOpacity>
    );
  };
  const renderItemArtist = ({item}) => {
    return (
      <TouchableOpacity
        style={localstyles.mainArtistStyle}
        onPress={() =>
          navigation.navigate(StackNav.DetailArtist, {
            name: item.name,
            userImage: item.image,
            image1: images.userImage1,
            image2: images.userImage2,
            image3: images.userImage3,
          })
        }>
        <Image source={item.image} style={localstyles.imageArtist} />
        <View>
          <CText type={'S16'} numberOfLines={1} style={localstyles.artistStyle}>
            {item.name}
          </CText>
          <CText type={'R12'} numberOfLines={1}>
            {item.followers}
          </CText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={localstyles.mainContainer}>
      <KeyBoardAvoidWrapper style={styles.flexG1}>
        {/* -------------------Header ---------------------- */}
        <View style={localstyles.mainHeaderStyle}>
          <View style={localstyles.headerStyle}>
            <Image source={images.header} />
            <View style={localstyles.TitleStyle}>
              <CText type={'S16'} numberOfLines={1}>
                {strings.userName}
              </CText>
              <CText type={'M12'} numberOfLines={1}>
                {strings.makeBid}
              </CText>
            </View>
          </View>
          <Image source={images.notificaation} />
        </View>
        <ScrollView>
          <CTextInput
            LeftIcon={LeftIconBtn}
            placeholderText={strings.searchItems}
            vale={search}
            onChangeText={onChangeTextCom}
          />

          {/* ------------------- Popular Artwork ---------------------- */}
          <CategoriesHeader
            name={strings.PopularArtwork}
            onPress={ViewAllCategories}
          />
          <FlatList
            data={ArtWorkList}
            renderItem={renderItem}
            horizontal
            scrollEnabled
            showsHorizontalScrollIndicator={false}
          />

          {/* --------------------Trending Artist ------------------ */}
          <CategoriesHeader
            name={strings.TrendingArtist}
            Style={localstyles.artisrHeaderStyle}
            onPress={ViewAllArtist}
          />
          <FlatList
            data={TreadingArtistList}
            renderItem={renderItemArtist}
            horizontal
            scrollEnabled
            showsHorizontalScrollIndicator={false}
          />
          {/* --------------------BidArt Event ------------------ */}
          <CategoriesHeader
            name={strings.BidArtEvent}
            Style={localstyles.artisrHeaderStyle}
            onPress={ViewAllBidArtEvent}
          />
          <BidArtEvent />
        </ScrollView>
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
};
const localstyles = StyleSheet.create({
  mainContainer: {
    ...styles.mh15,
    ...styles.mainContainerSurface,
  },
  mainHeaderStyle: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mt15,
    ...styles.mb5,
  },
  headerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
  },
  TitleStyle: {
    ...styles.ml10,
  },
  searchStyle: {
    ...styles.ml15,
  },
  HeaderTitleStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mt15,
    ...styles.mb10,
  },
  artImgesStyles: {
    width: moderateScale(250),
    height: moderateScale(250),
  },
  mainArtContaineStyle: {
    ...styles.mv10,
    ...styles.mr15,
    backgroundColor: colors.white,
    height: moderateScale(411),
  },
  contentStyle: {
    ...styles.ph15,
    ...styles.mv15,
    width: moderateScale(250),
  },
  artStyle: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.aligncenter,
    ...styles.mt10,
  },
  flexStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
  },
  imageStyle: {
    ...styles.mr10,
    height: moderateScale(32),
    width: moderateScale(32),
  },
  btnStyle: {
    ...styles.mt15,
    width: moderateScale(218),
    height: moderateScale(38),
  },
  absoluteImage: {
    height: moderateScale(36),
    width: moderateScale(112),
    position: 'absolute',
    top: moderateScale(16),
    left: moderateScale(16),
  },
  artisrHeaderStyle: {
    ...styles.mt30,
  },
  mainArtistStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    height: moderateScale(48),
    width: moderateScale(154),
    ...styles.mr20,
    ...styles.mt10,
  },
  imageArtist: {
    height: moderateScale(48),
    width: moderateScale(48),
    ...styles.mr10,
  },
  artistStyle: {
    ...styles.mb5,
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
});
export default HomeTab;
