import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';

// Local Imports
import {deviceWidth, moderateScale} from '../common/constants';
import {colors} from '../themes';
import {styles} from '../themes';

export default function StepIndicator({step, style}) {
  const renderItem = ({item}) => {
    return (
      <View
        style={[
          localstyle.HeaderStyle,
          {
            backgroundColor: item <= step ? colors.black : colors.borderColor,
          },
        ]}
      />
    );
  };
  return (
    <SafeAreaView style={[localstyle.viewStyle, style]}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
}

const localstyle = StyleSheet.create({
  viewStyle: {
    ...styles.flexRow,
    width: deviceWidth,
    ...styles.mh10,
  },
  HeaderStyle: {
    width: moderateScale(60),
    height: moderateScale(4),
    borderRadius: moderateScale(4),
    ...styles.mh5,
    ...styles.mt20,
    ...styles.mb30,
  },
});
