import {View} from 'react-native';
import React from 'react';
import CustomText from '@common/components/atoms/text';
import styles from './styles';

export default function ScreenTitle({title}) {
  return (
    <View style={styles.screenTitle}>
      <CustomText style={styles.screenTitleText}>{title}</CustomText>
    </View>
  );
}
