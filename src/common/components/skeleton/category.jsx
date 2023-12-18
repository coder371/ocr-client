import metrics from '~/theme/metrics';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CategorySkeleton = () => {
  const width = 110;
  return (
    <SkeletonPlaceholder
      speed={600}
      highlightColor="#e9e9e9"
      backgroundColor="#e0e0e0">
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={metrics.screenWidthWithOutGutter}
          flexDirection="row-reverse"
          alignItems="flex-start"
          marginVertical={10}>
          <SkeletonPlaceholder.Item
            width={width}
            height={40}
            marginHorizontal={10}
            borderRadius={5}
          />
          <SkeletonPlaceholder.Item
            width={width}
            height={40}
            marginHorizontal={10}
            borderRadius={5}
          />
          <SkeletonPlaceholder.Item
            width={width}
            height={40}
            marginHorizontal={10}
            borderRadius={5}
          />
          <SkeletonPlaceholder.Item
            width={width}
            height={40}
            marginHorizontal={10}
            borderRadius={5}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
export default CategoriesSkeleton;
