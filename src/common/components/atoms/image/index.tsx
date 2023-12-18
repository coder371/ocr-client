import React from 'react';
import {
  createImageProgress,
  ImageProgressProps,
} from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';

const Image = createImageProgress(FastImage);

interface Props {
  source: ImageProgressProps['source'];
  style?: ImageProgressProps['style'];
  resizeMode?: 'contain' | 'center' | 'cover' | 'stretch';
}

const CustomImage: React.FC<Props> = ({
  source,
  resizeMode = 'contain',
  style = {},
}) => {
  return <Image source={source} style={style} resizeMode={resizeMode} />;
};

export default CustomImage;
