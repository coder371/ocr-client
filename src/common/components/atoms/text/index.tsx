import {StyleProp, TextStyle} from 'react-native';
import React, {ReactNode} from 'react';
import textStyle from './textStyle';
import {Text} from 'react-native-paper';

interface CustomTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  numberOfLines,
}) => {
  return (
    <Text style={[textStyle.text, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default CustomText;
