import {View, Text} from 'react-native';
import React from 'react';
import Search from '../Search';
import {StackNav} from '../../navigation/NavigationKeys';
import strings from '../../i18n/strings';

const SearchEvent = ({navigation}) => {
  const moveToBackScreen = () => {
    navigation.navigate(StackNav.BidArtEvent);
  };
  return (
    <Search onpress={moveToBackScreen} placeholder={strings.Searchevent} />
  );
};

export default SearchEvent;
