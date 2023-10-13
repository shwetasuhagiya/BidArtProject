import {Image, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

//custom import
import {styles} from '../../themes';
import images from '../../assets/images';
import {moderateScale} from '../../common/constants';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import CButton from '../common/CButton';

export default function ArchiveDetail() {
  return (
    <SafeAreaView style={localStyle.mainContainer}>
      <Image source={images.remove} style={localStyle.imgStyle} />
      <CText type={'B18'} numberOfLines={2} style={localStyle.contentStyle}>
        {strings.achiveDes}
      </CText>
      <CText type={'M12'} numberOfLines={2} style={localStyle.contentStyle}>
        {strings.achiveOther}
      </CText>
      <CButton
        Title={strings.Exploreworks}
        ChangeBtnStyle={localStyle.ChangeBtnStyle}
        type={'B16'}
        numberOfLines={2}
      />
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  imgStyle: {
    width: moderateScale(80),
    height: moderateScale(80),
    ...styles.mb20,
  },
  contentStyle: {
    textAlign: 'center',
    ...styles.mt15,
  },
  ChangeBtnStyle: {
    ...styles.mv20,
    width: moderateScale(327),
    height: moderateScale(54),
  },
  mainContainer: {
    ...styles.flexG1,
    height: '100%',
    ...styles.aligncenter,
    top: moderateScale(80),
  },
});
