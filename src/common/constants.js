import {Dimensions, Platform} from 'react-native';

//Device dimensions
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
export const deviceWidth = viewportWidth;
export const deviceHeight = viewportHeight;

const scale = viewportWidth / 375;

//Device type check
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isTablet = viewportHeight / viewportWidth < 1.6;

//Responsive height and width function
export function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

//Responsive size function
export function moderateScale(size) {
  const newSize = size * scale;
  if (isTablet) {
    return Math.round(newSize) - wp(1);
  } else {
    return Math.round(newSize);
  }
}

export const checkPlatform = () => {
  if (Platform.OS === 'android') {
    return 'android';
  } else {
    return 'ios';
  }
};
