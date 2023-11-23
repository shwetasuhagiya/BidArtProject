import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

//custom imports
import {colors, styles} from '../../themes';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import StepIndicator from '../../components/StepIndicator';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';
import images from '../../assets/images';
import {TopArtistList} from '../../api/constant';
import {moderateScale} from '../../common/constants';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/NavigationKeys';

const FollowArtistScreen = ({navigation}) => {
  const [select, setSelect] = useState(TopArtistList);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    OnChangeSearch();
  }, [searchQuery]);

  const MovetoNextBtn = () => {
    navigation.navigate(AuthNav.FollowCategoriesScreen);
  };

  const OnChangeSearch = () => {
    if (searchQuery) {
      const filtered = select.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSelect(filtered);
    } else {
      setSelect(TopArtistList);
    }
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

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={localstyle.maincontantStyle}
        onPress={() => handleOnpress(item)}>
        <View style={localstyle.contentStyle}>
          <Image source={item.image} style={localstyle.artistimageStyle} />
          <View style={[styles.ml20, styles.flex]}>
            <CText type={'M16'} numberOfLines={1} style={localstyle.nameStyle}>
              {item.name}
            </CText>
            <CText type={'R12'} numberOfLines={1} color={colors.light400}>
              {item.followers}
            </CText>
          </View>
        </View>
        <TouchableOpacity onPress={() => handleOnpress(item)}>
          <Image
            source={item.selected ? images.rounded : images.circle}
            style={localstyle.circlestyle}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const LeftIconButton = () => {
    return <Image source={images.search} style={localstyle.searchbtn} />;
  };

  return (
    <SafeAreaView style={localstyle.container}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View>
          <StepIndicator step={3} style={styles.mh0} />
          <CText type={'B24'} numberOfLines={2}>
            {strings.FollowArtistTitle}
          </CText>
          <CTextInput
            LeftIcon={LeftIconButton}
            placeholderText={strings.FollowArtistPlaceholderText}
            value={searchQuery}
            onChangeText={item => setSearchQuery(item)}
            keyBoardType={'default'}
          />
          <CText
            type={'M16'}
            style={localstyle.topArtistStyle}
            numberOfLines={1}>
            {strings.TopArtistonBidart}
          </CText>
        </View>
        <FlatList
          data={select}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </KeyBoardAvoidWrapper>
      <CButton
        Title={strings.Next}
        ChangeBtnStyle={localstyle.nextbtnStyle}
        onPress={MovetoNextBtn}
        type={'B16'}
      />
    </SafeAreaView>
  );
};
const localstyle = StyleSheet.create({
  container: {
    ...styles.mh20,
    ...styles.mv20,
    ...styles.mainContainerSurface,
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
  nextbtnStyle: {
    ...styles.mt30,
    bottom: moderateScale(20),
  },
  circlestyle: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
});
export default FollowArtistScreen;
