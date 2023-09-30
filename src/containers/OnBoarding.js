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
import {deviceWidth, moderateScale} from '../common/constants';
import { StoreOnbardingData } from '../utils/asyncstorage';

const OnBoarding = props => {
  const [Index, setIndex] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  let slideRef = useRef(null);

  const _onViewableItemsChanged = useCallback(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  }, []);

  const onPressRightArrow = () => {
    if (currentIndex === 2) {
      //  StoreOnbardingData(true)
      props.navigation.replace('Login');
    } else {
      slideRef.goToSlide(currentIndex + 1);
    }
  };
  const renderNextButton = () => {
    return (
      <TouchableOpacity
        onPress={onPressRightArrow}
        style={localstyle.bottomBtn}>
        {currentIndex === 1 ? (
          <Image source={images.Next2} style={localstyle.NextImgStyle} />
        ) : (
          <Image source={images.Next1} style={localstyle.NextImgStyle} />
        )}
      </TouchableOpacity>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={onPressRightArrow}
        style={localstyle.bottomBtn}>
        <Image source={images.Start} style={localstyle.NextImgStyle} />
      </TouchableOpacity>
    );
  };

  if (!Index) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <AppIntroSlider
          data={OnBoardingSlideData}
          renderItem={({item, index}) => {
            return (
              <View key={index}>
                <Image
                  source={item.image}
                  style={localstyle.OnBoardingImageStyle}
                />

                <Text style={localstyle.titleTextStyle}>{item.titleText}</Text>
                <Text style={localstyle.descriptionTextStyle}>
                  {item.descriptionText}
                </Text>
              </View>
            );
          }}
          activeDotStyle={{
            backgroundColor: colors.black,
            width: responsiveWidth(8),
          }}
          dotStyle={{
            backgroundColor: colors.lightGray,
            width: responsiveWidth(2),
          }}
          bottomButton={true}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          onViewableItemsChanged={_onViewableItemsChanged}
          ref={ref => (slideRef = ref)}
        />
      </SafeAreaView>
    );
  }
};
const localstyle = StyleSheet.create({
  OnBoardingImageStyle: {
    width: responsiveWidth(100),
    height: responsiveHeight(45),
    resizeMode: 'contain',
    ...styles.mt2,
  },
  NextImgStyle: {
    width: responsiveWidth(23),
    height: responsiveWidth(23),
  },
  bottomBtn: {
    ...styles.selfCenter,
    ...styles.mb40,
    ...styles.mt40,
  },
  titleTextStyle: {
    ...typography.fontSizes.f4,
    ...typography.fontWeights.Bold,
    ...styles.centers,
    ...styles.mv2,
    ...styles.mt3,
  },
  descriptionTextStyle: {
    ...typography.fontSizes.f2,
    color: colors.grayText,
    ...styles.centers,
    width: responsiveWidth(90),
    ...styles.ml3,
  },
});
export default OnBoarding;
