import {StyleSheet} from 'react-native';
import {colors} from '~/theme/colors';
import metrics from '~/theme/metrics';
const styles = StyleSheet.create({
  locationContainer: {
    paddingHorizontal: metrics.screenGutter + 10,
    paddingVertical: 10,
    // alignItems: 'center',
    width: metrics.screenWidth,
  },
});
export default styles;
