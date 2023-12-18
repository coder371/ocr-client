import {StyleSheet} from 'react-native';
import {white, black, colors} from '~/theme/colors';
import fonts, {bold} from '~/theme/fonts';
const textStyle = StyleSheet.create({
  textInputContainer: {
    justifyContent: 'center',
  },
  textInput: {
    fontFamily: fonts.family.global.regular,
    fontSize: fonts.size.font12,
    color: colors.black,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 10,
    zIndex: 2,
  },
  leftIconContainer: {
    position: 'absolute',
    left: 20,
    zIndex: 2,
    padding: 15,
  },
  rightPaddingIcon: {
    paddingRight: 40,
  }
});
export default textStyle;
