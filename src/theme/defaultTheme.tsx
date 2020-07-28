import React from 'react';
import { ThemeProvider, Theme } from 'react-native-elements';

export const DefaultColors = {
  tabActiveLink: '#d73373', //rose
  tabInactiveLink: 'black',
};

type ExtraTheme = {
  colors: {
    headerTitle: string;
    headerBackground: string;
  };
};

export const defaultTheme: Theme & ExtraTheme = {
  Button: {
    raised: true,
  },
  colors: {
    headerTitle: 'white',
    headerBackground: '#d73373', //rose
  },
  Header: {
    backgroundColor: '#d73373',
    style: {
      alignItems: 'center',
    },
  },
};

export default function DefaultThemeProvider({ children }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
