import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import CText from './CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';

export default function CDropdownInput(props) {
  const {label, data, placeholder, value, onChange, position = 'auto'} = props;

  return (
    <View style={localStyles.genderContainer}>
      <View style={localStyles.labelContainer}>
        <CText type={'R14'}>{label}</CText>
      </View>
      <Dropdown
        style={localStyles.dropdownStyle}
        data={data}
        value={value}
        maxHeight={180}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        placeholderStyle={localStyles.dropdownPlaceholder}
        onChange={onChange}
        dropdownPosition={position}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  genderContainer: {
    marginTop: moderateScale(10),
  },
  dropdownStyle: {
    borderWidth: moderateScale(1.5),
    borderColor: colors.inputBorder,
    height: moderateScale(52),
    ...styles.mt5,
    ...styles.ph10,
    ...styles.justifyCenter,
    color: colors.textColor,
  },
  dropdownPlaceholder: {
    color: colors.grayText,
  },
  labelContainer: {
    ...styles.mt10,
    ...styles.mb5,
  },
});
