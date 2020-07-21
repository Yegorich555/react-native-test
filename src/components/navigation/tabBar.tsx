import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from './navigationParams';
import { Image, ImageSourcePropType } from 'react-native';
import imgAccount from '@/assets/images/accounts.png';

type Props = StackScreenProps<NavigationParams, keyof NavigationParams>;

const Tab = createBottomTabNavigator();

function mapIconByRoute(route: Props['route']): ImageSourcePropType {
  switch (route.name) {
    case 'Home':
      return imgAccount;
  }
}

export default function TabBar({ children }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }: Props) => ({
        tabBarIcon: () => {
          const iconName = mapIconByRoute(route);

          // You can return any component that you like here!
          return <Image source={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      {children}
    </Tab.Navigator>
  );
}
