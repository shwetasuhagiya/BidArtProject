import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

//custom import
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../common/constants';
import CHeader from '../common/CHeader';
import {styles} from '../../themes';
import images from '../../assets/images';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import CTextInput from '../common/CTextInput';
import KeyBoardAvoidWrapper from '../common/KeyBoardAvoidWrapper';
import {StackNav} from '../../navigation/NavigationKeys';
import SearchArtist from './SearchArtist';
import SearchResult from './SearchResult';

export default function SearchPage({navigation}) {
  const [search, SetSearch] = useState('');

  const Setsearchicon = item => {
    SetSearch(item);
  };

  const MovetoTrending = () => {
    navigation.navigate(StackNav.TrendingArtist);
  };
  const LeftIconTextinput = () => {
    return (
      <Ionicons
        name={'search-outline'}
        size={moderateScale(22)}
        style={localStyle.searchIcon}
      />
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View style={localStyle.containerStyle}>
          <CHeader img={images.arrowLeft} onPress={MovetoTrending} />
          <CText type={'B16'} numberOfLines={1}>
            {strings.Search}
          </CText>
          <View />
        </View>
        <CTextInput
          LeftIcon={LeftIconTextinput}
          placeholderText={strings.ArtistPlaceholderText}
          value={search}
          onChangeText={Setsearchicon}
        />
        {search !== '' ? <SearchResult /> : <SearchArtist />}
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
    ...styles.mb5,
  },
  searchIcon: {
    ...styles.ml10,
  },
});
