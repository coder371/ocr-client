import {StyleSheet} from 'react-native';
import {colors} from '~/theme/colors';
const styles = StyleSheet.create({
  BranchCard: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 5,
    // alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    borderWidth: 2,
    borderColor: colors.primary,
    flexDirection: 'row-reverse',
  },
  icon: {
    height: 40,
    width: 40,
  },
  serviceTitleContainer: {
    marginRight: 10,
  },
  serviceTitle: {
    color: colors.primary,
    fontSize: 17,
  },
  serviceLocation: {
    color: colors.black,
    fontSize: 13,
  },
  serviceAddress: {
    color: colors.mute,
    fontSize: 13,
    width: '70%',
    alignSelf: 'flex-end',
  },
});
export default styles;
