import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

//custom import
import React from 'react';
import {BidArtEventList} from '../../api/constant';
import CText from '../common/CText';
import images from '../../assets/images';
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import {StackNav} from '../../navigation/NavigationKeys';

export default function ShowDetail({navigation}) {
  const onpressEvent = item => {
    navigation.navigate(StackNav.DetailEvent, {
      image: item.mainImage,
      date: item.date,
      auction: item.auction,
    });
  };
  const renderItemEvent = ({item}) => {
    return (
      <TouchableOpacity
        style={localStyle.maineventStyle}
        onPress={() => onpressEvent(item)}>
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
    <FlatList
      data={[...BidArtEventList, ...BidArtEventList]}
      renderItem={renderItemEvent}
      showsVerticalScrollIndicator={false}
      scrollEnabled
    />
  );
}

const localStyle = StyleSheet.create({
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
