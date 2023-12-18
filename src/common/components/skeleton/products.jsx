import metrics from '~/theme/metrics';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import CategoriesSkeleton from './categories';

const ProductsSkeleton = () => {
  return (
    <View>
      <SkeletonPlaceholder
        speed={600}
        highlightColor="#e9e9e9"
        backgroundColor="#e0e0e0">
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item height={210} />
            <SkeletonPlaceholder.Item height={210} />
            <SkeletonPlaceholder.Item height={210} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};
export default ProductsSkeleton;
