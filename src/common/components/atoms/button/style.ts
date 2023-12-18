import {StyleSheet} from 'react-native';
import {black, colors} from '~/theme/colors';
import fonts from '~/theme/fonts';
import metrics from '~/theme/metrics';
const textStyle = StyleSheet.create({
  buttonView: {
    marginBottom: 20,
    minWidth: '100%',
  },
  button: {
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
  },
});
export default textStyle;
