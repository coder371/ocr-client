import {StyleSheet} from 'react-native';
import {colors} from '~/theme/colors';
const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    height: 60,
    width: 60,
  },
  categoryTitleContainer: {
    marginTop: 0,
  },
  categoryTitle: {
    fontSize: 15,
    width: '100%',
  },
  numberOfProvidersContainer: {
    position: 'absolute',
    left: 5,
    top: 5,
    backgroundColor: colors.primary,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 20,
  },
  numberOfProviders: {
    fontSize: 10,
    color: colors.white,
    lineHeight: 22,
  },
});
export default styles;
