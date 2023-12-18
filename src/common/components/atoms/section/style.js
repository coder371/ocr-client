import { colors } from '~/theme/colors';

import fonts from '~/theme/fonts';
import {StyleSheet} from 'react-native';
const textStyle = StyleSheet.create({
  section: {
    paddingVertical: 10,
    // marginVertical: 5,
    // backgroundColor:'red'
  },
  backgroundColorWhite: {
    backgroundColor: colors.white,
  },
  borderTop: {
    borderTopWidth: 1,
    paddingTop: 10,
    borderColor: colors.border,
  },
  borderBottom: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: colors.border,
  },
  borderAll: {
    borderWidth: 1,
    padding: 10,
    borderColor: colors.border,
  },
  sectionTitleContainer: {
    marginBottom: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionIconContainer: {
    marginLeft: 5,
  },
  sectionTitle: {
    fontFamily: fonts.family.global.bold,
    fontSize: fonts.size.font16,
    color: colors.primary,
  },
  sectionGutter: {
    paddingHorizontal: 10,
  },
  borderRadius: {
    borderRadius: 5,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
});
export default textStyle;
