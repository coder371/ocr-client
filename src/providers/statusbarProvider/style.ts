import { colors } from '~/theme/colors';

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  splashContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.primary,
  },
  logo: {
    height: 150,
    width: 150,
  },
});
export default styles;
