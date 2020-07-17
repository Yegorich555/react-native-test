/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import MyThemeProvider from './theme';
import Navigation from './navigation';
import initStore from './redux/store';

const { store, persistor } = initStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyThemeProvider>
          <StatusBar barStyle="dark-content" />
          <Navigation />
        </MyThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
