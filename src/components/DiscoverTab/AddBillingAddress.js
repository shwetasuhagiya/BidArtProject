import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';

//custom import
import {colors, styles} from '../../themes';
import CHeader from '../common/CHeader';
import CText from '../common/CText';
import CTextInput from '../common/CTextInput';
import images from '../../assets/images';
import strings from '../../i18n/strings';
import CDropdownInput from '../common/CDropdownInput';
import typography from '../../themes/typography';
import {moderateScale} from '../../common/constants';
import {countryList} from '../../api/constant';
import CButton from '../common/CButton';
import { StackNav } from '../../navigation/NavigationKeys';

export default function AddBillingAddress({navigation}) {
  const [country, setCountry] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [data, setData] = useState('');
  const [postal, setPostal] = useState('');
  const [phonenum, setPhoneNum] = useState('');
  const onChangeCountryFied = ({value}) => {
    setCountry(value);
  };
  const onChangefullName = item => {
    setFullName(item);
  };
  const onChangeCity = item => {
    setCity(item);
  };
  const onChangeData = item => {
    setData(item);
  };
  const onChangePostal = item => {
    setPostal(item);
  };
  const onChangePhonenumber = item => {
    setPhoneNum(item);
  };
  const MoveToBack = () => {
    navigation.navigate(StackNav.RegisterBid);
  };
  const MoveToNextScreen= ()=>{
      navigation.navigate(StackNav.RegisterBidData);
  }
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <ScrollView>
          <View>
            <View style={localStyle.containerStyle}>
              <CHeader img={images.arrowLeft} onPress={MoveToBack}/>
              <CText type={'B16'} numberOfLines={1}>
                {strings.AddBillingAddress}
              </CText>
              <View />
            </View>
            <CText
              style={localStyle.contentStyle}
              type={'M14'}
              numberOfLines={1}>
              {strings.FullName}
            </CText>
            <CTextInput
              placeholderText={strings.FullNamePlaceHolder}
              value={fullName}
              onChangeText={onChangefullName}
            />
            <CText
              style={localStyle.contentStyle}
              type={'M14'}
              numberOfLines={1}>
              {strings.City}
            </CText>
            <CTextInput
              placeholderText={strings.cityName}
              value={city}
              onChangeText={onChangeCity}
            />
            <CText
              style={localStyle.contentStyle}
              type={'M14'}
              numberOfLines={1}>
              {strings.otherdata}
            </CText>
            <CTextInput
              placeholderText={strings.dataplaceholderText}
              value={data}
              onChangeText={onChangeData}
            />
            <CText
              style={localStyle.contentStyle}
              type={'M14'}
              numberOfLines={1}>
              {strings.PostalCode}
            </CText>
            <CTextInput
              placeholderText={strings.postalTextInput}
              value={postal}
              onChangeText={onChangePostal}
            />
            <CText
              style={localStyle.contentStyle}
              type={'M14'}
              numberOfLines={1}>
              {strings.PhoneNumber}
            </CText>
            <CTextInput
              placeholderText={strings.phonePlaceHolder}
              value={phonenum}
              onChangeText={onChangePhonenumber}
            />
            <CText
              style={localStyle.contentStyle}
              type={'M14'}
              numberOfLines={1}>
              {strings.Country}
            </CText>
            <CDropdownInput
              Style={localStyle.dropdownStyle}
              lable={strings.following}
              style={localStyle.dropStyle}
              data={countryList}
              value={country}
              placeholder={strings.SelectCountry}
              onChange={onChangeCountryFied}
              itemStyle={localStyle.itemStyle}
              selectStyle={localStyle.selectStyle}
            />
          </View>
          <CButton
            Title={strings.AddBillingAddress}
            type={'B16'}
            ChangeBtnStyle={localStyle.btnStyle}
            onPress={MoveToNextScreen}
          />
        </ScrollView>
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
  contentStyle: {
    ...styles.mt25,
  },
  dropdownStyle: {
    ...typography.fontWeights.Medium,
    ...typography.fontSizes.f14,
    color: colors.grayText,
  },
  dropStyle: {
    width: moderateScale(340),
    borderWidth: moderateScale(1),
    borderColor: colors.inputBorder,
    height: moderateScale(52),
    ...styles.ph10,
  },
  itemStyle: {
    ...typography.fontWeights.Medium,
    ...typography.fontSizes.f14,
    color: colors.grayText,
  },
  selectStyle: {
    ...typography.fontWeights.Medium,
    ...typography.fontSizes.f14,
    color: colors.black,
  },
  btnStyle: {
    ...styles.mb10,
    ...styles.mt30,
  },
});