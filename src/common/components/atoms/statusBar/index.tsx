import {View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

interface StatusBarProps {
  backgroundColor: string;
}
export default function StatusBarComponent({backgroundColor}: StatusBarProps) {
  return (
    <View
      style={[
        {
          height: StatusBar.currentHeight,
        },
        {backgroundColor},
      ]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={backgroundColor}
          barStyle={'light-content'}
        />
      </SafeAreaView>
    </View>
  );
}
