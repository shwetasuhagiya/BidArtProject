import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, styles} from '../../themes';
import {deviceHeight, deviceWidth, moderateScale} from '../../common/constants';
import typography from '../../themes/typography';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';

const CreatePasswordScreen = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <SafeAreaView>
      <View style={localstyle.viewStyle}>
        {data.map(item => {
          return item <= 2 ? (
            <View style={localstyle.HeaderActiveStyle}></View>
          ) : (
            <View style={localstyle.HeaderStyle}></View>
          );
        })}
      </View>
      <View style={localstyle.container}>
        <Text style={localstyle.PasswordTitleStyle}>
          {strings.PasswordTitle}
        </Text>
        <Text style={localstyle.PasswordDesStyle}>{strings.PasswordDes}</Text>
        <Text style={localstyle.PasswordTitle}>{strings.NewPassword}</Text>
        <CTextInput placeholderText={strings.PasswordPlaceHolderText} />
        <Text style={localstyle.PasswordTitle}>{strings.ConfirmPassword}</Text>
        <CTextInput placeholderText={strings.PasswordPlaceHolderText} />
      </View>
    </SafeAreaView>
  );
};
const localstyle = StyleSheet.create({
  viewStyle: {
    ...styles.flexRow,
    width: deviceWidth,
    marginHorizontal: moderateScale(10),
    ...styles.mt20,
    ...styles.mb30,
  },
  HeaderActiveStyle: {
    width: moderateScale(60),
    height: moderateScale(4),
    borderRadius: moderateScale(4),
    backgroundColor: colors.black,
    marginHorizontal: moderateScale(5),
  },
  HeaderStyle: {
    width: moderateScale(60),
    height: moderateScale(4),
    borderRadius: moderateScale(4),
    backgroundColor: colors.borderColor,
    marginHorizontal: moderateScale(5),
  },
  container: {
    marginHorizontal: moderateScale(15),
  },
  PasswordTitleStyle: {
    ...typography.fontWeights.Bold,
    ...typography.fontSizes.f24,
    lineHeight: 32,
    ...styles.mt10,
  },
  PasswordDesStyle: {
    ...typography.fontWeights.Medium,
    ...typography.fontSizes.f16,
    lineHeight: 24,
    color: colors.grayText,
    ...styles.mt15,
  },
  PasswordTitle: {
    ...typography.fontSizes.f14,
    ...typography.fontWeights.Medium,
    lineHeight: 19.6,
    ...styles.mt25,
  },
});
export default CreatePasswordScreen;
