import React from 'react';
import {createImageProgress} from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';
import styles from './style';

const Image = createImageProgress(FastImage);

interface Props {
  source: {};
  style?: {};
}

const Avatar: React.FC<Props> = ({source, style = {}}) => {
  return (
    <Image
      source={source}
      style={[styles.avatar, style]}
      resizeMode={'contain'}
    />
  );
};

export default Avatar;
