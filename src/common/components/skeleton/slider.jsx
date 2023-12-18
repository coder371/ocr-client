import metrics from '~/theme/metrics';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SliderSkeleton = () => {
  return (
    <View>
      <SkeletonPlaceholder
        speed={600}
        highlightColor="#e9e9e9"
        backgroundColor="#e0e0e0">
        <SkeletonPlaceholder.Item
          width={'auto'}
          height={210}
          marginHorizontal={10}
          borderRadius={25}
        />
      </SkeletonPlaceholder>
    </View>
  );
};
export default SliderSkeleton;
