import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import HomeView from '../homeView';
import connectStore from '../../redux/connect';
import LoginView from '../loginView';
import { NavigationParams } from './navigationParams';
import TabNavigator, { TabNavigatorProps } from './tabNavigator';
import AccountsView from '../accountsView';
import GivingView from '../givingView';
import PaymentsView from '../paymentsView';
import CardsView from '../cardsView';
import CheckingView from '../checkingView';
import SavingsView from '../savingsView';
import HomeHeader from '../homeHeader';

const RootStack = createStackNavigator<NavigationParams>();

interface NavigationInsideProps {
  isLogged: boolean;
}

function HomeTabs({
  navigation,
  route,
}: StackScreenProps<NavigationParams, 'Home'>) {
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: (props) => (
  //       <HomeHeader {...props}>
  //         {/* {getFocusedRouteNameFromRoute(route)} */}
  //       </HomeHeader>
  //     ),
  //   });
  // }, [navigation, route]);

  return (
    <TabNavigator>
      {
        [
          { name: 'Home', component: HomeView },
          { name: 'Accounts', component: AccountsView },
          { name: 'Giving', component: GivingView },
          { name: 'Payments', component: PaymentsView },
          { name: 'Cards', component: CardsView },
        ] as TabNavigatorProps['children']
      }
    </TabNavigator>
  );
}

function NavigationInside(props: NavigationInsideProps) {
  return (
    <NavigationContainer>
      {props.isLogged ? (
        <RootStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <RootStack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerTitle: HomeHeader }}
          />
          <RootStack.Screen
            name="Checking"
            component={CheckingView}
            options={{ headerTitle: 'Checking2' }}
          />
          <RootStack.Screen
            name="Savings"
            component={SavingsView}
            options={{ headerTitle: 'Savings2' }}
          />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator>
          <RootStack.Screen name="Login" component={LoginView} />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
}

const Navigation = connectStore((state) => ({ isLogged: !!state.userToken }))(
  NavigationInside,
);
export default Navigation;
