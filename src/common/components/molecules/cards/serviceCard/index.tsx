import {View} from 'react-native';
import React from 'react';
import {Service} from '~/types/index';
import CustomImage from '../../../atoms/image';
import styles from './styles';
import CustomText from '../../../atoms/text';
import CustomTouchableOpacity from '../../../atoms/pressable';
export default function ServiceCard(service: Service) {
  return (
    <CustomTouchableOpacity style={styles.serviceCard}>
      <View style={styles.iconContainer}>
        <CustomImage
          source={{uri: service.service.iconUrl}}
          style={styles.icon}
        />
      </View>
      <View style={styles.serviceTitleContainer}>
        <CustomText style={styles.serviceTitle} numberOfLines={1}>
          {service.service.title}
        </CustomText>
      </View>
      <View style={styles.numberOfProvidersContainer}>
        <CustomText style={styles.numberOfProviders} numberOfLines={1}>
          {service.contract.discount}%
        </CustomText>
        <CustomText style={styles.numberOfProviders}>{'-'} </CustomText>
      </View>
    </CustomTouchableOpacity>
  );
}
