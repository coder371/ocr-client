import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import CustomText from '../text';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '~/theme/colors';
interface Option {
  title: string;
  value: string;
}
interface PickerProps {
  title: string;
  options?: Option[];
  modalTitle: string;
  onSelect: () => void;
}

const Picker = ({title, options = [], modalTitle, onSelect}: PickerProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const openPicker = () => {
    setModalVisible(true);
  };

  const closePicker = () => {
    setModalVisible(false);
  };

  const selectOption = option => {
    setSelectedOption(option);
    onSelect(option)
    closePicker();
  };

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity onPress={openPicker} style={styles.input}>
        <CustomText style={styles.inputText}>
          {selectedOption ? selectedOption.title : title}
        </CustomText>
        <AntDesign name="caretdown" size={25} color={colors.primary} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closePicker}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <CustomText>{modalTitle}</CustomText>
            </View>
            <FlatList
              data={options}
              style={styles.optionsContainer}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => selectOption(item)}
                    style={styles.option}>
                    <Text>{item.title}</Text>
                  </TouchableOpacity>
                );
              }}
            />
            <TouchableOpacity onPress={closePicker} style={styles.cancelOption}>
              <CustomText style={styles.cancelButton}>إلفاء</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Picker;
