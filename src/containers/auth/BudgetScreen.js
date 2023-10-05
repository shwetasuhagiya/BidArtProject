import { FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

//custom import
import { styles } from '../../themes';
import { BudgetList } from '../../api/constant';
import StepIndicator from '../../components/StepIndicator';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import images from '../../assets/images';
import { moderateScale } from '../../common/constants';
import CButton from '../../components/common/CButton';
import { StackNav } from '../../navigation/NavigationKeys';
import { StoreLoginData } from '../../utils/asyncstorage';

const BudgetScreen = ({navigation}) => {
    const [select,setSelect] = useState(BudgetList)

    const MovetoNextBtn =()=>{
          StoreLoginData(true),
        navigation.navigate(StackNav.TabNavigation)
    }

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

    const ListHeaderComponent=()=>{
        return(
            <View>
                <StepIndicator step={5} style={styles.mh0}/>
                <CText type={'B24'} style={localstyle.titleStyle}>{strings.budgetTitle}</CText>
            </View>
        )
    }
    const renderItem=({item})=>{
        return (
          <View style={localstyle.itemStyle}>
            <CText type={'M16'}>{item.price}</CText>
            <TouchableOpacity onPress={() => handleOnpress(item)}>
              {item.selected ? (
                <Image source={images.rounded} />
              ) : (
                <Image source={images.circle} style={localstyle.circlestyle}/>
              )}
            </TouchableOpacity>
          </View>
        );
    }
  return (
    <SafeAreaView style={localstyle.mainContainer}>
      <View style={localstyle.Container}>
        <FlatList
          data={select}
          ListHeaderComponent={ListHeaderComponent}
          renderItem={renderItem}
        />
        <CButton
          Title={strings.Next}
          ChangeBtnStyle={localstyle.nextbtnStyle}
          onPress={MovetoNextBtn}
        />
      </View>
    </SafeAreaView>
  );
};
const localstyle = StyleSheet.create({
  mainContainer: {
    ...styles.mh15,
    ...styles.mainContainerSurface,
  },
  titleStyle: {
    ...styles.mb30,
  },
  itemStyle: {
    ...styles.mv15,
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
  circlestyle: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
  Container: {
    ...styles.justifyBetween,
    height: '100%',
  },
  nextbtnStyle: {
    bottom: moderateScale(20),
  },
});
export default BudgetScreen;
