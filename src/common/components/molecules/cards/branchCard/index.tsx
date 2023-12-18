import {View} from 'react-native';
import React from 'react';
import {Branch} from '~/types/index';
import CustomImage from '../../../atoms/image';
import styles from './styles';
import CustomText from '../../../atoms/text';
import CustomTouchableOpacity from '../../../atoms/pressable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '~/theme/colors';
import {SheetManager} from 'react-native-actions-sheet';
import StarsRate from '../../starsRate';

interface BranchCardProps {
  branch: Branch;
}
export default function BranchCard({branch}: BranchCardProps) {
  return (
    <CustomTouchableOpacity
      style={styles.BranchCard}
      onPress={() =>
        SheetManager.show('BrachInfoSheet', {
          payload: branch,
        })
      }>
      <View style={styles.iconContainer}>
        <CustomImage
          source={{uri: branch?.provider?.logoUrl}}
          style={styles.icon}
        />
      </View>
      <View style={styles.serviceTitleContainer}>
        <View>
          <CustomText style={styles.serviceTitle} numberOfLines={1}>
            {branch?.title}
          </CustomText>
        </View>
        <View>
          <CustomText style={styles.serviceLocation} numberOfLines={1}>
            {branch?.region?.title} - {branch?.city.title}
          </CustomText>
        </View>
        <View>
          <CustomText style={styles.serviceAddress} numberOfLines={2}>
            {branch?.translations?.address?.ar}
          </CustomText>
        </View>
        <StarsRate stars={branch.rate} />
      </View>
    </CustomTouchableOpacity>
  );
}
