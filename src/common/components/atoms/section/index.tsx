import {View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import styles from './style';
import CustomText from '../text';
import CustomTouchableOpacity from '../pressable';

interface SectionProps {
  icon?: ReactNode;
  children?: ReactNode;
  style?: ViewStyle;
  border?: 'top' | 'bottom' | 'all' | undefined;
  title?: string;
  actionTitle?: string;
  action?: () => void;
  gutter?: boolean;
  titleGutter?: boolean;
  radius?: boolean;
  sectionStyle?: ViewStyle;
  shadow?: boolean;
  backgroundColorWhite?: boolean;
}

const Section: React.FC<SectionProps> = ({
  icon,
  children,
  style,
  border,
  title,
  actionTitle,
  action,
  gutter,
  titleGutter,
  radius,
  sectionStyle,
  shadow,
  backgroundColorWhite = true,
}: SectionProps) => {
  return (
    <View
      style={[
        sectionStyle,
        styles.section,
        gutter === true ? styles.sectionGutter : {},
        border === 'top' ? styles.borderTop : {},
        border === 'bottom' ? styles.borderBottom : {},
        border === 'all' ? styles.borderAll : {},
        radius ? styles.borderRadius : {},
        shadow ? styles.shadow : {},
        backgroundColorWhite ? styles.backgroundColorWhite : {},
      ]}>
      {title ? (
        <View
          style={[
            styles.sectionTitleContainer,
            titleGutter === true ? styles.sectionGutter : {},
          ]}>
          {icon ? (
            <View style={styles.sectionIconContainer}>{icon}</View>
          ) : null}
          <CustomText style={styles.sectionTitle} numberOfLines={1}>
            {title}
          </CustomText>
          {actionTitle ? (
            <CustomTouchableOpacity onPress={action}>
              <CustomText numberOfLines={1}>{actionTitle}</CustomText>
            </CustomTouchableOpacity>
          ) : null}
        </View>
      ) : null}
      <View style={[style]}>{children}</View>
    </View>
  );
};

export default Section;
