import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  View,
  TextStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import styles from './style';
import {colors} from '~/theme/colors';
import CustomText from '../text';

interface ButtonProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  buttonViewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  activeOpacity?: number;
  loading?: boolean;
  loadingColor?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  buttonViewStyle,
  textStyle,
  onPress,
  activeOpacity = 0.5,
  loading,
  loadingColor = colors.white,
  disabled,
}) => {
  return (
    <View style={[styles.buttonView, buttonViewStyle]}>
      <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
        disabled={loading || disabled}
        activeOpacity={activeOpacity}>
        {loading ? (
          <ActivityIndicator size={22} color={loadingColor} />
        ) : (
          <CustomText style={[styles.buttonText, textStyle]}>
            {title}
          </CustomText>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
