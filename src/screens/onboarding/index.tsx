import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import CustomImage from '~/common/components/atoms/image';
// import CustomImage from '~/common/components/atoms/image';

export const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <Onboarding
      onDone={() => console.log('done')}
      skipToPage={2}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <CustomImage
              source={require('../../assets/icon-white-1024.png')}
              style={{height: 150, width: 150}}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fe6e58',
          image: (
            <CustomImage
              source={require('../../assets/icon-white-1024.png')}
              style={{height: 150, width: 150}}
            />
          ),
          title: 'The Title',
          subtitle: 'This is the subtitle that sumplements the title.',
        },
        {
          backgroundColor: '#999',
          image: (
            <CustomImage
              source={require('../../assets/icon-white-1024.png')}
              style={{height: 150, width: 150}}
            />
          ),
          title: 'Triangle',
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  );
};
