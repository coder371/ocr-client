import {ToastAndroid} from 'react-native';
import {googleOcr} from '~/services/ocr';
interface googleOcrControllerProps {
  navigation: any;
  image: any;
}
export const googleOcrController = async ({
  navigation,
  image,
}: googleOcrControllerProps) => {
  const data = await googleOcr({
    image: {uri: image.uri, name: 'photo.jpg', type: 'image/jpeg'},
  });
  if (data) {
    navigation.navigate('FormScreen', data);
  } else {
    ToastAndroid.show('Try Agine', ToastAndroid.SHORT);
  }
};
