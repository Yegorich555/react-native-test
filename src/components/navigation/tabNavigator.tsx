import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from './navigationParams';
import { Image, ImageSourcePropType } from 'react-native';
import imgAccount from '@images/accounts.png';
import imgHome from '@images/home.png';
import imgGiving from '@images/giving.png';
import imgPayments from '@images/payment.png';
import imgCards from '@images/cards.png';
import { RouteConfig, TabNavigationState } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

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
  return (
    <Tab.Navigator
      screenOptions={({ route }: Props) => ({
        tabBarIcon: () => {
          const iconName = mapIconByRoute(route);
          return <Image source={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      {(children as TabNavigatorProps['children']).map((v) => (
        <Tab.Screen key={v.name} {...v} />
      ))}
    </Tab.Navigator>
  );
}
