import {Platform, StyleSheet} from 'react-native';
import { colors } from '~/theme/colors';
import fonts, {bold} from '~/theme/fonts';
const textStyle = StyleSheet.create({
  text: {
    fontFamily:
      Platform.OS === 'android'
        ? fonts.family.global.medium
        : fonts.family.global.medium,
    fontSize: fonts.size.font12,
    color: colors.black,
    textAlign: 'right',
  },
});
export default textStyle;
