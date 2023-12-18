import React from 'react';
import {View, Image, Linking} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';
import SliderSkeleton from '../../skeleton/slider';
import CustomTouchableOpacity from '../../atoms/pressable';
// import {useNavigation} from '@react-navigation/native';
import {colors} from '~/theme/colors';
import {Advertisement} from '~/types/index';

interface ImageViewerProps {
  advertisements: Advertisement[];
}
const ImageViewer = ({advertisements}: ImageViewerProps) => {
  // const navigation = useNavigation();
  const clickAdHandler = (ad: Advertisement) => {
    if (ad.target === 'URL') {
      if (ad.source) {
        Linking.openURL(ad.source);
      }
    } else {
      // if (ad.source === 'POINTS') {
      //   navigation.navigate('Points', {...ad.data});
      // } else if (ad.source === 'CART') {
      //   navigation.navigate('Cart', {...ad.data});
      // } else if (ad.source === 'SEARCH') {
      //   navigation.navigate('Search', {...ad.data});
      // } else if (ad.source === 'PRODUCT') {
      //   navigation.navigate('Search', {...ad.data});
      // }
    }
    console.log('🚀 ~ file: index.js:13 ~ ImageViewer ~ ad:', ad);
  };
  return (
    <View style={{paddingVertical: 5}}>
      {advertisements ? (
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          scrollEnabled={true}
          // loop={true}
          showsPagination={false}
          autoplay={true}
          dotColor={colors.mute}
          activeDotColor={colors.primary}
          bounces={true}
          // dot={<></>}
          // activeDot={<></>}
        >
          {advertisements?.map((ad, index) => (
            <CustomTouchableOpacity
              style={styles.slide}
              key={index}
              onPress={() => clickAdHandler(ad)}>
              <Image source={{uri: ad.imageUrl}} style={styles.image} />
            </CustomTouchableOpacity>
          ))}
        </Swiper>
      ) : (
        <SliderSkeleton />
      )}
    </View>
  );
};

export default ImageViewer;
