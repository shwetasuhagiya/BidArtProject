import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import images from '../../assets/images';
import CHeader from '../common/CHeader';
import {colors, styles} from '../../themes';
import {whisListData} from '../../api/constant';
import {moderateScale} from '../../common/constants';
import WorksDetail from './WorksDetail';
import ShowDetail from './ShowDetail';
import {TabNav} from '../../navigation/NavigationKeys';

export default function WhisList({navigation}) {
  const [SelectedItem, SetSelectedItem] = useState(strings.Works);
  const onPressSelect = item => {
    SetSelectedItem(item);
  };
  const MoveToBackscreen = () => {
    navigation.navigate(TabNav.Profile);
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
  const RenderFiled = () => {
    switch (SelectedItem) {
      case strings.Works:
        return <WorksDetail />;
      case strings.Show:
        return <ShowDetail />;
      default:
        return <WorksDetail />;
    }
  };
  return (
    <SafeAreaView style={localStyle.mainContainer}>
      <View style={localStyle.containerStyle}>
        <CHeader img={images.arrowLeft} onPress={MoveToBackscreen} />
        <CText type={'B16'} numberOfLines={1}>
          {strings.Whislist}
        </CText>
        <View />
      </View>
      <View>
        <FlatList
          data={whisListData}
          renderItem={RenderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={3}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={localStyle.bottomContainer}>
        <RenderFiled />
      </View>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainer: {
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
    ...styles.mh35,
  },
  bottomContainer: {
    ...styles.pv15,
  },
});
