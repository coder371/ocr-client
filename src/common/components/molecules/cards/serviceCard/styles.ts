import {StyleSheet} from 'react-native';
import {colors} from '~/theme/colors';
const styles = StyleSheet.create({
  serviceCard: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  iconContainer: {
    marginBottom: 10,
  },
  icon: {
    height: 50,
    width: 50,
  },
  serviceTitleContainer: {
    marginTop: 0,
    width: 100,
    alignContent: 'center',
    justifyConten: 'center',
    alignItems: 'center',
  },
  serviceTitle: {
    color: colors.primary,
    fontSize: 15,
    width: '100%',
    textAlign: 'center',
  },
  numberOfProvidersContainer: {
    flexDirection: 'row-reverse',
    position: 'absolute',
    left: 5,
    top: 5,
    backgroundColor: colors.primary,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 25,
  },
  numberOfProviders: {
    fontSize: 10,
    color: colors.white,
    lineHeight: 22,
  },
});
export default styles;
