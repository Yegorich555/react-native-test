import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from './navigationParams';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import imgAccount from '@images/accounts.png';
import imgHome from '@images/home.png';
import imgGiving from '@images/giving.png';
import imgPayments from '@images/payment.png';
import imgCards from '@images/cards.png';
import { RouteConfig, TabNavigationState } from '@react-navigation/native';
import {
  BottomTabNavigationEventMap,
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { DefaultColors } from '@/theme/defaultTheme';
import LinearGradient from 'react-native-linear-gradient';

type Props = StackScreenProps<NavigationParams, keyof NavigationParams>;

const Tab = createBottomTabNavigator<NavigationParams>();

function mapIconByRoute(route: Props['route']): ImageSourcePropType | null {
  switch (route.name) {
    case 'Home':
      return imgHome;
    case 'Accounts':
      return imgAccount;
    case 'Giving':
      return imgGiving;
    case 'Payments':
      return imgPayments;
    case 'Cards':
      return imgCards;
    default:
      console.warn('not defined');
      return null;
  }
}
export type TabNavigatorProps = {
  children: Array<
    RouteConfig<
      NavigationParams,
      keyof NavigationParams,
      TabNavigationState,
      BottomTabNavigationOptions,
      BottomTabNavigationEventMap
    >
  >;
};

function TabBarGradient(props: BottomTabBarProps<BottomTabBarOptions>) {
  return (
    <LinearGradient
      colors={['transparent', DefaultColors.tabActiveLink, 'transparent']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <BottomTabBar {...props} />
    </LinearGradient>
  );
}

export default function TabNavigator({ children }: TabNavigatorProps) {
  return (
    <Tab.Navigator
      screenOptions={({ route }: Props) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            source={mapIconByRoute(route)}
            style={{
              tintColor: focused
                ? DefaultColors.tabActiveLink
                : DefaultColors.tabInactiveLink,
            }}
          />
        ),
      })}
      tabBar={(props) => <TabBarGradient {...props} />}
      tabBarOptions={{
        activeTintColor: DefaultColors.tabActiveLink,
        inactiveTintColor: DefaultColors.tabInactiveLink,
        //todo with as WithAnimatedValue doesn't work
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          elevation: 0,
        } as StyleProp<ViewStyle>,
      }}>
      {(children as TabNavigatorProps['children']).map((v) => (
        <Tab.Screen key={v.name} {...v} />
      ))}
    </Tab.Navigator>
  );
}
