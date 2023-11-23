import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// Custom import
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import CText from '../common/CText';

const ChoosePictureModal = props => {
  const {sheetRef, onPressCamera, onPressGallery} = props;

  const onPressCancle = () => {
    sheetRef?.current?.hide();
  };

  return (
    <ActionSheet
      ref={sheetRef}
      gestureEnabled={true}
      indicatorStyle={{
        backgroundColor: colors.dark ? colors.dark3 : colors.grayScale3,
        ...styles.actionSheetIndicator,
      }}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.backgroundColor},
      ]}>
      <View style={localStyles.contentStyle}>
        <CText type={'M20'}>{strings.uploadProfilePicture}</CText>
        <TouchableOpacity onPress={onPressCancle}>
          <SimpleLineIcons name={'close'} size={moderateScale(24)} />
        </TouchableOpacity>
      </View>
      <View style={localStyles.bottomContainer}>
        <TouchableOpacity
          style={[
            localStyles.contextContainer,
            {borderColor: colors.dark ? colors.grayScale8 : colors.grayScale3},
          ]}
          onPress={onPressCamera}>
          <SimpleLineIcons name={'camera'} size={moderateScale(30)} />
          <CText type={'s18'} style={styles.ml10}>
            {strings.takeAPicture}
          </CText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            localStyles.contextContainer,
            {borderColor: colors.dark ? colors.grayScale8 : colors.grayScale3},
          ]}
          onPress={onPressGallery}>
          <SimpleLineIcons
            name={'picture'}
            size={moderateScale(30)}
            style={localStyles.iconStyle}
          />
          <CText type={'s18'} style={styles.ml10}>
            {strings.chooseFromGallery}
          </CText>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
  },
  contextContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mt20,
    ...styles.p15,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(15),
  },
  bottomContainer: {
    width: '100%',
    ...styles.selfCenter,
    paddingHorizontal: moderateScale(40),
    ...styles.mv10,
  },
  contentStyle: {
    ...styles.rowSpaceBetween,
    ...styles.mt20,
  },
});

export default ChoosePictureModal;
