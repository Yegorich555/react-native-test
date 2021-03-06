import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from './navigationParams';
import { Image, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import imgAccount from '@images/accounts.png';
import imgHome from '@images/home.png';
import imgGiving from '@images/giving.png';
import imgPayments from '@images/payment.png';
import imgCards from '@images/cards.png';
import { RouteConfig, TabNavigationState } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { useMyTheme } from '@/theme/useMyTheme';

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

export default function TabNavigator({ children }: TabNavigatorProps) {
  const { theme } = useMyTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }: Props) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            source={mapIconByRoute(route)}
            style={{
              tintColor: focused
                ? theme.colors.tabActiveLink
                : theme.colors.tabInactiveLink,
            }}
          />
        ),
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.tabActiveLink,
        inactiveTintColor: theme.colors.tabInactiveLink,
        //todo with as WithAnimatedValue doesn't work
        style: {
          backgroundColor: theme.colors.tabBackground,
          elevation: 0,
        } as StyleProp<ViewStyle>,
      }}>
      {(children as TabNavigatorProps['children']).map((v) => (
        <Tab.Screen key={v.name} {...v} />
      ))}
    </Tab.Navigator>
  );
}
