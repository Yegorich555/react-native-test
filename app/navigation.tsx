import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './components/homeView';
import connectStore from './redux/connect';
import LoginView from './components/loginView';

const Stack = createStackNavigator();

interface NavigationInsideProps {
  isLogged: boolean;
}

function NavigationInside(props: NavigationInsideProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.isLogged ? (
          <Stack.Screen name="Home" component={HomeView} />
        ) : (
          <Stack.Screen name="Login" component={LoginView} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Navigation = connectStore((state) => ({ isLogged: !!state.userToken }))(
  NavigationInside,
);
export default Navigation;
