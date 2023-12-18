import {StyleSheet} from 'react-native';
import {colors} from '~/theme/colors';
import metrics from '~/theme/metrics';
const styles = StyleSheet.create({
  providerCard: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
    margin: 5,
    borderRadius: 10,
    width: metrics.screenWidth / 2,
  },
  providerDataContainer: {
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 100,
    padding: 20,
    overflow: 'hidden',
    borderWidth: 2.5,
    borderColor: colors.primary,
  },
  prividerTitle: {
    fontSize: 15,
    textAlign: 'center',
  },
  prividerLocation: {
    flexDirection: 'row-reverse',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  prividerLocationTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
});
export default styles;
