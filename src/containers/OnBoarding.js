import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import OnBoardingSlideData from '../api/constant';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, styles} from '../themes';
import typography from '../themes/typography';
import images from '../assets/images';
import {deviceHeight, deviceWidth, moderateScale} from '../common/constants';
import {StoreOnbardingData} from '../utils/asyncstorage';

const OnBoarding = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let slideRef = useRef(null);

  const _onViewableItemsChanged = useCallback(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  }, []);

  const onPressRightArrow = () => {
    if (currentIndex === 2) {
       StoreOnbardingData(true)
      props.navigation.replace('AuthNavigation');
    } else {
      slideRef.current._listRef._scrollRef.scrollTo({
        x: deviceWidth * (currentIndex + 1),
      });
    }
  };
  const RenderItemData = useCallback(
    ({item, index}) => {
      return (
        <View style={localstyle.renderItemcontainer}>
          <Image source={item.image} style={localstyle.OnBoardingImageStyle} />

          <Text style={localstyle.titleTextStyle}>{item.titleText}</Text>
          <Text style={localstyle.descriptionTextStyle}>
            {item.descriptionText}
          </Text>
        </View>
      );
    },
    [OnBoardingSlideData],
  );

  const SwitchImage = () => {
    switch (currentIndex) {
      case 1:
        return <Image source={images.Next1} style={localstyle.imageStyle} />;
      case 2:
        return <Image source={images.Start} style={localstyle.imageStyle} />;
      default:
        return <Image source={images.Next2} style={localstyle.imageStyle} />;
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={OnBoardingSlideData}
        renderItem={({item, index}) => <RenderItemData item={item} />}
        onViewableItemsChanged={_onViewableItemsChanged}
        ref={slideRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <View>
        <View style={styles.rowCenter} >
          {OnBoardingSlideData.map((_, index) => (
            <View
              key={index.toString()}
              style={[
                localstyle.bottomIndicatorStyle,
                {
                  width:
                    index !== currentIndex
                      ? moderateScale(4)
                      : moderateScale(20),
                  backgroundColor:
                    index !== currentIndex
                      ? colors.grayText
                      : colors.black
                },
              ]}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity onPress={onPressRightArrow} style={localstyle.NextImg}>
        <SwitchImage />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const localstyle = StyleSheet.create({
  renderItemcontainer: {
    // width: deviceWidth,
    ...styles.center,
    ...styles.aligncenter,
  },
  OnBoardingImageStyle: {
    width: deviceWidth,
    height: deviceHeight * 0.45,
    resizeMode:'contain'
  },
  bottomBtn: {
    ...styles.selfCenter,
    ...styles.mb40,
    ...styles.mt40,
  },
  titleTextStyle: {
    ...typography.fontSizes.f24,
    ...typography.fontWeights.Bold,
    ...styles.itemsCenter,
    width: moderateScale(320),
    textAlign: 'center',
    ...styles.mt25,
    ...styles.mb15,
  },
  descriptionTextStyle: {
    ...typography.fontSizes.f16,
    color: colors.grayText,
    ...styles.itemsCenter,
    width: moderateScale(327),
    height: moderateScale(48),
    textAlign: 'center',
  },
  bottomIndicatorStyle: {
    height: moderateScale(4),
    borderRadius: moderateScale(10),
    ...styles.mh5,
    ...styles.mt10
  },
  NextImg: {
    ...styles.aligncenter,
    ...styles.mt50,
  },
  imageStyle:{
    width:moderateScale(100),
    height:moderateScale(100)
  }
});
export default OnBoarding;
