import {colors} from '~/theme/colors';

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  scanContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.primary,
  },
  camera: {height: '100%', width: '100%', backgroundColor:'red'},
  logo: {
    height: 150,
    width: 150,
  },
  fashButton: {
    position: 'absolute',
    top: 50,
    zIndex: 5,
    left: 10,
    padding: 10,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    // width: 80,
    // height: 80,
    padding: 30,
    backgroundColor: colors.white + '50',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.white,
    zIndex: 5,
  },
});
export default styles;
