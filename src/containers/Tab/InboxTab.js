import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

//custom import
import CText from '../../components/common/CText';
import {colors, styles} from '../../themes';
import {InboxFiled} from '../../api/constant';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import BidsDetail from '../../components/InboxTab/BidsDetail';
import InboxDetail from '../../components/InboxTab/InboxDetail';
import ArchiveDetail from '../../components/InboxTab/ArchiveDetail';
import {Home} from '../../assets/svg';

export default function InboxTab({navigation}) {
  const [SelectedItem, SetSelectedItem] = useState(strings.Bids);
  const onPressSelect = item => {
    SetSelectedItem(item);
  };

  const RenderItems = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressSelect(item)}
        style={[
          localStyle.bottomStyle,
          SelectedItem === item ? localStyle.ActiveStyle : null,
        ]}>
        <CText
          numberOfLines={1}
          type={SelectedItem === item ? 'S16' : 'S16'}
          style={[
            SelectedItem === item ? null : localStyle.OtherFontcolor,
            localStyle.FontStyle,
          ]}>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

  const RenderInboxFiled = () => {
    switch (SelectedItem) {
      case strings.Bids:
        return <BidsDetail navigation={navigation} />;
      case strings.Inbox:
        return <InboxDetail />;
      case strings.Archive:
        return <ArchiveDetail />;
      default:
        return <BidsDetail />;
    }
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <View style={localStyle.containerStyle}>
        <CText type={'B24'} numberOfLines={1}>
          {strings.Inbox}
        </CText>
        <Home width={44} height={44} />
      </View>
      <View style={localStyle.contentstyle}>
        <FlatList
          data={InboxFiled}
          renderItem={RenderItems}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={3}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={localStyle.bottomContainer}>
        <RenderInboxFiled />
      </View>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainerStyle: {
    ...styles.mainContainerSurface,
    ...styles.mh15,
  },
  containerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mb5,
  },
  bottomStyle: {
    borderBottomWidth: moderateScale(2),
    borderColor: colors.GrayPrimary,
    ...styles.ph30,
  },
  ActiveStyle: {
    borderColor: colors.black,
  },
  OtherFontcolor: {
    color: colors.grayText,
  },
  FontStyle: {
    ...styles.mv15,
    ...styles.mh10,
  },
  bottomContainer: {
    ...styles.flex,
  },
});
