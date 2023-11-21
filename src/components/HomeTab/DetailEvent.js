import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

//custom import
import CHeader from '../common/CHeader';
import images from '../../assets/images';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import {ExhibitorsData, ExhibitorsList} from '../../api/constant';
import CButton from '../common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';

export default function DetailEvent({route, navigation}) {
  const [SelectedItem, SetSelectedItem] = useState(0);
  const {image, date, auction} = route.params;
  const Array = [
    {id: 0, name: 'Exhibitors'},
    {id: 1, name: 'Artworks'},
  ];
  const MoveToBackScreen = () => {
    navigation.goBack();
  };
  const onpressRegister = () => {
    navigation.navigate(StackNav.RegisterBid);
  };

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
  const renderItemExhibitors = ({item}) => {
    return (
      <TouchableOpacity
        style={localStyle.imageContiner}
        onPress={() =>
          navigation.navigate(StackNav.DetailArt, {
            image: item.image,
            title: item.title,
          })
        }>
        <Image source={item.image} style={localStyle.imgcontainer} />
        <View style={localStyle.contentManagestyle}>
          <CText type={'B164'} numberOfLines={1}>
            {item.title}
          </CText>
          <CText
            type={'S14'}
            numberOfLines={1}
            color={colors.grayText}
            style={localStyle.priceStyle}>
            {item.price}
          </CText>
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
      <ScrollView>
        <CHeader
          img={images.arrowLeft}
          icon={images.share}
          style={localStyle.contentStyles}
          onPress={MoveToBackScreen}
        />
        <Image source={image} style={localStyle.imgStyle} />
        <View style={localStyle.contentStyles}>
          <CText
            type={'B24'}
            numberOfLines={1}
            style={localStyle.textContainer}>
            {date}
          </CText>
          <CText type={'M16'} numberOfLines={1} color={colors.grayText}>
            {auction}
          </CText>
          <CText type={'S14'} numberOfLines={1} style={localStyle.auctionStyle}>
            {strings.AboutthisAuction}
          </CText>
          <CText type={'M16'} numberOfLines={3} color={colors.grayText}>
            {strings.otherDetail}{' '}
            <CText type={'M16'} numberOfLines={1} color={colors.black}>
              {strings.learnmore}
            </CText>
          </CText>
          <View style={localStyle.contentStyle}>
            {Array.map(item => {
              return <RenderMainItems item={item} />;
            })}
          </View>
          <View style={localStyle.contextStyle}>
            <View>
              <CText type={'S18'} numberOfLines={1}>
                {strings.JakobBergson}
              </CText>
              <CText type={'M14'} numberOfLines={1} color={colors.grayText}>
                {strings.works}
              </CText>
            </View>
            <View style={localStyle.viewallStyle}>
              <TouchableOpacity>
                <CText type={'M16'} numberOfLines={1} color={colors.grayText}>
                  {strings.viewAll}
                </CText>
              </TouchableOpacity>
              <Image source={images.arrowRight} />
            </View>
          </View>
          <FlatList
            data={[...ExhibitorsData, ...ExhibitorsData]}
            renderItem={renderItemExhibitors}
            horizontal
            scrollEnabled
            showsHorizontalScrollIndicator={false}
          />
          <View style={localStyle.contextStyle}>
            <View>
              <CText type={'S18'} numberOfLines={1}>
                {strings.MiraCalzoni}
              </CText>
              <CText type={'M14'} numberOfLines={1} color={colors.grayText}>
                {strings.works}
              </CText>
            </View>
            <View style={localStyle.viewallStyle}>
              <TouchableOpacity>
                <CText type={'M16'} numberOfLines={1} color={colors.grayText}>
                  {strings.viewAll}
                </CText>
              </TouchableOpacity>
              <Image source={images.arrowRight} />
            </View>
          </View>
          <FlatList
            data={[...ExhibitorsList, ...ExhibitorsList]}
            renderItem={renderItemExhibitors}
            horizontal
            scrollEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainerStyle: {
    ...styles.mainContainerSurface,
  },
  imgStyle: {
    height: moderateScale(275),
  },
  contentStyles: {
    ...styles.mh15,
  },
  textContainer: {
    ...styles.mt15,
    ...styles.mb5,
  },
  auctionStyle: {
    ...styles.mt15,
    ...styles.mb10,
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
    ...styles.mt20,
    ...styles.mb10,
  },
  viewallStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
  },
  imageContiner: {
    width: moderateScale(156),
    height: moderateScale(260),
    backgroundColor: colors.white,
    ...styles.mv15,
    ...styles.mr10,
  },
  imgcontainer: {
    width: moderateScale(156),
    height: moderateScale(156),
  },
  ChangeBtnStyle: {
    width: moderateScale(140),
    height: moderateScale(32),
  },
  contentManagestyle: {
    ...styles.p10,
  },
  priceStyle: {
    ...styles.mt10,
    ...styles.mb5,
  },
  contextStyle: {
    ...styles.rowSpaceBetween,
    ...styles.mt10,
  },
});
