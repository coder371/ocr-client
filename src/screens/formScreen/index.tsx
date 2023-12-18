import {useNavigation, useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import CustomTextInput from '~/common/components/atoms/input';
import CustomTouchableOpacity from '~/common/components/atoms/pressable';
import CustomText from '~/common/components/atoms/text';
import styles from './style';
import Screen from '~/common/layouts/screen';
import Icon from '~/common/components/atoms/icon';

export const FormScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();

  return (
    <Screen containerStyle={styles.screen} getter withScroll>
      <View style={styles.inputContainer}>
        <CustomTextInput
          rightIcon={
            <Icon source={require('@assets/icons/phone.png')} size={'minism'} />
          }
          style={styles.input}
          placeholder={'sur_name'}
          defaultValue={params.sur_name}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomTextInput
          rightIcon={
            <Icon source={require('@assets/icons/phone.png')} size={'minism'} />
          }
          style={styles.input}
          placeholder={'given_name'}
          defaultValue={params.given_name}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomTextInput
          rightIcon={
            <Icon source={require('@assets/icons/phone.png')} size={'minism'} />
          }
          style={styles.input}
          placeholder={'birth_date'}
          defaultValue={params.birth_date}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomTextInput
          rightIcon={
            <Icon source={require('@assets/icons/phone.png')} size={'minism'} />
          }
          style={styles.input}
          placeholder={'issue_date'}
          defaultValue={params.issue_date}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomTextInput
          rightIcon={
            <Icon source={require('@assets/icons/phone.png')} size={'minism'} />
          }
          style={styles.input}
          placeholder={'expiry_date'}
          defaultValue={params.expiry_date}

        />
      </View>
    </Screen>
  );
};
