import {
  SafeAreaView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

//local import
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import KeyBoardAvoidWrapper from '../common/KeyBoardAvoidWrapper';
import {colors, styles} from '../../themes';
import CHeader from '../common/CHeader';
import images from '../../assets/images';
import strings from '../../i18n/strings';
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';
import CTextInput from '../common/CTextInput';
import CDropdownInput from '../common/CDropdownInput';
import typography from '../../themes/typography';
import {CategoryList} from '../../api/constant';
import CButton from '../common/CButton';
import {TabNav} from '../../navigation/NavigationKeys';

export default function SubmitWork({navigation}) {
  const [category, SetCategory] = useState('');
  const [title, SetTitle] = useState('');
  const [size, setSize] = useState('');
  const [number, SetNumber] = useState('');
  const [switchOn, setSwitch] = useState(false);
  const [switchOn1, setSwitch1] = useState(false);
  const [switchOn2, setSwitch2] = useState(false);

  const onChangeCategory = value => {
    SetCategory(value);
  };
  const onchangeTitle = item => {
    SetTitle(item);
  };
  const onchangeSize = item => {
    setSize(item);
  };
  const onchangeNumber = item => {
    SetNumber(item);
  };
  const onValueChange = () => {
    setSwitch(!switchOn);
  };
  const onValueSwitch = () => {
    setSwitch1(!switchOn1);
  };
  const onValueSwitch1 = () => {
    setSwitch2(!switchOn2);
  };
  const MovetoBackScreen = () => {
    navigation.navigate(TabNav.Profile);
  };
  const RenderItems = ({title}) => {
    return (
      <View style={localStyle.textInputStyle}>
        <CText type={'M14'} numberOfLines={1}>
          {title}
        </CText>
      </View>
    );
  };

  const RenderSwitch = ({text, value, onValueChange}) => {
    return (
      <View style={[localStyle.containerStyle, styles.mv10]}>
        <CText type={'S14'} numberOfLines={1}>
          {text}
        </CText>
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{true: colors.black, false: colors.grey}}
          thumbColor={colors.white}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={localStyle.mainContainer}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexG1}>
        <View style={localStyle.containerStyle}>
          <CHeader img={images.arrowLeft} onPress={MovetoBackScreen} />
          <CText type={'B16'} numberOfLines={1}>
            {strings.SubmitWork}
          </CText>
          <View />
        </View>
        <CText type={'B24'} numberOfLines={1} style={localStyle.container}>
          {strings.SubmitWorkDetail}
        </CText>
        <CText type={'M14'} numberOfLines={2} color={colors.lightGray}>
          {strings.SubmitWorkOther}
        </CText>
        <View style={localStyle.ContentStyle}>
          <TouchableOpacity style={localStyle.borderStyle}>
            <SimpleLineIcons name={'plus'} size={moderateScale(15)} />
          </TouchableOpacity>
          <View style={styles.ml10}>
            <CText type={'M14'} numberOfLines={1} style={localStyle.container}>
              {strings.Addworkphoto}
            </CText>
            <CText
              type={'M14'}
              numberOfLines={2}
              color={colors.lightGray}
              style={localStyle.textStyle}>
              {strings.MaxMB}
            </CText>
          </View>
        </View>
        <RenderItems title={strings.Title} />
        <CTextInput
          placeholderText={strings.AddTitleyourwork}
          value={title}
          onChangeText={onchangeTitle}
        />
        <CDropdownInput
          label={strings.Category}
          type={'M14'}
          data={CategoryList}
          value={category}
          placeholder={strings.Pickoption}
          onChange={onChangeCategory}
        />
        <CDropdownInput
          label={strings.Medium}
          type={'M14'}
          data={CategoryList}
          value={category}
          placeholder={strings.Pickoption}
          onChange={onChangeCategory}
        />
        <RenderItems title={strings.Description} />
        <CTextInput placeholderText={strings.AddTitleyourwork} />
        <CText type={'B16'} numberOfLines={1} style={localStyle.textInputStyle}>
          {strings.EditionAuthenticity}
        </CText>
        <RenderSwitch
          text={strings.Isthisedition}
          value={switchOn2}
          onValueChange={onValueSwitch1}
        />
        <View style={localStyle.containerStyle}>
          <View>
            <RenderItems title={strings.EditionSize} />
            <CTextInput
              placeholderText={strings.Size}
              changeViewStyle={localStyle.changeTextStyle}
              value={size}
              onChangeText={onchangeSize}
            />
          </View>
          <View>
            <RenderItems title={strings.EditionNumber} />
            <CTextInput
              placeholderText={strings.Number}
              changeViewStyle={localStyle.changeTextStyle}
              value={number}
              onChangeText={onchangeNumber}
            />
          </View>
        </View>
        <RenderSwitch
          text={strings.Isworksigned}
          value={switchOn}
          onValueChange={onValueChange}
        />
        <RenderSwitch
          text={strings.Doauthenticity}
          value={switchOn1}
          onValueChange={onValueSwitch}
        />
        <CButton
          Title={strings.Submit}
          type={'B16'}
          ChangeBtnStyle={localStyle.ChangeBtnStyle}
          onPress={MovetoBackScreen}
        />
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  mainContainer: {
    ...styles.mainContainerSurface,
    ...styles.mh15,
  },
  containerStyle: {
    ...styles.flexRow,
    ...styles.aligncenter,
    ...styles.justifyBetween,
    ...styles.mb5,
  },
  container: {
    ...styles.mt20,
    ...styles.mb10,
  },
  borderStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderColor: colors.lightGray,
    borderWidth: moderateScale(1),
    ...styles.aligncenter,
    ...styles.justifyCenter,
    ...styles.mv15,
  },
  ContentStyle: {
    ...styles.flexRow,
    ...styles.alignEnd,
  },
  textStyle: {
    ...styles.mb15,
  },
  textInputStyle: {
    ...styles.mt20,
  },
  dropdownStyle: {
    ...typography.fontWeights.Medium,
    ...typography.fontSizes.f14,
    color: colors.grayText,
  },
  dropStyle: {
    width: moderateScale(345),
    borderWidth: moderateScale(1.5),
    borderColor: colors.borderColor,
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
  changeTextStyle: {
    width: moderateScale(156),
  },
  ChangeBtnStyle: {
    ...styles.mv20,
  },
});
