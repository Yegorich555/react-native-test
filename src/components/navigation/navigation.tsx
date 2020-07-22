import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '../homeView';
import connectStore from '../../redux/connect';
import LoginView from '../loginView';
import { NavigationParams } from './navigationParams';
import TabNavigator, { TabNavigatorProps } from './tabNavigator';
import AccountsView from '../accountsView';
import GivingView from '../givingView';
import PaymentsView from '../paymentsView';
import CardsView from '../cardsView';

const RootStack = createStackNavigator<NavigationParams>();

interface NavigationInsideProps {
  isLogged: boolean;
}

function NavigationInside(props: NavigationInsideProps) {
  return (
    <NavigationContainer>
      {props.isLogged ? (
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
