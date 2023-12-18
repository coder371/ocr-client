import { colors } from '~/theme/colors';

import metrics from '~/theme/metrics';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  screenTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: metrics.navBarHeight,
    // marginBottom: metrics.screenGutter,
  },
  screenTitleText: {
    color: colors.white,
    fontSize: 19,
  },
});
export default styles;
