import {View} from 'react-native';
import React from 'react';
import {Provider} from '~/types/index';
import CustomImage from '../../../atoms/image';
import styles from './styles';
import CustomText from '../../../atoms/text';
import CustomTouchableOpacity from '../../../atoms/pressable';
import {useNavigation} from '@react-navigation/native';

import type {CompositeNavigationProp} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {StackNavigationProp} from '@react-navigation/stack';
import StarsRate from '../../starsRate';
import {useTranslation} from 'react-i18next';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<any, 'Profile'>,
  StackNavigationProp<any>
>;

interface ProviderCardProps {
  provider: Provider;
}

const ProviderDataCard: React.FC<ProviderCardProps> = ({provider}) => {
  const {t} = useTranslation();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const openProvider = () => {
    navigation.navigate('ProviderProfile', provider?.provider);
  };

  return (
    <CustomTouchableOpacity style={styles.providerCard} onPress={openProvider}>
      <View style={styles.logoContainer}>
        <CustomImage
          source={{uri: provider?.provider?.logoUrl}}
          style={styles.logo}
        />
      </View>
      <View style={styles.prividerDataContainer}>
        <View>
          <CustomText style={styles.prividerTitle}>
            {provider?.title}
          </CustomText>
        </View>
        {/* <View>
          <CustomText style={styles.prividerTitle}>
            {provider?.branchCount}{' '}
            {provider?.branchCount > 1 ? t('branches') : t('branch')}
          </CustomText>
        </View> */}
        <StarsRate stars={provider.rate} />
      </View>
    </CustomTouchableOpacity>
  );
};

export default ProviderDataCard;
