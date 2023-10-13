import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

//custom import
import ActionSheet from 'react-native-actions-sheet';
import React, {useState} from 'react';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import {sortby} from '../../api/constant';
import {moderateScale} from '../../common/constants';
import images from '../../assets/images';
import CButton from '../common/CButton';
import {useNavigation} from '@react-navigation/native';
import {StackNav} from '../../navigation/NavigationKeys';

const FilterArtWork = props => {
  let {sheetRef} = props;
  const navigation = useNavigation();
  const [SelectedItem, SetSelectedItem] = useState(false);
  const [select, setSelect] = useState(sortby);
  const Array = [
    {id: 0, name: 'Sort By'},
    {id: 1, name: 'Medium'},
    {id: 2, name: 'Price'},
  ];

  const MovetoScreen = () => {
    sheetRef.current?.hide();
    navigation.navigate(StackNav.FilterResult);
  };
  const handleOnpress = item => {
    setSelect(newItem);
    const newItem = select.map(value => {
      if (value.id === item.id) {
        return {...value, selected: !value.selected};
      } else {
        return value;
      }
    });
    setSelect(newItem);
  };
  const RenderMainItems = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => SetSelectedItem(item.id)}
        style={[
          localstyle.bottomStyle,
          SelectedItem === item.id ? localstyle.ActiveStyle : null,
        ]}>
        <CText
          type={SelectedItem === item.id ? 'B18' : 'M18'}
          style={[
            SelectedItem === item.id ? null : localstyle.OtherFontcolor,
            localstyle.FontStyle,
          ]}>
          {item.name}
        </CText>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={localstyle.mainRenderStyle}>
        <TouchableOpacity style={localstyle.clickItemStyle}>
          <CText type={'M16'}>{item.data}</CText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOnpress(item)}>
          {item.selected ? (
            <Image source={images.rounded} />
          ) : (
            <Image source={images.circle} style={localstyle.circlestyle} />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ActionSheet ref={sheetRef}>
      <View style={localstyle.container}>
        <CText type={'B24'} style={localstyle.filterHeaderStyle}>
          {strings.FilterArtwork}
        </CText>
        <View style={localstyle.contentStyle}>
          {Array.map(item => {
            return <RenderMainItems item={item} />;
          })}
        </View>
        <FlatList data={select} renderItem={renderItem} />
        <CButton
          type={'B16'}
          Title={strings.ShowResult}
          ChangeBtnStyle={localstyle.btnStyle}
          onPress={MovetoScreen}
        />
      </View>
    </ActionSheet>
  );
};
const localstyle = StyleSheet.create({
  filterHeaderStyle: {
    textAlign: 'center',
    ...styles.mt15,
    ...styles.mb30,
  },
  container: {
    ...styles.mh15,
  },
  contentStyle: {
    ...styles.rowSpaceEvenly,
  },
  bottomStyle: {
    borderBottomWidth: 1,
    borderColor: colors.GrayPrimary,
    width: moderateScale(120),
    ...styles.flex,
    ...styles.center,
  },
  ActiveStyle: {
    borderColor: colors.black,
  },
  OtherFontcolor: {
    color: colors.grayText,
  },
  FontStyle: {
    ...styles.mb15,
  },
  circlestyle: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
  mainRenderStyle: {
    ...styles.rowSpaceBetween,
    ...styles.flex,
    ...styles.mt20,
  },
  btnStyle: {
    height: moderateScale(54),
    ...styles.mt40,
    ...styles.mb20,
  },
});
export default FilterArtWork;
