import {FlatList, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';

//custom import
import {InboxChatFiled} from '../../api/constant';
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';

export default function InboxDetail() {
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={localStyle.mainContainer}>
          <Image source={item.image} />
          <View style={localStyle.Container}>
            <View style={localStyle.contentStyle}>
              <CText type={'B14'} numberOfLines={1}>
                {item.name}
              </CText>
              <CText type={'M12'} numberOfLines={1}>
                {item.time}
              </CText>
            </View>
            <CText type={'M14'} numberOfLines={2} style={localStyle.msgStyle}>
              {item.msg}
            </CText>
          </View>
        </View>
        <View style={localStyle.lineStyle} />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.flexG1}>
      <FlatList
        data={[...InboxChatFiled, ...InboxChatFiled]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pv15}
      />
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainer: {
    ...styles.flexRow,
  },
  contentStyle: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.ml10,
    ...styles.mb10,
  },
  Container: {
    ...styles.flex,
  },
  msgStyle: {
    ...styles.ml10,
  },
  lineStyle: {
    height: moderateScale(1),
    backgroundColor: colors.GrayPrimary,
    ...styles.mv15,
  },
});
