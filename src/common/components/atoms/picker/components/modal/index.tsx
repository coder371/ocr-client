import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import CustomText from '../../../text';
import Styles from './style';

interface PickerProps {
  isVisible: boolean;
}

export default function OptionsModal({isVisible}: PickerProps) {
  return (
    <Modal isVisible={isVisible}>
      <View style={Styles.modalContainer}>
        <CustomText>test</CustomText>
      </View>
    </Modal>
  );
}
