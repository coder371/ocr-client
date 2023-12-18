import {View} from 'react-native';
import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import CustomImage from '~/common/components/atoms/image';
import styles from './styles';
import CustomText from '~/common/components/atoms/text';
import CustomTouchableOpacity from '~/common/components/atoms/pressable';
import {changeLanguage} from '~/i18n';
import MaterialIcons from 'react-native-vector-icons/Entypo';
import {colors} from '~/theme/colors';
import {useTranslation} from 'react-i18next';
import {SheetProps} from 'react-native-actions-sheet';
import {Branch} from '~/types';

function ServiceInfoSheet(props: SheetProps) {
  const branch: Branch = props.payload;
  console.log('🚀 ~ file: index.tsx:17 ~ ServiceInfoSheet ~ branch:', branch);
  const {t} = useTranslation();
  const langs = [
    {
      id: 'ar',
      title: 'عربي',
      icon: require('@assets/icons/united-arab-emirates.png'),
    },
    {
      id: 'en',
      title: 'English',
      icon: require('@assets/icons/united-kingdom.png'),
    },
  ];
  return (
    <ActionSheet id={props.sheetId} i18nIsDynamicList gestureEnabled>
      <View style={styles.languagesContainer}>
        {langs.map((language, index) => {
          return (
            <CustomTouchableOpacity
              key={index}
              style={styles.languageItem}
              onPress={() => changeLanguage(language.id)}>
              <View>
                <CustomImage
                  style={styles.languageImage}
                  source={language.icon}
                />
              </View>
              <View style={styles.languageItemTitleContainer}>
                <View>
                  <CustomText style={styles.languageItemTitleText}>
                    {language.title}
                  </CustomText>
                </View>
              </View>
              {t('lang') === language.id ? (
                <View style={styles.languageActiveItem}>
                  <MaterialIcons
                    name="check"
                    color={colors.primary}
                    size={30}
                  />
                </View>
              ) : null}
            </CustomTouchableOpacity>
          );
        })}
      </View>
    </ActionSheet>
  );
}

export default ServiceInfoSheet;
