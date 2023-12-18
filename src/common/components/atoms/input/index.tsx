import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import styles from './style';
import { colors } from '~/theme/colors';
import CustomTouchableOpacity from '../pressable';

interface CustomTextInputProps extends TextInputProps {
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  rightIconAction?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  style,
  placeholder,
  onChangeText,
  rightIcon,
  leftIcon,
  rightIconAction,
  keyboardType,
  secureTextEntry,
  numberOfLines,
  multiline,
  defaultValue,
}) => {
  return (
    <View style={styles.textInputContainer}>
      {rightIcon ? (
        <View style={styles.rightIconContainer}>{rightIcon}</View>
      ) : null}
      <TextInput
        style={[
          styles.textInput,
          rightIcon ? styles.rightPaddingIcon : {},
          style,
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.mute}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        numberOfLines={numberOfLines}
        multiline={multiline}
        defaultValue={defaultValue}
      />
      {leftIcon ? (
        <CustomTouchableOpacity
          style={styles.leftIconContainer}
          onPress={rightIconAction}>
          {leftIcon}
        </CustomTouchableOpacity>
      ) : null}
    </View>
  );
};

export default CustomTextInput;
