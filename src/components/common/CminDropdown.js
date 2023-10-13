import {StyleSheet, View} from 'react-native';
import React from 'react';

//custom import
import {Dropdown} from 'react-native-element-dropdown';
import CText from './CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import typography from '../../themes/typography';

export default function CminDropdown(props) {
  const {label, data, placeholder, value, onChange,style,Style,itemStyle,selectStyle,type} = props;

  return (
    <View style={localStyles.genderContainer}>
      <View style={localStyles.labelContainer}>
        <CText type={type}>{label}</CText>
      </View>
      <Dropdown
        style={[localStyles.dropdownStyle, style]}
        data={data}
        value={value}
        maxHeight={180}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        placeholderStyle={[localStyles.dropdownPlaceholder, Style]}
        onChange={onChange}
        selectedTextStyle={[localStyles.selectedTextStyle, selectStyle]}
        itemTextStyle={[localStyles.itemTextStyle, itemStyle]}
        selectedTextProps={1}
        iconColor={colors.black}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  dropdownStyle: {
    ...styles.justifyCenter,
    color: colors.textColor,
    width: moderateScale(140),
  },
  dropdownPlaceholder: {
    color: colors.black,
    ...typography.fontWeights.Bold,
    ...typography.fontSizes.f24,
  },
  selectedTextStyle: {
    ...typography.fontWeights.Bold,
    ...typography.fontSizes.f24,
  },
  itemTextStyle: {
    color: colors.grayText,
    ...typography.fontWeights.Bold,
    ...typography.fontSizes.f18,
  },
  labelContainer: {
    ...styles.mb15,
    ...styles.mt15
  },
});
