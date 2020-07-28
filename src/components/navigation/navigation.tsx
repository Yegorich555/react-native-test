import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '../home/homeView';
import connectStore from '../../redux/connect';
import LoginView from '../loginView';
import { NavigationParams } from './navigationParams';
import TabNavigator, { TabNavigatorProps } from './tabNavigator';
import AccountsView from '../accountsView';
import GivingView from '../givingView';
import PaymentsView from '../paymentsView';
import CardsView from '../cardsView';
import CheckingView from '../checking/checkingView';
import SavingsView from '../savingsView';
import HomeHeaderTitle from '../home/homeHeaderTitle';
import CheckingHeaderTitle from '../checking/checkingHeaderTitle';
import { useMyTheme } from '@/theme/useMyTheme';
import SavingsHeaderTitle from '../savings/savingsHeaderTitle';
import HeaderRight from '../headerRight';

const RootStack = createStackNavigator<NavigationParams>();

interface NavigationInsideProps {
  isLogged: boolean;
}

function HomeTabs() {
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
  const { theme } = useMyTheme();
  return (
    <NavigationContainer>
      {props.isLogged ? (
        <RootStack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: theme.colors.headerBackground },
            headerTintColor: theme.colors.headerTitle,
            headerRight: (p) => <HeaderRight {...p} />,
          }}>
          <RootStack.Screen
            name="Home"
            component={HomeTabs}
            options={{
              headerTitle: () => <HomeHeaderTitle />,
            }}
          />
          <RootStack.Screen
            name="Checking"
            component={CheckingView}
            options={{
              headerTitle: (p) => <CheckingHeaderTitle {...p} />,
            }}
          />
          <RootStack.Screen
            name="Savings"
            component={SavingsView}
            options={{
              headerTitle: (p) => <SavingsHeaderTitle {...p} />,
            }}
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
