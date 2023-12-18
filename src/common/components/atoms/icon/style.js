import {StyleSheet} from 'react-native';
import {white, black} from '~/theme/colors';
import fonts, {bold} from '~/theme/fonts';
const textStyle = StyleSheet.create({
  tint: {
    tintColor: 'red',
  },
  mini: {
    width: 15,
    height: 15,
  },
  minism: {
    width: 20,
    height: 20,
  },
  sm: {
    width: 25,
    height: 25,
  },
  xsm: {
    width: 30,
    height: 30,
  },
  md: {
    width: 45,
    height: 45,
  },
  lg: {
    width: 65,
    height: 65,
  },
  xl: {
    width: 85,
    height: 85,
  },
});
export default textStyle;
