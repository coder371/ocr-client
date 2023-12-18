import {View} from 'react-native';
import React from 'react';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import styles from './styles';
import {useTranslation} from 'react-i18next';

import Button from '~/common/components/atoms/button';
import Section from '~/common/components/atoms/section';
import {navigate} from '~/router/RootNavigation';
function addChildSheet(props) {
  const {t} = useTranslation();
  const goTo = (target: string) => {
    navigate(target);
    SheetManager.hide('addChildSheet');
  }
  return (
    <ActionSheet id={props.sheetId} i18nIsDynamicList gestureEnabled>
      <Section gutter title="اختر الحالة">
        <Button
          title="فرد مسجل ولديه حساب"
          buttonViewStyle={styles.button}
          onPress={() => goTo('UserDefinition')}
        />
        <Button
          title="فرد غير مسجل"
          buttonViewStyle={styles.button}
          onPress={() => goTo('NewUnSginedChild')}
        />
      </Section>
    </ActionSheet>
  );
}

export default addChildSheet;
