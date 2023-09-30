import { responsiveFontSize } from "react-native-responsive-dimensions";

// App Font-Family:
const fontWeights = {
  Black: {
    fontFamily: 'Urbanist-Black',
  },
  Medium: {
    fontFamily: 'Nunito-Medium',
  },
  SemiBold: {
    fontFamily: 'Urbanist-SemiBold',
  },
  Bold: {
    fontFamily: 'Urbanist-Bold',
  },
  ExtraBold: {
    fontFamily: 'Urbanist-ExtraBold',
  },
  Thin: {
    fontFamily: 'Urbanist-Thin',
  },
};

// App font sizes:
const fontSizes = {
  f2: {
    fontSize: responsiveFontSize(2),
  },
  f3: {
    fontSize: responsiveFontSize(3),
  },
  f4: {
    fontSize: responsiveFontSize(4),
  },
  f16: {
    fontSize: 16,
  },
  f18: {
    fontSize: 18,
  },
  f20: {
    fontSize: 20,
  },
  f22: {
    fontSize: 20,
  },
  f24: {
    fontSize: 24,
  },
  f26: {
    fontSize: 26,
  },
  f28: {
    fontSize: 28,
  },
  f30: {
    fontSize: 30,
  },
  f32: {
    fontSize: 32,
  },
  f34: {
    fontSize: 34,
  },
  f35: {
    fontSize: 35,
  },
  f36: {
    fontSize: 36,
  },
  f40: {
    fontSize: 40,
  },
  f46: {
    fontSize: 46,
  },
  f66: {
    fontSize: 66,
  },
};

const typography = {fontWeights, fontSizes};

export default typography;
