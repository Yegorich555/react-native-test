import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '../homeView';
import connectStore from '../../redux/connect';
import LoginView from '../loginView';
import { NavigationParams } from './navigationParams';

const RootStack = createStackNavigator<NavigationParams>();

interface NavigationInsideProps {
  isLogged: boolean;
}

function NavigationInside(props: NavigationInsideProps) {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {props.isLogged ? (
          <RootStack.Screen name="Home" component={HomeView} />
        ) : (
          <RootStack.Screen name="Login" component={LoginView} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const Navigation = connectStore((state) => ({ isLogged: !!state.userToken }))(
  NavigationInside,
);
export default Navigation;
