import metrics from '~/theme/metrics';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    height: 200,
    marginVertical: 5,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: metrics.screenWidthWithOutGutter,
    height: 200,
    borderRadius: 10,
    objectFit: 'contain',
  },
});

export default styles;
