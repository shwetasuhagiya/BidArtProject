import {StyleSheet} from 'react-native';
import React from 'react';

//custom import
import {TabNav} from '../../navigation/NavigationKeys';
import strings from '../../i18n/strings';
import Search from '../Search';

export default function SearchDiscover({navigation}) {
  const moveToBackScreen = () => {
    navigation.navigate(TabNav.Discover);
  };
  return (
    <Search
      onpress={moveToBackScreen}
      placeholder={strings.discoverPlaceholder}
    />
  );
}

const styles = StyleSheet.create({});
