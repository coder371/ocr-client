import {StyleSheet} from 'react-native';
import {colors} from '~/theme/colors';
import metrics from '~/theme/metrics';
const styles = StyleSheet.create({
  providerCard: {
    flexDirection: 'row-reverse',
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 5,
    alignItems: 'center',
    borderRadius: 10,
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
  },
  prividerDataContainer: {
    marginRight: 10,
  }
});
export default styles;
