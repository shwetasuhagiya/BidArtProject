import {StyleSheet} from 'react-native';
import {moderateScale} from '../common/constants';
import {colors} from './colors';
import flex from './flex';
import margin from './margin';

export default StyleSheet.create({
  mainContainerWhite: {
    backgroundColor: colors.white,
    ...flex.flex,
  },
  mainContainerSurface: {
    backgroundColor: colors.primarySurface,
    ...flex.flex,
  },
  innerContainer: {
    paddingHorizontal: moderateScale(20),
    ...margin.mt20,
  },
  generalTitleText: {
    fontSize: moderateScale(24),
  },
  underLineText: {
    textDecorationLine: 'underline',
  },
  horizontalLine: {
    height: moderateScale(10),
    width: '100%',
  },
  shadowStyle: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  capitalizeTextStyle: {
    textTransform: 'capitalize',
  },
  mainContainerWithRadius: {
    ...flex.flex,
    backgroundColor: colors.primary,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  sheetContainer: {
    borderTopLeftRadius: moderateScale(35),
    borderTopRightRadius: moderateScale(35),
    backgroundColor: colors.primarySurface,
  },
});
