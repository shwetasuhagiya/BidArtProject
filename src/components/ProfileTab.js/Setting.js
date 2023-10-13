import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import React from 'react';
//custom import
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CText from '../common/CText';
import images from '../../assets/images';
import {colors, styles} from '../../themes';
import CHeader from '../common/CHeader';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import {TabNav} from '../../navigation/NavigationKeys';

export default function Setting({navigation}) {
  const MoveToBackScreen = () => {
    navigation.navigate(TabNav.Profile);
  };
  const RenderItems = ({title, icon, onPress, data, style}) => {
    return (
      <TouchableOpacity
        style={[localStyle.containerStyle, style]}
        onPress={onPress}>
        <CText type={'B16'} numberOfLines={1}>
          {title}
        </CText>
        <View style={localStyle.textStyle}>
          <CText
            type={'S14'}
            numberOfLines={1}
            color={colors.grayText}
            style={styles.mr15}>
            {data}
          </CText>
          <SimpleLineIcons name={icon} size={moderateScale(15)} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <View style={localStyle.containerStyle}>
        <CHeader img={images.arrowLeft} onPress={MoveToBackScreen} />
        <CText type={'B16'} numberOfLines={1}>
          {strings.Setting}
        </CText>
        <View />
      </View>
      <RenderItems
        title={strings.ChangePassword}
        icon={'arrow-right'}
        style={localStyle.contentStyle}
      />
      <View style={localStyle.verticallineStyle} />
      <RenderItems
        title={strings.PushNotification}
        icon={'arrow-right'}
        data={strings.On}
      />
      <View style={localStyle.verticallineStyle} />
      <RenderItems
        title={strings.Language}
        icon={'arrow-right'}
        data={strings.English}
      />
      <View style={localStyle.verticallineStyle} />
      <RenderItems title={strings.SendFeedback} icon={'arrow-right'} />
      <View style={localStyle.verticallineStyle} />
      <RenderItems title={strings.TermofUse} icon={'arrow-right'} />
      <View style={localStyle.verticallineStyle} />
      <RenderItems title={strings.PrivacyPolicy} icon={'arrow-right'} />
      <View style={localStyle.verticallineStyle} />
      <RenderItems
        title={strings.AppVersion}
        icon={'arrow-right'}
        data={strings.version}
      />
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
  verticallineStyle: {
    height: moderateScale(2),
    backgroundColor: colors.GrayPrimary,
    ...styles.mv20,
  },
  contentStyle: {
    ...styles.mt25,
  },
  textStyle: {
    ...styles.flexRow,
  },
});
