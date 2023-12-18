import {View} from 'react-native';
import React from 'react';
import {Provider, ProviderBranch} from '~/types/index';
import CustomImage from '../../../atoms/image';
import styles from './styles';
import CustomText from '../../../atoms/text';
import CustomTouchableOpacity from '../../../atoms/pressable';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {CompositeNavigationProp} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {StackNavigationProp} from '@react-navigation/stack';
import {colors} from '~/theme/colors';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<any, 'Profile'>,
  StackNavigationProp<any>
>;
const ProviderCard: React.FC<ProviderBranch> = ({
  provider,
  distance,
  title,
}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const openProvider = () => {
    navigation.navigate('ProviderProfile', provider);
  };

  return (
    <CustomTouchableOpacity style={styles.providerCard} onPress={openProvider}>
      <View style={styles.providerDataContainer}>
        <View style={styles.logoContainer}>
          <CustomImage source={{uri: provider?.logoUrl}} style={styles.logo} />
        </View>
        <View>
          <CustomText style={styles.prividerTitle} numberOfLines={1}>
            {title}
          </CustomText>
        </View>
      </View>
      <View style={styles.prividerLocation}>
        {distance || distance === 0 ? (
          <>
            <Ionicons name={'location-sharp'} size={15} color={colors.red} />
            <CustomText style={styles.prividerLocationTitle}>
              {distance !== 0
                ? `${(distance / 1000).toFixed(2)} كم`
                : 'أنت قريب جداً'}
            </CustomText>
          </>
        ) : null}
      </View>
    </CustomTouchableOpacity>
  );
};

export default ProviderCard;
