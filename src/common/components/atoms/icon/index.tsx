import {
  createImageProgress,
  ImageProgressProps,
} from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';
import styles from './style';
import {Platform} from 'react-native';

const Image = createImageProgress(FastImage);

type Size = 'mini' | 'minism' | 'sm' | 'md' | 'lg' | 'xl' | 'xsm';

interface Props {
  source: ImageProgressProps['source'];
  size?: Size;
  style?: ImageProgressProps['source'];
  tintColor?: ImageProgressProps['source'];
}
const Icon: React.FC<Props> = ({source, size, style, tintColor}) => {
  return (
    <Image
      source={source}
      style={[styles[size], style]}
      resizeMode={Platform.OS === 'android' ? 'contain' : 'cover'}
      tintColor={tintColor}
    />
  );
};

export default Icon;
