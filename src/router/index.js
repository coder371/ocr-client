import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './mainStack';
import {navigationRef} from './RootNavigation';
import {SafeAreaView} from 'react-native';

export default function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={{flex: 1}}>
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}
