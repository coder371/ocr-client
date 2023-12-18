import {StyleSheet} from 'react-native';
import { colors } from '~/theme/colors';

import metrics from '~/theme/metrics';
const Styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: colors.black,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  inputText: {
    color: colors.primary,
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    width: '100%',
  },
  option: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    color: colors.white,
  },
  cancelOption: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: colors.danger,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
  },
  optionsContainer: {
    height: 250,
    width: metrics.screenWidth,
  },
  cancelButton: {
    color: colors.white,
  }
});
export default Styles;
