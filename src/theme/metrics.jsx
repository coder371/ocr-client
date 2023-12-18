const {Dimensions, Platform} = require('react-native');
const {width, height} = Dimensions.get('window');
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  screenWidthWithOutGutter: (width < height ? width : height) - 10,
  screenGutter: 5,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 15,
  buttonPaddingVertical: 10,
  tabsBarHeight: Platform.OS === 'android' ? 80 : 90,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};
export default metrics;
