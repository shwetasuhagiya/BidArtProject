import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

//custom import
import Ionicons from 'react-native-vector-icons/Ionicons';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import {colors, styles} from '../../themes';
import {ArtWorkList, DiscoveList} from '../../api/constant';
import strings from '../../i18n/strings';
import images from '../../assets/images';
import CTextInput from '../../components/common/CTextInput';
import {moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import CVerticalView from '../../components/CVerticalView';
import {StackNav} from '../../navigation/NavigationKeys';
import CminDropdown from '../../components/common/CminDropdown';

export default function DiscoverTab({navigation}) {
  const [SelectedItem, SetSelectedItem] = useState(strings.AllArt);
  const [data, setData] = useState('');
  const [search, setSearch] = useState('');

  const Array = [
    {id: 0, name: 'All Art'},
    {id: 1, name: 'Photography'},
    {id: 2, name: 'Emerging Artists'},
    {id: 3, name: 'Pop Art'},
  ];
  const MovetoSearchScreen = () => {
    navigation.navigate(StackNav.SearchDiscover);
  };
  const onChangeDataFiled = ({value}) => {
    setData(value);
  };
  const onChangeText = text => {
    setSearch(text);
  };
  const LeftIconSearch = () => {
    return (
      <Ionicons
        name={'search'}
        size={moderateScale(24)}
        style={localStyle.LeftIconStyle}
      />
    );
  };
  const RenderMainItems = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => SetSelectedItem(item.id)}
        style={[
          localStyle.bottomStyle,
          SelectedItem === item.id ? localStyle.ActiveStyle : null,
        ]}>
        <CText
          numberOfLines={1}
          type={SelectedItem === item.id ? 'B16' : 'B16'}
          style={[
            SelectedItem === item.id ? null : localStyle.OtherFontcolor,
            localStyle.FontStyle,
          ]}>
          {item.name}
        </CText>
      </TouchableOpacity>
    );
  };
  const onpressrenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(StackNav.DetailArt, {
            image: item.image,
            title: item.title,
          })
        }>
        <CVerticalView item={item} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainer}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View style={localStyle.changeStyle}>
          <CminDropdown
            data={DiscoveList}
            placeholder={strings.following}
            value={data}
            onChange={onChangeDataFiled}
            style={localStyle.dropdownStyle}
          />
          <Image source={images.discoverFilter} />
        </View>
        <TouchableOpacity onPress={MovetoSearchScreen}>
          <CTextInput
            LeftIcon={LeftIconSearch}
            placeholderText={strings.discoverPlaceholder}
            value={search}
            onChangeText={onChangeText}
          />
        </TouchableOpacity>
        <FlatList
          data={Array}
          renderItem={RenderMainItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <FlatList data={ArtWorkList} renderItem={onpressrenderItem} />
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainer: {
    ...styles.mainContainerSurface,
    ...styles.mh15,
  },
  changeStyle: {
    ...styles.rowSpaceBetween,
    ...styles.mt10,
  },
  LeftIconStyle: {
    ...styles.ml10,
    color: colors.grayText,
  },
  bottomStyle: {
    borderBottomWidth: moderateScale(2),
    borderColor: colors.GrayPrimary,
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
});
