import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {createRef, memo, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ImagePicker from 'react-native-image-crop-picker';

// custom imports
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import {
  checkPlatform,
  deviceWidth,
  moderateScale,
} from '../../common/constants';
import CText from '../../components/common/CText';
import CTextInput from '../../components/common/CTextInput';
import {chatData} from '../../api/constant';
import {StackNav} from '../../navigation/NavigationKeys';
import ChoosePictureModal from '../../components/modals/ChoosePictureModal';

export default function Chat({navigation, route}) {
  const {userImage, name} = route.params;
  const [addChat, setAddChat] = useState('');
  const [selectImage, setSelectImage] = useState();
  const sheetRef = createRef(null);

  useEffect(() => {
    sheetRef?.current?.hide();
  }, [selectImage]);

  const onchangeComment = text => setAddChat(text);

  const goBack = () => navigation.goBack();

  const onPressFile = () => {
    sheetRef?.current.show();
  };

  const onPressCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      includeBase64: true,
    }).then(image => {
      setSelectImage(image);
    });
  };

  const onPressGallery = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    }).then(image => {
      setSelectImage(image);
    });
  };

  const onPressVoiceCall = () =>
    navigation.navigate(StackNav.VoiceCall, {userImage: userImage, name: name});

  const SenderMessage = memo(({item, index}) => {
    return (
      <View
        style={[
          localStyles.senderContainer,
          item.type == 'sender' && {borderBottomLeftRadius: moderateScale(30)},
          item.type !== 'sender' && {
            borderBottomRightRadius: moderateScale(30),
          },
          {
            borderTopLeftRadius: moderateScale(30),
            borderTopRightRadius: moderateScale(30),
            backgroundColor:
              item.type == 'sender' ? colors.black : colors.borderColor,
            alignSelf: item.type == 'sender' ? 'flex-end' : 'flex-start',
          },
        ]}>
        <CText
          style={styles.flex}
          color={item.type == 'sender' ? colors.white : colors.black}
          type="m16">
          {item.message}
        </CText>
        <CText color={colors.black} style={styles.pl10} type="r12">
          {item.time}
        </CText>
      </View>
    );
  });

  const RightIcon = () => {
    return (
      <TouchableOpacity style={localStyles.rightIconSty}>
        <Ionicons name={'send'} size={moderateScale(20)} color={colors.white} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainerSurface}>
      <View style={localStyles.container}>
        <TouchableOpacity
          onPress={goBack}
          style={[localStyles.backIconSty, {left: moderateScale(15)}]}>
          <Ionicons
            name="arrow-back-outline"
            size={moderateScale(24)}
            color={colors.textColor}
          />
        </TouchableOpacity>
        <View style={localStyles.textContainer}>
          <Image source={userImage} style={localStyles.imageStyle} />
          <View>
            <CText type={'M16'} numberOfLines={1} color={colors.black}>
              {name}
            </CText>
          </View>
        </View>
        <TouchableOpacity onPress={onPressVoiceCall}>
          <SimpleLineIcons name={'phone'} size={moderateScale(24)} />
        </TouchableOpacity>
      </View>
      <View style={localStyles.mainContainerWithRadius}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={
            checkPlatform() === 'ios' ? moderateScale(120) : null
          }
          style={styles.flex}
          behavior={checkPlatform() === 'ios' ? 'padding' : null}>
          <View style={styles.flex}>
            <FlatList
              data={chatData}
              renderItem={({item, index}) => (
                <SenderMessage item={item} index={index} />
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.mh20}
            />
            {
              <Image
                source={!!selectImage?.path ? {uri: selectImage?.path} : null}
                style={localStyles.imagesStyle}
              />
            }
          </View>
          <View style={styles.rowCenter}>
            <TouchableOpacity
              onPress={onPressFile}
              style={localStyles.attachBtn}>
              <Ionicons
                name={'attach-outline'}
                size={moderateScale(24)}
                color={colors.white}
              />
            </TouchableOpacity>
            <CTextInput
              placeHolder={strings.messages}
              keyBoardType={'default'}
              value={addChat}
              autoCapitalize={'none'}
              onChangeText={onchangeComment}
              changeViewStyle={localStyles.inputContainerStyle}
              RightIcon={RightIcon}
            />
          </View>

          <ChoosePictureModal
            sheetRef={sheetRef}
            onPressCamera={onPressCamera}
            onPressGallery={onPressGallery}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pv15,
    height: moderateScale(60),
  },
  backIconSty: {
    backgroundColor: colors.white,
    ...styles.p5,
    borderRadius: moderateScale(20),
    position: 'absolute',
    zIndex: 1,
  },
  imageStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    ...styles.mh10,
  },
  textContainer: {
    ...styles.mh40,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pv10,
  },
  timeContainer: {
    ...styles.pv10,
    ...styles.mv15,
    ...styles.ph15,
    borderRadius: moderateScale(12),
  },
  senderContainer: {
    ...styles.p15,
    ...styles.flexRow,
    maxWidth: '80%',
    ...styles.itemsEnd,
    ...styles.mt10,
  },
  inputContainerStyle: {
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    ...styles.ph10,
    width: deviceWidth - moderateScale(100),
  },
  attachBtn: {
    height: moderateScale(46),
    width: moderateScale(46),
    borderRadius: moderateScale(22),
    ...styles.center,
    ...styles.mr10,
    ...styles.mt10,
    backgroundColor: colors.black,
  },
  avatar: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    ...styles.mh10,
  },
  rightIconSty: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    ...styles.center,
    backgroundColor: colors.black,
  },
});
