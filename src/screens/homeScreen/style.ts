import {StyleSheet} from 'react-native';
import {colors} from '~/theme/colors';
const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 50,
  },
  uploadItem: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 10,
  },
});
export default styles;
