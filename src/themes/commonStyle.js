import {StyleSheet} from 'react-native';
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
    ...margin.mt20,
  },
  generalTitleText: {
    fontSize: 24,
  },
  underLineText: {
    textDecorationLine: 'underline',
  },
  horizontalLine: {
    height: 10,
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
  },
  sheetContainer: {
    backgroundColor: colors.primarySurface,
  },
});
