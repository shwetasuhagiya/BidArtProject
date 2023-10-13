import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
//local import
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import {deviceWidth, moderateScale} from '../../common/constants';
import CHeader from '../common/CHeader';
import images from '../../assets/images';
import {Edit} from '../../assets/svg';
import {StackNav, TabNav} from '../../navigation/NavigationKeys';

export default function Payment({navigation}) {
  const MovetoAddCard = () => {
    navigation.navigate(StackNav.AddCreditCard);
  };
  const MoveToBackScreen = () => {
    navigation.navigate(TabNav.Profile);
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <View style={localStyle.containerStyle}>
        <CHeader img={images.arrowLeft} onPress={MoveToBackScreen} />
        <CText type={'B16'} numberOfLines={1}>
          {strings.Payment}
        </CText>
        <View />
      </View>
      <View style={localStyle.containerStyle}>
        <CText type={'B16'} numberOfLines={1}>
          {strings.CreditCard}
        </CText>
        <Edit />
      </View>
      <Image source={images.creditCard} style={localStyle.imgStyle} />
      <TouchableOpacity style={localStyle.cardStyle} onPress={MovetoAddCard}>
        <SimpleLineIcons
          name={'plus'}
          size={moderateScale(20)}
          style={styles.mr10}
        />
        <CText numberOfLines={1} type={'S16'}>
          {strings.AddNewCard}
        </CText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainerStyle: {
    ...styles.mh15,
    ...styles.mainContainerSurface,
  },
  containerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mb5,
    ...styles.pt15,
  },
  imgStyle: {
    height: moderateScale(176),
    width: deviceWidth - 35,
    ...styles.mt15,
  },
  cardStyle: {
    ...styles.flexRow,
    ...styles.center,
    height: moderateScale(52),
    borderColor: colors.borderColor,
    borderWidth: moderateScale(1.5),
    ...styles.mv20,
    ...styles.aligncenter,
  },
});
