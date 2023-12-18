import {View} from 'react-native';
import React from 'react';
import CustomText from '@common/components/atoms/text';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '~/theme/colors';

interface StarsRateProps {
  stars: number;
}
export default function StarsRate({stars}: StarsRateProps) {
  console.log("🚀 ~ file: index.tsx:12 ~ StarsRate ~ stars:", stars)
  return (
    <View style={styles.starsRate}>
      <CustomText>
        <AntDesign name="star" size={15} color={colors.gold} />{' '}
        {stars?.toFixed(1)}
      </CustomText>
    </View>
  );
}
