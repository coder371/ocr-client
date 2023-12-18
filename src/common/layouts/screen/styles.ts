import metrics from '~/theme/metrics';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    flex: 1,
  },
  screenContentWrapper: {
    // marginHorizontal: metrics.screenGutter,
    paddingTop: metrics.screenGutter,
  },
  backIcon: {
    position: 'absolute',
    zIndex: 100,
    right: 20,
    top: 30,
  },
});
export default styles;
