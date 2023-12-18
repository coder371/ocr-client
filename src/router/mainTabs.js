import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {View, Platform} from 'react-native';
import {useTranslation} from 'react-i18next';

import {useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import CustomTouchableOpacity from '@common/components/atoms/pressable';
import CustomText from '@common/components/atoms/text';
import Icon from '@common/components/atoms/icon';
// import UnLogedIn from '@common/components/templates/unLogedIn';
import { colors } from '~/theme/colors';

import {
  SplashScreen,
  HomeScreen,
  AccountScreen,
  UnLogedIn,
} from '@screens/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import metrics from '~/theme/metrics';
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const {user} = useSelector(state => state.user);
  const {t} = useTranslation();
  const tabsData = useMemo(
    () =>
      [
        {
          name: 'Home',
          component: HomeScreen,
          label: t('home'),
          activeIcon: (
            <AntDesign name={'home'} size={25} color={colors.primary} />
          ),
          inactiveIcon: (
            <AntDesign name={'home'} size={25} color={colors.mute} />
          ),
        },
        {
          name: 'myRequests',
          component: user ? SplashScreen : UnLogedIn,
          label: t('myRequests'),
          activeIcon: (
            <AntDesign name={'profile'} size={25} color={colors.primary} />
          ),
          inactiveIcon: (
            <AntDesign name={'profile'} size={25} color={colors.mute} />
          ),
        },
        {
          name: 'Wallet',
          component: user ? SplashScreen : UnLogedIn,
          label: t('wallet'),
          activeIcon: (
            <AntDesign name={'wallet'} size={25} color={colors.primary} />
          ),
          inactiveIcon: (
            <AntDesign name={'wallet'} size={25} color={colors.mute} />
          ),
        },
        {
          name: 'Account',
          component: user ? AccountScreen : UnLogedIn,
          label: t('myAccount'),
          activeIcon: (
            <AntDesign name={'user'} size={25} color={colors.primary} />
          ),
          inactiveIcon: (
            <AntDesign name={'user'} size={25} color={colors.mute} />
          ),
        },
      ].reverse(),
    [t, user],
  );

  return (
    <Tab.Navigator
      // tabBar={props => <MyTabBar {...props} tabsData={tabsData} />}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.white,
          height: metrics.tabsBarHeight,
          borderRadius: 0,
        },

        tabBarShowLabel: false,
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
      initialRouteName="Home">
      {tabsData.map((tab, i) => (
        <Tab.Screen
          key={i}
          name={tab.name}
          component={tab.component}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <View style={{marginBottom: 3}}>
                    {focused ? tab.activeIcon : tab.inactiveIcon}
                  </View>
                  <View>
                    <CustomText
                      style={{color: focused ? colors.primary : colors.mute}}>
                      {tab.label}
                    </CustomText>
                  </View>
                </View>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainTabs;
