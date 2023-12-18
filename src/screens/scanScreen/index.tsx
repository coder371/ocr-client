import {View, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import ImageResizer from 'react-native-image-resizer';
import CustomTouchableOpacity from '~/common/components/atoms/pressable';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {googleOcrController} from '~/controller';

export const ScanScreen = () => {
  const navigation = useNavigation<any>();
  const camera = useRef<Camera>(null);
  const {hasPermission, requestPermission} = useCameraPermission();

  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });
  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const takePhonto = async () => {
    const photo = await camera?.current?.takePhoto({
      qualityPrioritization: 'speed',
      flash: 'off',
      enableShutterSound: true,
    });

    const resizedPhoto = await ImageResizer.createResizedImage(
      `file://${photo.path}`,
      800, 
      600, 
      'JPEG',
      80,
    );
    googleOcrController({
      navigation,
      image: resizedPhoto,
    });
  };
  if (device == null) {
    return (
      <View>
        <Text>test</Text>
      </View>
    );
  }
  console.log("🚀 ~ file: index.tsx:59 ~ ScanScreen ~ device:", device)
  if (device) {
    return (
      <View style={styles.scanContainer}>
        <Camera
          ref={camera}
          photo={true}
          style={styles.camera}
          device={device}
          isActive={true}
          enableHighQualityPhotos={false}
        />
        <CustomTouchableOpacity style={styles.button} onPress={takePhonto} />
      </View>
    );
  }
  return false;
};
