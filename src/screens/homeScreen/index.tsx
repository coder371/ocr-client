import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import CustomTouchableOpacity from '~/common/components/atoms/pressable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '~/theme/colors';
import styles from './style';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {googleOcrController} from '~/controller';
import ImageResizer from 'react-native-image-resizer';
import {useCameraPermission} from 'react-native-vision-camera';

export const Home = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const navigation = useNavigation<any>();

  const SelectImage = async () => {
    const image = await launchImageLibrary({
      quality: 1,
      mediaType: 'photo',
    });
    if (image) {
      googleOcrController({
        image: image?.assets[0],
        navigation,
      });
    }
  };
  const openCamera = async () => {
    if (!hasPermission) {
      await requestPermission();
    }

    const image = await launchCamera({
      quality: 1,
      mediaType: 'photo',
    });
    const resizedPhoto = await ImageResizer.createResizedImage(
      image?.assets[0].uri,
      800,
      600,
      'JPEG',
      80,
    );
    if (image) {
      googleOcrController({
        image: resizedPhoto,
        navigation,
      });
    }
  };

  return (
    <View style={styles.screen}>
      <CustomTouchableOpacity
        style={styles.uploadItem}
        onPress={() => SelectImage()}>
        <Ionicons
          name={'cloud-upload-outline'}
          size={100}
          color={colors.primary}
        />
      </CustomTouchableOpacity>
      <CustomTouchableOpacity
        style={styles.uploadItem}
        onPress={() => openCamera()}>
        <Ionicons name={'camera-outline'} size={100} color={colors.primary} />
      </CustomTouchableOpacity>
    </View>
  );
};
