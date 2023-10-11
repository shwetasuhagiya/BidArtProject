import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

//custom import
import {styles} from '../../themes';
import CText from '../common/CText';
import images from '../../assets/images';
import CHeader from '../common/CHeader';
import strings from '../../i18n/strings';
import CTextInput from '../common/CTextInput';
import {moderateScale} from '../../common/constants';
import CButton from '../common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';

export default function AddCreditCard({navigation}) {
  const [CardNumber, setcardNumber] = useState('');
  const [date, setdate] = useState('');
  const [cvc, SetCvc] = useState('');
  const onChangeCardnumber = item => {
    setcardNumber(item);
  };
  const onChangeDate = item => {
    setdate(item);
  };
  const onChangeCVC = item => {
    SetCvc(item);
  };
  const MovetoBackscreen = () => {
    navigation.navigate(StackNav.RegisterBid);
  };
  const MovetoNextScreen = ()=>{
    navigation.navigate(StackNav.AddBillingAddress);
  }
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
              />
            </View>
          </View>
        </View>
      </KeyBoardAvoidWrapper>
      <CButton
        Title={strings.AddCreditCard}
        type={'B16'}
        ChangeBtnStyle={localStyle.btnStyle}
        onPress={MovetoNextScreen}
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
    ...styles.mt25,
  },
  textInputstyle: {
    width: moderateScale(156),
  },
  flexInput: {
    ...styles.rowSpaceBetween,
    ...styles.aligncenter,
  },
  btnStyle: {
    ...styles.mb10,
    ...styles.mt30,
  },
});
