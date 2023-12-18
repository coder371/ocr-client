import metrics from '~/theme/metrics';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CategoriesSkeleton = () => {
  return (
    <SkeletonPlaceholder
      speed={400}
      highlightColor="#e9e9e9"
      backgroundColor="#e0e0e0">
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item paddingHorizontal={10}>
          {[0, 0, 0, 0, 0].map((_, index) => {
            return (
              <SkeletonPlaceholder.Item
                key={index}
                width={'100%'}
                height={metrics.screenHeight / 7}
                marginVertical={5}
                borderRadius={5}
              />
            );
          })}
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
export default CategoriesSkeleton;
