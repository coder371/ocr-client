import {View} from 'react-native';
import React from 'react';
import {Category} from '~/types/index';
import CustomImage from '../../../atoms/image';
import styles from './styles';
import CustomText from '../../../atoms/text';
import CustomTouchableOpacity from '../../../atoms/pressable';
import {useNavigation} from '@react-navigation/native';
export default function CategoriesCard(category: Category) {
  const navigation = useNavigation<any>();
  return (
    <CustomTouchableOpacity
      style={styles.categoryCard}
      onPress={() =>
        navigation.navigate('Category', {
          category,
        })
      }>
      <View style={styles.logoContainer}>
        <CustomImage source={{uri: category.iconUrl}} style={styles.logo} />
      </View>
      <View style={styles.categoryTitleContainer}>
        <CustomText style={styles.categoryTitle} numberOfLines={1}>
          {category.title}
        </CustomText>
      </View>
      <View style={styles.numberOfProvidersContainer}>
        <CustomText style={styles.numberOfProviders} numberOfLines={1}>
          {category.numberOfProviders}
        </CustomText>
      </View>
    </CustomTouchableOpacity>
  );
}
