/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import ScreenTitle from '@common/components/molecules/screenTitle';
import styles from './styles';
import {colors} from '~/theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CustomTouchableOpacity from '~/common/components/atoms/pressable';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface ScreenProps {
  children: ReactNode;
  title?: string;
  header?: ReactNode;
  loading?: boolean;
  reload?: () => void;
  containerStyle?: {};
  flex?: number;
  showAbsoluteBackicon?: boolean;
  withScroll?: boolean;
}

const Screen: React.FC<ScreenProps> = ({
  children,
  title,
  header,
  loading,
  reload,
  containerStyle = {},
  flex,
  showAbsoluteBackicon,
  withScroll = false,
}: ScreenProps) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.screen]}>
      {header ? header : title ? <ScreenTitle title={title} /> : null}

      {showAbsoluteBackicon && (
        <CustomTouchableOpacity
          style={styles.backIcon}
          onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}>
          <AntDesign
            name={'arrowleft'}
            size={30}
            color={colors.white}
          />
        </CustomTouchableOpacity>
      )}
      {withScroll ? (
        <KeyboardAwareScrollView
          nestedScrollEnabled={false}
          refreshControl={
            <RefreshControl
              colors={[colors.primary]}
              refreshing={false}
              onRefresh={() => {
                reload ? reload() : undefined;
              }}
            />
          }
          showsVerticalScrollIndicator={false}
          style={[styles.screenContent]}
          contentContainerStyle={{
            flex: loading ? 1 : flex ? flex : 0,
          }}>
          {loading ? (
            <View />
          ) : (
            <View
              style={[
                containerStyle,
                title ? styles.screenContentWrapper : {},
              ]}>
              {children}
            </View>
          )}
        </KeyboardAwareScrollView>
      ) : loading ? (
        <View />
      ) : (
        <View
          style={[containerStyle, title ? styles.screenContentWrapper : {}]}>
          {children}
        </View>
      )}
    </View>
  );
};

export default Screen;
