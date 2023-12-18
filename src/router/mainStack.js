import * as React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {FormScreen, Home, OnBoarding, ScanScreen} from '@screens/index';
const Stack = createSharedElementStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: {
            animation: 'spring',
            config: {
              stiffness: 1000,
              damping: 100,
            },
          },
          close: {
            animation: 'spring',
            config: {
              stiffness: 1000,
              damping: 100,
            },
          },
        },
      }}
      transitionSpec={{
        duration: 750,
        useNativeDriver: true,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FormScreen" component={FormScreen} />
      <Stack.Screen name="ScanScreen" component={ScanScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
    </Stack.Navigator>
  );
};

export default MainStack;
