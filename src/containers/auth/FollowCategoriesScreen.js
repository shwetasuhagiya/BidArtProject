import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

//custom import
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import {colors, styles} from '../../themes';
import StepIndicator from '../../components/StepIndicator';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';
import images from '../../assets/images';
import {CategoriesList} from '../../api/constant';
import {moderateScale} from '../../common/constants';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/NavigationKeys';

const FollowCategoriesScreen = ({navigation}) => {
  const [select, setSelect] = useState(CategoriesList);
  const [searchitem, SetSearchItem] = useState('');

  const onChangeSearch = item => {
    SetSearchItem(item);
  };

  const MovetoNextScreen = () => {
    navigation.navigate(AuthNav.BudgetScreen);
  };

  const LeftIconButton = () => {
    return <Image source={images.search} style={localstyle.searchbtn} />;
  };

  const handleOnpress = item => {
    const newItem = select.map(value => {
      if (value.id === item.id) {
        return {...value, selected: !value.selected};
      } else {
        return value;
      }
    });
    setSelect(newItem);
  };

  const renderItem = ({item}) => {
    return (
      <View style={localstyle.maincontantStyle}>
        <View style={localstyle.contentStyle}>
          <Image source={item.image} style={localstyle.artistimageStyle} />
          <View style={localstyle.contentViewStyle}>
            <CText type={'M16'} numberOfLines={1} style={localstyle.nameStyle}>
              {item.name}
            </CText>
            <CText type={'R12'} numberOfLines={1} color={colors.light400}>
              {item.total}
            </CText>
          </View>
        </View>
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

  const ListHeaderComponent = () => {
    return (
      <View>
        <StepIndicator step={4} style={styles.mh0} />
        <CText type={'B24'}>{strings.categoriesTitle}</CText>
        <CTextInput
          LeftIcon={LeftIconButton}
          placeholderText={strings.categoriesPlaceholderText}
          value={searchitem}
          onChangeText={onChangeSearch}
        />
        <CText style={localstyle.topArtistStyle} type={'M16'}>
          {strings.PopularCategories}
        </CText>
      </View>
    );
  };
  return (
    <SafeAreaView style={localstyle.maincontainer}>
      <KeyBoardAvoidWrapper style={styles.flexG1}>
        <FlatList
          ListHeaderComponent={ListHeaderComponent}
          data={select}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={item => item.id}
        />
        <CButton
          Title={strings.Next}
          ChangeBtnStyle={localstyle.nextbtnStyle}
          onPress={MovetoNextScreen}
          type={'B16'}
        />
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
};
const localstyle = StyleSheet.create({
  maincontainer: {
    ...styles.mainContainerSurface,
    ...styles.mh15,
  },
  searchbtn: {
    ...styles.ml15,
  },
  topArtistStyle: {
    ...styles.mt25,
    ...styles.mb15,
  },
  maincontantStyle: {
    ...styles.rowSpaceBetween,
    ...styles.mv10,
    ...styles.flex,
  },
  artistimageStyle: {
    height: moderateScale(48),
    width: moderateScale(48),
  },
  contentStyle: {
    ...styles.flexRow,
    ...styles.flex,
    ...styles.mr30,
  },
  nameStyle: {
    ...styles.mv5,
  },
  contentViewStyle: {
    ...styles.ml20,
  },
  nextbtnStyle: {
    ...styles.mt30,
    bottom: moderateScale(20),
  },
  circlestyle: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
});
export default FollowCategoriesScreen;
