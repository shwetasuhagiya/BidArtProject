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
import CHeader from '../common/CHeader';
import images from '../../assets/images';
import strings from '../../i18n/strings';
import KeyBoardAvoidWrapper from '../common/KeyBoardAvoidWrapper';
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import CTextInput from '../common/CTextInput';
import {userData} from '../../api/constant';
import {moderateScale} from '../../common/constants';
import CButton from '../common/CButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StackNav, TabNav} from '../../navigation/NavigationKeys';

export default function TrendingArtist({navigation}) {
  const [select, setSelect] = useState(false);
  const [search, setsearch] = useState('');
  const searchChangeText = item => {
    setsearch(item);
  };
  const LefticonBtn = () => {
    return <Image source={images.search} style={localStyle.searchBtn} />;
  };
  const MoveToBackScreen = () => {
    navigation.navigate(TabNav.Home);
  };
  const MoveToSearchPage = () => {
    navigation.navigate(StackNav.SearchPage);
  };

  const onPressDetailArtist = item => {
    navigation.navigate(StackNav.DetailArtist, {
      name: item.name,
      userImage: item.userImage,
      image1: item.image1,
      image2: item.image2,
      image3: item.image3,
    });
  };
  const renderItemUser = ({item}) => {
    return (
      <TouchableOpacity
        style={localStyle.mainContentStyle}
        onPress={() => onPressDetailArtist(item)}>
        <View style={localStyle.flexImagestyle}>
          <Image source={item.image1} style={localStyle.imageStyle} />
          <Image source={item.image2} style={localStyle.imageStyle} />
          <Image source={item.image3} style={localStyle.imageStyle} />
        </View>
        <View style={localStyle.contentStyle}>
          <View style={localStyle.userInfoStyle}>
            <CText style={localStyle.btnStyle} type={'S12'} numberOfLines={1}>
              {item.id}
            </CText>
            <Image source={item.userImage} style={localStyle.userImageStyle} />
            <View>
              <CText
                style={localStyle.nameStyle}
                numberOfLines={1}
                type={'S14'}>
                {item.name}
              </CText>
              <CText numberOfLines={1}>{item.followers}</CText>
            </View>
          </View>
          <TouchableOpacity>
            <CButton
              ChangeBtnStyle={[
                localStyle.followBtnStyle,
                select === item.id ? localStyle.ChangeBtnStyle : null,
              ]}
              Title={select === item.id ? strings.followed : strings.follow}
              ChangeTxtStyle={
                select === item.id
                  ? localStyle.ChangeTxtStyle
                  : localStyle.simpleTxtstyle
              }
              onPress={() => setSelect(item.id)}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <KeyBoardAvoidWrapper style={styles.flexG1}>
        <View style={localStyle.containerStyle}>
          <CHeader img={images.arrowLeft} onPress={MoveToBackScreen} />
          <CText type={'B16'} numberOfLines={1}>
            {strings.TrendingArtist}
          </CText>
          <View />
        </View>
        <TouchableOpacity onPress={MoveToSearchPage}>
          <CTextInput
            placeholderText={strings.ArtistPlaceholderText}
            LeftIcon={LefticonBtn}
            value={search}
            onChangeText={searchChangeText}
          />
        </TouchableOpacity>
        <FlatList data={userData} renderItem={renderItemUser} />
      </KeyBoardAvoidWrapper>
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
    ...styles.mb10,
  },
  searchBtn: {
    ...styles.ml10,
  },
  mainContentStyle: {
    height: moderateScale(181),
    width: '100%',
    backgroundColor: colors.white,
    ...styles.mv15,
  },
  imageStyle: {
    height: moderateScale(109),
    width: moderateScale(115),
  },
  flexImagestyle: {
    ...styles.flexRow,
  },
  contentStyle: {
    ...styles.p15,
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
  },
  btnStyle: {
    height: moderateScale(18),
    width: moderateScale(18),
    color: colors.white,
    backgroundColor: colors.black,
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    ...styles.mr10,
    textAlign: 'center',
  },
  nameStyle: {
    ...styles.mb5,
  },
  userImageStyle: {
    ...styles.mr10,
    width: moderateScale(40),
    height: moderateScale(40),
  },
  followBtnStyle: {
    width: moderateScale(103),
    height: moderateScale(36),
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: moderateScale(1),
  },
  ChangeBtnStyle: {
    backgroundColor: colors.black,
  },
  userInfoStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
  },
  ChangeTxtStyle: {
    color: Colors.white,
  },
  simpleTxtstyle: {
    color: colors.black,
  },
});
