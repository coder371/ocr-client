import {StyleSheet} from 'react-native';
import {colors} from '~/theme/colors';
import metrics from '~/theme/metrics';
const styles = StyleSheet.create({
  languagesContainer: {
    paddingHorizontal: metrics.screenGutter + 10,
    paddingVertical: 10,
  },
  languageImage: {
    height: 50,
    width: 50,
  },
  languageItem: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: colors.border,
    borderRadius: 10,
  },
  languageItemTitleContainer: {
    marginRight: 10,
  },
  languageItemTitleText: {
    fontSize: 18,
  },
  languageActiveItem: {
    position: 'absolute',
    right: 10,
    zIndex: 9,
  },
});
export default styles;
