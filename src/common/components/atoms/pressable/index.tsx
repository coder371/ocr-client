import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import React, {ReactNode} from 'react';
import styles from './style';
import { colors } from '~/theme/colors';

interface CustomTouchableOpacityProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  activeOpacity?: number;
  loading?: boolean;
  loadingColor?: string;
  disabled?: boolean;
}

const CustomTouchableOpacity: React.FC<CustomTouchableOpacityProps> = ({
  children,
  style,
  onPress,
  activeOpacity = 0.5,
  loading,
  loadingColor = colors.white,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.pressable, style]}
      onPress={onPress}
      disabled={loading || disabled}
      activeOpacity={activeOpacity}>
      {loading ? (
        <ActivityIndicator size={23} color={loadingColor} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
