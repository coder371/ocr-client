import {colors} from '~/theme/colors';

import {StyleSheet} from 'react-native';
import metrics from '~/theme/metrics';
const styles = StyleSheet.create({
  screen: {
    padding: metrics.screenGutter,
  },
  input: {
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingVertical: 15,
  },
  inputContainer: {
    marginBottom: 5,
  },
});
export default styles;
