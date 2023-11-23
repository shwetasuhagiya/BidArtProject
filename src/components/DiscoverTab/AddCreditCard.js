import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

//custom import
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import images from '../../assets/images';
import CHeader from '../common/CHeader';
import strings from '../../i18n/strings';
import CTextInput from '../common/CTextInput';
import {moderateScale} from '../../common/constants';
import CButton from '../common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';
import {
  validateCVV,
  validateCardNumber,
  validateDate,
} from '../../utils/Validation';

export default function AddCreditCard({navigation}) {
  const [CardNumber, setcardNumber] = useState('');
  const [cardNumberCheck, setcardNumberCheck] = useState('');
  const [date, setdate] = useState(false);
  const [dateError, setDateError] = useState('');
  const [cvc, SetCvc] = useState('');
  const [cvcError, SetcvvError] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!!CardNumber && !!date && !!cvc) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [CardNumber, date, cvc]);

  const onChangeCardnumber = item => {
    setcardNumber(item);
    const {msg} = validateCardNumber(item);
    setcardNumberCheck(msg);
  };

  const onChangeDate = item => {
    setdate(item);
    const {msg} = validateDate(item);
    setDateError(msg);
  };

  const onChangeCVC = item => {
    SetCvc(item);
    const {msg} = validateCVV(item);
    SetcvvError(msg);
  };
  const MovetoBackscreen = () => {
    navigation.goBack();
  };

  const onPressRegister = () => {
    navigation.navigate(StackNav.RegisterBid);
  };
  return (
    <SafeAreaView style={localStyle.mainContainerStyle}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View>
          <View style={localStyle.containerStyle}>
            <CHeader img={images.arrowLeft} onPress={MovetoBackscreen} />
            <CText type={'B16'} numberOfLines={1}>
              {strings.AddCreditCard}
            </CText>
            <View />
          </View>
          <CText style={localStyle.contentStyle} type={'M14'} numberOfLines={1}>
            {strings.CardNumber}
          </CText>
          <CTextInput
            placeholderText={strings.PlaceholderCard}
            value={CardNumber}
            onChangeText={onChangeCardnumber}
            errorText={cardNumberCheck}
            keyBoardType={'numeric'}
            maxLength={16}
          />
          <View style={localStyle.flexInput}>
            <View>
              <CText
                style={localStyle.contentStyle}
                type={'M14'}
                numberOfLines={1}>
                {strings.ExpiredDate}
              </CText>
              <CTextInput
                placeholderText={strings.MMYY}
                changeViewStyle={localStyle.textInputstyle}
                value={date}
                onChangeText={onChangeDate}
                errorText={dateError}
                keyBoardType={'numeric'}
                maxLength={5}
              />
            </View>
            <View>
              <CText
                style={localStyle.contentStyle}
                type={'M14'}
                numberOfLines={1}>
                {strings.CVC}
              </CText>
              <CTextInput
                placeholderText={strings.MMYY}
                changeViewStyle={localStyle.textInputstyle}
                value={cvc}
                onChangeText={onChangeCVC}
                errorText={cvcError}
                keyBoardType={'numeric'}
                maxLength={5}
              />
            </View>
          </View>
        </View>
      </KeyBoardAvoidWrapper>
      <CButton
        Title={strings.AddCreditCard}
        type={'B16'}
        ChangeBtnStyle={localStyle.btnStyle}
        ChangeTxtStyle={localStyle.ChangeTxtStyle}
        onPress={onPressRegister}
      />
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainerStyle: {
    ...styles.mainContainerSurface,
    ...styles.mh15,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  containerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mb5,
  },
  contentStyle: {
    ...styles.mt5,
  },
  textInputstyle: {
    width: moderateScale(156),
  },
  flexInput: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mt10,
  },
  btnStyle: {
    ...styles.mb10,
    backgroundColor: colors.lightGray,
  },
  ChangeTxtStyle: {
    color: colors.gray400,
  },
});
