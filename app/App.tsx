/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './components/homeView';
import DetailsView from './components/detailsView';
import MyThemeProvider from './theme';

const Stack = createStackNavigator();

function App() {
  return (
    <MyThemeProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{ title: 'My home' }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsView}
            //todo use with params navigation.navigate('Details2', {name:})
            // options={({route}: {route: any}) => ({title: route.params?.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyThemeProvider>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
