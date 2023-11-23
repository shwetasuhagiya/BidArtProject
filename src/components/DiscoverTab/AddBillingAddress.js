import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

//custom import
import {colors, styles} from '../../themes';
import CHeader from '../common/CHeader';
import CText from '../common/CText';
import CTextInput from '../common/CTextInput';
import images from '../../assets/images';
import strings from '../../i18n/strings';
import CDropdownInput from '../common/CDropdownInput';
import {countryList} from '../../api/constant';
import CButton from '../common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';
import {
  validateCityName,
  validateFullName,
  validatephoneNum,
} from '../../utils/Validation';

export default function AddBillingAddress({navigation}) {
  const [country, setCountry] = useState('');
  const [name, Setname] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [data, setData] = useState('');
  const [postal, setPostal] = useState('');
  const [phonenum, setPhoneNum] = useState('');
  const [cityError, SetCityError] = useState('');
  const [NumberError, SetNumberError] = useState('');

  const onChangeCountryFied = ({value}) => {
    setCountry(value);
  };
  const onChangefullName = item => {
    const {msg} = validateFullName(item);
    Setname(item);
    setFullName(msg);
  };
  const onChangeCity = item => {
    const {msg} = validateCityName(item);
    setCity(item);
    SetCityError(msg);
  };
  const onChangeData = item => {
    setData(item);
  };
  const onChangePostal = item => {
    setPostal(item);
  };
  const onChangePhonenumber = item => {
    const {msg} = validatephoneNum(item);
    setPhoneNum(item);
    SetNumberError(msg);
  };
  const MoveToBack = () => {
    navigation.navigate(StackNav.RegisterBid);
  };

  const onPressRegister = () => {
    navigation.navigate(StackNav.RegisterBid);
  };

  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View>
          <View style={localStyle.containerStyle}>
            <CHeader img={images.arrowLeft} onPress={MoveToBack} />
            <CText type={'B16'} numberOfLines={1}>
              {strings.AddBillingAddress}
            </CText>
            <View />
          </View>
          <CText style={localStyle.contentStyle} type={'M14'} numberOfLines={1}>
            {strings.FullName}
          </CText>
          <CTextInput
            placeholderText={strings.FullNamePlaceHolder}
            value={name}
            onChangeText={onChangefullName}
            errorText={fullName}
          />
          <CText style={localStyle.contentStyle} type={'M14'} numberOfLines={1}>
            {strings.City}
          </CText>
          <CTextInput
            placeholderText={strings.cityName}
            value={city}
            onChangeText={onChangeCity}
            keyBoardType={'defalut'}
            errorText={cityError}
          />
          <CText style={localStyle.contentStyle} type={'M14'} numberOfLines={1}>
            {strings.otherdata}
          </CText>
          <CTextInput
            placeholderText={strings.dataplaceholderText}
            value={data}
            onChangeText={onChangeData}
            keyBoardType={'defalut'}
          />
          <CText style={localStyle.contentStyle} type={'M14'} numberOfLines={1}>
            {strings.PostalCode}
          </CText>
          <CTextInput
            placeholderText={strings.postalTextInput}
            value={postal}
            onChangeText={onChangePostal}
            keyBoardType={'numeric'}
          />
          <CText style={localStyle.contentStyle} type={'M14'} numberOfLines={1}>
            {strings.PhoneNumber}
          </CText>
          <CTextInput
            placeholderText={strings.phonePlaceHolder}
            value={phonenum}
            onChangeText={onChangePhonenumber}
            keyBoardType={'numeric'}
            errorText={NumberError}
          />
          <CDropdownInput
            label={strings.Country}
            type={'M14'}
            data={countryList}
            value={country}
            placeholder={strings.SelectCountry}
            onChange={onChangeCountryFied}
            position="top"
          />
        </View>
        <CButton
          Title={strings.AddBillingAddress}
          type={'B16'}
          ChangeBtnStyle={localStyle.btnStyle}
          ChangeTxtStyle={localStyle.ChangeTxtStyle}
          onPress={onPressRegister}
        />
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
  btnStyle: {
    ...styles.mb10,
    ...styles.mt30,
    backgroundColor: colors.lightGray,
  },
  ChangeTxtStyle: {
    color: colors.gray400,
  },
});
